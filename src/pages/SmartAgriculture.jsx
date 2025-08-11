import { useState } from 'react';

import SmartAgricultureOverview from '../components/SmartAgricultureOverview'
import SmartSolutions from '../components/SmartSolutions';
import SmartAgricultureProjects from '../components/SmartAgricultureProjects';
import AgricultureTechnology from '../components/AgricultureTechnology'
import AgriImpactStats from "../components/AgriImpactStats";

import { projects, projectImages } from "../assets/data/agricultureData";

const SmartAgriculture = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const truncateText = (text, wordLimit = 20) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'center'});
  };

  const scrollToSolutions = () => {
    document.getElementById('solutions').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 1);
  const displayedImages = showAllProjects ? projectImages : projectImages.slice(0, 1);

  return (
    <>
      {/* Overview Section - Enhanced */}
      <SmartAgricultureOverview
                                scrollToSolutions={scrollToSolutions}
                                scrollToProjects={scrollToProjects} />
      <SmartSolutions 
                      truncateText={truncateText}
                      selectedFeature={selectedFeature}
                      setSelectedFeature={setSelectedFeature}
        />
        <SmartAgricultureProjects 
                                  showAllProjects={showAllProjects}
                                  setShowAllProjects={setShowAllProjects}
                                  displayedProjects={displayedProjects}
                                  displayedImages={displayedImages}/>
      <AgricultureTechnology />
      <AgriImpactStats />
    </>
  );
};

export default SmartAgriculture;
