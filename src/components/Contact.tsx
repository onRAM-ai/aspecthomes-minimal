import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <AnimatedSection>
          <div className="max-w-2xl mb-20">
            <p className="font-inter text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-normal text-foreground mb-6">
              Get In Touch
            </h2>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-5xl">
          {/* Contact Info */}
          <AnimatedSection className="space-y-12">
            <div className="flex items-start gap-6">
              <Phone className="h-5 w-5 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Phone
                </p>
                <p className="font-inter text-lg text-foreground">0412 345 678</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Mail className="h-5 w-5 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Email
                </p>
                <p className="font-inter text-lg text-foreground">info@aspecthomes.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <MapPin className="h-5 w-5 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Location
                </p>
                <p className="font-inter text-lg text-foreground">
                  Goldfields Region<br />
                  Western Australia
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                Licensed & Insured
              </p>
              <p className="font-inter text-base text-muted-foreground leading-relaxed">
                All our work is carried out by licensed builders and carpenters with full 
                insurance coverage for your peace of mind.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Label htmlFor="name" className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 px-0 border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 px-0 border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0412 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 px-0 border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-0 py-3 border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base mt-4">
                Send Message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;