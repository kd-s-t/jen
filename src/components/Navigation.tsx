import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/JeanilouLabajo_SoftwareTestEngineer_5Years.pdf';
    link.download = 'JeanilouLabajo_SoftwareTestEngineer_5Years.pdf';
    link.click();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-soft py-4' : 'py-6'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          QA<span className="text-primary">.</span>
        </button>

        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollTo('timeline')}
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
          >
            Timeline
          </button>
          <button 
            onClick={() => scrollTo('about')}
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={handleDownloadResume}
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </button>
          <a 
            href="mailto:"
            className="text-sm font-body bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
