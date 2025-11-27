import { Home, Hammer, Bath, Warehouse } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive building and carpentry solutions for residential and commercial projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
