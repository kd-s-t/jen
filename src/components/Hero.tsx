import { ChevronDown, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/JeanilouLabajo_SoftwareTestEngineer_5Years.pdf';
    link.download = 'JeanilouLabajo_SoftwareTestEngineer_5Years.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-pink-soft px-6 pt-32 md:pt-24">
      <div className="text-center max-w-3xl mx-auto animate-fade-in">
        <div className="mb-8">
          <img
            src="/profile.jpg"
            alt="Jeanilou Labajo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-soft"
          />
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2 font-body">
          Senior Software Tester
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
          Jeanilou Labajo
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-foreground mb-6 leading-tight">
          Quality is not<br />
          <span className="text-primary">an act</span>, it's a habit
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto font-body font-light leading-relaxed mb-8">
          Testing since 2015. Ensuring software excellence through meticulous testing, 
          quality assurance, and a passion for delivering flawless user experiences.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <span className="text-xs uppercase tracking-widest font-body text-primary mb-2">
            MY JOURNEY
          </span>
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-body text-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <button 
        onClick={scrollToTimeline}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
      >
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
      </button>
    </section>
  );
};

export default Hero;
