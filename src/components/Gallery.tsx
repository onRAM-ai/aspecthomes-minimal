import bathroomImage from "@/assets/gallery-bathroom.jpg";
import extensionImage from "@/assets/gallery-extension.jpg";
import carpentryImage from "@/assets/gallery-carpentry.jpg";
import AnimatedSection from "./AnimatedSection";

const galleryImages = [
  {
    src: bathroomImage,
    alt: "Modern bathroom renovation with quality fixtures and tiling",
    title: "Bathroom Renovation",
    category: "Renovation",
  },
  {
    src: extensionImage,
    alt: "Home extension with patio and carport",
    title: "Home Extension",
    category: "Extension",
  },
  {
    src: carpentryImage,
    alt: "Custom carpentry and joinery work",
    title: "Custom Carpentry",
    category: "Carpentry",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 md:py-40 bg-muted/30">
      <div className="container px-4">
        <AnimatedSection>
          <div className="max-w-2xl mb-20">
            <p className="font-inter text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-normal text-foreground mb-6">
              Our Work
            </h2>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Quality craftsmanship across all our building and carpentry projects.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  {image.category}
                </p>
                <h3 className="font-playfair text-xl font-normal text-foreground">
                  {image.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;