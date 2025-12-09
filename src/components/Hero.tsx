import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-builder.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Split Layout - Image Right */}
      <div className="container px-4 py-16 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Content Left */}
          <div className="order-2 lg:order-1 max-w-xl">
            <p className="font-inter text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Licensed Builders & Carpenters
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-normal text-foreground mb-8 leading-[1.1]">
              Aspect Homes
            </h1>
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="font-inter text-lg text-muted-foreground mb-12 leading-relaxed">
              Quality craftsmanship for new homes, extensions, and renovations across Kalgoorlie and the surrounding
              Goldfields regions. We bring your vision to life with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6 group" onClick={scrollToContact}>
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6" onClick={scrollToServices}>
                Our Services
              </Button>
            </div>
          </div>

          {/* Image Right */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src={heroImage}
                alt="Quality home construction by Aspect Homes"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
