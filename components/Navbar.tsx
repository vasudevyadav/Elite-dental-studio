import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type DropdownName = "treatments" | "clinic";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
};

const dropdowns: Record<
  DropdownName,
  { eyebrow: string; items: DropdownItem[] }
> = {
  treatments: {
    eyebrow: "Explore our care",
    items: [
      {
        label: "Dental Implants",
        description: "Long-lasting, natural-looking tooth replacement",
        href: "/#services",
      },
      {
        label: "Invisible Aligners",
        description: "A discreet and comfortable smile transformation",
        href: "/#services-list",
      },
      {
        label: "Root Canal Treatment",
        description: "Gentle care focused on saving your natural tooth",
        href: "/#services",
      },
      {
        label: "Laser Dentistry",
        description: "Precise treatment with greater comfort",
        href: "/#services-list",
      },
    ],
  },
  clinic: {
    eyebrow: "Meet Elite Dental Studio",
    items: [
      {
        label: "About Our Clinic",
        description: "Our approach, experience and patient-first promise",
        href: "/#about-us",
      },
      {
        label: "Our Doctors",
        description: "Get to know our experienced dental specialists",
        href: "/#doctors",
      },
      {
        label: "Clinic Locations",
        description: "Find the Elite Dental Studio nearest to you",
        href: "/#clinics",
      },
      {
        label: "Awards & Recognition",
        description: "A standard of care recognised across the industry",
        href: "/#awards",
      },
    ],
  },
};

