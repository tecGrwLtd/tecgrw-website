import CallToAction from "../business/CallToAction"

const EducationOverview = ({
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#231f1f] mb-6">
              AI Education for the Next Generation
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#095aa3] mb-6">
              Building Future-Ready Skills Through Real-World Learning
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At tecGrw AI Academy, we're equipping learners of all ages in Rwanda with essential digital skills. 
              From data science and machine learning to coding and AI, our courses serve children starting as early as age 8, 
              teens, and working professionals.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Whether you're looking to give your child a head start in technology or seeking professional AI training 
              for your career, we have programs designed to meet your learning goals.
            </p>
            <CallToAction />
          </div>
                   
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                 src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754304806/al_students_bow_graduation_day_pkwbv8.jpg"
                alt="Students learning data science and programming"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#095aa3] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#231f1f]">All Ages Welcome</p>
                    <p className="text-sm text-gray-600">Future Tech Leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationOverview