import { useState } from "react";
import { Link } from "react-router";
import { MessageSquare, Users, Shield, ChevronUp, Clock, Tag, Plus, Search, CheckCircle } from "lucide-react";

const categories = ["All Topics", "Spoken English", "IELTS Tips", "Business English", "Grammar", "Interview Skills", "Success Stories"];

const threads = [
  { id: 1, category: "IELTS Tips", title: "Tips for IELTS Writing Task 2 — How I scored Band 7.5", author: "Anjali M.", badge: "Student", time: "2 hours ago", replies: 14, votes: 32, pinned: true, approved: true, excerpt: "I've been struggling with Task 2 essays for weeks. Here are the exact strategies that helped me cross the 7.5 band threshold in my exam last week..." },
  { id: 2, category: "Interview Skills", title: "How to handle telephonic HR interviews confidently?", author: "Rohan K.", badge: "Professional", time: "5 hours ago", replies: 8, votes: 19, pinned: false, approved: true, excerpt: "I have a telephonic round next Monday and I've been panicking. Looking for tips on tone, pace, and how to structure answers clearly..." },
  { id: 3, category: "Spoken English", title: "Daily 5-minute spoken English exercises that actually work", author: "Divya S.", badge: "Student", time: "Yesterday", replies: 21, votes: 47, pinned: true, approved: true, excerpt: "After 3 months of training, I've developed a simple 5-minute daily routine that dramatically improved my fluency. Sharing it here for everyone..." },
  { id: 4, category: "Grammar", title: "The difference between 'Will' and 'Going to' — explained simply", author: "Palash Sharma", badge: "Trainer", time: "2 days ago", replies: 35, votes: 76, pinned: false, approved: true, excerpt: "One of the most common mistakes I see students make. Let me break down these two forms with simple examples you'll never forget..." },
  { id: 5, category: "Success Stories", title: "Got my dream job at Deloitte — sharing my interview preparation journey", author: "Karthik N.", badge: "Alumni", time: "3 days ago", replies: 28, votes: 91, pinned: false, approved: true, excerpt: "6 months ago I couldn't complete a single English sentence in an interview. Today I have an offer letter from Deloitte. Here's what changed..." },
  { id: 6, category: "Business English", title: "Email templates for following up with clients professionally", author: "Meera J.", badge: "Professional", time: "4 days ago", replies: 12, votes: 38, pinned: false, approved: true, excerpt: "Professional email follow-ups are an art. I've compiled 5 templates that have helped me maintain strong client relationships without being pushy..." },
];

const stats = [
  { icon: Users, label: "Members", value: "2,400+" },
  { icon: MessageSquare, label: "Discussions", value: "1,200+" },
  { icon: Shield, label: "Moderated Posts", value: "100%" },
  { icon: CheckCircle, label: "Success Stories", value: "350+" },
];

const badgeColors: Record<string, { bg: string; text: string }> = {
  Trainer: { bg: "#0B3C5D", text: "#ffffff" },
  Alumni: { bg: "#FF7A00", text: "#ffffff" },
  Student: { bg: "#E8F1F8", text: "#0B3C5D" },
  Professional: { bg: "#f0fdf4", text: "#16a34a" },
};

