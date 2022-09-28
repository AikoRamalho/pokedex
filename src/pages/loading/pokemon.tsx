import router from "next/router"
import { useEffect } from "react"

// Por que criei um componente de Loading?
// Por dois motivos, como a página pokemon/index.tsx é uma página estática,
// ela não tem o conceito de loading, então criei um componente de loading
// para ser usado em todas as páginas que precisam de loading.

// e porque aqui podemos exibir um Skeleton do pokemon que será montado (pensando em melhor UI/UX)


export default function LoadingPokemon() {

  useEffect(() => {
    const { name } = router.query
    if (name) {
      router.push(`/pokemon/${name}`)
    }else{
      router.push('/')
    }
  }, [])

  return (
    <div> Loading... </div>
  )  
}