import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger , CustomEase } from "gsap/all";
import Image, { StaticImageData } from "next/image";
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import SplitType from "split-type";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

export default function Hero(props:{main:StaticImageData, hero: StaticImageData}){

  //------------------ Hero content animation -----------------
    const ref  : any= useRef();
    const ctx = gsap.context(ref);
    useIsomorphicLayoutEffect(() => {
      ctx.add(() => {
        var tl : GSAPTimeline = gsap.timeline({defaults: {duration:1, ease: 'power3.in'}});
        tl.to('.hero-bg-vid',{duration:1, y:0 ,autoAlpha:1, visibility: 'visible'})
        if (typeof window !== 'undefined') {
              window.requestAnimationFrame(function() {
              const splitHead = document.querySelectorAll('.span-container')
              splitHead.forEach((char,i) => {
              const head = new SplitType(char as HTMLElement, { types: 'words, chars' })
              gsap.set(head.chars, {y: 300, visibility: 'hidden'})
              gsap.to(head.chars, {y:0, autoAlpha:1, ease: 'power3.in', duration:1.5, stagger: 0.008, visibility: 'visible'})
              gsap.to('.span-container', {y:0, autoAlpha:1, ease: 'power3.in', duration:1.5, visibility: 'visible'})
            })
            tl.to('#details',{duration:1.5, y:0 ,autoAlpha:1, visibility: 'visible'})
            tl.to('.main',{y:0,x:0, autoAlpha:1, ease:'back.out', visibility: 'visible'})   
             });
        var tl1 : GSAPTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.hero',
            pin: true,
            scrub: 1,
            start: '10% start',
            end: '1800vw center'
          },
          defaults: {
            delay:0
          }
        })
        tl1.to('.text-move',{duration:1.5, y:-500, delay: 0})
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
          tl1.to('.main', {y:1000,x:-1000, duration:1.5, ease:'back.in', display:'none', delay: 0})
        }
        tl1.to('.hero-p', {display: 'none', delay: 0})
        tl1.to('.hero', {backgroundColor: '#ffc0cb'})
        tl1.to('.hero-content', {visibility: 'hidden'})
        const mediaQuery1 = window.matchMedia('(min-width: 2560px)')
        // Check if the media query is true
        if (mediaQuery1.matches) {
          tl1.to('.bg-vid',{scale: '0.6 0.8' , duration:2.5, position: 'relative' , borderRadius:'10px', delay: 2})
        }
        tl1.to('.bg-vid',{scale: '0.6 0.8' , duration:2.5, position: 'relative' , borderRadius:'10px', delay: 0})
        tl1.to('.marq', {y:"-40vh", duration:2, ease: "power4.out",autoAlpha:1, visibility:"visisble" ,stagger:1})
        tl1.to('.marquee', {duration:1, ease: "power4.out",autoAlpha:1, visibility:"visisble"})
        tl1.to('.marquee-2', {duration:0.5, ease: "power4.out",autoAlpha:1, visibility:"visisble"})
        tl1.to('.marquee-3', {duration:1,delay:0.5, ease: "power4.out",autoAlpha:1, visibility:"visisble"})
        
    }});
      return () => ctx.revert();
    }, []);


    return (

      <><section className="">
        <div className="hero h-[115vh] overflow-hidden pb-[50vh]" ref={ref}>
          <div className="hero-content absolute z-10 top-[18vh] text-[2.3em] text-white h-[70vh]">
            <div className="span-container mt-[5vh] -ml-5 font-bulleto text-move">
              <span className="hero-text upper block ml-[10vw]">Life is like</span>
              <span className="hero-text upper block ml-[15vw]">an Ice cream...</span>
              <span className="hero-text block ml-[20vw]">Enjoy it before</span>
              <span className="hero-text block ml-[25vw]">it meltsss..</span>
            </div>
            <div className="rigth-cont flex flex-col basis-[50vh]">
              <div className="hero-p text-[.390em] pl-[6vw] pr-[1vw] w-[90vw] h-[70vh] mt-[3vh]">
                <p className="text-move" id="details">Welcome to Poppy's, where nostalgia takes center stage and every scoop of ice cream is a ticket to cherished memories. We're not just an ice cream shop; we're a time-traveling adventure back to the carefree days of yesteryears.</p>
                <div className="h-fit main hidden w-fit">
                  <Image className="pict -rotate-45 mt-[5vh] ml-[3vw]" priority src={props.main} alt={""} style={{
          width: '70%',
          objectFit: 'contain',
          height: 'auto',
        }}></Image>
                </div>
              </div>
            </div>

          </div>
          <div className="hero-bg-vid relative z-[-99] w-auto flex">
            <Image priority className="bg-vid h-[120vh] w-[100vw] object-cover justify-center" src={props.hero} alt="main picture of poppy sliding into view"></Image>
          </div>
          <div className="marq h-[50vh]">
            <div className="marquee">
            <div className="marquee__group">
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>

            </div>
            <div className="marquee__group" aria-hidden="true">
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
            </div>
            </div>
            <div className="marquee-2">
            <div className="marquee__group-2 marquee__group">
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>

            </div>
            <div className="marquee__group-2 marquee__group" aria-hidden="true">
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
            </div>
            </div>
            <div className="marquee-3">
            <div className="marquee__group">
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>

            </div>
            <div className="marquee__group" aria-hidden="true">
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
              <span>Too Hot?!➺</span>
            </div>
            </div>
          </div>
        </div>
      </section></>
    );
}