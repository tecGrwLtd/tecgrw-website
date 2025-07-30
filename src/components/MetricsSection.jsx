import React from 'react';
import FadeInSection from './FadeInSection';

const metrics = [
  {
    label: 'Farmers Empowered',
    value: '40',
    color: '#b2c935',
  },
  {
    label: 'Greenhouses Built',
    value: '4',
    color: '#095aa3',
  },
  {
    label: ' graduated student batches',
    value: '1',
    color: '#231f1f',
  },
  {
    label: 'AI Projects Delivered',
    value: '5',
    color: '#b2c935',
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#095aa3]">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <FadeInSection key={metric.label} direction="up" delay={idx * 120}>
              <div
                className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-8 h-full min-h-[180px] transition-transform duration-300 hover:shadow-xl animate-fade-in"
                tabIndex={0}
                aria-label={metric.label}
              >
                <span
                  className="text-4xl md:text-5xl font-extrabold mb-2"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </span>
                <span className="text-[#231f1f] text-lg md:text-xl font-medium text-center opacity-80">
                  {metric.label}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
} 