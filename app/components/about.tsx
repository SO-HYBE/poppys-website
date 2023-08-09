import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function About(){

    return(
        <section className="h-[50vh] relative bottom-[-1525px] mt-[100px]">
            <div className="about bg-white flex flex-col ">
                <h1 className="flex justify-center font-bulleto text-5xl">About Us</h1>
                <div>
                <p className="mx-5 flex text-2xl justify-center mt-3 leading-relaxed">
                    Welcome to Poppy's, a haven where nostalgia reigns supreme and every ice cream scoop becomes a portal to cherished memories. Beyond being a mere ice cream shop, we offer a voyage back in time to the days of carefree innocence. Our flavors encapsulate the essence of joy, aimed at forging connections and weaving new moments with every delightful bite. Join us in this captivating escapade where the past seamlessly merges with the present, resulting in a medley of frozen delights and heartfelt instances.
                </p>
                <Image src={""} alt={""}></Image>
                </div>
            </div>
        </section>
    )
}