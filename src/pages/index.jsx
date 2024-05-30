import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { ShkarkoLibrin } from '@/components/ShkarkoLibrin'
import { Screencasts } from '@/components/Screencasts'


export default function Home() {
  return (
    <>
      <Head>
        <title>
Madox Tea 
       </title>
        <meta
          name="madoxtea"
          content="Madox Tea"
        />
      </Head>
      <Hero />
      <NavBar />
      {/*<Screencasts />*/}
      <FreeChapters />
      <Pricing />
      <ShkarkoLibrin />
      <Footer />
    </>
  )
}
