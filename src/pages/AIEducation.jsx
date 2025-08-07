import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

import StudentRegistration from '../components/StudentRegistration';
import TestimonialsSection from '../components/TestimonialsSection';
import EducationLearningJourney from '../components/EducationLearningJourney';
import WhyChooseAiAcademy from '../components/WhyChooseAiAcademy';
import CourseOfferings from '../components/CourseOfferings';

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
      <CourseOfferings />
      <WhyChooseAiAcademy />
      <EducationLearningJourney />
      <StudentRegistration />
      <TestimonialsSection/>
    </>
  );
};

export default AIEducation;