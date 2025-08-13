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
      <CourseOfferings 
            scrollToRegistration = {scrollToRegistration}
            scrollToCustomizedCourse = {scrollToCustomizedCourse}
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
