import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import pulseLogo from "@/assets/pulse-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={pulseLogo} alt="Pulse Fitness" className="h-12 w-auto" />
            <p className="text-muted-foreground text-sm">
              Train Hard. Train Smart. Train at Pulse. Your transformation starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Programs", to: "/programs" },
                { label: "About Us", to: "/about" },
                { label: "Pricing", to: "/pricing" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-xl text-primary mb-4">Programs</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>HYROX Preparation</span>
              <span>Group Training</span>
              <span>Personal Training</span>
              <span>CrossFit</span>
              <span>Functional Training</span>
              <span>Strength Training</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-primary mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} /> +91 12345 67890
              </a>
              <a href="mailto:info@pulsefitness.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} /> info@pulsefitness.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Mumbai, India
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pulse Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
