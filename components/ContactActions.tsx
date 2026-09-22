import { openConsultationPopup } from "@/lib/consultationPopup";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.57 2.79.69A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function ContactActions({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={hidden ? "pointer-events-none invisible" : ""} inert={hidden}>
      <a
        href="tel:+919048611911"
        aria-label="Call Elite Dental Studio emergency line at +91 9048 611 911"
        title="Emergency call: +91 9048 611 911"
        className="fixed right-6 bottom-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25cebd] text-white shadow-lg transition-colors hover:bg-[#25cebd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25cebd] md:flex"
      >
        <PhoneIcon />
      </a>
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#dceeed] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(12,54,58,0.12)] md:hidden"
      >
        <div className="mx-auto grid h-[72px] max-w-lg grid-cols-[1fr_1.6fr] gap-3 px-4 py-3">
          <a
            href="tel:+919048611911"
            aria-label="Call Elite Dental Studio at +91 9048 611 911"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#29696d] text-sm font-semibold text-[#29696d] transition-colors hover:bg-[#e9f9f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29696d]"
          >
            <PhoneIcon />
            Call
          </a>
          <button
            type="button"
            onClick={openConsultationPopup}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#29696d] px-2 text-sm font-semibold text-white transition-colors hover:bg-[#1e5558] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29696d]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 11h18m-9 4v4m-2-2h4" />
            </svg>
            Book an Appointment
          </button>
        </div>
      </nav>
    </div>
  );
}
