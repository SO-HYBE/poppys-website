'use client'
import Hero from './components/hero'
import head from '../public/red-svg.svg'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import localFont from 'next/font/local'
import hov from '../public/white-svg.svg'

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


  return (
    <main className={`${bulleto.variable} font-sans`}>
      <Hero src={head} hov={hov} />
    </main>
  )
}
