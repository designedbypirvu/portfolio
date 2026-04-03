import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const TRACK_H = 520;
const LINE_Y = 260;
const BUBBLE_R = 38;
const STEM_H = 56;

const jobs = [
  {
    id: 1,
    company: "West University of Timisoara",
    role: "Started studying Computer Science",
    period: "Sep 2019",
    above: true,
    logo: "https://uvt.ro/wp-content/uploads/2020/07/Asset-8.png",
  },
  {
    id: 2,
    company: "Nokia",
    role: "Full Stack Web Dev Intern",
    period: "Feb 2021 – Jun 2021",
    above: false,
    logo: "https://aptira.com/wp-content/uploads/2013/05/nokia_logo_white.png",
  },
  {
    id: 3,
    company: "Starta Dev Group",
    role: "Frontend Developer Intern",
    period: "Jul 2021 – Sep 2021",
    above: true,
    logo: "https://i.ibb.co/84G8M4Zk/STARTA-Logo-03.png",
  },
  {
    id: 4,
    company: "West University of Timisoara",
    role: "Graduated in Computer Science",
    period: "Jul 2022",
    above: false,
    logo: "https://uvt.ro/wp-content/uploads/2020/07/Asset-8.png",
  },
  {
    id: 5,
    company: "SAP",
    role: "Development Consultant Intern",
    period: "Aug 2022 – Oct 2023",
    above: true,
    logo: "https://adcengineers.com/wp-content/uploads/2017/09/Logo-sap-white.png",
  },
  {
    id: 6,
    company: "CS Gemini INFOGHID",
    role: "IT Systems Specialist",
    period: "Jun 2024 – Apr 2026",
    above: false,
    logo: "https://i.ibb.co/67FcRMf1/logo-infoghid.png",
  },
];

export default function Timeline() {
  const sectionRef = useRef();
  const visualRef = useRef();
  const lineRef = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        const n = jobs.length;
        const nodes = gsap.utils.toArray(".tl-node");
        const stems = gsap.utils.toArray(".tl-stem");
        const texts = gsap.utils.toArray(".tl-text");
        const line = lineRef.current;

        gsap.set(nodes, {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
        });
        gsap.set(line, { scaleX: 0 });

        stems.forEach((stem, i) => {
          const isAbove = jobs[i].above;
          gsap.set(stem, {
            scaleY: 0,
            opacity: 0,
            transformOrigin: isAbove ? "bottom center" : "top center",
          });
        });

        gsap.set(texts, { opacity: 0, y: 16 });

        const tl = gsap.timeline({ paused: true });

        jobs.forEach((_, i) => {
          const slot = i;
          const railX = (i + 1) / n;

          tl.to(line, { scaleX: railX, ease: "none", duration: 0.7 }, slot);

          tl.to(
            stems[i],
            { scaleY: 1, opacity: 1, duration: 0.2, ease: "power2.out" },
            slot + 0.65,
          );

          tl.to(
            nodes[i],
            { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(2)" },
            slot + 0.72,
          );

          tl.to(
            texts[i],
            { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
            slot + 0.82,
          );
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: visualRef.current,
          pinSpacing: false,
          scrub: 1.2,
          animation: tl,
        });
      });

      mm.add("(max-width: 900px)", () => {
        const items = gsap.utils.toArray(".tl-item");
        
        gsap.fromTo(lineRef.current,
          { scaleY: 0, scaleX: 1, transformOrigin: "top center" },
          { 
            scaleY: 1, 
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".tl-track",
              start: "top 20%",
              end: "bottom 80%",
              scrub: true,
              invalidateOnRefresh: true,
            }
          }
        );

        items.forEach((item) => {
          gsap.fromTo(item, 
            { opacity: 0, y: 40 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.6, 
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      });

      gsap.fromTo(
        ".tl-label",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section className="tl-section" ref={sectionRef} id="career">
      <div className="tl-visual" ref={visualRef}>
        <svg
          className="diagram-overlay"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.8 }}
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 50 150 L 50 50 L 150 50" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
          <rect x="47" y="47" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
          
          <path d="M 850 50 L 950 50 L 950 150" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
          <rect x="947" y="47" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
          
          <path d="M 50 850 L 50 950 L 150 950" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
          <rect x="47" y="947" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
          
          <path d="M 950 850 L 950 950 L 850 950" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
          <rect x="947" y="947" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
          
          <line x1="40" y1="200" x2="40" y2="800" stroke="rgba(240,237,232,0.08)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="960" y1="200" x2="960" y2="800" stroke="rgba(240,237,232,0.08)" strokeWidth="1" strokeDasharray="4 8" />
          
          <circle cx="40" cy="500" r="4" stroke="rgba(240,237,232,0.2)" />
          <circle cx="40" cy="500" r="2" fill="rgba(240,237,232,0.2)" />
          <line x1="20" y1="500" x2="60" y2="500" stroke="rgba(240,237,232,0.2)" />
          
          <circle cx="960" cy="500" r="4" stroke="rgba(240,237,232,0.2)" />
          <circle cx="960" cy="500" r="2" fill="rgba(240,237,232,0.2)" />
          <line x1="940" y1="500" x2="980" y2="500" stroke="rgba(240,237,232,0.2)" />
          
          <polygon points="900,300 895,280 905,280" fill="rgba(240,237,232,0.2)" />
          <line x1="900" y1="200" x2="900" y2="280" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
          
          <polygon points="100,700 95,720 105,720" fill="rgba(240,237,232,0.2)" />
          <line x1="100" y1="720" x2="100" y2="800" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
          
          <path d="M 150 300 L 150 320 M 145 310 L 155 310" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
          <path d="M 850 700 L 850 720 M 845 710 L 855 710" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
        </svg>
        <div className="tl-header">
          <div className="tl-label">
            <span className="tl-section-tag">03 &mdash; Career</span>
          </div>
          <p className="tl-scroll-hint">
            <span className="tl-scroll-arrow">&#8595;</span> Scroll to explore
          </p>
        </div>

        <div className="tl-viewport">
          <div className="tl-grid">
            <div className="tl-rail">
              <div className="tl-rail-active" ref={lineRef} />
            </div>

            <div className="tl-track">
              {jobs.map((j, idx) => {
                const isAbove = j.above;

                const nodeCy = isAbove
                  ? LINE_Y - STEM_H - BUBBLE_R
                  : LINE_Y + STEM_H + BUBBLE_R;
                const nodeTop = nodeCy - BUBBLE_R;
                const stemTop = isAbove ? LINE_Y - STEM_H : LINE_Y;
                const textPos = isAbove
                  ? { top: LINE_Y + 20 }
                  : { bottom: TRACK_H - LINE_Y + 20 };

                return (
                  <div 
                    className="tl-item" 
                    key={j.id} 
                    style={{ 
                      "--idx": idx,
                      "--text-top": isAbove ? `${LINE_Y + 20}px` : "auto",
                      "--text-bottom": !isAbove ? `${TRACK_H - LINE_Y + 20}px` : "auto",
                      "--node-top": `${nodeTop}px`,
                      "--stem-top": `${stemTop}px`,
                      "--stem-height": `${STEM_H}px`
                    }}
                  >
                    <div className="tl-node">
                      {j.logo ? (
                        <img
                          className="tl-logo-img"
                          src={j.logo}
                          alt={j.company}
                        />
                      ) : (
                        <div
                          className="tl-logo-placeholder"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div className="tl-stem" />

                    <div className="tl-text">
                      <span className="tl-company">{j.company}</span>
                      <span className="tl-role">{j.role}</span>
                      <span className="tl-period">{j.period}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
