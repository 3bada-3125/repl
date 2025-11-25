import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { Zap, Swords, Weight, Trophy } from 'lucide-react';

const categories = [
  {
    id: 'marathon',
    title: 'Marathon',
    description: 'Autonomous robots racing to complete a challenging course with speed and precision.',
    icon: Zap,
    color: 'text-primary',
    path: '/marathon',
  },
  {
    id: 'wrestling-1kg',
    title: 'Wrestling 1kg',
    description: 'Lightweight combat robots battling for dominance in the arena.',
    icon: Swords,
    color: 'text-accent',
    path: '/wrestling1kg',
  },
  {
    id: 'wrestling-3kg',
    title: 'Wrestling 3kg',
    description: 'Heavyweight robots showcasing power and strategy in intense matches.',
    icon: Weight,
    color: 'text-primary',
    path: '/wrestling3kg',
  },
  {
    id: 'pentathlon',
    title: 'Pentathlon Arena',
    description: 'Multi-discipline challenge testing versatility, adaptability, and all-round excellence.',
    icon: Trophy,
    color: 'text-accent',
    path: '/pentathlon',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Competition <span className="text-primary">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your arena and compete in one or multiple categories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={category.path}>
                <Card
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover-elevate cursor-pointer h-full flex flex-col"
                  data-testid={`card-category-${category.id}`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <CardHeader className="flex-shrink-0">
                    <div className="mb-3">
                      <Icon className={`h-10 w-10 ${category.color} transition-transform group-hover:scale-110`} />
                    </div>
                    <CardTitle className="font-heading">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm">{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
