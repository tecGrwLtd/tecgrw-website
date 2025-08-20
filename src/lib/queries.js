export const ALL_BLOGS_QUERY = `
  query AllBlogs {
    allBlogs(orderBy: publishDate_DESC) {
      id
      title
      slug
      excerpt
      author{
      name
      }
      publishDate
      coverImage {
        url
        alt
      }
      content {
        value
      }
      _status
      _firstPublishedAt
    }
  }
`;

export const BLOG_BY_SLUG_QUERY = `
  query BlogBySlug($slug: String!) {
    blog(filter: { slug: { eq: $slug } }) {
      id
      title
      slug
      excerpt
      author{
      name
      }
      publishDate
      coverImage {
        url
        alt
      }
      content {
        value
      }
      _status
      _firstPublishedAt
    }
  }
`;

export const ALL_BLOG_SLUGS_QUERY = `
  query AllBlogSlugs {
    allBlogs {
      slug
    }
  }
`;

export const transformBlogPost = (datoCmsBlog) => {
  if (!datoCmsBlog) return null;
  
  return {
    id: datoCmsBlog.id,
    title: datoCmsBlog.title,
    slug: datoCmsBlog.slug,
    excerpt: datoCmsBlog.excerpt,
    author: datoCmsBlog.author?.name || 'Unknown Author',
    date: new Date(datoCmsBlog.publishDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    coverImage: datoCmsBlog.coverImage?.url,
    content: datoCmsBlog.content,
    status: datoCmsBlog._status === 'published' ? 'published' : 'draft',
    category: 'Tech Insights', // add this field to DatoCMS or derive it
    readTime: calculateReadTime(datoCmsBlog.content?.value)
  };
};

const calculateReadTime = (content) => {
  if (!content) return '5 min read';

  const wordsPerMinute = 200;
  const textContent = JSON.stringify(content).replace(/[^\w\s]/gi, '');
  const wordCount = textContent.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  
  return `${readTime} min read`;
};