import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Our Dental Office", href: "/our-dental-office" },
  { label: "International Patients", href: "/international-patients" },
  { label: "Patient Safety", href: "/patient-safety" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "https://elitedentalstudio.co.in/careers/" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  "Laser Dentistry",
  "Dental Fillings",
  "Invisible Aligners",
  "Braces & Aligners",
  "Wisdom Teeth Removal",
  "Dental Implants",
  "Dental Crowns",
  "Advanced Gum Treatments",
  "Paediatric Dentistry",
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

const clinics = [
  { name: "Calicut", href: "https://share.google/Fwtkjjfxd6VB0I8Pg" },
  { name: "Kochi", href: "https://share.google/rBjee9uoOFuyUrBiN" },
  { name: "Kannur", href: "https://share.google/hqWjVESaLgEvGCPDX" },
  { name: "Coimbatore", href: "/#clinics" },
];

function SocialIcon({ type }: { type: "facebook" | "tiktok" | "instagram" | "whatsapp" }) {
  return (
    <span className="smooth-hover bg-dent-accent flex h-10 w-10 items-center justify-center rounded-[6px] text-[#064a50] sm:h-8 sm:w-8">
      {type === "facebook" && <strong className="text-xl leading-none">f</strong>}
      {type === "tiktok" && <strong className="text-lg leading-none">♪</strong>}
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
      {type === "whatsapp" && (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
          <path d="M9 8c.5 3 2 4.5 5 5l1-1.5 2 1c-.5 2-1.8 3-3.5 2.5-4-1-6.5-3.5-7.5-7.5C5.5 5.8 6.5 4.5 8.5 4l1 2L8 7l1 1Z" />
        </svg>
      )}
    </span>
  );
}

export default function Footer() {
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
                href="https://linktr.ee/Elitedentalclinic"
                target="_blank"
                rel="noreferrer"
                aria-label="Elite Dental Studio on Facebook"
                className="smooth-hover hover-lift"
              >
                <SocialIcon type="facebook" />
              </a>
              <a
                href="https://linktr.ee/Elitedentalclinic"
                target="_blank"
                rel="noreferrer"
                aria-label="Elite Dental Studio on TikTok"
                className="smooth-hover hover-lift"
              >
                <SocialIcon type="tiktok" />
              </a>
              <a
                href="https://linktr.ee/Elitedentalclinic"
                target="_blank"
                rel="noreferrer"
                aria-label="Elite Dental Studio on Instagram"
                className="smooth-hover hover-lift"
              >
                <SocialIcon type="instagram" />
              </a>
              <a
                href="https://wa.me/919048611911"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Elite Dental Studio on WhatsApp"
                className="smooth-hover hover-lift"
              >
                <SocialIcon type="whatsapp" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/15 pt-7 text-center sm:border-t-0 sm:pt-0 lg:pt-12 lg:text-left">
            <ul className="mx-auto grid grid-cols-1 gap-x-5 gap-y-4 sm:block sm:space-y-5">
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
            <ul className="mt-5 space-y-4 lg:space-y-5">
              {serviceLinks.map((link, index) => (
                <li key={link}>
                  <Link
                    href={`/services/${serviceSlugs[index]}`}
                    className="smooth-hover link-hover hover:text-dent-accent text-base font-medium text-white/92"
                  >
                    {link}
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
