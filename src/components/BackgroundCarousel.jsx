import React, { useEffect, useRef, useState } from 'react';
import greenhouseHydroponic from '../assets/images/greenhouse_hydroponic.jpeg';
import greenHouseCultivation from '../assets/images/green_house_cultivation.jpg';
import agritech from '../assets/images/agritech.jpeg';

const images = [
  greenhouseHydroponic,
  greenHouseCultivation,
  agritech,
];

export default function BackgroundCarousel({ interval = 4500 }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, interval]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt="Hero background"
          className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'} pointer-events-none select-none`}
          aria-hidden={idx !== current}
          draggable="false"
          onError={(e) => console.error('Image failed to load:', img)}
          onLoad={() => console.log('Image loaded:', img)}
        />
      ))}
      {/* Very subtle dark overlay for readability */}
      {/* <div className="absolute inset-0  pointer-events-none" aria-hidden="true"></div>  */}
    </div>
  );
}