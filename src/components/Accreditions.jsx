import React from 'react';
import FadeInSection from './FadeInSection';

import farmtechsocietylogo from '../assets/images/farmtechsocietylogo.jpg';
import wageningenunilogo from '../assets/images/wageningenunilogo.jpg';

const accreditations = [
  {
    id: 1,
    name: 'Farm Tech Society',
    description: 'EU society for controlled environment greenhouses and indoor farms',
    logo: farmtechsocietylogo
  },
  {
    id: 2,
    name: 'Wageningen University',
    description: 'Leading agricultural research and education institution',
    logo: wageningenunilogo
  }
];

export default function AccreditationsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#095aa3] mb-4">
              Our Accreditations
            </h2>
            <p className="text-lg text-[#231f1f]/70 max-w-2xl mx-auto leading-relaxed">
              Recognized by leading organizations for our commitment to innovation and excellence in agricultural technology
            </p>
          </FadeInSection>
        </div>

        {/* Accreditations Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {accreditations.map((accreditation, index) => (
            <FadeInSection key={accreditation.id} direction="up" delay={index * 150}>
              <div className="group flex flex-col items-center text-center max-w-xs">
                {/* Logo Container */}
                <div className="w-32 h-24 md:w-40 md:h-28 mb-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg rounded-lg overflow-hidden bg-white border border-gray-100">
                  <img 
                    src={accreditation.logo}
                    alt={`${accreditation.name} logo`}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                
                {/* Accreditation Info */}
                <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-[#231f1f] mb-2 text-lg">
                    {accreditation.name}
                  </h3>
                  <p className="text-sm text-[#231f1f]/60 leading-relaxed">
                    {accreditation.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Separator Line */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <FadeInSection direction="up">
            <div className="text-center">
              <p className="text-sm text-[#231f1f]/50 font-medium">
                Trusted by organizations across Rwanda and beyond
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}