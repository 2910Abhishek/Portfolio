'use client';

import Image from 'next/image';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-medium mb-4">
              Hey, I'm Abhishek Parmar
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 dark:from-white dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
              I build AI-driven solutions and Flutter applications
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              As a B.Tech Computer Science student, I specialize in creating intelligent systems with AI/ML and seamless mobile experiences with Flutter.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-purple-600 dark:bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Abhishek Parmar"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;