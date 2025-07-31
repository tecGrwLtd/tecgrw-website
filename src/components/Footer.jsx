import { Link } from 'react-router-dom';
import {
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
      <>
      <footer className="w-full bg-gradient-to-r from-[#231f1f] to-[#2d2a2a] text-white pt-12 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#b2c935] mb-4">Tecgrw</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering agriculture and business with AI-driven solutions in Rwanda.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.linkedin.com/company/tecgrw.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-[#b2c935] transition-colors duration-200">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="https://x.com/tecgrw" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-gray-300 hover:text-[#b2c935] transition-colors duration-200">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/tecgrw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-[#b2c935] transition-colors duration-200">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-[#b2c935] flex-shrink-0" />
                  <span>100 KG 9 Ave, Kigali, Rwanda</span>
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
                <a href="/solutions/smart-agriculture" className="block text-gray-300 hover:text-[#b2c935] transition-colors duration-200">Smart Agriculture</a>
                <a href="/solutions/ai-education" className="block text-gray-300 hover:text-[#b2c935] transition-colors duration-200">AI Education</a>
                <a href="/solutions/business-ai" className="block text-gray-300 hover:text-[#b2c935] transition-colors duration-200">Business AI</a>
                <a href="/about/our-story" className="block text-gray-300 hover:text-[#b2c935] transition-colors duration-200">Our Story</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tecgrw. All rights reserved.
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-2 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold text-sm shadow-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2"
              >
                <FaEnvelope className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
    )
}
export default Footer;
