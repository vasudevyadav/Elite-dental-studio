import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type DropdownName = "treatments" | "clinic";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
};

type ApiService = {
  slug: string;
  title: string;
  shortDescription?: string;
  sortOrder?: number;
};

const dropdowns: Record<DropdownName, { eyebrow: string; items: DropdownItem[] }> = {
  treatments: {
    eyebrow: "Explore our care",
    items: [
      {
        label: "Dental Implants",
        description: "Long-lasting, natural-looking tooth replacement",
        href: "/services/dental-implant",
      },
      {
        label: "Invisible Aligners",
        description: "A discreet and comfortable smile transformation",
        href: "/services/invisible-aligners",
      },
      {
        label: "Root Canal Treatment",
        description: "Gentle care focused on saving your natural tooth",
        href: "/services/endodontics",
      },
      {
        label: "Laser Dentistry",
        description: "Precise treatment with greater comfort",
        href: "/services/laser-dentistry",
      },
    ],
  },
  clinic: {
    eyebrow: "Meet Elite Dental Studio",
    items: [
      {
        label: "About Our Clinic",
        description: "Our approach, experience and patient-first promise",
        href: "/about",
      },
      {
        label: "Our Doctors",
        description: "Get to know our experienced dental specialists",
        href: "/doctors",
      },
      {
        label: "Clinic Locations",
        description: "Find the Elite Dental Studio nearest to you",
        href: "/locations/kannur",
      },
      {
        label: "Our Dental Office",
        description: "Take a virtual tour of our modern clinics",
        href: "/our-dental-office",
      },
      {
        label: "Facilities",
        description: "Explore our technology, comfort and safety systems",
        href: "/facilities",
      },
      {
        label: "Smile Gallery",
        description: "See a curated selection of treatment results",
        href: "/gallery/cases",
      },
      {
        label: "Dental Blog",
        description: "Dental care tips, treatment guides and clinic news",
        href: "/blog",
      },
      {
        label: "International Patients",
        description: "Dental tourism, travel support and treatment planning",
        href: "/international-patients",
      },
      {
        label: "Patient Safety",
        description: "Sterilisation, technology and clinical safety standards",
        href: "/patient-safety",
      },
      {
        label: "Careers",
        description: "Grow your career with our specialist dental team",
        href: "/careers",
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
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
  { label: "Our Doctors", img: "/navbar/doctor.png", href: "/doctors" },
  { label: "Testimonials", img: "/navbar/icon02.png", href: "/#testimonials" },
  { label: "Awards", img: "/navbar/icon-3.png", href: "/#awards" },
  { label: "Technology", img: "/navbar/icon-4.png", href: "/services" },
  { label: "Implant", img: "/navbar/icon-6.png", href: "/services/dental-implant" },
  { label: "Aligners", img: "/navbar/icon-7.png", href: "/services/invisible-aligners" },
  { label: "Root Canal", img: "/navbar/icon-8.png", href: "/services/endodontics" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [treatmentItems, setTreatmentItems] = useState<DropdownItem[]>([]);

  const navigationDropdowns = {
    ...dropdowns,
    treatments: {
      ...dropdowns.treatments,
      items: treatmentItems,
    },
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  const toggleDropdown = (name: DropdownName) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  useEffect(() => {
    const controller = new AbortController();

    const loadServices = async () => {
      try {
        const response = await fetch("/api/services", { signal: controller.signal });
        if (!response.ok) return;
        const payload = (await response.json()) as {
          success: boolean;
          data?: { items?: ApiService[] };
        };
        const services = payload.data?.items;
        if (!payload.success || !Array.isArray(services)) return;

        setTreatmentItems(
          services
            .filter((service) => service.slug && service.title)
            .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
            .map((service) => ({
              label: service.title,
              description: service.shortDescription || "Explore this dental treatment",
              href: `/services/${service.slug}`,
            })),
        );
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Unable to load services navigation.", error);
        }
      }
    };

    void loadServices();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
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
      <div className="relative z-20 bg-white shadow-sm">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[92px] lg:h-[112px] lg:px-12">
          {/* Logo */}
          <Link href="/" className="smooth-hover hover-lift shrink-0">
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
          <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex">
            {(
              [
                ["treatments", "Our Treatments"],
                ["clinic", "Our Dental Clinic"],
              ] as const
            ).map(([name, label]) => {
              const isOpen = activeDropdown === name;
              const menu = navigationDropdowns[name];

              return (
                <div key={name} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(name)}
                    aria-expanded={isOpen}
                    aria-controls={`${name}-desktop-menu`}
                    className={`smooth-hover button-hover hover-lift focus:ring-dent-accent/25 flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold whitespace-nowrap text-[#15494d] focus:ring-4 focus:outline-none ${
                      isOpen
                        ? "bg-dent-accent shadow-[0_8px_20px_rgba(37,191,174,0.22)]"
                        : "bg-dent-accent hover:bg-[#1fae9f]"
                    }`}
                  >
                    {label}
                    <ChevronDown open={isOpen} />
                  </button>

                  <div
                    id={`${name}-desktop-menu`}
                    className={`absolute top-[calc(100%+14px)] left-1/2 z-[60] w-[340px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#d9eeee] bg-[#ffffff] p-2 text-[#1b4c50] shadow-[0_22px_55px_rgba(20,73,77,0.18)] transition-all duration-200 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="text-dent-accent px-4 pt-3 pb-2 text-[11px] font-bold tracking-[0.16em] uppercase">
                      {menu.eyebrow}
                    </div>
                    <div className="space-y-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMenus}
                          className="group smooth-hover hover-lift focus:ring-dent-accent flex items-center gap-3 rounded-xl px-4 py-2 hover:bg-[#effafa] focus:ring-2 focus:outline-none focus:ring-inset"
                        >
                          <span className="smooth-hover group-hover:bg-dent-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e2f8f5] text-[#247378] group-hover:text-white">
                            <span aria-hidden="true">→</span>
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-[#1b4c50]">
                              {item.label}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/#appointment"
                      onClick={closeMenus}
                      className="smooth-hover button-hover hover-lift mt-2 flex items-center justify-between rounded-xl bg-[#2d6c72] px-4 py-3 text-xs font-bold tracking-[0.08em] text-white uppercase hover:bg-[#235a5f] focus:ring-4 focus:ring-[#2d6c72]/20 focus:outline-none"
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
                className="h-7 w-7 object-contain"
              />
              <div>
                <div className="mb-1 text-sm leading-none font-medium text-gray-500">
                  Emergency Contact No.
                </div>
                <div className="text-dent-text text-base leading-none font-bold">
                  +91 9048 611 911
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/#appointment"
              className="smooth-hover button-hover hover-lift hover:bg-dent-text rounded-[4px] bg-[#29696d] px-6 py-3 text-xs font-bold tracking-wider whitespace-nowrap text-white focus:ring-4 focus:ring-[#29696d]/20 focus:outline-none"
            >
              BOOK FREE CONSULTATION
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+919048611911" className="hidden flex-col items-end leading-none sm:flex">
              <span className="text-[9px] text-gray-500">Emergency</span>
              <span className="text-dent-nav text-sm font-bold">+91 9048 611 911</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen((current) => !current);
                setActiveDropdown(null);
              }}
              className="smooth-hover hover-lift text-dent-nav hover:bg-dent-mint focus:ring-dent-accent/20 rounded-md p-2 focus:ring-4 focus:outline-none"
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
          className={`fixed inset-0 z-[100] lg:hidden ${
            mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={closeMenus}
            className={`absolute inset-0 bg-[#123f43]/55 backdrop-blur-[2px] transition-opacity duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            inert={!mobileOpen}
            className={`absolute top-0 right-0 flex h-full w-[88%] max-w-[390px] flex-col bg-white shadow-[-18px_0_45px_rgba(12,54,58,0.22)] transition-transform duration-300 ease-out ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
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
                className="smooth-hover hover-lift text-dent-nav focus:ring-dent-accent/20 flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f9f7] hover:bg-[#d5f3ef] focus:ring-4 focus:outline-none"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
              <p className="text-dent-accent mb-3 px-1 text-[11px] font-bold tracking-[0.16em] uppercase">
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
                    <div key={name} className="overflow-hidden rounded-xl border border-[#bfe9e4]">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(name)}
                        tabIndex={mobileOpen ? 0 : -1}
                        aria-expanded={isOpen}
                        aria-controls={`${name}-mobile-menu`}
                        className={`smooth-hover focus:ring-dent-accent flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold focus:ring-2 focus:outline-none focus:ring-inset ${
                          isOpen ? "bg-[#e9f9f7] text-[#23676c]" : "bg-white text-[#287479]"
                        }`}
                      >
                        {label} <ChevronDown open={isOpen} />
                      </button>

                      {isOpen && (
                        <div
                          id={`${name}-mobile-menu`}
                          className="space-y-1 border-t border-[#d9eeee] bg-[#fbfefe] p-2"
                        >
                          {navigationDropdowns[name].items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={closeMenus}
                              className="smooth-hover hover-lift focus:ring-dent-accent flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[#244f53] hover:bg-[#e9f9f7] focus:ring-2 focus:outline-none"
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

              <p className="text-dent-accent mt-6 mb-3 px-1 text-[11px] font-bold tracking-[0.16em] uppercase">
                Quick links
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {subNavItems.map(({ label, img, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMenus}
                    className="smooth-hover hover-lift hover:border-dent-accent focus:ring-dent-accent flex items-center gap-3 rounded-xl border border-[#d5ecea] bg-[#f7fcfb] px-3 py-3 text-sm font-semibold text-[#285f64] hover:bg-[#eaf9f7] focus:ring-2 focus:outline-none"
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
                    <div className="text-[10px] font-medium tracking-wide text-gray-500 uppercase">
                      Emergency Contact No.
                    </div>
                    <a
                      href="tel:+919048611911"
                      className="text-dent-text mt-0.5 block text-sm font-extrabold"
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
                className="smooth-hover button-hover hover-lift bg-dent-dark hover:bg-dent-nav focus:ring-dent-nav/20 block w-full rounded-lg py-3.5 text-center text-sm font-bold tracking-wider text-white focus:ring-4 focus:outline-none"
              >
                BOOK FREE CONSULTATION
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Sub Nav ── */}
      <div className="bg-dent-nav relative z-10 hidden lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12 lg:py-5">
          {/* Icon links – scrollable on mobile */}
          <nav className="scrollbar-hide flex items-center gap-5 overflow-x-auto pb-0.5 lg:gap-12">
            {subNavItems.map(({ label, img, href }) => (
              <Link
                key={label}
                href={href}
                className="group smooth-hover hover-lift flex shrink-0 flex-col items-center gap-1.5 text-white hover:opacity-90"
              >
                <div className="flex items-center justify-center transition-colors group-hover:border-white">
                  <Image
                    src={img}
                    alt={label}
                    width={28}
                    height={28}
                    className="image-hover h-7 w-7 object-contain lg:h-12 lg:w-12"
                  />
                </div>
                <span className="text-[10px] font-medium whitespace-nowrap lg:text-sm">
                  {label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Timing card – hidden on small screens */}
          <div className="bg-dent-accent hidden shrink-0 items-center gap-3 rounded-md px-4 py-2.5 text-white xl:flex">
            <div className="mx-0.5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#29696d]">
              <ClockIcon />
            </div>

            <div className="text-center">
              <div className="mb-2 text-xs font-normal tracking-wider text-[#2e6c72] uppercase">
                MON TO SAT
              </div>
              <div className="text-base leading-none font-bold text-[#2e6c72]">
                09:30 AM – 9:00 PM
              </div>
            </div>
            <div className="mx-0.5 h-9 w-px bg-white/35" />
            <div className="text-center">
              <div className="mb-2 text-xs font-normal tracking-wider text-[#2e6c72] uppercase">
                SUNDAY
              </div>
              <div className="text-base leading-none font-bold text-[#2e6c72]">
                10:00 AM – 7:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
