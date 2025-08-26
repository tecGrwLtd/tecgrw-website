import Image from "next/image"

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
                Our solutions are designed for real-world farming conditions in Rwanda. 
                Through GSM-controlled smart greenhouses, we provide farmers in rural 
                areas with reliable, easy-to-use technology that improves productivity 
                and access without requiring constant internet connectivity.
              </p>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948409/mahama_greenhouse_rjbkku.jpg"
                alt="Smart agriculture technology in action"
                width={600}
                height={400}
                className="rounded-xl shadow-xl w-full h-[400px] object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AgricultureTechnology