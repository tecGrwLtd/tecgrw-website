import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/#about',
    isHash: true,
    children: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Team', href: '/about/team' },
    ],
  },
  {
    name: 'Solutions',
    children: [
      { name: 'Smart Agriculture', href: '/solutions/smart-agriculture' },
      { name: 'AI Education', href: '/solutions/ai-education' },
      { name: 'Business AI', href: '/solutions/business-ai' },
      { name: 'Case Studies', href: '/solutions/case-studies' },
    ],
  },
  {
    name: 'Resources',
    children: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Newsletter', href: '/resources/newsletter' },
      { name: 'Downloads', href: '/resources/downloads' },
    ],
  },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleKeyDown(e, idx) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenDropdown(openDropdown === idx ? null : idx);
    }
  }

  // Dynamic classes based on scroll state
  const linkClass = scrolled 
    ? "text-[#231f1f] hover:text-[#b2c935]" 
    : "text-white hover:text-[#b2c935]";
  
  const buttonClass = scrolled 
    ? "text-[#231f1f] hover:text-[#b2c935]" 
    : "text-white hover:text-[#b2c935]";

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 w-screen transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col items-center group mr-8 select-none flex-shrink-0"
          tabIndex={0}
          aria-label="Tecgrw homepage"
        >
          <img
            src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948168/logo_uo6lrf.png"
            alt="Tecgrw logo"
            className="max-h-16 md:max-h-20 h-auto w-auto"
            loading="lazy"
            width={48}
            height={48}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center flex-1 justify-end pr-2">
          {navItems.map((item, idx) => (
            <li key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button
                    className={`flex items-center gap-1 ${buttonClass} font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] rounded px-2 py-1`}
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  >
                    {item.name}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <ul className="absolute left-0 top-full mt-2 min-w-[180px] bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all z-50 border border-[#e5e7eb]">
                    {item.children.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          to={sub.href}
                          className="block px-4 py-2 text-[#231f1f] hover:bg-[#f8f9fa] hover:text-[#b2c935] focus:bg-[#f8f9fa] focus:text-[#b2c935] rounded transition-colors duration-200"
                          tabIndex={0}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.isHash ? (
                <HashLink
                  smooth
                  to={item.href}
                  className={`${linkClass} font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] rounded px-2 py-1`}
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link
                  to={item.href}
                  className={`${linkClass} font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] rounded px-2 py-1`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] flex-shrink-0"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6 text-[#095aa3]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <ul className="absolute right-4 top-16 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-2 md:hidden z-40 min-w-[220px] border border-[#e5e7eb] animate-fade-in w-[90vw] max-w-xs">
          {navItems.map((item, idx) => (
            <li key={item.name} className="relative">
              {item.children ? (
                <>
                  <button
                    className="flex items-center justify-between w-full text-left text-[#231f1f] font-medium py-2 px-2 rounded hover:text-[#b2c935] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === idx}
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                  >
                    <span>{item.name}</span>
                    <svg
                      className={classNames(
                        'w-4 h-4 ml-1 transition-transform',
                        openDropdown === idx ? 'rotate-180' : ''
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === idx && (
                    <ul className="pl-4 py-1">
                      {item.children.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.href}
                            className="block px-4 py-2 text-[#231f1f] hover:bg-[#f8f9fa] hover:text-[#b2c935] focus:bg-[#f8f9fa] focus:text-[#b2c935] rounded transition-colors duration-200"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : item.isHash ? (
                <HashLink
                  smooth
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 text-[#231f1f] hover:text-[#b2c935] font-medium rounded transition-colors duration-200"
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link
                  to={item.href}
                  className="block px-2 py-2 text-[#231f1f] hover:text-[#b2c935] font-medium rounded transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
