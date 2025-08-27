import { Check } from "lucide-react"

import { points } from "@/data/trainings";

const Features = () => {
  return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <ul className="space-y-5">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <div className="bg-[#9db82a] rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-200">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 text-lg leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Features;
