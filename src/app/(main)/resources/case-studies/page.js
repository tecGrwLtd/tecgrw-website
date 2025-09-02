import PageHeader from '@/components/case-studies/PageHeader';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';

import { getAllCaseStudies } from '@/lib/caseStudyServices';

export default async function CaseStudies() {
  const { recentCaseStudy, olderCaseStudies } = await getAllCaseStudies();

  const allCaseStudies = recentCaseStudy ? [recentCaseStudy, ...olderCaseStudies] : [];
  return (
    <>
    <PageHeader />
    <CaseStudiesGrid caseStudies={allCaseStudies} />
    </>
  );
};
