import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
import Cursor from './Cursor';
import DarkVeil from './DarkVeil';
import Typewriter from './Typewriter';
import LoadingScreen from './LoadingScreen';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import DecryptedText from './DecryptedText';
import Footer from './Footer';
import './App.css';

function App() {
  const [isCodeDone, setIsCodeDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bgRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isLoading]);

  useGSAP(() => {
    if (isLoading) return;

    gsap.to(bgRef.current, {
      scale: 1.6,
      yPercent: 20,
      rotation: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: '#app',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    });

    ScrollTrigger.create({
      trigger: "#contact",
      start: "top 80%",
      onToggle: (self) => {
        const nav = document.querySelector(".main-nav");
        const cta = document.querySelector(".cta-container");
        if (self.isActive) {
          nav?.classList.add("nav-hidden");
          cta?.classList.add("cta-hidden");
        } else {
          nav?.classList.remove("nav-hidden");
          cta?.classList.remove("cta-hidden");
        }
      }
    });
  }, [isLoading]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: 0, duration: 1.4 });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <Cursor />
      
      <div className="noise"></div>

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <nav className={`main-nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); lenisRef.current ? lenisRef.current.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Cristian Pirvu</a>
            
            <ul className="nav-links desktop-only">
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Me</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
              <li><a href="#career" onClick={(e) => handleNavClick(e, 'career')}>Career</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            </ul>

            <button className={`hamburger-btn ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </nav>

          <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
            <ul className="mobile-nav-links">
              <li style={{ '--i': 1 }}><a href="#about" onClick={(e) => handleNavClick(e, 'about')}><span className="nav-num">01</span> About Me</a></li>
              <li style={{ '--i': 2 }}><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}><span className="nav-num">02</span> Selected Work</a></li>
              <li style={{ '--i': 3 }}><a href="#career" onClick={(e) => handleNavClick(e, 'career')}><span className="nav-num">03</span> Career</a></li>
              <li style={{ '--i': 4 }}><a href="#contact" onClick={(e) => { handleNavClick(e, 'contact'); }}><span className="nav-num">04</span> Contact</a></li>
            </ul>
            <div className="mobile-menu-footer">
              <div className="mobile-socials">
                <a href="https://www.linkedin.com/in/pirvucristian">LinkedIn</a>
                <a href="https://www.linkedin.com/in/pirvucristian">GitHub</a>
              </div>
            </div>
          </div>
        </>
      )}

      {!isLoading && (
        <div className="cta-container">
          <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>
            <span className="cta-pulse"></span>
            HIRE ME
          </a>
        </div>
      )}

      <div id="app">
        <div ref={bgRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, transformOrigin: 'center center' }}>
           <DarkVeil 
             hueShift={32}
             noiseIntensity={0.1}
             scanlineIntensity={0.2}
             speed={0.4}
             scanlineFrequency={0}
             warpAmount={0.3}
           />
        </div>
        <div className="hero-container">
          <spline-viewer
            url="https://prod.spline.design/XU5Br-GtHu2DZwb3/scene.splinecode"
            className={`spline-canvas ${isCodeDone ? 'spline-visible' : ''}`}
          ></spline-viewer>

          {!isLoading && (
            <>
              <div className="hero">
                <div className="hero-heading-wrapper">
                  <h1 className="hero-heading" data-text="ENGINEERING THE UNREAL.">
                    <DecryptedText
                      text="ENGINEERING THE UNREAL."
                      speed={80}
                      maxIterations={20}
                      animateOn="view"
                      revealDirection="start"
                      sequential={true}
                      useOriginalCharsOnly={true}
                    />
                  </h1>
                </div>
                <p className="hero-sub">
                  Crafting Immersive<br />Digital Experiences.
                </p>
              </div>

              <div className="code-snippet code-1">
                <Typewriter
                  text={`void create_dimension() {\n  initialize_physics_engine();\n  render_robot();\n  update_transform_cache();\n}`}
                  delay={1500}
                  speed={40}
                  onComplete={() => setTimeout(() => setIsCodeDone(true), 800)}
                />
              </div>
              <div className="code-snippet code-2">
                <Typewriter text="refract(void);" delay={2500} speed={40} />
              </div>

              <svg
                className="diagram-overlay"
                viewBox="0 0 1400 780"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <rect x="294" y="310" width="70" height="2" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
                <rect x="294" y="310" width="1" height="120" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
                <rect x="294" y="430" width="40" height="1" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
                <circle cx="297" cy="398" r="3" fill="rgba(240,237,232,0.25)" />
                <circle cx="297" cy="360" r="2" fill="rgba(240,237,232,0.15)" />

                <line x1="342" y1="296" x2="348" y2="302" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
                <line x1="348" y1="296" x2="342" y2="302" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />

                <rect x="940" y="290" width="60" height="1" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
                <rect x="999" y="290" width="1" height="90" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
                <rect x="960" y="380" width="40" height="1" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />

                <rect x="337" y="500" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
                <rect x="290" y="542" width="10" height="10" fill="rgba(240,237,232,0.3)" />

                <line x1="395" y1="390" x2="395" y2="340" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
                <polygon points="395,334 391,343 399,343" fill="rgba(240,237,232,0.15)" />

                <line x1="960" y1="460" x2="960" y2="510" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
                <polygon points="960,516 956,507 964,507" fill="rgba(240,237,232,0.15)" />

                <circle cx="555" cy="655" r="2.5" fill="rgba(240,237,232,0.25)" />
                <circle cx="575" cy="655" r="2.5" fill="rgba(240,237,232,0.25)" />
                <circle cx="615" cy="655" r="2.5" fill="rgba(240,237,232,0.25)" />
                <circle cx="870" cy="660" r="3" fill="rgba(240,237,232,0.3)" />
                <circle cx="1040" cy="390" r="2" fill="rgba(240,237,232,0.2)" />
                <circle cx="1060" cy="390" r="2" fill="rgba(240,237,232,0.2)" />

                <rect x="955" y="284" width="5" height="5" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />
                <rect x="1100" y="358" width="8" height="8" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
                <line x1="1100" y1="284" x2="1110" y2="284" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
                <line x1="1100" y1="284" x2="1100" y2="294" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />

                <line x1="938" y1="272" x2="948" y2="272" stroke="rgba(240,237,232,0.2)" strokeWidth="2" />
              </svg>

              <div className="side-bar-right">
                <div className="side-group-top">
                  <span>Cristian Pirvu // Based in Romania</span>
                  <span className="divider">
                    // &nbsp; Creative Technologist &amp; UX/UI Designer
                  </span>
                </div>

                <div className="side-group-bottom">
                  <span className="scroll-link">
                    SCROLL <span className="scroll-arrow">—&gt;</span>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {!isLoading && (
          <>
            <About />
            <Projects />
            <Timeline />
            <Footer onNavClick={handleNavClick} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
