import PageHeader from '@/components/gallery/PageHeader';
import Events from '@/components/gallery/Events';


export const metadata = {
  title: "Agriculture & AI Resources | tecGrw Knowledge Hub Rwanda | Farming Technology Guides | Controlled environment agriculture | Agritech training events",
  description: "Access comprehensive resources on agriculture technology, AI implementation, hydroponics guides, and smart farming techniques. tecGrw's knowledge hub for farmers, businesses, and tech enthusiasts in Rwanda.",
};

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