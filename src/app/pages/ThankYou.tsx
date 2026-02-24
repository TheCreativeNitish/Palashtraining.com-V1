import { Link } from "react-router";
import { CheckCircle, Home, BookOpen, Phone, Clock, MessageCircle } from "lucide-react";

export function ThankYou() {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 16px" }}>
      <div style={{ maxWidth: "640px", width: "100%", textAlign: "center" }}>
        {/* Success Icon */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#dcfce7", boxShadow: "0 0 0 24px rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircle style={{ width: "52px", height: "52px", color: "#22c55e" }} />
          </div>
        </div>

        <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Booking Confirmed</div>
        <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: "14px" }}>
          You're All Set!
        </h1>
        <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "40px" }}>
          Thank you for booking with <strong style={{ color: "#0B3C5D" }}>Palash Training Institute</strong>. Our team will contact you within <strong>24 hours</strong> to confirm your session details.
        </p>

        {/* Next Steps */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", border: "2px solid #e5e7eb", boxShadow: "0 8px 40px rgba(11,60,93,0.08)", padding: "32px", marginBottom: "24px", textAlign: "left" }}>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", marginBottom: "24px", textAlign: "center", fontSize: "1.2rem" }}>What Happens Next?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {[
              { icon: Phone, step: "01", title: "We'll Call You", desc: "Our team will reach out within 24 hours to confirm your session.", color: "#FF7A00" },
              { icon: Clock, step: "02", title: "Session Scheduled", desc: "We'll schedule your class based on your preferred timing and availability.", color: "#0B3C5D" },
              { icon: BookOpen, step: "03", title: "Start Learning!", desc: "Attend your session and experience the Palash Training difference firsthand.", color: "#22c55e" },
            ].map(({ icon: Icon, step, title, desc, color }) => (
              <div key={step} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ backgroundColor: `${color}12`, width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon style={{ width: "20px", height: "20px", color }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color, fontSize: "0.72rem", letterSpacing: "0.05em" }}>STEP {step}</span>
                  </div>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", marginBottom: "2px" }}>{title}</p>
                  <p style={{ color: "#777", fontSize: "0.875rem" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp */}
        <div style={{ backgroundColor: "#0B3C5D", borderRadius: "16px", padding: "20px", marginBottom: "24px" }}>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>Need immediate assistance?</p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", marginBottom: "14px" }}>Chat with us on WhatsApp for a faster response.</p>
          <a href="https://wa.me/919640816324" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#25D366", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "10px", padding: "11px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }} className="hover:opacity-90 transition-opacity">
            <MessageCircle style={{ width: "18px", height: "18px" }} /> Chat on WhatsApp
          </a>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" style={{ backgroundColor: "#FF7A00", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "12px", padding: "13px 24px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }} className="hover:opacity-90 transition-opacity">
            <Home style={{ width: "16px", height: "16px" }} /> Back to Home
          </Link>
          <Link to="/services" style={{ border: "2px solid #0B3C5D", color: "#0B3C5D", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "12px", padding: "13px 24px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }} className="hover:bg-blue-900 hover:text-white transition-all">
            <BookOpen style={{ width: "16px", height: "16px" }} /> Explore Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

