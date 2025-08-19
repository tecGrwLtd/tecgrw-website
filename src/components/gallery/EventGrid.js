"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

const EventCard = ({ event, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  // Check if card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide images only when visible
  useEffect(() => {
    if (!isVisible || event.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === event.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, event.images.length]);

  // Check if description needs "Show More" button (200 characters threshold)
  const needsShowMore = event.description.length > 200;

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group mb-12`}
    >
      
      {/* Image Gallery Section */}
      <div className="relative lg:w-1/2 overflow-hidden">
        {/* Main Image Display */}
        <div className="relative h-64 lg:h-96 overflow-hidden">
          {/* Image Slider Container */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {event.images.map((image, imgIndex) => (
              <div key={imgIndex} className="relative w-full h-full flex-shrink-0">
                <Image
                  src={image}
                  alt={`${event.title} - Image ${imgIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-white/95 backdrop-blur-sm text-[#231f1f] px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              {event.category}
            </span>
          </div>

          {/* Dots Indicator */}
          {event.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {event.images.map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
        <div className="space-y-4">
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#095aa3]" />
              <span className="text-sm font-medium">{event.date}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-[#231f1f] group-hover:text-[#095aa3] transition-colors duration-300">
            {event.title}
          </h3>

          {/* Description */}
          <div className="text-gray-700 leading-relaxed">
            <p className="text-base">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;