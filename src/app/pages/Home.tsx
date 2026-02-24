import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  CheckCircle, Star, Users, Award, ArrowRight, Play,
  Mic, TrendingUp, Briefcase, Target, Clock, Quote,
  ChevronLeft, ChevronRight, Send, BookOpen, Pencil,
  MessageSquare, Shield, Zap
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useAppointmentModal } from "../contexts/appointment-modal-context";

const TRAINER_IMG = "https://ik.imagekit.io/dvl5mhvik/WhatsApp%20Image%202026-02-23%20at%207.57.05%20PM.jpeg";
const HERO_IMG = "https://ik.imagekit.io/dvl5mhvik/Hero%20Img%20(1).jpg";
const WORKSHOP_IMG = "https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGFuZ3VhZ2UlMjB3b3Jrc2hvcCUyMHRyYWluaW5nJTIwZ3JvdXAlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE1OTgxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CORP_IMG = "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc3MTU5ODEzNnww&ixlib=rb-4.1.0&q=80&w=1080";
const CERT_IMG = "https://images.unsplash.com/photo-1770807188136-6c90c0859f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2VydGlmaWNhdGUlMjBhY2hpZXZlbWVudCUyMGRpcGxvbWElMjBhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc3MTU5ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080";
const DIVERSE_IMG = "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzE1OTgxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const WOMAN_IMG = "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwc21pbGluZyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcxNTk2MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const MAN_IMG = "https://images.unsplash.com/photo-1615724320397-9d4db10ec2a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTU3OTg3NHww&ixlib=rb-4.1.0&q=80&w=1080";
const BLOG_IMG = "https://images.unsplash.com/photo-1593444285563-4479fb28226e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGNvbnRlbnQlMjBlZHVjYXRpb258ZW58MXx8fHwxNzcxNTk2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  { icon: Mic, name: "Spoken English", desc: "Build daily conversational fluency and real-world confidence through structured practice.", duration: "3 Months", color: "#FF7A00" },
  { icon: TrendingUp, name: "IELTS Preparation", desc: "Band-targeted coaching across all four modules with weekly mock tests.", duration: "2 Months", color: "#0B3C5D" },
  { icon: Briefcase, name: "Business Communication", desc: "Emails, presentations, and client interaction for working professionals.", duration: "6 Weeks", color: "#7C3AED" },
  { icon: Target, name: "Interview Training", desc: "HR communication, body language coaching & live mock interview sessions.", duration: "4 Weeks", color: "#059669" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Software Engineer, Infosys", image: WOMAN_IMG, rating: 5, text: "Palash Training transformed my communication skills. I went from dreading client calls to confidently leading them. The structured approach and personalized feedback made all the difference." },
  { name: "Rahul Mehta", role: "MBA Student, NMIMS", image: MAN_IMG, rating: 5, text: "I scored 7.5 bands in IELTS on my first attempt after joining the preparation course here. The mock tests and targeted feedback were exactly what I needed." },
  { name: "Sneha Patel", role: "HR Manager, TCS", image: DIVERSE_IMG, rating: 5, text: "The business communication module elevated my professional presence completely. I now conduct board presentations with total confidence. A truly world-class experience." },
];

const galleryImages = [
  { src: WORKSHOP_IMG, caption: "Interactive Workshop Session" },
  { src: CORP_IMG, caption: "Corporate Training Program" },
  { src: CERT_IMG, caption: "Student Certification Ceremony" },
  { src: DIVERSE_IMG, caption: "Group Discussion Activity" },
];

const blogPosts = [
  { title: "10 Common Grammar Mistakes Indians Make & How to Fix Them", category: "Grammar Tips", date: "Feb 10, 2026", readTime: "5 min", image: BLOG_IMG },
  { title: "How to Crack IELTS with a 7+ Band Score on Your First Attempt", category: "IELTS Tips", date: "Feb 05, 2026", readTime: "8 min", image: WORKSHOP_IMG },
  { title: "Why Confidence Matters More Than Perfect Grammar in Spoken English", category: "Spoken English", date: "Jan 28, 2026", readTime: "4 min", image: DIVERSE_IMG },
];

const forumPosts = [
  { user: "Anjali M.", badge: "Student", topic: "Tips for IELTS Writing Task 2 — How I scored Band 7", replies: 14, time: "2 hours ago", approved: true },
  { user: "Rohan K.", badge: "Professional", topic: "How to handle telephonic HR interviews confidently?", replies: 8, time: "5 hours ago", approved: true },
  { user: "Divya S.", badge: "Student", topic: "Daily 5-minute spoken English exercises that actually work", replies: 21, time: "Yesterday", approved: true },
];

