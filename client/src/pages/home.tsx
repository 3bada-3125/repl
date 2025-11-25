import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Countdown from '@/components/Countdown';
import Categories from '@/components/Categories';
import Prizes from '@/components/Prizes';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Countdown />
      <Categories />
      <Prizes />
      <Schedule />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}
