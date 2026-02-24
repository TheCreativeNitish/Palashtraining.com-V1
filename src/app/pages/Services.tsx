import { useState } from "react";
import { Link } from "react-router";
import { Mic, TrendingUp, Briefcase, Target, Clock, Users, CheckCircle, ArrowRight, Star, BookOpen } from "lucide-react";
import { useAppointmentModal } from "../contexts/appointment-modal-context";

const services = [
  {
    icon: Mic,
    name: "Spoken English",
    tagline: "From Hesitation to Fluency",
    color: "#FF7A00",
    price: "₹4,999",
    duration: "3 Months",
    sessions: "24 Classes",
    batchSize: "Max 10",
    level: "Beginner – Advanced",
    rating: 4.9,
    students: 450,
    badge: "Most Popular",
    description: "A comprehensive program designed to help you speak English with natural confidence. Built around real conversations, role-plays, and daily speaking exercises.",
    outcomes: ["Confident daily conversation", "Accent reduction & pronunciation", "Vocabulary expansion", "Group & public speaking practice", "Real-world scenario simulations", "Error correction & feedback loops"],
    forWhom: ["College students", "First-time English learners", "Job seekers", "Anyone wanting fluency"],
  },
  {
    icon: TrendingUp,
    name: "IELTS Preparation",
    tagline: "Achieve Your Target Band Score",
    color: "#0B3C5D",
    price: "₹7,999",
    duration: "2 Months",
    sessions: "16 Classes",
    batchSize: "Max 8",
    level: "Intermediate – Advanced",
    rating: 4.8,
    students: 280,
    badge: "High Demand",
    description: "A results-driven IELTS prep course covering all four modules with strategic approaches, timed practice, and expert band-improvement techniques.",
    outcomes: ["Full syllabus: Listening, Reading, Writing, Speaking", "Weekly full-length mock tests", "Writing Task 1 & 2 scoring & feedback", "Speaking cue card simulations", "Time management strategies", "Band 7+ achievement roadmap"],
    forWhom: ["Study abroad aspirants", "PR & immigration seekers", "Working professionals", "University applicants"],
  },
  {
    icon: Briefcase,
    name: "Business Communication",
    tagline: "Lead Every Professional Interaction",
    color: "#7C3AED",
    price: "₹5,499",
    duration: "6 Weeks",
    sessions: "12 Classes",
    batchSize: "Max 12",
    level: "Working Professionals",
    rating: 4.9,
    students: 175,
    badge: null,
    description: "Designed for professionals who need to communicate more effectively at work — from writing powerful emails to facilitating boardroom discussions.",
    outcomes: ["Professional email & report writing", "Meeting facilitation skills", "Client communication techniques", "Presentation delivery mastery", "Business vocabulary expansion", "Video call & telephonic etiquette"],
    forWhom: ["IT professionals", "Sales & marketing teams", "Managers & team leads", "Corporate executives"],
  },
  {
    icon: Target,
    name: "Interview Training",
    tagline: "Crack Every Interview with Confidence",
    color: "#059669",
    price: "₹3,999",
    duration: "4 Weeks",
    sessions: "8 Classes",
    batchSize: "Max 8",
    level: "Job Seekers",
    rating: 5.0,
    students: 320,
    badge: "New Batch",
    description: "A specialized crash course for job seekers that focuses on communication in HR rounds, GD rounds, and final technical interviews.",
    outcomes: ["HR interview question mastery", "Body language coaching", "STAR method for structured answers", "Live mock interview sessions", "Salary negotiation communication", "Personal elevator pitch development"],
    forWhom: ["Fresh graduates", "Career changers", "Mid-career professionals", "MBA aspirants"],
  },
];

const faqs = [
  { q: "Are classes online or offline?", a: "We offer both in-person classes at our Mumbai training center and live online sessions. You can choose your preferred mode at the time of enrollment." },
  { q: "What batch sizes do you maintain?", a: "We maintain small batches (8–12 students) to ensure personalized attention and meaningful feedback from the trainer in every session." },
  { q: "Can complete beginners join?", a: "Absolutely. Our Spoken English program starts from fundamentals. We assess your current level during the free demo and customize your roadmap accordingly." },
  { q: "What are the available timings?", a: "Morning (7–9 AM), afternoon (1–3 PM), evening (6–8 PM), and weekend batches are all available to accommodate varied schedules." },
  { q: "Is there a free trial class?", a: "Yes! We offer a free demo class for all programs so you can experience our teaching quality before committing to enrollment." },
];

