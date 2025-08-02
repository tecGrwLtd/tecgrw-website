import React from 'react';
import FadeInSection from './FadeInSection';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Vision & Mission Content */}
          <div>
            <FadeInSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#095aa3] leading-tight">
                Our Vision
              </h2>
              <p className="text-lg text-[#231f1f] mb-6 leading-relaxed">
                To be at the forefront of technological transformation in agriculture, business, and education—creating a future where innovation drives sustainable growth, efficiency, and empowerment.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#095aa3] leading-tight">
                Our Mission
              </h2>
              <p className="text-lg text-[#231f1f] mb-8 leading-relaxed">
                At Tecgrw, we revolutionize industries by providing cutting-edge AI solutions for farmers and businesses while equipping students with real-world tech skills. Through innovation and education, we empower individuals and organizations to thrive in a data-driven future.
              </p>
            </FadeInSection>
          </div>

          {/* Right: Visual Collage */}
          <div className="relative">
            <FadeInSection direction="up" delay={200}>
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                {/* Main large image */}
                <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948409/mahama_greenhouse_rjbkku.jpg"
                    alt="Smart agriculture technology and data analysis"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#095aa3]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Smart Agriculture</h3>
                    <p className="text-sm opacity-90">Data-driven farming solutions</p>
                  </div>
                </div>

                {/* Bottom left image */}
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                    alt="Students learning programming and AI concepts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#b2c935]/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="font-semibold text-sm">AI Education</h4>
                    <p className="text-xs opacity-90">Future innovators</p>
                  </div>
                </div>

                {/* Bottom right image */}
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                    alt="Business team using AI-powered analytics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231f1f]/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="font-semibold text-sm">Business AI</h4>
                    <p className="text-xs opacity-90">Smart solutions</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#b2c935]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#095aa3]/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
