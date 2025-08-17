import { Code, Lightbulb, Users, FlaskConical } from 'lucide-react';

export const programHighlights = [
    {
      title: "Hands-on Coding",
      description: "Students learn programming fundamentals through interactive coding sessions using Python, Scratch, and other beginner-friendly languages.",
      icon: Code
    },
    {
      title: "Our Curriculum",
      description: "We cover all important aspects of AI and Data Science including Machine Learning, Generative AI, Conversational AI integration, Data.",
      icon: Lightbulb
    },
    {
      title: "Real-world Problems",
      description: "We teach kids how to solve real world problems using AI and Data Science such as climate change, predicting customer satisfaction, weather prediction etc.",
      icon: Users
    },
    {
      title: "Practical Projects",
      description: "We teach our students AI, programming, and data science through hands-on learning and real-world projects, with professional mentoring.",
      icon: FlaskConical
    }
  ];
export const courses = [
    {
      id: 'basic',
      title: 'Junior Data Science Course (Basic)',
      ageRange: 'Age 8 and above',
      level: 'Beginner',
      duration: '6 months',
      schedule: 'After School Weekdays and Weekends',
      registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSdQMhmEISvSXM2qI-mHns269IgREN7o1kY2bRkUCAsGlfWcWA/viewform?usp=sharing&ouid=100715152190629375156",
      highlights: [
        'Fundamentals of AI',
        'Python programming',
        'Data interpretation and story telling',
        'AI projects',
        'Math and Statistics for Data Science'
      ],
      description: 'An introductory course designed for children above 8.',
      color: 'from-[#095aa3] to-[#4f93ce]'
    },
    {
      id: 'advanced',
      title: 'Junior Data Science Course (Advanced)',
      ageRange: 'Age 10 and above',
      level: 'Advanced',
      duration: '10 months',
      schedule: 'After School Weekdays and Weekends',
      registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSc5IMwTs30V963zyKcqjS_KUUUCebYHr7-QRke314GLi6PscA/viewform?usp=sharing&ouid=100715152190629375156",
      highlights: [
        'Focus on Generative AI',
        'Advanced Machine Learning',
        'Programming in Python',
        'Principles of Data Science',
        'AI projects',
        'Conversational AI integration',
        'Advanced Math and Statistics for Data Science'
      ],
      description: 'Advanced concepts and real-world applications for tech-savvy teens.',
      color: 'from-[#095aa3] to-[#4f93ce]'
    }
  ];


export const testimonials = [
  {
    quote: 'Ms Samreen, thanks for sowing into our little ones—like the mother and tech guru that you are. Making an 8 year old a junior data scientist was not an easy task yet you made it enjoyable, memorable and achievable. You went way beyond our expectations!',
    name: 'Patricie & Kabasha',
    role: 'Parents',
  },
  {
    quote: 'I wholeheartedly encourage any parent to consider enrolling their child in this programme. Watching the kids present their data models and connect what they\'d learned to real-life scenarios was not only a proud moment but also a powerful affirmation of the programme\'s value. It\'s an experience that goes far beyond the classroom.',
    name: 'Parents Testimonial',
    role: 'Parents',
  },
];

export default testimonials;
