"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { corporate_training_faqs } from "@/data/trainings"

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#095aa3] to-blue-600 p-6">
        <h2 className="text-2xl font-bold text-white text-center">
          Frequently Asked Questions
        </h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {corporate_training_faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
              <button
                className="w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                <div className="text-[#095aa3] group-hover:text-[#074a8c]">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 pb-4 text-gray-700 leading-relaxed bg-gray-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-gradient-to-r from-[#b2c935]/10 to-[#9db82a]/10 rounded-lg border border-[#b2c935]/20">
          <p className="text-center text-gray-700 text-sm">
            Still have questions? Let&apos;s talk about your training needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
