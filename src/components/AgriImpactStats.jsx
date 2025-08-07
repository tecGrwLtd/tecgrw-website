import { stats } from '../assets/data/agricultureData';

const AgriImpactStats = () => {

  return (
    <section className="px-4 py-16 bg-gradient-to-br from-[#095aa3]/5 to-[#b2c935]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
            Measurable Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from our smart agriculture implementations across Rwanda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#095aa3] to-[#0c6bc7] text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-[#095aa3] mb-2 group-hover:text-[#0c6bc7] transition-colors duration-300">
                  {stat.number}
                </div>
                
                <div className="text-xl font-semibold text-[#231f1f] mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-500 leading-relaxed">
                  {stat.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Achievement Row */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#b2c935] mb-2">4-5x</div>
              <div className="text-sm font-medium text-gray-600">Yield Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#b2c935] mb-2">30+</div>
              <div className="text-sm font-medium text-gray-600">Refugees Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#b2c935] mb-2">100%</div>
              <div className="text-sm font-medium text-gray-600">Year-Round Production</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#b2c935] mb-2">IoT</div>
              <div className="text-sm font-medium text-gray-600">Enabled Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgriImpactStats;