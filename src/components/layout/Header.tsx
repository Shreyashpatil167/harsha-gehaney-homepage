import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, User, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "New Arrivals", href: "#new" },
  { name: "Bridal", href: "#bridal" },
  { name: "Collections", href: "#collections" },
  { name: "Lookbook", href: "#lookbook" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2.5 text-center overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-flex">
          <span className="text-xs font-body tracking-[0.15em] uppercase mx-8">
            ✦ Complimentary Styling Consultation ✦ Worldwide Shipping ✦ Book Your Bridal Appointment ✦ New Collection: Autumn/Winter 2024 ✦
          </span>
          <span className="text-xs font-body tracking-[0.15em] uppercase mx-8">
            ✦ Complimentary Styling Consultation ✦ Worldwide Shipping ✦ Book Your Bridal Appointment ✦ New Collection: Autumn/Winter 2024 ✦
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/98 backdrop-blur-md shadow-sm"
            : "bg-cream"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 items-center h-20 lg:h-24">
            
            {/* Left: Mobile Menu + Logo */}
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden text-primary p-2 -ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Harsha Gehaney"
                  className="h-14 lg:h-[72px] w-auto"
                />
              </a>
            </div>

            {/* Center: Navigation */}
            <nav className="hidden lg:flex justify-center items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-body tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right: Icons */}
            <div className="flex justify-end items-center gap-5">
              <button
                aria-label="Search"
                className="text-primary hover:text-secondary transition-colors hidden sm:block"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label="Wishlist"
                className="text-primary hover:text-secondary transition-colors hidden sm:block"
              >
                <Heart size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label="Account"
                className="text-primary hover:text-secondary transition-colors hidden lg:block"
              >
                <User size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label="Cart"
                className="text-primary hover:text-secondary transition-colors relative"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-secondary text-[9px] text-secondary-foreground rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 bg-cream ${
            isMobileMenuOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 py-8 border-t border-border/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-body tracking-[0.15em] uppercase text-primary hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
