import FadeInSection from './FadeInSection';

const partners = [
  {
    id: 1,
    name: 'Plan International',
    logo: 'https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754041377/Plan_International_Logo_dhpdtj.png',
  }
];

const PartnersSection = () => {
  const shouldSlide = partners.length > 2;
  
  const displayPartners = shouldSlide ? [...partners, ...partners] : partners;

  return (
    <section id="partners" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Our Partners
            </h2>
          </FadeInSection>
        </div>

        {/* Scrolling Partners Strip */}
        <FadeInSection direction="up" delay={200}>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div className={`flex ${shouldSlide ? 'animate-scroll' : 'justify-center'}`}>
              {displayPartners.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12"
                >
                  <div className="w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4 border border-gray-100">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <FadeInSection direction="up" delay={400}>
            <p className="text-sm text-[#231f1f]/50 font-medium">
              Trusted by leading organizations worldwide
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Custom CSS for smooth infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default PartnersSection;