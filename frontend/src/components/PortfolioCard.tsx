interface PortfolioCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  export default function PortfolioCard({ title, description, image, link }: PortfolioCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-4 inline-block"
        >
          View on GitHub →
        </a>
      </div>
    );
  }