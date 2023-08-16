//font-size: clamp(10px,1.3333333333rem,300px);
import Image from "next/image";
import face from '../../public/face.png';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import tee from '../../public/tee.png';
import bag from '../../public/bag.png';


export default function Merch (){

    const merchRef : any = useRef();
    const merchCtx = gsap.context(merchRef);
    useIsomorphicLayoutEffect(()=>{
        merchCtx.add(()=>{ 
            
            const handleHover = () => {
                gsap.killTweensOf('.face');
                function media1(width: number) {
                    if(width >= 2560){
                            gsap.to('.face', { visibility: 'visible', duration: 5, rotation:"360", scale: 2, ease: "elastic.out(1.5, 0.2)", repeat:-1});
                    } else if(width >= 1024){
                            gsap.to('.face', { visibility: 'visible', duration: 5, rotation:"360", scale: 1.7, ease: "elastic.out(1.5, 0.2)", repeat:-1});
                    } else {
                            gsap.to('.face', { visibility: 'visible', duration: 5, rotation:"360", scale: 1.5, ease: "elastic.out(1.5, 0.2)", repeat:-1});
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
        <section className="merch-section relative top-[1630px]" ref={merchRef}>
            <div className="btn-cont h-[20vh] bg-[#b80c09] my-10 mx-2 rounded-[20px] border-[5px] border-black">
                <span className="span-btn flex justify-center items-center h-full font-bulleto text-2xl text-white">ORDER NOW</span>
                <Image id="face1" className="face scale-[0.7] invisible left-4 top-[2em] relative" src={face} width={50} height={50} alt={""}></Image>
                <Image id="face2" className="face scale-[0.7] invisible left-[75%] top-[-50px] relative hue-rotate-90" src={face} width={50} height={50} alt={""}></Image>
                <Image id="face3" className="face scale-[0.7] invisible left-[30%] relative top-[-250px] hue-rotate-[200deg]" src={face} width={50} height={50} alt={""}></Image>
            </div>
            <div className="merch-container bg-[#ffc0cb] h-[80vh]">
                <h1 className="ml-[3vh] text-xl font-bulleto">Liked our products?</h1>
                <div className="merch-head flex flex-row justify-between relative w-[100%]">
                    <div className="merch-text font-bulleto">
                        <h2 className="ml-[5vh] text-2xl">Buy our merch!</h2>
                    </div>
                    <Image className="scale-90" src={bag} alt={""}></Image> 
                </div>
                <div className="merch-img">
                    <Image className="absolute" src={tee} alt={""}></Image>
                </div>
            </div>
        </section>
    )
}