import React from 'react';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Team = () => {
  // Real team members data
  const teamMembers = [
    {
      name: "Samreen Nurmohamed",
      role: "CEO & Founder",
      bio: "Passionate about using technology to drive change in agriculture, business and education sectors. With a background in data science, AI and agriculture, she leads Tecgrw's mission to empower farmers and businesses in Rwanda.",
      email: "samreen.nurmohamed@tecgrw.com",
      linkedin: "https://www.linkedin.com/in/samreen-nurmohamed-8a1aa3201/"
    },
    {
      name: "DUSENGIMANA Patrick",
      role: "Senior Agronomist",
      bio: "Competent and result-oriented agricultural engineer and agronomist with extensive expertise in crop production, horticulture, and irrigation system design.",
      email: "duspatty@gmail.com",
      linkedin: "https://www.linkedin.com/in/dusengimana-patrick-ba7949359/"
    },
    {
      name: "Nadra Ramzan",
      role: "Head of Marketing and Business Analysis",
      bio: "Driven and adaptable professional with expertise in digital marketing, data analysis and research.",
      email: "nadra@tecgrw.com",
      linkedin: "https://www.linkedin.com/in/nadra-ramzan-6470a429/",
      twitter: "https://x.com/jinga_89"
    },
    {
      name: "Kevin Harerimana",
      role: "Junior AI Engineer",
      bio: "Holds a Master's in Engineering with a focus on Artificial Intelligence, bringing expertise in AI solutions, including AI agents and policy frameworks.",
      email: "kevinharerimana@outlook.com",
      linkedin: "https://www.linkedin.com/in/kevin-harerimana-88641b1a4/"
    },
    {
      name: "Iradukunda Irene",
      role: "Software Engineer",
      bio: "Software developer with over 4 years of experience crafting user-friendly and efficient web solutions.",
      email: "iradukundairenee9@gmail.com",
      linkedin: "https://www.linkedin.com/in/irenee-iradukunda/"
    },
    {
      name: "GAKIZA Angel",
      role: "Data Science Intern",
      bio: "A data science intern with a keen interest in programming and data analysis.",
      email: "angelgakiza@gmail.com"
    },
    {
      name: "NIYONSHUTI Emmanuel",
      role: "Software Engineer Intern",
      bio: "A software developer with a passion for creating innovative solutions.",
      email: "emmanuelniyonshuti13@tecgrw.com",
      twitter: "https://x.com/emmanulio"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#095aa3]">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate people behind Tecgrw's mission to revolutionize agriculture through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#b2c935] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#231f1f]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Photo Coming Soon</p>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#231f1f] mb-1">
                  {member.name}
                </h3>
                
                <p className="text-[#b2c935] font-semibold mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} Twitter`}
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-[#231f1f] mb-4">
            Join Our Team
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of transforming agriculture through technology. 
            Ready to make a difference in the agricultural sector?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#b2c935] text-[#231f1f] font-semibold rounded-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-[#095aa3] text-[#095aa3] font-semibold rounded-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
