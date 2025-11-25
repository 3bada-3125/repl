import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date('2026-02-14T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-24 h-24 border-2 border-accent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-primary -rotate-12 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Countdown to <span className="text-primary">MRC 2026</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            14 February 2026
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <Card
              key={unit.label}
              className="p-6 text-center hover-elevate transition-all duration-300"
              data-testid={`countdown-${unit.label.toLowerCase()}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-primary mb-2">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
