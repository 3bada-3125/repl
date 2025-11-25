import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import mrcLogo from '@assets/MRC logo_1763438685549.png';

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = 'all 0.8s ease-out';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'translateX(50px)';
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transition = 'all 1s ease-out';
          imageRef.current.style.opacity = '1';
          imageRef.current.style.transform = 'translateX(0)';
        }
      }, 300);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-accent rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-primary -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-accent rotate-6"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={titleRef}>
            <div className="inline-block mb-4">
              <span className="text-accent font-heading font-bold text-sm uppercase tracking-wider">
                Jordan 2025
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Minoan <span className="text-primary">Robotsports</span>{' '}
              <span className="text-primary">Competition</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
              Join the ultimate robotics sports challenge. Compete in multiple categories and showcase your engineering excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" data-testid="button-register-hero">
                Register Your Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
            <img
              src={mrcLogo}
              alt="MRC Logo"
              className="relative w-full max-w-sm mx-auto drop-shadow-2xl"
              data-testid="img-mrc-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
