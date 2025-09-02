import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building2, Target, Lightbulb, TrendingUp } from 'lucide-react';

import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/caseStudyServices"


export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | tecGrw',
    };
  }

  return {
    title: `${caseStudy.title} | tecGrw Case Studies`,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      images: caseStudy.coverImage ? [caseStudy.coverImage] : [],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link 
            href="/resources/case-studies"
            className="inline-flex items-center text-[#095aa3] hover:text-[#b2c935] transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Case Studies
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#b2c935]/10 text-[#b2c935] rounded-full text-sm font-semibold">
              {caseStudy.industry}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-[#231f1f] mb-6 leading-tight">
            {caseStudy.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Building2 size={16} />
              <span className="text-sm font-medium">{caseStudy.clientName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-sm">{caseStudy.date}</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm">{caseStudy.readTime}</span>
            </div> */}
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            {caseStudy.excerpt}
          </p>
        </header>

        {/* cover Img */}
        {caseStudy.coverImage && (
          <div className="relative h-64 lg:h-96 mb-12 rounded-2xl overflow-hidden">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Case Study*/}
        <div className="space-y-12">
          {/* Challenge Section */}
          {caseStudy.challenge && (
            <section className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-400">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-red-900">The Challenge</h2>
              </div>
              <div className="prose prose-lg text-red-800" dangerouslySetInnerHTML={{ __html: caseStudy.challenge }} />
            </section>
          )}

          {/* Solution Section */}
          {caseStudy.solution && (
            <section className="bg-[#095aa3]/5 rounded-2xl p-8 border-l-4 border-[#095aa3]">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#095aa3]" />
                <h2 className="text-2xl font-bold text-[#095aa3]">Our Solution</h2>
              </div>
              <div className="prose prose-lg text-gray-800" dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
            </section>
          )}

          {/* Results Section */}
          {caseStudy.results && (
            <section className="bg-[#b2c935]/10 rounded-2xl p-8 border-l-4 border-[#b2c935]">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#b2c935]" />
                <h2 className="text-2xl font-bold text-[#b2c935]">Results & Impact</h2>
              </div>
              <div className="prose prose-lg text-gray-800" dangerouslySetInnerHTML={{ __html: caseStudy.results }} />
            </section>
          )}

          {/* Full Content Section */}
          {caseStudy.content && (
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#231f1f] mb-6">Full Case Study</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
            </section>
          )}
        </div>
      </article>
    </>
  );
}

export const revalidate = 3600;