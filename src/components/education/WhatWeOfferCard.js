"use client";

import { offerings } from '@/data/business';

const WhatWeOfferCard = () => {
  return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return(
            <div
              key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#b2c935]/30 hover:-translate-y-1"
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
            </div>)
          })}
        </div>
  )
}

export default WhatWeOfferCard
