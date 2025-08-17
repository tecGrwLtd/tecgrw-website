'use client';

import SectionHeader from './SectionHeader'
import CategoryBadge from './CategoryBadge';
import ArticleMeta from './ArticleMeta';

import { ExternalLink, Calendar, Clock } from 'lucide-react';

const FeaturedArticle = ({ article }) => {
  if (!article) return null;

  return (
    <section className="mb-16">
      <SectionHeader title="Featured Article" />
      
      <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <CategoryBadge category={article.category} featured />
            {article.source && (
              <span className="ml-4 text-sm text-gray-500">{article.source}</span>
            )}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#231f1f] mb-4 leading-tight">
            {article.title}
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <ArticleMeta date={article.date} readTime={article.readTime} />
            
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#b2c935] text-[#231f1f] font-semibold rounded-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
            >
              <span>Read Full Article</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticle;

