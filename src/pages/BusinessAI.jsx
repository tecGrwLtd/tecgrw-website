import React from 'react';

const BusinessAI = () => {
  const benefits = [
    {
      title: "Boost Efficiency",
      description: "Automate repetitive tasks and streamline operations with intelligent workflows that reduce manual work by up to 70%.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Cut Operational Costs",
      description: "Reduce expenses through intelligent resource allocation, predictive maintenance, and optimized business processes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Data-Driven Decisions",
      description: "Transform raw data into actionable insights with advanced analytics and real-time business intelligence dashboards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with cutting-edge AI technologies that give you the edge in an increasingly digital marketplace.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const industries = [
    {
      name: "Agriculture",
      description: "Crop prediction, yield optimization, and supply chain management solutions.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: "Retail",
      description: "Customer behavior analysis, inventory optimization, and personalized recommendations.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "Logistics",
      description: "Route optimization, demand forecasting, and warehouse automation systems.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, and automated financial planning tools.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 90, 163, 0.8), rgba(9, 90, 163, 0.8)), url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Solutions for African Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Transform your business operations with custom artificial intelligence solutions designed for the African market
          </p>
          <button className="bg-[#b2c935] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9db82a] transition-colors duration-200">
            Explore Our Solutions
          </button>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-8">
            Intelligent Solutions for Modern Business
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Tecgrw delivers cutting-edge AI solutions that help African businesses harness the power of artificial intelligence. 
            From predictive analytics to process automation, we create custom systems that drive growth and efficiency.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="text-left">
              <h3 className="font-semibold text-lg text-[#231f1f] mb-2">Our Core Services</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Predictive Analytics & Forecasting</li>
                <li>• Process Automation & Workflow Optimization</li>
                <li>• AI-Powered Chatbots & Customer Service</li>
                <li>• Business Intelligence Dashboards</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg text-[#231f1f] mb-2">Why Choose Tecgrw</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Local expertise with global standards</li>
                <li>• Custom solutions for African markets</li>
                <li>• Scalable and cost-effective implementations</li>
                <li>• Ongoing support and training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Transform Your Business Operations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#095aa3] text-white rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#b2c935] text-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#9db82a] transition-colors duration-200">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight for later*/}
      {/* <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-6">
                Success Story: Smart Inventory Management
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We helped a leading retail chain in Kigali implement an AI-powered inventory management system 
                that reduced stockouts by 45% and decreased excess inventory by 30%.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#b2c935] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Predictive demand forecasting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#b2c935] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Automated reorder notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#b2c935] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Real-time analytics dashboard</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#231f1f] mb-6 text-center">Results Achieved</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#095aa3] mb-2">45%</div>
                  <div className="text-gray-600">Reduction in Stockouts</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#095aa3] mb-2">30%</div>
                  <div className="text-gray-600">Less Excess Inventory</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#095aa3] mb-2">25%</div>
                  <div className="text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Visual Element */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            AI-Powered Business Intelligence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Business team analyzing AI-powered data dashboards"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="AI analytics and business intelligence dashboard"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our AI solutions integrate seamlessly with your existing business processes, providing intuitive 
              dashboards and automated insights that empower your team to make smarter decisions faster.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Our Implementation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Discovery</h3>
              <p className="text-gray-600 leading-relaxed">
                We analyze your business needs, current processes, and identify AI opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom AI solution architecture tailored to your specific business requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Deploy</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless integration with your existing systems and comprehensive team training.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Ongoing monitoring, optimization, and support to ensure maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-[#095aa3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let our experts help you identify AI opportunities in your business and create a custom solution 
            that drives real results. Schedule a consultation today and take the first step toward intelligent automation.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[#b2c935] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9db82a] transition-colors duration-200"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default BusinessAI;