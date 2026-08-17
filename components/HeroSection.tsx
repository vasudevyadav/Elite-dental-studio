import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const HOME_SLIDES = [{ img: "/home/slider-1.png", alt: "Dental Care 1" }];

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

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M3 5l4 4 4-4"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroSection({ slides = HOME_SLIDES, content }: HeroSectionProps) {
  const [slide, setSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", clinic: "" });

  const total = slides.length;
  const next = useCallback(() => setSlide((p) => (p + 1) % total), [total]);

  useEffect(() => {
    if (total < 2) {
      return;
    }

    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, total]);

  useEffect(() => {
    if (!modalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [modalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => e.preventDefault();

  const inputClass =
    "h-11 w-full rounded-[5px] border border-[#8bb5b6] bg-[#f5fbfa] px-4 text-sm text-gray-700 placeholder-gray-500 focus:border-dent-accent focus:outline-none focus:ring-1 focus:ring-dent-accent sm:h-12 sm:px-5";

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
            quality={60}
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
          onClick={() => setModalOpen(true)}
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className={inputClass}
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Your Mobile No."
              className={inputClass}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Mail"
              className={inputClass}
            />

            <input
              type="text"
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              className={inputClass}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />

            <div className="relative">
              <select
                aria-label="Select clinic"
                name="clinic"
                value={form.clinic}
                onChange={handleChange}
                className="focus:border-dent-accent h-11 w-full appearance-none rounded-[5px] border border-[#8bb5b6] bg-[#f5fbfa] px-4 pr-12 text-sm text-gray-500 focus:outline-none sm:h-12 sm:px-5"
              >
                <option value="">Select Clinic</option>
                <option value="calicut">Calicut</option>
                <option value="kochi">Kochi</option>
                <option value="kannur">Kannur</option>
                <option value="coimbatore">Coimbatore</option>
              </select>
              <div className="bg-dent-nav pointer-events-none absolute top-0 right-0 flex h-full w-11 items-center justify-center rounded-r-lg">
                <ChevronDown />
              </div>
            </div>

            <button
              type="submit"
              className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav mx-auto mt-2 w-full max-w-[245px] rounded-[5px] py-3 text-sm font-bold text-white"
            >
              Book Now!
            </button>
          </form>
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

      {/* Mobile appointment modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#123f43]/70 p-4 backdrop-blur-sm lg:hidden"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-appointment-title"
            className="relative max-h-[92dvh] w-full max-w-[440px] overflow-y-auto rounded-[22px] bg-white p-5 shadow-[0_24px_70px_rgba(5,42,45,0.35)] sm:p-7"
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close appointment form"
              className="smooth-hover hover-lift text-dent-nav focus:ring-dent-accent/20 absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f8f6] text-xl font-bold hover:bg-[#d5f3ef] focus:ring-4 focus:outline-none"
            >
              ×
            </button>

            <h3
              id="mobile-appointment-title"
              className="text-dent-text mb-5 pr-10 text-center text-lg font-bold italic"
            >
              Book an Appointment
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className={inputClass}
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Mobile No."
                className={inputClass}
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Mail"
                className={inputClass}
              />
              <input
                type="text"
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                className={inputClass}
                onFocus={(event) => (event.target.type = "date")}
                onBlur={(event) => {
                  if (!event.target.value) event.target.type = "text";
                }}
                required
              />

              <div className="relative">
                <select
                  aria-label="Select clinic"
                  name="clinic"
                  value={form.clinic}
                  onChange={handleChange}
                  className="focus:border-dent-accent focus:ring-dent-accent h-11 w-full appearance-none rounded-[5px] border border-[#8bb5b6] bg-[#f5fbfa] px-4 pr-12 text-sm text-gray-500 focus:ring-1 focus:outline-none sm:h-12 sm:px-5"
                  required
                >
                  <option value="">Select Clinic</option>
                  <option value="calicut">Calicut</option>
                  <option value="kochi">Kochi</option>
                  <option value="kannur">Kannur</option>
                  <option value="coimbatore">Coimbatore</option>
                </select>
                <div className="bg-dent-nav pointer-events-none absolute top-0 right-0 flex h-full w-11 items-center justify-center rounded-r-lg">
                  <ChevronDown />
                </div>
              </div>

              <button
                type="submit"
                className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav focus:ring-dent-accent/25 mx-auto mt-2 w-full max-w-[260px] rounded-[6px] py-3 text-sm font-bold text-white focus:ring-4 focus:outline-none"
              >
                Book Now!
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
