import { programHighlights } from '../assets/data/aIEducation'

const ProgramHighlights = () => {
  return (
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] text-center mb-12">
            What Makes Our Programs Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => {
               const HighlightIcon = highlight.icon;
               return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#095aa3] text-white rounded-lg flex items-center justify-center mb-4">
                  <HighlightIcon/>
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
              )})}
          </div>
        </div>
      </section>
  )
}

export default ProgramHighlights