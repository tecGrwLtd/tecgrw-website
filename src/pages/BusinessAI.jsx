// AIBusiness.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { aiServices } from '../assets/data/aIBusiness';
import ProjectSpotlight from '../components/ProjectSpotlight';
import WhatWeOffer from '../components/WhatWeOffer';
import WhoWeWorkWith from '../components/WhoWeWorkWith';


const AIBusiness = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-2 h-2 bg-[#b2c935] rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-[#095aa3]">AI Solutions for Impact Organizations</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#231f1f] mb-6 leading-tight">
            Turning Data into
            <span className="bg-gradient-to-r from-[#095aa3] to-[#b2c935] bg-clip-text text-transparent block mt-2">
              Solutions That Matter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help organizations harness AI to solve real-world challenges in 
            <span className="font-semibold text-[#095aa3]"> community health</span>, 
            <span className="font-semibold text-[#b2c935]"> education</span>, 
            <span className="font-semibold text-[#095aa3]"> gender equity</span>, and 
            <span className="font-semibold text-[#b2c935]"> agriculture</span>.
          </p>
        </div>
      </section>

      {/* Interactive AI Services Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#b2c935]/10 text-[#095aa3] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Core Solutions
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#231f1f] mb-4">
              AI That Works for Your Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the AI solution that fits your organization's needs
            </p>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === index;
              
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border cursor-pointer transform hover:-translate-y-1 ${
                    isActive ? 'border-[#b2c935] ring-2 ring-[#b2c935]/20' : 'border-gray-200 hover:border-[#095aa3]/30'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-3 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#231f1f] mb-3 line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-80'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose TecGrw Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#231f1f] mb-4">
              Why Choose tecGrw
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Local Expertise", subtitle: "Global Standards", description: "African markets with world-class solutions"},
              { title: "Custom Solutions", subtitle: "Tailored AI", description: "Designed specifically for your context",},
              { title: "Scalable", subtitle: "Cost-Effective Implementation", description: "Grows with your organization and budget"},
              { title: "Ongoing Support", subtitle: "& Training", description: "From implementation to team training"}
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <h3 className="text-lg font-bold text-[#231f1f] mb-1">
                  {benefit.title}
                </h3>
                <div className="text-sm font-medium text-[#095aa3] mb-2">
                  {benefit.subtitle}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectSpotlight />
      <WhatWeOffer />
      <WhoWeWorkWith />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#095aa3] to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-[#b2c935] font-semibold text-sm">Let's Build Together</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            AI isn't just for big corporations
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            It's for communities, too.
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Whether you're planning a pilot or scaling a national program, TecGrw is 
            your AI implementation partner. From ideation to deployment, we work 
            with your team to turn raw data into powerful action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-[#b2c935] hover:bg-[#9bb82d] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              Reach out to Us
            </Link>
            <Link 
              to="/team"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white/10"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIBusiness;