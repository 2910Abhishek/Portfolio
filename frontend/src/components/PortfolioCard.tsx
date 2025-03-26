import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PortfolioCard = ({ title, description, image, link }: PortfolioCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={link}
          className="inline-flex items-center text-purple-600 hover:text-purple-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          View in Dribbble
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;