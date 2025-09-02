// Get all case studies
export const ALL_CASESTUDIES_QUERY = `
  query allCasestudies {
    allCasestudies(orderBy: publishDate_DESC) {
      id
      title
      slug
      excerpt
      publishDate
      coverImage {
        url
        alt
      }
      clientName
      industry
      challenge
      solution
      results
      _status
      _firstPublishedAt
    }
  }
`;

// Get a single case study by slug
export const CASESTUDY_BY_SLUG_QUERY = `
  query CASESTUDY_BY_SLUG_QUERY($slug: String) {
  casestudy(filter: { slug: { eq: $slug } }) {
    id
    title
    slug
    excerpt
    publishDate
    coverImage {
      url
      alt
    }
    clientName
    industry
    challenge
    solution
    results
  }
}
`;

// Get all slugs for static paths
export const ALL_CASESTUDY_SLUGS_QUERY = `
  query AllCaseStudySlugs {
    allCasestudies {
      slug
    }
  }
`;

export const transformCaseStudy = (datoCmsCaseStudy) => {
  if (!datoCmsCaseStudy) return null;

  return {
    id: datoCmsCaseStudy.id,
    title: datoCmsCaseStudy.title,
    slug: datoCmsCaseStudy.slug,
    excerpt: datoCmsCaseStudy.excerpt,
    content: datoCmsCaseStudy.content,
    clientName: datoCmsCaseStudy.clientName || '',
    coverImage: datoCmsCaseStudy.coverImage?.url,
    industry: datoCmsCaseStudy.industry || '',
    challenge: datoCmsCaseStudy.challenge || '',
    solution: datoCmsCaseStudy.solution || '',
    results: datoCmsCaseStudy.results || '',
    testimonials: datoCmsCaseStudy.testimonials || null,
    date: new Date(datoCmsCaseStudy.publishDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    status: datoCmsCaseStudy._status === 'published' ? 'published' : 'draft'
  };
};
