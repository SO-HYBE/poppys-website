import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import hero from '../../public/hero-img.webp'
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Hero(){

  //------------------ Hero content animation -----------------
    const ref  : any= useRef();
    const ctx = gsap.context(ref);
    useIsomorphicLayoutEffect(() => {
      ctx.add(() => {
        var tl : GSAPTimeline = gsap.timeline({defaults: {duration:1, ease: 'power3.in'}});
        tl.to(".overlay", {y: "-100%", duration: 1.2, ease: "power4.inOut"})
        tl.fromTo(".bg-vid", {scale: 1.2},  {scale: 1, duration: 1.4 , ease: "power4.inOut", visibility: 'visible', autoAlpha: 1});
        if (typeof window !== 'undefined') {
              window.requestAnimationFrame(function() {

                const myText = new SplitType('.text-move',{
                  types: "words, chars",
                  charClass: "special"
                })
                gsap.to('.special',{
                  y: 0,
                  stagger: 0.05,
                  delay:2,
                  duration: .1,
                  visibility: 'visible',
                  autoAlpha: 1
                })
                var tl1 : GSAPTimeline = gsap.timeline({
                  scrollTrigger: {
                    trigger: '.hero',
                    pin: true,
                    pinSpacing: "margin",
                    scrub: 1,
                    start: '10% start',
                    end: '1800vw center'
                  },
                  defaults: {
                    delay:0
                  }
                })
                tl1.to('.span-container',{duration:1.5, y:-1000, delay: 0})
                const mediaQuery = window.matchMedia('(min-width: 768px)')
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
                
             });
    }});
      return () => ctx.revert();
    }, []);


    return (

      <><section className="hero-section">
        <div className="hero h-[115vh] overflow-hidden pb-[50vh]" ref={ref}>
          <div className="hero-content absolute z-10 top-[18vh] text-white">
            <div className="span-container flex flex-col mt-[10rem] ml-[4vw] font-bulleto">
              <div className="upper-span mb-[-10px]">
              <span className="text-move span-1 pl-[5px]">Taste</span>
              <span className="text-move pl-3 span-2">Of</span>
              </div>
              <span className="text-move span-3">Nostalgia</span>
            </div>
          </div>
          <div className="hero-bg-vid overflow-hidden relative z-[-99] w-auto flex">
            <div className="overlay absolute top-0 left-0 right-0 bottom-0 z-10"></div>
            <Image fetchPriority="high" priority width={1920} height={1080} className="bg-vid h-[120vh] block w-[100vw] object-cover justify-center" src={hero} alt="main picture of poppy sliding into view"></Image>
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