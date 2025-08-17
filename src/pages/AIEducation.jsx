
import EducationOverview from '../components/EducationOverview';
import ProgramHighlights from '../components/ProgramHighlights';
import TestimonialsSection from '../components/TestimonialsSection';
import EducationLearningJourney from '../components/EducationLearningJourney';
import WhyChooseAiAcademy from '../components/WhyChooseAiAcademy';
import CourseOfferings from '../components/CourseOfferings';

const AIEducation = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCustomizedCourse = () => {
    document.getElementById('customized-course').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <EducationOverview
          scrollToRegistration = {scrollToRegistration}
          scrollToCustomizedCourse = {scrollToCustomizedCourse}
        />
      <ProgramHighlights />
      <CourseOfferings />
      <WhyChooseAiAcademy />
      <EducationLearningJourney />
      <TestimonialsSection/>
    </>
  );
};
export default AIEducation;
