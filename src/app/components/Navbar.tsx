import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/00e4ad58e3cd118ac4466a895de5ae5da71e8ba5.png";
import { BookAppointmentButton } from "../../../book-appointment-button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Forum", path: "/forum" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        boxShadow: scrolled ? "0 2px 24px rgba(11,60,93,0.12)" : "0 1px 0 rgba(11,60,93,0.08)",
        transition: "all 0.3s ease",
        height: scrolled ? "64px" : "72px",
      }}
      className="sticky top-0 z-50 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 flex-shrink-0">
            <img
              src={logoImg}
              alt="Palash Training Institute"
              style={{
                height: scrolled ? "48px" : "56px",
                width: "auto",
                transition: "height 0.3s ease",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: isActive ? "#0B3C5D" : "#444",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.875rem",
                    position: "relative",
                    transition: "all 0.2s",
                  }}
                  className="px-3 py-2 rounded-lg hover:text-blue-900 group"
                >
                  {link.label}
                  <span
                    style={{
                      display: "block",
                      height: "2px",
                      backgroundColor: "#FF7A00",
                      borderRadius: "2px",
                      position: "absolute",
                      bottom: "4px",
                      left: "12px",
                      right: "12px",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.2s ease",
                    }}
                    className="group-hover:scale-x-100"
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <BookAppointmentButton
              variant="primary"
              size="md"
              className="!bg-[#FF7A00] !font-semibold !text-sm !shadow-[0_4px_15px_rgba(255,122,0,0.35)] hover:opacity-90 hover:scale-105"
            >
              Book Demo
            </BookAppointmentButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <BookAppointmentButton
              variant="primary"
              size="sm"
              className="!bg-[#FF7A00] !font-semibold !text-sm"
            >
              Book Demo
            </BookAppointmentButton>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: "#0B3C5D" }}
              className="p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#ffffff",
            borderTop: "1px solid #f0f0f0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: isActive ? "#FF7A00" : "#1E1E1E",
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: isActive ? 600 : 500,
                    backgroundColor: isActive ? "rgba(255,122,0,0.06)" : "transparent",
                    borderLeft: isActive ? "3px solid #FF7A00" : "3px solid transparent",
                  }}
                  className="flex items-center px-4 py-3 rounded-lg"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
