import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="max-w-4xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700"
          data-testid="section-about"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            About <span className="text-primary">MRC</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The Minoan Robotsports Competition (MRC) is Jordan's premier robotics competition bringing together talented teams to compete in exciting challenges. 
            Our mission is to inspire innovation, teamwork, and technical excellence in the next generation of engineers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're building autonomous marathoners, wrestling robots, or versatile pentathlon competitors, MRC provides the perfect platform to showcase your skills and compete with the best.
          </p>
        </div>
      </div>
    </section>
  );
}
