import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-new.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Harsha Gehaney"
              className="h-20 w-auto mb-6 brightness-0 invert opacity-80"
            />
            <p className="text-sm font-body font-light leading-relaxed text-primary-foreground/70 mb-6 max-w-xs">
              Timeless elegance rooted in royal Indian heritage. Each creation 
              tells a story of tradition and modern sophistication.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-body tracking-[0.2em] uppercase mb-6 text-secondary">
              Shop
            </h4>
            <ul className="space-y-3">
              {["New Arrivals", "Bridal Couture", "Festive Wear", "Prêt", "Sale"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-body font-light text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-[10px] font-body tracking-[0.2em] uppercase mb-6 text-secondary">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {["Book Appointment", "Size Guide", "Shipping & Returns", "Care Instructions", "FAQs"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-body font-light text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-body tracking-[0.2em] uppercase mb-6 text-secondary">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-secondary" />
                <span className="text-sm font-body font-light text-primary-foreground/70">
                  Design Studio, Fashion District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-secondary" />
                <a
                  href="tel:+919876543210"
                  className="text-sm font-body font-light text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-secondary" />
                <a
                  href="mailto:hello@harshagehaney.com"
                  className="text-sm font-body font-light text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  hello@harshagehaney.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-body font-light text-primary-foreground/50">
              © {currentYear} Harsha Gehaney. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[11px] font-body font-light text-primary-foreground/50 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[11px] font-body font-light text-primary-foreground/50 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
