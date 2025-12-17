import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Timeline />
      <section id="about">
        <About />
      </section>
      <Contact />
    </main>
  );
};

export default Index;
