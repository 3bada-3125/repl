import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Award, Medal, Trophy } from 'lucide-react';

const generalAwards = [
  { icon: Award, label: 'Certification of Attendance' },
  { icon: Award, label: 'Certification of Excellence (Top 3)' },
  { icon: Medal, label: 'Winning Medals' },
  { icon: Trophy, label: 'Trophy / Cup' },
];

export default function Prizes() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Prizes & <span className="text-primary">Awards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Recognition and rewards for outstanding performance
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-2 border-accent/30 hover-elevate" data-testid="card-greece-trip">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Plane className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl">Trip to Greece</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Selected winning teams from different categories may be invited to participate in the{' '}
                <span className="font-semibold text-foreground">Minoan Robotsports Global Olympiad</span> in Greece.
              </p>
              <p className="text-sm text-muted-foreground mt-3 italic">
                (Final selection criteria will be announced later.)
              </p>
            </CardContent>
          </Card>

          <div>
            <h3 className="font-heading font-semibold text-2xl mb-6 text-center">
              General Awards
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {generalAwards.map((award, index) => {
                const Icon = award.icon;
                return (
                  <Card
                    key={index}
                    className="hover-elevate transition-all duration-300"
                    data-testid={`award-${index}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center gap-3 text-center">
                        <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                        <span className="font-medium text-sm">{award.label}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
