import { useEffect, useRef, useState } from "react";
import BiginAppointmentWidget from "@/components/BiginAppointmentWidget";
import { OPEN_CONSULTATION_POPUP_EVENT } from "@/lib/consultationPopup";

const SCROLL_THRESHOLD = 0.4;

export default function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const hasShownRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (hasShownRef.current) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress >= SCROLL_THRESHOLD) {
        hasShownRef.current = true;
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOpenRequest = () => {
      hasShownRef.current = true;
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSULTATION_POPUP_EVENT, onOpenRequest);
    return () => window.removeEventListener(OPEN_CONSULTATION_POPUP_EVENT, onOpenRequest);
  }, []);

  useEffect(() => {
    const onAppointmentClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest<HTMLElement>('a, button, [role="button"]');
      if (!trigger || trigger.closest('[role="dialog"]')) return;

      const href = trigger.getAttribute("href")?.toLowerCase() || "";
      const label = `${trigger.getAttribute("aria-label") || ""} ${trigger.textContent || ""}`
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
      const isAppointmentAnchor = href.endsWith("#appointment");
      const isBookingAction =
        label.includes("book") && (label.includes("appointment") || label.includes("consultation"));

      if (!isAppointmentAnchor && !isBookingAction) return;

      event.preventDefault();
      hasShownRef.current = true;
      setOpen(true);
    };

    document.addEventListener("click", onAppointmentClick, true);
    return () => document.removeEventListener("click", onAppointmentClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#123f43]/70 p-2 backdrop-blur-sm sm:p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        className="relative max-h-[calc(100dvh-1rem)] w-full max-w-[420px] touch-pan-y [scrollbar-width:thin] [scrollbar-color:#8bb5b6_transparent] overflow-y-auto overscroll-contain rounded-[18px] bg-white p-4 shadow-[0_24px_70px_rgba(5,42,45,0.35)] [-webkit-overflow-scrolling:touch] sm:max-h-[92dvh] sm:rounded-[22px] sm:p-7"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="smooth-hover hover-lift text-dent-nav absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f8f6] text-lg font-bold hover:bg-[#d5f3ef] sm:top-4 sm:right-4 sm:h-9 sm:w-9 sm:text-xl"
        >
          ×
        </button>
        <h3
          id="consultation-popup-title"
          className="text-dent-text mb-1 pr-9 text-base font-bold italic sm:pr-10 sm:text-lg"
        >
          Book an Appointment
        </h3>
        <p className="mb-3 pr-7 text-xs leading-5 text-[#6d7c7e] sm:mb-5 sm:pr-0 sm:text-sm">
          Share your details and our team will call you back shortly.
        </p>
        <BiginAppointmentWidget variant="popup" />
      </div>
    </div>
  );
}
