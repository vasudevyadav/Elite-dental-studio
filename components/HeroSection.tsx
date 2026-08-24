import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { submitConsultation } from "@/lib/consultation";
import { openConsultationPopup } from "@/lib/consultationPopup";
import Recaptcha, { recaptchaEnabled } from "@/components/Recaptcha";

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
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", clinic: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const router = useRouter();

  const total = slides.length;
  const next = useCallback(() => setSlide((p) => (p + 1) % total), [total]);

  useEffect(() => {
    if (total < 2) {
      return;
    }

    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, total]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (recaptchaEnabled() && !captchaToken) {
      setStatus("error");
      setFeedback("Please complete the CAPTCHA.");
      return;
    }
    setStatus("submitting");
    const result = await submitConsultation({
      name: form.name,
      phone: form.phone,
      email: form.email,
      clinicSlug: form.clinic,
      preferredDate: form.date,
      source: "hero-section",
      captchaToken,
    });
    setFeedback(result.message);
    if (result.success) {
      setStatus("success");
      setForm({ name: "", phone: "", email: "", date: "", clinic: "" });
      router.push("/thank-you");
    } else {
      setStatus("error");
    }
  };

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
            <Recaptcha onTokenChange={setCaptchaToken} />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav mx-auto mt-2 w-full max-w-[245px] rounded-[5px] py-3 text-sm font-bold text-white disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Book Now!"}
            </button>
            {feedback && (
              <p
                className={`text-center text-sm font-semibold ${status === "success" ? "text-emerald-600" : "text-red-600"}`}
              >
                {feedback}
              </p>
            )}
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

    </section>
  );
}
