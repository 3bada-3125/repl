import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import marathonLogo from '@assets/image_1763438650866.png';

export default function Marathon() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
                  MARATHON
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Autonomous robots racing to complete a challenging course with speed and precision. 
                  Navigate obstacles, optimize your path, and prove your robot's endurance in this ultimate test of autonomous navigation and programming excellence.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img 
                  src={marathonLogo} 
                  alt="Marathon Category" 
                  className="w-full max-w-md drop-shadow-2xl"
                  data-testid="img-marathon-logo"
                />
              </div>
            </div>

            <Card className="hover-elevate" data-testid="card-age-categories">
              <CardHeader>
                <CardTitle className="font-heading text-3xl">AGE CATEGORIES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="font-semibold text-primary text-lg min-w-[80px]">KIDS</span>
                    <span className="text-muted-foreground">10–12 years / Elementary School</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="font-semibold text-primary text-lg min-w-[80px]">TEENS</span>
                    <span className="text-muted-foreground">12+–15 years / Middle School</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="font-semibold text-primary text-lg min-w-[80px]">SENIOR</span>
                    <span className="text-muted-foreground">15+–18 years / High School</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="font-semibold text-primary text-lg min-w-[80px]">ADULTS</span>
                    <span className="text-muted-foreground">18+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-divisions">
              <CardHeader>
                <CardTitle className="font-heading text-3xl">DIVISIONS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">The sport is held in two divisions:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="font-semibold text-accent text-lg">Marathon Basic</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="font-semibold text-accent text-lg">Marathon Advanced</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="group" data-testid="button-download-rules">
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download Marathon Rules PDF
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
