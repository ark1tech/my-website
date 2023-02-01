import React, { useEffect } from 'react'
import './contact.css'

const Contact = () => {

    useEffect(() => {
        document.getElementById("deck2").onmousemove = e => {
          for(const card of document.getElementsByClassName("card2")) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          };
        }
        
        const submit = document.getElementById("submit");
        const input = document.getElementById("input");
        const but = document.getElementById("but")
        const error = document.getElementById("error");

        but.addEventListener("click", (e) => {
            const value = input.value;
            if (value === ""){
                error.style.opacity = 1;
            } else {
                error.style.opacity = 0;
                submit.disabled = false;
            }
        });

      }, [])

  return (
    <div id = "contact" class = "flex-col sticky md:px-40 px-10 py-20">
        <h1 data-aos="slide-right" data-aos-delay="10" data-aos-duration="1000" class ="text-left w-fit cursor-pointer mb-20 con-title font-header text-6xl md:text-9xl font-bold">
            <span class = "outer3">
                <span class = "inner3">
                <span class = "letter3">c</span>
                </span>
            </span> 
            <span class = "outer3">
                <span class = "inner3">
                <span class = "letter3">o</span>
                </span>
            </span>
            <span class = "outer3">
                <span class = "inner3">
                <span class = "letter3">n</span>
                </span>
            </span>
            <span class = "outer3">
                <span class = "inner3">
                <span class = "letter3">t</span>
                </span>
            </span>
            <span class = "outer3">
                <span class = "inner3">
                <span class = "letter3">a</span>
                </span>
            </span>
            <span class = "outer3">
                <span class = "inner3">
                <span class = "letter3">c</span>
                </span>
            </span>
            <span class = "outer3">
                <span class = "inner3">
                <span class = "letter3">t</span>
                </span>
            </span>
        </h1>
        <div class = "mt-10 flex xl:flex-row flex-col justify-between">
            <div id ="deck2" class = "w-full" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
                <form action ="https://getform.io/f/f1cee1a7-d41b-423a-9986-571511a9c412" method="POST" class = "card2 pb-11 pt-12 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px] flex flex-col">
                    <div class = "flex md:flex-row flex-col w-full md:space-x-5 md:space-y-0 space-y-5">
                        <div class = "flex flex-col w-full">
                            <label  class = "text-white font-header font-semibold">Name</label> 
                            <input
                            id = "input"
                            type = "text"
                            name = "Name"
                            placeholder = "Your name"
                            class = "p-2 w-full bg-transparent text-white focus:outline-none rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]"
                            />
                        </div>
                        <div class = "flex flex-col w-full">
                            <label class = "text-white font-header font-semibold">Email</label>
                            <input
                            id = "input"
                            type = "text"
                            name = "Email"
                            placeholder = "email@example.com"
                            class = "p-2 w-full bg-transparent text-white focus:outline-none rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]"
                            />
                        </div>
                    </div>
                    <div class = "flex flex-col w-full mt-5">
                        <label class = "text-white font-header font-semibold">Message   </label>
                        <textarea
                        id = "input"
                        type = "text"
                        name = "Message"
                        placeholder = "Your message"
                        rows = "5"
                        class = "p-2 w-full bg-transparent text-white focus:outline-none rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]"
                        />
                    </div>
                    <div class = "mt-5 w-full flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between">
                        <h1 id = "error" class = "text-red-300 font-header font-semibold opacity-0 transition-opacity duration-200">Kindly fill out the form first.</h1> 
                        <div class="w-fit rounded-[1.25em] bg-gradient-to-br from-pink-400 via-violet-500 to-purple-500 p-[0.125em]">
                            <div id = "but" class="flex w-fit rounded-[1.25em] items-center justify-center bg-black hover:bg-transparent duration-1000 back px-6 py-1">
                                <button id ="submit" disabled="true"><h1 class="font-semibold text-white">SEND</h1></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class = "w-full flex flex-col items-end">
                <h1 class = "text-white text-7xl"> </h1> 
                <img class = "h-20 w-20" src={require("../../assets/logo.png")} alt ="Arki's logo"></img>
            </div>
        </div>
    </div>
  )
}

export default Contact