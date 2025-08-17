import SmartAgricultureOverview from '@/components/smart-agriculture/SmartAgricultureOverview'
import SmartSolutions from '@/components/smart-agriculture/SmartSolutions';
import SmartAgricultureProjects from '@/components/smart-agriculture/SmartAgricultureProjects';
import AgricultureTechnology from '@/components/smart-agriculture/AgricultureTechnology'
import AgriImpactStats from "@/components/smart-agriculture/AgriImpactStats";

export default function SmartAgriculture() {

  return (
    <>
      <SmartAgricultureOverview/>
      <SmartSolutions />
      <SmartAgricultureProjects />
      <AgricultureTechnology />
      <AgriImpactStats />
    </>
  );
};

