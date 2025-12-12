import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-primary rounded-full text-sm font-semibold mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
              Ready to Start Your
              <span className="text-gradient"> Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contact us today for a free consultation and estimate. We're here to bring your landscaping vision to life.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+19736521723"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow border border-border group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-foreground font-semibold">+1 (973) 652-1723</p>
                </div>
              </a>

              <a
                href="https://wa.me/19736521723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow border border-border group"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-semibold">Message Us Anytime</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/vWfLMpQZDYgubw3A9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow border border-border group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-semibold">View on Google Maps</p>
                </div>
              </a>

              <a
                href="mailto:Ephlandscapingllc@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow border border-border group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold">Ephlandscapingllc@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Business Hours</p>
                  <p className="text-foreground font-semibold">Mon - Sat: 7AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href="tel:+19736521723" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/19736521723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-[550px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949985!2d-74.11976404936089!3d40.69766374854222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1702404000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EPH Landscaping Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
