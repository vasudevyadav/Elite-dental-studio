import Image from "next/image";
import { useState } from "react";

const awards = [
  {
    title: "Famdent Excellence in Dentistry Award",
    body: [
      "Elite Dental Studio was honoured at the Famdent Excellence in Dentistry Awards for outstanding contributions to patient care and clinical innovation.",
      "This recognition reflects our team’s commitment to advanced treatment, modern technology and a consistently comfortable patient experience.",
    ],
  },
  {
    title: "Clinical Excellence & Patient Care Award",
    body: [
      "Recognized by leading dental professionals for maintaining exceptional clinical standards across implantology, orthodontics and cosmetic dentistry.",
      "The award celebrates our continued focus on ethical care, precision and long-term oral health outcomes.",
    ],
  },
];

function AwardMedal({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/home/award-icon.png"
      alt=""
      width={70}
      height={84}
      aria-hidden="true"
      className={className}
    />
  );
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="bg-dent-accent flex h-7 w-7 shrink-0 items-center justify-center rounded-[5px] text-white shadow-sm">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        {open ? (
          <path strokeLinecap="round" d="M5 12h14" />
        ) : (
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        )}
      </svg>
    </span>
  );
}

export default function AwardsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="awards"
      className="mx-auto max-w-7xl overflow-hidden px-5 py-6 sm:px-8 lg:px-12 lg:py-12"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 xl:gap-14">
        <div className="relative z-10">
          <p className="text-base font-extrabold tracking-[-0.01em] text-[#29d0c1] sm:text-lg">
            Recognition &amp; Excellence
          </p>

          <h2 className="mt-4 text-[40px] leading-none font-extrabold tracking-[-0.045em] text-[#286f73] sm:text-[58px] lg:text-[64px]">
            Our Awards
          </h2>

          <p className="mt-6 max-w-[670px] text-base leading-[1.6] text-[#555] sm:text-lg lg:text-[20px]">
            Elite Dental Studio has been honoured with industry recognition for clinical excellence,
            patient care and innovation in modern dentistry.
          </p>

          <div className="mt-12">
            {awards.map((award, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={award.title} className="border-b border-[#8c9292] py-7 first:pt-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="focus-visible:ring-dent-accent/25 flex w-full items-center gap-4 text-left focus:outline-none focus-visible:ring-4"
                  >
                    <AwardMedal className="h-9 w-[30px] shrink-0 object-contain sm:h-10 sm:w-9" />
                    <span className="min-w-0 flex-1 text-lg leading-tight font-extrabold text-[#286f73] sm:text-xl lg:text-[23px]">
                      {award.title}
                    </span>
                    <ToggleIcon open={isOpen} />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
                      isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-2 pr-8 pl-[46px] text-sm leading-[1.55] text-[#626565] sm:text-base">
                        {award.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto min-h-[500px] w-full max-w-[700px] sm:min-h-[650px] lg:min-h-[690px] xl:min-h-[740px]">
          <div className="absolute top-[19%] right-[4%] h-[54%] w-[66%] overflow-hidden rounded-[42px]">
            <Image
              src="/home/award-bg.png"
              alt=""
              fill
              aria-hidden="true"
              sizes="(max-width: 1023px) 58vw, 34vw"
              className="object-cover"
            />
          </div>

          <div className="absolute top-0 left-[4%] z-20 w-[76%] drop-shadow-[0_15px_18px_rgba(0,0,0,0.18)] sm:left-[7%]">
            <Image
              src="/home/award.png"
              alt="Elite Dental Studio team receiving a dentistry excellence award"
              width={618}
              height={528}
              sizes="(max-width: 1023px) 75vw, 40vw"
              className="h-auto w-full"
            />
          </div>

          <div className="absolute right-0 bottom-[2%] z-10 w-[61%] overflow-hidden rounded-[0_32px_32px_32px] shadow-[0_18px_38px_rgba(16,49,51,0.16)] sm:w-[60%]">
            <Image
              src="/home/award-2.png"
              alt="Elite Dental Studio team at the Famdent Awards ceremony"
              width={444}
              height={474}
              sizes="(max-width: 1023px) 58vw, 32vw"
              className="h-auto w-full"
            />
          </div>

          <div className="absolute bottom-[16%] left-0 z-30 flex w-[76%] items-center gap-3 rounded-[16px] bg-[#064a50] px-4 py-3 text-white shadow-[0_15px_34px_rgba(0,55,60,0.25)] sm:bottom-[20%] sm:left-[1%] sm:w-[58%] sm:gap-4 sm:rounded-[20px] sm:px-7 sm:py-5">
            <AwardMedal className="h-12 w-10 shrink-0 object-contain sm:h-[72px] sm:w-[60px]" />
            <p className="text-sm leading-[1.4] font-bold sm:text-xl lg:text-[22px]">
              Leading Dental Associations For Clinical Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
