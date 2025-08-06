// components/ProjectSpotlight.jsx
import React from 'react';
import { projectFeatures } from '../assets/data/aIBusiness';

const ProjectSpotlight = () => {

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#095aa3] to-blue-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#b2c935] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PROJECT SPOTLIGHT
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            AI for Child Protection
          </h2>
          <div className="text-lg text-blue-100 mb-6">
            with <span className="font-semibold text-white">PLAN International Rwanda</span>
          </div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Implementing <span className="text-[#b2c935] font-medium">"AI-Driven Solutions to Strengthen Child Protection & 
            Reduce Teenage Pregnancy"</span> across Bugesera, Nyaruguru and Gatsibo Districts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projectFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-[#b2c935] rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <IconComponent className="text-white" size={20} />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-blue-200 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-[#b2c935] font-medium">
            Using AI not for profit but for impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;