const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {currentYear} Licensed Builders & Carpenters. All rights reserved.
          </p>
          <p className="text-sm">
            Serving the Goldfields region with quality and professionalism
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
