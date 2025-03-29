'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateTransform = (factor: number) => {
    if (!isMounted) return { x: 0, y: 0 };
    
    const moveX = (mousePosition.x / windowSize.width - 0.5) * factor;
    const moveY = (mousePosition.y / windowSize.height - 0.5) * factor;
    return { x: moveX, y: moveY };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative">
        {/* Background decoration elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-50"
          animate={isMounted ? calculateTransform(-20) : {}}
          transition={{ type: 'spring', stiffness: 75, damping: 30 }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-50"
          animate={isMounted ? calculateTransform(-15) : {}}
          transition={{ type: 'spring', stiffness: 75, damping: 30 }}
        />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h2 
              className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hey, I'm Abhishek Parmar
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 dark:from-white dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I build AI-driven solutions and Flutter applications
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              As a B.Tech Computer Science student, I specialize in creating intelligent systems with AI/ML and seamless mobile experiences with Flutter.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="bg-purple-600 dark:bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.div 
              className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
              animate={isMounted ? calculateTransform(10) : {}}
              transition={{ type: 'spring', stiffness: 75, damping: 30 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl"
                animate={{ rotate: 6 }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 10,
                  ease: 'easeInOut'
                }}
              ></motion.div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <Image
                  src="/images/Abhishek-removebg-preview.png"
                  alt="Abhishek Parmar"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-50 blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut'
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-50 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;