"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react"

const CustomizedCoursesCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div className="text-blue-100">
        <span className="block text-sm">Customized courses available</span>
      </div>
      <Link
        href="/solutions/ai-education/short-course-for-adults"
        className="inline-flex items-center px-6 py-3 bg-white text-[#095aa3] font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
        >
        Learn More
        <ChevronRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  )
}

export default CustomizedCoursesCard