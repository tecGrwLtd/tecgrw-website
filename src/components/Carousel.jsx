import React, { useState, useRef, useEffect, useCallback } from 'react';
import greenhouseHydroponic from '../assets/images/greenhouse_hydroponic.jpeg';
import greenHouseCultivation from '../assets/images/green_house_cultivation.jpg';
import agritech from '../assets/images/agritech.jpeg';

const images = [
  {
    src: greenhouseHydroponic,
    alt: 'Hydroponic greenhouse with lush crops',
  },
  {
    src: greenHouseCultivation,
    alt: 'Greenhouse cultivation with advanced technology',
  },
  {
    src: agritech,
    alt: 'Modern agritech solutions in action',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const numImages = images.length;

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      setCurrent((prev) => (prev - 1 + numImages) % numImages);
    } else if (e.key === 'ArrowRight') {
      setCurrent((prev) => (prev + 1) % numImages);
    }
  }, [numImages]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onKeyDown={handleKeyDown}
    >
      {images.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
        />
      ))}
      {/* Controls */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#095aa3] rounded-full p-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]"
        onClick={() => setCurrent((prev) => (prev - 1 + numImages) % numImages)}
        aria-label="Previous image"
        tabIndex={0}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#095aa3] rounded-full p-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]"
        onClick={() => setCurrent((prev) => (prev + 1) % numImages)}
        aria-label="Next image"
        tabIndex={0}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-[#b2c935] border-[#095aa3]' : 'bg-white border-[#b2c935]'} focus:outline-none`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
} 