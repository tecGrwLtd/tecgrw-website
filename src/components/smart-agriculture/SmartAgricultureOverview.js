
const SmartAgricultureOverview = (
) => {
  return (
      <section className="py-8 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#b2c935] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#095aa3] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-2 h-2 bg-[#b2c935] rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-[#095aa3]">Empowering Farmers Through Technology</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#231f1f] mb-8 leading-tight">
            Smart Agriculture Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            At <span className="font-semibold text-[#095aa3]">tecGrw</span>, we're revolutionizing agriculture by combining cutting-edge technology with deep understanding 
            of local farming challenges. Our smart agriculture solutions help farmers increase productivity, reduce costs, 
            and build sustainable farming practices that protect both their livelihoods and the environment.
          </p>
        </div>
      </section>
  )
}

export default SmartAgricultureOverview