import { useState } from "react"
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"

interface PokemonCardProps {
  name: string
  id: number
}

export function PokemonCard({ id, name }: PokemonCardProps) {
  const [imgSrc, setImgSrc] = useState<string>(`https://cdn.traction.one/pokedex/pokemon/${id}.png`)
  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>{name}</h1>
      <Image
        src={imgSrc} // uso esse link para não ter que fazer fetch de novo aqui dentro
        alt={name}
        width={200}
        height={200}
        onErrorCapture={() => setImgSrc("https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3136/image-not-found.jpg")}
      />
      <Link
        href={`loading/pokemon?name=${name}`}
      >
        <span>
          <a className={styles.textButton}> Saiba Mais </a>
        </span>
      </Link>
    </div>
  )
}