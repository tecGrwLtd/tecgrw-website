import { ArrowRight } from 'lucide-react';

import EventCard from '../components/EventCard';

const Gallery = () => {
  const events = [
    {
        id: 3,
        title: "Graduation Day 2025",
        date: " June 21, 2025",
        coverImage: "https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754205153/junior_datascientist_graduation_june_21_i1anuq.png",
        description: "Junior Data Science graduates of tecGrw AI Academy. A new generation of thinkers and creators who’ve taken their first step into the world of AI & tech.",
        category: "Graduation"
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
      <div className="mb-12 max-w-3xl text-left">
        <p className="text-3xl text-[#231f1f] font-semibold leading-snug">
          Moments from our <span className="text-[#095aa3] font-bold">programs</span>, 
          <span className="text-[#095aa3] font-bold"> events</span>, and 
          <span className="text-[#095aa3] font-bold"> milestones</span> in agriculture, 
          education, and business.
        </p>
      </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 rounded-full bg-[#b2c935] text-[#231f1f] font-semibold shadow-lg hover:bg-[#095aa3] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095aa3] focus-visible:ring-offset-2">
            Load More Events
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
