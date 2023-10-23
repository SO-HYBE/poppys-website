import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import hero from '../../public/hero.webp'
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
                tl1.to('.span-button',{duration:1.5, y:-1000, delay: 0})
                const mediaQuery = window.matchMedia('(min-width: 768px)')
                tl1.to('.hero', {backgroundColor: '#ffc0cb'})
                tl1.to('.hero-content', {visibility: 'hidden'})
                const mediaQuery1 = window.matchMedia('(min-width: 2560px)')
                // Check if the media query is true
                if (mediaQuery1.matches) {
                  tl1.to('.bg-vid',{scale: '0.6 0.8' , duration:2.5, position: 'relative' , delay: 2})
                }
                tl1.to('.bg-vid',{scale: '0.6 0.8' , duration:2.5, position: 'relative' , delay: 0})
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
          <div className="hero-content absolute z-10 h-[95vh] w-screen top-0 left-0 flex items-end text-white px-[4vw]">
            <div className="span-container flex flex-col font-bulleto leading-[1.2] pb-2">
              <div className="upper-span">
              <span className="text-move span-1 pl-[5px]">Taste</span>
              <span className="text-move pl-3 span-2">Of</span>
              </div>
              <span className="text-move span-3">Nostalgia</span>
            </div>
          </div>
          <div className="hero-bg-vid overflow-hidden relative z-[-99] w-auto flex bg-[#fefae0]">
            <div className="overlay absolute top-0 left-0 right-0 bottom-0 z-10"></div>
            <Image fetchPriority="high" priority width={1920} height={1080} className="bg-vid h-[120vh] block w-[100vw] object-cover justify-center" src={hero} alt="girl enjoying poppy's icecream" />
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
            <div className="marquee__group-2 marquee__group2">
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>
              <span>GET POPPY'S➺</span>

            </div>
            <div className="marquee__group-2 marquee__group2" aria-hidden="true">
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