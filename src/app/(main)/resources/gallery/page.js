"use client";

import { useState, useEffect } from 'react';
import events from '@/data/events';
import PageHeader from '@/components/gallery/PageHeader';
import EventCard from '@/components/gallery/EventGrid';
import MoreEvents from '@/components/gallery/MoreEvents';

export default function Gallery() {
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const eventsPerPage = 3;

  useEffect(() => {
    const initialEvents = events.slice(0, eventsPerPage);
    setDisplayedEvents(initialEvents);
  }, []);

  const hasMoreEvents = displayedEvents.length < events.length;

  const loadMoreEvents = async () => {
    if (isLoading || !hasMoreEvents) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * eventsPerPage;
    const newDisplayedEvents = events.slice(startIndex, endIndex);

    setDisplayedEvents(newDisplayedEvents);
    setCurrentPage(nextPage);
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader />
        
        <div className="space-y-0">
          {displayedEvents.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              index={index}
            />
          ))}
        </div>
        <MoreEvents 
          onLoadMore={loadMoreEvents}
          hasMoreEvents={hasMoreEvents}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}