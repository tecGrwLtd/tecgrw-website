'use client';

import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';

import { sendEmail } from '@/actions/email.action';

const SendEmailForm = () => {
  const [state, formAction, pending] = useActionState(sendEmail, {success: null, message: ''});
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  useEffect(() => {
    if (state.success === null) return; 
    if (state.success) {
      setEmail("");
      setMessage("");
      toast.success(state.message);
      const form = document.querySelector('form');
      form?.reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state])

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 sticky top-8">
        <h3 className="text-2xl font-bold text-[#231f1f] mb-2">Send us a Message</h3>
        <p className="text-gray-600 mb-8">We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
        
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#231f1f] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                disabled={pending}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095aa3] focus:border-transparent transition-all outline-none disabled:opacity-60 disabled:cursor-not-allowed"
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
                required
                disabled={pending}
                onChange={(e) => setEmail(e.target.value)}
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
              required
              disabled={pending}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095aa3] focus:border-transparent transition-all outline-none disabled:opacity-60 disabled:cursor-not-allowed"
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
              required
              rows={6}
              disabled={pending}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095aa3] focus:border-transparent transition-all outline-none resize-none disabled:opacity-60 disabled:cursor-not-allowed"
              placeholder="Tell us about your project, questions, or how we can help you..."
            />
          </div>
          
          <button
            type="submit"
            disabled={!email || !message || pending}
            className="w-full bg-[#b2c935] text-[#231f1f] py-4 px-6 rounded-lg hover:bg-[#095aa3] hover:text-white transition-all font-semibold text-lg flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-[#b2c935] disabled:hover:text-[#231f1f]"
          >
            {pending ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : state.success ? (
              <>
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Message Sent!</span>
              </>
            ) : (
              <span>Send Message</span>
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

export default SendEmailForm;