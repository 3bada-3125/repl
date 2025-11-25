import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, CheckCircle2 } from 'lucide-react';

const rules = [
  'All robots must comply with weight and dimension restrictions for their category',
  'Teams must register at least 2 weeks before the competition date',
  'Safety inspections are mandatory before each match',
  'Remote controls must operate on approved frequencies only',
  'Autonomous robots must include emergency stop mechanisms',
  'Fair play and sportsmanship are required at all times',
];

export default function Rules() {
  return (
    <section id="rules" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Competition <span className="text-primary">Rules</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential guidelines for all participants
            </p>
          </div>

          <Card className="hover-elevate" data-testid="card-rules">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">General Rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`rule-item-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  For complete rules, regulations, and technical specifications, download the official rulebook.
                </p>
                <Button className="w-full sm:w-auto" data-testid="button-download-rulebook">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Rulebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
