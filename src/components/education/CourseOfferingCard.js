"use client";

import Image from 'next/image';
import {Users, Clock, MapPin, Check, ChevronRight } from 'lucide-react';
import { courses } from "@/data/education";

const CourseOfferingCard = () => {
  const courseImages = {
    basic: [
      "https://plus.unsplash.com/premium_photo-1724634778253-f4a6390656c8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754991287/screen-pres_crdinq.jpg",
    ],
    advanced: [
      "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754995855/linear-regression-img_fsx6le.jpg",
      "https://images.unsplash.com/photo-1583770539147-581738d1310a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
          {/* Header Section */}
          <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 leading-tight">{course.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-blue-100">
                <span className="flex items-center gap-1 text-sm">
                  <Users className="w-4 h-4" />
                  {course.ageRange}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                {course.location && (
                  <span className="flex items-center gap-1 text-sm">
                    <MapPin className="w-4 h-4" />
                    {course.location}
                  </span>
                )}
              </div>
              {course.cost && (
                <div className="mt-3 text-lg font-semibold text-white bg-white/20 rounded-lg px-3 py-1 inline-block">
                  {course.cost}
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex gap-4 flex-1">
              <div className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                {/* What You'll Learn */}
                <div className="flex-1">
                  <h4 className="font-semibold text-[#231f1f] mb-3 text-sm">What You&apos;ll Learn:</h4>
                  <div className="space-y-2 mb-6">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#b2c935] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {course.id === 'adult' && (
                  <p className="text-xs text-gray-500 italic mb-4">
                    No prior knowledge of AI needed
                  </p>
                )}

                {course.schedule && (
                  <div id="customized-course" className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-medium text-gray-700">{course.schedule}</p>
                  </div>
                )}

                <a
                  href={course.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#095aa3] text-white rounded-lg font-semibold hover:bg-[#074a8a] transition-all duration-200 flex items-center justify-center gap-2 group mt-auto text-center"
                >
                  Register for {course.level} Course
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right Side - Overlapping Circular Images */}
              <div className="flex-shrink-0 ml-2">
                <div className="relative">
                  {/* First Circle */}
                  <div className="relative z-30">
                    <div className="w-35 h-35 rounded-full border-3 border-white overflow-hidden bg-white shadow-lg relative">
                      <Image
                        src={courseImages[course.id][0]}
                        alt={`${course.title} student 1`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Second Circle */}
                  <div className="relative z-20 -mt-6 ml-2">
                    <div className="w-35 h-35 rounded-full border-3 border-white overflow-hidden bg-white shadow-lg relative">
                      <Image
                        src={courseImages[course.id][1]}
                        alt={`${course.title} student 2`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseOfferingCard;
