"use client";

import Link from 'next/link';
import { Sprout, GraduationCap, Brain, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Smart Agriculture',
    icon: Sprout,
    iconColor: 'text-[#b2c935]',
    bgGradient: 'from-[#b2c935]/10 to-[#b2c935]/5',
    hoverColor: 'group-hover:text-[#b2c935]',
    desc: 'Smart Green Houses, Controlled Environment Farming, Hydroponics, Vertical Farming, Precision Farming Solutions',
    href: '/solutions/smart-agriculture'
  },
  {
    title: 'AI Education',
    icon: GraduationCap,
    iconColor: 'text-[#095aa3]',
    bgGradient: 'from-[#095aa3]/10 to-[#095aa3]/5',
    hoverColor: 'group-hover:text-[#095aa3]',
    desc: 'Hands-on experience in data analytics and AI, learning directly from real-world applications.',
    href: '/solutions/ai-education'
  },
  {
    title: 'AI Business Solutions',
    icon: Brain,
    iconColor: 'text-[#231f1f]',
    bgGradient: 'from-[#231f1f]/10 to-[#231f1f]/5',
    hoverColor: 'group-hover:text-[#231f1f]',
    desc: 'Customized AI Solutions, AI Strategy Development, Predicted models for forecasting trends and behaviors, Risk Management & Compliance',
    href: '/solutions/business-ai'
  }
];

const ServiceSectionCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 overflow-hidden"
          >
            {/* Card content */}
            <div className="p-8 text-center">
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgGradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className={`w-8 h-8 ${service.iconColor} transition-colors duration-300`} />
              </div>

              <h3 className={`text-xl font-bold mb-4 text-[#231f1f] transition-colors duration-300 ${service.hoverColor}`}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Learn More Button */}
              <Link
                href={service.href}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${service.iconColor}  group/btn`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSectionCard;