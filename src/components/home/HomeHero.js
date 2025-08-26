import Link from 'next/link'
import Image from 'next/image'

import FadeInSection from '../FadeInSection';

const HomeHero = ({ headline, description, bgImg, getInTouch = false }) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImg}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      
      {/* Strong overlay for dashboard bgimage visibility*/}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.65)] z-10"></div>
      
      {/* tech-themed accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(9,90,163,0.2)] via-transparent to-[rgba(178,201,53,0.15)] z-15"></div>
      {/*  for navbar area */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-transparent z-20"></div>

      <div className="relative z-30 flex items-center min-h-screen max-w-10xl mx-auto px-4 md:px-8 pt-20 md:pt-24">
        <div className="w-full py-5 md:py-12 flex">
          <div className="max-w-2xl">
            <FadeInSection direction="up">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h1 className="text-2xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight">
                  {headline}
                </h1>
                <p className="text-lg md:text-xl text-white font-medium whitespace-pre-line mb-8 drop-shadow-lg leading-relaxed">
                  {description}
                </p>
                {getInTouch && (
                  <Link
                    href="/contact"
                    className="animate-pulse inline-block px-8 py-4 rounded-lg bg-[#b2c935] text-white font-bold text-lg shadow-lg hover:bg-[#9db82a] hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Get in Touch
                  </Link>
                )}
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
