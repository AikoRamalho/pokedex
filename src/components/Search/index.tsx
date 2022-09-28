import { useRouter } from "next/router";
import { useState } from "react";

export function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSearchChange(e: any) {
    setSearch(e.target.value);
  }

  function onClick() {
    router.push(`loading/pokemon?name=${search}`);
  }
  return(
    <>
      <input onChange={handleSearchChange}></input>
      <button onClick={onClick}> buscar </button>
    </>
  )
}