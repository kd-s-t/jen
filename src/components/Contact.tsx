import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
          Let's connect
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-10">
          Whether you're looking for a quality-focused team member or want to discuss 
          testing strategies, I'd love to hear from you.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a 
            href="mailto:"
            className="w-14 h-14 rounded-full bg-pink-light flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-card"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="#"
            className="w-14 h-14 rounded-full bg-pink-light flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-card"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="mt-16 text-sm text-muted-foreground font-body">
          © 2025 · Crafted with attention to detail
        </p>
      </div>
    </section>
  );
};

export default Contact;
