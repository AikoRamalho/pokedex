export const  getStaticProps = async (context: any) => {
  const { pokemonName } = context.params

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())

  return {
    props: {
      pokemon
    }
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
  console.log('pokemon ', pokemon)
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <div> baseexp: {pokemon.base_experience} </div>
      <div> altura: {pokemon.height} </div>
      <div> peso: {pokemon.weight} </div>
      <div> id: {pokemon.id} </div>
      <div> types: </div>
      {pokemon.types.map((type: { type: { name: any; }; }) => (
        <div key={type.type.name}> {type.type.name} </div>
      ))}

    </div>
  )
}