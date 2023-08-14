import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import SplitType from "split-type";
import Image from "next/image";
import collection from '../../public/collection.png';
import bnnaBg from '../../public/bnna-bg.jpg';
import banana from '../../public/banana-sm.png'
import bnnas from '../../public/banana-collection.png'



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
                                start: '10% center',
                                end: '40% center',
                                scrub: false,                                
                                toggleActions: 'play play restart restart'
                            },
                            scaleY: 0,
                            y: 20,
                            transformOrigin: 'top',
                            stagger: 0.1,
                            duration: 0.3
                        }) 
                    });
                    gsap.to('.catalog-section', {
                        scrollTrigger: {
                            trigger: '.catalog',
                            start: '-10% center',
                            end: '-10% center',
                            scrub: false,
                            toggleActions: 'play play reverse reverse'
                        },
                        duration: 3,
                        ease: "circ.out",
                        borderTopLeftRadius: '70% 35%',
                        borderTopRightRadius: '70% 35%'
                    });
                    //--------------------------- Function for responsiveness ---------------------------------//

                    function media1(width: number) {
                        if (width >= 2560){
                            gsap.fromTo('#head-1',{
                                y:-50
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 100
                            });
                            gsap.fromTo('#bg-1',{
                                y:-70
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 70,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-1',{
                                y:-100
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 100,
                                delay:0.3
                            });
                        } else if (width >= 768) {
                            gsap.fromTo('#head-1',{
                                y:-30
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60
                            });
                            gsap.fromTo('#bg-1',{
                                y:-30
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 30,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-1',{
                                y:-40
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 70,
                                delay:0.3
                            });
                        } else {
                           gsap.fromTo('#head-1',{
                        y:-30
                    },{
                        scrollTrigger: {
                            trigger: '#product-1',
                            scrub: true,
                            start: 'top 80%',
                            end: 'bottom 80%'
                        },
                        y: 60
                    });
                    gsap.fromTo('#img-1',{
                        y:-10
                    },{
                        scrollTrigger: {
                            trigger: '#product-1',
                            scrub: true,
                            start: 'top 70%',
                            end: 'bottom 70%'
                        },
                        y: 80,
                        delay:0.2
                    });
                    gsap.fromTo('#bg-1',{
                        y:-10
                    },{
                        scrollTrigger: {
                            trigger: '#product-1',
                            scrub: true,
                            start: 'top 80%',
                            end: 'bottom 80%'
                        },
                        y: 30,
                        delay:0.3
                    }); 
                        }
                    }
                    
                    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        
                    media1(screenWidth);
                });
            }

        });
        

    },[]) 


    return(
        <section className="catalog-section relative bottom-[-1640px] h-[400vh] bg-[#ffc0cb] overflow-hidden">
            <div className="catalog" ref={catRef}>
                <div className="catalog-content">
                    <div className="catalog-head">
                        <div className="head flex justify-center">
                            <h1 className="cat-head mt-[300px] text-3xl font-bulleto p-4 text-white 4 ">Explore our products!</h1>
                        </div>
                        <div className="catalog-img mt-10">
                            <Image src={collection} alt={""}></Image>
                        </div>  
                    </div>
                    <div className="catalog-products mt-[100px]">
                        <div className="product relative" id="product-1">
                            <div className="product-content relative">   
                                <div className="product-txt absolute z-[5] ">
                                    <div className="product-head relative top-[20vh] font-bulleto text-white" id="head-1">
                                        <h3 className="mt-[5vh] ml-[2vh] text-xl">Taste the campfire</h3>
                                        <h1 className="text-center text-4xl">BANANA SMORES</h1>
                                    </div>
                                        <p className="font-poppins relative mt-5 text-center text-sm mx-[4px] top-[42vh] text-white">Close your eyes, take a bite, and be transported. Picture flickering flames, the crackling of graham crackers, the sweetness of bananas blended with marshmallows, and laughter around the campfire. Now open your eyes; that magic is in every pint of our Banana Smores Ice Cream.</p>
                                </div>
                                <div className="product-img absolute z-[4]" id="img-1">
                                    <Image className="ov-img absolute z-[10]" id="ov-1" src={bnnas} alt={""}></Image>
                                    <Image className="image relative brightness-[.70]" src={banana} alt={""}></Image>
                                </div>
                            </div>
                            <Image className="h-[100vh] object-cover w-[100%] relative brightness-[.70]" id="bg-1" src={bnnaBg} alt={""}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}