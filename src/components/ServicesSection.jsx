import services from '../assets/data/serviceDataLucide';

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
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
      </div>
    </div>
  );
};

export default ServicesSection;
