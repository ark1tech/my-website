import React from 'react'
import './projects.css'
import Spline from '@splinetool/react-spline';
import { SiFigma,
         SiAdobeillustrator, 
         SiReact,
         SiHtml5,
         SiCss3,
         SiJavascript,
         SiJava,
         SiTailwindcss
  } from 'react-icons/si';
import {BsArrowRight} from 'react-icons/bs';


const Projects = () => {
  return (
    <div id = "projects" class = "flex-col sticky md:px-40 px-10 py-20">
      <h1 data-aos="slide-right" data-aos-delay="25" data-aos-duration="1000" class ="w-fit cursor-pointer pro-title font-header text-6xl md:text-9xl font-bold">
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">p</span>
          </span>
        </span> 
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">r</span>
          </span>
        </span> 
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">o</span>
          </span>
        </span> 
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">j</span>
          </span>
        </span> 
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">e</span>
          </span>
        </span> 
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">c</span>
          </span>
        </span> 
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">t</span>
          </span>
        </span> 
        <span class = "outer2">
          <span class = "inner2">
            <span class = "letter2">s</span>
          </span>
        </span> 
      </h1>
      <div class = "mt-10">
        <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000" class = "word1 timeline border-l-[1px] border-white border-opacity-[0.1] md:ml-[2.3rem] ml-1 mt-3 py-16 space-y-14">     
          <div id = "cards" class = "word1 relative z-[3]">
              <div class = "animate-pulse">
              <div class = "dot absolute bg-[#ad14ff] mt-[10rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black ">
              </div>
              </div>
              <div class ="flex flex-col justify-start">
                <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" class = "card flex md:flex-row flex-col p-10 md:ml-20 ml-5 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                  <div class = "order-2  splinez w-fit -mt-32 -mb-[10rem] -mr-[4rem]">
                    <div class = "text-purple-300 absolute right-[3rem] bottom-[6rem] flow flow-col space-y-3">
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiFigma size ={35} />
                      </div>
                      <div class= "icon-card w-fit h-fit p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiAdobeillustrator size ={35} />
                      </div>
                    </div>
                    <Spline  scene="https://prod.spline.design/NvcNCgGmONQmmVUG/scene.splinecode" />
                  </div>  
                  <div>
                    <p class = "timeline-date font-light text-white">DECEMBER 2022</p>
                    <h3 class = "anime text-2xl font-semibold text-white my-5"> Palengcourier </h3>
                    <p class = "ml-7 list-disc font-normal text-white">
                      Palengcourier, a portmanteau for palengke and courier, is an application that lets you connect
                      with your nearest public markets, compare and contrast prices different prices, and find
                      experienced palengke shoppers to assist you in tending to your needs, so you can purchase
                      fresh, high quality local produce for a local price, with the convenience of doing it all from your
                      phone.
                    </p>
                    <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                        <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                        <a href = "https://www.facebook.com/CURSOR.Tackle" target="_blank" rel="noopener noreferrer" class = "font-header under">Learn More </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div id = "cards" class = "word1 relative z-[1]">
              <div class = "animate-pulse">
              <div class = "dot absolute bg-[#ad14ff] mt-[10rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black ">
              </div>
              </div>
              <div class ="flex flex-col justify-start">
                <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" class = "card flex md:flex-row flex-col p-10 md:ml-20 ml-5 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                  <div class = "order-2 splinez ml-[2rem] -mb-[5rem]">
                    <div div class = "text-purple-300 absolute right-0 bottom-[3rem] flow flow-col space-y-3">
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiJava size ={35} />
                      </div>
                    </div>
                    <Spline  scene="https://prod.spline.design/gsoKQX9wUGvXOt7q/scene.splinecode" />
                  </div>  
                  <div>
                    <p class = "timeline-date font-light text-white">DECEMBER 2022</p>
                    <h3 class = "anime text-2xl font-semibold text-white my-5"> Palengcourier </h3>
                    <p class = "ml-7 list-disc font-normal text-white">
                      Palengcourier, a portmanteau for palengke and courier, is an application that lets you connect
                      with your nearest public markets, compare and contrast prices different prices, and find
                      experienced palengke shoppers to assist you in tending to your needs, so you can purchase
                      fresh, high quality local produce for a local price, with the convenience of doing it all from your
                      phone.
                    </p>
                    <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                        <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                        <a href = "https://www.facebook.com/CURSOR.Tackle" target="_blank" rel="noopener noreferrer" class = "font-header under">Learn More </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div id = "cards" class = "word1 relative z-[2]">
              <div class = "animate-pulse">
              <div class = "dot absolute bg-[#ad14ff] mt-[10rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black ">
              </div>
              </div>
              <div class ="flex flex-col justify-start">
                <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" class = "card flex md:flex-row flex-col p-10 md:ml-20 ml-5 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                  <div class = "order-2 splinez ml-[2rem] -mb-[5rem]">
                    <div div class = "text-purple-300 absolute right-0 bottom-[3rem] flow flow-col space-y-3">
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiReact size ={35} />
                      </div>
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiTailwindcss size ={35} />
                      </div>
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiJavascript size ={35} />
                      </div>
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiHtml5 size ={35} />
                      </div>
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiCss3 size ={35} />
                      </div>
                    </div>
                    <Spline scene="https://prod.spline.design/SgHRN5EjFhLDKUZs/scene.splinecode" />
                  </div>  
                  <div>
                    <p class = "timeline-date font-light text-white">DECEMBER 2022</p>
                    <h3 class = "anime text-2xl font-semibold text-white my-5"> Palengcourier </h3>
                    <p class = "ml-7 list-disc font-normal text-white">
                      Palengcourier, a portmanteau for palengke and courier, is an application that lets you connect
                      with your nearest public markets, compare and contrast prices different prices, and find
                      experienced palengke shoppers to assist you in tending to your needs, so you can purchase
                      fresh, high quality local produce for a local price, with the convenience of doing it all from your
                      phone.
                    </p>
                    <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                        <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                        <a href = "https://www.facebook.com/CURSOR.Tackle" target="_blank" rel="noopener noreferrer" class = "font-header under">Learn More </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
        
  )
}

export default Projects