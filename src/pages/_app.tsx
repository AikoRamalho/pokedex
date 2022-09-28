import type { AppProps } from 'next/app'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { DehydratedState } from '@tanstack/react-query'

import { Header } from '../components/Header'

import "../styles/global.scss"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Header />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
