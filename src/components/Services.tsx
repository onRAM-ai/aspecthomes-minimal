import { Home, Hammer, Bath, Warehouse } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Home,
    title: "New Homes",
    description: "Complete home construction with quality workmanship and attention to detail.",
  },
  {
    icon: Hammer,
    title: "Extensions & Renovations",
    description: "Transform your existing space with professional building and carpentry services.",
  },
  {
    icon: Bath,
    title: "Bathrooms & Carpentry",
    description: "Specialist bathroom renovations and custom carpentry solutions.",
  },
  {
    icon: Warehouse,
    title: "Sheds, Carports & Patios",
    description: "Quality outdoor structures built to withstand Australian conditions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive building and carpentry solutions for residential and commercial projects
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
