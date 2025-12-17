import { Code2, Bug, Shield, Zap } from "lucide-react";

const skills = [
  { icon: <Bug className="w-5 h-5" />, label: "Bug Detection", desc: "Finding issues before users do" },
  { icon: <Code2 className="w-5 h-5" />, label: "Test Automation", desc: "Selenium, Cypress, Playwright" },
  { icon: <Shield className="w-5 h-5" />, label: "Security Testing", desc: "Vulnerability assessments" },
  { icon: <Zap className="w-5 h-5" />, label: "Performance", desc: "Load & stress testing" },
];

const About = () => {
  return (
    <section className="py-24 px-6 bg-pink-soft">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Passionate about quality
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              With over a decade in software testing, I've developed an eye for detail and a 
              systematic approach to ensuring software reliability. I believe that great software 
              isn't just about features—it's about trust.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              My journey from a junior analyst to a principal engineer has taught me that 
              quality assurance is as much about people and processes as it is about tools and techniques.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.label}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-card transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center text-primary mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {skill.label}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
