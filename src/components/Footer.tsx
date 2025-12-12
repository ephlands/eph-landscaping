import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-section py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-xl">E</span>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center -ml-2">
                  <span className="text-secondary-foreground font-heading font-bold text-xl">PH</span>
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-lg leading-tight">
                  EPH
                </p>
                <p className="text-xs text-primary-foreground/80">
                  Landscaping & Construction LLC
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Creating beautiful outdoor spaces and quality construction throughout New Jersey. Your trusted partner for all landscaping and construction needs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/19736521723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+19736521723"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/vWfLMpQZDYgubw3A9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Find us on Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Ephlandscapingllc@gmail.com"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {['Lawn Care', 'Tree Services', 'Garden Design', 'Construction', 'Fencing', 'Excavation'].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-section py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
            © {currentYear} EPH Landscaping & Construction LLC. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Serving New Jersey with Pride
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
