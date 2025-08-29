import EducationOverview from '@/components/education/Overview';
import ProgramHighlights from '@/components/education/ProgramHighlights';
import CourseOfferings from '@/components/education/CourseOfferings';
import WhyChooseAiAcademy from '@/components/education/WhyChooseAiAcademy';
import EducationLearningJourney from '@/components/education/EducationLearningJourney';
import AiAcademyTestimonialsSection from '@/components/education/AiAcademyTestimonialsSection';

export const metadata = {
  title: "Programming & Artificial Intelligence | tecGrw Rwanda | Education & Data Science ",
  description: "tecGrw is equipping learners of all ages in Rwanda with essential digital skills. From data science and machine learning to coding and AI, our courses serve children starting as early as age 8, teens, and working professionals.",
};

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
