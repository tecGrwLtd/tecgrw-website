import BlogCard from './BlogCard';
import SectionHeader from './SectionHeader';

const BlogGrid = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <section>
        <SectionHeader title="Latest Blog Posts" />
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeader title="Latest Blog Posts" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <BlogCard 
            key={article.slug || index} 
            article={article} 
          />
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;
