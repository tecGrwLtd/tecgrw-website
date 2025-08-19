'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import CompanyInfo from '@/components/contact/CompanyInfo';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: formData.email,
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send message");
      }
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#b2c935]  mb-4">
            Thank you for your message!
          </h2>
          <p className="text-gray-600 mb-8">
            We&apos;ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#095aa3] text-white px-6 py-2 rounded hover:bg-[#095aa3]"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-16">
          <CompanyInfo />
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            isSubmitting={isSubmitting}
            submissionError={submissionError}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}

