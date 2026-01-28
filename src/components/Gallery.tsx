import { Plus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import backyard from "@/assets/gallery/backyard.png";
import bathroom from "@/assets/gallery/bathroom.png";
import kitchen from "@/assets/gallery/kitchen.png";
import theater from "@/assets/gallery/theater.png";
import patio from "@/assets/gallery/patio.png";

const galleryImages = [
  { src: backyard, alt: "Outdoor entertaining area", title: "Outdoor Living" },
  { src: bathroom, alt: "Modern bathroom renovation", title: "Bathroom" },
  { src: kitchen, alt: "Custom kitchen renovation", title: "Kitchen" },
  { src: theater, alt: "Home theater room", title: "Theater Room" },
  { src: patio, alt: "Covered patio with landscaping", title: "Patio" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <p className="font-inter text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Gallery
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-normal text-foreground mb-6">
              Our Work
            </h2>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              See some of our recent projects across the Goldfields region.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative overflow-hidden border border-border/50">
                <div className="aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-inter text-sm text-white font-medium">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={galleryImages.length * 100}>
            <div className="group relative overflow-hidden border-2 border-dashed border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
              <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <Plus className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                </div>
                <p className="font-inter text-sm text-muted-foreground text-center px-4">
                  More projects coming soon
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
