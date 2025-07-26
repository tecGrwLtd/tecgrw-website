import React, { useEffect, useRef, useState } from 'react';
import FadeInSection from './FadeInSection';
import BackgroundCarousel from './BackgroundCarousel';

const HEADLINE = 'Growth, Revolutionized';

const DESCRIPTION = `We help businesses and farmers level up with the latest tech solutions, while also teaching and guiding students through the same cutting-edge technologies we use in the real world.\n\nOur aim is to not only shake up how businesses and the agricultural industry work but also to prepare the next generation to confidently navigate the worlds of data and artificial intelligence.`;

export default function HeroSection() {
  const [displayed, setDisplayed] = useState('');
  const i = useRef(0);

  useEffect(() => {
    if (i.current < HEADLINE.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + HEADLINE[i.current]);
        i.current += 1;
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [displayed]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <BackgroundCarousel />
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full">
          {/* Left: Headline */}
          <div className="flex-1">
            <FadeInSection direction="up">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
                <span aria-label={HEADLINE}>
                  {displayed}
                  <span className="inline-block w-2 h-8 align-middle bg-[#b2c935] animate-pulse ml-1" aria-hidden="true" />
                </span>
              </h1>
            </FadeInSection>
          </div>
          {/* Right: Paragraph and CTA */}
          <div className="flex-1 flex flex-col">
            <FadeInSection direction="up">
              <p className="text-lg md:text-xl text-black-800 font-medium whitespace-pre-line mb-6 drop-shadow">
                {DESCRIPTION}
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-full bg-[#b2c935] text-[#231f1f] font-bold text-lg shadow-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2"
              >
                Get in Touch
              </a>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
} 