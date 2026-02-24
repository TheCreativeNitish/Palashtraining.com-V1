import { Link } from "react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/00e4ad58e3cd118ac4466a895de5ae5da71e8ba5.png";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Forum", path: "/forum" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const programs = [
  "Spoken English",
  "IELTS Preparation",
  "Business Communication",
  "Interview Training",
  "Corporate Training",
  "Public Speaking",
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <>
      <footer style={{ backgroundColor: "#0a2a40" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-4">
                <img
                  src={logoImg}
                  alt="Palash Training Institute"
                  style={{ height: "60px", width: "auto", filter: "brightness(0) invert(1)", objectFit: "contain" }}
                />
              </Link>
              <p style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }} className="mb-6">
                Empowering students, professionals, and job seekers to communicate with confidence through expert-led English language training.
              </p>
              <div className="flex gap-3">
                {[LinkedInIcon, InstagramIcon, YouTubeIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                    className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }} className="mb-5 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}
                      className="hover:text-orange-400 transition-colors flex items-center gap-2 group"
                    >
                      <span style={{ color: "#FF7A00", opacity: 0 }} className="group-hover:opacity-100 transition-opacity">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }} className="mb-5 uppercase tracking-wider">
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#FF7A00" }} />
                  <span style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    123 Training Hub, Language Street,<br />Mumbai, India – 400001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#FF7A00" }} />
                  <a href="tel:+919640816324" style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }} className="hover:text-white">+91 96408 16324</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#FF7A00" }} />
                  <a href="mailto:hello@palashtraining.com" style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }} className="hover:text-white">hello@palashtraining.com</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }} className="mb-2 uppercase tracking-wider">
                Newsletter
              </h4>
              <p style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }} className="mb-4">
                Get weekly English tips, IELTS strategies & learning resources.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", fontFamily: "'Inter',sans-serif", color: "#ffffff", outline: "none", fontSize: "0.875rem" }}
                  className="px-4 py-3 placeholder-gray-500 focus:border-orange-400 transition-colors"
                />
                <button
                  style={{ backgroundColor: "#FF7A00", fontFamily: "'Poppins',sans-serif", borderRadius: "10px" }}
                  className="px-4 py-3 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" /> Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
              © 2026 Palash Training Institute. All rights reserved.
            </p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Use"].map((item) => (
                <a key={item} href="#" style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }} className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919640816324"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: "#25D366", bottom: "24px", right: "24px", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
        className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
