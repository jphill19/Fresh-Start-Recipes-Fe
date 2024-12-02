import Header from '../components/header/header.component'
import { StoreLocationProvider } from '../context/StoreLocationContext'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About our company." />
      </Head>
      <main>
        <StoreLocationProvider>
          <Header />
          <Component {...pageProps} />
        </StoreLocationProvider>
      </main>
    </>
  )
}
