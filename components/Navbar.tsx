import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
    <path d="M12 6v6l4 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const subNavItems = [
  { label: "Our Doctors", img: "/navbar/doctor.png" },
  { label: "Testimonials", img: "/navbar/icon02.png" },
  { label: "Awards", img: "/navbar/icon-3.png" },
  { label: "Technology", img: "/navbar/icon-4.png" },
  { label: "Implant", img: "/navbar/icon-6.png" },
  { label: "Aligners", img: "/navbar/icon-7.png" },
  { label: "Root Canal", img: "/navbar/icon-8.png" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50">

      {/* ── Top Bar ── */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[112px] lg:px-12">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/navbar/elite-logo.png"
              alt="Elite Dental Studio"
              width={200}
              height={56}
              className="w-28 object-contain lg:w-[190px]"
              priority
            />
          </Link>

          {/* Center Nav – desktop */}
          <nav className="hidden items-center gap-5 lg:flex">
            <button className="flex items-center gap-2 whitespace-nowrap rounded-[5px] bg-[#27d6c2] px-6 py-3 text-sm font-semibold text-[#15494d] transition-colors hover:bg-dent-mint">
              Our Treatments <ChevronDown />
            </button>
            <button className="flex items-center gap-2 whitespace-nowrap rounded-[5px] bg-[#27d6c2] px-6 py-3 text-sm font-semibold text-[#15494d] transition-colors hover:bg-dent-mint">
              Our Dental Clinic <ChevronDown />
            </button>
          </nav>

          {/* Right – desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            {/* ISO Badge */}
            <Image
              src="/navbar/iso-icon.png"
              alt="ISO 9001 Certified"
              width={1000}
              height={600}
              className="w-28 object-contain"
            />

            {/* Emergency Contact */}
            <div className="flex items-center gap-2.5">
              <Image
                src="/navbar/emergancy-icon.png"
                alt="Emergency"
                width={38}
                height={38}
                className="w-7 h-7 object-contain"
              />
              <div>
                <div className="text-sm text-gray-500 font-medium leading-none mb-1">
                  Emergency Contact No.
                </div>
                <div className="font-bold text-dent-text text-base leading-none">
                  +91 9048 611 911
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="whitespace-nowrap rounded-[4px] bg-[#29696d] px-6 py-3 text-xs font-bold tracking-wider text-white transition-colors hover:bg-dent-text">
              BOOK FREE CONSULTATION
            </button>

          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+919048611911"
              className="hidden sm:flex flex-col items-end leading-none"
            >
              <span className="text-[9px] text-gray-500">Emergency</span>
              <span className="text-dent-nav font-bold text-sm">+91 9048 611 911</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-dent-nav"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
            <button className="w-full flex items-center justify-between border border-dent-accent text-dent-accent rounded-full px-4 py-2.5 text-sm font-medium">
              Our Treatments <ChevronDown />
            </button>
            <button className="w-full flex items-center justify-between border border-dent-accent text-dent-accent rounded-full px-4 py-2.5 text-sm font-medium">
              Our Dental Clinic <ChevronDown />
            </button>
            <button className="w-full bg-dent-dark text-white py-3 text-sm font-bold tracking-wider">
              BOOK FREE CONSULTATION
            </button>
            <div className="flex items-center gap-3 pt-1">
              <Image src="/navbar/emergancy-icon.png" alt="Emergency" width={32} height={32} className="w-8 h-8 object-contain" />
              <div>
                <div className="text-[10px] text-gray-500">Emergency Contact No.</div>
                <div className="font-bold text-dent-text text-sm">+91 9048 611 911</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Sub Nav ── */}
      <div className="bg-dent-nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12 lg:py-5">

          {/* Icon links – scrollable on mobile */}
          <nav className="scrollbar-hide flex items-center gap-5 overflow-x-auto pb-0.5 lg:gap-9">
            {subNavItems.map(({ label, img }) => (
              <Link
                key={label}
                href="#"
                className="flex flex-col items-center gap-1.5 text-white hover:opacity-80 transition-opacity group shrink-0"
              >
                <div className="flex items-center justify-center group-hover:border-white transition-colors">
                  <Image
                    src={img}
                    alt={label}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain lg:h-12 lg:w-12"
                  />
                </div>
                <span className="whitespace-nowrap text-[10px] font-medium lg:text-sm">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Timing card – hidden on small screens */}
          <div className="hidden shrink-0 items-center gap-3 rounded-md bg-[#27d6c2] px-4 py-2.5 text-white xl:flex">
            <div className="mx-0.5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#29696d]">
              <ClockIcon />
            </div>


            <div className="text-center">
              <div className="text-xs mb-2 text-[#2e6c72] font-normal uppercase tracking-wider ">
                MON TO SAT
              </div>
              <div className="font-bold text-base text-[#2e6c72] leading-none">09:30 AM – 9:00 PM</div>
            </div>
            <div className="w-px h-9 bg-white/35 mx-0.5" />
            <div className="text-center">
              <div className="text-xs mb-2 text-[#2e6c72] font-normal uppercase tracking-wider ">
                SUNDAY
              </div>
              <div className="font-bold text-base text-[#2e6c72] leading-none">10:00 AM – 7:00 PM</div>
            </div>
          </div>
        </div>
      </div>

    </header >
  );
}
