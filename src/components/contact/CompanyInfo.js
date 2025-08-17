'use client';

import { Suspense } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import SocialMedia from '../SocialMedia';
import Map from '../Map';

const CompanyInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-[#231f1f] mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-[#b2c935] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 hover:bg-[#095aa3] transition-colors group">
              <FaMapMarkerAlt className="w-4 h-4 text-[#231f1f] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#231f1f]">Office Address</h4>
              <p className="text-gray-600">100 KG 9 Ave, Kigali, Rwanda</p>
              <div className="mt-2 w-48 h-32 rounded-lg overflow-hidden">
                <Suspense fallback={<div className="w-48 h-32 bg-[#e5e7eb] animate-pulse" />}>
                  <Map />
                </Suspense>
              </div>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 bg-[#b2c935] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 hover:bg-[#095aa3] transition-colors group">
              <FaEnvelope className="w-4 h-4 text-[#231f1f] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#231f1f]">Email</h4>
              <p className="text-gray-600">info@tecgrw.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 bg-[#b2c935] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 hover:bg-[#095aa3] transition-colors group">
              <FaPhone className="w-4 h-4 text-[#231f1f] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#231f1f]">Phone</h4>
              <p className="text-gray-600">+250 7989 75878</p>
              <p className="text-gray-600">+250 795583795</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 bg-[#b2c935] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 hover:bg-[#095aa3] transition-colors group">
              <FaClock className="w-4 h-4 text-[#231f1f] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#231f1f]">Business Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: Closed<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default CompanyInfo;
