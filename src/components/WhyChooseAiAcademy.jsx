import React from 'react'

const WhyChooseAiAcademy = () => {
const whyChooseUs = [
    { icon: '🏢', title: 'Prime Location in Kigali', desc: 'garden and dedicated learning spaces' },
    { icon: '🛠️', title: 'Hands-on Learning', desc: 'Project-based, not just theory' },
    { icon: '👥', title: 'Small Class Sizes', desc: 'Personalized support for every student' },
  ];
  return (
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Why Choose TecGrw AI Academy?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#231f1f] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChooseAiAcademy;
