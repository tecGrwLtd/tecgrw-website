import React from 'react';
import { Link } from 'react-router-dom';

 const Careers = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#095aa3] to-[#0d6bb8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              Careers at Tecgrw
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join us in revolutionizing industries through cutting-edge AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-8">
              Why Work With Us?
            </h2>
            <p className="text-lg md:text-xl text-[#231f1f]/80 leading-relaxed mb-8">
              At tecGrw, we revolutionize industries by providing cutting-edge AI solutions for farmers and businesses while 
              equipping students with real-world tech skills. Through innovation and education, we empower individuals and 
              organizations to thrive in a data-driven future.
            </p>
            <p className="text-lg text-[#231f1f]/70 leading-relaxed">
              Working with us means being part of a mission-driven team that's shaping the future of agriculture, 
              education, and business through innovative technology solutions. You'll have the opportunity to work 
              on meaningful projects that make a real impact while growing your skills in a collaborative environment.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Open Roles
            </h2>
            <p className="text-lg text-[#231f1f]/70">
              Explore opportunities to join our growing team
            </p>
          </div>

          {/* No Open Roles Placeholder */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-[#095aa3]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6V4m0 2v2a2 2 0 002 2m0 0h4m-4 0a2 2 0 002-2V8a2 2 0 00-2-2M8 8h8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#231f1f] mb-3">
                No Open Roles Currently
              </h3>
              <p className="text-[#231f1f]/70 mb-6">
                We're not actively hiring at the moment, but we're always interested in connecting with talented individuals who share our vision.
              </p>
              <p className="text-sm text-[#231f1f]/60">
                Check back soon for new opportunities or send us your CV to be considered for future openings.
              </p>
            </div>
          </div>

          {/* job cards will look like */}
          {/*
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#231f1f] mb-2">
                  Senior AI Engineer
                </h3>
                <p className="text-[#095aa3] font-medium mb-3">Full-time • Remote</p>
                <p className="text-[#231f1f]/70 text-sm leading-relaxed">
                  Join our AI team to develop cutting-edge solutions for agriculture and business automation.
                </p>
              </div>
              <button className="w-full bg-[#095aa3] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#074a8a] transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Send CV Section */}
      <section className="py-16 bg-gradient-to-r from-[#b2c935] to-[#9db82a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Joining Our Team?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Don't see a role that fits? We're always looking for passionate individuals who want to make a difference. 
            Send us your CV and let's explore how you can contribute to our mission.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-[#095aa3] font-bold text-lg rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#b2c935]"
          >
            Send Your CV
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Careers;
