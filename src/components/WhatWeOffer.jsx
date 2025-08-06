import React from 'react';

import { offerings } from '../assets/data/aIBusiness';

const WhatWeOffer = () => {

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#b2c935] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
             WHAT WE OFFER
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#231f1f] mb-6">
            Custom-Built AI Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions help organizations streamline operations and make data-driven decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#b2c935]/30 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${offering.color} text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-[#231f1f] mb-4">
                  {offering.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#095aa3] to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Whichever business issue you're addressing
            </h3>
            <p className="text-xl text-blue-100">
              tecGrw builds AI frameworks tailored to your mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;