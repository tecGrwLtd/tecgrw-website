import FeaturedArticle from '@/components/blog/FeaturedArticle';
import BlogGrid from '@/components/blog/BlogGrid';
import PageHeader from '@/components/blog/PageHeader';

import { featuredArticle, recentBlogs } from '@/data/blog';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader />
      <FeaturedArticle article={featuredArticle} />
      <BlogGrid articles={recentBlogs} />
    </div>
  );
}

export const metadata = {
  title: 'Blog | tecGrw - Latest in AgriTech & AI',
  description: 'Stay updated with the latest insights on smart agriculture, AI education, and technology innovations from tecGrw.',
  keywords: 'agriculture blog, AI insights, smart farming, Rwanda tech, tecGrw'
};