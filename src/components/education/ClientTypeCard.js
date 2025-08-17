"use client";
import { clientTypes } from "@/data/business";

const ClientTypeCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clientTypes.map((client, index) => {
        const IconComponent = client.icon;
        return (
          <div
            key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#b2c935]/30 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${client.color} text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent size={20} />
            </div>

            <h3 className="text-lg font-bold text-[#231f1f] mb-2">
              {client.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {client.description}
            </p>
          </div>)
        })}
    </div>
  )
}

export default ClientTypeCard