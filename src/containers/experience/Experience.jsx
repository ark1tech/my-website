import React from 'react';
import AOS from 'aos';
import { FaCircle } from "react-icons/fa";
import 'aos/dist/aos.css';
import './experience.css';
// import { gsap, Power3 } from 'gsap';
// import { ScrollTrigger }  from 'gsap/ScrollTrigger';
// import './experience.css';
// gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    AOS.init();
    // const expRef = useRef(null);
    // useEffect(() => {
    //     const el = expRef.current;
    //     gsap.fromTo(el, {opacity: 0}, {opacity: 1, duration: 1, delay: 1, scrollTrigger :{
    //         trigger: el
    //     }});
    // }, []);
    return (
        <div id = "experience" class = "snap-start w-full h-screen">
            <div id = "experience-text" class = "mx-auto px-40 py-40">
                <h1 data-aos="slide-right" data-aos-delay="200"
        data-aos-duration="1000" class ="exp-title font-header text-6xl md:text-9xl font-bold"> experience </h1>
            </div>
            <div class="main">
                <div class="container" data-aos="fade" data-aos-delay="200" data-aos-duration="1000">
                    <ul>
                        <li>
                            <h3 class="title">Front End Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                            <span class="circle"></span>
                            <span class="date">January 2022</span>
                        </li>
                        <li>
                            <h3 class="title">Back End Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                            <span class="circle"></span>
                            <span class="date">February 2022</span>
                        </li>
                        <li>
                            <h3 class="title">Full Stack Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                            <a href="#">Read More ></a>
                            <span class="circle"></span>
                            <span class="date">March 2022</span>
                        </li>
                        <li>
                            <h3 class="title">App Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                            <span class="circle"></span>
                            <span class="date">April 2022</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div id = "experience-text" class = "mx-auto px-40 py-40">
                <h1 data-aos="slide-right" data-aos-delay="200"
        data-aos-duration="1000" class ="exp-title font-header text-6xl md:text-9xl font-bold"> experience </h1>
            </div>
        </div>
    )
}

export default Experience