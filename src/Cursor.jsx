import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const positionRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      positionRef.current.mx = e.clientX;
      positionRef.current.my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${positionRef.current.mx}px`;
        cursorRef.current.style.top = `${positionRef.current.my}px`;
      }
    };

    const animateCursor = () => {
      positionRef.current.rx += (positionRef.current.mx - positionRef.current.rx) * 0.12;
      positionRef.current.ry += (positionRef.current.my - positionRef.current.ry) * 0.12;
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${positionRef.current.rx}px`;
        cursorRingRef.current.style.top = `${positionRef.current.ry}px`;
      }
      
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={cursorRingRef}></div>
    </>
  );
};

export default Cursor;
