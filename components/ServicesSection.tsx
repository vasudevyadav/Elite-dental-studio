import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isLocationSpecificServiceSlug } from "@/lib/clinics";
import type { ServiceListItem } from "@/lib/servicesApi";
import AnimatedArrowCta from "./AnimatedArrowCta";

type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: "laser" | "tooth" | "aligner";
};

type ApiService = {
  slug: string;
  title: string;
  shortDescription: string;
  cardImage?: { url?: string };
};

const services: Service[] = [
  {
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    description:
      "Treats gum infection and soft tissue with less bleeding than a scalpel, and faster healing afterward.",
    image: "/home/services/laser-dentistry.jpg",
    icon: "laser",
  },
  {
    slug: "maxillofacial-orthognathic-surgery",
    title: "Oral & Maxillofacial Surgery & Orthognathics",
    description: "Surgical correction of jaw position when braces alone cannot fix the bite.",
    image: "/home/services/dental-fillings.jpg",
    icon: "tooth",
  },
  {
    slug: "invisible-aligners",
    title: "Invisalign Treatment",
    description:
      "Clear plastic trays, changed every one to two weeks, gradually shift teeth into position without metal wires.",
    image: "/home/services/invisible-aligners.jpg",
    icon: "aligner",
  },
  {
    slug: "periodontics",
    title: "Periodontics",
    description:
      "Deep cleaning and gum surgery that treats bleeding gums and the bone loss that causes loose teeth.",
    image: "/home/services/laser-dentistry.jpg",
    icon: "laser",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description:
      "Cavity checks, sealants and fluoride treatment planned around your child's exact age and tooth count.",
    image: "/about-freepik-checkup.jpg",
    icon: "tooth",
  },
  {
    slug: "oral-medicine-radiology",
    title: "Oral Medicine & Radiology",
    description:
      "Digital X-rays that locate the exact source of jaw pain or a tooth that hurts without a visible cause.",
    image: "/about-freepik-consultation.jpg",
    icon: "tooth",
  },
  {
    slug: "endodontics",
    title: "Endodontics",
    description:
      "Root canal treatment that removes infected tissue from inside a tooth, so it can stay in your mouth instead of being pulled.",
    image: "/home/services/dental-fillings.jpg",
    icon: "tooth",
  },
  {
    slug: "prosthodontics",
    title: "Prosthodontics",
    description:
      "Crowns, bridges, dentures and implants built to replace one tooth or a full arch you've lost.",
    image: "/service/services-2.png",
    icon: "tooth",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    description:
      "Braces or aligners that move crooked or gapped teeth into a corrected bite over a planned series of visits.",
    image: "/home/services/invisible-aligners.jpg",
    icon: "aligner",
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    description:
      "Fillings that rebuild a tooth weakened by decay or a chip, matched to your natural tooth color.",
    image: "/home/services/dental-fillings.jpg",
    icon: "tooth",
  },
  {
    slug: "cosmetic-treatments",
    title: "Cosmetic Treatments",
    description:
      "Whitening, veneers and reshaping for teeth that are healthy but don't look the way you want them to.",
    image: "/about-freepik-treatment.jpg",
    icon: "tooth",
  },
];

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function ToothMark() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#24d4c6] text-[#24d4c6]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[17px] w-[17px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.4c-1.5 0-2.7-1-4.4-1C4.7 2.4 3.2 4.7 3.6 8c.3 2.4 1.4 4.2 2 6.5.7 2.8.9 6.3 2.8 6.3 1.7 0 1.8-4.6 3.6-4.6s1.9 4.6 3.6 4.6c1.9 0 2.1-3.5 2.8-6.3.6-2.3 1.7-4.1 2-6.5.4-3.3-1.1-5.6-4-5.6-1.7 0-2.9 1-4.4 1Z"
        />
      </svg>
    </span>
  );
}

function ServiceIcon({ type }: { type: Service["icon"] }) {
  return (
    <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[9px] bg-[#25d3c4] text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        {type === "aligner" ? (
          <>
            <path d="M5 22V12C5 6 9.8 3 16 3s11 3 11 9v10" />
            <path d="M7 20c2 3 5 5 9 5s7-2 9-5M9 9v11m4-14v17m6-17v17m4-14v11" />
          </>
        ) : (
          <>
            <path d="M16 4c-2.4 0-4.2-1.4-6.5-1.4C5.4 2.6 3.3 6 3.9 10.6c.4 3.3 2 5.8 2.8 9 .9 3.9 1.3 8.8 4 8.8 2.4 0 2.5-6.4 5.3-6.4s2.9 6.4 5.3 6.4c2.7 0 3.1-4.9 4-8.8.8-3.2 2.4-5.7 2.8-9 .6-4.6-1.5-8-5.6-8C20.2 2.6 18.4 4 16 4Z" />
            {type === "laser" && (
              <>
                <path d="m19 10-5 6m-1-5 1 5 5 1" />
                <path d="M22 5v4m-2-2h4" />
              </>
            )}
          </>
        )}
      </svg>
    </span>
  );
}

