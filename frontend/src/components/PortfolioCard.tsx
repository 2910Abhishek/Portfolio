'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

const PortfolioCard = ({ title, description, image, githubUrl, liveUrl, technologies }: PortfolioCardProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden premium-shadow dark:shadow-none"
      whileHover={{ 
        y: -8,
        boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.15)'
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span 
              key={tech} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
              whileHover={{ scale: 1.05, backgroundColor: '#8b5cf6', color: '#fff' }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <motion.a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-600 dark:text-purple-400 font-medium"
              whileHover={{ scale: 1.05, x: 2 }}
              transition={{ duration: 0.2 }}
            >
              GitHub
            </motion.a>
          )}
          {liveUrl && (
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-600 dark:text-purple-400 font-medium"
              whileHover={{ scale: 1.05, x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;