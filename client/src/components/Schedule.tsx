import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export default function Schedule() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Competition 2026 <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay tuned for the official competition timetable
          </p>

          <div className="space-y-3">
            <Button
              size="lg"
              disabled
              className="w-full sm:w-auto"
              data-testid="button-schedule-disabled"
            >
              <Calendar className="mr-2 h-5 w-5" />
              MRC 2026 SCHEDULE
            </Button>
            <p className="text-sm text-muted-foreground">
              The timetable for 2026 will be announced soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
