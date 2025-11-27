import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/aspect-homes-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "services", "gallery", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/98 backdrop-blur-lg shadow-lg border-b border-border/40 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={logo} 
                alt="Aspect Homes" 
                className="h-12 md:h-14 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  aria-current={activeSection === link.id ? "page" : undefined}
                  className={cn(
                    "relative font-inter font-medium group transition-colors duration-300",
                    activeSection === link.id
                      ? "text-primary"
                      : isScrolled 
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300",
                      activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="gap-2 rounded-full group"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-all duration-300",
                isScrolled
                  ? "hover:bg-secondary/80"
                  : "hover:bg-white/10 backdrop-blur-sm"
              )}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
              ) : (
                <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-background shadow-2xl md:hidden transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <img src={logo} alt="Aspect Homes" className="h-10 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-secondary/80 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col gap-2 p-6 flex-1">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={cn(
                  "text-left py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300",
                  activeSection === link.id
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-secondary/50",
                  isMobileMenuOpen && `animate-fade-in`
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "backwards"
                }}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="gap-2 w-full mt-4 rounded-full animate-fade-in"
              style={{
                animationDelay: `${navLinks.length * 50}ms`,
                animationFillMode: "backwards"
              }}
            >
              <Phone className="h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
