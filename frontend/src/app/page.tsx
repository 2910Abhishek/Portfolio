import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import PortfolioSection from "../components/PortfolioSection";
import ContactForm from "../components/ContactForm";
import AnimateOnScroll from "../components/animations/AnimateOnScroll";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <AnimateOnScroll delay={0.1}>
          <Skills />
        </AnimateOnScroll>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20 dark:bg-gray-900">
        <AnimateOnScroll delay={0.2}>
          <PortfolioSection />
        </AnimateOnScroll>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <AnimateOnScroll delay={0.3}>
          <ContactForm />
        </AnimateOnScroll>
      </section>
    </main>
  );
}