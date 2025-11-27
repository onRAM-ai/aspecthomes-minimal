import bathroomImage from "@/assets/gallery-bathroom.jpg";
import extensionImage from "@/assets/gallery-extension.jpg";
import carpentryImage from "@/assets/gallery-carpentry.jpg";

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
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality craftsmanship across all our building and carpentry projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
