import Hero from "../components/Hero";
import Skills from "../components/Skills";
import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <section className="p-10">
        <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}