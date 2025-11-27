import bathroomImage from "@/assets/gallery-bathroom.jpg";
import extensionImage from "@/assets/gallery-extension.jpg";
import carpentryImage from "@/assets/gallery-carpentry.jpg";
import AnimatedSection from "./AnimatedSection";

const galleryImages = [
  {
    src: bathroomImage,
    alt: "Modern bathroom renovation with quality fixtures and tiling",
    title: "Bathroom Renovation",
  },
  {
    src: extensionImage,
    alt: "Home extension with patio and carport",
    title: "Home Extension",
  },
  {
    src: carpentryImage,
    alt: "Custom carpentry and joinery work",
    title: "Custom Carpentry",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/20">
      <div className="container px-4">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Work
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality craftsmanship across all our building and carpentry projects
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-playfair text-2xl font-semibold text-foreground">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
