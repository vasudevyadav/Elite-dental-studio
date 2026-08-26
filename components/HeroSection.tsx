import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import BiginAppointmentWidget from "@/components/BiginAppointmentWidget";
import { openConsultationPopup } from "@/lib/consultationPopup";

const HOME_SLIDES = [
  {
    img: "/home/home-page-banner-01.jpg",
    alt: "Six years of specialist-led dental care at Elite Dental Studio",
  },
];

type HeroSlide = { img: string; alt: string };

type HeroSectionProps = {
  slides?: HeroSlide[];
  content?: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
  };
};

export default function HeroSection({ slides = HOME_SLIDES, content }: HeroSectionProps) {
  const [slide, setSlide] = useState(0);

  const total = slides.length;
  const next = useCallback(() => setSlide((p) => (p + 1) % total), [total]);

  useEffect(() => {
    if (total < 2) {
      return;
    }

    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, total]);

  return (
    <section className="relative h-[430px] overflow-hidden sm:h-[560px] lg:h-[clamp(560px,42.51vw,700px)]">
      {/* Background image slider */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === slide ? 1 : 0 }}
        >
          <Image
            src={s.img}
            alt={s.alt}
            fill
            quality={85}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className="object-cover object-[-100px] lg:object-center"
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      {/* Slide dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 lg:bottom-7">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`smooth-hover h-2.5 rounded-full ${
                i === slide ? "bg-dent-accent w-7" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}

      {content && (
        <div className="pointer-events-none absolute inset-0 z-[35] mx-auto flex max-w-7xl items-center px-5 pb-24 sm:px-8 lg:px-12 lg:pb-0">
          <div className="max-w-[610px] text-white [text-shadow:0_2px_20px_rgba(4,49,53,.35)] lg:max-w-[44%] xl:max-w-[610px]">
            <p className="text-xs font-bold tracking-[.18em] text-[#56e2d5] uppercase sm:text-sm">
              {content.eyebrow}
            </p>
            <h1 className="leading-light mt-3 text-4xl font-semibold lg:text-[49px]">
              {content.title}
              <br />
              <span className="text-[#45d8ca]">{content.accent}</span>
            </h1>
            <p className="mt-5 max-w-[560px] text-sm leading-6 font-medium text-white/90 sm:text-lg sm:leading-8 lg:text-lg">
              {content.description}
            </p>
          </div>
        </div>
      )}

      {/* Mobile CTA – the full form lives in the appointment section below */}
      <div className="absolute inset-x-0 bottom-14 z-40 flex justify-center px-5 lg:hidden">
        <button
          type="button"
          onClick={openConsultationPopup}
          className="smooth-hover button-hover hover-lift bg-dent-accent inline-flex min-w-[220px] items-center justify-center rounded-lg px-7 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase shadow-[0_12px_30px_rgba(7,86,90,0.28)] focus:ring-4 focus:ring-white/40 focus:outline-none active:scale-[0.98]"
        >
          Book an Appointment
        </button>
      </div>

      {/* Form – right side, on top of slider */}
      <div className="absolute inset-y-0 right-[7%] z-40 hidden w-full items-center lg:flex lg:px-0">
        <div className="absolute right-10 w-full rounded-[18px] bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:max-w-[470px] sm:p-6 lg:p-8">
          <h3 className="mb-4 text-center text-base font-bold text-[#039382] sm:mb-6 lg:text-xl">
            Book an Appointment
          </h3>
          <BiginAppointmentWidget hideTitle />
        </div>
      </div>
      <div>
        <Image
          src="/home/hero-sha.png"
          alt=""
          width={2056}
          height={456}
          aria-hidden="true"
          className="absolute bottom-0 left-0 z-30 h-auto w-full"
        />
      </div>
    </section>
  );
}
