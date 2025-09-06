import Features from "@/components/trainings/Features";
import HowWeWork from "@/components/trainings/HowWeWork";
import FAQSection from "@/components/trainings/FQA"
import TrainingCTA from "@/components/trainings/TrainingCTA";

export default function CorporateTrainingPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#095aa3] leading-tight">
            Corporate Training
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-[#9db82a] leading-relaxed">
            AI, Machine Learning and AI Tools for Business
          </p>
        </div>
        <div className="mb-16">
          <Features />
        </div>
        <div className="mb-16">
          <HowWeWork />
        </div>
        <div className="mb-16">
          <FAQSection />
        </div>
        <TrainingCTA
                  heading={"Ready to Train Your Team in AI?"}
                  subHeading={"Elevate your team skills with our AI and Machine Learning corporate training programs."}
                  bgColor={"bg-gradient-to-r from-[#095aa3] to-blue-600"}
                  contactUs={"Reach Us"}
        />
      </section>
    </>
  );
}