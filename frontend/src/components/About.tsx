'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
      <section id="about" className="w-full bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/profile.jpg"
                alt="Abhishek Parmar"
                className="w-full rounded-xl shadow-lg premium-shadow"
              />
            </motion.div>
            
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                I'm Abhishek Parmar, a B.Tech Computer Science student at Charotar University of Science and Technology (CGPA: 9.67), graduating in May 2026. I've interned at Topia Lifesciences and CLUMOSS, where I built APIs and machine learning models to solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I've solved over 400 coding challenges on LeetCode and HackerRank, earned a 5-star coder status in C/C++, and secured a top 8 position in a hackathon by Gateway Group of Companies. I'm passionate about AI, machine learning, and full-stack development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }