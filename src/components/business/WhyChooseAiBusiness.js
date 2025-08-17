
const WhyChooseAiBusiness = () => {
  return (
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#231f1f] mb-4">
              Why Choose tecGrw
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Local Expertise", subtitle: "Global Standards", description: "African markets with world-class solutions"},
              { title: "Custom Solutions", subtitle: "Tailored AI", description: "Designed specifically for your context",},
              { title: "Scalable", subtitle: "Cost-Effective Implementation", description: "Grows with your organization and budget"},
              { title: "Ongoing Support", subtitle: "& Training", description: "From implementation to team training"}
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <h3 className="text-lg font-bold text-[#231f1f] mb-1">
                  {benefit.title}
                </h3>
                <div className="text-sm font-medium text-[#095aa3] mb-2">
                  {benefit.subtitle}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChooseAiBusiness;
