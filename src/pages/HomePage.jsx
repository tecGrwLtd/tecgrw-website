import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import MetricsSection from '../components/MetricsSection';
import AccreditationsSection from '../components/Accreditions'
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <>
      <HeroSection
        headline='Growth, Revolutionized'
        description={`We help businesses and farmers level up with the latest tech solutions, while also teaching and guiding students through the same cutting-edge technologies we use in the real world.

                     Our aim is to not only shake up how businesses and the agricultural industry work but also to prepare the next generation to confidently navigate the worlds of data and artificial intelligence.`}
        bgImg="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop"
        getInTouch={true}
      />
      <Navbar
        initialBgColor="bg-transparent"
        initialTextColor="text-white"
        changeOnScroll={true}
      />
        <AboutSection />
        <ServicesSection />
        <MetricsSection />
        <AccreditationsSection />
        <PartnersSection />
        <Footer />
    </>
  );
}

export default HomePage;
