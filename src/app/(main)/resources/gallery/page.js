import events from '@/data/events';
import PageHeader from '@/components/gallery/PageHeader';
import EventGrid from '@/components/gallery/EventGrid';
import MoreEvents from '@/components/gallery/MoreEvents';

export default function Gallery(){

  return (
    <div className="w-full bg-[#f8f9fa] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventGrid key={event.id} event={event} />
          ))}
        </div>
        <MoreEvents />
      </div>
    </div>
  );
};
