import { Suspense, useState, useEffect } from 'react';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn,
  FaInstagram, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submissionError, setSubmissionError] = useState(null); // State to hold error message

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn("EmailJS Public Key is not set. Please check your .env.local file and ensure it's prefixed correctly (e.g., VITE_ or NEXT_PUBLIC_).");
      setSubmissionError("Email service not configured. Please contact support.");
    }
  }, [publicKey]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null); 
    if (!serviceId || !templateId || !publicKey) {
      setSubmissionError('Email service credentials are not fully configured. Please check your .env.local file.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        current_year: new Date().getFullYear(),
      };
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        // Email sent successfully
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // EmailJS API returned an error
        setSubmissionError(`Failed to send message. Please try again. Error: ${response.text || 'Unknown error'}`);
        console.error('EmailJS Error Response:', response);
      }
    } catch (error) {
      // Network error or other unexpected issues
      console.error('Error submitting form via EmailJS:', error);
      setSubmissionError('Network error or problem connecting to the email service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Map component for lazy loading
  const  Map = () => {
    return (
      <div className="rounded-lg overflow-hidden shadow border border-[#e5e7eb] w-full h-64 md:h-full">
        <iframe
          title="Tecgrw Location"
          src="https://www.google.com/maps?q=100+KG+9+Ave,+Kigali,+Rwanda&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '220px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }

  // Render success message if form was submitted
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="w-16 h-16 bg-[#b2c935] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-8 h-8 text-[#231f1f]" />
            </div>
            <h2 className="text-2xl font-bold text-[#231f1f] mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out to Tecgrw. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#b2c935] text-[#231f1f] px-6 py-3 rounded-lg hover:bg-[#095aa3] hover:text-white transition-colors font-medium"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Company Info */}
          <div className="space-y-8">

            {/* Contact Information */}
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
                  {/* Map */}
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
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: Closed<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#231f1f] mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/tecGrw1" 
                  className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/tecgrw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/tecgrw" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-[#095aa3] hover:text-white transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/tecgrw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#b2c935] text-[#231f1f] rounded-lg flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 sticky top-8">
              <h3 className="text-2xl font-bold text-[#231f1f] mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-8">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>

              {/* Form element with onSubmit handler */}
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

                {/* Display submission error if any */}
                {submissionError && (
                  <div className="flex items-center text-red-600 text-sm mt-2">
                    <FaExclamationCircle className="mr-2" />
                    {submissionError}
                  </div>
                )}

                <button
                  type="submit" // Changed to type="submit" for proper form submission
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
        </div>
      </div>
    </>
  );
};

export default ContactPage;
