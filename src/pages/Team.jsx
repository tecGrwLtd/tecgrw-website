import { Link } from 'react-router-dom';

const Team = () => {
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
      role: "AI Engineer",
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
        <div className="mb-12 max-w-3xl text-left">
           <p className="text-3xl text-[#231f1f] font-semibold leading-snug">
              Working with us means being part of a mission-driven team that's shaping the future of <span className="text-[#b2c935] font-bold">Agriculture</span>, 
             <span className="text-[#095aa3] font-bold"> Education</span>, and 
             <span className="text-[#231f1f] font-bold"> Business.</span>
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
    </>
  );
}

export default Team;
