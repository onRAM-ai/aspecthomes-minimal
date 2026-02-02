import { useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateField = (field: keyof ContactFormData, value: string) => {
    const result = contactFormSchema.shape[field].safeParse(value);
    if (!result.success) {
      setErrors((prev) => ({ ...prev, [field]: result.error.errors[0]?.message }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Please check the form",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <p className="font-inter text-lg text-foreground">0409 528 854</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Mail className="h-5 w-5 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Email
                </p>
                <p className="font-inter text-lg text-foreground">admin@aspect-homes.com</p>
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
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={(e) => validateField("name", e.target.value)}
                  className={`h-12 px-0 border-0 border-b rounded-none bg-transparent focus-visible:ring-0 ${
                    errors.name ? "border-destructive" : "border-border focus-visible:border-primary"
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={(e) => validateField("email", e.target.value)}
                  className={`h-12 px-0 border-0 border-b rounded-none bg-transparent focus-visible:ring-0 ${
                    errors.email ? "border-destructive" : "border-border focus-visible:border-primary"
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
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
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-12 px-0 border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={(e) => validateField("message", e.target.value)}
                  className={`px-0 py-3 border-0 border-b rounded-none bg-transparent focus-visible:ring-0 resize-none ${
                    errors.message ? "border-destructive" : "border-border focus-visible:border-primary"
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-base mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
