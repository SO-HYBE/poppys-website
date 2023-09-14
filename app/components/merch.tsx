import Image from "next/image";
import face from '../../public/face.webp';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useEffect, useRef } from "react";
import tee from '../../public/tee.webp';

export default function Merch (){

     //------------ Button animtion -----------------
     useEffect(()=> {
  
        document.querySelectorAll('.button-merch').forEach(button => {
    
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
  

    const merchRef : any = useRef();
    const merchCtx = gsap.context(merchRef);
    useIsomorphicLayoutEffect(()=>{
        merchCtx.add(()=>{
            const handleHover = () => {
                gsap.killTweensOf('.face');
                function media1(width: number) {
                    if(width >= 2560){
                            gsap.to('.face', { visibility: 'visible', rotation:'360', repeat:-1, duration: 5, scale: 1.6, ease: "elastic.out(1.5, 0.2)"});
                    } else if(width >= 1024){
                            gsap.to('.face', { visibility: 'visible', rotation:'360', repeat:-1, duration: 5, scale: 1.4, ease: "elastic.out(1.5, 0.2)"});
                    } else {
                            gsap.to('.face', { visibility: 'visible', rotation:'360', repeat:-1, duration: 5, scale: 1.2, ease: "elastic.out(1.5, 0.2)"});
                    }
                }
                
                // JavaScript code to handle media queries and call the TypeScript function
                const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                media1(screenWidth);
        };
    
        const handleMouseOut = () => {
          gsap.killTweensOf('.face');
          gsap.to('.face', { visibility: 'hidden', duration: 0.5, scale: 0.7 });
        };
    
        const hoverTrigger = document.querySelector('.span-btn');
        (hoverTrigger as Element ).addEventListener('mouseenter', handleHover);
        (hoverTrigger as Element ).addEventListener('mouseleave', handleMouseOut);
    
        return () => {
          (hoverTrigger as Element ).removeEventListener('mouseenter', handleHover);
          (hoverTrigger as Element ).removeEventListener('mouseleave', handleMouseOut);
        };

      });
      }, []);

    return(
        <section className="merch-section h-[72vh] relative overflow-hidden bg-white" ref={merchRef}>
            <div className="btn-cont h-[10vh] bg-[#b80c09] my-10 mx-5 rounded-[20px]">
                <span className="span-btn flex justify-center items-center h-full font-bulleto text-2xl text-white">ORDER NOW</span>
                <Image loading="lazy" id="face1" className="face scale-[0.7] invisible left-4 top-[2em] relative" src={face} width={50} height={50} alt={""}></Image>
                <Image loading="lazy" id="face2" className="face scale-[0.7] invisible left-[75%] top-[-50px] relative hue-rotate-90" src={face} width={50} height={50} alt={""}></Image>
                <Image loading="lazy" id="face3" className="face scale-[0.7] invisible left-[30%] relative top-[-220px] hue-rotate-[200deg]" src={face} width={50} height={50} alt={""}></Image>
            </div>
            <div className="merch-container bg-[#ffc0cb] h-full">
                <div className="merc-text mt-[1.5rem] pt-[1.75rem]">
                    <h2 className="ml-[4vw] text-xl font-bulleto">Liked our products?</h2>
                    <h1 className="text-center text-4xl font-bulleto mb-12">Buy our merch!</h1>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center">
                    <button className="button-merch alternative font-poppins">Learn More!</button>
                    </div>
                    <div className="merch-img mt-[6vh] relative">
                        <Image loading="lazy" className="object-scale-down absolute" width={1920} height={1080} src={tee} alt={""}></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}