import React from 'react'
import './projects.css'
import Spline from '@splinetool/react-spline';


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
      <div class = "mt-20 ">
        <h1 class = " text-white text-4xl font-semibold tracking-[0.2em]"> Palengcourier </h1>
        <Spline class = "absolute right-[5rem] z-5" scene="https://prod.spline.design/NvcNCgGmONQmmVUG/scene.splinecode" />
      </div>
    </div>
        
  )
}

export default Projects