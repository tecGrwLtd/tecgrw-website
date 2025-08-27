import PageHeader from '@/components/gallery/PageHeader';
import Events from '@/components/gallery/Events';

export default function Gallery() {
  return (
    <div className="w-full bg-[#f8f9fa] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader />
        <Events />
      </div>
    </div>
  );
}