export default function ServicesSection({
  title = "Comprehensive Dental Specialities Under One Roof",
  description = "Each treatment at Elite Dental Studio is led by a specialist dentist, thoroughly checked by X-ray or examination before any work begins.",
  compact = false,
  initialServices,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
  initialServices?: ServiceListItem[];
}) {
  const [activeService, setActiveService] = useState(0);
  const toServices = (items: ApiService[]): Service[] =>
    items
      .filter((item) => !isLocationSpecificServiceSlug(item.slug))
      .map((item) => ({
        slug: item.slug,
        title: item.title,
        description: item.shortDescription,
        image:
          item.cardImage?.url ||
          services.find((service) => service.slug === item.slug)?.image ||
          "/service/services-1.png",
        icon:
          item.slug.includes("aligner") || item.slug === "orthodontics"
            ? "aligner"
            : item.slug.includes("laser") || item.slug === "periodontics"
              ? "laser"
              : "tooth",
      }));
  const [apiServices, setApiServices] = useState<Service[] | null>(() =>
    initialServices?.length ? toServices(initialServices) : null,
  );
  const activeServices = apiServices?.length ? apiServices : services;

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/services", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        const items = payload?.data?.items;
        if (!Array.isArray(items)) return;
        setApiServices(toServices(items));
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const move = (step: number) => {
    setActiveService((current) => (current + step + activeServices.length) % activeServices.length);
  };

  const visibleServices = [0, 1, 2].map((offset) => ({
    service: activeServices[(activeService + offset) % activeServices.length],
    offset,
  }));

  return (
    <section id="services" className="overflow-hidden px-5 py-6 sm:px-8 lg:py-12">
      <div className={`mx-auto ${compact ? "max-w-6xl" : "max-w-7xl"}`}>
        <div
          className={`relative rounded-[28px] ${compact ? "bg-[#276368] px-6 pt-8 pb-[190px] lg:px-8 lg:pt-9" : "bg-dent-panel px-5 pt-8 pb-[250px] sm:px-9 sm:pt-11 sm:pb-[240px] lg:px-12 lg:pt-14 lg:pb-[255px] xl:px-16"}`}
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <ToothMark />
                <span className="text-sm font-extrabold tracking-[0.03em] text-[#25d3c4] uppercase sm:text-base">
                  Our Services
                </span>
              </div>

              <h2
                className={`max-w-[760px] leading-[1.12] font-extrabold tracking-[-0.035em] text-white ${compact ? "text-[24px]" : "text-2xl lg:text-[46px]"}`}
              >
                {title}
              </h2>

              <p
                className={`mt-5 max-w-[950px] leading-relaxed text-white/90 ${compact ? "text-xs" : "text-base sm:text-lg"}`}
              >
                {description}
              </p>
            </div>

            <AnimatedArrowCta
              label="ALL SERVICES"
              href="/services"
              arrowClassName="text-[#27bdb3]"
              className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav inline-flex w-fit items-center gap-4 rounded-[9px] py-3 pr-3 pl-5 text-sm font-extrabold text-white uppercase shadow-sm focus:ring-4 focus:ring-white/30 focus:outline-none sm:text-base"
            />
          </div>
        </div>

        <div
          id="services-list"
          className={`relative z-10 px-2 ${compact ? "-mt-[145px] sm:px-9" : "-mt-[190px] sm:-mt-[180px] sm:px-8 lg:-mt-[190px] lg:px-12"}`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" aria-live="polite">
            {visibleServices.map(({ service, offset }) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.title}
                className={`group smooth-hover card-hover block overflow-hidden border bg-white no-underline shadow-[0_18px_45px_rgba(21,74,78,0.09)] ${compact ? "rounded-[18px] p-4" : "rounded-[28px] p-5 sm:p-6"} ${offset !== 0 ? "hidden sm:block" : ""} ${
                  offset === 0 ? "border-[#2b7f82] md:-translate-y-2" : "border-[#8cb8ba]"
                }`}
              >
                <div className="flex min-h-[58px] items-center gap-4">
                  <ServiceIcon type={service.icon} />
                  <h3
                    className={`min-w-0 flex-1 leading-tight font-semibold tracking-[-0.025em] text-[#343434] ${compact ? "text-base" : "text-lg lg:text-[22px]"}`}
                  >
                    {service.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="smooth-hover hover-lift flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#287579] hover:bg-[#e7f8f6] hover:text-[#20cbbb] focus:ring-4 focus:ring-[#25d3c4]/20 focus:outline-none"
                  >
                    <Arrow />
                  </span>
                </div>

                <div className="my-5 h-px bg-[#c8cccc]" />

                <p
                  className={`line-clamp-3 min-h-[58px] leading-[1.55] text-[#555] ${compact ? "text-xs" : "text-base lg:text-[17px]"}`}
                >
                  {service.description}
                </p>

                <div
                  className={`relative mt-5 overflow-hidden bg-[#edf6f5] ${compact ? "h-[112px] rounded-[14px]" : "h-[185px] rounded-[24px] lg:h-[205px]"}`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} treatment demonstration`}
                    fill
                    sizes="(max-width: 767px) 90vw, (max-width: 1279px) 30vw, 390px"
                    className="image-hover object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="flex overflow-hidden rounded-[8px] shadow-sm">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous service"
                  className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav focus:ring-dent-accent/25 flex h-11 w-12 items-center justify-center text-white focus:ring-4 focus:outline-none"
                >
                  <Arrow direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next service"
                  className="smooth-hover button-hover hover-lift bg-dent-panel focus:ring-dent-panel/25 flex h-11 w-12 items-center justify-center text-white hover:bg-[#205f63] focus:ring-4 focus:outline-none"
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
