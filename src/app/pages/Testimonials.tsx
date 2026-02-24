import { Star, Quote, Users, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const WOMAN_IMG = "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwc21pbGluZyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcxNTk2MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const MAN_IMG = "https://images.unsplash.com/photo-1615724320397-9d4db10ec2a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTU3OTg3NHww&ixlib=rb-4.1.0&q=80&w=1080";
const DIVERSE_IMG = "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzE1OTgxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const HERO_IMG = "https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB5b3VuZyUyMHdvbWFuJTIwcHVibGljJTIwc3BlYWtpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzcxNTk4MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const testimonials = [
  { name: "Priya Sharma", role: "Software Engineer", company: "Infosys", image: WOMAN_IMG, course: "Spoken English", rating: 5, text: "PalashTraining completely transformed my communication skills. I struggled with English presentations before joining, but now I confidently lead client calls with teams across the globe. The structured approach and personalized feedback sessions made all the difference. Best investment I've made in my career!" },
  { name: "Rahul Mehta", role: "MBA Student", company: "NMIMS University", image: MAN_IMG, course: "IELTS Preparation", rating: 5, text: "I scored 7.5 bands in IELTS on my very first attempt, and I owe it entirely to this program. The mock tests were real exam-level, the feedback was specific and actionable. Palash sir has an incredible ability to identify weak areas and fix them efficiently." },
  { name: "Sneha Patel", role: "HR Manager", company: "TCS", image: DIVERSE_IMG, course: "Business Communication", rating: 5, text: "As an HR professional, I thought my English was already at a professional level — this course proved me wrong in the best way. The business communication module elevated my confidence in boardroom presentations, client meetings, and leadership communication. Absolutely world-class." },
  { name: "Vikram Nair", role: "Product Manager", company: "Flipkart", image: HERO_IMG, course: "Interview Training", rating: 5, text: "I had failed 3 interviews in a row because of poor communication. After the Interview Training course, I cracked Flipkart's PM round on my first attempt. The mock interviews and STAR method coaching were game-changers. I highly recommend this to every job seeker." },
  { name: "Ananya Roy", role: "IELTS Graduate", company: "University of Melbourne", image: WOMAN_IMG, course: "IELTS Preparation", rating: 5, text: "From Band 5.5 to Band 8.0 in just 2 months! The individual attention and targeted practice for each module (L/R/W/S) was exceptional. I'm now studying in Australia because of this program. Thank you, Palash Training!" },
  { name: "Deepak Verma", role: "Sales Lead", company: "HDFC Bank", image: MAN_IMG, course: "Business Communication", rating: 5, text: "The business communication course helped me close 40% more deals in my first quarter after completing the program. I learned how to communicate value clearly, handle objections confidently, and build rapport with clients in English — skills that directly impact my revenue." },
];

const categories = ["All", "Spoken English", "IELTS Preparation", "Business Communication", "Interview Training"];

const stats = [
  { icon: Users, number: "1,000+", label: "Students Trained" },
  { icon: Star, number: "4.9/5", label: "Average Rating" },
  { icon: Award, number: "98%", label: "Success Rate" },
  { icon: TrendingUp, number: "500+", label: "Career Breakthroughs" },
];

const courseColors: Record<string, string> = {
  "Spoken English": "#FF7A00",
  "IELTS Preparation": "#0B3C5D",
  "Business Communication": "#7C3AED",
  "Interview Training": "#059669",
};

export function Testimonials() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div style={{ color: "#FF7A00", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Student Stories</div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            Real Results, Real <span style={{ color: "#FF7A00" }}>People</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75 }}>
            Over 1,000 students and professionals have transformed their English and careers through Palash Training Institute.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#ffffff", padding: "48px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, number, label }) => (
              <div key={label} style={{ textAlign: "center", padding: "24px", borderRadius: "16px", backgroundColor: "#f8fafc", border: "1px solid #e5e7eb" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255,122,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <Icon style={{ width: "22px", height: "22px", color: "#FF7A00" }} />
                </div>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#0B3C5D", fontSize: "1.8rem" }}>{number}</p>
                <p style={{ color: "#888", fontSize: "0.85rem" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section style={{ backgroundColor: "#f8fafc", padding: "80px 16px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const courseColor = courseColors[t.course] || "#FF7A00";
              return (
                <div
                  key={i}
                  style={{ backgroundColor: "#ffffff", borderRadius: "18px", border: "1px solid #e5e7eb", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", padding: "28px", display: "flex", flexDirection: "column", transition: "all 0.3s" }}
                  className="hover:shadow-xl hover:-translate-y-1"
                >
                  <div style={{ display: "flex", gap: "1px", marginBottom: "16px" }}>
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} style={{ width: "16px", height: "16px", fill: "#FF7A00", color: "#FF7A00" }} />)}
                  </div>
                  <Quote style={{ width: "28px", height: "28px", color: courseColor, opacity: 0.3, marginBottom: "10px" }} />
                  <p style={{ color: "#444", lineHeight: 1.78, fontSize: "0.915rem", flex: 1, marginBottom: "20px", fontStyle: "italic" }}>
                    "{t.text}"
                  </p>
                  <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <ImageWithFallback
                      src={t.image}
                      alt={t.name}
                      className="rounded-full object-cover flex-shrink-0"
                      style={{ width: "48px", height: "48px", border: `3px solid ${courseColor}` }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#0B3C5D", fontSize: "0.9rem" }}>{t.name}</p>
                      <p style={{ color: "#888", fontSize: "0.78rem" }}>{t.role} · {t.company}</p>
                    </div>
                    <span style={{ backgroundColor: `${courseColor}15`, color: courseColor, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "100px", whiteSpace: "nowrap" }}>
                      {t.course}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #FF7A00 0%, #ff9500 100%)", padding: "72px 16px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginBottom: "12px" }}>
          Your Success Story Starts Here
        </h2>
        <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "28px", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto 28px" }}>
          Join thousands of students who've transformed their communication and careers with Palash Training Institute.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" style={{ backgroundColor: "#0B3C5D", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, borderRadius: "12px", padding: "15px 32px", textDecoration: "none", fontSize: "1rem" }} className="hover:opacity-90 transition-opacity">
            Book Your Free Demo
          </Link>
          <Link to="/services" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff", fontFamily: "'Poppins',sans-serif", fontWeight: 600, borderRadius: "12px", padding: "15px 28px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.5)" }} className="hover:bg-white hover:text-orange-600 transition-all">
            View Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
