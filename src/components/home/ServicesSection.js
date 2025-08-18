import ServiceSectionCard from "./ServiceSectionCard";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#095aa3]">Our Solutions</h2>
        </div>

        <ServiceSectionCard />

        {/* Bottom decorative line */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-[#095aa3] to-[#b2c935] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;