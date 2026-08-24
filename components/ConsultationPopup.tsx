import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { submitConsultation } from "@/lib/consultation";
import { OPEN_CONSULTATION_POPUP_EVENT } from "@/lib/consultationPopup";
import Recaptcha, { recaptchaEnabled } from "@/components/Recaptcha";

const SESSION_KEY = "eds_consultation_popup_shown";
const SCROLL_THRESHOLD = 0.4;

export default function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", clinic: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress >= SCROLL_THRESHOLD) {
        setOpen(true);
        sessionStorage.setItem(SESSION_KEY, "1");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOpenRequest = () => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
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
        label.includes("book") &&
        (label.includes("appointment") || label.includes("consultation"));

      if (!isAppointmentAnchor && !isBookingAction) return;

      event.preventDefault();
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
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

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (recaptchaEnabled() && !captchaToken) {
      setStatus("error");
      setFeedback("Please complete the CAPTCHA.");
      return;
    }
    setStatus("submitting");
    const result = await submitConsultation({
      name: form.name,
      phone: form.phone,
      email: form.email,
      clinicSlug: form.clinic,
      preferredDate: form.date,
      source: "appointment-popup",
      captchaToken,
    });
    setFeedback(result.message);
    if (result.success) {
      setStatus("success");
      setOpen(false);
      router.push("/thank-you");
    } else {
      setStatus("error");
    }
  };

  if (!open) return null;

  const fieldClass =
    "h-11 w-full rounded-[6px] border border-[#8bb5b6] bg-[#f5fbfa] px-4 text-sm text-gray-700 placeholder-gray-500 outline-none focus:border-dent-accent focus:ring-1 focus:ring-dent-accent";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#123f43]/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        className="relative max-h-[92dvh] w-full max-w-[420px] overflow-y-auto rounded-[22px] bg-white p-6 shadow-[0_24px_70px_rgba(5,42,45,0.35)] sm:p-7"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="smooth-hover hover-lift text-dent-nav absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f8f6] text-xl font-bold hover:bg-[#d5f3ef]"
        >
          ×
        </button>
        <h3
          id="consultation-popup-title"
          className="text-dent-text mb-1 pr-10 text-lg font-bold italic"
        >
          Book an Appointment
        </h3>
        <p className="mb-5 text-sm text-[#6d7c7e]">
          Share your details and our team will call you back shortly.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Enter Your Name"
            className={fieldClass}
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="Enter Your Mobile No."
            className={fieldClass}
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            placeholder="Enter Your Mail"
            className={fieldClass}
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={update}
            aria-label="Preferred appointment date"
            className={fieldClass}
            required
          />
          <select
            aria-label="Select clinic"
            name="clinic"
            value={form.clinic}
            onChange={update}
            className={`${fieldClass} appearance-none`}
            required
          >
            <option value="">Select Clinic</option>
            <option value="calicut">Calicut</option>
            <option value="kochi">Kochi</option>
            <option value="kannur">Kannur</option>
            <option value="coimbatore">Coimbatore</option>
          </select>
          <Recaptcha onTokenChange={setCaptchaToken} />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav mt-1 w-full rounded-[5px] py-3 text-sm font-bold text-white disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Book Now!"}
          </button>
          {feedback && status === "error" && (
            <p className="text-center text-sm font-semibold text-red-600">{feedback}</p>
          )}
        </form>
      </div>
    </div>
  );
}
