import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const duration = 4000; 
    const interval = 40; 
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loading-scanner"></div>
      
      <div className="loading-percentage">
        {progress.toString().padStart(2, '0')}%
      </div>
      
      <div className="loading-code">
        <Typewriter 
          text={`>> initialize_core_systems()...\n>> mapping_memory_sectors()...\n>> compiling_shaders()...\n>> decrypting_assets()...\n>> establishing_connection()...\n>> SYSTEM_READY`} 
          speed={30} 
          delay={500} 
        />
      </div>
      
      <svg
        className="loading-diagram"
        viewBox="0 0 1400 780"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="150" y="200" width="40" height="1" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
        <rect x="189" y="200" width="1" height="80" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
        <circle cx="150" cy="200" r="2" fill="rgba(240,237,232,0.25)" />
        
        <rect x="1200" y="500" width="80" height="1" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
        <rect x="1200" y="420" width="1" height="80" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
        <circle cx="1280" cy="500" r="3" fill="rgba(240,237,232,0.3)" />

        <line x1="1200" y1="420" x2="1180" y2="400" stroke="rgba(240,237,232,0.18)" strokeWidth="1" />
        <circle cx="1180" cy="400" r="2" fill="rgba(240,237,232,0.15)" />

        <circle cx="700" cy="150" r="2.5" fill="rgba(240,237,232,0.2)" />
        <circle cx="720" cy="150" r="2.5" fill="rgba(240,237,232,0.2)" />
        <circle cx="740" cy="150" r="2.5" fill="rgba(240,237,232,0.2)" />
        
        <rect x="300" y="600" width="5" height="5" stroke="rgba(240,237,232,0.25)" strokeWidth="1" />
        <line x1="300" y1="602" x2="280" y2="602" stroke="rgba(240,237,232,0.15)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default LoadingScreen;
