"use client";

import { ArrowDown } from "lucide-react"

const EducationCallToAction = () => {
    const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToCustomizedCourse = () => {
    document.getElementById('customized-course').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
         onClick={scrollToRegistration}
        className="inline-flex items-center px-6 py-3 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
      >
        Join our AI Academy
        <ArrowDown className="ml-2 w-4 h-4" />
      </button>
      <button
         onClick={scrollToCustomizedCourse}
        className="inline-flex items-center px-6 py-3 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
      >
        Join our Customized AI Course
        <ArrowDown className="ml-2 w-4 h-4"/>
      </button>
    </div>
  )
}

export default EducationCallToAction