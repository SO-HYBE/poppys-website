import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import SplitType from "split-type";
import Image from "next/image";
import bnnaBg from '../../public/bnna-bg.webp';
import banana from '../../public/banana-sm.webp';
import strBg from '../../public/stwb-bg.webp';
import strberry from '../../public/st-cheese.webp';
import wtrmBg from '../../public/wtrm-bg.webp';
import wtrmelon from '../../public/wt-ch-cream.webp';
import strPop from '../../public/str-pop.webp';
import mngPop from '../../public/mng-pop.webp';



gsap.registerPlugin(ScrollTrigger);

export default function Catalog() {

    const catRef : any = useRef();
    const catCtx = gsap.context(catRef);
    useIsomorphicLayoutEffect(()=>{
        catCtx.add(()=>{
            if(typeof window != 'undefined' ){
                window.requestAnimationFrame(function(){

                    const splitCat = document.querySelectorAll('.cat-head');
                    splitCat.forEach((chars ,i)=>{
                        const catalog = new SplitType(chars as HTMLElement, {types: 'words, chars'})
                        gsap.from(catalog.chars, {
                            scrollTrigger: {
                                trigger: '.catalog',
                                start: 'top center',
                                end: 'top center',
                                scrub: false

                            },
                            scaleY: 0,
                            y: 20,
                            transformOrigin: 'top',
                            stagger: 0.1,
                            duration: 0.1
                        }) 
                    });

                    //--------------------------- products animation ---------------------------------//
                    const product1 = document.getElementById('product-1');
                    const product2 = document.getElementById('product-2');
                    const product3 = document.getElementById('product-3');
                    

                    const hoverAnimation1 = gsap.to('.p1-bg', {
                      scale: 1.2, // Scale the div to 120% on hover
                      visibility: 'visisble',
                      autoAlpha:1,
                      paused: true, // Start the animation as paused
                    });
                    
                    const hoverAnimation2 = gsap.to('.p2-bg', {
                      scale: 1.2, // Scale the div to 120% on hover
                      visibility: 'visisble',
                      autoAlpha:1,
                      paused: true, // Start the animation as paused
                    });
                    
                    const hoverAnimation3= gsap.to('.p3-bg', {
                      scale: 1.2, // Scale the div to 120% on hover
                      visibility: 'visisble',
                      autoAlpha:1,
                      paused: true, // Start the animation as paused
                    });
                    
                    // Add a hover event listener to trigger the animation
                    (product1 as Element).addEventListener('mouseenter', () => {
                      hoverAnimation1.play(); // Play the animation on hover
                    });
                    
                    (product1 as Element).addEventListener('mouseleave', () => {
                      hoverAnimation1.reverse(); // Reverse the animation on mouse leave
                    });
                    // Add a hover event listener to trigger the animation
                    (product2 as Element).addEventListener('mouseenter', () => {
                      hoverAnimation2.play(); // Play the animation on hover
                    });
                    
                    (product2 as Element).addEventListener('mouseleave', () => {
                      hoverAnimation2.reverse(); // Reverse the animation on mouse leave
                    });
                    // Add a hover event listener to trigger the animation
                    (product3 as Element).addEventListener('mouseenter', () => {
                      hoverAnimation3.play(); // Play the animation on hover
                    });
                    
                    (product3 as Element).addEventListener('mouseleave', () => {
                      hoverAnimation3.reverse(); // Reverse the animation on mouse leave
                    });


                    const anim1 = gsap.to('.p1-img', {
                      scaleX: '0.7',
                      scaleY: '0.7',
                      paused: true
                    });
                    const anim2 = gsap.to('.p2-img', {
                      scaleX: '0.7',
                      scaleY: '0.7',
                      paused: true
                    });
                    const anim3 = gsap.to('.p3-img', {
                      scaleX: '0.7',
                      scaleY: '0.7',
                      paused: true
                    });
                    
                    // Add a hover event listener to trigger the animation
                    (product1 as Element).addEventListener('mouseenter', () => {
                      anim1.play(); // Play the animation on hover
                    });
                    
                    (product1 as Element).addEventListener('mouseleave', () => {
                      anim1.reverse(); // Reverse the animation on mouse leave
                    });
                    // Add a hover event listener to trigger the animation
                    (product2 as Element).addEventListener('mouseenter', () => {
                      anim2.play(); // Play the animation on hover
                    });
                    
                    (product2 as Element).addEventListener('mouseleave', () => {
                      anim2.reverse(); // Reverse the animation on mouse leave
                    });
                    // Add a hover event listener to trigger the animation
                    (product3 as Element).addEventListener('mouseenter', () => {
                      anim3.play(); // Play the animation on hover
                    });
                    
                    (product3 as Element).addEventListener('mouseleave', () => {
                      anim3.reverse(); // Reverse the animation on mouse leave
                    });

                    gsap.from('.prod', {
                        scrollTrigger: {
                            trigger: '.catalog',
                            start: 'top 70%',
                            end: 'top 70%',
                            scrub: false
                        },
                        y: 50,
                        duration: 1.5,
                        visibility: 'invisible',
                        autoAlpha: 0,
                        stagger: 0.65
                    })

                    gsap.to('.catalog', {
                        scrollTrigger: { 
                            trigger: '.catalog',
                            start: 'top 60%',
                            end: 'top 60%',
                            scrub: false,
                            toggleActions: 'play play reverse reverse'
                        },
                        backgroundColor: '#ffc0cb'
                    })

                    gsap.to('.cat-head', {
                        scrollTrigger: { 
                            trigger: '.catalog',
                            start: 'top 60%',
                            end: 'top 60%',
                            scrub: false,
                            toggleActions: 'play play reverse reverse'
                        },
                        color: 'white'
                    })

                    gsap.to('#product-4', {
                        scrollTrigger: { 
                            trigger: '#product-4',
                            start: 'top 60%',
                            end: 'top 60%',
                            scrub: false,
                            toggleActions: 'play play reverse reverse'
                        },
                        backgroundColor: 'white'
                    })

                    gsap.to('.p4-head ', {
                        scrollTrigger: { 
                            trigger: '.p4-head',
                            start: 'top 60%',
                            end: 'top 60%',
                            scrub: false,
                            toggleActions: 'play play reverse reverse'
                        },
                        color: 'black'
                    })

                    //--------------------------- Function for responsiveness ---------------------------------//
                    function text1(width: number) {
                        const p2 = document.querySelector('.p2-text')
                        if (width >= 375){
                            (p2 as Element).textContent = "STRAWBERRY CHEESECAKE";
                        } else {
                            (p2 as Element).textContent = "STRAWBERRY ..";
                        }
                    };

                    function text2(width: number) {
                        const p3 = document.querySelector('.p3-text')
                        if (width >= 375){
                            (p3 as Element).textContent = "WATERMELON CHUNKS";
                        } else {
                            (p3 as Element).textContent = "WATERMELON ..";
                        }
                    };

                    const screen1 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    
                    text1(screen1);
                    text2(screen1);

                    function media4(width: number) {
                        if (width >= 768){
                            gsap.from('.pop-left',{
                                scrollTrigger: {
                                    trigger: '.pop-img',
                                    start: 'top center',
                                    end: 'bottom bottom',
                                    scrub: true

                                },
                                x: -1000,
                                rotate: '0deg'
                            })
                            gsap.from('.pop-right',{
                                scrollTrigger: {
                                    trigger: '.pop-img',
                                    start: 'top center',
                                    end: 'bottom bottom',
                                    scrub: true

                                },
                                x: 1000,
                                rotate: '0deg'
                            })
                        } else {
                            gsap.from('.pop-left',{
                                scrollTrigger: {
                                    trigger: '.pop-img',
                                    start: 'top center',
                                    end: 'bottom 60%',
                                    scrub: true
                                },
                                x: -300
                            })
                            gsap.from('.pop-right',{
                                scrollTrigger: {
                                    trigger: '.pop-img',
                                    start: 'top center',
                                    end: 'bottom 60%',
                                    scrub: true
                                },
                                x: 300
                            })
                        }
                    };

                    const screenWidth4 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    
                    media4(screenWidth4);

                });
            }

        });
        

    },[]) 


    return(
        <section className="catalog-section h-[660vw] overflow-hidden">
            <div className="catalog h-[inherit]" ref={catRef}>
                <div className="catalog-content h-[inherit]">
                    <div className="catalog-head">
                        <div className="head flex justify-center">
                            <h1 className="cat-head mt-[100px] text-2xl font-bulleto p-4 text-black 4 ">Explore our products!</h1>
                        </div> 
                    </div>
                    <div className="catalog-products mt-[100px] h-[inherit]">
                        <div className="grid-products mx-[1.25rem]">
                            <div className="products1-3 grid gap-1 grid-cols-1 auto-rows-auto">
                                <div id="product-1" className="prod bg-white rounded-[1.25rem] h-[125vw] flex flex-col">
                                    <div className="prod-1-img relative h-fit w-full basis-[90%] overflow-hidden rounded-t-[1rem]">
                                        <Image priority src={bnnaBg} className="p1-bg object-cover w-full h-full invisible" alt={""} ></Image>
                                        <Image priority className="p1-img w-full h-full absolute left-0 top-0 scale-75" src={banana} alt={"Banana ice cream"} height={500} width={500}></Image>
                                    </div>
                                    <div className="prod-1-info basis-[10%] px-[1.5rem] flex flex-row justify-between py-5">
                                        <div className="">
                                            <div className="font-poppins text-[#b80c09] text-[1.2rem]">BANANA SMORES</div>
                                            <div className="font-poppins text-black text-[.75rem]">Serving Size: 473ml</div>
                                            <div className="font-poppins text-[#b80c09] text-[1.2rem]">250 EGP.</div>
                                        </div>  
                                        <div className="flex items-center">    
                                            <button className="bg-[#b80c09] product-btn rounded-[70%] hover:animate-pulse">
                                                <a href="#"></a>
                                                <i></i>
                                            </button>
                                        </div>                                 
                                    </div>
                                </div>
                                <div id="product-2" className="prod bg-white rounded-[1.25rem] h-[125vw] flex flex-col">
                                    <div className="prod-2-img relative h-fit w-full basis-[90%] overflow-hidden rounded-t-[1rem]">
                                        <Image priority src={strBg} className="p2-bg object-cover w-full h-full invisible" alt={""} ></Image>
                                        <Image priority className="p2-img w-full h-full absolute left-0 top-0 scale-75" src={strberry} alt={"strawberry ice cream"} height={500} width={500}></Image>
                                    </div>
                                    <div className="prod-2-info basis-[10%] px-[1.5rem] flex flex-row justify-between py-5">
                                        <div className="">
                                            <div className="p2-text font-poppins text-[#b80c09] text-[1.2rem]">STRAWBERRY ..</div>
                                            <div className="font-poppins text-black text-[.75rem]">Serving Size: 473ml</div>
                                            <div className="font-poppins text-[#b80c09] text-[1.2rem]">250 EGP.</div>
                                        </div>  
                                        <div className="flex items-center">    
                                            <button className="bg-[#b80c09] product-btn rounded-[70%] hover:animate-pulse">
                                                <a href="#"></a>
                                                <i></i>
                                            </button>
                                        </div>                                 
                                    </div>
                                </div>
                                <div id="product-3" className="prod bg-white rounded-[1.25rem] h-[125vw] flex flex-col">
                                    <div className="prod-3-img relative h-fit w-full basis-[90%] overflow-hidden rounded-t-[1rem]">
                                        <Image priority src={wtrmBg} className="p3-bg object-cover w-full h-full invisible" alt={""} ></Image>
                                        <Image priority className="p3-img w-full h-full absolute left-0 top-0 scale-75" src={wtrmelon} alt={"watermelon ice cream"} height={500} width={500}></Image>
                                    </div>
                                    <div className="prod-3-info basis-[10%] px-[1.5rem] flex flex-row justify-between py-5">
                                        <div className="">
                                            <div className="p3-text font-poppins text-[#b80c09] text-[1.2rem]">WATERMELON ..</div>
                                            <div className="font-poppins text-black text-[.75rem]">Serving Size: 473ml</div>
                                            <div className="font-poppins text-[#b80c09] text-[1.2rem]">250 EGP.</div>
                                        </div>  
                                        <div className="flex items-center">    
                                            <button className="bg-[#b80c09] product-btn rounded-[70%] hover:animate-pulse">
                                                <a href="#"></a>
                                                <i></i>
                                            </button>
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product  h-[inherit]" id="product-4">
                            <div className="pop-content relative">
                                <div className="pop-head flex flex-col">
                                    <h2 className="p4-head pt-8 font-bulleto text-center text-[1.5em] text-white">We Also Have</h2>
                                    <h1 className="p4-head  pt-5 font-bulleto text-center mt-[-10px] text-white text-5xl">Popsiclesss !!</h1>
                                </div>
                                <div className="pop-img flex flex-row justify-around mx-12 mt-10">
                                    <Image priority className="pop-left relative w-[80%] z-30" src={mngPop} alt={""}></Image>
                                    <Image priority className="pop-right relative w-[80%] " src={strPop} alt={""}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}