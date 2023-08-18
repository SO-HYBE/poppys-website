'use client'
import Hero from './components/hero'
import Navbar from './components/navbar'
import head from '../public/red-svg.svg'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import localFont from 'next/font/local'
import hov from '../public/white-svg.svg';
import About from './components/about';
import Catalog from './components/catalog';
import Merch from './components/merch';
import Footer from './components/footer'
import {Poppins} from 'next/font/google';

const bulleto = localFont({ src: './styles/BULLETTO-KILLA.ttf', variable: '--bulleto' })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["300" , "100" , "200" , "400" , "500" , "600" , "700" , "800" , "900"]
})
export default function Home() {
  //-------- Lenis Smooth Scroll---------
  useEffect(()=>{
    const lenis = new Lenis()
  
    lenis.on('scroll', (e: any) => {
      console.log(e)
    })
    
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])

   if (typeof window !== 'undefined') {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
   }

  return (
    <main className={`${bulleto.variable} ${poppins.variable} font-sans z-10 absolute`}>
      <Navbar src={head} hov={hov} />
      <Hero />
      <About />
      <Catalog />
      <Merch />
      <Footer/>
    </main>
  )
}
