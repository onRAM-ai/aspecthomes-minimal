import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/aspect-homes-logo.png";
import masterBuildersLogo from "@/assets/master-builders-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-20 border-t border-border bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-6 mb-6">
              <img 
                src={logo} 
                alt="Aspect Homes" 
                className="h-10 w-auto"
              />
              <img 
                src={masterBuildersLogo} 
                alt="Master Builders Western Australia Member" 
                className="h-12 w-auto"
              />
            </div>
            <p className="font-inter text-base text-muted-foreground leading-relaxed max-w-sm">
              Licensed Builders & Carpenters serving the Goldfields region of Western Australia with quality craftsmanship.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {["Home", "Services", "Testimonials", "Gallery", "Contact"].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-inter text-base text-foreground hover:text-primary transition-colors text-left link-underline w-fit"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Contact
            </p>
            <div className="flex flex-col gap-3 font-inter text-base text-foreground">
              <p>0409 528 854</p>
              <p>admin@aspect-homes.com</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61568481675823"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/aspect.homes.kal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="font-inter text-sm text-muted-foreground">
            © {currentYear} Aspect Homes and Developments PTY LTD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;