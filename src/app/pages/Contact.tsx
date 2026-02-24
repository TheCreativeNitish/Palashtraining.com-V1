import { useState } from "react";
import { useNavigate } from "react-router";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const courses = ["Spoken English", "IELTS Preparation", "Business Communication", "Interview Training", "Not sure yet"];

export function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [sessionType, setSessionType] = useState<"demo" | "full">("demo");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Get In Touch</div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            Book Your <span style={{ color: "#FF7A00" }}>Free Demo</span> Class
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
            Experience the Palash Training difference before committing. Fill in your details and we'll confirm your session within 24 hours.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ backgroundColor: "#f8fafc", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: Phone, title: "Call Us", info: "+91 96408 16324", sub: "Mon–Sat, 9 AM – 8 PM", href: "tel:+919640816324", color: "#FF7A00" },
                { icon: Mail, title: "Email Us", info: "hello@palashtraining.com", sub: "Reply within 24 hours", href: "mailto:hello@palashtraining.com", color: "#0B3C5D" },
                { icon: MapPin, title: "Visit Us", info: "123 Training Hub, Language Street", sub: "Mumbai, India – 400001", href: "#", color: "#7C3AED" },
                { icon: Clock, title: "Batch Timings", info: "Morning, Evening & Weekend", sub: "Flexible options available", href: "#", color: "#059669" },
              ].map(({ icon: Icon, title, info, sub, href, color }) => (
                <a
                  key={title}
                  href={href}
                  style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "2px solid #e5e7eb", padding: "16px", display: "flex", alignItems: "flex-start", gap: "14px", textDecoration: "none", transition: "border-color 0.2s" }}
                  className="hover:border-orange-300"
                >
                  <div style={{ backgroundColor: `${color}12`, width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: "20px", height: "20px", color }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "0.9rem" }}>{title}</p>
                    <p style={{ color: "#333", fontSize: "0.875rem", fontWeight: 500 }}>{info}</p>
                    <p style={{ color: "#aaa", fontSize: "0.78rem" }}>{sub}</p>
                  </div>
                </a>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/919640816324"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#25D366", borderRadius: "14px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", textDecoration: "none" }}
                className="hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon className="w-6 h-6 text-white" />
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#ffffff" }}>Chat on WhatsApp</span>
              </a>

              {/* Trust */}
              <div style={{ backgroundColor: "#E8F1F8", borderRadius: "14px", padding: "20px", border: "1px solid #cce0ee" }}>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", marginBottom: "12px", fontSize: "0.9rem" }}>Why Choose Us?</p>
                {["1000+ students trained", "4.9★ average rating", "100% personalized approach", "Certified expert trainer"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <CheckCircle style={{ width: "14px", height: "14px", color: "#FF7A00", flexShrink: 0 }} />
                    <span style={{ color: "#555", fontSize: "0.82rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" style={{ backgroundColor: "#ffffff", borderRadius: "20px", boxShadow: "0 10px 50px rgba(11,60,93,0.1)", border: "2px solid #e5e7eb", padding: "36px" }}>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "1.6rem", marginBottom: "6px" }}>Book My Session</h2>
              <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "28px" }}>Fill out the form and our team will reach out within 24 hours to confirm your booking.</p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name" },
                    { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.875rem", display: "block", marginBottom: "6px" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required value={form[f.name as keyof typeof form]} onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))} style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "11px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", boxSizing: "border-box" }} />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.875rem", display: "block", marginBottom: "6px" }}>Email Address *</label>
                  <input type="email" placeholder="your@email.com" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "11px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", boxSizing: "border-box" }} />
                </div>

                <div>
                  <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.875rem", display: "block", marginBottom: "6px" }}>Preferred Course *</label>
                  <select required value={form.course} onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))} style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "11px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", backgroundColor: "#fff", boxSizing: "border-box" }}>
                    <option value="">Select a course</option>
                    {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Session Type */}
                <div>
                  <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.875rem", display: "block", marginBottom: "10px" }}>Session Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["demo", "full"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSessionType(type)}
                        style={{ padding: "13px 16px", borderRadius: "12px", border: sessionType === type ? "2px solid #FF7A00" : "2px solid #e5e7eb", backgroundColor: sessionType === type ? "rgba(255,122,0,0.06)" : "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.875rem", color: sessionType === type ? "#FF7A00" : "#666", cursor: "pointer", transition: "all 0.2s" }}
                      >
                        {type === "demo" ? "🎯 Free Demo Class" : "📅 Full Enrollment"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.875rem", display: "block", marginBottom: "6px" }}>Message (Optional)</label>
                  <textarea rows={4} placeholder="Share your goals or any questions you have..." value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "11px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", resize: "none", boxSizing: "border-box" }} />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#FF7A00", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "12px", padding: "15px", fontSize: "1rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 8px 25px rgba(255,122,0,0.35)" }}
                  className="hover:opacity-90 transition-opacity"
                >
                  <Send style={{ width: "18px", height: "18px" }} />
                  Book My {sessionType === "demo" ? "Free Demo" : "Full Session"}
                </button>

                <p style={{ textAlign: "center", color: "#aaa", fontSize: "0.78rem" }}>🔒 Your information is 100% private. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ backgroundColor: "#f8fafc", padding: "0 16px 80px" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ backgroundColor: "#0B3C5D", borderRadius: "20px", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px" }}>
            <MapPin style={{ width: "40px", height: "40px", color: "#FF7A00" }} />
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#ffffff", fontSize: "1.1rem" }}>123 Training Hub, Language Street</p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>Mumbai, India – 400001</p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#FF7A00", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "10px", padding: "10px 24px", textDecoration: "none", fontSize: "0.875rem", marginTop: "6px" }} className="hover:opacity-90 transition-opacity">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
