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
        id: 'prompt2code',
        title: 'Prompt2Code',
        description: [
            'Developed a Python-based API service that dynamically retrieves and executes automation functions using Retrieval-Augmented Generation (RAG) and an LLM.',
            'Implemented a robust function registry for application control, system monitoring, and command execution with comprehensive error handling.',
            'Created a RAG pipeline using ChromaDB and CodeT5 for dynamic code generation, with session memory for context-aware responses.',
            'Built a FastAPI service with endpoints for function execution and addition, with terminal execution for real-time results.'
        ],
        image: '/images/Prompt2Code.png',
        technologies: ['Python', 'FastAPI', 'ChromaDB', 'LangChain', 'HuggingFace', 'PyTorch'],
        githubUrl: 'https://github.com/yourusername/Prompt2Code',
        featured: true
    },
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
];