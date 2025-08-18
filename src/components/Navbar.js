'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import { navItems } from '@/data/navItems';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({ 
  initialBgColor = 'bg-transparent',
  scrolledBgColor = 'bg-[#095aa3]',

  initialTextColor = 'text-white/80',
  initialHoverColor = 'hover:text-[#b2c935]',

  scrolledTextColor = 'text-[#231f1f]',
  scrolledHoverColor = 'hover:text-[#b2c935]',

  scrolledShadow = 'shadow-md',

  changeOnScroll = false,

  scrollThreshold = 0,

  useBackdrop = false
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!changeOnScroll) return;
    
    const handleScroll = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [changeOnScroll, scrollThreshold]);

  const handleDropdownToggle = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  const handleMouseEnter = (idx) => {
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  function handleKeyDown(e, idx) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(idx);
    }
  }

  const isActiveLink = (href, isHash = false) => {
    if (isHash) {
      // For hash links, check if we're on the home page and the hash matches
      return pathname === '/' && (typeof window !== 'undefined' && window.location.hash === href.split('#')[1]);
    }
    return pathname === href;
  };

  const isActiveParent = (children) => {
    if (!children) return false;
    return children.some(child => pathname === child.href);
  };

  // Custom smooth scroll function for hash links
  const handleHashLink = async (href, e) => {
    e.preventDefault();
    const targetId = href.split('#')[1];

    if (pathname !== '/') {
      router.push('/');
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Retry after 50ms until found
          setTimeout(scrollToElement, 50);
        }
      };

      scrollToElement();
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setMenuOpen(false);
  };
  const getLinkClasses = (href, isHash = false, hasChildren = false, children = null) => {
    const baseClasses = `${initialTextColor} ${initialHoverColor}`;

    const isActive = hasChildren ? isActiveParent(children) : isActiveLink(href, isHash);
    const activeColor = 'text-[#b2c935]';

    const visibility = (!scrolled && changeOnScroll) ? 'drop-shadow-md' : '';
    
    return `${baseClasses} ${isActive ? activeColor : ''} ${visibility} font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] rounded px-3 py-2`;
  };

  const getBgClass = () => {
    if (changeOnScroll && scrolled) {
      return `${scrolledBgColor} ${scrolledShadow}`;
    }
    if (useBackdrop && !scrolled) {
      return 'bg-black/20 backdrop-blur-sm border-b border-white/10';
    }
    
    return initialBgColor;
  };
  
  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 w-screen transition-all duration-300 ${getBgClass()}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-center group mr-8 select-none flex-shrink-0"
          tabIndex={0}
          aria-label="Tecgrw homepage"
        >
          <Image
            src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948168/logo_uo6lrf.png"
            alt="Tecgrw logo"
            width={80}
            height={80}
            className={`max-h-16 md:max-h-20 h-auto w-auto transition-all duration-300 ${
              (!scrolled && changeOnScroll) 
                ? 'drop-shadow-lg filter brightness-110 contrast-110' 
                : ''
            }`}
            priority
            sizes="(max-width: 768px) 64px, 80px"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center flex-1 justify-end pr-2">
          {navItems.map((item, idx) => (
            <li 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(idx)}
              onMouseLeave={() => item.children && handleMouseLeave()}
            >
              {item.children ? (
                <>
                  <button
                    className={`flex items-center gap-1 ${getLinkClasses(item.href, false, true, item.children)}`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === idx}
                    tabIndex={0}
                    onClick={() => handleDropdownToggle(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  >
                    {item.name}
                    <svg
                      className={classNames(
                        'w-4 h-4 ml-1 transition-transform duration-200',
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
                  <ul className={classNames(
                    'absolute left-0 top-full mt-3 min-w-[200px] w-max bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl shadow-black/20 py-2 px-1 z-50 transition-all duration-300 ease-out',
                    openDropdown === idx 
                      ? 'opacity-100 visible translate-y-0 scale-100' 
                      : 'opacity-0 invisible translate-y-2 scale-95'
                  )}>
                    {item.children.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          className={classNames(
                            'block w-full px-4 py-3 mx-1 rounded-lg text-[#231f1f] font-medium text-sm transition-all duration-200 ease-out focus:outline-none active:scale-[0.98]',
                            isActiveLink(sub.href) 
                              ? 'bg-[#b2c935]/10 text-[#095aa3] shadow-sm' 
                              : 'hover:bg-[#095aa3]/8 hover:text-[#095aa3] hover:shadow-sm hover:translate-x-1 focus:bg-[#095aa3]/8 focus:text-[#095aa3]'
                          )}
                          tabIndex={0}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.isHash ? (
                <button
                  onClick={(e) => handleHashLink(item.href, e)}
                  className={getLinkClasses(item.href, true)}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={getLinkClasses(item.href)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden ml-2 p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] flex-shrink-0 transition-all duration-300 ${
            (!scrolled && changeOnScroll) 
              ? 'bg-white/90 backdrop-blur-sm text-[#231f1f] drop-shadow-md' 
              : 'text-[#231f1f] bg-white/10 backdrop-blur-sm'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
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
        <div className="absolute right-4 top-16 bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl py-4 px-2 md:hidden z-40 min-w-[240px] w-[90vw] max-w-sm animate-fade-in">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, idx) => (
              <li key={item.name} className="relative">
                {item.children ? (
                  <>
                    <button
                      className={classNames(
                        'flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-[#231f1f] font-medium transition-all duration-200 hover:bg-[#095aa3]/8 hover:text-[#095aa3] focus:outline-none focus:bg-[#095aa3]/8 focus:text-[#095aa3] active:scale-[0.98]',
                        isActiveParent(item.children) ? 'bg-[#b2c935]/10 text-[#095aa3]' : ''
                      )}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === idx}
                      onClick={() => handleDropdownToggle(idx)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={classNames(
                          'w-4 h-4 transition-transform duration-300',
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
                    <div className={classNames(
                      'overflow-hidden transition-all duration-300 ease-out',
                      openDropdown === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      <ul className="pl-4 pr-2 py-2 space-y-1">
                        {item.children.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className={classNames(
                                'block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none active:scale-[0.98]',
                                isActiveLink(sub.href)
                                  ? 'bg-[#b2c935]/10 text-[#095aa3] shadow-sm'
                                  : 'text-[#231f1f]/80 hover:bg-[#095aa3]/5 hover:text-[#095aa3] hover:translate-x-1 focus:bg-[#095aa3]/5 focus:text-[#095aa3]'
                              )}
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : item.isHash ? (
                  <button
                    onClick={(e) => handleHashLink(item.href, e)}
                    className={classNames(
                      'block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-[#095aa3]/8 hover:text-[#095aa3] focus:outline-none focus:bg-[#095aa3]/8 focus:text-[#095aa3] active:scale-[0.98]',
                      isActiveLink(item.href, true) 
                        ? 'bg-[#b2c935]/10 text-[#095aa3]' 
                        : 'text-[#231f1f]'
                    )}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={classNames(
                      'block px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-[#095aa3]/8 hover:text-[#095aa3] focus:outline-none focus:bg-[#095aa3]/8 focus:text-[#095aa3] active:scale-[0.98]',
                      isActiveLink(item.href) 
                        ? 'bg-[#b2c935]/10 text-[#095aa3]' 
                        : 'text-[#231f1f]'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;