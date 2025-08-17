"use client";

import { 
        Sprout,
        GraduationCap,
        Brain } from 'lucide-react';

const services = [
  {
    title: 'Agriculture',
    icon: Sprout,
    iconColor: 'text-[#b2c935]',
    desc: 'Smart Green Houses, Controlled Environment Farming, Hydroponics, Vertical Farming, Precision Farming Solutions'
  },
  {
    title: 'AI Education',
    icon: GraduationCap,
    iconColor: 'text-[#095aa3]',
    desc: 'Hands-on experience in data analytics and AI, learning directly from real-world applications.'
  },
  {
    title: 'AI Business Solutions',
    icon: Brain,
    iconColor: 'text-[#231f1f]',
    desc: 'Customized AI Solutions, AI Strategy Development, Predicted models for forecasting trends and behaviors, Risk Management & Compliance'
  }
];

const ServiceSectionCard = () => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <IconComponent className={`w-10 h-10 mb-4 ${service.iconColor} mx-auto`} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
  )
}

export default ServiceSectionCard