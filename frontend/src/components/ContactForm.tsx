'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const handleFocus = (name: string) => {
    setFocusedField(name);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="w-full bg-gray-50 dark:bg-gray-900 -mt-1">
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl premium-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
        >
          <motion.div 
            className="text-center mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white gradient-text">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have a question or want to work together? Let's connect!
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div>
                <motion.label 
                  htmlFor="firstName" 
                  className={`block text-sm font-medium mb-2 ${
                    focusedField === 'firstName' 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  } transition-colors duration-200`}
                  animate={{ 
                    x: focusedField === 'firstName' ? 3 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  First Name
                </motion.label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-500"
                    required
                  />
                </motion.div>
              </div>

              <div>
                <motion.label 
                  htmlFor="lastName" 
                  className={`block text-sm font-medium mb-2 ${
                    focusedField === 'lastName' 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  } transition-colors duration-200`}
                  animate={{ 
                    x: focusedField === 'lastName' ? 3 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Last Name
                </motion.label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-500"
                    required
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 ${
                  focusedField === 'email' 
                    ? 'text-purple-600 dark:text-purple-400' 
                    : 'text-gray-700 dark:text-gray-300'
                } transition-colors duration-200`}
                animate={{ 
                  x: focusedField === 'email' ? 3 : 0 
                }}
                transition={{ duration: 0.2 }}
              >
                Email
              </motion.label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-500"
                  required
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.label 
                htmlFor="phone" 
                className={`block text-sm font-medium mb-2 ${
                  focusedField === 'phone' 
                    ? 'text-purple-600 dark:text-purple-400' 
                    : 'text-gray-700 dark:text-gray-300'
                } transition-colors duration-200`}
                animate={{ 
                  x: focusedField === 'phone' ? 3 : 0 
                }}
                transition={{ duration: 0.2 }}
              >
                Phone Number
              </motion.label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-500"
                  required
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-2 ${
                  focusedField === 'message' 
                    ? 'text-purple-600 dark:text-purple-400' 
                    : 'text-gray-700 dark:text-gray-300'
                } transition-colors duration-200`}
                animate={{ 
                  x: focusedField === 'message' ? 3 : 0 
                }}
                transition={{ duration: 0.2 }}
              >
                Message
              </motion.label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-500"
                  required
                />
              </motion.div>
            </motion.div>

            <motion.div className="flex items-center" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  onFocus={() => handleFocus('acceptTerms')}
                  onBlur={handleBlur}
                  className="h-4 w-4 text-purple-600 dark:text-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400 border-gray-300 dark:border-gray-600 rounded"
                  required
                />
              </motion.div>
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree to the terms and conditions
              </label>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-purple-600 dark:bg-purple-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <span className="relative z-10">Send Message</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;