export function Forum() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", category: "", content: "" });

  const filtered = threads.filter((t) => {
    const matchCat = activeCategory === "All Topics" || t.category === activeCategory;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Community Hub</div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            The Palash Learning <span style={{ color: "#FF7A00" }}>Forum</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75, marginBottom: "32px" }}>
            A moderated community where students, professionals, and trainers collaborate, share knowledge, and grow together.
          </p>
          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginBottom: "4px" }}>
                  <Icon style={{ width: "16px", height: "16px", color: "#FF7A00" }} />
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "1.3rem" }}>{value}</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Forum */}
      <section style={{ backgroundColor: "#f8fafc", padding: "60px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Post Button */}
              <button
                onClick={() => setShowForm(true)}
                style={{ backgroundColor: "#FF7A00", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "12px", padding: "14px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 4px 15px rgba(255,122,0,0.35)", width: "100%" }}
              >
                <Plus style={{ width: "18px", height: "18px" }} /> Start a Discussion
              </button>

              {/* Categories */}
              <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #f0f0f0" }}>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "0.9rem" }}>Categories</p>
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{ width: "100%", padding: "11px 20px", textAlign: "left", border: "none", borderLeft: activeCategory === cat ? "3px solid #FF7A00" : "3px solid transparent", backgroundColor: activeCategory === cat ? "rgba(255,122,0,0.06)" : "transparent", color: activeCategory === cat ? "#FF7A00" : "#555", fontFamily: "'Inter',sans-serif", fontWeight: activeCategory === cat ? 600 : 400, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.15s" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Community Guidelines */}
              <div style={{ backgroundColor: "#E8F1F8", borderRadius: "16px", padding: "20px", border: "1px solid #cce0ee" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <Shield style={{ width: "18px", height: "18px", color: "#0B3C5D" }} />
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "0.875rem" }}>Community Rules</p>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Be respectful & constructive", "Post in English only", "No spam or self-promotion", "All posts need admin approval", "Stay on topic"].map((rule) => (
                    <li key={rule} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                      <CheckCircle style={{ width: "13px", height: "13px", color: "#0B3C5D", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#555", fontSize: "0.8rem" }}>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search */}
              <div style={{ position: "relative", marginBottom: "20px" }}>
                <Search style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", color: "#aaa" }} />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: "100%", paddingLeft: "48px", paddingRight: "16px", paddingTop: "13px", paddingBottom: "13px", borderRadius: "12px", border: "2px solid #e5e7eb", outline: "none", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", backgroundColor: "#ffffff", boxSizing: "border-box" }}
                />
              </div>

              {/* Threads */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {filtered.map((thread) => {
                  const bc = badgeColors[thread.badge] || badgeColors.Student;
                  return (
                    <div key={thread.id} style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: `1px solid ${thread.pinned ? "#FF7A00" : "#e5e7eb"}`, padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transition: "all 0.2s" }} className="hover:shadow-md">
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                        {/* Votes */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", minWidth: "40px" }}>
                          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa" }} className="hover:text-orange-500 transition-colors">
                            <ChevronUp style={{ width: "20px", height: "20px" }} />
                          </button>
                          <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "0.9rem" }}>{thread.votes}</span>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                            {thread.pinned && <span style={{ backgroundColor: "rgba(255,122,0,0.12)", color: "#FF7A00", fontSize: "0.7rem", fontWeight: 700, padding: "2px 10px", borderRadius: "100px" }}>📌 Pinned</span>}
                            <span style={{ backgroundColor: "#f1f5f9", color: "#555", fontSize: "0.72rem", padding: "2px 10px", borderRadius: "100px", display: "flex", alignItems: "center", gap: "4px" }}>
                              <Tag style={{ width: "10px", height: "10px" }} /> {thread.category}
                            </span>
                            {thread.approved && <span style={{ backgroundColor: "rgba(34,197,94,0.1)", color: "#16a34a", fontSize: "0.7rem", fontWeight: 600, padding: "2px 10px", borderRadius: "100px" }}>✓ Approved</span>}
                          </div>
                          <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "1rem", marginBottom: "6px", lineHeight: 1.4 }}>{thread.title}</h3>
                          <p style={{ color: "#777", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "12px" }}>{thread.excerpt}</p>
                          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                              <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#E8F1F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Users style={{ width: "12px", height: "12px", color: "#0B3C5D" }} />
                              </div>
                              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, color: "#333", fontSize: "0.8rem" }}>{thread.author}</span>
                              <span style={{ backgroundColor: bc.bg, color: bc.text, fontSize: "0.68rem", fontWeight: 700, padding: "2px 8px", borderRadius: "100px" }}>{thread.badge}</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#aaa" }}>
                              <Clock style={{ width: "12px", height: "12px" }} />
                              <span style={{ fontSize: "0.78rem" }}>{thread.time}</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#aaa" }}>
                              <MessageSquare style={{ width: "12px", height: "12px" }} />
                              <span style={{ fontSize: "0.78rem" }}>{thread.replies} replies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {filtered.length === 0 && (
                  <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>
                    <MessageSquare style={{ width: "40px", height: "40px", margin: "0 auto 12px", opacity: 0.4 }} />
                    <p style={{ fontFamily: "'Poppins',sans-serif" }}>No discussions found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Post Modal */}
      {showForm && (
        <div onClick={() => setShowForm(false)} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "32px", maxWidth: "540px", width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", marginBottom: "6px", fontSize: "1.3rem" }}>Start a Discussion</h3>
            <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "20px" }}>All posts are reviewed by our admin team before publishing.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>Topic Title</label>
                <input type="text" placeholder="What would you like to discuss?" value={newPost.title} onChange={(e) => setNewPost((p) => ({ ...p, title: e.target.value }))} style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>Category</label>
                <select value={newPost.category} onChange={(e) => setNewPost((p) => ({ ...p, category: e.target.value }))} style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", backgroundColor: "#fff", boxSizing: "border-box" }}>
                  <option value="">Select a category</option>
                  {categories.slice(1).map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>Your Post</label>
                <textarea rows={4} placeholder="Share your thoughts, questions, or tips..." value={newPost.content} onChange={(e) => setNewPost((p) => ({ ...p, content: e.target.value }))} style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                <button onClick={() => setShowForm(false)} style={{ flex: 1, border: "2px solid #e5e7eb", backgroundColor: "#fff", color: "#666", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "10px", padding: "12px", cursor: "pointer" }}>Cancel</button>
                <button onClick={() => setShowForm(false)} style={{ flex: 1, backgroundColor: "#FF7A00", color: "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "10px", padding: "12px", border: "none", cursor: "pointer" }}>Submit for Review</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
