import React from 'react';
import FadeInSection from './FadeInSection';

import mahama_greenhouse from '../assets/images/mahama_greenhouse.jpeg';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <FadeInSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#095aa3] leading-tight">
                Building Rwanda's Tech-Driven Future
              </h2>
              <p className="text-lg text-[#231f1f] mb-6 leading-relaxed">
                We started Tecgrw in 2022 in Kigali with a simple but ambitious vision: to make cutting-edge technology accessible to Rwanda's farmers, businesses, and students. What began as a small team of passionate innovators has grown into a trusted partner for organizations seeking AI-driven solutions.
              </p>
              <p className="text-[#231f1f] mb-8 leading-relaxed">
                Today, we're not just building technology we're cultivating a generation of problem-solvers who understand that the future of agriculture, business, and education lies at the intersection of innovation and practical application. Every project we take on, every student we teach, brings us closer to a Rwanda where technology empowers everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about/our-story"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-[#b2c935] text-white font-semibold shadow-lg hover:bg-[#9db82a] hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Learn Our Story
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/solutions/smart-agriculture"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#095aa3] text-[#095aa3] font-semibold hover:bg-[#095aa3] hover:text-white transition-all duration-200"
                >
                  Explore Solutions
                </a>
              </div>
            </FadeInSection>
          </div>

          {/* Right: Visual Collage */}
          <div className="relative">
            <FadeInSection direction="up" delay={200}>
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                {/* Main large image */}
                <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    // src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                    src={mahama_greenhouse}
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

        {/* Bottom section - Core Values */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <FadeInSection direction="up">
            <h3 className="text-2xl font-bold text-center text-[#231f1f] mb-8">
              What Drives Us Forward
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#095aa3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-[#231f1f] mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Bringing cutting-edge AI and technology solutions to Rwanda's most important sectors
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b2c935] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-[#231f1f] mb-2">Education</h4>
                <p className="text-gray-600 text-sm">
                  Empowering the next generation with skills in AI, programming, and data science
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#095aa3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-[#231f1f] mb-2">Impact</h4>
                <p className="text-gray-600 text-sm">
                  Creating meaningful change in agriculture, business, and education across Rwanda
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}