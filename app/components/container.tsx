'use client'
import Hero from './hero'
import Navbar from './navbar'
import head from '../../public/red-svg.svg'
import hov from '../../public/white-svg.svg';
import About from './about';
import Catalog from './catalog';
import Merch from './merch';
import Footer from './footer'
import heroImg from '../../public/hero-img.png'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'


export default function Container(){
    useEffect(()=>{
        const lenis = new Lenis()
      
        function raf(time: any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
      },[])

      return(
        <>
            <Navbar src={head} hov={hov} />
            <Hero/>
            <Catalog />
            <Footer/>
        </>
      )
}