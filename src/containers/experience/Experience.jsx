import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './experience.css';
import { BsArrowRight } from 'react-icons/bs';

const Experience = () => {
    AOS.init();

    useEffect(() => {
      document.getElementById("deck").onmousemove = e => {
        for(const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        };
      }
    }, [])
      
    return (
        <div id = "experience" class = "flex-col sticky md:px-40 px-10 pt-20">
            <h1 data-aos="slide-right" data-aos-delay="10" data-aos-duration="1000" class ="text-left w-fit cursor-pointer exp-title font-header text-6xl md:text-9xl font-bold">
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">e</span>
              </span>
            </span> 
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">x</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">p</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">e</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">r</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">i</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">e</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">n</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">c</span>
              </span>
            </span>
            <span class = "outer1">
              <span class = "inner1">
                <span class = "letter1">e</span>
              </span>
            </span>
            </h1>
            <div id = "deck">
              <div data-aos="zoom-in-down" data-aos-delay="125" data-aos-duration="1000" class = "word1 top-0 pb-10 pt-20"> 
                <a class = "hover:scale-[1.01] transition-transform duration-300 items-center flex md:flex-row flex-col" href ="https://www.facebook.com/UPCURSOR" target="_blank" rel="noopener noreferrer">
                  <img class = "md:mr-10 mr-0 md:mb-0 mb-10 h-20 w-20" src={require("../../assets/kerser.png")} alt ="CURSOR logo"></img>
                  <h1 class = "org-date text-white text-4xl font-semibold tracking-[0.2em]"> UP Association of Computer Science Majors (UP CURSOR) </h1>
                </a>
              </div>
              <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000" class = "word1 timeline border-l-[1px] border-white border-opacity-[0.1] md:ml-[2.3rem] ml-1 mt-3 py-16 space-y-14">
                  <div id = "cards" class = "word1 relative">
                      <div class = "animate-pulse">
                      <div class = "dot absolute bg-[#ad14ff] mt-[10.5rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black "></div>
                      </div>
                      <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" class = "card p-10 md:ml-20 ml-5 rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                          <p class = "timeline-date font-light text-white">JANUARY 2023</p>
                          <h3 class = "anime text-2xl font-semibold text-white mt-5"> Speaker Relations & Facilitator<span class ="font-normal text-white uppercase text-base">, Tackle 2023: Virtual Career Tech Expo</span> </h3>
                          <p class = "text-white font-normal italic mb-5"> Relevant Skills: Management, Communication</p>
                          <ul class = "ml-10">
                              <li class = "list-disc font-normal text-white"> 
                                Handled company representatives from <a href = "https://www.maya.ph/" target="_blank" rel="noopener noreferrer"> 
                                <span class = "under text-purple-300 font-header">Maya Philippines</span> 
                                </a> and <a href = "https://www.twistresources.com/" target="_blank" rel="noopener noreferrer"> 
                                    <span class = "under text-purple-300 font-header">TwistResources</span>
                                </a> with succinct and clear briefing sessions, guaranteeing their talks were well-delivered 
                                to <span class ="text-purple-300 font-header">400+ registered participants.</span>
                              </li>
                              <li class = "list-disc font-normal text-white">Hosted company booths and bridged a good communication between the participants and the company speakers, 
                                propelling interest and a series of questions from the participants.
                              </li>
                          </ul>
                          <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                              <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                              <a href = "https://www.facebook.com/CURSOR.Tackle" target="_blank" rel="noopener noreferrer" class = "font-header under">Learn More </a>
                          </div>
                      </div>
                  </div>
                  <div id = "cards" class = "relative">
                      <div class = "animate-pulse">
                      <div class = "dot absolute bg-[#ad14ff] mt-[12rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black "></div>
                      </div>
                      <div data-aos="flip-up" data-aos-delay="50" data-aos-duration="1000" class = "card p-10 md:ml-20 ml-5 bg-white bg-opacity-[0.01] rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                          <p class = "timeline-date font-light text-white">NOVEMBER - DECEMBER 2022</p>
                          <h3 class = "anime text-2xl font-semibold text-white mt-5"> Executive Head<span class ="font-normal text-white uppercase text-base">, UNPLUG: LIFE OUTSIDE ACADS</span> </h3>
                          <p class = "text-white font-normal italic mb-5"> Relevant Skills: Project Management, Collaborative Work, Communication</p>
                          <ul class = "ml-10">
                              <li class = "list-disc font-normal text-white">Spearheaded a team of <span class ="text-purple-300 font-header">46 student volunteers</span> in organizing a 2-day webinar event that garnered <span class ="text-purple-300 font-header"> 100+ registered participants</span>.</li>
                              <li class = "list-disc font-normal text-white">Supervised 5 committees that fast-tracked the timeline by <span class ="text-purple-300 font-header">200%</span>, securing <span class ="text-purple-300 font-header">4 speakers, 5 ambassadors, and 3 media 
                                partnerships</span> and launching the event successfully <span class ="text-purple-300 font-header">within only a month</span>. </li>
                              <li class = "list-disc font-normal text-white">Designed promotional materials that generated organic reach to <span class ="text-purple-300 font-header">~16,8K Facebook accounts</span> with <span class ="text-purple-300 font-header">~4K post engagements</span>.</li>
                          </ul>
                          <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                              <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                              <a href = "https://www.facebook.com/Unplug22" target="_blank" rel="noopener noreferrer" class = "font-header under"> Learn More </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000" class = "items-center flex md:flex-row flex-col top-0 py-10"> 
                <a class = "hover:scale-[1.01] transition-transform duration-300 items-center flex md:flex-row flex-col" href ="https://www.facebook.com/COMSCIatUP.BAG" target="_blank" rel="noopener noreferrer">
                  <img class = "md:mr-10 mr-0 md:mb-0 mb-10 h-20 w-20" src={require("../../assets/chisigma.png")} alt ="Chi Sigma logo"></img>
                  <h1 class = "org-date text-white text-4xl font-semibold tracking-[0.2em]">COMSCI@UP.BAG</h1>
                </a>
              </div>
              <div  data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000" class = "timeline border-l-[1px] md:ml-[2.3rem] ml-1 border-white border-opacity-[0.1] mt-3 py-10 space-y-14">;
                  <div id = "cards" class = "relative">
                      <div class = "animate-pulse">
                      <div class = "dot absolute bg-[#ad14ff] mt-[8.5rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black "></div>
                      </div>  
                      <div data-aos="flip-up" data-aos-delay="50" data-aos-duration="1000" class = "card p-10 md:ml-20 ml-5 bg-white bg-opacity-[0.01] rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                          <p class = "timeline-date font-light text-white">OCTOBER 2021 - AUGUST 2022</p>
                          <h3 class = "anime text-2xl font-semibold text-white mt-5"> Public Relations Committee Member </h3>
                          <p class = "text-white font-normal italic mb-5"> Relevant Skills: Graphic Design, Collaborative Work, Public Relations, Management</p>
                          <ul class = "ml-10">
                              <li class = "list-disc font-normal text-white">Created publicity materials with <span class ="text-purple-300 font-header">over 2K people reached</span>, generating <span class ="text-purple-300 font-header">50+% increase</span> in event attendance.</li>
                          </ul>
                          <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                              <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                              <a href = "https://drive.google.com/drive/folders/1hTQhhSKNheEDwIBmeGMWH04gGg9xnQjm?usp=sharing" target="_blank" rel="noopener noreferrer" class = "font-header under"> Learn More </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000" class = "items-center flex md:flex-row flex-col top-0 py-10"> 
                <a class = "hover:scale-[1.01] transition-transform duration-300 items-center flex md:flex-row flex-col" href ="https://www.facebook.com/UPB.USC.College.of.Science" target="_blank" rel="noopener noreferrer">
                  <img class = "md:mr-10 mr-0 md:mb-0 mb-10 h-20 w-20" src={require("../../assets/upbcs2.png")} alt ="UPB USC CS logo"></img>
                  <h1 class = "org-date text-white text-4xl font-semibold tracking-[0.2em]">UP Baguio College of Science Committee</h1>
                </a>
              </div>
              <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000" class = "timeline border-l-[1px] border-white border-opacity-[0.1] md:ml-[2.3rem] ml-1 mt-3 py-10 space-y-14">
                  <div id = "cards" class = "relative">
                      <div class = "animate-pulse">
                      <div class = "dot absolute bg-[#ad14ff] mt-[11rem] -ml-[0.65rem] h-5 w-5 rounded-full border-4 border-black "></div>
                      </div>
                      <div data-aos="flip-up" data-aos-delay="50" data-aos-duration="1000" class = "card p-10 md:ml-20 ml-5 bg-white bg-opacity-[0.01] rounded-[10px] border-solid border-white border-opacity-[0.1] border-[1px]">
                          <p class = "timeline-date font-light text-white">SEPTEMBER 2021 - APRIL 2022</p>
                          <h3 class = "anime text-2xl font-semibold text-white mt-5"> Public Relations Team Head </h3>
                          <p class = "text-white font-normal italic mb-5"> Relevant Skills: Graphic Design, Collaborative Work, Public Relations</p>
                          <ul class = "ml-10">
                              <li class = "list-disc font-normal text-white">Managed a creative team in raising awareness of a campaign, developing <span class ="text-purple-300 font-header">media strategy and cohesive brand</span> on a series of 
                                publicity materials that piqued the attention of <span class ="text-purple-300 font-header">over 200 students</span>.</li>
                              <li class = "list-disc font-normal text-white">Conceptualized and designed promotional materials for a college-wide event that gathered <span class ="text-purple-300 font-header">700+ supporters</span>.</li>
                          </ul>
                          <div class = "flex flex-row cursor-pointer text-1xl font-semibold text-white mt-10">
                              <BsArrowRight size = {20} class = "mr-2 mt-[0.1rem]" />
                              <a href ="https://drive.google.com/drive/folders/1JcQbICDZpw6E7ot8-CQd4D7DC32-hyyj?usp=sharing" target="_blank" rel="noopener noreferrer" class = "font-header under"> Learn More </a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Experience