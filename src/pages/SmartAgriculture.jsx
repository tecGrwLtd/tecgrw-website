import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import AgriImpactStats from "../components/AgriImpactStats";
import { features, projects } from "../assets/data/agricultureData";

const SmartAgriculture = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const truncateText = (text, wordLimit = 20) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' , block: 'center'});
  };
const scrollToSolutions = () => {
    document.getElementById('solutions').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <>
      {/* Overview Section - Enhanced */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#b2c935] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#095aa3] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-2 h-2 bg-[#b2c935] rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-[#095aa3]">Empowering Farmers Through Technology</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#231f1f] mb-8 leading-tight">
            Smart Agriculture Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            At <span className="font-semibold text-[#095aa3]">tecgrw</span>, we're revolutionizing agriculture by combining cutting-edge technology with deep understanding 
            of local farming challenges. Our smart agriculture solutions help farmers increase productivity, reduce costs, 
            and build sustainable farming practices that protect both their livelihoods and the environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                    onClick={scrollToSolutions}
                    className="px-8 py-3 bg-[#b2c935] text-white font-semibold rounded-lg hover:bg-[#9db82a] transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Explore Our Solutions
            </button>
            <button
                  onClick={scrollToProjects}
                  className="px-8 py-3 border-2 border-[#095aa3] text-[#095aa3] font-semibold rounded-lg hover:bg-[#095aa3] hover:text-white transition-all duration-200"
                  > View Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid with Modal */}
      <section id="solutions" className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Our Smart Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform agricultural practices and increase productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#095aa3] to-[#0c6bc7] text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#231f1f] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {truncateText(feature.description, 25)}
                      </p>
                      <button 
                        onClick={() => setSelectedFeature(feature)}
                        className="inline-flex items-center text-[#095aa3] hover:text-[#0c6bc7] font-semibold transition-colors duration-200 group"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section with Show More/Less */}
      <section id="projects" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
              Projects Across Rwanda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations of our smart agriculture solutions making a difference in local communities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Project Cards */}
            {(showAllProjects ? projects : projects.slice(0, 1)).map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#b2c935]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#b2c935] rounded-full"></div>
                  <span className="text-sm font-semibold text-[#095aa3] uppercase tracking-wider">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#231f1f] mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          <div className="rounded-xl overflow-hidden shadow-md min-h-[300px] lg:min-h-[400px]">
            <img
              src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754548698/yellow_peppers_qnfejm.jpg"
              alt="Gallery preview"
              className="w-full h-full object-cover"
            />
          </div>

          </div>

          {/* Show More/Less Button */}
          {projects.length > 1 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 bg-[#095aa3] text-white font-semibold rounded-lg hover:bg-[#0c6bc7] transition-colors duration-200 shadow-md"
              >
                {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Technology in Field Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-6">
                Technology That Works in the Field
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our solutions are designed for real-world farming conditions in Rwanda. From remote GSM monitoring 
                in rural areas to sophisticated AI analysis that runs on mobile devices, we build technology 
                that's both advanced and accessible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every system we deploy is tested, trained, and supported locally, ensuring farmers can maximize 
                their benefits from day one while building long-term sustainability.
              </p>
            </div>
            <div>
              <img 
                src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948409/mahama_greenhouse_rjbkku.jpg"
                alt="Smart agriculture technology in action"
                className="rounded-xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <AgriImpactStats />

      {/* Modal for Feature Details */}
      <Dialog open={!!selectedFeature} onClose={() => setSelectedFeature(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {selectedFeature && (
                    <>
                      <div className="w-16 h-16 bg-gradient-to-br from-[#095aa3] to-[#0c6bc7] text-white rounded-xl flex items-center justify-center shadow-lg">
                        <selectedFeature.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <Dialog.Title className="text-2xl font-bold text-[#231f1f]">
                          {selectedFeature.title}
                        </Dialog.Title>
                      </div>
                    </>
                  )}
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {selectedFeature && (
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                    {selectedFeature.description}
                  </p>
                </div>
              )}
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="px-6 py-3 bg-[#095aa3] text-white font-semibold rounded-lg hover:bg-[#0c6bc7] transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default SmartAgriculture;
