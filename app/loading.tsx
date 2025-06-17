'use client';

import { useState, useEffect } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        switch (prevDots) {
          case '':
            return '.';
          case '.':
            return '..';
          case '..':
            return '...';
          case '...':
            return '';
          default:
            return '';
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="flex min-h-screen items-center justify-center"
      aria-live="polite"
      aria-busy="true"
    >
      <h1 className="text-xl sm:text-5xl font-bold">
        Loading<span className="inline-block w-5 text-left">{dots}</span>
      </h1>
    </main>
  );
};

export default Loading;
