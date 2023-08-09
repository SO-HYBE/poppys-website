import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react";

export default function Navbar(props:{src:StaticImageData, hov: StaticImageData}) {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  
    //------------ Button animtion -----------------
    useEffect(()=> {
  
      document.querySelectorAll('.button').forEach(button => {
  
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

    return(
        <header className="hero-head flex justify-between fixed z-[99] w-full top-0 left-0 overflow-hidden">
        <div className="hover:height-[7vh]" id="img-cont" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href="#"><Image className="h-[6vh] w-auto left-0 mt-[3.5vh] ml-[4vw] logo " priority src={isHovering ? props.hov : props.src} alt="LOGO"></Image></a>
        </div>
        <nav className="font-bulleto">
          <ul className="nav-item text-[2.75vh] flex gap-1 flex-row items-center justify-center mt-[3vh] mr-[4vw]">
            <li><button className="button sm-dev md-dev alternative">Home</button></li>
            <li><button className="button alternative">Catalog</button></li>
            <li><button className="button sm-dev alternative">About Us</button></li>
            <li><button className="button alternative">Contact Us</button></li>
          </ul>
        </nav>
      </header>
    )
}