"use client";

import {
  FaFacebookF, FaTwitter, FaLinkedinIn,
  FaInstagram} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
      <h3 className="text-xl font-bold text-[#231f1f] mb-6">Follow Us</h3>
      <div className="flex space-x-4">
        <a 
          href="https://www.facebook.com/tecGrw1" 
          className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a 
          href="https://www.linkedin.com/company/tecgrw.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a 
          href="https://x.com/tecgrw" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/tecgrw/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-colors"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;
