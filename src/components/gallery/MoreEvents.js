"use client";

import { ArrowRight } from "lucide-react"

const MoreEvents = () => {
  return (
    <div className="text-center mt-12">
      <button className="inline-flex items-center px-8 py-3 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2">
        Load More Events
        <ArrowRight size={18} className="ml-2" />
      </button>
    </div>
  )
}

export default MoreEvents