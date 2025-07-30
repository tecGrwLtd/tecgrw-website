import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import MetricsSection from '../components/MetricsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AccreditationsSection from '../components/Accreditions'
// import ContactSection from '../components/ContactSection';


function HomePage() {
  return (
    <>
      <HeroSection />
      <Layout>
        <AboutSection />
        <ServicesSection />
        <MetricsSection />
        <AccreditationsSection />
        <TestimonialsSection />
        {/* <ContactSection /> */}
      </Layout>
    </>
  );
}

export default HomePage;
