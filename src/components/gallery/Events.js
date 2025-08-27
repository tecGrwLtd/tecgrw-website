"use client";

import { useState, useEffect } from 'react';

import MoreEvents from './MoreEvents';
import EventCard from "./EventGrid"
import events from '@/data/events';

const Events = () => {
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const eventsPerPage = 3;

  useEffect(() => {
    const initialEvents = events.slice(0, eventsPerPage);
    setDisplayedEvents(initialEvents);
  }, []);
  const hasMoreEvents = displayedEvents.length < events.length;
  // to load more events
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
    <>
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
                hasMoreEvents={hasMoreEvents}
                onLoadMore={loadMoreEvents}
                isLoading={isLoading}
                />
    </>
  )
}

export default Events