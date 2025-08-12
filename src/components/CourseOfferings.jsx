import {Users, Clock, MapPin, Check, ChevronRight } from 'lucide-react'
import { courses } from '../assets/data/aIEducation';

const CourseOfferings = ({
  scrollToRegistration,
  setSelectedCourse
}) => {
  const courseImages = {
    basic: [
      "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754991817/graduation_img_vrh1dt.jpg",
      "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754991287/screen-pres_crdinq.jpg",
    ],
    advanced: [
      "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754995855/linear-regression-img_fsx6le.jpg",
      "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754991288/graduation-team-img_hsritb.jpg",
    ]
  };

  return (
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
                <div className="flex gap-4">
                  <div className="flex-1">
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

                    {course.id === 'advanced' && (
                      <p className="text-sm text-gray-500 italic mb-4">
                        Customized courses available for adults as well.
                      </p>
                      
                    )}
                                   
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

                  {/* Right Side - Overlapping Circular Images */}
                  <div className="flex-shrink-0 ml-4">
                    <div className="relative">
                      {/* First Circle */}
                      <div className="relative z-30">
                        <div className="w-30 h-30 rounded-full border-2 border-[#9db82a] overflow-hidden bg-white shadow-sm">
                          <img
                            src={courseImages[course.id][0]}
                            alt={`${course.title} student 1`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Second Circle - Overlapping */}
                      <div className="relative z-20 -mt-5 ml-4">
                        <div className="w-30 h-30 rounded-full border-2 border-[#9db82a] overflow-hidden bg-white shadow-sm">
                          <img
                            src={courseImages[course.id][1]}
                            alt={`${course.title} student 2`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Third Circle - Overlapping */}
                      {/* <div className="relative z-10 -mt-5 ml-2">
                        <div className="w-24 h-24 rounded-full border-2 border-[#9db82a] overflow-hidden bg-white shadow-sm">
                          <img
                            src={courseImages[course.id][2]}
                            alt={`${course.title} student 3`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;