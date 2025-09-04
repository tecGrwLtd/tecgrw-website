"use client";

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-r from-[#231f1f] to-[#2d2a2a] text-white pt-12 pb-8 mt-8 relative overflow-hidden">
        {/* background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[#b2c935] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#095aa3] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white  hover:text-[#b2c935] mb-4"><Link href='/'>tecGrw</Link></h3>
              <p className="text-sm text-white mb-2">Connect with us:</p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.linkedin.com/company/tecgrw.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-[#b2c935] transition-all duration-200 hover:scale-110">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="https://x.com/tecgrw" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-gray-300 hover:text-[#b2c935] transition-all duration-200 hover:scale-110">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/tecgrw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-[#b2c935] transition-all duration-200 hover:scale-110">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/tecGrw1" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-[#b2c935] transition-all duration-200 hover:scale-110">
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-300">
              
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#b2c935] flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=100+KG+9+Ave,+Kigali,+Rwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[#b2c935]"
                >
                  100 KG 9 Ave, Third House from Life Care Hospital, Gacuriro, Kigali, Rwanda
                </a>
              </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-[#b2c935] flex-shrink-0" />
                  <a href="mailto:info@tecgrw.com" className="hover:text-[#b2c935] transition-colors duration-200">info@tecgrw.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-[#b2c935] flex-shrink-0" />
                  <a href="tel:+250798975878" className="hover:text-[#b2c935] transition-colors duration-200">+250 7989 75878</a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-[#b2c935] flex-shrink-0" />
                  <a href="tel:+250795583795" className="hover:text-[#b2c935] transition-colors duration-200">+250 7955 83795</a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/our-story" className="block text-gray-300 hover:text-[#b2c935]">About tecGrw</Link>
                <Link href="/solutions/ai-education" className="block text-gray-300 hover:text-[#b2c935]">AI Education</Link>
                <Link href="/solutions/smart-agriculture" className="block text-gray-300 hover:text-[#b2c935]">Smart Agriculture</Link>
                <Link href="/solutions/business-ai" className="block text-gray-300 hover:text-[#b2c935]">Business AI</Link>
              </div>
            </div>
          </div>
        
          {/* CTA Button - above bottom bar on mobile */}
          <div className="flex justify-center mb-6 md:mb-0 md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#b2c935] to-[#9db82a] text-[#231f1f] font-bold text-sm shadow-lg hover:shadow-xl hover:from-[#095aa3] hover:to-[#074a8c] hover:text-white"
            >
              <FaEnvelope className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left side */}
            <div className="text-center md:text-left text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} tecGrw. All rights reserved.
            </div>

            {/* Policy Links */}
            <div className="flex justify-center space-x-6 text-sm mb-4 md:mb-0">
              <Link href="/privacy" className="text-gray-400 hover:text-[#b2c935] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#b2c935] transition-colors duration-200">
                Terms of Use
              </Link>
            </div>

            {/* Right side CTA - hidden on mobile */}
            <div className="hidden md:flex justify-center md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#b2c935] to-[#9db82a] text-[#231f1f] font-bold text-sm shadow-lg hover:shadow-xl hover:from-[#095aa3] hover:to-[#074a8c] hover:text-white"
              >
                <FaEnvelope className="w-4 h-4 mr-2" />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;
