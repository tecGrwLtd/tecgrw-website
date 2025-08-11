import React from 'react'

const AiBusinessHero = () => {
  return (
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
  )
}

export default AiBusinessHero;
