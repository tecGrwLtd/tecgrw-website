import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Smart Irrigation System for Smallholder Farmers",
      category: "Smart Agriculture",
      description: "Implemented IoT-based irrigation solutions that reduced water consumption by 40% while increasing crop yields for over 500 farmers in rural Rwanda.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop",
      readTime: "5 min read",
      slug: "smart-irrigation-smallholder-farmers"
    },
    {
      id: 2,
      title: "AI-Powered Crop Disease Detection",
      category: "AI Technology",
      description: "Developed machine learning models that help farmers identify crop diseases early, preventing up to 60% of potential crop losses through mobile app diagnostics.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
      readTime: "7 min read",
      slug: "ai-crop-disease-detection"
    },
    {
      id: 3,
      title: "Digital Farm Management Platform",
      category: "Business AI",
      description: "Created comprehensive farm management software that streamlined operations for agricultural cooperatives, improving efficiency by 35% and reducing costs.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=250&fit=crop",
      readTime: "6 min read",
      slug: "digital-farm-management-platform"
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="mt-24 pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#231f1f]">
              Case Studies
            </h1>
            <p className="text-xl text-[#095aa3] mb-4">
              Growing solutions, <strong>delivering impact</strong>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our teams use their expertise to develop farmer-centred solutions to meet our partners' most pressing agricultural challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#b2c935] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#231f1f] mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {study.readTime}
                    </span>
                    
                    <Link 
                      to={`/case-studies/${study.slug}`}
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
    </>
  );
};

export default CaseStudies;
