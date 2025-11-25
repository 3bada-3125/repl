import mrcLogo from '@assets/MRC logo_1763438685549.png';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={mrcLogo} alt="MRC Logo" className="w-8 h-8" />
            <span className="font-heading font-bold">MRC Jordan</span>
          </div>

          <div className="text-sm text-secondary-foreground/80">
            © {new Date().getFullYear()} Minoan Robotsports Competition. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm">
            <button className="hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy
            </button>
            <button className="hover:text-primary transition-colors" data-testid="link-terms">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
