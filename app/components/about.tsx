import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import fence from '../../public/about.png'
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function About(){
    //---------------------------------------- About section animation ----------------------------------------//
    const aboutRef : any = useRef();
    const aboutCtx = gsap.context(aboutRef);
    useIsomorphicLayoutEffect(()=>{
        aboutCtx.add(()=>{
            if(typeof window != 'undefined' ){
                window.requestAnimationFrame(function(){
                    const splitAbout = document.querySelectorAll('.about-p');
                    splitAbout.forEach((chars ,i) => {
                        const about = new SplitType(chars as HTMLElement, {types: 'words, chars'}) 
                        //--------------------------- Function for responsiveness ---------------------------------//
                        function media1(width: number) {
                            if (width >= 768) {
                                gsap.from(about.chars, {
                                    scrollTrigger: {
                                        trigger: chars,
                                        start: 'top 80%',
                                        end: '90% 30%',
                                        scrub: true  
                                    },
                                    duration: 4,
                                    opacity: 0.2,
                                    stagger: 0.5
                                })
                            } else if(width >= 1024){
                                gsap.from(about.chars, {
                                    scrollTrigger: {
                                        trigger: chars,
                                        start: 'top 80%',
                                        end: '120% 30%',
                                        scrub: true
                                    },
                                    duration: 4,
                                    opacity: 0.2,
                                    stagger: 0.5
                                })
                            } else if(width >= 1920){
                                gsap.from(about.chars, {
                                    scrollTrigger: {
                                        trigger: chars,
                                        start: 'top 80%',
                                        end: '100% 30%',
                                        scrub: true
                                    },
                                    duration: 4,
                                    opacity: 0.2,
                                    stagger: 0.5
                                })
                            } else if(width >= 2560){
                                gsap.from(about.chars, {
                                    scrollTrigger: {
                                        trigger: chars,
                                        start: 'top 80%',
                                        end: '150% 30%',
                                        scrub: true
                                    },
                                    duration: 4,
                                    opacity: 0.2,
                                    stagger: 0.5
                                })
                            } else {
                                gsap.from(about.chars, {
                                    scrollTrigger: {
                                        trigger: chars,
                                        start: '50% 80%',
                                        end: 'bottom 20%',
                                        scrub: true
                                    },
                                    duration: 2,
                                    opacity: 0.2,
                                    stagger: 0.2
                                })
                            }
                        }
                        
                        // JavaScript code to handle media queries and call the TypeScript function
                        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        
                        media1(screenWidth);
                    });
                });
            }
        });

    },[]);

    return(
        <section className="about-section h-[155vh] relative bottom-[-1250px] mp-[200px] snap-mandatory snap-x ">
            <div className="about bg-white flex flex-col snap-start" ref={aboutRef}>
                <h1 className="about-head flex justify-center font-bulleto text-5xl pt-[100px] pb-[120px] bg-[#ffc0cb]">About Us</h1>
                <div className="about-content flex flex-col-reverse mt-5">
                    <p className="about-p mx-5 justify-center leading-relaxed font-bold relative top-[30vw]">
                        Welcome to Poppy's, a haven where nostalgia reigns supreme and every ice cream scoop becomes a portal to cherished memories. Beyond being a mere ice cream shop, we offer a voyage back in time to the days of carefree innocence. Our flavors encapsulate the essence of joy, aimed at forging connections and weaving new moments with every delightful bite. Join us in this captivating escapade where the past seamlessly merges with the present, resulting in a medley of frozen delights and heartfelt instances.
                    </p>
                    <div className="about-image mx-4 absolute top-[180px]">
                        <Image className="abt-img object-fill rounded-md" priority src={fence} height={2000} width={3000} alt={"About Image with fence background"}></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}