import React from 'react';
import { Link } from 'react-router-dom'; 
import FadeInSection from './FadeInSection';

const HEADLINE = 'Growth, Revolutionized';
const DESCRIPTION = `We help businesses and farmers level up with the latest tech solutions, while also teaching and guiding students through the same cutting-edge technologies we use in the real world.

Our aim is to not only shake up how businesses and the agricultural industry work but also to prepare the next generation to confidently navigate the worlds of data and artificial intelligence.`;

 const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat pt-20 md:pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 90, 163, 0.7), rgba(9, 90, 163, 0.7)), url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop')`
      }}
    >
      <div className="relative z-10 flex items-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full py-8 md:py-12">
          {/* Left: Headline */}
          <div className="flex-1">
            <FadeInSection direction="up">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">
                {HEADLINE}
              </h1>
            </FadeInSection>
          </div>
          
          {/* Right: Paragraph and CTA */}
          <div className="flex-1 flex flex-col">
            <FadeInSection direction="up">
              <p className="text-lg md:text-xl text-white font-medium whitespace-pre-line mb-8 drop-shadow leading-relaxed">
                {DESCRIPTION}
              </p>
              <Link
                to="/contact"
                className="animate-pulse inline-block px-8 py-4 rounded-lg bg-[#b2c935] text-white font-bold text-lg shadow-lg hover:bg-[#9db82a] hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get in Touch
              </Link>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
