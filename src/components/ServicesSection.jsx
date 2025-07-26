import React from 'react';
import FadeInSection from './FadeInSection';

const services = [
  {
    title: 'Smart Agriculture',
    icon: (
      <svg className="w-10 h-10 mb-4 text-[#b2c935]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="9" stroke="#b2c935" strokeWidth="2" fill="none" /></svg>
    ),
    desc: 'Precision farming, IoT sensors, and data-driven insights for sustainable yields.'
  },
  {
    title: 'AI Education',
    icon: (
      <svg className="w-10 h-10 mb-4 text-[#095aa3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    desc: 'Workshops, training, and resources to empower the next generation of innovators.'
  },
  {
    title: 'Business AI',
    icon: (
      <svg className="w-10 h-10 mb-4 text-[#231f1f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M9 9h6v6H9z" /></svg>
    ),
    desc: 'Custom AI solutions to optimize operations, drive growth, and unlock value.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#095aa3]">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeInSection key={service.title} direction="up" delay={idx * 120}>
              <div
                className="group bg-[#f8f9fa] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full min-h-[320px] transition-transform duration-300 hover:shadow-2xl focus-within:shadow-2xl cursor-pointer outline-none"
                tabIndex={0}
                aria-label={service.title}
              >
                <div className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#231f1f]">{service.title}</h3>
                <p className="text-[#231f1f] opacity-80 text-base">{service.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
} 