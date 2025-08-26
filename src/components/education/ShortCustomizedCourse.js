"use client";

import Link from 'next/link';
import { Clock, Users, MapPin, CheckCircle, Phone, Mail } from 'lucide-react';

const ShortCustomizedCourse = () => {
  const courseFeatures = [
    'Learn to Build Your Own AI Agents',
    'Prompt Engineering',
    'AI Ethics',
    'AI Tools for Business Applications',
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Course Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#095aa3] to-[#4f93ce] text-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Learn to Build Your Own AI Agents</h2>
          <div className="flex flex-wrap gap-4 text-blue-100 text-sm sm:text-base">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 Hours</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Adults</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Online</span>
          </div>
          <div className="mt-4 inline-block bg-white/20 rounded-lg px-4 py-1.5 text-lg font-semibold">
            RWF 300,000
          </div>
        </div>

        {/* Course Details */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
          <ul className="space-y-2 mb-6">
            {courseFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#b2c935]" /> {feature}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">
            <strong>Prerequisites:</strong> No prior AI knowledge needed. Perfect for beginners and professionals wanting AI applications for business.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-br from-[#b2c935] to-[#9db82a] rounded-2xl p-6 sm:p-8 text-white text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Get Started?</h3>
        <p className="text-green-100 mb-6">Contact us to discuss a customized program for you or your team.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="flex-1 sm:flex-none w-full sm:w-auto text-center py-3 px-6 bg-white text-[#095aa3] font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Contact Us
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
    </section>
  );
};

export default ShortCustomizedCourse;
