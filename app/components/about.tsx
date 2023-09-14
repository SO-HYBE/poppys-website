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
                    let proxy = { skew: 0 },
                        skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
                        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

                    ScrollTrigger.create({
                      onUpdate: (self) => {
                        let skew = clamp(self.getVelocity() / -300);
                        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                        if (Math.abs(skew) > Math.abs(proxy.skew)) {
                          proxy.skew = skew;
                          gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                        }
                      }
                    });

                    gsap.from(".line span", {
                        scrollTrigger:{
                            trigger: '.about-head',
                            start: 'top center',
                            end: 'top center',
                            toggleActions: "play play reverse reverse"
                        },
                        duration: 1.8,
                        y: 200,
                        ease: "power4.out"
                      })
                    
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
                                        start: 'top 80%',
                                        end: 'bottom 80%',
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
        <section className="about-section h-[130vh] mp-[200px] snap-mandatory snap-x ">
            <div className="about bg-white flex flex-col snap-start" ref={aboutRef}>
                <div className="line bg-white overflow-hidden">
                    <span className="about-head flex justify-center font-bulleto text-5xl pt-[20rem] text-black">About Us</span>
                </div>
                <div className="about-content flex flex-col-reverse">
                    <p className="about-p mx-5 justify-center leading-relaxed font-bold mt-5">
                        Welcome to Poppy's, a haven where nostalgia reigns supreme and every ice cream scoop becomes a portal to cherished memories. Beyond being a mere ice cream shop, we offer a voyage back in time to the days of carefree innocence. Our flavors encapsulate the essence of joy, aimed at forging connections and weaving new moments with every delightful bite. Join us in this captivating escapade where the past seamlessly merges with the present, resulting in a medley of frozen delights and heartfelt instances.
                    </p>
                    <div className="about-image mx-4 top-[180px]">
                        <Image loading="lazy" className="abt-img skewElem object-fill rounded-md" priority src={fence} height={2000} width={3000} alt={"About Image with fence background"}></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}