import { performRequest } from './datocms';
import { 
  ALL_CASESTUDIES_QUERY, 
  CASESTUDY_BY_SLUG_QUERY, 
  ALL_CASESTUDY_SLUGS_QUERY,
  transformCaseStudy
} from './caseStudyQueries';

// retrieve all case studies
export async function getAllCaseStudies() {
  try {
    const data = await performRequest(ALL_CASESTUDIES_QUERY);
    if (!data.allCasestudies) {
      return { olderCaseStudies: null, recentCaseStudies: [] };
    }
    const publishedCaseStudies = data.allCasestudies
      .map(transformCaseStudy)
      .filter(caseStudy => caseStudy.status === 'published');
    const [recentCaseStudy, ...olderCaseStudies] = publishedCaseStudies;
    return {
      recentCaseStudy: recentCaseStudy,
      olderCaseStudies: olderCaseStudies
    }
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return { olderCaseStudies: null, recentCaseStudy: [] };
  }
}

// Fetch single case study by slug
export async function getCaseStudyBySlug(slug) {
  try {
    const data = await performRequest(CASESTUDY_BY_SLUG_QUERY, {
      variables: { slug }
    });
    if (!data.casestudy) {
      return null;
    }

    return transformCaseStudy(data.casestudy);
  } catch (error) {
    console.error(`Error fetching case study with slug ${slug}:`, error);
    return null;
  }
}

// Fetch all case study slugs (for static generation)
export async function getAllCaseStudySlugs() {
  try {
    const data = await performRequest(ALL_CASESTUDY_SLUGS_QUERY);

    return data.allCasestudies?.map(casestudy => casestudy.slug) || [];
  } catch (error) {
    console.error('Error fetching case study slugs:', error);
    return [];
  }
}