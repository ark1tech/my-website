import { Navbar, Particle } from './components'; 
import { Header, Experience, Projects } from './containers';
import './index.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function App() {
  const appRef = useRef(null);
    useEffect(() => {
        const el = appRef.current;
        gsap.fromTo(el, {opacity: 0}, {opacity: 1, duration: 1, delay: 0.5});
    }, []);
  return (
    <div class = "App">
      <div class = "absolute z-[-1]">
          <Particle />  
        </div>
      <div class = "bg scroll-smooth">
        <div class = "absolute z-[20]">
          <Navbar /> 
        </div>
        <div ref = {appRef}>
          <Header />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
}
  
export default App

