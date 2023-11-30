import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import fence from '../../public/about.webp'
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

                      function media1(width: number) {
                            if(width>= 2560){
                                gsap.from(".line span", {
                                    scrollTrigger:{
                                        trigger: '.about-head',
                                        start: 'top center',
                                        end: 'top center',
                                        toggleActions: "play play reverse reverse"
                                    },
                                    duration: 1.8,
                                    y: 600,
                                    ease: "power4.out"
                                  })
                            } else {
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
                            }
                      }
                    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
             
                    media1(screenWidth);

                    const splitAbout = document.querySelectorAll('.about-p');
                    splitAbout.forEach((chars ,i) => {
                        const about = new SplitType(chars as HTMLElement, {types: 'words, chars'}) 
                        //--------------------------- Function for responsiveness ---------------------------------//
                        function media1(width: number) {
                                gsap.from(about.chars, {
                                    scrollTrigger: {
                                        trigger: chars,
                                        start: 'top 100%',
                                        end: 'bottom 100%',
                                        scrub: true
                                    },
                                    duration: 2,
                                    opacity: 0.2,
                                    stagger: 0.2
                                })
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
        <section className="about-section h-[100vh] mp-[200px] w-screen snap-mandatory snap-x px-[4vw] bg-[#fefae0]">
            <div className="about flex flex-col snap-start" ref={aboutRef}>
                <div className="line overflow-hidden">
                    <span className="about-head flex justify-center font-bulleto text-5xl pt-[10rem] text-[#b80c09]">About Us</span>
                </div>
                <div className="about-content flex flex-row-reverse gap-8">
                    <p className="about-p leading-relaxed font-bold w-1/2">
                        Welcome to Poppy's, a haven where nostalgia reigns supreme and every ice cream scoop becomes a portal to cherished memories. Beyond being a mere ice cream shop, we offer a voyage back in time to the days of carefree innocence. Our flavors encapsulate the essence of joy, aimed at forging connections and weaving new moments with every delightful bite. Join us in this captivating escapade where the past seamlessly merges with the present, resulting in a medley of frozen delights and heartfelt instances.
                    </p>
                    <div className="w-1/2 h-full">
                        <Image priority className="abt-img skewElem object-fill" src={fence} height={1080} width={1920} alt={"About Image with fence background"}></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}