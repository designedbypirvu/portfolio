import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    number: "01",
    title: "Cadence.",
    tech: ["HTML", "CSS", "JAVASCRIPT", "SPOTIFY API"],
    description:
      "Your music, synchronized. Cadence leverages the Spotify API to craft custom, high-energy playlists tailored to your unique listening habits and mood.",
    image:
      "https://i.imgur.com/FYzkpIs.gif",
    
    
    link: "https://spotifycadence.vercel.app",
  },
  {
    id: 2,
    number: "02",
    title: "EMMA JOBS",
    tech: ["HTML/CSS/JAVASCRIPT", "REACT", "GSAP"],
    description:
      "Bridging the gap between talent and opportunity across the DACH and Benelux regions. Emma Jobs specializes in expert recruitment, connecting forward-thinking companies with the future of their workforce.",
    image:
      "https://i.imgur.com/ChUaUl6.gif",
    
    
    link: "https://www.emma-jobs.com",
  },
  {
    id: 3,
    number: "03",
    title: "Gebäudereinigung Baloi",
    tech: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    description:
      "Premium cleaning solutions for every space. From commercial offices to residential sites, Gebäudereinigung Baloi provides professional, top-tier maintenance services across Karlsruhe and Ettlingen, Germany.",
    image:
      "https://i.imgur.com/6QmHgSM.gif",
    
    
    link: "#",
  },
  {
    id: 4,
    number: "04",
    title: "ANALOG.BRZ",
    tech: ["HTML/CSS/JAVASCRIPT", "REACT", "GSAP"],
    description:
      "Where photography meets digital immersion. analog.brz is an interactive portfolio showcasing the professional vision and captured moments of a master photographer through a dynamic, tactile lens.",
    image:
      "https://i.imgur.com/Fsa9j0Q.gif",
    
    
    link: "#",
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef();

  useGSAP(
    () => {
      const st_enter = {
        trigger: containerRef.current,
        start: "top 78%",
        toggleActions: "play none none none",
      };

      gsap.fromTo(
        ".project-section-tag",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: st_enter,
        },
      );

      gsap.fromTo(
        ".project-card",
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const handleCardClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section" ref={containerRef}>
      <svg
        className="diagram-overlay"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.8,
          overflow: "visible",
        }}
        viewBox="0 0 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M 1180 40 L 1340 40 L 1340 140" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
        <rect x="1337" y="37" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
        <circle cx="1260" cy="40" r="2.5" fill="rgba(240,237,232,0.2)" />

        <rect x="57" y="640" width="6" height="6" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />

        <line x1="32" y1="120" x2="52" y2="120" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>
        <line x1="42" y1="110" x2="42" y2="130" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>
        <circle cx="42" cy="120" r="2" fill="none" stroke="rgba(240,237,232,0.25)" strokeWidth="1"/>

        <line x1="18" y1="200" x2="18" y2="680" stroke="rgba(240,237,232,0.08)" strokeWidth="1" strokeDasharray="4 8"/>
        <circle cx="18" cy="200" r="2" fill="rgba(240,237,232,0.2)" />
        <circle cx="18" cy="440" r="2" fill="rgba(240,237,232,0.15)" />
        <circle cx="18" cy="680" r="2" fill="rgba(240,237,232,0.2)" />

        <line x1="1382" y1="200" x2="1382" y2="700" stroke="rgba(240,237,232,0.08)" strokeWidth="1" strokeDasharray="4 8"/>
        <circle cx="1382" cy="200" r="2" fill="rgba(240,237,232,0.15)" />
        <circle cx="1382" cy="450" r="2" fill="rgba(240,237,232,0.2)" />

        <line x1="30" y1="450" x2="80" y2="450" stroke="rgba(240,237,232,0.15)" strokeWidth="1"/>
        <polygon points="80,446 90,450 80,454" fill="rgba(240,237,232,0.2)"/>

        <line x1="1370" y1="510" x2="1320" y2="510" stroke="rgba(240,237,232,0.15)" strokeWidth="1"/>
        <polygon points="1320,506 1310,510 1320,514" fill="rgba(240,237,232,0.2)"/>

        <rect x="110" y="58" width="6" height="6" stroke="rgba(240,237,232,0.3)" strokeWidth="1" />
        <rect x="1270" y="820" width="5" height="5" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />
        <rect x="680" y="30" width="8" height="8" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />

        <line x1="200" y1="28" x2="580" y2="28" stroke="rgba(240,237,232,0.1)" strokeWidth="1"/>
        <line x1="200" y1="24" x2="200" y2="32" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>
        <line x1="580" y1="24" x2="580" y2="32" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>

        <circle cx="1300" cy="840" r="2" fill="rgba(240,237,232,0.25)" />
        <circle cx="1320" cy="840" r="2" fill="rgba(240,237,232,0.18)" />
        <circle cx="1340" cy="840" r="2" fill="rgba(240,237,232,0.12)" />
        <line x1="155" y1="295" x2="165" y2="305" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>
        <line x1="165" y1="295" x2="155" y2="305" stroke="rgba(240,237,232,0.2)" strokeWidth="1"/>

        
        <line x1="1235" y1="600" x2="1245" y2="610" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>
        <line x1="1245" y1="600" x2="1235" y2="610" stroke="rgba(240,237,232,0.18)" strokeWidth="1"/>

        
        <line x1="660" y1="855" x2="740" y2="855" stroke="rgba(240,237,232,0.12)" strokeWidth="1"/>
        <circle cx="700" cy="855" r="2.5" fill="rgba(240,237,232,0.2)" />
      </svg>
      <div className="projects-container">
        <div className="projects-header">
          <div className="project-label">
            <span className="project-section-tag">02 &mdash; Projects</span>
          </div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const isActive = activeId === project.id;

            return (
              <div
                key={project.id}
                className={`project-card ${isActive ? "active" : ""}`}
                onClick={() => handleCardClick(project.id)}
                style={{
                  "--bg-image": `url(${project.image})`,
                  "--filter-color": project.filterColor,
                  "--glow-color": project.glowColor,
                }}
              >
                <div className="project-card-bg"></div>
                <div className="project-card-overlay"></div>
                <div className="project-card-gradient"></div>

                <div className="project-card-border"></div>

                <div className="project-content">
                  <div className="project-title-area">
                    <span className="project-number">{project.number}.</span>
                    <h3 className="project-name">{project.title}</h3>
                  </div>

                  <div className="project-details">
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-list">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="project-tech-badge">
                          [{t}]
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <div className="project-cta-wrapper">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-cta"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Site ↗
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                
                <div className="project-bg-visual">
                  <div className="scanlines"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
