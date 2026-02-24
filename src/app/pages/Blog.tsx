import { useState } from "react";
import { Clock, User, ArrowRight, Search, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const BLOG_IMG = "https://images.unsplash.com/photo-1593444285563-4479fb28226e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGNvbnRlbnQlMjBlZHVjYXRpb258ZW58MXx8fHwxNzcxNTk2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const WORKSHOP_IMG = "https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGFuZ3VhZ2UlMjB3b3Jrc2hvcCUyMHRyYWluaW5nJTIwZ3JvdXAlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE1OTgxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const DIVERSE_IMG = "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzE1OTgxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const HERO_IMG = "https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB5b3VuZyUyMHdvbWFuJTIwcHVibGljJTIwc3BlYWtpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzcxNTk4MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const MAN_IMG = "https://images.unsplash.com/photo-1615724320397-9d4db10ec2a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTU3OTg3NHww&ixlib=rb-4.1.0&q=80&w=1080";
const CERT_IMG = "https://images.unsplash.com/photo-1770807188136-6c90c0859f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2VydGlmaWNhdGUlMjBhY2hpZXZlbWVudCUyMGRpcGxvbWElMjBhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc3MTU5ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080";

const posts = [
  { id: 1, title: "10 Common Grammar Mistakes Indians Make — And How to Fix Them", excerpt: "From tense confusion to preposition errors, we break down the most common grammar mistakes and provide simple fixes you can apply immediately.", image: BLOG_IMG, category: "Grammar Tips", author: "Palash Sharma", date: "Feb 10, 2026", readTime: "5 min", featured: true, color: "#FF7A00" },
  { id: 2, title: "How to Crack IELTS with a 7+ Band Score on Your First Attempt", excerpt: "Proven strategies, time management techniques, and preparation tips that helped our students consistently achieve 7+ bands.", image: WORKSHOP_IMG, category: "IELTS Tips", author: "Palash Sharma", date: "Feb 05, 2026", readTime: "8 min", featured: false, color: "#0B3C5D" },
  { id: 3, title: "Why Confidence Matters More Than Perfect Grammar in Spoken English", excerpt: "Many learners obsess over grammar rules and neglect the most important aspect — confidence. Here's why fluency beats perfection.", image: DIVERSE_IMG, category: "Spoken English", author: "Palash Sharma", date: "Jan 28, 2026", readTime: "4 min", featured: false, color: "#7C3AED" },
  { id: 4, title: "5 Business Email Templates Every Professional Should Use", excerpt: "Professional email writing is critical in today's corporate world. Here are 5 ready-to-use templates for clear, impactful communication.", image: MAN_IMG, category: "Business English", author: "Palash Sharma", date: "Jan 20, 2026", readTime: "6 min", featured: false, color: "#059669" },
  { id: 5, title: "Interview English: 20 Power Phrases That Impress Any HR Manager", excerpt: "The right words can make or break a job interview. Learn 20 power phrases that demonstrate confidence and professionalism.", image: HERO_IMG, category: "Interview Tips", author: "Palash Sharma", date: "Jan 12, 2026", readTime: "7 min", featured: false, color: "#FF7A00" },
  { id: 6, title: "The 30-Day Spoken English Challenge: Transform Your Fluency", excerpt: "A structured, day-by-day English speaking challenge for busy professionals and students. 30 days, dramatic improvement guaranteed.", image: CERT_IMG, category: "Spoken English", author: "Palash Sharma", date: "Jan 05, 2026", readTime: "10 min", featured: false, color: "#0B3C5D" },
];

const categories = ["All", "Grammar Tips", "IELTS Tips", "Spoken English", "Business English", "Interview Tips"];

export function Blog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filtered = posts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "All" || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Thought Leadership</div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            English Learning <span style={{ color: "#FF7A00" }}>Blog</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "560px", margin: "0 auto 28px", lineHeight: 1.75 }}>
            Expert tips, IELTS strategies, grammar guides, and career communication insights — all crafted by our certified trainer.
          </p>
          {/* Search */}
          <div style={{ maxWidth: "480px", margin: "0 auto", position: "relative" }}>
            <Search style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", color: "#aaa" }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", paddingLeft: "48px", paddingRight: "16px", paddingTop: "14px", paddingBottom: "14px", borderRadius: "12px", border: "none", outline: "none", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", boxSizing: "border-box" }}
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb", padding: "16px", position: "sticky", top: "0", zIndex: 10 }}>
        <div className="max-w-7xl mx-auto" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: "7px 18px", borderRadius: "100px", border: "none", cursor: "pointer", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.82rem", backgroundColor: selectedCategory === cat ? "#FF7A00" : "#f1f5f9", color: selectedCategory === cat ? "#ffffff" : "#555", transition: "all 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section style={{ backgroundColor: "#f8fafc", padding: "64px 16px" }}>
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          {featured && (
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 8px 40px rgba(11,60,93,0.08)", marginBottom: "36px" }} className="grid grid-cols-1 lg:grid-cols-2">
              <div style={{ height: "320px", overflow: "hidden" }}>
                <ImageWithFallback src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              </div>
              <div style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <span style={{ backgroundColor: "#FF7A00", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.72rem", padding: "4px 12px", borderRadius: "100px" }}>Featured</span>
                  <span style={{ backgroundColor: "rgba(255,122,0,0.1)", color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.72rem", padding: "4px 12px", borderRadius: "100px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Tag style={{ width: "10px", height: "10px" }} /> {featured.category}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "1.5rem", lineHeight: 1.35, marginBottom: "12px" }}>{featured.title}</h2>
                <p style={{ color: "#666", lineHeight: 1.75, marginBottom: "20px", fontSize: "0.925rem" }}>{featured.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#888", fontSize: "0.8rem" }}>
                    <User style={{ width: "14px", height: "14px", color: "#FF7A00" }} /> {featured.author}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#888", fontSize: "0.8rem" }}>
                    <Clock style={{ width: "14px", height: "14px", color: "#FF7A00" }} /> {featured.readTime} read
                  </span>
                  <span style={{ color: "#aaa", fontSize: "0.8rem" }}>{featured.date}</span>
                </div>
                <button style={{ backgroundColor: "#0B3C5D", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "10px", padding: "12px 24px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", width: "fit-content" }} className="hover:opacity-90 transition-opacity">
                  Read Article <ArrowRight style={{ width: "15px", height: "15px" }} />
                </button>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.id} style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", transition: "all 0.3s" }} className="hover:shadow-xl hover:-translate-y-1">
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover" style={{ transition: "transform 0.4s" }} />
                </div>
                <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: `${post.color}12`, color: post.color, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.72rem", padding: "4px 12px", borderRadius: "100px", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Tag style={{ width: "9px", height: "9px" }} /> {post.category}
                    </span>
                    <span style={{ color: "#aaa", fontSize: "0.75rem", paddingTop: "4px" }}>{post.readTime} read</span>
                  </div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "1rem", lineHeight: 1.45, marginBottom: "10px", flex: 1 }}>{post.title}</h3>
                  <p style={{ color: "#777", fontSize: "0.86rem", lineHeight: 1.65, marginBottom: "16px" }}>{post.excerpt}</p>
                  <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "#aaa", fontSize: "0.78rem" }}>{post.date}</span>
                    <button style={{ color: post.color, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.82rem", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
                      Read More <ArrowRight style={{ width: "13px", height: "13px" }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>
              <p style={{ fontFamily: "'Poppins',sans-serif" }}>No articles match your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)", padding: "72px 16px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "10px" }}>
            Get Weekly English Tips
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "24px" }}>Join 2,000+ learners who receive free English improvement insights every week.</p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: 1, borderRadius: "10px", border: "none", padding: "13px 16px", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", outline: "none", minWidth: "200px" }} />
            <button style={{ backgroundColor: "#FF7A00", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "10px", padding: "13px 24px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }} className="hover:opacity-90 transition-opacity">
              Subscribe Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
