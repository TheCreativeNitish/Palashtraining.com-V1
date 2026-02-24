import { useState } from "react";
import { useNavigate } from "react-router";
import { Send } from "lucide-react";

const courses = [
    "Spoken English",
    "IELTS Preparation",
    "Business Communication",
    "Interview Training",
    "Not sure yet",
];

interface BookingFormProps {
    /** Called after a successful submit (e.g. close the modal before navigating) */
    onSuccess?: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
    const [sessionType, setSessionType] = useState<"demo" | "full">("demo");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSuccess?.();
        void navigate("/thank-you");
    };

    return (
        <>
            <h2
                style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontWeight: 800,
                    color: "#0B3C5D",
                    fontSize: "1.6rem",
                    marginBottom: "6px",
                }}
            >
                Book My Session
            </h2>
            <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "28px" }}>
                Fill out the form and our team will reach out within 24 hours to confirm your booking.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name" },
                        { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    ].map((f) => (
                        <div key={f.name}>
                            <label
                                style={{
                                    fontFamily: "'Poppins',sans-serif",
                                    fontWeight: 600,
                                    color: "#1E1E1E",
                                    fontSize: "0.875rem",
                                    display: "block",
                                    marginBottom: "6px",
                                }}
                            >
                                {f.label}
                            </label>
                            <input
                                type={f.type}
                                placeholder={f.placeholder}
                                required
                                value={form[f.name as keyof typeof form]}
                                onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                                style={{
                                    width: "100%",
                                    border: "2px solid #e5e7eb",
                                    borderRadius: "10px",
                                    padding: "11px 14px",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                    fontFamily: "'Inter',sans-serif",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <label
                        style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontWeight: 600,
                            color: "#1E1E1E",
                            fontSize: "0.875rem",
                            display: "block",
                            marginBottom: "6px",
                        }}
                    >
                        Email Address *
                    </label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        style={{
                            width: "100%",
                            border: "2px solid #e5e7eb",
                            borderRadius: "10px",
                            padding: "11px 14px",
                            fontSize: "0.9rem",
                            outline: "none",
                            fontFamily: "'Inter',sans-serif",
                            boxSizing: "border-box",
                        }}
                    />
                </div>

                <div>
                    <label
                        style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontWeight: 600,
                            color: "#1E1E1E",
                            fontSize: "0.875rem",
                            display: "block",
                            marginBottom: "6px",
                        }}
                    >
                        Preferred Course *
                    </label>
                    <select
                        required
                        value={form.course}
                        onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))}
                        style={{
                            width: "100%",
                            border: "2px solid #e5e7eb",
                            borderRadius: "10px",
                            padding: "11px 14px",
                            fontSize: "0.9rem",
                            outline: "none",
                            fontFamily: "'Inter',sans-serif",
                            backgroundColor: "#fff",
                            boxSizing: "border-box",
                        }}
                    >
                        <option value="">Select a course</option>
                        {courses.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Session Type */}
                <div>
                    <label
                        style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontWeight: 600,
                            color: "#1E1E1E",
                            fontSize: "0.875rem",
                            display: "block",
                            marginBottom: "10px",
                        }}
                    >
                        Session Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {(["demo", "full"] as const).map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setSessionType(type)}
                                style={{
                                    padding: "13px 16px",
                                    borderRadius: "12px",
                                    border: sessionType === type ? "2px solid #FF7A00" : "2px solid #e5e7eb",
                                    backgroundColor: sessionType === type ? "rgba(255,122,0,0.06)" : "#fff",
                                    fontFamily: "'Poppins',sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.875rem",
                                    color: sessionType === type ? "#FF7A00" : "#666",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                            >
                                {type === "demo" ? "🎯 Free Demo Class" : "📅 Full Enrollment"}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label
                        style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontWeight: 600,
                            color: "#1E1E1E",
                            fontSize: "0.875rem",
                            display: "block",
                            marginBottom: "6px",
                        }}
                    >
                        Message (Optional)
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Share your goals or any questions you have..."
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                        style={{
                            width: "100%",
                            border: "2px solid #e5e7eb",
                            borderRadius: "10px",
                            padding: "11px 14px",
                            fontSize: "0.9rem",
                            outline: "none",
                            fontFamily: "'Inter',sans-serif",
                            resize: "none",
                            boxSizing: "border-box",
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: "#FF7A00",
                        color: "#ffffff",
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: 700,
                        borderRadius: "12px",
                        padding: "15px",
                        fontSize: "1rem",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        boxShadow: "0 8px 25px rgba(255,122,0,0.35)",
                    }}
                    className="hover:opacity-90 transition-opacity"
                >
                    <Send style={{ width: "18px", height: "18px" }} />
                    Book My {sessionType === "demo" ? "Free Demo" : "Full Session"}
                </button>

                <p style={{ textAlign: "center", color: "#aaa", fontSize: "0.78rem" }}>
                    🔒 Your information is 100% private. No spam, ever.
                </p>
            </form>
        </>
    );
}
