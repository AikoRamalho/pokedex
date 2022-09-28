import type { AppProps } from 'next/app'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "../styles/global.scss"
import { Header } from '../components/Header'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
