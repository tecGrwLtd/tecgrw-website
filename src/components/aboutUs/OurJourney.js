import FadeInSection from '../FadeInSection';

import { journeySteps } from '@/data/ourJourney';

const OurJourney = () => {
  return (
    <section className=" py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <FadeInSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#095aa3]">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From vision to impact - the milestones that shaped TecGrw
            </p>
          </div>
        </FadeInSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#095aa3] to-[#b2c935] rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <FadeInSection key={index} direction="up" delay={index * 100}>
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:mb-0 mb-4`}>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-2xl font-bold text-[#b2c935] mb-2">
                        {step.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Year circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#095aa3] to-[#b2c935] rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 md:relative md:mb-0 mb-4">
                    {step.year.slice(-2)}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
