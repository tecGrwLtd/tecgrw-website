import MissionVision from "@/components/aboutUs/MissionVision";
import OurJourney from "@/components/aboutUs/OurJourney";

export const metadata = {
  title: "About tecGrw | Agriculture Tech & AI Innovation Story Rwanda",
  description: "Learn how tecGrw became Rwanda's agriculture technology and AI solutions company. learn more about tecGrw journey"
};

export default function About(){
  return (
    <>
    <MissionVision />
    <OurJourney/>
    </>
  )
}