const ChevronDown = ({ open = false }: { open?: boolean }) => (
  <svg
    aria-hidden="true"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
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
  { label: "Our Doctors", img: "/navbar/doctor.png", href: "/#doctors" },
  { label: "Testimonials", img: "/navbar/icon02.png", href: "/#testimonials" },
  { label: "Awards", img: "/navbar/icon-3.png", href: "/#awards" },
  { label: "Technology", img: "/navbar/icon-4.png", href: "/#services" },
  { label: "Implant", img: "/navbar/icon-6.png", href: "/#services" },
  { label: "Aligners", img: "/navbar/icon-7.png", href: "/#services-list" },
  { label: "Root Canal", img: "/navbar/icon-8.png", href: "/#services" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(
    null,
  );
  const headerRef = useRef<HTMLElement>(null);

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  const toggleDropdown = (name: DropdownName) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="relative z-50">

      {/* ── Top Bar ── */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex lg:h-[92px] h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[112px] lg:px-12">

          {/* Logo */}
          <Link href="/" className="shrink-0 smooth-hover hover-lift">
            <Image
              src="/navbar/elite-logo.png"
              alt="Elite Dental Studio"
              width={200}
              height={56}
              className="w-40 object-contain lg:w-[190px]"
              priority
            />
          </Link>

          {/* Center Nav – desktop */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-4 lg:flex"
          >
            {(
              [
                ["treatments", "Our Treatments"],
                ["clinic", "Our Dental Clinic"],
              ] as const
            ).map(([name, label]) => {
              const isOpen = activeDropdown === name;
              const menu = dropdowns[name];

              return (
                <div key={name} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(name)}
                    aria-expanded={isOpen}
                    aria-controls={`${name}-desktop-menu`}
                    className={`smooth-hover button-hover hover-lift flex items-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-sm font-semibold text-[#15494d] focus:outline-none focus:ring-4 focus:ring-dent-accent/25 ${isOpen
                      ? "bg-dent-accent shadow-[0_8px_20px_rgba(37,191,174,0.22)]"
                      : "bg-dent-accent hover:bg-[#1fae9f]"
                      }`}
                  >
                    {label}
                    <ChevronDown open={isOpen} />
                  </button>

                  <div
                    id={`${name}-desktop-menu`}
                    aria-hidden={!isOpen}
                    className={`absolute left-1/2 top-[calc(100%+14px)] w-[340px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#d9eeee] bg-white p-2 shadow-[0_22px_55px_rgba(20,73,77,0.18)] transition-all duration-200 ${isOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 pointer-events-none opacity-0"
                      }`}
                  >
                    <div className="px-4 pb-2 pt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-dent-accent">
                      {menu.eyebrow}
                    </div>
                    <div className="space-y-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMenus}
                          className="group smooth-hover hover-lift flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-[#effafa] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dent-accent"
                        >
                          <span className="smooth-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e2f8f5] text-[#247378] group-hover:bg-dent-accent group-hover:text-white">
                            <span aria-hidden="true">→</span>
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-[#1b4c50]">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-5 text-gray-500">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/#appointment"
                      onClick={closeMenus}
                      className="smooth-hover button-hover hover-lift mt-2 flex items-center justify-between rounded-xl bg-[#2d6c72] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-[#235a5f] focus:outline-none focus:ring-4 focus:ring-[#2d6c72]/20"
                    >
                      Book a free consultation
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              );
            })}
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
            <Link
              href="/#appointment"
              className="smooth-hover button-hover hover-lift whitespace-nowrap rounded-[4px] bg-[#29696d] px-6 py-3 text-xs font-bold tracking-wider text-white hover:bg-dent-text focus:outline-none focus:ring-4 focus:ring-[#29696d]/20"
            >
              BOOK FREE CONSULTATION
            </Link>

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
              type="button"
              onClick={() => {
                setMobileOpen((current) => !current);
                setActiveDropdown(null);
              }}
              className="smooth-hover hover-lift rounded-md p-2 text-dent-nav hover:bg-dent-mint focus:outline-none focus:ring-4 focus:ring-dent-accent/20"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 z-[100] lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
          aria-hidden={!mobileOpen}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={closeMenus}
            className={`absolute inset-0 bg-[#123f43]/55 backdrop-blur-[2px] transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"
              }`}
          />

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            inert={!mobileOpen}
            className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[390px] flex-col bg-white shadow-[-18px_0_45px_rgba(12,54,58,0.22)] transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex items-center justify-between border-b border-[#dceeed] px-5 py-4">
              <Image
                src="/navbar/elite-logo.png"
                alt="Elite Dental Studio"
                width={160}
                height={45}
                className="w-36 object-contain"
              />
              <button
                type="button"
                onClick={closeMenus}
                tabIndex={mobileOpen ? 0 : -1}
                aria-label="Close navigation menu"
                className="smooth-hover hover-lift flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f9f7] text-dent-nav hover:bg-[#d5f3ef] focus:outline-none focus:ring-4 focus:ring-dent-accent/20"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
              <p className="mb-3 px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-dent-accent">
                Main menu
              </p>

              <div className="space-y-3">
                {(
                  [
                    ["treatments", "Our Treatments"],
                    ["clinic", "Our Dental Clinic"],
                  ] as const
                ).map(([name, label]) => {
                  const isOpen = activeDropdown === name;

                  return (
                    <div
                      key={name}
                      className="overflow-hidden rounded-xl border border-[#bfe9e4]"
                    >
                      <button
                        type="button"
                        onClick={() => toggleDropdown(name)}
                        tabIndex={mobileOpen ? 0 : -1}
                        aria-expanded={isOpen}
                        aria-controls={`${name}-mobile-menu`}
                        className={`smooth-hover flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dent-accent ${isOpen
                            ? "bg-[#e9f9f7] text-[#23676c]"
                            : "bg-white text-[#287479]"
                          }`}
                      >
                        {label} <ChevronDown open={isOpen} />
                      </button>

                      {isOpen && (
                        <div
                          id={`${name}-mobile-menu`}
                          className="space-y-1 border-t border-[#d9eeee] bg-[#fbfefe] p-2"
                        >
                          {dropdowns[name].items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={closeMenus}
                              className="smooth-hover hover-lift flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[#244f53] hover:bg-[#e9f9f7] focus:outline-none focus:ring-2 focus:ring-dent-accent"
                            >
                              {item.label}
                              <span aria-hidden="true" className="text-dent-accent">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mb-3 mt-6 px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-dent-accent">
                Quick links
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {subNavItems.map(({ label, img, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMenus}
                    className="smooth-hover hover-lift flex items-center gap-3 rounded-xl border border-[#d5ecea] bg-[#f7fcfb] px-3 py-3 text-sm font-semibold text-[#285f64] hover:border-dent-accent hover:bg-[#eaf9f7] focus:outline-none focus:ring-2 focus:ring-dent-accent"
                  >
                    <Image
                      src={img}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 shrink-0 object-contain"
                    />
                    {label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-[#eef9f8] p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/navbar/emergancy-icon.png"
                    alt=""
                    width={34}
                    height={34}
                    className="h-9 w-9 object-contain"
                  />
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                      Emergency Contact No.
                    </div>
                    <a
                      href="tel:+919048611911"
                      className="mt-0.5 block text-sm font-extrabold text-dent-text"
                    >
                      +91 9048 611 911
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#dceeed] bg-white p-4">
              <Link
                href="/#appointment"
                onClick={closeMenus}
                className="smooth-hover button-hover hover-lift block w-full rounded-lg bg-dent-dark py-3.5 text-center text-sm font-bold tracking-wider text-white hover:bg-dent-nav focus:outline-none focus:ring-4 focus:ring-dent-nav/20"
              >
                BOOK FREE CONSULTATION
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Sub Nav ── */}
      <div className="hidden bg-dent-nav lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12 lg:py-5">

          {/* Icon links – scrollable on mobile */}
          <nav className="scrollbar-hide flex items-center gap-5 overflow-x-auto pb-0.5 lg:gap-12 ">
            {subNavItems.map(({ label, img, href }) => (
              <Link
                key={label}
                href={href}
                className="group smooth-hover hover-lift flex flex-col items-center gap-1.5 text-white hover:opacity-90 shrink-0"
              >
                <div className="flex items-center justify-center group-hover:border-white transition-colors">
                  <Image
                    src={img}
                    alt={label}
                    width={28}
                    height={28}
                    className="image-hover h-7 w-7 object-contain lg:h-12 lg:w-12"
                  />
                </div>
                <span className="whitespace-nowrap text-[10px] font-medium lg:text-sm">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Timing card – hidden on small screens */}
          <div className="hidden shrink-0 items-center gap-3 rounded-md bg-dent-accent px-4 py-2.5 text-white xl:flex">
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
