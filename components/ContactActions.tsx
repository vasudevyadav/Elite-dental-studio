import { openConsultationPopup } from "@/lib/consultationPopup";

const whatsappUrl = "https://wa.me/919633680999";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0 md:h-6 md:w-6"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.93 11.93 0 0 0 5.77 1.47h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.19-3.46-8.42ZM12.04 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.72.98.99-3.63-.24-.38a9.86 9.86 0 0 1-1.52-5.24c0-5.47 4.44-9.91 9.91-9.91a9.85 9.85 0 0 1 7.01 2.9 9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.9-9.92 9.9Z" />
      <path d="M17.48 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 md:h-6 md:w-6"
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
        className="fixed right-6 bottom-[92px] z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25cebd] text-white shadow-lg transition-colors hover:bg-[#20b5a6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25cebd] md:flex"
      >
        <PhoneIcon />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Elite Dental Studio on WhatsApp at +91 96336 80999"
        title="WhatsApp Elite Dental Studio: +91 96336 80999"
        className="fixed right-6 bottom-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-[#128c4a] text-white shadow-lg transition-colors hover:bg-[#0d713b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128c4a] md:flex"
      >
        <WhatsAppIcon />
      </a>
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#dceeed] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(12,54,58,0.12)] md:hidden"
      >
        <div className="mx-auto grid h-[72px] max-w-lg grid-cols-[0.7fr_1fr_1.5fr] gap-x-1 px-3 py-3">
          <a
            href="tel:+919048611911"
            aria-label="Call Elite Dental Studio at +91 9048 611 911"
            className="flex items-center justify-center gap-1 rounded-xl border border-[#29696d] text-xs font-semibold text-[#29696d] transition-colors hover:bg-[#e9f9f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29696d] sm:gap-2 sm:text-sm"
          >
            <PhoneIcon />
            Call
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Elite Dental Studio on WhatsApp at +91 96336 80999"
            className="flex items-center justify-center gap-1 rounded-xl bg-[#128c4a] text-xs font-semibold text-white transition-colors hover:bg-[#0d713b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128c4a] sm:gap-2 sm:text-sm"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <button
            type="button"
            aria-label="Book an appointment"
            onClick={openConsultationPopup}
            className="flex min-w-0 items-center justify-center gap-1 rounded-xl bg-[#29696d] px-1 text-[10px] leading-tight font-semibold text-white transition-colors hover:bg-[#1e5558] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29696d] sm:gap-2 sm:px-2 sm:text-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 11h18m-9 4v4m-2-2h4" />
            </svg>
            <span>Book an Appointment</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
