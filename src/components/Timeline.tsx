import { Briefcase, Award, TrendingUp, Users, CheckCircle2, Star } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "Principal QA Engineer",
    company: "Tech Innovators Inc.",
    description: "Leading enterprise-wide testing strategies and mentoring QA teams across multiple product lines.",
    icon: <Star className="w-4 h-4" />,
  },
  {
    year: "2023",
    title: "Senior Software Test Lead",
    company: "CloudScale Solutions",
    description: "Architected automated testing frameworks reducing regression time by 60%. Managed a team of 8 testers.",
    icon: <Users className="w-4 h-4" />,
  },
  {
    year: "2021",
    title: "Senior QA Engineer",
    company: "FinTech Global",
    description: "Specialized in financial software testing, ensuring compliance with regulatory standards and security protocols.",
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
  {
    year: "2019",
    title: "QA Engineer II",
    company: "Digital Dynamics",
    description: "Developed comprehensive test plans and implemented CI/CD testing pipelines for mobile applications.",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    year: "2017",
    title: "Software Tester",
    company: "StartUp Ventures",
    description: "Performed manual and automated testing for web applications. First exposure to Selenium and API testing.",
    icon: <Award className="w-4 h-4" />,
  },
  {
    year: "2015",
    title: "Junior QA Analyst",
    company: "Software Solutions Ltd.",
    description: "Started career in software testing, learning fundamentals of test case design and bug tracking.",
    icon: <Briefcase className="w-4 h-4" />,
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
            A Decade of Excellence
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Testing since 2015. From curious beginner to seasoned professional, here's my path through the world of software quality assurance.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line md:hidden" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Mobile dot */}
                <div className="absolute left-8 top-2 w-4 h-4 rounded-full timeline-dot border-4 border-background -translate-x-1/2 md:hidden z-10" />
                
                {/* Desktop dot */}
                <div className="hidden md:block absolute left-1/2 top-6 w-5 h-5 rounded-full timeline-dot border-4 border-background -translate-x-1/2 z-10 shadow-soft" />

                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div 
                    className={`bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-lg transition-shadow duration-300 ${
                      index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-light text-primary">
                        {item.icon}
                      </span>
                      <span className="text-2xl font-display font-semibold text-primary">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary font-body mb-3">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
