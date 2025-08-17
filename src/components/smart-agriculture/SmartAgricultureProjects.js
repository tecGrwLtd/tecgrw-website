"use client";

import { useState } from "react";
import { projects, projectImages } from "@/data/agriculture";


const SmartAgricultureProjects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 1);
  const displayedImages = showAllProjects ? projectImages : projectImages.slice(0, 1);
  return (
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Projects Across Rwanda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations of our smart agriculture solutions making a difference in local communities
            </p>
          </div>

          {/* Dynamic Layout Based on State */}
          {!showAllProjects ? (
            /* Collapsed Layout - Projects with Featured Image */
            <div className="grid lg:grid-cols-5 gap-8 items-start mb-12">
              {/* Project Cards - Take more space */}
              <div className="lg:col-span-3 space-y-8">
                {displayedProjects.map((project, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#b2c935] group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#b2c935] rounded-full group-hover:scale-110 transition-transform duration-200"></div>
                      <span className="text-sm font-semibold text-[#095aa3] uppercase tracking-wider">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#231f1f] mb-4 group-hover:text-[#095aa3] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Featured Image - Wider and better proportioned */}
              {displayedImages[0] && (
                <div className="lg:col-span-2">
                  <div className="sticky top-8">
                    <div className="rounded-xl overflow-hidden shadow-lg group bg-gray-100">
                      <img
                        src={displayedImages[0].src}
                        alt={displayedImages[0].alt}
                        className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {displayedImages[0].caption && displayedImages[0].caption !== "<>" && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="text-white text-sm font-medium">
                            {displayedImages[0].caption}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Expanded Layout - Full Width Grid, No Empty Space */
            <div className="mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#b2c935] group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#b2c935] rounded-full group-hover:scale-110 transition-transform duration-200"></div>
                      <span className="text-sm font-semibold text-[#095aa3] uppercase tracking-wider">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#231f1f] mb-4 group-hover:text-[#095aa3] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Show More/Less Button */}
          {(projects.length > 1 || projectImages.length > 1) && (
            <div className="text-center">
              <button
                onClick={() => setShowAllProjects(prev => !prev)}
                className="inline-flex items-center px-8 py-3 bg-[#095aa3] text-white font-semibold rounded-lg hover:bg-[#0c6bc7] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 group"
              >
                {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    showAllProjects ? 'rotate-180' : ''
                  } group-hover:translate-y-0.5`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
  )
}

export default SmartAgricultureProjects