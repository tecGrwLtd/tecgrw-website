import React from 'react'

const AgricultureTechnology = () => {
  return (
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-6">
                Technology That Works in the Field
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our solutions are designed for real-world farming conditions in Rwanda. From remote GSM monitoring 
                in rural areas to sophisticated AI analysis that runs on mobile devices, we build technology 
                that's both advanced and accessible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every system we deploy is tested, trained, and supported locally, ensuring farmers can maximize 
                their benefits from day one while building long-term sustainability.
              </p>
            </div>
            <div>
              <img 
                src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948409/mahama_greenhouse_rjbkku.jpg"
                alt="Smart agriculture technology in action"
                className="rounded-xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AgricultureTechnology
