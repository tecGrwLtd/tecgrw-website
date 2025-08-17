"use client";

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

import { features } from "@/data/agriculture";

const SmartSolutions = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);

  const truncateText = (text, wordLimit = 20) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  return (
     <>
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Our Smart Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform agricultural practices and increase productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#095aa3] to-[#0c6bc7] text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {truncateText(feature.description, 25)}
                      </p>
                      <button
                        onClick={() => setSelectedFeature(feature)}
                        className="inline-flex items-center text-[#095aa3] hover:text-[#0c6bc7] font-semibold transition-colors duration-200 group"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Modal for Feature Details */}
      <Dialog open={!!selectedFeature} onClose={() => setSelectedFeature(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {selectedFeature && (
                    <>
                      <div className="w-16 h-16 bg-gradient-to-br from-[#095aa3] to-[#0c6bc7] text-white rounded-xl flex items-center justify-center shadow-lg">
                        <selectedFeature.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <Dialog.Title className="text-2xl font-bold text-[#231f1f]">
                          {selectedFeature.title}
                        </Dialog.Title>
                      </div>
                    </>
                  )}
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {selectedFeature && (
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                    {selectedFeature.description}
                  </p>
                </div>
              )}
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="px-6 py-3 bg-[#095aa3] text-white font-semibold rounded-lg hover:bg-[#0c6bc7] transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      </>
  )
}

export default SmartSolutions;
