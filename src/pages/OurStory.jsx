const OurStory = () => {
  const milestones = [
    {
      year: "2020",
      title: "Vision Born",
      description: "Identified the need for AI-driven solutions in modern agriculture"
    },
    {
      year: "2021",
      title: "Technology Development",
      description: "Built our core AI platform for precision farming and crop analysis"
    },
    {
      year: "2022",
      title: "Market Entry",
      description: "Launched our first solutions and partnered with forward-thinking farmers"
    },
    {
      year: "2024",
      title: "Scaling Impact",
      description: "Expanding our reach to help more farmers optimize their operations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 90, 163, 0.7), rgba(9, 90, 163, 0.7)), url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1000&fit=crop')`
        }}
      >
        <div className="text-center text-white px-4">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1> */}
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            To be at the forefront of technological transformation in agriculture, business, and education creating a future where innovation drives sustainable growth, efficiency, and empowerment.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At tecGrw, we revolutionize industries by providing cutting-edge AI solutions for farmers and businesses while
            equipping students with real-world tech skills. Through innovation and education, we empower individuals and
            organizations to thrive in a data-driven future.
          </p>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#095aa3] text-white rounded-full text-xl font-bold mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Element - Image & Text */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1000&h=600&fit=crop"
                alt="AI and data analysis in agriculture"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-6">
                Where AI Meets Agriculture
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that the future of farming lies in the intelligent use of data and artificial intelligence. 
                Our solutions bridge the gap between traditional agricultural wisdom and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                By analyzing vast amounts of agricultural data, our AI systems provide farmers with actionable 
                insights that help optimize crop yields, reduce resource waste, and make farming more sustainable 
                and profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b2c935] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                Smart Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging AI and data science to create intelligent farming solutions that drive real results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b2c935] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Constantly pushing boundaries with cutting-edge AI and technology solutions for modern agriculture
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b2c935] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building strong partnerships with farmers and communities to create lasting positive impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-[#095aa3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Transforming Agriculture
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to be part of the agricultural revolution? Let's work together to create 
            sustainable solutions for tomorrow's farming challenges.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[#b2c935] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9db82a] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurStory;