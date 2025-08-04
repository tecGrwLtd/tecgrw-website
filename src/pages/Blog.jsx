import React from 'react';
import { FaExternalLinkAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

 const Blog = () => {
  // Real article data
  const featuredArticle = {
    title: "Using technology is the key to increase productivity in agriculture – Madam Samreen Nurmohamed",
    excerpt: "Technology adoption in agriculture is crucial for enhancing productivity and sustainability. Learn about innovative approaches to modernizing farming practices and the role of digital solutions in transforming agricultural outcomes.",
    url: "https://www.rnanews.com/news/using-technology-is-the-key-to-increase-productivity-in-agriculture-madam-samreen-nurmohamed",
    source: "RNA News",
    date: "2024",
    readTime: "5 min read",
    category: "Agriculture Technology"
  };

  // Placeholder articles for the grid
  const placeholderArticles = [
    {
      title: "Smart Irrigation Systems: Revolutionizing Water Management",
      excerpt: "Discover how IoT-powered irrigation systems are helping farmers optimize water usage and improve crop yields.",
      category: "Smart Farming",
      date: "Coming Soon",
      readTime: "4 min read"
    },
    {
      title: "AI in Agriculture: Predicting Crop Diseases Before They Strike",
      excerpt: "Learn how machine learning algorithms are being used to detect and prevent crop diseases early.",
      category: "AI Technology",
      date: "Coming Soon", 
      readTime: "6 min read"
    },
    {
      title: "Sustainable Farming Practices for the Digital Age",
      excerpt: "Exploring how modern technology can support environmentally friendly farming methods.",
      category: "Sustainability",
      date: "Coming Soon",
      readTime: "5 min read"
    },
    {
      title: "The Future of AgriTech in Rwanda: Opportunities and Challenges",
      excerpt: "An in-depth look at the agricultural technology landscape in Rwanda and emerging opportunities.",
      category: "Industry Insights",
      date: "Coming Soon",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="w-4 h-4 mr-2" />
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
                  <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* More Articles Section */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-[#231f1f]">More Articles</h2>
            <div className="ml-4 h-px bg-[#b2c935] flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {placeholderArticles.map((article, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#231f1f] mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="w-3 h-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button 
                    disabled
                    className="w-full py-2 px-4 bg-gray-100 text-gray-400 font-medium rounded-lg cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-[#231f1f] mb-4">
            Stay Updated with Tecgrw
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't miss out on the latest insights in agricultural technology and innovation. 
            Follow us for updates on new articles and industry developments.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#b2c935] text-[#231f1f] font-semibold rounded-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
            >
              Subscribe to Updates
            </a>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-[#095aa3] text-[#095aa3] font-semibold rounded-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;