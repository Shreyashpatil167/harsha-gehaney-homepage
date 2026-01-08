import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Harsha Gehaney"
              className="h-24 w-auto mb-6 brightness-0 invert opacity-90"
            />
            <p className="text-sm font-light leading-relaxed opacity-80 mb-6">
              Timeless elegance rooted in royal Indian heritage. Each creation 
              tells a story of tradition, artistry, and modern sophistication.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-body tracking-[0.2em] uppercase mb-6 text-secondary">
              Collections
            </h4>
            <ul className="space-y-3">
              {["Bridal Couture", "Festive Wear", "Occasion Wear", "Prêt-à-Porter", "New Arrivals"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-light opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-body tracking-[0.2em] uppercase mb-6 text-secondary">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {["Book Appointment", "Size Guide", "Care Instructions", "Shipping & Returns", "FAQs"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-light opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-body tracking-[0.2em] uppercase mb-6 text-secondary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-secondary" />
                <span className="text-sm font-light opacity-80">
                  Design Studio, Fashion District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <a
                  href="tel:+919876543210"
                  className="text-sm font-light opacity-80 hover:opacity-100 hover:text-secondary transition-all"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <a
                  href="mailto:contact@harshagehaney.com"
                  className="text-sm font-light opacity-80 hover:opacity-100 hover:text-secondary transition-all"
                >
                  contact@harshagehaney.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-light opacity-60 text-center md:text-left">
              © {currentYear} Harsha Gehaney. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs font-light opacity-60 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="text-xs font-light opacity-60 hover:opacity-100 transition-opacity">
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
