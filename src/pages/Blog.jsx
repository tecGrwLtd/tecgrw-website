import React from 'react';
import { ExternalLink, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import { featuredArticle, recentBlogs } from '../assets/data/blog';

const Blog = () => {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Featured Article */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-[#231f1f]">Featured Article</h2>
            <div className="ml-4 h-px bg-[#b2c935] flex-1"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 bg-[#b2c935] text-[#231f1f] text-sm font-semibold rounded-full">
                  {featuredArticle.category}
                </span>
                <span className="ml-4 text-sm text-gray-500">{featuredArticle.source}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#231f1f] mb-4 leading-tight">
                {featuredArticle.title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                
                <a
                  href={featuredArticle.url}
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
        </div>

        {/* Latest Blog Posts Section */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-[#231f1f]">Latest Blog Posts</h2>
            <div className="ml-4 h-px bg-[#b2c935] flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((article, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#231f1f] mb-3 leading-tight group-hover:text-[#095aa3] transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {article.status === 'published' ? (
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center text-[#095aa3] hover:text-[#b2c935] font-medium transition-colors duration-200 group"
                    >
                      Read More
                      <svg 
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                        fill="none"
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed">
                      Coming Soon
                      <Clock className="w-4 h-4 ml-1" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;