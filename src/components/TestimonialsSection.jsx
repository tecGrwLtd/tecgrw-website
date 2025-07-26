import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const testimonials = [
  {
    quote: 'Tecgrw transformed our farm with AI-powered insights. Our yields have never been better!',
    name: 'Jean Bosco',
    role: 'Farmer, Eastern Province',
  },
  {
    quote: 'The AI training sessions were eye-opening. I now use data to make smarter business decisions.',
    name: 'Aline Uwase',
    role: 'Entrepreneur, Kigali',
  },
  {
    quote: 'Their custom AI solutions helped us optimize our supply chain and reduce costs.',
    name: 'Eric Nshimiyimana',
    role: 'Agri-Business Manager',
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#095aa3]">What Our Clients Say</h2>
        <div className="relative">
          <FadeInSection direction="up">
            <div className="bg-[#f8f9fa] rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-500 min-h-[220px] flex flex-col items-center animate-fade-in">
              <svg className="w-8 h-8 mb-4 text-[#b2c935]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11c0 2.21 1.79 4 4 4 .55 0 1 .45 1 1v1c0 .55-.45 1-1 1H4a1 1 0 0 0-1 1v1c0 .55.45 1 1 1h4a2 2 0 0 0 2-2v-2c0-2.21-1.79-4-4-4-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h1.17zM19.17 6A5.001 5.001 0 0 0 14 11c0 2.21 1.79 4 4 4 .55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1a1 1 0 0 0-1 1v1c0 .55.45 1 1 1h4a2 2 0 0 0 2-2v-2c0-2.21-1.79-4-4-4-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h1.17z" /></svg>
              <blockquote className="text-xl md:text-2xl font-medium text-[#231f1f] mb-6">“{testimonials[idx].quote}”</blockquote>
              <div className="font-bold text-[#095aa3]">{testimonials[idx].name}</div>
              <div className="text-[#231f1f] opacity-70 text-sm">{testimonials[idx].role}</div>
            </div>
          </FadeInSection>
          {/* Navigation buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-[#e5e7eb] rounded-full p-2 shadow hover:bg-[#b2c935] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]"
            onClick={prev}
            aria-label="Previous testimonial"
            style={{ left: '-2.5rem' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-[#e5e7eb] rounded-full p-2 shadow hover:bg-[#b2c935] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935]"
            onClick={next}
            aria-label="Next testimonial"
            style={{ right: '-2.5rem' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border-2 ${i === idx ? 'bg-[#b2c935] border-[#b2c935]' : 'bg-white border-[#e5e7eb]'} transition-colors`}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 