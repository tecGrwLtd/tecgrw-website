import TeamMission from '@/components/team/TeamMission'
import MeetOurTeam from '@/components/team/MeetOurTeam'

export const metadata = {
  title: "Our Expert Team | tecGrw Agriculture & Data Science Proffesionals Rwanda",
  description: "Meet tecGrw's team of agriculture technology and AI experts. Our specialists in hydroponics, smart farming, data science, software development and artificial intelligence are transforming Rwanda's agricultural and business landscape.",
};

export default function Team() {
  return (
    <>
      <TeamMission />
      <MeetOurTeam />
    </>
  );
}
