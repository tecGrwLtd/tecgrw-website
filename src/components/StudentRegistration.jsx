import {useState} from 'react'
import {  Clock, MapPin, ChevronRight } from 'lucide-react';

import { courses } from '../assets/data/aIEducation';

const StudentRegistration = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
  return (
    <>
       {/* Call to Action / Registration */}
      <section id="registration" className="px-4 sm:px-6 lg:px-8 py-16 bg-[#095aa3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Shape Rwanda's Digital Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our AI Academy.
          </p>
          {selectedCourse ? (
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#231f1f] mb-4">
                Selected: {courses.find(c => c.id === selectedCourse)?.title}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={courses.find(c => c.id === selectedCourse)?.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow-lg hover:bg-[#9db82a] transition-colors duration-200"
                >
                  Register Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="inline-flex items-center px-6 py-4 rounded-full border-2 border-[#095aa3] text-[#095aa3] font-semibold hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
                >
                  View All Courses
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-blue-100 mb-6">Which course interests you?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSelectedCourse('basic')}
                  className="px-8 py-4 rounded-full bg-white text-[#095aa3] font-semibold hover:bg-blue-50 transition-colors duration-200"
                >
                  Basic Course (Age 8 and above)
                </button>
                <button
                  onClick={() => setSelectedCourse('advanced')}
                  className="px-8 py-4 rounded-full bg-white text-[#095aa3] font-semibold hover:bg-blue-50 transition-colors duration-200"
                >
                  Advanced Course (Age 10 and above)
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>100 KG 9 Ave, Gacuriro, Kigali, Rwanda</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>After school Weekdays and Weekends</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentRegistration