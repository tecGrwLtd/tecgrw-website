import { features, projects } from "../assets/data/agricultureData";

const SmartAgriculture = () => {
  return (
    <>
      {/* Overview */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-8">
            Empowering Farmers Through Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At Tecgrw, we're revolutionizing agriculture by combining cutting-edge technology with deep understanding 
            of local farming challenges. Our smart agriculture solutions help farmers increase productivity, reduce costs, 
            and build sustainable farming practices that protect both their livelihoods and the environment.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-16 h-16 bg-[#095aa3] text-white rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies/Project Highlights */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Projects Across Rwanda
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border-l-4 border-[#b2c935] pl-6">
                <div className="text-sm font-semibold text-[#095aa3] mb-2">
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Element */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-6">
                Technology That Works in the Field
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our solutions are designed for real-world farming conditions in Rwanda. From remote GSM monitoring 
                in rural areas to sophisticated AI analysis that runs on mobile devices, we build technology 
                that's both advanced and accessible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every system we deploy is tested, trained, and supported locally, ensuring farmers can maximize 
                their benefits from day one while building long-term sustainability.
              </p>
            </div>
            <div>
              <img 
                src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948409/mahama_greenhouse_rjbkku.jpg"
                alt="Smart agriculture technology in action"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Measurable Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#095aa3] mb-2">3</div>
              <div className="text-lg text-gray-600">Districts Served</div>
              <div className="text-sm text-gray-500 mt-1">Bugesera, Nyaruguru, Gatsibo</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#095aa3] mb-2">90%</div>
              <div className="text-lg text-gray-600">Water Savings</div>
              <div className="text-sm text-gray-500 mt-1">Through hydroponic systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#095aa3] mb-2">24/7</div>
              <div className="text-lg text-gray-600">Monitoring</div>
              <div className="text-sm text-gray-500 mt-1">GSM-enabled remote control</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartAgriculture;
