import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/#about',
    isHash: true,
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
    ],
  },
  { name: 'Gallery', href: "/gallery" },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({ 
  initialBgColor = 'bg-transparent',
  scrolledBgColor = 'bg-white',

  // Text colors when not scrolled
  initialTextColor = 'text-white',
  initialHoverColor = 'hover:text-[#b2c935]',
  
  // Text colors when scrolled
  scrolledTextColor = 'text-[#231f1f]',
  scrolledHoverColor = 'hover:text-[#b2c935]',
  
  // Shadow when scrolled
  scrolledShadow = 'shadow-md',
  
  // Whether to change colors on scroll
  changeOnScroll = true,
  
  // Custom scroll threshold
  scrollThreshold = 0
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!changeOnScroll) return;
    
    const handleScroll = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [changeOnScroll, scrollThreshold]);

  function handleKeyDown(e, idx) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenDropdown(openDropdown === idx ? null : idx);
    }
  }

  // Check if a link is active
  const isActiveLink = (href, isHash = false) => {
    if (isHash) {
      return location.pathname === '/' && location.hash === href.split('#')[1];
    }
    return location.pathname === href;
  };

  // Check if any child of a dropdown is active
  const isActiveParent = (children) => {
    if (!children) return false;
    return children.some(child => location.pathname === child.href);
  };

  // Get link classes with active state
  const getLinkClasses = (href, isHash = false, hasChildren = false, children = null) => {
    const baseClasses = (changeOnScroll && scrolled) 
      ? `${scrolledTextColor} ${scrolledHoverColor}`
      : `${initialTextColor} ${initialHoverColor}`;
    
    const isActive = hasChildren ? isActiveParent(children) : isActiveLink(href, isHash);
    const activeColor = (changeOnScroll && scrolled) ? 'text-[#b2c935]' : 'text-[#b2c935]';
    
    return `${baseClasses} ${isActive ? activeColor : ''} font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] rounded px-2 py-1`;
  };

  // Background class based on scroll state and props
  const bgClass = (changeOnScroll && scrolled) 
    ? `${scrolledBgColor} ${scrolledShadow}`
    : initialBgColor;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 w-screen transition-colors duration-300 ${bgClass}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-3">
        {/* Logo */}
        <NavLink
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
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center flex-1 justify-end pr-2">
          {navItems.map((item, idx) => (
            <li key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button
                    className={`flex items-center gap-1 ${getLinkClasses(item.href, false, true, item.children)}`}
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
                        <NavLink
                          to={sub.href}
                          className={`block px-4 py-2 text-[#231f1f] hover:bg-[#f8f9fa] hover:text-[#b2c935] focus:bg-[#f8f9fa] focus:text-[#b2c935] rounded transition-colors duration-200 ${
                            isActiveLink(sub.href) ? 'bg-[#f8f9fa] text-[#b2c935]' : ''
                          }`}
                          tabIndex={0}
                        >
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.isHash ? (
                <HashLink
                  smooth
                  to={item.href}
                  className={getLinkClasses(item.href, true)}
                >
                  {item.name}
                </HashLink>
              ) : (
                <NavLink
                  to={item.href}
                  className={getLinkClasses(item.href)}
                >
                  {item.name}
                </NavLink>
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
                    className={`flex items-center justify-between w-full text-left text-[#231f1f] font-medium py-2 px-2 rounded hover:text-[#b2c935] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] ${
                      isActiveParent(item.children) ? 'text-[#b2c935]' : ''
                    }`}
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
                          <NavLink
                            to={sub.href}
                            className={`block px-4 py-2 text-[#231f1f] hover:bg-[#f8f9fa] hover:text-[#b2c935] focus:bg-[#f8f9fa] focus:text-[#b2c935] rounded transition-colors duration-200 ${
                              isActiveLink(sub.href) ? 'bg-[#f8f9fa] text-[#b2c935]' : ''
                            }`}
                          >
                            {sub.name}
                          </NavLink>
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
                  className={`block px-2 py-2 text-[#231f1f] hover:text-[#b2c935] font-medium rounded transition-colors duration-200 ${
                    isActiveLink(item.href, true) ? 'text-[#b2c935]' : ''
                  }`}
                >
                  {item.name}
                </HashLink>
              ) : (
                <NavLink
                  to={item.href}
                  className={`block px-2 py-2 text-[#231f1f] hover:text-[#b2c935] font-medium rounded transition-colors duration-200 ${
                    isActiveLink(item.href) ? 'text-[#b2c935]' : ''
                  }`}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;