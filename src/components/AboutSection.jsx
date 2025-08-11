import FadeInSection from './FadeInSection';
import AboutMissionVisionContent from '../components/AboutMissionVisionContent';
import AboutVisualCollage from './AboutVisualCollage';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutMissionVisionContent />
          {/* Right: Visual Collage */}
          <div className="relative">
            <FadeInSection direction="up" delay={200}>
            <AboutVisualCollage />
            </FadeInSection>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#b2c935]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#095aa3]/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
