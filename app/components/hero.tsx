import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import melt from '../../public/static/videos/melt.mp4';
import Image, { StaticImageData } from "next/image";
import main from '../../public/skate.png'
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Hero(props:{src:StaticImageData, hov: StaticImageData}){

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  //------------ Button animtion -----------------
  useEffect(()=> {

    document.querySelectorAll('.button').forEach(button => {

    let div = document.createElement('div'),
        letters = (button.textContent as String).trim().split('');

    function elements(letter:string , index:number, array:Array<string>) {

        let element = document.createElement('span'),
            part = (index >= array.length / 2) ? -1 : 1,
            position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
            move = position / (array.length / 2),
            rotate = 1 - move;

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
        element.style.setProperty('--move', move as any);
        element.style.setProperty('--rotate', rotate as any);
        element.style.setProperty('--part', part as any);

        div.appendChild(element);

    }

    letters.forEach(elements);

    button.innerHTML = div.outerHTML;

    button.addEventListener('mouseenter', e => {
        if(!button.classList.contains('out')) {
            button.classList.add('in');
        }
    });

    button.addEventListener('mouseleave', e => {
        if(button.classList.contains('in')) {
            button.classList.add('out');
            setTimeout(() => button.classList.remove('in', 'out'), 950);
        }
    });

    });
  
  },[])

  //------------------ Hero content animation -----------------
    const ref  : any= useRef();
    const ctx = gsap.context(ref);
    useIsomorphicLayoutEffect(() => {
      ctx.add(() => {
        var tl : GSAPTimeline = gsap.timeline({defaults: {duration:1, ease: 'power3.in'}});
        tl.to('.hero-bg-vid',{duration:1.5, y:0 ,autoAlpha:1, visibility: 'visible'})
        if (typeof window !== 'undefined') {
              window.requestAnimationFrame(function() {
              const splitHead = document.querySelectorAll('.span-container')
              splitHead.forEach((char,i) => {
              const head = new SplitType(char as HTMLElement, { types: 'chars' })
              gsap.to(head.chars, {y:0, autoAlpha:1, ease: 'power3.in', duration:1.5, stagger: 0.008, visibility: 'visible'})
              gsap.to('.span-container', {y:0, autoAlpha:1, ease: 'power3.in', duration:1.5, visibility: 'visible'})
            })
            tl.to('#details',{duration:1.5, y:0 ,autoAlpha:1, visibility: 'visible'})
            tl.to('.main',{y:0,x:0, autoAlpha:1, ease:'back', visibility: 'visible'})   
             });
    }});
      return () => ctx.revert();
    }, []);


    return (

      <><section>
        <div className="hero bg-[#00000061]" ref={ref}>

          <header className="hero-head flex justify-between fixed z-[99] w-full top-0 left-0">
            <div className="hover:height-[7vh]" id="img-cont" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="#"><Image className="h-[6vh] w-auto left-0 mt-[3.5vh] ml-[5vw] logo " priority src={isHovering ? props.hov : props.src} alt="LOGO"></Image></a>
            </div>
            <nav className="font-bulleto">
              <ul className="nav-item text-[2.75vh] flex gap-1 flex-row items-center justify-center mt-[3vh] mr-[6vw]">
                <li><button className="button sm-dev md-dev alternative">Home</button></li>
                <li><button className="button alternative">Catalog</button></li>
                <li><button className="button sm-dev alternative">About Us</button></li>
                <li><button className="button alternative">Contact Us</button></li>
              </ul>
            </nav>
          </header>
          <div className="hero-content absolute z-10 top-[20vh] text-[2.3em] text-white h-[70vh]">
            <div className="span-container mt-[5vh] -ml-5 font-bulleto">
              <span className="hero-text upper block ml-[10vw]">Life is like</span>
              <span className="hero-text upper block ml-[15vw]">an Ice cream...</span>
              <span className="hero-text block ml-[20vw]">Enjoy it before</span>
              <span className="hero-text block ml-[25vw]">it meltsss..</span>
            </div>
            <div className="rigth-cont flex flex-col basis-[50vh]">
              <div className="hero-p text-[.390em] pl-[6vw] pr-[1vw] w-[90vw] h-[70vh] mt-[10vh]">
                <p id="details">Indulge in the delightful world of ice creams! From creamy classics to exotic flavors, these frozen treats offer a sweet escape on hot days, creating moments of pure bliss</p>
                <div className="h-fit main hidden w-fit">
                  <Image className="pict -rotate-45 mt-[5vh] ml-[3vw]" priority src={main} alt={""} style={{
          width: '70%',
          objectFit: 'contain',
          height: 'auto',
        }}></Image>
                </div>
              </div>
            </div>

          </div>
          <div className="hero-bg-vid z-[-99] w-auto relative">
            <video className="bg-vid h-[100vh] w-[150vw] object-cover " muted autoPlay loop>
              <source src={melt} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section><section>

        </section></>
    );
}