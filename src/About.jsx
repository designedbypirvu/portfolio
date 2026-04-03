import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import DecryptedText from './DecryptedText';
import ProfileCard from './ProfileCard';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef();

  useGSAP(() => {

    gsap.set('.about-heading',       { y: 40, opacity: 0 });
    gsap.set('.about-body p',        { y: 40, opacity: 0 });
    gsap.set('.profile-card-reveal', { opacity: 0, scale: 0.9, y: 30 });
    gsap.set('.stat-item',           { y: 30, opacity: 0 });
    gsap.set('.about-section-tag',   { y: 10, opacity: 0 });

    const st_enter = {
      trigger: containerRef.current,
      start: 'top 78%',
      toggleActions: 'play none none none',
    };

    gsap.to('.about-section-tag', {
      y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
      scrollTrigger: st_enter,
    });

    gsap.to('.about-heading', {
      y: 0, opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { ...st_enter, start: 'top 75%' },
    });

    gsap.to('.about-body p', {
      y: 0, opacity: 1,
      duration: 0.85,
      stagger: 0.13,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.about-body', start: 'top 88%', toggleActions: 'play none none none' },
    });

    gsap.to('.stat-item', {
      y: 0, opacity: 1,
      duration: 0.65,
      stagger: 0.09,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.about-stats', start: 'top 90%', toggleActions: 'play none none none' },
    });

    const counterData = [
      { sel: '.stat-val-0', end: 3,   suffix: '+', padZero: true },
      { sel: '.stat-val-1', end: 10,  suffix: '+' },
      { sel: '.stat-val-2', end: 100, suffix: '%' },
    ];
    counterData.forEach(({ sel, end, suffix, padZero }) => {
      const el = containerRef.current.querySelector(sel);
      if (!el) return;
      gsap.fromTo(
        { n: 0 }, { n: 0 },
        {
          n: end,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate() { 
            let val = Math.round(this.targets()[0].n);
            if (padZero && val < 10) val = '0' + val;
            el.textContent = val + suffix; 
          },
          scrollTrigger: { trigger: '.about-stats', start: 'top 90%', toggleActions: 'play none none none' },
        }
      );
    });

    gsap.to('.profile-card-reveal', {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-photo-container',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.to('.profile-card-reveal', {
      y: -45,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

  }, { scope: containerRef });

  return (
    <section className="about-section" ref={containerRef} id="about">
      <svg
        className="diagram-overlay"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.8 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 5% 15% L 5% 5% L 15% 5%" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
        <rect x="calc(5% - 3px)" y="calc(5% - 3px)" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
        <line x1="10%" y1="5%" x2="10%" y2="8%" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        
        <path d="M 85% 5% L 95% 5% L 95% 25%" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
        <rect x="calc(95% - 3px)" y="calc(5% - 3px)" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
        <circle cx="95%" cy="15%" r="1.5" fill="rgba(240,237,232,0.2)" />
        <circle cx="95%" cy="18%" r="1.5" fill="rgba(240,237,232,0.2)" />
        
        <line x1="5%" y1="80%" x2="5%" y2="95%" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        <line x1="5%" y1="95%" x2="25%" y2="95%" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        <rect x="calc(5% - 3px)" y="calc(95% - 3px)" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
        <circle cx="10%" cy="95%" r="2" fill="rgba(240,237,232,0.3)" />
        <circle cx="15%" cy="95%" r="1.5" fill="rgba(240,237,232,0.2)" />
        <circle cx="17%" cy="95%" r="1.5" fill="rgba(240,237,232,0.2)" />
        <line x1="10%" y1="75%" x2="8%" y2="75%" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
        
        <path d="M 50% 10% L 50% 12% M 49.5% 11% L 50.5% 11%" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
        <path d="M 80% 90% L 80% 92% M 79.5% 91% L 80.5% 91%" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
        <path d="M 12% 40% L 12% 42% M 11.5% 41% L 12.5% 41%" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
      </svg>
      <div className="about-container">

        <div className="about-content">

          <div className="about-label">
            <span className="about-section-tag">01 &mdash; About Me</span>
          </div>

          <div className="about-heading-wrapper">
            <div className="about-heading-line">
              <h2 className="about-heading">
                <DecryptedText
                  text="BEYOND"
                  speed={100}
                  maxIterations={20}
                  animateOn="view"
                  revealDirection="start"
                  sequential={true}
                  useOriginalCharsOnly={true}
                  delay={400}
                />
              </h2>
            </div>
            <div className="about-heading-line">
              <h2 className="about-heading">
                <DecryptedText
                  text="THE CODE."
                  speed={100}
                  maxIterations={20}
                  animateOn="view"
                  revealDirection="start"
                  sequential={true}
                  useOriginalCharsOnly={true}
                  delay={400}
                />
              </h2>
            </div>
          </div>

          <div className="about-body">
            <p>I am a creative technologist focused on crafting immersive digital experiences that blur the line between engineering and art.</p>
            <p>With a strong foundation in modern web technologies and a passion for interactive UI, I transform complex ideas into intuitive, beautifully animated interfaces.</p>
            <p>Every pixel is placed with purpose, and every animation is tuned to perfection. Let's build the unreal.</p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-value stat-val-0">03+</span>
              <span className="stat-label">Years of<br />Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value stat-val-1">10+</span>
              <span className="stat-label">Projects<br />Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value stat-val-2">100%</span>
              <span className="stat-label">Client<br />Satisfaction</span>
            </div>
          </div>

        </div>

        <div className="about-photo-container">
          <div className="profile-card-reveal" style={{width: '100%', maxWidth: '400px'}}>
            <ProfileCard
              avatarUrl="https://i.ibb.co/fVh7bcTT/IMG-0687.png"
              name="Cristian Pirvu"
              title=" "
              handle="pirvucristian"
              status="On LinkedIn"
              contactText="View CV"
              behindGlowEnabled={true}
              enableTilt={true}
              innerGradient="linear-gradient(145deg, rgba(63,129,224,0.15) 0%, rgba(240,237,232,0.05) 100%)"
              behindGlowColor="rgba(63,129,224,0.35)"
            />
          </div>
        </div>
      </div>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <filter id="aboutNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
    </section>
  );
}