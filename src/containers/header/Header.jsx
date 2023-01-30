import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div id = "home" class = "snap-start flex md:flex-row flex-col pt-[12rem] pb-[9.5rem] md:px-40 px-10 justify-center">
      <div id = "text">
        <p class = "word text-center w-full text-white font-[200] font-info tracking-[0.3em]"> HELLO THERE! 👋 MY NAME IS</p>
        <div id = "hero">
          <h1 class = "z-10 cursor-pointer text-center w-full text-6xl md:text-9xl anime-title"> 
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">r</span>
              </span>
            </span> 
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">a</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">y</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">m</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">u</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">n</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">d</span>
              </span>
            </span>
            <br></br>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">k</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">l</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">i</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">e</span>
              </span>
            </span>
            <span class = "outer">
              <span class = "inner">
                <span class = "letter">n</span>
              </span>
            </span>
          </h1>
        </div>
        <p class = "word text-center w-full text-white font-[200] tracking-[0.2em] pl-1.5 pt-6 pb-10"> I'm a <span class = "under font-header font-[400]">frontend developer</span> and <br></br> a <span class = "font-header font-[400] under">data science enthusiast</span> <br></br> from UP Diliman. </p>
        <div class = "word flex flex-col items-center mx-auto">
          <div class="w-fit rounded-[1.25em] bg-gradient-to-br from-pink-400 via-violet-500 to-purple-500 p-[0.125em]">
            <div class="cursor-pointer flex w-fit rounded-[1.25em] items-center justify-center bg-black hover:bg-transparent duration-1000 back px-6 py-1">
              <h1 class="font-semibold text-white">CONTACT ME</h1>
            </div>
          </div>
          {/* <h1 class = "pt-[2rem] text-white underline underline-offset-[10px]"> VIEW RESUME </h1>  */}
        </div>
      </div>
    </div>
  )
}

export default Header