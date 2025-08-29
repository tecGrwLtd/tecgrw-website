import HomeHero from '@/components/home/HomeHero';
import PartnersSection from '@/components/home/PartnersSection';
import ServicesSection from '@/components/home/ServicesSection';
import MetricsSection from '@/components/home/MetricsSection';
import AccreditationsSection from '@/components/home/AccreditionsSection';


export const metadata = {
  title: "tecGrw | Agriculture Technology & AI Solutions Rwanda | Smart Farming Kigali",
  description: "Transform your agriculture and business with tecGrw's cutting-edge solutions. Hydroponics, smart farming technology, AI for business, game park security, and tech education in Rwanda. Serving governments and enterprises across East Africa.",
  keywords: "tecGrw, agriculture technology Rwanda, AI solutions Kigali, hydroponics systems, smart farming Rwanda, agritech East Africa, AI business solutions, tech education Rwanda",
};


export default function HomePage(){
  return (
    <>
      <HomeHero
        headline='Growth, Revolutionized'
        description={`We help businesses and farmers level up with the latest tech solutions, while also teaching and guiding students through the same cutting-edge technologies we use in the real world.

                     Our aim is to not only shake up how businesses and the agricultural industry work but also to prepare the next generation to confidently navigate the worlds of data and artificial intelligence.`}
        bgImg="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1756374631/Homepage_pic-2_yermrd.png"
        getInTouch={true}
      />
      <PartnersSection />
      <ServicesSection />
      <MetricsSection />
      <AccreditationsSection />
    </>
  );
}

