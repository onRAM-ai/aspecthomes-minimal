import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Helped my husband and I with our building inspection when buying our first home. Friendly, reliable and super helpful. Cannot recommend these guys enough.",
    name: "Steph McMillan",
    rating: 5,
  },
  {
    quote: "Very professional and knowledgeable. Was never anything that was too hard or not doable. Transformed our standard copy paste house to something unique and our style. Produced top quality products with their top quality craftsmanship. Always answered phone calls and emails. Was never left wondering.",
    name: "Aaron Curtis",
    rating: 5,
  },
  {
    quote: "The team at Aspect Homes were amazing. Very responsive to enquiries, knowledgeable, quick and kind. The team smashed out the job and even cleaned up after themselves. Thank you for the work on our older home.",
    name: "Kylie Ekins",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-muted/30">
      <div className="container px-4">
        <AnimatedSection>
          <div className="max-w-2xl mb-20">
            <p className="font-inter text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Testimonials
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-normal text-foreground mb-6">
              What Our Clients Say
            </h2>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Trusted by homeowners across the Goldfields region.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group h-full">
                <div className="border border-border/50 p-8 h-full flex flex-col transition-colors duration-300 hover:border-primary/30">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-playfair text-lg md:text-xl italic text-foreground leading-relaxed mb-8 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="mt-auto pt-6 border-t border-border/30">
                    <p className="font-inter text-sm font-medium text-foreground">
                      — {testimonial.name}
                    </p>
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

export default Testimonials;
