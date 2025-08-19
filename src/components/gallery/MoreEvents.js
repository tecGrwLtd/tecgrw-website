"use client";

import { useState } from 'react';
import { ArrowRight, Loader2 } from "lucide-react";

const MoreEvents = ({ onLoadMore, hasMoreEvents = true, isLoading = false }) => {
  const [clicked, setClicked] = useState(false);

  const handleLoadMore = async () => {
    if (isLoading) return;
    
    setClicked(true);
    if (onLoadMore) {
      await onLoadMore();
    }
    
    // Reset clicked state after animation
    setTimeout(() => setClicked(false), 300);
  };

  if (!hasMoreEvents) {
    return (
      <div className="text-center mt-16 py-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 text-gray-600">
          <span className="font-medium">You've seen all our events</span>
          <div className="w-2 h-2 bg-[#b2c935] rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mt-16">
      <div className="space-y-4">
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className={`inline-flex items-center px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform ${
            clicked ? 'scale-95' : 'scale-100'
          } ${
            isLoading 
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-[#b2c935] to-[#a3b832] text-[#231f1f] hover:from-[#095aa3] hover:to-[#074a8a] hover:text-white focus:ring-[#095aa3] hover:shadow-xl'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 size={20} className="animate-spin mr-2" />
              Loading Events...
            </>
          ) : (
            <>
              Load More Events
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        
        <p className="text-gray-500 text-sm">
          Discover more moments from our community
        </p>
      </div>
    </div>
  );
};

export default MoreEvents;