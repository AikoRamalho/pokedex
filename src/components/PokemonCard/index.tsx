import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./styles.module.scss"

interface PokemonCardProps {
  name: string
  url: string
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const [pokeImage, setPokeImage] = useState("https://e1.pngegg.com/pngimages/614/418/png-clipart-jsplaylist-loading-icon-thumbnail.png")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokeImage(data.sprites?.front_default))
  }, [url])

  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <Image
        src={pokeImage}
        alt={name}
        width={200}
        height={200}
      />
    </div>
  )
}