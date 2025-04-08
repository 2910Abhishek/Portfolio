'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PortfolioCardProps {
  title: string;
  description: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

const PortfolioCard = ({ title, description, image, githubUrl, liveUrl, technologies }: PortfolioCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden premium-shadow dark:shadow-none h-[450px] flex flex-col cursor-pointer"
        whileHover={{ 
          y: -8,
          boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.15)'
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          {!imageError && image ? (
            <motion.img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🤖</div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</p>
              </div>
            </div>
          )}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <div className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            <p className="text-sm line-clamp-3">{description[0]}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <motion.span 
                key={tech} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.05, backgroundColor: '#8b5cf6', color: '#fff' }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 self-center">+{technologies.length - 3} more</span>
            )}
          </div>
          <div className="flex gap-4 mt-auto">
            {githubUrl && (
              <motion.a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-600 dark:text-purple-400 font-medium text-sm"
                whileHover={{ scale: 1.05, x: 2 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </motion.a>
            )}
            {liveUrl && (
              <motion.a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-600 dark:text-purple-400 font-medium text-sm"
                whileHover={{ scale: 1.05, x: 2 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" 
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-8 w-full max-w-4xl max-h-[90vh] overflow-auto premium-shadow"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <motion.button 
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsModalOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                {!imageError && image ? (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
                    <div className="text-center p-4">
                      <div className="text-6xl mb-3">🤖</div>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{title}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Project Overview</h3>
                <ul className="space-y-2 list-disc pl-5">
                  {description.map((point, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{point}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                      whileHover={{ scale: 1.05, backgroundColor: '#8b5cf6', color: '#fff' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {githubUrl && (
                  <motion.a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View on GitHub
                  </motion.a>
                )}
                {liveUrl && (
                  <motion.a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioCard;