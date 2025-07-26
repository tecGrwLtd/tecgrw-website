import React, { useState, Suspense } from 'react';

const CONTACT = {
  location: '100 KG 9 Ave, Kigali, Rwanda',
};

function validate(values) {
  const errors = {};
  if (!values.name) errors.name = 'Name is required.';
  if (!values.email) errors.email = 'Email is required.';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = 'Invalid email.';
  if (!values.message) errors.message = 'Message is required.';
  return errors;
}

function Map() {
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

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Here you would send the form data to your backend or email service
    }
  }

  return (
    <section id="contact-section" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-[#f8f9fa] rounded-2xl shadow-lg p-8 space-y-6" noValidate>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#095aa3]">Contact Us</h2>
          {submitted ? (
            <div className="text-green-600 font-semibold">Thank you! We have received your message.</div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={`w-full px-4 py-2 rounded border ${errors.name ? 'border-red-500' : 'border-[#e5e7eb]'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]`}
                  value={values.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <div id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`w-full px-4 py-2 rounded border ${errors.email ? 'border-red-500' : 'border-[#e5e7eb]'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]`}
                  value={values.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <div id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded border ${errors.message ? 'border-red-500' : 'border-[#e5e7eb]'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]`}
                  value={values.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <div id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</div>}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#b2c935] text-[#231f1f] font-bold text-lg shadow hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2"
              >
                Send Message
              </button>
            </>
          )}
        </form>
        {/* Map (lazy loaded) */}
        <Suspense fallback={<div className="w-full h-64 bg-[#e5e7eb] rounded-lg animate-pulse" />}> <Map /> </Suspense>
      </div>
    </section>
  );
} 