import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Collections", href: "#collections" },
  { name: "Bridal", href: "#bridal" },
  { name: "Lookbook", href: "#lookbook" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation Left */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-body tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Harsha Gehaney"
              className="h-16 md:h-20 w-auto transition-transform duration-500 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Right */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-body tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <button aria-label="Search" className="text-primary hover:text-secondary transition-colors">
                <Search size={18} />
              </button>
              <button aria-label="Account" className="text-primary hover:text-secondary transition-colors">
                <User size={18} />
              </button>
              <button aria-label="Cart" className="text-primary hover:text-secondary transition-colors">
                <ShoppingBag size={18} />
              </button>
            </div>
          </nav>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-3">
            <button aria-label="Search" className="text-primary p-2">
              <Search size={20} />
            </button>
            <button aria-label="Cart" className="text-primary p-2">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 py-6 border-t border-border">
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
      </div>
    </header>
  );
};

export default Header;
