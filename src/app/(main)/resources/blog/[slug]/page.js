import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import { getAllBlogs, getBlogBySlug, getAllBlogSlugs } from '@/lib/blogService';
import CategoryBadge from '@/components/blog/CategoryBadge';
import BlogGrid from '@/components/blog/BlogGrid';

// it Returns a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// plugs in metadata in the html meta tag
export async function generateMetadata({ params }) {
  // read route params
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found | tecGrw',
    };
  }

  return {
    title: `${blog.title} | tecGrw Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.coverImage ? [blog.coverImage] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  console.log("dynamic Params:", await params);
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }
  const { latestBlog, olderBlogs } = await getAllBlogs();
  const allBlogs = latestBlog ? [latestBlog, ...olderBlogs] : olderBlogs;
  const otherBlogs = allBlogs.filter(b => b.slug !== slug);

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link 
            href="/resources/blog"
            className="inline-flex items-center text-[#095aa3] hover:text-[#b2c935] transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <CategoryBadge category={blog.category} featured={true} />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-[#231f1f] mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="text-sm font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-sm">{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm">{blog.readTime}</span>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            {blog.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        {blog.coverImage && (
          <div className="relative h-64 lg:h-96 mb-8 rounded-2xl overflow-hidden">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: blog.content }} />

      </article>
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid title="Read also" blogs={otherBlogs} />
        </div>
      </footer>
    </>
  );
}
// Enable ISR with 1-hour revalidation
export const revalidate = 3600;