import { 
  Building,
  Droplets, 
  Users,
  Wallet,
  MapPin, BarChart3
 } from 'lucide-react';


const features = [
  {
    title: "Smart Greenhouse Systems",
    description: `Our smart green houses consist of Controlled Environment 
                  Indoor Farms, vertical or horizontal installations that are 
                  transforming how we grow food by enabling the production of a 
                  wide variety of crops in any location. By combining hardware, 
                  software, and plant science, these systems ensure consistent 
                  output and optimal growth conditions, regardless of external 
                  climate challenges. The goal is to address critical aspects of 
                  food security — including availability and accessibility — 
                  while building profitable, high-tech farming models that are 
                  sustainable, scalable, and adaptable to urban or rural settings.`,
    icon: Building
  },
  {
    title: "Hydroponic Technologies",
    description: `Our hydroponic systems are a soil-free method of growing 
                  plants using nutrient-rich water solutions. By delivering 
                  essential minerals directly to plant roots, hydroponics allows for
                  faster growth, higher yields, and reduced water usage 
                  compared to traditional farming. Hydroponics is a key 
                  technology in sustainable agriculture, enabling efficient food 
                  production with minimal environmental impact..`,
    icon: Droplets
  },
  {
    title: "Smart Greenhouse Management Training/Coaching",
    description: `tecGrw provides training to farmers and young Agri-Tech 
                  entrepreneurs on how to operate and manage smart green 
                  houses and hydroponic systems. The training also includes 
                  insights on how AI and data are transforming modern 
                  agriculture`,
    icon: Users
  },
  {
    title: "Credit Score App",
    description: `In this app farmers get credit scores that help them get interest 
                  free loans from banks. The scores based of AI models that take 
                  in to account the farm, the farmer and the farming process. 
                  Higher the credit score, more chances of getting loans..`,
    icon: Wallet
  },
];

const projects = [
  {
    location: "Bugesera, Gatsibo, Nyaruguru Districts",
    title: "Smart Green House Initiative",
    description: `tecGrw in collaboration with Imbaraga Farmers association built three 
                  green houses in three districts of Rwanda. The initiative has successfully 
                  produced a yield of crops 4-5 times more than that of open field farming. 
                  The ioT support like.`
  },
  {
    location: "Mahama refugee camp, Kihera Ditrict",
    title: "Smart Green House Initiative",
    description: `tecGrw in partnership with PLAN International built a smart greenhouse in 
                  Mahama. This initiative directly supports a community of 22 refugees, 
                  aiming to significantly improve their food security through year-round 
                  vegetable production, enhance livelihoods via income generation, build 
                  valuable skills in controlled environment farming, and promote long-term 
                  self-reliance by reducing dependency on food aid.`
  }
];

const stats = [
    {
      number: "3",
      label: "Districts Served",
      subtitle: "Bugesera, Nyaruguru, Gatsibo",
      icon: MapPin
    },
    {
      number: "90%",
      label: "Water Savings", 
      subtitle: "Through hydroponic systems",
      icon: Droplets
    },
    {
      number: "24/7",
      label: "Monitoring",
      subtitle: "GSM-enabled remote control", 
      icon: BarChart3
    }
  ];

export { features, projects, stats };