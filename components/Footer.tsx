import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  "About Us",
  "Services",
  "Doctors",
  "Facilities",
  "Blog",
  "Careers",
  "Contact Us",
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

const clinics = ["CALICUT", "KOCHI", "Kannur", "Coimbatore"];

function SocialIcon({ type }: { type: "facebook" | "tiktok" | "instagram" | "whatsapp" }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#28d1c2] text-[#064a50]">
      {type === "facebook" && <strong className="text-xl leading-none">f</strong>}
      {type === "tiktok" && <strong className="text-lg leading-none">♪</strong>}
      {type === "instagram" && (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )}
      {type === "whatsapp" && (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
          <path d="M9 8c.5 3 2 4.5 5 5l1-1.5 2 1c-.5 2-1.8 3-3.5 2.5-4-1-6.5-3.5-7.5-7.5C5.5 5.8 6.5 4.5 8.5 4l1 2L8 7l1 1Z" />
        </svg>
      )}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#03484d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_1.15fr_0.65fr] lg:gap-16">
        
          <div>
            <Image
              src="/home/logo-white.png"
              alt="Elite Dental Studio – A Complete Dental Center"
              width={340}
              height={120}
              className="h-auto w-[270px] object-contain object-left"
            />
            <p className="mt-10 max-w-[330px] text-base leading-[1.55] text-white">
              Elite Dental Studio dental clinic in Calicut, Kochi, Kannur and
              Coimbatore offers a comprehensive set of oral healthcare services
            </p>
            <div className="mt-5 w-[340px] max-w-full border-t border-white/70" />
            <div className="mt-8 flex gap-3">
              <a href="#" aria-label="Facebook"><SocialIcon type="facebook" /></a>
              <a href="#" aria-label="TikTok"><SocialIcon type="tiktok" /></a>
              <a href="#" aria-label="Instagram"><SocialIcon type="instagram" /></a>
              <a href="#" aria-label="WhatsApp"><SocialIcon type="whatsapp" /></a>
            </div>
          </div>

          <div className="lg:pt-12">
            <ul className="space-y-5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-base font-medium hover:text-[#28d1c2]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-4">
            <h3 className="w-fit border-b border-white text-base font-extrabold">
              Services
            </h3>
            <ul className="mt-5 space-y-5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-base font-medium hover:text-[#28d1c2]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-4">
            <h3 className="w-fit border-b border-white text-base font-extrabold">
              Our Clinics
            </h3>
            <ul className="mt-5 space-y-5">
              {clinics.map((clinic) => (
                <li key={clinic}>
                  <Link href="#" className="text-base font-medium hover:text-[#28d1c2]">
                    {clinic}
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
