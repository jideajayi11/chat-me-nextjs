import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Box from '@mui/material/Box'
import { ApolloProvider, client } from '../apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box sx={{ backgroundColor: "#eee", height: "100vh" }}>
        <Component {...pageProps} />
      </Box>
    </ApolloProvider>
  )
}

export default MyApp
