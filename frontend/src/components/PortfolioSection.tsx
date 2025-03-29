import { projects } from '../data/projects';
import PortfolioCard from './PortfolioCard';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full bg-gray-50 dark:bg-gray-900 -mt-1">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Recent Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Check out some of my latest work and creative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 