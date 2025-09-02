import { performRequest } from './datocms';
import { 
  ALL_BLOGS_QUERY, 
  BLOG_BY_SLUG_QUERY, 
  ALL_BLOG_SLUGS_QUERY,
  transformBlogPost 
} from './blogQueries';

// retrieve all blogs
export async function getAllBlogs() {
  try {
    const data = await performRequest(ALL_BLOGS_QUERY);
    if (!data.allBlogs) {
      return { olderBlogs: null, recentBlogs: [] };
    }

    const publishedBlogs = data.allBlogs
      .map(transformBlogPost)
      .filter(blog => blog.status === 'published');
    const [recentBlog, ...olderBlogs] = publishedBlogs;
    return {
      recentBlog: recentBlog,
      olderBlogs: olderBlogs
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { olderBlogs: null, recentBlog: [] };
  }
}

// Fetch single blog by slug
export async function getBlogBySlug(slug) {
  try {
    const data = await performRequest(BLOG_BY_SLUG_QUERY, {
      variables: { slug }
    });
    
    if (!data.blog) {
      return null;
    }

    return transformBlogPost(data.blog);
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return null;
  }
}

// Fetch all blog slugs (for static generation)
export async function getAllBlogSlugs() {
  try {
    const data = await performRequest(ALL_BLOG_SLUGS_QUERY);
    
    return data.allBlogs?.map(blog => blog.slug) || [];
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}