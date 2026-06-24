import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  { img: "/home/slider-1.png", alt: "Dental Care 1" },
  { img: "/home/slider-2.png", alt: "Dental Care 2" },
];

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", clinic: "" });

  const total = SLIDES.length;
  const next = useCallback(() => setSlide((p) => (p + 1) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => e.preventDefault();

  const inputClass =
    "h-11 w-full rounded-[5px] border border-[#8bb5b6] bg-[#f5fbfa] px-4 text-sm text-gray-700 placeholder-gray-500 focus:border-dent-accent focus:outline-none focus:ring-1 focus:ring-dent-accent sm:h-12 sm:px-5";

  return (
    <section className="relative h-[620px] overflow-hidden sm:h-[700px] lg:h-[790px] xl:h-[850px]">

      {/* Background image slider */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === slide ? 1 : 0 }}
        >
          <Image
            src={s.img}
            alt={s.alt}
            fill
            className="object-cover object-[38%_center] sm:object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Slide dots */}
      <div className="absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === slide ? "bg-dent-accent w-7" : "bg-white/60 w-2.5 hover:bg-white"
              }`}
          />
        ))}
      </div>

      {/* Form – right side, on top of slider */}
      <div className="absolute inset-y-0 right-0 z-40 flex w-full items-center px-4 sm:px-8 lg:right-[7%] lg:w-full lg:px-0">
        <div className="ml-auto w-full rounded-[18px] bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:max-w-[470px] sm:p-6 lg:p-8">
          <h3 className="mb-4 text-center text-base font-bold italic text-dent-text sm:mb-6 sm:text-lg">
            Book an Appointment
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
            <input type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Enter Your Name" className={inputClass} />

            <input type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder="Enter Your Mobile No." className={inputClass} />

            <input type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="Enter Your Mail" className={inputClass} />

            <input
              type="text"
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              className={inputClass}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
            />

            <div className="relative">
              <select name="clinic" value={form.clinic} onChange={handleChange}
                className="h-11 w-full appearance-none rounded-[5px] border border-[#8bb5b6] bg-[#f5fbfa] px-4 pr-12 text-sm text-gray-500 focus:border-dent-accent focus:outline-none sm:h-12 sm:px-5">
                <option value="">Select Clinic</option>
                <option value="calicut">Calicut</option>
                <option value="kochi">Kochi</option>
                <option value="kannur">Kannur</option>
                <option value="coimbatore">Coimbatore</option>
              </select>
              <div className="absolute right-0 top-0 h-full w-11 bg-dent-nav rounded-r-lg flex items-center justify-center pointer-events-none">
                <ChevronDown />
              </div>
            </div>

            <button type="submit"
              className="mx-auto mt-2 w-full max-w-[245px] rounded-[5px] bg-dent-accent py-3 text-sm font-bold text-white transition-colors hover:bg-[#2bbdbd]">
              Book Now!
            </button>
          </form>
        </div>
      </div>
      <div>
        <Image src="/home/hero-sha.png" alt="" width={2056} height={456} aria-hidden="true" className="absolute bottom-0 left-0 z-30 h-auto w-full" />
      </div>

    </section>
  );
}
