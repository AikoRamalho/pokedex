import { useEffect, useState } from "react"
import Image from "next/image"

interface PokemonCardProps {
  name: string
  url: string
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const [pokeImage, setPokeImage] = useState("")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokeImage(data.sprites?.front_default))
  }, [url])

  return (
    <>
      <h1>{name}</h1>
      <Image
        src={pokeImage}
        alt={name}
        width={200}
        height={200}
      />
    </>
  )
}