import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

function getApiLink(page: number){
  return `https://pokeapi.co/api/v2/pokemon?offset=${(page-1)*10}&limit=10`
}

export async function getServerSideProps(context: { query: { page: string; }; }) {
  let page = 1
  if (context.query?.page) {
    page = parseInt(context.query.page)
  }
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ["pokemon", page],
    async () =>
      await fetch(
        getApiLink(page)
      ).then((result) => result.json())
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default function PokemonSSR(_props: any) {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page! as string) || 1);

  
  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        getApiLink(page)
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  console.log('data', data);
  return(
    <div>
      <h1>PokemonSSR</h1>
    </div>
  )
}