import Image from 'next/image'
import partners from "@/data/partners";

const PartnersSection = () => {
  const shouldSlide = partners.length > 4;
  const displayPartners = shouldSlide ? [...partners, ...partners] : partners;

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-[#b2c935] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-[#095aa3]">Partnerships</span>
          </div>
        </div>
        {/* Partners Grid/Scroll */}
        <div className="relative overflow-hidden">
          {shouldSlide && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            </>
          )}
                     
          <div className={`flex gap-8 ${shouldSlide ? 'animate-scroll' : 'justify-center flex-wrap'}`}>
            {displayPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0">
                <div className="w-40 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 160px, 160px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style> */}
    </section>
  );
};

export default PartnersSection;