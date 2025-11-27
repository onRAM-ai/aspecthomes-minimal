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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next building or carpentry project? Contact us today for a consultation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Phone</h3>
                <p className="font-inter text-muted-foreground">0412 345 678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="font-inter text-muted-foreground">info@aspecthomes.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Location</h3>
                <p className="font-inter text-muted-foreground">
                  Goldfields Region<br />
                  Western Australia
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary">
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Licensed & Insured</h3>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                All our work is carried out by licensed builders and carpenters with full 
                insurance coverage for your peace of mind.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div>
                <Label htmlFor="name" className="font-inter text-base mb-2">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 px-4 rounded-xl"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="font-inter text-base mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 px-4 rounded-xl"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-inter text-base mb-2">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0412 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 px-4 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-inter text-base mb-2">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-4 py-3 rounded-xl resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
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
