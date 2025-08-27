"use client";

import { Calendar, Users, CheckCircle } from "lucide-react";

import { pastEvents } from "@/data/trainings";

const PastEvents = () => {
  return (
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-[#095aa3] text-center">Recent Training Events</h2>
          {pastEvents.map((event, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Event Info */}
                <div className="lg:col-span-2 p-10 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#095aa3]">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#9db82a]" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#9db82a]" />
                        <span className="font-medium">{event.participants}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
                {/* Topics Covered */}
                <div className="bg-gradient-to-br from-[#9db82a] to-[#b2c935] p-10 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-white mb-6">Topics Covered</h4>
                  <ul className="space-y-4">
                    {event.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-white font-medium leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default PastEvents