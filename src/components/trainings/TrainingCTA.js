"use client";

import Link from 'next/link';
import {Phone, Mail } from 'lucide-react';

const TrainingCTA = ({heading, subHeading, bgColor, contactUs}) => {
  return (
      <div className={`mt-12 ${bgColor} rounded-2xl p-6 sm:p-8 text-white text-center`}>
        <h3 className="text-xl sm:text-2xl font-bold mb-3">{heading}</h3>
        <p className="text-green-100 mb-6">{subHeading}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="flex-1 sm:flex-none w-full sm:w-auto text-center py-3 px-6 bg-white text-[#095aa3] font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            {contactUs}
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 text-sm justify-center">
            <a href="tel:+250798975878" className="flex items-center gap-1.5 text-green-100 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> +250 798 975 878
            </a>
            <a href="mailto:info@tecgrw.com" className="flex items-center gap-1.5 text-green-100 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> info@tecgrw.com
            </a>
          </div>
        </div>
      </div>
  )
}

export default TrainingCTA