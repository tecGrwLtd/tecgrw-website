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
        bgImg="https://plus.unsplash.com/premium_photo-1734554231510-e9c860f66a60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        getInTouch={true}
      />
      <Navbar
        initialBgColor="bg-transparent"
        initialTextColor="text-white"
        changeOnScroll={true}
      />
        <PartnersSection />
        <ServicesSection />
        <MetricsSection />
        <AccreditationsSection />
    </>
  );
}

export default HomePage;
