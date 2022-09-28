import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"

interface PokemonCardProps {
  name: string
  id: number
}

export function PokemonCard({ id, name }: PokemonCardProps) {
  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>{name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
        alt={name}
        width={200}
        height={200}
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