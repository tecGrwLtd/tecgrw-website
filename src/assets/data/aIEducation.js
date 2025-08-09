import { Code, Lightbulb, Users, FlaskConical } from 'lucide-react';
export const courses = [
    {
      id: 'basic',
      title: 'Junior Data Science Course (Basic)',
      ageRange: 'Age 8 and above',
      level: 'Beginner',
      duration: '6 months',
      registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSdQMhmEISvSXM2qI-mHns269IgREN7o1kY2bRkUCAsGlfWcWA/viewform?usp=sharing&ouid=100715152190629375156",
      highlights: [
        'Fundamentals of AI',
        'Basic programming with Python',
        'Data interpretation and storytelling',
        'Simple AI projects',
        'Maths and statistics for Data Science'
      ],
      description: 'Perfect introduction to the world of data and AI for young minds.',
      color: 'from-[#095aa3] to-[#4f93ce]'
    },
    {
      id: 'advanced',
      title: 'Junior Data Science Course (Advanced)',
      ageRange: 'Age 8 and above',
      level: 'Intermediate',
      duration: '10 months',
      registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSc5IMwTs30V963zyKcqjS_KUUUCebYHr7-QRke314GLi6PscA/viewform?usp=sharing&ouid=100715152190629375156",
      highlights: [
        'Focus on Generative aI',
        'Advanced Machine Learning',
        'Programming in Python',
        'Principles of Data Science',
        'AI projects',
        'Conversational AI integration',
        'Advanced Maths and Statistics for Data Science'
      ],
      description: 'Advanced concepts and real-world applications for tech-savvy teens.',
      color: 'from-[#095aa3] to-[#4f93ce]'
    }
  ];

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