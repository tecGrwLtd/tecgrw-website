import FadeInSection from './FadeInSection';

const partners = [
  {
    id: 1,
    name: 'Plan International',
    description: 'Global development organization working to advance children\'s rights and equality for girls',
    logo: 'https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754041377/Plan_International_Logo_dhpdtj.png',
    website: 'https://plan-international.org'
  }
];

const PartnersSection = () => {

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Our Partners
            </h2>
            </FadeInSection>
          </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <FadeInSection key={partner.id} direction="up" delay={index * 150}>
              <div className="group flex flex-col items-center text-center max-w-sm">
                {/* Logo Container */}
                <div className="w-48 h-32 md:w-56 md:h-36 mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md">
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-90"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Partner Info */}
                <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-xl text-[#231f1f] mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-[#231f1f]/60 leading-relaxed mb-4 max-w-xs">
                    {partner.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
        {/* Alternate layout for multiple partners */}
        {partners.length > 3 && (
          <div className="mt-12 text-center">
            <FadeInSection direction="up">
              <p className="text-sm text-[#231f1f]/50 font-medium">
                Trusted by organizations worldwide
              </p>
            </FadeInSection>
          </div>
        )}
      </div>
    </section>
  );
}

export default PartnersSection;
