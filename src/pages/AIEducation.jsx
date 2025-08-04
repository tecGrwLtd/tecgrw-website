import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';

const AIEducation = () => {
  const programHighlights = [
    {
      title: "Hands-on Coding",
      description: "Students learn programming fundamentals through interactive coding sessions using Python, Scratch, and other beginner-friendly languages.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Machine Learning Basics",
      description: "Age-appropriate introduction to AI concepts, pattern recognition, and how machines learn from data through fun, visual examples.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Real-world Mentors",
      description: "Industry professional guide students, sharing practical insights and career guidance in technology fields.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: "Practical Projects",
      description: "We teach our students AI, programming, and data science through hands-on learning and real-world projects, with professional mentoring.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Overview */}
      <section className=" mt-24 px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-8">
            Building Tomorrow's Innovators Today
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            At Tecgrw, we believe that every child aged 8 and above has the potential to become a technology leader. 
            Our AI education programs introduce young minds to the fascinating world of data science, programming, 
            and machine learning through engaging, hands-on experiences.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We're not just teaching code we're nurturing problem-solvers, critical thinkers, and the next generation 
            of innovators who will drive Rwanda's digital transformation and contribute to global technological advancement.
          </p>
        </div>
      </section>

      {/* Program Highlights Grid */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            What Makes Our Programs Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#095aa3] text-white rounded-lg flex items-center justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Element */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Learning in Action
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Students learning programming and AI concepts"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Young learners engaged in coding activities"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our interactive learning environment combines theory with practice, ensuring students not only understand 
              AI concepts but can apply them to create meaningful projects that benefit their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Our Learning Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Foundation Level</h3>
              <p className="text-gray-600 leading-relaxed">
                Introduction to computers, basic programming concepts, and computational thinking through games and visual programming.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Intermediate Level</h3>
              <p className="text-gray-600 leading-relaxed">
                Text-based programming, data analysis basics, and introduction to machine learning concepts with practical examples.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Advanced Projects</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-world project development, AI application building, and mentorship opportunities with industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialsSection Heading={"What Parents are saying"}/>
      {/* Call to Action */}
      <section className="px-4 py-16 bg-[#095aa3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Are you a parent looking to enroll your child? Let’s work together to build Rwanda’s tech-savvy generation.
          </p>
          <Link 
            to="/contact" // later it will go to registration form.
            className="inline-block bg-[#b2c935] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9db82a] transition-colors duration-200"
          >
            Enroll
          </Link>
        </div>
      </section>
  </>
  );
};

export default AIEducation;