import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 0, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timeoutId;
    let intervalId;
    let isMounted = true;

    timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        if (!isMounted) return;
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, speed, onComplete]);

  return (
    <>
      {displayedText}
      <span className="cursor-blink">|</span>
    </>
  );
};

export default Typewriter;
