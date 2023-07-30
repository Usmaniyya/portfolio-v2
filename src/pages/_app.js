import '@/styles/globals.css'
import { Ubuntu } from '@next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favico.ico" />
      </Head>
      <main
        className={`${ubuntu.variable} font-sans  bg-light  dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
