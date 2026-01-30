'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    'Websites for Local Businesses.',
    'Built by Your Neighbor.'
  ];

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsTyping(false);
      return;
    }

    const fullText = lines.slice(0, currentLine + 1).join('\n');
    const targetLength = fullText.length;

    if (displayedText.length < targetLength) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50); // typing speed
      return () => clearTimeout(timeout);
    } else if (currentLine < lines.length - 1) {
      // Pause between lines
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, currentLine, lines]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0, opacity: 1 }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cream overlay */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1, backgroundColor: 'rgba(253, 248, 243, 0.4)' }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a3728] mb-6 min-h-[1.2em] md:min-h-[2.4em]">
          {displayedText.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < displayedText.split('\n').length - 1 && <br />}
            </span>
          ))}
          <span
            className={`inline-block w-[3px] h-[1em] bg-[#d4a574] ml-1 align-middle ${isTyping ? 'animate-pulse' : 'animate-blink'}`}
          />
        </h1>

        <p className="text-lg md:text-xl text-[#5c4a3d] max-w-2xl mx-auto mb-8">
          I&apos;m Anthony—a web developer right here in Hershey, PA. I help
          small businesses get online with simple, professional websites. No
          monthly fees, no hassle, no jargon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="px-8 py-3 bg-[#d4a574] text-white rounded-lg font-medium hover:bg-[#c49464] transition-colors"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="text-[#4a3728] underline hover:no-underline"
          >
            Or just say hi
          </a>
        </div>
      </div>
    </section>
  );
}
