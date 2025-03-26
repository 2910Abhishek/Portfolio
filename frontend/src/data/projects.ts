export interface Project {
    id: string;
    title: string;
    description: string;
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
        description: 'An AI-powered interview preparation platform that helps users practice coding interviews with personalized feedback.',
        image: '/images/interview-genie.jpg',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
        githubUrl: 'https://github.com/yourusername/interview-genie',
        liveUrl: 'https://interview-genie.vercel.app',
        featured: true
    },
    {
        id: 'attendx',
        title: 'AttendX',
        description: 'A Flutter-based attendance management system for educational institutions with real-time tracking and analytics.',
        image: '/images/attendx.jpg',
        technologies: ['Flutter', 'Firebase', 'Dart'],
        githubUrl: 'https://github.com/yourusername/attendx',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.attendx',
        featured: true
    },
    {
        id: 'doctor-appointment',
        title: 'Doctor Appointment App',
        description: 'A mobile application for scheduling and managing doctor appointments with real-time notifications.',
        image: '/images/doctor-appointment.jpg',
        technologies: ['Flutter', 'Firebase', 'Dart'],
        githubUrl: 'https://github.com/yourusername/doctor-appointment',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.doctorapp',
        featured: true
    },
    {
        id: 'disease-predictor',
        title: 'Disease Predictor App',
        description: 'An AI-powered application that helps predict potential health conditions based on user symptoms.',
        image: '/images/disease-predictor.jpg',
        technologies: ['Flutter', 'TensorFlow', 'Python'],
        githubUrl: 'https://github.com/yourusername/disease-predictor',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.diseasepredictor',
        featured: true
    }
];