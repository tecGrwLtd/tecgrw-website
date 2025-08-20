import BlogCard from './BlogCard';
import SectionHeader from './SectionHeader';

const BlogGrid = ({ title, blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <section>
        <SectionHeader title={title} />
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeader title={title} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={blog.slug || index}
            article={blog}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;
