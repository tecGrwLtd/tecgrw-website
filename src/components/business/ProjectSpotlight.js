import Image from "next/image";

const ProjectSpotlight = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50/50 to-green-50/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#095aa3]/10 text-[#095aa3] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Project Spotlight
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#231f1f]">
            AI for Child Protection
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In partnership with <span className="font-semibold">PLAN International Rwanda </span> 
              and the <span className="font-semibold">National Child Development Agency</span>, 
              tecGrw is piloting an initiative:
            </p>
            <p className="italic text-[#095aa3] font-medium mb-6">
              “AI-Driven Solutions to Strengthen Child Protection & Reduce Teenage Pregnancy in Rwanda.”
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Identify vulnerable children and risk indicators",
                "Support real-time data collection and analysis",
                "Assist government and NGOs in targeted interventions",
                "Enable predictive modeling for early prevention",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-[#b2c935] rounded-full mt-2 mr-3"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image / Visual */}
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754041377/Plan_International_Logo_dhpdtj.png"
              alt="PLAN International Project"
              fill
              className="object-contain p-6 bg-white"
            />
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 font-medium">
            Together, we&apos;re using AI not for profit — but for <span className="text-[#095aa3] font-semibold">impact</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
