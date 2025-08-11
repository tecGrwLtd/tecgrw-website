// AIBusiness.jsx
import { useState } from 'react';

import AiBusinessHero from '../components/AiBusinessHero'
import WhyChooseBusiness from '../components/WhyChooseBusiness'
import WhatWeOffer from '../components/WhatWeOffer';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import CallToAction from '../components/CallToAction';


const AIBusiness = () => {

  return (
    <>
      <AiBusinessHero />
      <WhyChooseBusiness />
      <WhatWeOffer />
      <WhoWeWorkWith />
      <CallToAction/>
    </>
  );
};

export default AIBusiness;
