import ServiceSectionCard from "./ServiceSectionCard";

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <ServiceSectionCard />
      </div>
    </div>
  );
};

export default ServicesSection;
