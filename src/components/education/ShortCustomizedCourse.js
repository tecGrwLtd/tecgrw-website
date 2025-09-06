"use client";

import { Clock, Users, MapPin, CheckCircle} from 'lucide-react';

import TrainingCTA from "@/components/trainings/TrainingCTA";

const ShortCustomizedCourse = () => {
  const courseFeatures = [
    'Learn to Build Your Own AI Agents',
    'Prompt Engineering',
    'AI Ethics',
    'AI Tools for Business Applications',
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Course Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#095aa3] to-[#4f93ce] text-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Learn to Build Your Own AI Agents</h2>
          <div className="flex flex-wrap gap-4 text-blue-100 text-sm sm:text-base">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 Hours</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Adults</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Online</span>
          </div>
          <div className="mt-4 inline-block bg-white/20 rounded-lg px-4 py-1.5 text-lg font-semibold">
            RWF 300,000
          </div>
        </div>

        {/* Course Details */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">What You&apos;ll Learn</h3>
          <ul className="space-y-2 mb-6">
            {courseFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#b2c935]" /> {feature}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">
            <strong>Prerequisites:</strong> No prior AI knowledge needed. Perfect for beginners and professionals wanting AI applications for business.
          </p>
        </div>
      </div>
      <TrainingCTA heading={"Ready to Get Started?"}
                    subHeading={"Contact us to discuss a customized program for you or your team."}
                    bgColor={"bg-gradient-to-br from-[#b2c935] to-[#9db82a]"}
                    contactUs={"Let's connect"}
      />
    </section>
  );
};

export default ShortCustomizedCourse;
