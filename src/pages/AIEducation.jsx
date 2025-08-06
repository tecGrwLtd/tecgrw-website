import { useState } from 'react';
import { ArrowDown, Users, Clock, MapPin, Check, ChevronRight } from 'lucide-react';

import { courses } from '../assets/data/aIEducation';
import StudentRegistration from '../components/StudentRegistration';
import TestimonialsSection from '../components/TestimonialsSection';


const AIEducation = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

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
      title: "Our Curriculum",
      description: "We cover all important aspects of AI and Data Science including Machine Learning, Generative AI, Conversational AI integration, Data.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Real-world Problems",
      description: "We teach kids how to solve real world problems using AI and Data Science such as climate change, predicting customer satisfaction, weather prediction etc.",
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

  const whyChooseUs = [
    { icon: '🏢', title: 'Prime Location in Kigali', desc: 'garden and dedicated learning spaces' },
    { icon: '🛠️', title: 'Hands-on Learning', desc: 'Project-based, not just theory' },
    { icon: '👥', title: 'Small Class Sizes', desc: 'Personalized support for every student' },
  ];

  const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#231f1f] mb-6">
                AI Education for the Next Generation
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-[#095aa3] mb-6">
                Building Future-Ready Skills Through Real-World Learning
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At TecGrw AI Academy, we're equipping children, teens, and adults in Rwanda with essential digital skills. 
                From data science and machine learning to coding and AI, our courses are designed for learners starting as early as age 8.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToRegistration}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
                >
                  Join our September 2025 session
                  <ArrowDown className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754304806/al_students_bow_graduation_day_pkwbv8.jpg"
                  alt="Students learning data science and programming"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#095aa3] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AI</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#231f1f]">Age 8 and above</p>
                      <p className="text-sm text-gray-600">Future Tech Leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
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

      {/* Course Offerings */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Our Course Offerings
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect program for your child's learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-blue-100">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.ageRange}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <h4 className="font-semibold text-[#231f1f] mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#b2c935] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => {
                      setSelectedCourse(course.id);
                      scrollToRegistration();
                    }}
                    className="w-full py-3 px-4 bg-[#095aa3] text-white rounded-lg font-semibold hover:bg-[#074a8a] transition-colors duration-200"
                  >
                    Enroll in {course.level} Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            Why Choose TecGrw AI Academy?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#231f1f] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            The Learning Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Foundation Building</h3>
              <p className="text-gray-600 leading-relaxed">
                Introduction to computers, basic programming concepts, and computational thinking through games and visual programming.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Skill Development</h3>
              <p className="text-gray-600 leading-relaxed">
                hands on programming, data analysis basics, and introduction to machine learning concepts with practical examples.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Real-World Application</h3>
              <p className="text-gray-600 leading-relaxed">
                Project development, AI application building.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StudentRegistration />
      {/* Testimonials Section */}
      <TestimonialsSection Heading={"What Parents are saying"}/>
    </>
  );
};

export default AIEducation;