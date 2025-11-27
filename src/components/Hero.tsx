import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
              Aspect Homes
            </h1>
            <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              Licensed Builders & Carpenters
            </p>
            <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Quality craftsmanship for new homes, extensions, and renovations across the Goldfields region.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 group shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
