import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const WORKSHOP_IMG = "https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGFuZ3VhZ2UlMjB3b3Jrc2hvcCUyMHRyYWluaW5nJTIwZ3JvdXAlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE1OTgxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CORP_IMG = "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc3MTU5ODEzNnww&ixlib=rb-4.1.0&q=80&w=1080";
const CERT_IMG = "https://images.unsplash.com/photo-1770807188136-6c90c0859f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2VydGlmaWNhdGUlMjBhY2hpZXZlbWVudCUyMGRpcGxvbWElMjBhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc3MTU5ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080";
const DIVERSE_IMG = "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzE1OTgxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TRAINER_IMG = "https://images.unsplash.com/photo-1766867257943-0665537fb2dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbmdsaXNoJTIwdHJhaW5lciUyMHRlYWNoaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MTU5ODEzNXww&ixlib=rb-4.1.0&q=80&w=1080";
const HERO_IMG = "https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB5b3VuZyUyMHdvbWFuJTIwcHVibGljJTIwc3BlYWtpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzcxNTk4MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const BLOG_IMG = "https://images.unsplash.com/photo-1593444285563-4479fb28226e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGNvbnRlbnQlMjBlZHVjYXRpb258ZW58MXx8fHwxNzcxNTk2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const WOMAN_IMG = "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwc21pbGluZyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcxNTk2MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const categories = ["All", "Workshops", "Corporate", "Ceremonies", "Sessions"];

const galleryItems = [
  { src: WORKSHOP_IMG, caption: "Interactive Spoken English Workshop", category: "Workshops", size: "large" },
  { src: CORP_IMG, caption: "Corporate Communication Training Program", category: "Corporate", size: "medium" },
  { src: CERT_IMG, caption: "Student Achievement & Certificate Ceremony", category: "Ceremonies", size: "medium" },
  { src: DIVERSE_IMG, caption: "Group Discussion & Speaking Activity", category: "Sessions", size: "large" },
  { src: TRAINER_IMG, caption: "One-on-One Coaching Session", category: "Sessions", size: "medium" },
  { src: HERO_IMG, caption: "Public Speaking Practice — Student Demo", category: "Workshops", size: "medium" },
  { src: BLOG_IMG, caption: "Business Writing Masterclass", category: "Workshops", size: "medium" },
  { src: WOMAN_IMG, caption: "IELTS Speaking Practice Session", category: "Sessions", size: "medium" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  const [hoveredImg, setHoveredImg] = useState<number | null>(null);

  const filtered = galleryItems.filter((g) => activeCategory === "All" || g.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Gallery</div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            See Us in <span style={{ color: "#FF7A00" }}>Action</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
            A glimpse into our workshops, training sessions, and student success celebrations at Palash Training Institute.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: "0", zIndex: 10, padding: "16px" }}>
        <div className="max-w-7xl mx-auto" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                backgroundColor: activeCategory === cat ? "#FF7A00" : "#f1f5f9",
                color: activeCategory === cat ? "#ffffff" : "#555",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section style={{ backgroundColor: "#f8fafc", padding: "60px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredImg(i)}
                onMouseLeave={() => setHoveredImg(null)}
                onClick={() => setLightbox({ src: item.src, caption: item.caption })}
                style={{ position: "relative", borderRadius: "14px", overflow: "hidden", cursor: "pointer", display: "inline-block", width: "100%", marginBottom: "16px" }}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover"
                  style={{
                    height: item.size === "large" ? "300px" : "220px",
                    transition: "transform 0.4s ease",
                    transform: hoveredImg === i ? "scale(1.06)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: hoveredImg === i ? "linear-gradient(180deg, transparent 20%, rgba(11,60,93,0.85) 100%)" : "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.35) 100%)",
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "16px",
                  }}
                >
                  <div>
                    <span style={{ backgroundColor: "rgba(255,122,0,0.9)", color: "#ffffff", fontSize: "0.7rem", fontWeight: 600, padding: "3px 10px", borderRadius: "100px", fontFamily: "'Poppins',sans-serif", display: "inline-block", marginBottom: "6px" }}>{item.category}</span>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#ffffff", fontSize: "0.85rem", opacity: hoveredImg === i ? 1 : 0.8, transition: "opacity 0.3s" }}>{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#999" }}>
              <p style={{ fontFamily: "'Poppins',sans-serif" }}>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.92)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}
          >
            <X style={{ width: "22px", height: "22px" }} />
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "900px", width: "100%" }}>
            <img src={lightbox.src} alt={lightbox.caption} style={{ width: "100%", borderRadius: "16px", objectFit: "contain", maxHeight: "75vh" }} />
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.8)", marginTop: "16px", fontFamily: "'Inter',sans-serif" }}>{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
