import BlogGrid from '@/components/blog/BlogGrid';
import { getAllBlogs } from '@/lib/blogService';

export default async function BlogPage() {
  const { latestBlog, olderBlogs } = await getAllBlogs();

  const allBlogs = latestBlog ? [latestBlog, ...olderBlogs] : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <BlogGrid title="Latest Blogs" blogs={allBlogs} />
    </div>
  );
}

export const metadata = {
  title: 'Blog | tecGrw - Latest in AgriTech & AI',
  description: 'Stay updated with the latest insights on smart agriculture, AI education, and technology innovations from tecGrw.',
  keywords: 'agriculture blog, AI insights, smart farming, Rwanda tech, tecGrw'
};

// revalidate every hour
export const revalidate = 3600;
