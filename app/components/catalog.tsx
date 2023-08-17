import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import SplitType from "split-type";
import Image from "next/image";
import collection from '../../public/collection.png';
import bnnaBg from '../../public/bnna-bg.jpg';
import banana from '../../public/banana-sm.png';
import bnnas from '../../public/banana-collection.png';
import strBg from '../../public/stwb-bg.jpg';
import strberry from '../../public/st-cheese.png';
import strberries from '../../public/strawberry-collection.png';
import wtrmBg from '../../public/wtrm-bg.jpg';
import wtrmelon from '../../public/wt-ch-cream.png';
import wtrmelons from '../../public/w-collection.png';
import strPop from '../../public/str-pop.png';
import mngPop from '../../public/mng-pop.png';



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
                                start: '10% 60%',
                                end: '40% 60%',
                                scrub: false,                                
                                toggleActions: 'play play restart restart'
                            },
                            scaleY: 0,
                            y: 20,
                            transformOrigin: 'top',
                            stagger: 0.1,
                            duration: 0.1
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
                                y: 85,
                                delay:0.3
                            });
                        } else if ( width >= 1920){
                            gsap.fromTo('#head-1',{
                                y:-60
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 80
                            });
                            gsap.fromTo('#bg-1',{
                                y:-60
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 35,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-1',{
                                y:-80
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 80,
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
                                y:-60
                            },{
                                scrollTrigger: {
                                    trigger: '#product-1',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60,
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
                        y: 80
                    });
                    gsap.fromTo('#img-1',{
                        y:-20
                    },{
                        scrollTrigger: {
                            trigger: '#product-1',
                            scrub: true,
                            start: 'top 70%',
                            end: 'bottom 70%'
                        },
                        y: 120,
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

                    function media2(width: number) {
                        if (width >= 2560){
                            gsap.fromTo('#head-2',{
                                y:-50
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 100
                            });
                            gsap.fromTo('#bg-2',{
                                y:-90
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 30,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-2',{
                                y:-100
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 100,
                                delay:0.3
                            });
                        } else if ( width >= 1920){
                            gsap.fromTo('#head-2',{
                                y:-60
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 80
                            });
                            gsap.fromTo('#bg-2',{
                                y:-70
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: -5,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-2',{
                                y:-80
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 80,
                                delay:0.3
                            });
                        } else if( width >= 1440) {
                            gsap.fromTo('#head-2',{
                                y:-30
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60
                            });
                            gsap.fromTo('#bg-2',{
                                y:-20
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 3,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-2',{
                                y:-50
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 50,
                                delay:0.3
                            });
                        } else if (width >= 768) {
                            gsap.fromTo('#head-2',{
                                y:-30
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60
                            });
                            gsap.fromTo('#bg-2',{
                                y:-40
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 10,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-2',{
                                y:-40
                            },{
                                scrollTrigger: {
                                    trigger: '#product-2',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60,
                                delay:0.3
                            });
                        } else {
                           gsap.fromTo('#head-2',{
                        y:-30
                    },{
                        scrollTrigger: {
                            trigger: '#product-2',
                            scrub: true,
                            start: 'top 80%',
                            end: 'bottom 80%'
                        },
                        y: 60
                    });
                    gsap.fromTo('#img-2',{
                        y:-40
                    },{
                        scrollTrigger: {
                            trigger: '#product-2',
                            scrub: true,
                            start: 'top 70%',
                            end: 'bottom 70%'
                        },
                        y: 70,
                        delay:0.2
                    });
                    gsap.fromTo('#bg-2',{
                        y:-30
                    },{
                        scrollTrigger: {
                            trigger: '#product-2',
                            scrub: true,
                            start: 'top 80%',
                            end: 'bottom 80%'
                        },
                        y: 3,
                        delay:0.3
                    }); 
                        }
                    }
                    
                    const screenWidth2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        
                    media2(screenWidth2);

                    function media3(width: number) {
                        if (width >= 2560){
                            gsap.fromTo('#head-3',{
                                y:-50
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 100
                            });
                            gsap.fromTo('#bg-3',{
                                y:-70
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 30,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-3',{
                                y:-100
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 150,
                                delay:0.3
                            });
                        } else if ( width >= 1920){
                            gsap.fromTo('#head-3',{
                                y:-60
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 80
                            });
                            gsap.fromTo('#bg-3',{
                                y:-60
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: -5,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-3',{
                                y:-80
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 80,
                                delay:0.3
                            });
                        } else if( width >= 1440) {
                            gsap.fromTo('#head-3',{
                                y:-30
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60
                            });
                            gsap.fromTo('#bg-3',{
                                y:-20
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 3,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-3',{
                                y:-50
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 50,
                                delay:0.3
                            });
                        } else if (width >= 768) {
                            gsap.fromTo('#head-3',{
                                y:-30
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60
                            });
                            gsap.fromTo('#bg-3',{
                                y:-5
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 10,
                                delay:0.2
                            });
                            gsap.fromTo('#ov-3',{
                                y:-40
                            },{
                                scrollTrigger: {
                                    trigger: '#product-3',
                                    scrub: true,
                                    start: 'top 50%',
                                    end: 'bottom 50%'
                                },
                                y: 60,
                                delay:0.3
                            });
                        } else {
                           gsap.fromTo('#head-3',{
                        y:-30
                    },{
                        scrollTrigger: {
                            trigger: '#product-3',
                            scrub: true,
                            start: 'top 80%',
                            end: 'bottom 80%'
                        },
                        y: 60
                    });
                    gsap.fromTo('#img-3',{
                        y:-40
                    },{
                        scrollTrigger: {
                            trigger: '#product-3',
                            scrub: true,
                            start: 'top 70%',
                            end: 'bottom 70%'
                        },
                        y: 70,
                        delay:0.2
                    });
                    gsap.fromTo('#bg-3',{
                        y:-30
                    },{
                        scrollTrigger: {
                            trigger: '#product-3',
                            scrub: true,
                            start: 'top 80%',
                            end: 'bottom 80%'
                        },
                        y: 3,
                        delay:0.3
                    }); 
                        }
                    }
                    
                    const screenWidth3 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        
                    media3(screenWidth3);

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
                                    end: 'bottom 90%',
                                    scrub: true
                                },
                                x: -300
                            })
                            gsap.from('.pop-right',{
                                scrollTrigger: {
                                    trigger: '.pop-img',
                                    start: 'top center',
                                    end: 'bottom 90%',
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
        <section className="catalog-section relative bottom-[-1640px] h-[600vh] bg-[#ffc0cb] overflow-hidden">
            <div className="catalog" ref={catRef}>
                <div className="catalog-content">
                    <div className="catalog-head">
                        <div className="head flex justify-center">
                            <h1 className="cat-head mt-[400px] text-3xl font-bulleto p-4 text-white 4 ">Explore our products!</h1>
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
                                        <h3 className="mt-[5vh] ml-[2vh] text-xl">Taste The Campfire</h3>
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
                        <div className="product relative top-[6vh]" id="product-2">
                            <div className="product-content relative">   
                                <div className="product-txt absolute z-[5] ">
                                    <div className="product-head relative top-[20vh] font-bulleto text-white" id="head-2">
                                        <h3 className="mt-[5vh] ml-[2vh] text-lg">Just Like Grandma Used To Make It</h3>
                                        <h1 className="text-center text-4xl" id="h1-p2">STRAWBERRY CHEESCAKE</h1>
                                    </div>
                                        <p id="p-p2" className="font-poppins relative mt-[-5] text-center text-sm mx-[4px] top-[42vh] text-white">Imagine sunny days, holding Poppy&apos;s Strawberry Cheesecake Ice Cream, with laughter and joy all around. Creamy cheesecake-infused ice cream meets vibrant strawberry sweetness - a culinary masterpiece embodying our crafted love.</p>
                                </div>
                                <div className="product-img absolute z-[4]" id="img-2">
                                    <Image className="ov-img absolute z-[10]" id="ov-2" src={strberries} alt={""}></Image>
                                    <Image className="image relative brightness-[.70]" src={strberry} alt={""}></Image>
                                </div>
                            </div>
                            <Image className="h-[100vh] object-cover w-[100%] relative brightness-[.70]" id="bg-2" src={strBg} alt={""}></Image>
                        </div>
                        <div className="product relative top-[6vh]" id="product-3">
                            <div className="product-content relative">   
                                <div className="product-txt absolute z-[5] ">
                                    <div className="product-head relative top-[20vh] font-bulleto text-white" id="head-3">
                                        <h3 className="mt-[5vh] ml-[2vh] text-xl">The Taste Of Summer</h3>
                                        <h1 className="text-center text-4xl" id="h1-p2">WATERMELON CHUNKS</h1>
                                    </div>
                                        <p id="p-p2" className="font-poppins relative mt-[-5] text-center text-sm mx-[4px] top-[42vh] text-white">Evoke the spirit of summer joy with our Watermelon Chunks Ice Cream. Authentic watermelon pieces meld seamlessly with creamy ice cream, creating a refreshing treat that embodies the season&apos;s essence in every delightful bite. Close your eyes, and taste the summer joy.</p>
                                </div>
                                <div className="product-img absolute z-[4]" id="img-3">
                                    <Image className="ov-img absolute z-[10]" id="ov-3" src={wtrmelons} alt={""}></Image>
                                    <Image className="image relative brightness-[.70]" src={wtrmelon} alt={""}></Image>
                                </div>
                            </div>
                            <Image className="h-[100vh] object-cover w-[100%] relative brightness-[.70]" id="bg-3" src={wtrmBg} alt={""}></Image>
                        </div>
                        <div className="product bg-white h-[135vh]" id="product-4">
                            <div className="pop-content relative h-[130vh]">
                                <div className="pop-head flex flex-col">
                                    <h2 className="pt-8 font-bulleto text-center text-[1.5em]">We Also Have</h2>
                                    <h1 className="pt-5 font-bulleto text-center mt-[-10px] text-5xl">Popsiclesss !!</h1>
                                </div>
                                <div className="pop-img flex flex-row justify-around mx-10 mt-10">
                                    <Image className="pop-left relative w-[80%] z-30" src={mngPop} alt={""}></Image>
                                    <Image className="pop-right relative w-[80%] " src={strPop} alt={""}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}