export function Services() {
  const { openModal } = useAppointmentModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Programs</div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            Programs Built for <span style={{ color: "#FF7A00" }}>Your Goals</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Every course is designed by a certified expert and structured for real, measurable improvement in your English communication.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ backgroundColor: "#f8fafc", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isExp = expanded === i;
            return (
              <div key={s.name} style={{ backgroundColor: "#ffffff", borderRadius: "20px", border: `2px solid ${isExp ? s.color : "#e5e7eb"}`, boxShadow: isExp ? `0 20px 60px ${s.color}18` : "0 4px 20px rgba(0,0,0,0.05)", overflow: "hidden", transition: "all 0.3s" }}>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left color panel */}
                  <div style={{ backgroundColor: s.color, padding: "36px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      {s.badge && <div style={{ backgroundColor: "rgba(255,255,255,0.2)", display: "inline-block", padding: "4px 12px", borderRadius: "100px", color: "#ffffff", fontSize: "0.75rem", fontWeight: 600, fontFamily: "'Poppins',sans-serif", marginBottom: "16px" }}>{s.badge}</div>}
                      <div style={{ backgroundColor: "rgba(255,255,255,0.2)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                        <Icon style={{ width: "26px", height: "26px", color: "#ffffff" }} />
                      </div>
                      <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "1.5rem", marginBottom: "6px" }}>{s.name}</h2>
                      <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", marginBottom: "16px" }}>{s.tagline}</p>
                      <div style={{ display: "flex", gap: "2px", marginBottom: "6px" }}>
                        {Array.from({ length: 5 }).map((_, j) => <Star key={j} style={{ width: "14px", height: "14px", fill: "#fff", color: "#fff" }} />)}
                        <span style={{ color: "#fff", fontSize: "0.85rem", marginLeft: "4px", fontWeight: 600 }}>{s.rating}</span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem" }}>{s.students}+ enrolled</p>
                    </div>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "14px", padding: "16px", marginTop: "20px" }}>
                      <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "2rem" }}>{s.price}</p>
                      <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem" }}>per student</p>
                    </div>
                  </div>

                  {/* Middle */}
                  <div style={{ padding: "28px", borderRight: "1px solid #f0f0f0" }}>
                    <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", marginBottom: "12px" }}>About This Program</h3>
                    <p style={{ color: "#666", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: "20px" }}>{s.description}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {[
                        { icon: Clock, val: s.duration },
                        { icon: BookOpen, val: s.sessions },
                        { icon: Users, val: s.batchSize },
                        { icon: Target, val: s.level },
                      ].map(({ icon: I, val }) => (
                        <div key={val} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <I style={{ width: "15px", height: "15px", color: s.color, flexShrink: 0 }} />
                          <span style={{ color: "#555", fontSize: "0.83rem" }}>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div style={{ padding: "28px", display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", marginBottom: "12px" }}>What You'll Learn</h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                      {s.outcomes.map((o) => (
                        <li key={o} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                          <CheckCircle style={{ width: "16px", height: "16px", color: s.color, flexShrink: 0, marginTop: "2px" }} />
                          <span style={{ color: "#444", fontSize: "0.86rem" }}>{o}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <button onClick={openModal} style={{ backgroundColor: s.color, color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "10px", padding: "12px", border: "none", cursor: "pointer", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }} className="hover:opacity-90 transition-opacity">
                        Enroll Now <ArrowRight style={{ width: "15px", height: "15px" }} />
                      </button>
                      <button onClick={openModal} style={{ border: `2px solid ${s.color}`, color: s.color, fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "10px", padding: "10px", background: "transparent", cursor: "pointer", textAlign: "center" }} className="hover:opacity-70 transition-opacity">
                        Book Free Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 16px" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>FAQ</div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Frequently Asked <span style={{ color: "#FF7A00" }}>Questions</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: `2px solid ${openFaq === i ? "#FF7A00" : "#e5e7eb"}`, borderRadius: "14px", overflow: "hidden", transition: "border-color 0.2s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}>
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#0B3C5D" }}>{f.q}</span>
                  <span style={{ color: "#FF7A00", fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, marginLeft: "12px" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 20px 18px" }}><p style={{ color: "#666", lineHeight: 1.75, fontSize: "0.92rem" }}>{f.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #FF7A00 0%, #ff9500 100%)", padding: "72px 16px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "12px" }}>Not Sure Which Program Fits You?</h2>
        <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "28px", fontSize: "1.05rem" }}>Let our trainer guide you to the perfect learning path — completely free.</p>
        <Link to="/contact" style={{ backgroundColor: "#0B3C5D", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "12px", padding: "15px 36px", textDecoration: "none", fontSize: "1rem", display: "inline-block" }} className="hover:opacity-90 transition-opacity shadow-lg">
          Get Free Counselling
        </Link>
      </section>
    </div>
  );
}
