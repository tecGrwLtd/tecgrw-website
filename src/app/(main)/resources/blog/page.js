import BlogGrid from '@/components/blog/BlogGrid';
import { getAllBlogs } from '@/lib/blogService';

export default async function BlogPage() {
  const { recentBlog, olderBlogs } = await getAllBlogs();

  const allBlogs = recentBlog ? [recentBlog, ...olderBlogs] : [];
  // blog grids
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <BlogGrid title="Latest Blogs" blogs={allBlogs} />
    </div>
  );
}

export const metadata = {
  title: 'Blog | tecGrw - Latest in AgriTech & AI',
  description: 'Stay updated with the latest insights on smart agriculture, AI education, and technology innovations from tecGrw.',
};

// revalidate every hour
export const revalidate = 3600;
