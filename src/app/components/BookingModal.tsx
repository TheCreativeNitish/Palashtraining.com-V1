import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useAppointmentModal } from "../contexts/appointment-modal-context";
import { BookingForm } from "./BookingForm";

export function BookingModal() {
    const { isOpen, closeModal } = useAppointmentModal();
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    /* ─── scroll lock + ESC key ─── */
    useEffect(() => {
        if (!isOpen) return;

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", onKeyDown);

        /* auto-focus first input */
        const timer = setTimeout(() => {
            const input = document.querySelector<HTMLInputElement>(
                "#booking-modal-content input, #booking-modal-content select"
            );
            input?.focus();
        }, 50);

        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKeyDown);
            clearTimeout(timer);
        };
    }, [isOpen, closeModal]);

    if (!isOpen) return null;

    return (
        <>
            {/* Inject keyframe animation once */}
            <style>{`
        @keyframes bookingModalIn {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes bookingOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (max-width: 639px) {
          #booking-modal-content {
            border-radius: 20px 20px 0 0 !important;
            margin-top: auto !important;
            max-height: 92vh !important;
          }
          #booking-modal-backdrop {
            align-items: flex-end !important;
          }
        }
      `}</style>

            {/* Backdrop */}
            <div
                id="booking-modal-backdrop"
                role="dialog"
                aria-modal="true"
                aria-label="Book a free demo session"
                onClick={closeModal}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    backgroundColor: "rgba(0, 0, 0, 0.55)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    animation: "bookingOverlayIn 220ms ease-out",
                }}
            >
                {/* Modal Content Box */}
                <div
                    id="booking-modal-content"
                    ref={firstInputRef as React.RefObject<HTMLDivElement>}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        width: "100%",
                        maxWidth: "640px",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        boxShadow: "0 30px 80px rgba(11,60,93,0.3), 0 0 0 1px rgba(11,60,93,0.06)",
                        animation: "bookingModalIn 220ms ease-out",
                    }}
                >
                    {/* ── Header ── */}
                    <div
                        style={{
                            position: "sticky",
                            top: 0,
                            zIndex: 1,
                            backgroundColor: "#0B3C5D",
                            borderRadius: "20px 20px 0 0",
                            padding: "18px 24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ fontSize: "1.1rem" }}>📅</span>
                            <span
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    fontSize: "1rem",
                                }}
                            >
                                Book Your Free Demo Class
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Close dialog"
                            style={{
                                background: "rgba(255,255,255,0.12)",
                                border: "none",
                                borderRadius: "8px",
                                width: "34px",
                                height: "34px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#ffffff",
                                transition: "background 0.2s",
                                flexShrink: 0,
                            }}
                            onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLButtonElement).style.background =
                                "rgba(255,255,255,0.22)")
                            }
                            onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLButtonElement).style.background =
                                "rgba(255,255,255,0.12)")
                            }
                        >
                            <X style={{ width: "18px", height: "18px" }} />
                        </button>
                    </div>

                    {/* ── Form ── */}
                    <div style={{ padding: "28px 28px 32px" }}>
                        <BookingForm onSuccess={closeModal} />
                    </div>
                </div>
            </div>
        </>
    );
}
