'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import ArticleMeta from './ArticleMeta';

const BlogCard = ({ article }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
       <div className="w-full h-[250px] relative mb-4">
        {article.coverImage && (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        )}
      </div>

        <h3 className="text-lg font-bold text-[#231f1f] mb-3 leading-tight group-hover:text-[#095aa3] transition-colors duration-200">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>
        
        <ArticleMeta 
          date={article.date} 
          readTime={article.readTime} 
          size="sm" 
        />

        <div className="mt-4">
          {article.status === 'published' ? (
            <Link 
              href={`/resources/blog/${article.slug}`}
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
    </article>
  );
}

export default BlogCard;