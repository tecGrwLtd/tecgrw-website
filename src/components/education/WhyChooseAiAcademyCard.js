"use client";

import { MapPin, Wrench, Users } from 'lucide-react';

const WhyChooseAiAcademyCard = () => {
    const whyChooseUs = [
        { icon: <MapPin className="w-6 h-6" />, title: 'Prime Location in Kigali', desc: 'Beautiful garden and dedicated learning spaces' },
        { icon: <Wrench className="w-6 h-6" />, title: 'Hands-on Learning', desc: 'Project-based, not just theory' },
        { icon: <Users className="w-6 h-6" />, title: 'Small Class Sizes', desc: 'Personalized support for every student' },
    ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {whyChooseUs.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center"
        >
          <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default WhyChooseAiAcademyCard