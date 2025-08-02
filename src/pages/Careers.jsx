import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  // Team members data with quotes
  const teamMembers = [
    {
      name: "Samreen Nurmohamed",
      role: "CEO & Founder",
      quote: "Technology has the power to transform agriculture, business education and create sustainable solutions worldwide.",
      image: "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753975544/samreen_gapag4.jpg"
    },
    {
      name: "DUSENGIMANA Patrick",
      role: "Senior Agronomist",
      quote: "Combining traditional farming wisdom with modern technology creates the most effective agricultural solutions.",
      image:"https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753975545/DUSENGIMANA_Patrick_tmrqvg.jpg"
    },
    {
      name: "Nadra Ramzan",
      role: "Head of Marketing and Business Analysis",
      quote: "Data-driven insights help us understand and serve our farming communities better.",
      image: "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753975544/nadra_asqigl.jpg"
    },
    {
      name: "Kevin Harerimana",
      role: "Junior AI Engineer",
      quote: "AI has incredible potential to solve complex agricultural challenges and improve crop yields.",
      image: "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753975543/Kevin_mmjqq4.jpg"
    },
    {
      name: "Iradukunda Irene",
      role: "Software Engineer",
      quote: "Building user-friendly solutions that make technology accessible to farmers is deeply rewarding.",
      image: "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753975544/Irene_f4v9gf.jpg"
    },
    {
      name: "GAKIZA Angel",
      role: "Data Science Intern",
      quote: "Every dataset tells a story that can help improve agricultural practices and outcomes.",
      image: "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753975543/angel_bb91qo.jpg"
    },
    {
      name: "NIYONSHUTI Emmanuel",
      role: "Software Engineer Intern",
      quote: "Creating innovative solutions that empower farmers drives my passion for software development.",
      image: "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753975545/NIYONSHUTI_Emmanuel_pdaqpi.jpg"
    }
  ];

  return (
    <>
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#231f1f] mb-8">
              Join Our Mission
            </h1>
            <p className="text-lg md:text-xl text-[#231f1f]/80 leading-relaxed mb-5">
              At tecGrw, we revolutionize industries by providing cutting-edge AI solutions for farmers and businesses while 
              equipping students with real-world tech skills. Through innovation and education, we empower individuals and 
              organizations to thrive in a data-driven future.
            </p>
            <p className="text-lg text-[#231f1f]/80 leading-relaxed">
              Working with us means being part of a mission-driven team that's shaping the future of agriculture, 
              education, and business through innovative technology solutions. You'll have the opportunity to work 
              on meaningful projects that make a real impact while growing your skills in a collaborative environment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#231f1f]/70 max-w-3xl mx-auto">
              Get to know the passionate people behind Tecgrw's mission to revolutionize agriculture through innovative technology solutions.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Member Image */}
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    {member.image ? (
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-[#b2c935] shadow"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-[#b2c935] rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-[#231f1f]">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#231f1f] mb-1">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#b2c935] font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16 bg-gray-50">
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

          {/* Future job cards structure */}
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
    </>
  );
}

export default Careers;
