import { Check } from "lucide-react"

import { howWeWork } from "@/data/trainings";

const HowWeWork = () => {
  return (
    <div className="bg-gradient-to-br from-[#b2c935] to-[#9db82a] rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-10">
        <h2 className="text-2xl font-bold text-white mb-8">How We Work?</h2>
        <ul className="space-y-6">
          {howWeWork.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 group">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0 group-hover:bg-white/30 transition-colors duration-200">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-lg leading-relaxed font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-2 bg-gradient-to-r from-[#095aa3] to-blue-600"></div>
    </div>
  )
}

export default HowWeWork;
