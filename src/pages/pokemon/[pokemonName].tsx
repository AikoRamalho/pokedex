import { PokemonDetail } from "../../components/PokemonDetail"

export const  getStaticProps = async (context: any) => {
  try {
    const { pokemonName } = context.params
  
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
  
    return {
      props: {
        pokemon
      }
    }
  } catch(e) {
    return { notFound: true }
  }
}

export const  getStaticPaths = async () => {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
    .then((response) => response.json())

  const paths = pokemons.results.map((pokemon: { name: any }) => {
    return {
      params: {
        pokemonName: pokemon.name
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default function Pokemon({ pokemon }: any){
  return (
    <PokemonDetail pokemon={pokemon} />
  )
}