import React from 'react';

export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#095aa3]">Blog</h1>
      <p className="mb-8 text-lg text-[#231f1f]">Insights, news, and updates from Tecgrw's team and partners.</p>
      <div className="prose prose-lg text-[#231f1f]">
        <ul>
          <li>[Placeholder article 1]</li>
          <li>[Placeholder article 2]</li>
          <li>[Placeholder article 3]</li>
        </ul>
      </div>
    </section>
  );
} 