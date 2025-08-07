import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '../assets/data/blog';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  const relatedBlogs = getRelatedBlogs(slug);

  // If blog not found, redirect to blog page
  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Format content with proper paragraphs and headers
  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      
      // Handle headers
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-[#231f1f] mt-8 mb-4">
            {paragraph.substring(3)}
          </h2>
        );
      }
      
      // Handle bold text
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-lg font-semibold text-[#095aa3] mt-6 mb-3">
            {paragraph.substring(2, paragraph.length - 2)}
          </h3>
        );
      }
      
      // Handle bullet points
      if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 leading-relaxed mb-2 ml-4">
            {paragraph.substring(2)}
          </li>
        );
      }
      
      // Handle checkmarks
      if (paragraph.startsWith('✅')) {
        return (
          <div key={index} className="flex items-start gap-3 mb-2">
            <span className="text-[#b2c935] mt-1">✅</span>
            <span className="text-gray-700 leading-relaxed">{paragraph.substring(2)}</span>
          </div>
        );
      }
      
      // Handle quotes
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-[#b2c935] pl-6 italic text-[#095aa3] bg-gray-50 p-4 rounded-r-lg my-6">
            {paragraph.substring(2)}
          </blockquote>
        );
      }
      
      // Handle table headers (basic)
      if (paragraph.includes('|') && paragraph.includes('Challenge')) {
        return (
          <div key={index} className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[#095aa3] text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">Challenge</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Smart Agriculture Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Drought and erratic rainfall</td>
                  <td className="border border-gray-300 px-4 py-2">Automated irrigation & water-saving systems</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Poor soil quality</td>
                  <td className="border border-gray-300 px-4 py-2">Soilless farming like hydroponics</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Post-harvest losses</td>
                  <td className="border border-gray-300 px-4 py-2">Climate-controlled environments</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Low yields</td>
                  <td className="border border-gray-300 px-4 py-2">Precision input use (water, light, nutrients)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Climate change</td>
                  <td className="border border-gray-300 px-4 py-2">Adaptive, data-driven farming</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[#095aa3] hover:text-[#b2c935] transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-[#b2c935] text-[#231f1f] text-sm font-semibold rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4 leading-tight">
              {blog.title}
            </h1>
          </div>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span className="font-medium text-[#095aa3]">{blog.author}</span>
              <span className="mx-2">•</span>
              <span>{blog.authorRole}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {formatContent(blog.content)}
          </div>
          
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-[#b2c935] hover:text-white transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-[#095aa3]/5 to-[#b2c935]/5 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#231f1f] mb-2">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#095aa3] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-[#095aa3] mb-1">{blog.author}</h4>
                  <p className="text-sm text-gray-600 mb-2">{blog.authorRole}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{blog.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-[#231f1f] mb-8">Read Also</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <div key={relatedBlog.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full">
                      {relatedBlog.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#231f1f] mb-3 leading-tight">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {relatedBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{relatedBlog.date}</span>
                    <span>{relatedBlog.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${relatedBlog.slug}`}
                    className="inline-flex items-center text-[#095aa3] hover:text-[#b2c935] font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
