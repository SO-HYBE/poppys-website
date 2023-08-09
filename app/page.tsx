'use client'
import Hero from './components/hero'
import Navbar from './components/navbar'
import head from '../public/red-svg.svg'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import localFont from 'next/font/local'
import hov from '../public/white-svg.svg';
import About from './components/about';

const bulleto = localFont({ src: './styles/BULLETTO-KILLA.ttf', variable: '--bulleto' })

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

  // if (typeof window !== 'undefined') {
  //  document.body.scrollTop = document.documentElement.scrollTop = 0;
  // }

  return (
    <main className={`${bulleto.variable} font-sans`}>
      <Navbar src={head} hov={hov}/>
      <Hero/>
      <About/>
    </main>
  )
}
