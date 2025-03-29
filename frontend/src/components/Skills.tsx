'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      description: "I develop intelligent systems using supervised learning, deep learning (CNNs, RNNs, Transformers), and LLMs to solve real-world problems.",
    },
    {
      icon: "📱",
      title: "Flutter Development",
      description: "I create cross-platform mobile apps with Flutter, delivering fast, beautiful, and responsive user experiences for iOS and Android.",
    },
    {
      icon: "📊",
      title: "Data Science",
      description: "I analyze and visualize data to uncover insights, using tools like Python, Pandas, and Matplotlib for feature engineering and decision-making.",
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "I build end-to-end applications with React, Node.js, and Flask, integrating AI models and mobile apps into seamless solutions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="skills" className="w-full bg-gray-50 dark:bg-gray-900 -mt-1">
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Specialized skills in AI, mobile development, and full-stack solutions
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl premium-shadow dark:shadow-none overflow-hidden relative group"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: 'easeOut' },
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
              
              <motion.div 
                className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 } 
                }}
              >
                {skill.icon}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
              >
                {skill.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;