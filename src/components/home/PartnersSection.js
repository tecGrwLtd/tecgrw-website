import Image from 'next/image' 
import partners from "@/data/partners";

const PartnersSection = () => {
  const shouldSlide = partners.length > 4;
  const displayPartners = shouldSlide ? [...partners, ...partners] : partners;

  return (
    <section className="py-20 bg-white relative">
      {/* Scroll anchor positioned above the section to account for fixed navbar */}
      <div id="partners" className="absolute -top-40"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Partners Grid/Scroll */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50/50 to-white p-8">
          {shouldSlide && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            </>
          )}
                     
          <div className={`flex gap-12 ${shouldSlide ? 'animate-scroll' : 'justify-center flex-wrap'}`}>
            {displayPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0">
                <div className="w-48 h-32 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6 hover:shadow-lg hover:border-[#b2c935]/30 transition-all duration-300 group">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 192px, 192px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-[#095aa3] to-[#b2c935] rounded-full"></div>
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