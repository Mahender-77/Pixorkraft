import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/pixorkraft.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="PixorKraft" className="h-14 brightness-0 invert" />
            <p className="text-background/60 text-sm leading-relaxed">
              We craft digital experiences that drive growth. From web design to SEO, we're your one-stop digital marketing partner.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gradient-brand transition-all duration-300 hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                <Link key={link} to={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="block text-background/60 hover:text-brand-yellow text-sm transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <div className="space-y-2">
              {["Web Designing", "SEO", "Social Media Marketing", "Graphic Designing", "Video Editing", "Blog Writing"].map((s) => (
                <Link key={s} to="/services" className="block text-background/60 hover:text-brand-yellow text-sm transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:info@pixorkraft.com" className="flex items-center gap-2 text-background/60 hover:text-brand-yellow text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> info@pixorkraft.com
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 text-background/60 hover:text-brand-yellow text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> +91 99999 99999
              </a>
              <div className="flex items-start gap-2 text-background/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> India
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
          <p>© 2026 PixorKraft. All rights reserved.</p>
          <p>Crafted with ❤️ by PixorKraft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
