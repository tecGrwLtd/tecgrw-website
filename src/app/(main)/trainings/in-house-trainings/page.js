import PastEvents from "@/components/trainings/PastEvents";
import UpcommingEvents from "@/components/trainings/UpcommingEvents";

export default function InhouseTrainingPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-4 mb-16">
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grow your skills with our <span className="text-[#095aa3]">in-house training</span> at tecGrw Ltd.
          </p>
        </div>
        <PastEvents />
        <UpcommingEvents />
      </section>
    </>
  );
}