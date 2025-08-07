import { clientTypes } from '../assets/data/aIBusiness';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => {
            const IconComponent = client.icon;
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#b2c935]/30 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${client.color} text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={20} />
                </div>
                
                <h3 className="text-lg font-bold text-[#231f1f] mb-2">
                  {client.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;