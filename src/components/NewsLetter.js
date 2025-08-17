"use client";

import { useState } from "react";

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    return (
        <section className="mt-24 max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#095aa3]">Newsletter</h1>
          <p className="mb-8 text-lg text-[#231f1f]">Subscribe to Tecgrw's newsletter for the latest updates and insights.</p>
          <form
            className="flex flex-col sm:flex-row gap-2 items-center"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="px-4 py-2 rounded-full text-[#231f1f] border border-[#e5e7eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2"
            >
              Subscribe
            </button>
          </form>
          {submitted && <div className="mt-4 text-green-600 font-semibold">Thank you for subscribing!</div>}
        </section>
  )
}

export default NewsLetter