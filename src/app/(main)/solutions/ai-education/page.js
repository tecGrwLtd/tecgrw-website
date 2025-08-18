import EducationOverview from '@/components/education/Overview';
import ProgramHighlights from '@/components/education/ProgramHighlights';
import CourseOfferings from '@/components/education/CourseOfferings';
import WhyChooseAiAcademy from '@/components/education/WhyChooseAiAcademy';
import EducationLearningJourney from '@/components/education/EducationLearningJourney';
import AiAcademyTestimonialsSection from '@/components/education/AiAcademyTestimonialsSection';

export default function AIEducation(){
  return (
    <>
      <EducationOverview />
      <ProgramHighlights />
      <CourseOfferings />
      <WhyChooseAiAcademy />
      <EducationLearningJourney />
      <AiAcademyTestimonialsSection />
    </>
  );
};
