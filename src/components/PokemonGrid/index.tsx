import { Fragment } from 'react';
import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"

import { Pokemon } from '../../types/Pokemon';
import { PokemonCard } from "../PokemonCard"
import { Search } from '../Search';
import styles from "./styles.module.scss"


function getPokemonId(indexPage: number, index: number) {
  return (indexPage * 10) + index + 1
}

export function PokemonGrid() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['pokemon'],
    async ({ pageParam = 'https://pokeapi.co/api/v2/pokemon?limit=10' }) =>
      await fetch(
        pageParam
      ).then((result) => result.json()),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          return lastPage.next;
        }
      },
    }
  );


  return (
    <>
      <div className={styles.search}>  
        <Search />
      </div>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 10}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          <div className={styles.grid}>
            {data?.pages.map((page, indexPage) => (
              <Fragment key={indexPage}>
                {page.results.map((pokemon: Pokemon, index: number) => (
                  <PokemonCard key={pokemon.name} id={getPokemonId(indexPage, index)} name={pokemon.name} />
                ))}
              </Fragment>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  )
}