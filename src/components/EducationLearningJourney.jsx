
const EducationLearningJourney = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            The Learning Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Foundation Building</h3>
              <p className="text-gray-600 leading-relaxed">
                Introduction to computers, basic programming concepts, and computational thinking through games and visual programming.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Skill Development</h3>
              <p className="text-gray-600 leading-relaxed">
                hands on programming, data analysis basics, and introduction to machine learning concepts with practical examples.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#095aa3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#231f1f] mb-3">Real-World Application</h3>
              <p className="text-gray-600 leading-relaxed">
                Project development, AI application building.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default EducationLearningJourney