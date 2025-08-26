import CourseOfferingCard from './CourseOfferingCard';
import CustomizedCoursesCard from './CustomizedCoursesCard';

const CourseOfferings = () => {

  return (
    <>
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div id="registration" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
            Our Course Offerings
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect program for your learning journey
          </p>
        </div>     
        <CourseOfferingCard />
        </div>
        </section>
        {/* Adult Courses Section */}
        <section>
        <div className="mt-12 bg-gradient-to-r from-[#095aa3] to-[#4f93ce] rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-3xl font-bold mb-4">
              Short Course
            </h3>
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Artificial Intelligence | Learn to Build Your Own AI Agents
            </h2>
            <CustomizedCoursesCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseOfferings;
