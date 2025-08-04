import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const testimonials = [
  {
    quote: 'Ms Samreen, thanks for sowing into our little ones—like the mother and tech guru that you are. Making an 8 year old a junior data scientist was not an easy task yet you made it enjoyable, memorable and achievable. You went way beyond our expectations!',
    name: 'Patricie & Kabasha',
    role: 'Parents',
  },
  {
    quote: 'I wholeheartedly encourage any parent to consider enrolling their child in this programme. Watching the kids present their data models and connect what they\'d learned to real-life scenarios was not only a proud moment but also a powerful affirmation of the programme\'s value. It\'s an experience that goes far beyond the classroom.',
    name: 'Parent Testimonial',
    role: 'AI Education Program',
  },
];

const TestimonialsSection = ({Heading }) => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeInSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#231f1f]">
              { Heading }
            </h2>
            <p className="text-lg text-[#231f1f]/70 max-w-2xl mx-auto">
              Hear from families a who have experienced the transformative power of our programs
            </p>
          </FadeInSection>
        </div>

        <div className="relative">
          <FadeInSection direction="up" delay={200}>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 transition-all duration-500 min-h-[280px] flex flex-col justify-center border border-gray-100">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#b2c935]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#b2c935]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-[#231f1f]/80 mb-3 leading-relaxed text-center font-normal italic">
                "{testimonials[idx].quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="text-center">
                <div className="font-semibold text-[#231f1f] text-lg mb-1">
                  {testimonials[idx].name}
                </div>
                <div className="text-[#095aa3] text-sm font-medium">
                  {testimonials[idx].role}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Navigation buttons - Only show if more than 1 testimonial */}
          {testimonials.length > 1 && (
            <>
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:bg-[#b2c935] hover:text-white hover:border-[#b2c935] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] focus-visible:ring-offset-2"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:bg-[#b2c935] hover:text-white hover:border-[#b2c935] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b2c935] focus-visible:ring-offset-2"
                onClick={next}
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots - Only show if more than 1 testimonial */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === idx
                    ? 'bg-[#b2c935] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;
