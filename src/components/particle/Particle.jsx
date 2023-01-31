import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react'

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <Particles 
      id = "tsparticles"
      init = {particlesInit}
      loaded = {particlesLoaded}
      options={{
        "particles": {
          "number": {
            "value": 32,
            "density": {
              "enable": true,
              "value_area": 800
            } 
          },
          "color": {
            "value": "#e48eff"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 2.2736869457888087,
              "opacity_min": 0.024360931562022948,
              "sync": false
            }
          },
          "size": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 689.4671861721748,
            "color": "#ff8484",
            "opacity": 0.02405118091298284,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 400.8530152163807
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "[push]"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}
    />
  )
}

export default Particle