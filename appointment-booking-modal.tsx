import { FormEvent, useEffect } from "react";
import { X, CalendarCheck } from "lucide-react";
import { useAppointmentModal } from "./src/app/contexts/appointment-modal-context";
import { router } from "./src/app/routes";

export function AppointmentBookingModal() {
  const { isOpen, closeModal } = useAppointmentModal();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeModal]);

  if (!isOpen) {
    return null;
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeModal();
    void router.navigate("/contact");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a free demo"
      onClick={closeModal}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(2, 8, 23, 0.62)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 80,
        padding: "16px",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          boxShadow: "0 20px 70px rgba(2, 8, 23, 0.35)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "#0B3C5D",
            color: "#ffffff",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <CalendarCheck style={{ width: "18px", height: "18px" }} />
            <strong style={{ fontFamily: "'Poppins', sans-serif" }}>Book Free Demo</strong>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close dialog"
            style={{
              border: "none",
              background: "transparent",
              color: "#ffffff",
              cursor: "pointer",
              padding: 0,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <X style={{ width: "20px", height: "20px" }} />
          </button>
        </div>

        <form onSubmit={onSubmit} style={{ padding: "20px" }}>
          <p style={{ color: "#475569", marginBottom: "14px", fontSize: "0.95rem", lineHeight: 1.6 }}>
            Share your details and continue to the booking page.
          </p>

          <div style={{ display: "grid", gap: "12px" }}>
            <input
              required
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />
            <input
              required
              type="tel"
              placeholder="Phone Number"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <button
              type="button"
              onClick={closeModal}
              style={{
                flex: 1,
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "#0f172a",
                borderRadius: "10px",
                padding: "10px 12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                flex: 1,
                border: "none",
                backgroundColor: "#FF7A00",
                color: "#ffffff",
                borderRadius: "10px",
                padding: "10px 12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  border: "1px solid #cbd5e1",
  borderRadius: "10px",
  padding: "10px 12px",
  fontSize: "0.95rem",
  outline: "none",
} as const;
