"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import CTA from '@/components/CTA';
import FadeInSection from '../FadeInSection';

const HomeHero = ({ 
  headline, 
  description, 
  dashboardImages = [],
  getInTouch = false 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images if multiple provided
  useEffect(() => {
    if (dashboardImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % dashboardImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [dashboardImages.length]);

  // Default dashboard images if none provided
  const defaultImages = [
    "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1756278106/dashboard_soil_data_uqneek.png"
  ];
  
  const images = dashboardImages.length > 0 ? dashboardImages : defaultImages;

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Navbar backdrop area */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#095aa3]/10 to-transparent z-20"></div>
      
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <FadeInSection direction="left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#095aa3] leading-tight">
                  {headline}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                  {description}
                </p>
                
                {getInTouch && (
                  <div className="pt-4">
                    <CTA />
                  </div>
                )}
              </div>
            </FadeInSection>
          </div>

          {/* Right Column - Dashboard Images */}
          <div className="relative order-1 lg:order-2">
            <FadeInSection direction="right">
              <div className="relative">
                {/* Main Dashboard Display */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={images[currentImageIndex]}
                    alt="Dashboard preview"
                    fill
                    className="object-cover object-center transition-opacity duration-500"
                    priority
                    quality={90}
                  />
                  
                  {/* Subtle tech overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#095aa3]/5 via-transparent to-[#b2c935]/5 pointer-events-none"></div>
                </div>

                {/* Multiple Images Indicator */}
                {images.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-[#095aa3] scale-110' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`View dashboard ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#b2c935]/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-[#095aa3]/10 to-transparent rounded-full blur-2xl"></div>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HomeHero;