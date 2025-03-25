export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Interview Genie",
      description:
        "Engineered an AI-powered web application for interview preparation, leveraging generative AI for resume optimization and personalized content generation, increasing user success rates by 35%.",
      image: "/images/interview-genie.jpg",
      link: "https://github.com/AbhishekParmar2910/interview-genie",
    },
    {
      id: 2,
      title: "AttendX",
      description:
        "Built and deployed machine learning APIs and models for an attendance system, resulting in a 40% reduction in processing time.",
      image: "/images/attendx.jpg",
      link: "https://github.com/AbhishekParmar2910/attendx",
    },
    {
      id: 3,
      title: "Doctor Appointment App",
      description:
        "Developed an algorithm to optimize patient scheduling, reducing average waiting time in hospitals by up to 15 minutes.",
      image: "/images/doctor-appointment.jpg",
      link: "https://github.com/AbhishekParmar2910/doctor-appointment-app",
    },
    {
      id: 4,
      title: "Disease Predictor App",
      description:
        "Designed and trained a machine learning model to predict potential diseases based on user-input symptoms, achieving an accuracy of 91% in disease identification.",
      image: "/images/disease-predictor.jpg",
      link: "https://github.com/AbhishekParmar2910/disease-predictor-app",
    },
  ];