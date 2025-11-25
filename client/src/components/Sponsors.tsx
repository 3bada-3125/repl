import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const partners = [
  'Ideal Ideas Foundation',
];

export default function Sponsors() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our <span className="text-primary">Sponsors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Supported by leading organizations in tech and education
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-12 border-2 border-dashed border-muted-foreground/30 hover-elevate" data-testid="card-main-sponsor">
            <div className="text-center">
              <div className="inline-block mb-2">
                <Badge variant="outline" className="text-accent border-accent">
                  Main Sponsor Slot
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                Become our main sponsor and support robotics innovation
              </p>
            </div>
          </Card>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-4 text-center">Partners</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((partner, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover-elevate"
                  data-testid={`badge-partner-${index}`}
                >
                  {partner}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
