import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="hover-elevate" data-testid="card-email">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@mrcjordan.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  info@mrcjordan.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-whatsapp">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#25D366]/10 rounded-lg">
                    <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <CardTitle className="font-heading text-lg">WhatsApp</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-1">
                <a
                  href="https://wa.me/962791234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-[#25D366] transition-colors"
                  data-testid="link-whatsapp-1"
                >
                  +962 79 123 4567
                </a>
                <a
                  href="https://wa.me/962781234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-[#25D366] transition-colors"
                  data-testid="link-whatsapp-2"
                >
                  +962 78 123 4567
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
