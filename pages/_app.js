import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    </>
}

    export default MyApp
