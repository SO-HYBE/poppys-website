import Image from "next/image";
import face from '../../public/face.png';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import tee from '../../public/tee.png';

export default function Merch (){

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
        <section className="merch-section h-[82vh] relative overflow-hidden bg-white" ref={merchRef}>
            <div className="btn-cont h-[20vh] bg-[#b80c09] my-10 mx-2 rounded-[20px] border-[5px] border-black">
                <span className="span-btn flex justify-center items-center h-full font-bulleto text-2xl text-white">ORDER NOW</span>
                <Image priority id="face1" className="face scale-[0.7] invisible left-4 top-[2em] relative" src={face} width={50} height={50} alt={""}></Image>
                <Image priority id="face2" className="face scale-[0.7] invisible left-[75%] top-[-50px] relative hue-rotate-90" src={face} width={50} height={50} alt={""}></Image>
                <Image priority id="face3" className="face scale-[0.7] invisible left-[30%] relative top-[-250px] hue-rotate-[200deg]" src={face} width={50} height={50} alt={""}></Image>
            </div>
            <div className="merch-container bg-[#ffc0cb]">
                <div className="merc-text mt-[1.5rem] pt-3">
                    <h2 className="ml-[3vh] text-xl font-bulleto">Liked our products?</h2>
                    <h1 className="ml-[5vh] text-4xl font-bulleto">Buy our merch!</h1>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center">
                    <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Learn More!</span>
                    </a>
                    </div>
                    <div className="merch-img mt-[5vh]">
                        <Image className="object-scale-down" src={tee} alt={""} priority></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}