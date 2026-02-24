import * as React from "react";
import { useAppointmentModal } from "./src/app/contexts/appointment-modal-context";
import { cn } from "./src/app/components/ui/utils";

type BookAppointmentButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const sizeClasses: Record<NonNullable<BookAppointmentButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

export function BookAppointmentButton({
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  children,
  ...props
}: BookAppointmentButtonProps) {
  const { openModal } = useAppointmentModal();

  const baseClass =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-lg bg-[#0B3C5D] text-white font-semibold transition-transform duration-200"
      : "inline-flex items-center justify-center rounded-lg border-2 border-[#0B3C5D] text-[#0B3C5D] font-semibold transition-transform duration-200";

  return (
    <button
      type={type}
      className={cn(baseClass, sizeClasses[size], className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openModal();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

