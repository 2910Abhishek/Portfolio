export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
    technologies: string[];
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Ahuse",
      description: "A modern real estate platform built with Next.js and AI-powered search capabilities.",
      image: "/images/projects/ahuse.jpg",
      link: "https://dribbble.com/your-dribbble-link",
      category: "Web Development",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "AI"]
    },
    {
      id: 2,
      title: "App Dashboard",
      description: "A comprehensive admin dashboard with real-time analytics and data visualization.",
      image: "/images/projects/dashboard.jpg",
      link: "https://dribbble.com/your-dribbble-link",
      category: "Web Development",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Easy Rent",
      description: "A rental management system with AI-powered tenant matching and automated processes.",
      image: "/images/projects/easyrent.jpg",
      link: "https://dribbble.com/your-dribbble-link",
      category: "Full Stack",
      technologies: ["Python", "Django", "React", "PostgreSQL", "Machine Learning"]
    },
    {
      id: 4,
      title: "Interview Genie",
      description:
        "Engineered an AI-powered web application for interview preparation, leveraging generative AI for resume optimization and personalized content generation, increasing user success rates by 35%.",
      image: "/images/interview-genie.jpg",
      link: "https://github.com/AbhishekParmar2910/interview-genie",
      category: "AI",
      technologies: ["AI", "Web Development"]
    },
    {
      id: 5,
      title: "AttendX",
      description:
        "Built and deployed machine learning APIs and models for an attendance system, resulting in a 40% reduction in processing time.",
      image: "/images/attendx.jpg",
      link: "https://github.com/AbhishekParmar2910/attendx",
      category: "Machine Learning",
      technologies: ["Machine Learning", "API Development"]
    },
    {
      id: 6,
      title: "Doctor Appointment App",
      description:
        "Developed an algorithm to optimize patient scheduling, reducing average waiting time in hospitals by up to 15 minutes.",
      image: "/images/doctor-appointment.jpg",
      link: "https://github.com/AbhishekParmar2910/doctor-appointment-app",
      category: "Healthcare",
      technologies: ["Algorithm Development", "Healthcare"]
    },
    {
      id: 7,
      title: "Disease Predictor App",
      description:
        "Designed and trained a machine learning model to predict potential diseases based on user-input symptoms, achieving an accuracy of 91% in disease identification.",
      image: "/images/disease-predictor.jpg",
      link: "https://github.com/AbhishekParmar2910/disease-predictor-app",
      category: "Healthcare",
      technologies: ["Machine Learning", "Healthcare"]
    },
  ];