const courses = ["Spoken English", "IELTS Preparation", "Business Communication", "Interview Training"];

export function Home() {
  const navigate = useNavigate();
  const { openModal } = useAppointmentModal();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [sessionType, setSessionType] = useState<"demo" | "full">("demo");
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "" });
  const [hoveredViewPrograms, setHoveredViewPrograms] = useState(false);
  const [hoveredAllPrograms, setHoveredAllPrograms] = useState(false);
  const [hoveredCtaPrograms, setHoveredCtaPrograms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ═══════════════════════════════════════════════════════════
           HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section
        style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0f4d75 55%, #1a6194 100%)", minHeight: "90vh", position: "relative", overflow: "hidden" }}
        className="flex items-center"
      >
        {/* Decorative shapes */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,122,0,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <div
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,122,0,0.15)", border: "1px solid rgba(255,122,0,0.3)", borderRadius: "100px", padding: "6px 16px", marginBottom: "28px" }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF7A00", animation: "pulse 2s infinite" }} />
                <span style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>New Batches Starting Soon</span>
              </div>

              <h1
                style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", lineHeight: 1.12, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", marginBottom: "20px" }}
              >
                Master English.<br />
                Transform Your{" "}
                <span style={{ color: "#FF7A00", position: "relative" }}>
                  Confidence.
                  <svg style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "6px" }} viewBox="0 0 200 6" fill="none">
                    <path d="M0 5 Q50 0 100 4 Q150 8 200 3" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
                  </svg>
                </span>
              </h1>

              <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: "32px", maxWidth: "520px" }}>
                Expert-led English training for students, professionals, and job seekers. Speak fluently, present confidently, and achieve the career you deserve.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "40px", position: "relative", zIndex: 2 }}>
                <button
                  onClick={openModal}
                  style={{ backgroundColor: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "12px", boxShadow: "0 8px 25px rgba(255,122,0,0.4)", display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", color: "#ffffff", border: "none", cursor: "pointer", transition: "all 0.2s", position: "relative", zIndex: 2 }}
                  className="hover:opacity-90 hover:scale-105"
                >
                  Book Free Demo <ArrowRight style={{ width: "18px", height: "18px" }} />
                </button>
                <Link
                  to="/services"
                  onMouseEnter={() => setHoveredViewPrograms(true)}
                  onMouseLeave={() => setHoveredViewPrograms(false)}
                  style={{
                    border: "2px solid rgba(255,255,255,0.6)",
                    color: hoveredViewPrograms ? "#FF7A00" : "#ffffff",
                    backgroundColor: hoveredViewPrograms ? "#ffffff" : "transparent",
                    fontFamily: "'Poppins',sans-serif",
                    fontWeight: 700,
                    borderRadius: "12px",
                    padding: "14px 28px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    display: "inline-block",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  View Programs
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {[
                  { icon: Users, text: "1000+ Students Trained" },
                  { icon: Award, text: "5+ Years Experience" },
                  { icon: CheckCircle, text: "Certified English Trainer" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Icon style={{ width: "16px", height: "16px", color: "#FF7A00" }} />
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.875rem", fontWeight: 500 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="hidden lg:block relative">
              <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>
                <ImageWithFallback
                  src={HERO_IMG}
                  alt="Confident English speaker"
                  className="w-full object-cover"
                  style={{ height: "520px" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(11,60,93,0.5) 100%)" }} />
              </div>
              {/* Floating stat card */}
              <div
                style={{ position: "absolute", bottom: "28px", left: "-28px", backgroundColor: "#ffffff", borderRadius: "16px", padding: "16px 20px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div style={{ backgroundColor: "#dcfce7", width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle style={{ width: "22px", height: "22px", color: "#16a34a" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "0.95rem" }}>500+ Placed</p>
                  <p style={{ color: "#888", fontSize: "0.78rem" }}>in Top MNCs this year</p>
                </div>
              </div>
              {/* Rating card */}
              <div
                style={{ position: "absolute", top: "28px", right: "-20px", backgroundColor: "#0B3C5D", borderRadius: "14px", padding: "12px 18px", boxShadow: "0 8px 30px rgba(11,60,93,0.5)" }}
              >
                <div style={{ display: "flex", gap: "2px", marginBottom: "4px" }}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} style={{ width: "14px", height: "14px", color: "#FF7A00", fill: "#FF7A00" }} />)}
                </div>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#ffffff", fontSize: "1.1rem" }}>4.9 / 5.0</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           TRAINER INTRODUCTION
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image + Video */}
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 24px 70px rgba(11,60,93,0.18)" }}>
                <ImageWithFallback
                  src={TRAINER_IMG}
                  alt="Palash — Lead English Trainer"
                  className="w-full object-cover"
                  style={{ height: "520px" }}
                />
              </div>
              {/* Experience badge */}
              <div style={{ position: "absolute", top: "24px", left: "-24px", backgroundColor: "#FF7A00", borderRadius: "16px", padding: "16px 20px", boxShadow: "0 8px 30px rgba(255,122,0,0.45)" }} className="hidden md:block">
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "2rem", lineHeight: 1 }}>25+</p>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.8rem" }}>Years Experience</p>
              </div>
              {/* Video play button */}
              <button
                onClick={() => setShowVideo(true)}
                style={{ position: "absolute", bottom: "28px", right: "28px", backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "14px", padding: "14px 20px", boxShadow: "0 8px 30px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: "10px", border: "none", cursor: "pointer" }}
              >
                <div style={{ backgroundColor: "#FF7A00", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Play style={{ width: "18px", height: "18px", color: "#ffffff", fill: "#ffffff", marginLeft: "2px" }} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "0.85rem" }}>Watch Intro</p>
                  <p style={{ color: "#888", fontSize: "0.75rem" }}>2 min video</p>
                </div>
              </button>
            </div>

            {/* Content */}
            <div>
              <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                Meet Your Trainer
              </div>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.2, marginBottom: "6px" }}>
                Madhuri Bedekar
              </h2>
              <p style={{ color: "#FF7A00", fontFamily: "'Inter',sans-serif", fontWeight: 600, marginBottom: "20px" }}>
                Cambridge-Certified English Trainer & Communication Coach
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
                With over 25+ years of dedicated experience, Palash has helped 1,000+ students, professionals, and job seekers break language barriers and communicate with authentic confidence.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "28px" }}>
                His teaching philosophy centres on real-world application — not just grammar rules. Every session is designed to build practical fluency that you can use immediately, whether you're in a boardroom, an interview, or abroad.
              </p>

              {/* Certifications */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                {[
                  "Cambridge CELTA Certified Trainer",
                  "IELTS Certified Examiner",
                  "NLP Practitioner – Communication Focus",
                  "British Council Approved Curriculum",
                ].map((cert) => (
                  <div key={cert} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle style={{ width: "18px", height: "18px", color: "#FF7A00", flexShrink: 0 }} />
                    <span style={{ color: "#333", fontSize: "0.925rem" }}>{cert}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
                {[
                  { n: "1000+", l: "Students" },
                  { n: "98%", l: "Success Rate" },
                  { n: "4.9★", l: "Avg Rating" },
                ].map(({ n, l }) => (
                  <div key={l} style={{ backgroundColor: "#E8F1F8", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "1.4rem" }}>{n}</p>
                    <p style={{ color: "#666", fontSize: "0.8rem" }}>{l}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={openModal}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0B3C5D", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "12px", padding: "14px 28px", border: "none", cursor: "pointer" }}
                className="hover:opacity-90 transition-opacity"
              >
                Book a Session <ArrowRight style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div
            onClick={() => setShowVideo(false)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
          >
            <div style={{ backgroundColor: "#0B3C5D", borderRadius: "20px", padding: "40px", maxWidth: "560px", width: "100%", textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#FF7A00", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <Play style={{ width: "36px", height: "36px", color: "#fff", fill: "#fff", marginLeft: "4px" }} />
              </div>
              <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>Introduction Video</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontSize: "0.9rem" }}>Connect your YouTube channel video here to showcase your training approach.</p>
              <button onClick={() => setShowVideo(false)} style={{ backgroundColor: "#FF7A00", color: "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, border: "none", borderRadius: "10px", padding: "12px 28px", cursor: "pointer" }}>Close</button>
            </div>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════════
           SERVICES / PROGRAMS
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f8fafc", padding: "96px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Programs</div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", marginBottom: "12px" }}>
              Training Designed for <span style={{ color: "#FF7A00" }}>Real Results</span>
            </h2>
            <p style={{ color: "#666", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Each program is structured for measurable improvement — from beginner fluency to advanced professional communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isHov = hoveredService === i;
              return (
                <div
                  key={s.name}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    backgroundColor: isHov ? s.color : "#ffffff",
                    borderRadius: "16px",
                    border: isHov ? `2px solid ${s.color}` : "2px solid #e5e7eb",
                    boxShadow: isHov ? `0 20px 50px ${s.color}30` : "0 4px 20px rgba(0,0,0,0.05)",
                    transform: isHov ? "translateY(-8px)" : "translateY(0)",
                    transition: "all 0.3s ease",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ backgroundColor: isHov ? "rgba(255,255,255,0.2)" : `${s.color}15`, width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", transition: "all 0.3s" }}>
                    <Icon style={{ width: "24px", height: "24px", color: isHov ? "#ffffff" : s.color }} />
                  </div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: isHov ? "#ffffff" : "#0B3C5D", fontSize: "1.05rem", marginBottom: "10px" }}>{s.name}</h3>
                  <p style={{ color: isHov ? "rgba(255,255,255,0.85)" : "#666", fontSize: "0.875rem", lineHeight: 1.6, flex: 1, marginBottom: "18px" }}>{s.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: isHov ? "1px solid rgba(255,255,255,0.2)" : "1px solid #f0f0f0", paddingTop: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock style={{ width: "14px", height: "14px", color: isHov ? "rgba(255,255,255,0.8)" : s.color }} />
                      <span style={{ fontSize: "0.8rem", color: isHov ? "rgba(255,255,255,0.8)" : "#888" }}>{s.duration}</span>
                    </div>
                    <button
                      onClick={openModal}
                      style={{ fontSize: "0.8rem", fontWeight: 600, fontFamily: "'Poppins',sans-serif", color: isHov ? "#ffffff" : s.color, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      Enroll →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              to="/services"
              onMouseEnter={() => setHoveredAllPrograms(true)}
              onMouseLeave={() => setHoveredAllPrograms(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
                borderRadius: "12px",
                padding: "13px 28px",
                textDecoration: "none",
                border: "2px solid #0B3C5D",
                color: hoveredAllPrograms ? "#ffffff" : "#0B3C5D",
                backgroundColor: hoveredAllPrograms ? "#0B3C5D" : "transparent",
                transition: "all 0.2s",
              }}
            >
              View All Programs <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           BOOKING SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0f4d75 100%)", padding: "96px 16px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", backgroundColor: "rgba(255,122,0,0.08)" }} />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Limited Seats</div>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.2, marginBottom: "18px" }}>
                Start Your Learning Journey Today
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "28px" }}>
                Choose between a free demo session to experience our teaching style, or book a full appointment to start your course immediately.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["No commitment required for demo", "Personalized learning roadmap", "Flexible online & offline options", "Expert feedback from Day 1"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle style={{ width: "18px", height: "18px", color: "#FF7A00", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.925rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "36px", boxShadow: "0 24px 70px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", marginBottom: "6px", fontSize: "1.3rem" }}>Book My Session</h3>
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "24px" }}>Fill in your details and we'll confirm within 24 hours.</p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "Your full name" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "your@email.com" },
                  { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={form[f.name as keyof typeof form]}
                      onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                      style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", boxSizing: "border-box" }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>Select Course</label>
                  <select
                    required
                    value={form.course}
                    onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))}
                    style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter',sans-serif", backgroundColor: "#fff", boxSizing: "border-box" }}
                  >
                    <option value="">Choose a course</option>
                    {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Session Type */}
                <div>
                  <label style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "0.85rem", display: "block", marginBottom: "10px" }}>Session Type</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {(["demo", "full"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSessionType(type)}
                        style={{
                          padding: "10px",
                          borderRadius: "10px",
                          border: sessionType === type ? "2px solid #FF7A00" : "2px solid #e5e7eb",
                          backgroundColor: sessionType === type ? "rgba(255,122,0,0.07)" : "#fff",
                          fontFamily: "'Poppins',sans-serif",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: sessionType === type ? "#FF7A00" : "#666",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {type === "demo" ? "🎯 Free Demo" : "📅 Full Appointment"}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#FF7A00", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "12px", padding: "14px", fontSize: "1rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "4px" }}
                  className="hover:opacity-90 transition-opacity"
                >
                  <Send style={{ width: "18px", height: "18px" }} />
                  Book My Session
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           GALLERY PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Gallery</div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
              See Us in <span style={{ color: "#FF7A00" }}>Action</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredGallery(i)}
                onMouseLeave={() => setHoveredGallery(null)}
                style={{ position: "relative", borderRadius: "14px", overflow: "hidden", cursor: "pointer" }}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover"
                  style={{ height: "240px", transition: "transform 0.4s ease", transform: hoveredGallery === i ? "scale(1.07)" : "scale(1)" }}
                />
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: hoveredGallery === i ? "linear-gradient(180deg, transparent 30%, rgba(11,60,93,0.85) 100%)" : "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)",
                    transition: "all 0.3s",
                    display: "flex", alignItems: "flex-end", padding: "16px",
                  }}
                >
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#ffffff", fontSize: "0.85rem", opacity: hoveredGallery === i ? 1 : 0.7, transition: "opacity 0.3s" }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link
              to="/gallery"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #0B3C5D", color: "#0B3C5D", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "12px", padding: "12px 28px", textDecoration: "none" }}
              className="hover:bg-blue-900 hover:text-white transition-all"
            >
              View Full Gallery <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           BLOG PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f8fafc", padding: "96px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Thought Leadership</div>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Latest from Our <span style={{ color: "#FF7A00" }}>Blog</span>
              </h2>
            </div>
            <Link
              to="/blog"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}
              className="hover:underline"
            >
              View All Posts <ArrowRight style={{ width: "15px", height: "15px" }} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", transition: "all 0.3s", display: "flex", flexDirection: "column" }}
                className="hover:shadow-xl hover:-translate-y-1"
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover" style={{ transition: "transform 0.4s" }} />
                </div>
                <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <span style={{ backgroundColor: "rgba(255,122,0,0.1)", color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.75rem", padding: "4px 12px", borderRadius: "100px" }}>{post.category}</span>
                    <span style={{ color: "#aaa", fontSize: "0.75rem" }}>· {post.readTime} read</span>
                  </div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "1rem", lineHeight: 1.5, marginBottom: "14px", flex: 1 }}>{post.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0f0f0", paddingTop: "14px" }}>
                    <span style={{ color: "#aaa", fontSize: "0.8rem" }}>{post.date}</span>
                    <button style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer" }}>Read More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#E8F1F8", padding: "96px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Success Stories</div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
              What Our Students <span style={{ color: "#FF7A00" }}>Say</span>
            </h2>
          </div>

          <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "48px", boxShadow: "0 10px 50px rgba(11,60,93,0.1)", position: "relative" }}>
              <Quote style={{ width: "40px", height: "40px", color: "#FF7A00", opacity: 0.4, marginBottom: "20px" }} />
              <p style={{ color: "#333", lineHeight: 1.85, fontSize: "1.05rem", fontStyle: "italic", marginBottom: "28px" }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <ImageWithFallback
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="rounded-full object-cover flex-shrink-0"
                  style={{ width: "56px", height: "56px", border: "3px solid #FF7A00" }}
                />
                <div>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D" }}>{testimonials[currentTestimonial].name}</p>
                  <p style={{ color: "#888", fontSize: "0.85rem" }}>{testimonials[currentTestimonial].role}</p>
                  <div style={{ display: "flex", gap: "2px", marginTop: "4px" }}>
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} style={{ width: "14px", height: "14px", fill: "#FF7A00", color: "#FF7A00" }} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
              <button onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)} style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid #0B3C5D", backgroundColor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0B3C5D", transition: "all 0.2s" }} className="hover:bg-blue-900 hover:text-white hover:border-blue-900">
                <ChevronLeft style={{ width: "20px", height: "20px" }} />
              </button>
              <div style={{ display: "flex", gap: "8px" }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrentTestimonial(i)} style={{ width: i === currentTestimonial ? "28px" : "10px", height: "10px", borderRadius: "100px", backgroundColor: i === currentTestimonial ? "#FF7A00" : "#cbd5e1", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
                ))}
              </div>
              <button onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonials.length)} style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid #0B3C5D", backgroundColor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0B3C5D", transition: "all 0.2s" }} className="hover:bg-blue-900 hover:text-white hover:border-blue-900">
                <ChevronRight style={{ width: "20px", height: "20px" }} />
              </button>
            </div>

            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <Link to="/testimonials" style={{ color: "#0B3C5D", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }} className="hover:underline">
                Read All Testimonials <ArrowRight style={{ width: "15px", height: "15px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           COMMUNITY FORUM PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Community Forum</div>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.25, marginBottom: "16px" }}>
                Learn Together, <span style={{ color: "#FF7A00" }}>Grow Faster</span>
              </h2>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
                Join our moderated community forum where students, trainers, and professionals collaborate, share insights, and support each other's English learning journey.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                {[
                  { icon: Pencil, text: "Submit articles & writing practice" },
                  { icon: MessageSquare, text: "Participate in active discussions" },
                  { icon: Shield, text: "Admin-moderated for quality content" },
                  { icon: Zap, text: "Get feedback from expert trainers" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ backgroundColor: "rgba(255,122,0,0.1)", width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: "16px", height: "16px", color: "#FF7A00" }} />
                    </div>
                    <span style={{ color: "#333", fontSize: "0.925rem" }}>{text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/forum"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0B3C5D", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "12px", padding: "14px 28px", textDecoration: "none" }}
                className="hover:opacity-90 transition-opacity"
              >
                Join Community <ArrowRight style={{ width: "16px", height: "16px" }} />
              </Link>
            </div>

            {/* Right: Mock Forum */}
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "20px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
              {/* Forum Header */}
              <div style={{ backgroundColor: "#0B3C5D", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <MessageSquare style={{ width: "18px", height: "18px", color: "#FF7A00" }} />
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#ffffff", fontSize: "0.9rem" }}>Community Forum</span>
                </div>
                <span style={{ backgroundColor: "rgba(255,122,0,0.25)", color: "#FF7A00", fontSize: "0.75rem", fontWeight: 600, padding: "3px 10px", borderRadius: "100px" }}>LIVE</span>
              </div>
              {/* Posts */}
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {forumPosts.map((post, i) => (
                  <div key={i} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "14px 16px", border: "1px solid #e5e7eb" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#E8F1F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Users style={{ width: "14px", height: "14px", color: "#0B3C5D" }} />
                      </div>
                      <div>
                        <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "#0B3C5D", fontSize: "0.82rem" }}>{post.user}</span>
                        <span style={{ backgroundColor: "#E8F1F8", color: "#0B3C5D", fontSize: "0.7rem", fontWeight: 600, padding: "1px 8px", borderRadius: "100px", marginLeft: "6px" }}>{post.badge}</span>
                        {post.approved && <span style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#16a34a", fontSize: "0.7rem", fontWeight: 600, padding: "1px 8px", borderRadius: "100px", marginLeft: "4px" }}>✓ Approved</span>}
                      </div>
                    </div>
                    <p style={{ color: "#333", fontSize: "0.875rem", lineHeight: 1.5, marginBottom: "8px" }}>{post.topic}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ color: "#aaa", fontSize: "0.75rem" }}>{post.time}</span>
                      <span style={{ color: "#aaa", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "4px" }}>
                        <MessageSquare style={{ width: "12px", height: "12px" }} /> {post.replies} replies
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px 16px 16px", textAlign: "center" }}>
                <Link to="/forum" style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                  View All Discussions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════��═════════════════════
           CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #FF7A00 0%, #ff9500 100%)", padding: "80px 16px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "-40px", width: "240px", height: "240px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)" }} />
        <div className="max-w-4xl mx-auto text-center" style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "2px", marginBottom: "16px" }}>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} style={{ width: "22px", height: "22px", fill: "#ffffff", color: "#ffffff" }} />)}
          </div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.15, marginBottom: "16px" }}>
            Ready to Speak with Confidence?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "36px", maxWidth: "600px", margin: "0 auto 36px" }}>
            Join 1,000+ students who've already transformed their English and unlocked new career opportunities with Palash Training Institute.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={openModal}
              style={{ backgroundColor: "#0B3C5D", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "12px", padding: "16px 36px", fontSize: "1rem", boxShadow: "0 8px 25px rgba(11,60,93,0.4)", border: "none", cursor: "pointer" }}
              className="hover:opacity-90 hover:scale-105 transition-all"
            >
              Book Your Free Demo Today
            </button>
            <Link
              to="/services"
              onMouseEnter={() => setHoveredCtaPrograms(true)}
              onMouseLeave={() => setHoveredCtaPrograms(false)}
              style={{
                backgroundColor: hoveredCtaPrograms ? "#ffffff" : "rgba(255,255,255,0.2)",
                color: hoveredCtaPrograms ? "#EA6500" : "#ffffff",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
                borderRadius: "12px",
                padding: "16px 28px",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "all 0.2s",
                display: "inline-block",
              }}
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
