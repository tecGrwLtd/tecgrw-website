
const SmartAgriculture = () => {
  const features = [
    {
      title: "Smart Greenhouse Systems",
      description: "GSM-controlled smart greenhouses deployed in rural areas like Bugesera, providing automated climate control and monitoring for optimal crop growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Hydroponic Technologies",
      description: "Advanced soilless farming systems that maximize yields while conserving water and nutrients, perfect for sustainable agriculture in any environment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Data-Driven Solutions",
      description: "Real-time monitoring and analytics that help farmers make informed decisions about irrigation, fertilization, and crop management.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that predict crop diseases, optimize planting schedules, and recommend precision farming techniques.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const projects = [
    {
      location: "Bugesera District",
      title: "Smart Greenhouse Initiative",
      description: "Deployed GSM-controlled greenhouse systems near Mahama refugee camp, improving food security and creating sustainable farming opportunities for local communities."
    },
    {
      location: "Nyaruguru District",
      title: "Precision Agriculture Program",
      description: "Implemented data-driven farming solutions helping smallholder farmers increase productivity through AI-powered crop monitoring and soil analysis."
    },
    {
      location: "Gatsibo District",
      title: "Hydroponic Farming Project",
      description: "Established modern hydroponic systems enabling year-round production of high-value crops with 90% less water usage than traditional farming."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 90, 163, 0.8), rgba(9, 90, 163, 0.8)), url('https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Agriculture Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Transforming farming with AI-driven technology, sustainable practices, and data-powered insights for Rwanda's agricultural future
          </p>
          <button className="bg-[#b2c935] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9db82a] transition-colors duration-200">
            Learn More
          </button>
        </div>
      </section>

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
            Our Smart Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#095aa3] text-white rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
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

      {/* Call to Action */}
      <section className="px-4 py-16 bg-[#095aa3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join the farmers across Rwanda who are already benefiting from smart agriculture technology. 
            Let's work together to build a more productive and sustainable future.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[#b2c935] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9db82a] transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default SmartAgriculture;
