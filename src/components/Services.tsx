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
    title: "Bathrooms & Kitchens",
    description: "Specialist bathroom and kitchen renovations tailored to your needs.",
  },
  {
    icon: Warehouse,
    title: "Sheds, Carports & Patios",
    description: "Quality outdoor structures built to withstand Australian conditions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-2 pb-10 md:pt-3 md:pb-12 bg-background">
      <div className="container px-4">
        <AnimatedSection>
          <div className="max-w-2xl mb-20">
            <p className="font-inter text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">What We Do</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-normal text-foreground mb-6">Our Services</h2>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Comprehensive building and carpentry solutions for Residential, Commercial and Mining projects.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-background p-10 md:p-12 hover:bg-muted/30 transition-colors duration-500">
                  <Icon className="h-8 w-8 text-primary mb-8" strokeWidth={1.5} />
                  <h3 className="font-playfair text-2xl font-normal text-foreground mb-4">{service.title}</h3>
                  <p className="font-inter text-base text-muted-foreground leading-relaxed">{service.description}</p>
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
