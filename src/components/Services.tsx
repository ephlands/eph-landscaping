import { Leaf, Hammer, TreePine, Fence, Flower2, Shovel, Lightbulb, Snowflake, Droplets } from 'lucide-react';
import landscapingLightsImg from '@/assets/landscaping-lights.jpg';
import snowRemovalImg from '@/assets/snow-removal.jpg';
import sprinklerSystemImg from '@/assets/sprinkler-system.jpg';

const services = [
  {
    icon: Leaf,
    title: 'Lawn Care',
    description: 'Professional lawn maintenance including mowing, fertilization, and aeration for a lush, green lawn year-round.',
  },
  {
    icon: TreePine,
    title: 'Tree Services',
    description: 'Expert tree planting, trimming, and removal services to enhance your property\'s beauty and safety.',
  },
  {
    icon: Flower2,
    title: 'Garden Design',
    description: 'Custom garden designs with beautiful flower beds, shrubs, and plants that thrive in your environment.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    description: 'Quality hardscape construction including patios, walkways, retaining walls, and outdoor structures.',
  },
  {
    icon: Fence,
    title: 'Fencing',
    description: 'Durable fence installation and repair services to add privacy, security, and curb appeal to your property.',
  },
  {
    icon: Shovel,
    title: 'Excavation',
    description: 'Professional excavation and grading services for new construction, drainage, and landscape preparation.',
  },
  {
    icon: Lightbulb,
    title: 'Landscaping Lights',
    description: 'Beautiful outdoor lighting solutions to highlight your landscape and enhance security with elegant pathway and accent lights.',
    image: landscapingLightsImg,
  },
  {
    icon: Snowflake,
    title: 'Snow Removal',
    description: 'Reliable snow removal services to keep your driveways, walkways, and parking areas safe and accessible all winter.',
    image: snowRemovalImg,
  },
  {
    icon: Droplets,
    title: 'Sprinkler System',
    description: 'Professional sprinkler installation and maintenance to keep your lawn healthy with efficient automated irrigation.',
    image: sprinklerSystemImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
            Complete Landscaping
            <span className="text-gradient"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine lawn care to full-scale construction projects, we deliver exceptional results that exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
              )}
              <div className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
