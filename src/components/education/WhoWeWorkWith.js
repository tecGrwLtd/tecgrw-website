import ClientTypeCard from "./ClientTypeCard";

const WhoWeWorkWith = () => {

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#095aa3]/10 text-[#095aa3] px-4 py-2 rounded-full text-sm font-semibold mb-4">
             Who We Work With
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#231f1f] mb-4">
            Our Partners & Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating across sectors to drive meaningful change through AI
          </p>
        </div>
        <ClientTypeCard />
      </div>
    </section>
  );
};

export default WhoWeWorkWith;