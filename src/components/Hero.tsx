import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Aspect Homes
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Licensed Builders & Carpenters | Goldfields, Western Australia
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Professional building and carpentry services for new homes, extensions, 
            renovations, bathrooms, sheds, carports, and patios. Quality craftsmanship 
            you can trust.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 group"
            onClick={scrollToContact}
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
