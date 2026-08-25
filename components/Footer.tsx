import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isMainClinic } from "@/lib/clinics";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Our Dental Office", href: "/our-dental-office" },
  { label: "International Patients", href: "/international-patients" },
  { label: "Patient Safety", href: "/patient-safety" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const serviceSlugs = [
  "laser-dentistry",
  "dental-fillings",
  "invisible-aligners",
  "clear-aligners-treatment",
  "maxillofacial-orthognathic-surgery",
  "dental-implant",
  "restorative-dentistry",
  "periodontics",
  "pediatric-dentistry",
];

const fallbackServices = [
  "Laser Dentistry",
  "Dental Fillings",
  "Invisible Aligners",
  "Braces & Aligners",
  "Wisdom Teeth Removal",
  "Dental Implants",
  "Dental Crowns",
  "Advanced Gum Treatments",
  "Paediatric Dentistry",
].map((name, index) => ({ name, slug: serviceSlugs[index] }));

const fallbackClinics = [
  { name: "Calicut", href: "https://share.google/Fwtkjjfxd6VB0I8Pg" },
  { name: "Kochi", href: "https://share.google/rBjee9uoOFuyUrBiN" },
  { name: "Kannur", href: "https://share.google/hqWjVESaLgEvGCPDX" },
  { name: "Coimbatore", href: "/#clinics" },
];

const socialLinks = {
  facebook: "https://www.facebook.com/elitedentalstudio1",
  instagram: "https://www.instagram.com/elitedental_studio/",
  youtube: "https://www.youtube.com/channel/UCOfybkaXV4UoBAE0bjGIkVQ",
};

function SocialIcon({ type }: { type: "facebook" | "instagram" | "youtube" }) {
  return (
    <span className="smooth-hover bg-dent-accent flex h-10 w-10 items-center justify-center rounded-[6px] text-[#064a50] sm:h-8 sm:w-8">
      {type === "facebook" && <strong className="text-xl leading-none">f</strong>}
      {type === "instagram" && (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )}
      {type === "youtube" && (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12c0 2.2-.3 4.2-.5 5.2a3 3 0 0 1-2.3 2.3c-1 .2-3 .5-6.2.5s-5.2-.3-6.2-.5a3 3 0 0 1-2.3-2.3C3.3 16.2 3 14.2 3 12s.3-4.2.5-5.2a3 3 0 0 1 2.3-2.3C6.8 4.3 8.8 4 12 4s5.2.3 6.2.5a3 3 0 0 1 2.3 2.3c.2 1 .5 3 .5 5.2Z" />
          <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
        </svg>
      )}
    </span>
  );
}

export default function Footer() {
  const [clinics, setClinics] = useState(fallbackClinics);
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/locations", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        const items = payload?.data?.items;
        if (!Array.isArray(items)) return;
        setClinics(
          items
            .filter((item: { slug: string }) => isMainClinic(item.slug))
            .map((item: { name: string; slug: string }) => ({
              name: item.name,
              href: `/locations/${item.slug}`,
            })),
        );
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/services", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        const items = payload?.data?.items;
        if (!Array.isArray(items)) return;
        setServices(
          items.map((item: { title: string; slug: string }) => ({
            name: item.title,
            slug: item.slug,
          })),
        );
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);
  return (
    <footer className="bg-dent-nav text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_1.15fr_0.65fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/home/logo-white.png"
              alt="Elite Dental Studio – A Complete Dental Center"
              width={340}
              height={120}
              className="mx-auto h-auto w-[230px] object-contain sm:mx-0 sm:w-[270px]"
            />
            <p className="mx-auto mt-7 max-w-[360px] text-center text-base leading-[1.65] text-white/90 sm:mx-0 sm:text-left">
              Elite Dental Studio dental clinic in Calicut, Kochi, Kannur and Coimbatore offers a
              comprehensive set of oral healthcare services
            </p>
            <div className="mx-auto mt-6 w-full max-w-[360px] border-t border-white/45 sm:mx-0" />
            <div className="mt-6 flex justify-around gap-3 sm:justify-start lg:justify-center">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Elite Dental Studio on Facebook"
                className="smooth-hover hover-lift"
              >
                <SocialIcon type="facebook" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Elite Dental Studio on Instagram"
                className="smooth-hover hover-lift"
              >
                <SocialIcon type="instagram" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="Elite Dental Studio on YouTube"
                className="smooth-hover hover-lift"
              >
                <SocialIcon type="youtube" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/15 pt-7 text-center sm:border-t-0 sm:pt-0 lg:pt-4 lg:text-left">
            <h3 className="w-full border-white text-center text-2xl font-extrabold lg:w-fit lg:border-b lg:text-left">
              Company
            </h3>
            <ul className="mx-auto mt-5 grid grid-cols-1 gap-x-5 gap-y-4 sm:block sm:space-y-5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="smooth-hover link-hover hover:text-dent-accent w-full text-center text-base font-medium text-white/92 lg:text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/15 pt-7 text-center sm:border-t-0 sm:pt-0 lg:pt-4 lg:text-left">
            <h3 className="w-full border-white text-center text-2xl font-extrabold lg:w-fit lg:border-b lg:text-left">
              Services
            </h3>
            <ul
              className={`mt-5 space-y-4 lg:space-y-5 ${services.length > 8 ? "max-h-72 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25 [&::-webkit-scrollbar-track]:bg-transparent" : ""}`}
            >
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="smooth-hover link-hover hover:text-dent-accent text-base font-medium text-white/92"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/15 pt-7 text-center sm:border-t-0 sm:pt-0 lg:pt-4 lg:text-left">
            <h3 className="w-full border-white text-center text-2xl font-extrabold lg:w-fit lg:border-b lg:text-left">
              Our Clinics
            </h3>
            <ul className="mt-5 space-y-5">
              {clinics.map((clinic) => (
                <li key={clinic.name}>
                  <Link
                    href={clinic.href}
                    target={clinic.href.startsWith("https://") ? "_blank" : undefined}
                    rel={clinic.href.startsWith("https://") ? "noreferrer" : undefined}
                    className="smooth-hover link-hover hover:text-dent-accent text-base font-medium text-white/92"
                  >
                    {clinic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
