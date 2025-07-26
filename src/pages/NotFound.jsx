import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center">
      <h1 className="text-5xl font-bold text-[#b2c935] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#095aa3]">Page Not Found</h2>
      <p className="mb-8 text-lg text-[#231f1f]">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="px-6 py-2 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2">
        Go to Homepage
      </Link>
    </section>
  );
} 