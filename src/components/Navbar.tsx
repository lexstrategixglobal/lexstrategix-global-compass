
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-navy-500 font-serif">
              Lexstrategix<span className="text-gold-400">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#about">About Us</NavItem>
            <NavItem href="#testimonials">Testimonials</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-navy-500 hover:bg-navy-600 text-white"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-500 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-navy-500" />
            ) : (
              <Menu size={24} className="text-navy-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 shadow-md" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <MobileNavItem href="#services" onClick={toggleMenu}>
            Services
          </MobileNavItem>
          <MobileNavItem href="#about" onClick={toggleMenu}>
            About Us
          </MobileNavItem>
          <MobileNavItem href="#testimonials" onClick={toggleMenu}>
            Testimonials
          </MobileNavItem>
          <MobileNavItem href="#contact" onClick={toggleMenu}>
            Contact
          </MobileNavItem>
          <Button
            className="w-full bg-navy-500 hover:bg-navy-600 text-white"
            onClick={toggleMenu}
            asChild
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-navy-500 hover:text-gold-400 font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavItem = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="block text-navy-500 hover:text-gold-400 py-2 font-medium"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
