import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import mrcLogo from '@assets/MRC logo_1763438685549.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={mrcLogo} alt="MRC Logo" className="h-12 w-12" />
            <span className="font-heading font-bold text-lg">MRC Jordan</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setLocation('/')}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-categories"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button size="sm" data-testid="button-register">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
