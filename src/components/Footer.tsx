import logo from "@/assets/aspect-homes-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="Aspect Homes" 
              className="h-12 w-auto mb-4"
            />
            <p className="font-inter text-sm text-muted-foreground">
              Licensed Builders & Carpenters<br />
              Goldfields, Western Australia
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection("home")}
                className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="flex flex-col gap-2 font-inter text-sm text-muted-foreground">
              <p>Phone: 0412 345 678</p>
              <p>Email: info@aspecthomes.com.au</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="font-inter text-sm text-muted-foreground">
            © {currentYear} Aspect Homes and Developments PTY LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
