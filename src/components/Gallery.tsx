import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    image: project1,
    title: 'Backyard Paradise',
    category: 'Landscape Design',
  },
  {
    image: project2,
    title: 'Modern Front Yard',
    category: 'Lawn & Hardscape',
  },
  {
    image: project3,
    title: 'Formal Garden',
    category: 'Topiary Design',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-primary rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
            Recent
            <span className="text-gradient"> Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of stunning landscapes and construction projects that showcase our craftsmanship and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden shadow-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary text-sm font-medium mb-1">
                  {project.category}
                </span>
                <h3 className="text-primary-foreground text-xl font-heading font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
