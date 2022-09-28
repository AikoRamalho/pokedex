import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'

interface Pokemon {
  name: string
  url: string
}

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
  }, [])

  return (
    <>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </>
  )
}

export default Home
