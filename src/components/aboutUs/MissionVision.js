import FadeInSection from '../FadeInSection';
import VisualCollage from './VisualCollage';

const MissionVision = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeInSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#095aa3] leading-tight">
                Our Vision
              </h2>
              <p className="text-lg text-[#231f1f] mb-6 leading-relaxed">
                To be at the forefront of technological transformation in agriculture, business, and education—creating a future where innovation drives sustainable growth, efficiency, and empowerment.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#095aa3] leading-tight">
                Our Mission
              </h2>
              <p className="text-lg text-[#231f1f] mb-8 leading-relaxed">
                At Tecgrw, we revolutionize industries by providing cutting-edge AI solutions for farmers and businesses while equipping students with real-world tech skills. Through innovation and education, we empower individuals and organizations to thrive in a data-driven future.
              </p>
            </FadeInSection>
          </div>
          {/* Right: Visual Collage */}
          <div className="relative">
            <FadeInSection direction="up" delay={200}>
            <VisualCollage />
            </FadeInSection>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#b2c935]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#095aa3]/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
