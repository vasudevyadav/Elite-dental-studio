import { useEffect, useRef, useState } from "react";
import BiginAppointmentWidget from "@/components/BiginAppointmentWidget";
import { OPEN_CONSULTATION_POPUP_EVENT } from "@/lib/consultationPopup";

const SCROLL_THRESHOLD = 0.4;
const AUTO_POPUP_SESSION_KEY = "elite-consultation-popup-shown";

export default function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const hasShownRef = useRef(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(AUTO_POPUP_SESSION_KEY)) {
        hasShownRef.current = true;
        return;
      }
    } catch {
      // Continue without session persistence when storage is unavailable.
    }

    const onScroll = () => {
      if (hasShownRef.current) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress >= SCROLL_THRESHOLD) {
        hasShownRef.current = true;
        try {
          window.sessionStorage.setItem(AUTO_POPUP_SESSION_KEY, "true");
        } catch {
          // The popup can still open when storage is unavailable.
        }
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
    lastFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const siteContent = document.getElementById("site-content");
    const previousAriaHidden = siteContent?.getAttribute("aria-hidden");
    const wasInert = siteContent?.hasAttribute("inert") ?? false;
    document.body.style.overflow = "hidden";
    siteContent?.setAttribute("aria-hidden", "true");
    siteContent?.setAttribute("inert", "");
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) || [],
      ).filter((element) => !element.hasAttribute("hidden"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      if (siteContent) {
        if (previousAriaHidden == null) siteContent.removeAttribute("aria-hidden");
        else siteContent.setAttribute("aria-hidden", previousAriaHidden);
        if (!wasInert) siteContent.removeAttribute("inert");
      }
      document.removeEventListener("keydown", closeOnEscape);
      lastFocusedRef.current?.focus();
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
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        aria-describedby="consultation-popup-description"
        className="relative max-h-[calc(100dvh-1rem)] w-full max-w-[420px] touch-pan-y [scrollbar-width:thin] [scrollbar-color:#8bb5b6_transparent] overflow-y-auto overscroll-contain rounded-[18px] bg-white p-4 shadow-[0_24px_70px_rgba(5,42,45,0.35)] [-webkit-overflow-scrolling:touch] sm:max-h-[92dvh] sm:rounded-[22px] sm:p-7"
      >
        <button
          ref={closeButtonRef}
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
