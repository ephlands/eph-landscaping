import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-section flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">E</span>
            </div>
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center -ml-2">
              <span className="text-secondary-foreground font-heading font-bold text-xl">PH</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <p className={`font-heading font-bold text-lg leading-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              EPH
            </p>
            <p className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
              Landscaping & Construction
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="lg" asChild>
            <a href="tel:+19736521723" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border animate-slide-up">
          <div className="container-section py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+19736521723" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
