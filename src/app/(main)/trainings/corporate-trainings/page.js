import Features from "@/components/trainings/Features";
import CorporateCTASection from "@/components/trainings/CorporateCTASection";
import HowWeWork from "@/components/trainings/HowWeWork";

export default function CorporateTrainingPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8 order-1 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#095aa3] leading-tight">
                Corporate Training
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-[#9db82a] leading-relaxed">
                AI, Machine Learning and AI Tools for Business
              </p>
            </div>
            <Features />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8 order-2 lg:order-2">
            <HowWeWork />
            
            {/* CTA Section - hidden on mobile, shows on desktop */}
            <div className="hidden lg:block">
              <CorporateCTASection />
            </div>
          </div>
        </div>
        <div className="block lg:hidden mt-8">
          <CorporateCTASection />
        </div>
      </section>
    </>
  );
}