import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gray-50 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-lg text-gray-600 mb-4">Hey, I am Abhishek</h2>
          <h1 className="text-5xl font-bold mb-6">
            I create{' '}
            <span className="text-purple-600">AI solutions</span>
            {' '}and full-stack applications
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            B.Tech Computer Science student specializing in AI, machine learning, and full-stack development.
            Passionate about creating innovative solutions that make a difference.
          </p>
          <Link 
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/images/profile.jpg"
              alt="Abhishek Parmar"
              fill
              className="object-cover rounded-2xl"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
              }}
            />
            <div className="absolute inset-0 bg-purple-600/10 rounded-2xl" />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 text-purple-600">✨</div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 text-purple-600">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;