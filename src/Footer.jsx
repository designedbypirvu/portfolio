import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DecryptedText from './DecryptedText';
import './Footer.css';

const Footer = ({ onNavClick }) => {
  const footerRef = useRef(null);
  const marqueeRef = useRef(null);
  const textRef = useRef(null);
  const [time, setTime] = useState("");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const romanianTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Bucharest',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(romanianTime);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (!textRef.current) return;
    gsap.to(textRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  });

  useGSAP(() => {
    const st = {
      trigger: footerRef.current,
      start: "top 80%",
      onEnter: () => setIsFooterVisible(true),
    };

    
    gsap.fromTo(".footer-top",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: st }
    );

    
    gsap.fromTo(".footer-text-line",
      { y: 100, opacity: 0, skewY: 4 },
      {
        y: 0, opacity: 1, skewY: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: footerRef.current, start: "top 75%" }
      }
    );

    
    gsap.fromTo(".footer-cta",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.3, scrollTrigger: { trigger: footerRef.current, start: "top 70%" } }
    );

    
    gsap.fromTo(".footer-main-right",
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: footerRef.current, start: "top 70%" } }
    );

    
    gsap.fromTo(".footer-col",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".footer-bottom", start: "top 90%" }
      }
    );
  }, { scope: footerRef });

  return (
    <footer id="contact" className="footer" ref={footerRef}>
      
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 1,
          overflow: "hidden",
        }}
        viewBox="0 0 1400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        
        <path d="M 20 20 L 20 80 L 80 80" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        <rect x="17" y="17" width="6" height="6" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />

        
        <path d="M 1380 20 L 1380 80 L 1320 80" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        <rect x="1377" y="17" width="6" height="6" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />

        
        <path d="M 20 780 L 20 720 L 80 720" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        <rect x="17" y="777" width="6" height="6" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />

        
        <path d="M 1380 780 L 1380 720 L 1320 720" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        <rect x="1377" y="777" width="6" height="6" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />

        
        <line x1="12" y1="100" x2="12" y2="700" stroke="rgba(240,237,232,0.06)" strokeWidth="1" strokeDasharray="3 10"/>
        <circle cx="12" cy="250" r="1.5" fill="rgba(240,237,232,0.2)" />
        <circle cx="12" cy="400" r="1.5" fill="rgba(240,237,232,0.15)" />
        <circle cx="12" cy="550" r="1.5" fill="rgba(240,237,232,0.2)" />

        
        <line x1="1388" y1="100" x2="1388" y2="700" stroke="rgba(240,237,232,0.06)" strokeWidth="1" strokeDasharray="3 10"/>
        <circle cx="1388" cy="250" r="1.5" fill="rgba(240,237,232,0.15)" />
        <circle cx="1388" cy="400" r="1.5" fill="rgba(240,237,232,0.2)" />
        <circle cx="1388" cy="550" r="1.5" fill="rgba(240,237,232,0.15)" />

        
        <line x1="100" y1="18" x2="500" y2="18" stroke="rgba(240,237,232,0.08)" strokeWidth="1"/>
        <line x1="100" y1="14" x2="100" y2="22" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>
        <line x1="500" y1="14" x2="500" y2="22" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>
        <circle cx="300" cy="18" r="2" fill="rgba(240,237,232,0.15)" />

        
        <line x1="900" y1="782" x2="1300" y2="782" stroke="rgba(240,237,232,0.08)" strokeWidth="1"/>
        <line x1="900" y1="778" x2="900" y2="786" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>
        <line x1="1300" y1="778" x2="1300" y2="786" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>

        
        <line x1="680" y1="55" x2="700" y2="55" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>
        <line x1="690" y1="45" x2="690" y2="65" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>
        <circle cx="690" cy="55" r="3" fill="none" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>

        <line x1="1100" y1="295" x2="1120" y2="295" stroke="rgba(240,237,232,0.15)" strokeWidth="1"/>
        <line x1="1110" y1="285" x2="1110" y2="305" stroke="rgba(240,237,232,0.15)" strokeWidth="1"/>

        
        <line x1="140" y1="440" x2="150" y2="450" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>
        <line x1="150" y1="440" x2="140" y2="450" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>

        <line x1="1250" y1="650" x2="1260" y2="660" stroke="rgba(240,237,232,0.15)" strokeWidth="1"/>
        <line x1="1260" y1="650" x2="1250" y2="660" stroke="rgba(240,237,232,0.15)" strokeWidth="1"/>

        
        <line x1="40" y1="300" x2="100" y2="300" stroke="rgba(240,237,232,0.12)" strokeWidth="1"/>
        <polygon points="100,296 112,300 100,304" fill="rgba(240,237,232,0.18)"/>

        <line x1="1360" y1="500" x2="1300" y2="500" stroke="rgba(240,237,232,0.12)" strokeWidth="1"/>
        <polygon points="1300,496 1288,500 1300,504" fill="rgba(240,237,232,0.18)"/>

        
        <rect x="160" y="92" width="6" height="6" stroke="rgba(240,237,232,0.22)" strokeWidth="1" />
        <rect x="1220" y="680" width="5" height="5" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
        <rect x="620" y="750" width="7" height="7" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
        <rect x="940" y="52" width="5" height="5" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />

        
        <circle cx="400" cy="770" r="2" fill="rgba(240,237,232,0.2)" />
        <circle cx="420" cy="770" r="2" fill="rgba(240,237,232,0.14)" />
        <circle cx="440" cy="770" r="2" fill="rgba(240,237,232,0.08)" />

        <circle cx="1020" cy="40" r="2" fill="rgba(240,237,232,0.2)" />
        <circle cx="1040" cy="40" r="2" fill="rgba(240,237,232,0.14)" />
        <circle cx="1060" cy="40" r="2" fill="rgba(240,237,232,0.08)" />
      </svg>

      <div className="footer-top footer-reveal">
        <p className="footer-status-blip">
          <span className="blip"></span>
          AVAILABLE FOR FREELANCE WORK
        </p>
        <p className="footer-location">
          BASED IN ROMANIA (GMT+3)
        </p>
      </div>

      <div className="footer-main">
        <div className="footer-main-left">
          <h2 className="footer-huge-text footer-reveal">
          <span className="footer-text-line">LET'S BUILD</span>
          <span className="footer-text-line accent-line">
            {isFooterVisible ? (
              <DecryptedText
                text="SOMETHING"
                speed={80}
                maxIterations={15}
                animateOn="view"
                revealDirection="start"
                sequential={true}
                useOriginalCharsOnly={true}
              />
            ) : (
              <span style={{ visibility: 'hidden' }}>SOMETHING</span>
            )}
          </span>
          <span className="footer-text-line accent-line">
            {isFooterVisible ? (
              <DecryptedText
                text="GREAT."
                speed={60}
                maxIterations={15}
                animateOn="view"
                revealDirection="start"
                sequential={true}
                useOriginalCharsOnly={true}
              />
            ) : (
              <span style={{ visibility: 'hidden' }}>GREAT.</span>
            )}
          </span>
        </h2>
        
        <div className="footer-cta footer-reveal">
          <a href="mailto:hello@cristianpirvu.com" className="footer-email-link">
            hello@cristianpirvu.com
            <span className="footer-email-line"></span>
          </a>
          </div>
        </div>

        <div className="footer-main-right footer-reveal">
          <spline-viewer
            url="https://prod.spline.design/XU5Br-GtHu2DZwb3/scene.splinecode"
            className="footer-spline"
          ></spline-viewer>
        </div>
      </div>

      <div className="footer-bottom footer-reveal">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>LOCAL TIME</h4>
            <p className="footer-time">{time} — BUCHAREST</p>
          </div>
          <div className="footer-col">
            <h4>SOCIALS</h4>
            <ul className="footer-social-links">
              <li><a href="https://www.linkedin.com/in/pirvucristian">LinkedIn</a></li>
              <li><a href="https://github.com/designedbypirvu">GitHub</a></li>
              <li><a href="https://www.instagram.com/pirvu_cristian_/">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SECTIONS</h4>
            <ul className="footer-social-links">
              <li><a href="#about" onClick={(e) => onNavClick(e, 'about')}>About Me</a></li>
              <li><a href="#projects" onClick={(e) => onNavClick(e, 'projects')}>Selected Work</a></li>
              <li><a href="#career" onClick={(e) => onNavClick(e, 'career')}>Career</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-col align-right">
            <h4>COPYRIGHT</h4>
            <p>&copy; {new Date().getFullYear()} CRISTIAN PIRVU.</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>

      <div className="footer-marquee" ref={marqueeRef}>
        <div className="footer-marquee-inner" ref={textRef}>
          <span>CRISTIAN PIRVU — CREATIVE TECHNOLOGIST — UX/UI DESIGNER — OPEN FOR OPPORTUNITIES — </span>
          <span>CRISTIAN PIRVU — CREATIVE TECHNOLOGIST — UX/UI DESIGNER — OPEN FOR OPPORTUNITIES — </span>
          <span>CRISTIAN PIRVU — CREATIVE TECHNOLOGIST — UX/UI DESIGNER — OPEN FOR OPPORTUNITIES — </span>
          <span>CRISTIAN PIRVU — CREATIVE TECHNOLOGIST — UX/UI DESIGNER — OPEN FOR OPPORTUNITIES — </span>
          <span>CRISTIAN PIRVU — CREATIVE TECHNOLOGIST — UX/UI DESIGNER — OPEN FOR OPPORTUNITIES — </span>
          <span>CRISTIAN PIRVU — CREATIVE TECHNOLOGIST — UX/UI DESIGNER — OPEN FOR OPPORTUNITIES — </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
