import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';

const HeroSection = ({ headline, description, bgImg, getInTouch = false }) => {
  const sectionStyle = {
    // Increased overlay opacity for better navbar contrast
    backgroundImage: `linear-gradient(rgba(9, 90, 163, 0.6), rgba(9, 90, 163, 0.6)), url(${bgImg})`,
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={sectionStyle}
    >
      {/* Top gradient overlay for navbar area */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/30 to-transparent z-0"></div>
      
      <div className="relative z-10 flex items-center min-h-screen max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full py-8 md:py-12">
          
          {/* Left: Headline */}
          <div className="flex-1">
            <FadeInSection direction="up">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">
                {headline}
              </h1>
            </FadeInSection>
          </div>
          
          {/* Right: Paragraph and CTA */}
          <div className="flex-1 flex flex-col">
            <FadeInSection direction="up">
              <p className="text-lg md:text-xl text-white font-medium whitespace-pre-line mb-8 drop-shadow leading-relaxed">
                {description}
              </p>
              
              {getInTouch && (
                <Link
                  to="/contact"
                  className="animate-pulse inline-block px-8 py-4 rounded-lg bg-[#b2c935] text-white font-bold text-lg shadow-lg hover:bg-[#9db82a] hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Get in Touch
                </Link>
              )}
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;