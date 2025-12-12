import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Beautiful landscaped home with manicured lawn"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-section text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-secondary/30">
              Professional Landscaping & Construction
            </span>
          </div>
          
          <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight" style={{ animationDelay: '0.4s' }}>
            Transform Your
            <span className="block text-secondary">Outdoor Space</span>
          </h1>
          
          <p className="animate-slide-up text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
            Creating stunning landscapes and quality construction for homes and businesses across New Jersey. Your dream outdoor space starts here.
          </p>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.8s' }}>
            <Button variant="cta" size="xl" asChild>
              <a href="tel:+19736521723" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                +1 (973) 652-1723
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/19736521723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
