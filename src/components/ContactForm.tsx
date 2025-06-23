'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank You for the message i will get back to you soon',
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
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

            <motion.button
              type="submit"
              className="w-full bg-purple-600 dark:bg-purple-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </motion.button>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;