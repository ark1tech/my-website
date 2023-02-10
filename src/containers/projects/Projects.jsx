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
import { BsArrowRight } from 'react-icons/bs';


const Projects = () => {
  return (
    <div id = "projects" class = "flex-col sticky md:px-40 px-10 pt-20">
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
              <div class = "dot absolute bg-[#ad14ff] mt-[13rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black ">
              </div>
              </div>
              <div class ="flex flex-col justify-start">
                <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" class = "card flex md:flex-row flex-col p-10 md:ml-20 ml-5 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                  <div class = " order-2 splinez w-fit -mt-[8rem] -mb-[10rem] md:-mr-[4rem] mr-[20rem]">
                    <div class = "z-[2] text-purple-300 absolute right-[3rem] bottom-[6rem] flow flow-col space-y-3">
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiFigma size ={35} />
                      </div>
                      <div class= "icon-card w-fit h-fit p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiAdobeillustrator size ={35} />
                      </div>
                    </div>
                    <Spline class ="z-[1] md:scale-[1] scale-[0.5] md:m-0 -m-[3rem]" scene="https://prod.spline.design/NvcNCgGmONQmmVUG/scene.splinecode" />
                  </div>  
                  <div>
                    <p class = "timeline-date font-light text-white">DECEMBER 2022</p>
                    <h3 class = "anime text-2xl font-semibold text-white my-5"> Palengcourier </h3>
                    <p class = "ml-7 list-disc font-normal text-white">
                      In this project, I made a <span class = " text-purple-300 font-header">prototype for a mobile application</span> designed to connect users to their nearest public markets. 
                      The prototype was created using Figma with some elements from Adobe Illustrator. 
                      <br /> <br />
                      It takes into account <span class = " text-purple-300 font-header">important concepts of UI/UX design</span> such as ease of navigation, visual consistency, and intuitive interaction design <span class = " text-purple-300 font-header">to provide users with a seamless experience</span>. 
                    </p>
                    <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                        <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                        <a href = "https://www.figma.com/proto/jFhh1lTwVxHZjzjnm0d1p1/Palengcourier?node-id=1%3A132&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A132&hotspot-hints=0" target="_blank" rel="noopener noreferrer" class = "font-header under">View on Figma</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div id = "cards" class = "word1 relative z-[2]">
              <div class = "animate-pulse">
              <div class = "dot absolute bg-[#ad14ff] mt-[15rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black ">
              </div>
              </div>
              <div class ="flex flex-col justify-start">
                <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" class = "card flex md:flex-row flex-col p-10 md:ml-20 ml-5 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                  <div class = "order-2 md:scale-[1] scale-[0.5] splinez ml-[2rem] -mb-[4.7rem]">
                    <div div class = " text-purple-300 absolute right-0 bottom-[3rem] flow flow-col space-y-3 z-[2]">
                      <div class= "icon-card w-fit h-fit  p-5 border-solid border-white border-[1px] border-opacity-[0.1] rounded-[10px]">
                        <SiJava size ={35} />
                      </div>
                    </div>
                    <Spline class ="z-[1] md:scale-[1] scale-[0.5] md:m-0 -m-[3rem]" scene="https://prod.spline.design/gsoKQX9wUGvXOt7q/scene.splinecode" />
                  </div>  
                  <div>
                    <p class = "timeline-date font-light text-white">MAY 2022</p>
                    <h3 class = "anime text-2xl font-semibold text-white my-5"> Student Database GUI </h3>
                    <p class = "ml-7 list-disc font-normal text-white">
                    This project is an interactive offline database system aimed at providing accessible student services. 
                    <br/>                      
                    <br/>
                    The database was built using <span class = " text-purple-300 font-header">Java Swing GUI and utilizes the principles of object-oriented programming and file handling</span>. 
                    It also features a <span class = " text-purple-300 font-header">visually appealing interface</span> that was carefully crafted to help users quickly find the information they need. 
                    </p>
                    <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                        <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                        <a href = "https://github.com/ark1tech/Student-Database-GUI" target="_blank" rel="noopener noreferrer" class = "font-header under">View on GitHub</a>
                        <a class ="font-header mx-[0.5rem]">  •  </a>
                        <a href = "https://drive.google.com/file/d/1qgVCh2HrFKbS44WqITqGjSo5wNRrCRBM/view?usp=sharing" target="_blank" rel="noopener noreferrer" class = "font-header under">See documentation</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div id = "cards" class = "word1 relative z-[1]">
              <div class = "animate-pulse">
              <div class = "dot absolute bg-[#ad14ff] mt-[15rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black ">
              </div>
              </div>
              <div class ="flex flex-col justify-start">
                <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" class = "card flex md:flex-row flex-col p-10 md:ml-20 ml-5 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                  <div class = "order-2 md:scale-[1] scale-[0.5] splinez ml-[2rem] -mb-[4.7rem]">
                    <div div class = "z-[2] text-purple-300 absolute right-0 bottom-[3rem] flow flow-col space-y-3">
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
                    <Spline class ="z-[1] md:scale-[1] scale-[0.5] md:m-0 -m-[3rem]" scene="https://prod.spline.design/SgHRN5EjFhLDKUZs/scene.splinecode" />
                  </div>  
                  <div>
                    <p class = "timeline-date font-light text-white">JANUARY 2023</p>
                    <h3 class = "anime text-2xl font-semibold text-white my-5"> Uhhh... this website </h3>
                    <p class = "ml-7 list-disc font-normal text-white">
                      I had been planning to make a personal website for a long time and I am glad I finally did it! 
                      This website was made using <span class = " text-purple-300 font-header">React and Tailwind</span> with touches of some JS libraries. 
                      I am really proud of how this turned out because what I had envisioned was brought to life.
                    <br/> <br/>
                      This showcases my personality and skills as a frontend developer. <br/>
                      I hope you like it! 💜
                    </p>
                    <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                        <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                        <a href = "https://github.com/ark1tech/my-website" target="_blank" rel="noopener noreferrer" class = "font-header under">View on GitHub</a>
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