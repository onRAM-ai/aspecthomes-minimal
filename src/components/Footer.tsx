import logo from "@/assets/aspect-homes-logo.png";

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
            <img 
              src={logo} 
              alt="Aspect Homes" 
              className="h-10 w-auto mb-6"
            />
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
              {["Home", "Services", "Gallery", "Contact"].map((item) => (
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
              <p>0412 345 678</p>
              <p>info@aspecthomes.com.au</p>
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