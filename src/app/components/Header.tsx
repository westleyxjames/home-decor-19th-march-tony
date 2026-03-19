import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { ContactFormDialog } from "./ContactFormDialog";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">PN</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              PrimeNest Decor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-amber-700 ${
                  location.pathname === link.path
                    ? "text-amber-700 font-medium"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18053569285"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+1-805-356-9285</span>
            </a>
            <ContactFormDialog
              trigger={
                <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg">
                  Get Free Consultation
                </button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-amber-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+18053569285"
                className="flex items-center gap-2 py-2 text-amber-700"
              >
                <Phone className="w-4 h-4" />
                <span>+1-805-356-9285</span>
              </a>
              <ContactFormDialog
                trigger={
                  <button className="w-full px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg">
                    Get Free Consultation
                  </button>
                }
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
