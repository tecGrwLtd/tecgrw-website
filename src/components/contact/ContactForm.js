'use client';

import { FaPaperPlane, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = ({ 
  formData,
  handleInputChange,
  isSubmitting,
  submissionError,
  handleSubmit
}) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 sticky top-8">
        <h3 className="text-2xl font-bold text-[#231f1f] mb-2">Send us a Message</h3>
        <p className="text-gray-600 mb-8">We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#231f1f] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095aa3] focus:border-transparent transition-all outline-none"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#231f1f] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095aa3] focus:border-transparent transition-all outline-none"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-[#231f1f] mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095aa3] focus:border-transparent transition-all outline-none"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Partnership Opportunities">Partnership Opportunities</option>
              <option value="Education Information">Education Information</option>
              <option value="Smart Greenhouses">Smart Greenhouses</option>
              <option value="AI & Data Science Education">AI & Data Science Education</option>
              <option value="AI in Businesses">AI in Businesses</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#231f1f] mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095aa3] focus:border-transparent transition-all outline-none resize-none"
              placeholder="Tell us about your project, questions, or how we can help you..."
            />
          </div>
          
          {submissionError && (
            <div className="flex items-center text-red-600 text-sm mt-2">
              <FaExclamationCircle className="mr-2" />
              {submissionError}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#b2c935] text-[#231f1f] py-4 px-6 rounded-lg hover:bg-[#095aa3] hover:text-white transition-all font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;