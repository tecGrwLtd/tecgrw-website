import FadeInSection from './FadeInSection';

const AboutMissionVisionContent = () => {
  return (
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
  )
}

export default AboutMissionVisionContent