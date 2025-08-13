import { MapPin, Wrench, Users } from 'lucide-react';

const WhyChooseAiAcademy = () => {
  const whyChooseUs = [
    { icon: <MapPin className="w-6 h-6" />, title: 'Prime Location in Kigali', desc: 'Beautiful garden and dedicated learning spaces' },
    { icon: <Wrench className="w-6 h-6" />, title: 'Hands-on Learning', desc: 'Project-based, not just theory' },
    { icon: <Users className="w-6 h-6" />, title: 'Small Class Sizes', desc: 'Personalized support for every student' },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
          Why Choose tecGrw AI Academy?
        </h2>
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
      </div>
    </section>
  );
};

export default WhyChooseAiAcademy;
