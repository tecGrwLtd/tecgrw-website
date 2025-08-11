import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import SuccessMessage from '../components/SuccessMessage';
import CompanyInfo from '../components/CompanyInfo';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submissionError, setSubmissionError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionError(`Failed to send message. Please try again. Error: ${response.text || 'Unknown error'}`);
        console.error('EmailJS Error Response:', response);
      }
    } catch (error) {
      console.error('Error submitting form via EmailJS:', error);
      setSubmissionError('Network error or problem connecting to the email service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <SuccessMessage />
    );
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <CompanyInfo />
          <ContactForm
                    formData= {formData}
                    handleInputChange = {handleInputChange}
                    isSubmitting = {isSubmitting}
                    isSubmitted = {isSubmitted}
                    submissionError = {submissionError}
                    handleSubmit = {handleSubmit}
                    />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
