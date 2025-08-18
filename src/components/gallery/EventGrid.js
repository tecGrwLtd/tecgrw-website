"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Calendar, Camera, ArrowRight } from 'lucide-react';

const EventGrid = ({ event }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = event.description;

  if (!showFullDescription){
    description = description.substring(0, 94) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#231f1f] px-3 py-1 rounded-full text-sm font-medium">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar size={16} />
          <span className="text-sm">{event.date}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-[#231f1f] mb-3 group-hover:text-[#095aa3] transition-colors">
          {event.title}
        </h3>
        
        <div className="text-gray-600">
          {description}
        </div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-[#095aa3] mb-5 hover:text-[#b2c935]"
        >
          { showFullDescription ? 'Read Less' : 'Read More'}
        </button>

        <button className="flex items-center gap-2 text-[#095aa3] hover:text-[#b2c935] font-medium transition-colors group">
          <Camera size={16} />
          <span>View Photos</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default EventGrid;
