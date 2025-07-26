import React from 'react';
import ContactSection from './ContactSection';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer placeholder - will be replaced by <Footer /> */}
      <footer className="w-full bg-[#231f1f] text-white pt-8 pb-6 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#b2c935]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-5.657 5.657l4.243 4.243a8 8 0 1 1 5.657-5.657z" /></svg>
                <span>100 KG 9 Ave, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#095aa3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /><path d="M12 16v2m0 0h4m-4 0H8" /></svg>
                <a href="mailto:info@tecgrw.com" className="underline hover:text-[#b2c935]">info@tecgrw.com</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#b2c935]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.516 2.064A2 2 0 0 0 11.72 8.485l2.06.515a2 2 0 0 1 1.515 1.94V13a2 2 0 0 1-2 2h-1.5a2 2 0 0 0-2 2v1.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" /></svg>
                <a href="tel:+250798975878" className="underline hover:text-[#b2c935]">+250 7989 75878</a>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <div className="flex gap-4 items-center justify-center">
                <a href="https://www.linkedin.com/company/tecgrw.com/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#b2c935] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                </a>
                <a href="https://x.com/tecgrw" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:text-[#b2c935] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656c-.793.352-1.646.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.93 8.93 0 0 1-2.828 1.082A4.466 4.466 0 0 0 11.07 9.03c0 .35.04.69.115 1.016C7.728 9.89 4.1 8.1 1.67 5.149c-.384.66-.604 1.426-.604 2.243 0 1.548.788 2.915 1.99 3.717-.732-.023-1.42-.224-2.022-.56v.057c0 2.163 1.54 3.97 3.584 4.378-.375.102-.77.157-1.178.157-.288 0-.563-.028-.834-.08.564 1.76 2.2 3.04 4.14 3.075A8.96 8.96 0 0 1 2 19.54a12.66 12.66 0 0 0 6.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.194-.004-.388-.013-.58.875-.63 1.637-1.42 2.235-2.314z"/></svg>
                </a>
                {/* Instagram icon using react-icons */}
                <a href="https://www.instagram.com/tecgrw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#b2c935] transition-colors">
                  <FaInstagram className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-2 px-6 py-2 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2"
              >
                📬 Get in Touch
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 opacity-80">
            &copy; {new Date().getFullYear()} Tecgrw. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 