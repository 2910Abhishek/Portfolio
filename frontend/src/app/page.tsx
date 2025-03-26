import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import PortfolioSection from "../components/PortfolioSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 bg-gray-50">
        <Skills />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20">
        <PortfolioSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-gray-50">
        <ContactForm />
      </section>
    </main>
  );
}