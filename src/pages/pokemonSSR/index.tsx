import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import { PokemonCard } from "../../components/PokemonCard";
import styles from "../../styles/pokemonSSR.module.scss";
import { Search } from "../../components/Search";

function getApiLink(page: number){
  return `https://pokeapi.co/api/v2/pokemon?offset=${(page-1)*10}&limit=10`
}

interface Pokemon {
  name: string
  url: string
}

export async function getServerSideProps(context: { query: { page: string; }; }) {
  let page = 1
  if (context.query?.page) {
    page = parseInt(context.query.page)
  }
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ["pokemon", page],
    async () =>
      await fetch(
        getApiLink(page)
      ).then((result) => result.json())
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default function PokemonSSR(_props: any) {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page! as string) || 1);

  
  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        getApiLink(page)
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  
  function handlePaginationChange(_e: any, value: number) {
    setPage(value)
    router.push(`pokemonSSR/?page=${value}`, undefined, { shallow: true })
  }

  return(
    <div>
      <div className={styles.search}>  
        <Search />
      </div>
      <Pagination
        className={styles.pagination}
        count={Math.ceil(data?.count/10)}
        page={page}
        onChange={handlePaginationChange}
      />
      <div className={styles.grid}>
      {data?.results?.map((pokemon: Pokemon, index: any) => (
        <PokemonCard key={pokemon.name} id={page > 1 ? (page-1)*10 + index+1 : index+1} name={pokemon.name} />
      ))}
    </div>
    </div>
  )
}