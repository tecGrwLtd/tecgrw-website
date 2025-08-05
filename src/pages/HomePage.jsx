import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import MetricsSection from '../components/MetricsSection';
import AccreditationsSection from '../components/Accreditions'
import PartnersSection from '../components/PartnersSection';

const HomePage = () => {
  return (
    <>
      {/* Navbar should come first and will overlay on hero section */}
      <Navbar
        initialBgColor="bg-transparent"
        initialTextColor="text-white"
        initialHoverColor="hover:text-[#b2c935]"
        scrolledBgColor="bg-white"
        scrolledTextColor="text-[#231f1f]"
        scrolledHoverColor="hover:text-[#b2c935]"
        scrolledShadow="shadow-md"
        changeOnScroll={true}
        scrollThreshold={0}
      />
      
      <HeroSection
        headline='Growth, Revolutionized'
        description={`We help businesses and farmers level up with the latest tech solutions, while also teaching and guiding students through the same cutting-edge technologies we use in the real world.

                     Our aim is to not only shake up how businesses and the agricultural industry work but also to prepare the next generation to confidently navigate the worlds of data and artificial intelligence.`}
        bgImg="https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?_gl=1*mofg93*_ga*MTcwNjY0MTM1MC4xNzUzMjU4NDUz*_ga_8JE65Q40S6*czE3NTQzODgyODAkbzQkZzEkdDE3NTQzODgyOTUkajQ1JGwwJGgw"
        getInTouch={true}
      />
      
      <PartnersSection />
      <ServicesSection />
      <MetricsSection />
      <AccreditationsSection />
    </>
  );
}

export default HomePage;
