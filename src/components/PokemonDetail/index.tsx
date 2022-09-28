import Image from "next/image"

import styles from './styles.module.scss'

// esse design foi inspirado no https://www.pokemon.com/br/pokedex/

export function PokemonDetail({ pokemon }: any) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <p>id: #{pokemon.id}</p>
      <h2> Sprites </h2>
      <h3> Front Default: </h3> 
      <Image
        src={pokemon.sprites.front_default}
        width="200"
        height="200"
        alt={`${pokemon.name}-front_default`}
      />
      <h3> Back Default: </h3>
      <Image
        src={pokemon.sprites.back_default}
        width="200"
        height="200"
        alt={`${pokemon.name}-back_default`}
      />
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item: any, index: any) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}