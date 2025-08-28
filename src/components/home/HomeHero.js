import Image from 'next/image'
import CTA from '../CTA';

import FadeInSection from '../FadeInSection';

const HomeHero = ({ headline, description, bgImg, getInTouch = false }) => {
  return (
    <section className="relative w-full min-h-screen bg-[#f8f9fa] overflow-hidden">
      {/*  background pattern */}
      <div className="absolute inset-0">
        {/* grid pattern */}
        <div className="absolute inset-0 opacity-30" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(9,90,163,0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(9,90,163,0.05) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Gradient shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#095aa3]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#b2c935]/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Diagonal tech lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#095aa3]/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b2c935]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 md:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column*/}
          <div className="space-y-8 order-2 lg:order-1 pb-12"> {/* pb-12 to prevent CTA going so down into below section*/}
            <FadeInSection direction="up">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-[#095aa3] via-[#b2c935] to-[#095aa3] text-transparent bg-clip-text">
                  {headline}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                  {description}
                </p> 
                {getInTouch && (
                  <CTA />
                )}
              </div>
            </FadeInSection>
          </div>

          {/* Right Column */}
          <div className="order-1 lg:order-2">
            <FadeInSection direction="right">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
                  <Image
                    src={bgImg}
                    alt="Dashboard preview"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                  />
                  
                  {/* Subtle border overlay */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#095aa3]/10"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#b2c935]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#095aa3]/10 rounded-full blur-2xl"></div>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;