export interface Project {
    id: string;
    title: string;
    description: string[];
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'interview-genie',
        title: 'Interview Genie',
        description: [
            'Engineered an AI-powered web application for interview preparation, leveraging generative AI for resume optimization and personalized content generation, increasing user success rates by 35%.',
            'Implemented computer vision models for facial analysis, providing confidence scores and body language feedback, helping users improve non-verbal communication by 40%.',
            'Developed an NLP system that analyzes speech patterns and recommends tailored improvements, resulting in 25% better articulation and communication scores during mock interviews.'
        ],
        image: '/images/interview-genie.jpg',
        technologies: ['Python', 'React', 'TensorFlow', 'Hugging Face', 'OpenAI API'],
        githubUrl: 'https://github.com/yourusername/interview-genie',
        liveUrl: 'https://interview-genie.vercel.app',
        featured: true
    },
    {
        id: 'attendx',
        title: 'AttendX',
        description: [
            'Built and deployed machine learning APIs and models for an attendance system, resulting in a 40% reduction in processing time.',
            'Achieved a real-time face recognition response time of 200 ms, enhancing system efficiency by 35%.',
            'Integrated liveness detection, which increased system security and accuracy by 25%.'
        ],
        image: '/images/attendx.jpg',
        technologies: ['Python', 'Flask', 'React Native', 'PostgreSQL', 'MongoDB', 'Firebase'],
        githubUrl: 'https://github.com/yourusername/attendx',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.attendx',
        featured: true
    },
    {
        id: 'doctor-appointment',
        title: 'Doctor Appointment App',
        description: [
            'Developed an algorithm to optimize patient scheduling, reducing average waiting time in hospitals by up to 15 minutes.',
            'Implemented functionality allowing patients to upload and access their medical reports through the app, facilitating easy retrieval and management.',
            'Provided interactive graphs for diabetes and blood pressure data analytics, enabling patients to monitor and manage their health over time.'
        ],
        image: '/images/doctor-appointment.jpg',
        technologies: ['Flutter', 'Firebase', 'Python'],
        githubUrl: 'https://github.com/yourusername/doctor-appointment',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.doctorapp',
        featured: true
    },
    {
        id: 'disease-predictor',
        title: 'Disease Predictor App',
        description: [
            'Designed and trained a machine learning model to predict potential diseases based on user-input symptoms, achieving an accuracy of 91% in disease identification.',
            'Developed an API to integrate the ML model into the application, enabling seamless disease prediction and reducing response time to under 300 ms.',
            'Incorporated Google Maps API to locate and display the nearest hospitals, improving user accessibility to healthcare services by 30%.'
        ],
        image: '/images/disease-predictor.jpg',
        technologies: ['Python', 'Firebase', 'Google Maps API'],
        githubUrl: 'https://github.com/yourusername/disease-predictor',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.diseasepredictor',
        featured: true
    }
];