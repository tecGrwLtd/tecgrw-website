import Image from 'next/image';
import Link from 'next/link';


const CaseStudiesGrid = ({ caseStudies }) => {
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <section>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No case studies available at the moment.</p>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 bg-gray-50 mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={study.coverImage} 
                  alt={study.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#231f1f] mb-3 line-clamp-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {study.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/resources/case-studies/${study.slug}`}
                    className="inline-flex items-center text-[#095aa3] hover:text-[#b2c935] font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesGrid;
