import { useEffect, useState } from "react"
import { PokemonCard } from "../PokemonCard"

import styles from "./styles.module.scss"


interface Pokemon {
  name: string
  url: string
}

export function PokemonGrid() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
  }, [])

  return (
    <div className={styles.grid}>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  )
}