import { useState } from 'react';

import EducationOverview from '../components/EducationOverview';
import ProgramHighlights from '../components/ProgramHighlights';
import StudentRegistration from '../components/StudentRegistration';
import TestimonialsSection from '../components/TestimonialsSection';
import EducationLearningJourney from '../components/EducationLearningJourney';
import WhyChooseAiAcademy from '../components/WhyChooseAiAcademy';
import CourseOfferings from '../components/CourseOfferings';

const AIEducation = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <EducationOverview
          scrollToRegistration = {scrollToRegistration}
        />
      <ProgramHighlights />
      <CourseOfferings 
            scrollToRegistration = {scrollToRegistration}
            setSelectedCourse = {setSelectedCourse}
      />
      <WhyChooseAiAcademy />
      <EducationLearningJourney />
      <StudentRegistration />
      <TestimonialsSection/>
    </>
  );
};
export default AIEducation;
