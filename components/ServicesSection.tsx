import Image from "next/image";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  image: string;
  icon: "laser" | "tooth" | "aligner";
};

const services: Service[] = [
  {
    title: "Laser Dentistry",
    description:
      "Advanced laser care for comfortable, precise and faster dental treatments.",
    image: "/home/services/laser-dentistry.png",
    icon: "laser",
  },
  {
    title: "Dental Fillings",
    description:
      "Natural-looking restorations that protect your tooth and bring back its strength.",
    image: "/home/services/dental-fillings.png",
    icon: "tooth",
  },
  {
    title: "Invisible Aligners",
    description:
      "Clear, comfortable aligners thoughtfully designed to transform your smile.",
    image: "/home/services/invisible-aligners.png",
    icon: "aligner",
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-5-5 5 5-5 5"
      />
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

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const move = (step: number) => {
    setActiveService(
      (current) => (current + step + services.length) % services.length,
    );
  };

  return (
    <section id="services" className="overflow-hidden px-5 py-6 sm:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[28px] bg-[#2c7477] px-5 pb-[250px] pt-8 sm:px-9 sm:pb-[240px] sm:pt-11 lg:px-12 lg:pb-[255px] lg:pt-14 xl:px-16">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <ToothMark />
                <span className="text-sm font-extrabold uppercase tracking-[0.03em] text-[#25d3c4] sm:text-base">
                  Our Services
                </span>
              </div>

              <h2 className="max-w-[760px] text-[29px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-[36px] lg:text-[46px]">
                Comprehensive dental care tailored
                <br className="hidden sm:block" /> services for every smile
              </h2>

              <p className="mt-5 max-w-[950px] text-base leading-relaxed text-white/90 sm:text-lg">
                Elite Dental Studio offers a full spectrum of dental procedures
                to help you explore what&apos;s best for your smile.
              </p>
            </div>

            <a
              href="#services-list"
              className="inline-flex w-fit items-center gap-4 rounded-[9px] bg-[#27d3c4] py-3 pl-5 pr-3 text-sm font-extrabold uppercase text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#20c4b6] focus:outline-none focus:ring-4 focus:ring-white/30 sm:text-base"
            >
              All Services
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#27bdb3]">
                <Arrow />
              </span>
            </a>
          </div>
        </div>

        <div
          id="services-list"
          className="relative z-10 -mt-[190px] px-2 sm:-mt-[180px] sm:px-8 lg:-mt-[190px] lg:px-12"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`overflow-hidden rounded-[28px] border bg-white p-5 shadow-[0_18px_45px_rgba(21,74,78,0.09)] transition duration-300 sm:p-6 ${index === services.length - 1 ? "sm:col-span-2 sm:mx-auto sm:w-[48%] lg:col-span-1 lg:mx-0 lg:w-auto" : ""
                  } ${index === activeService
                    ? "border-[#2b7f82] md:-translate-y-2"
                    : "border-[#8cb8ba]"
                  }`}
              >
                <div className="flex min-h-[58px] items-center gap-4">
                  <ServiceIcon type={service.icon} />
                  <h3 className="min-w-0 flex-1 text-xl font-bold leading-tight tracking-[-0.025em] text-[#343434] lg:text-[25px]">
                    {service.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveService(index)}
                    aria-label={`View ${service.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#287579] transition hover:bg-[#e7f8f6] hover:text-[#20cbbb] focus:outline-none focus:ring-4 focus:ring-[#25d3c4]/20"
                  >
                    <Arrow />
                  </button>
                </div>

                <div className="my-5 h-px bg-[#c8cccc]" />

                <p className="min-h-[58px] text-base leading-[1.55] text-[#555] lg:text-[17px]">
                  {service.description}
                </p>

                <div className="relative mt-5 h-[185px] overflow-hidden rounded-[24px] bg-[#edf6f5] lg:h-[205px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} treatment demonstration`}
                    fill
                    sizes="(max-width: 767px) 90vw, (max-width: 1279px) 30vw, 390px"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center">
            <div className="flex overflow-hidden rounded-[8px] shadow-sm">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous service"
                className="flex h-11 w-12 items-center justify-center bg-[#27d3c4] text-white transition hover:bg-[#20c4b6] focus:outline-none focus:ring-4 focus:ring-[#27d3c4]/25"
              >
                <Arrow direction="left" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next service"
                className="flex h-11 w-12 items-center justify-center bg-[#2c7477] text-white transition hover:bg-[#205f63] focus:outline-none focus:ring-4 focus:ring-[#2c7477]/25"
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
