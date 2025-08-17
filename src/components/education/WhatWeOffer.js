import WhatWeOfferCard from './WhatWeOfferCard';

const WhatWeOffer = () => {

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#b2c935] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
             WHAT WE OFFER
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#231f1f] mb-6">
            Custom-Built AI Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions help organizations streamline operations and make data-driven decisions
          </p>
        </div>
        <WhatWeOfferCard/>
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#095aa3] to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Whichever business issue you're addressing
            </h3>
            <p className="text-xl text-blue-100">
              tecGrw builds AI frameworks tailored to your mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
