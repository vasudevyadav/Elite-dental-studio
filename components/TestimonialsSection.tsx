import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    text: "Dr. Amrita and the team were amazing! From the moment I walked in, I felt at ease. The care and attention to detail were outstanding. My smile has never looked better! I’ve always been nervous about visiting the dentist, but the staff here made me feel so comfortable. They explained everything clearly and made sure I was okay throughout the procedure. The best dental experience I’ve ever had! The hygienists are gentle.",
    name: "Harshita Reddy",
    role: "Local Guide",
    image: "/home/doctors/dr-megha.jpg",
  },
  {
    text: "Elite Dental Studio exceeded every expectation I had. The whole experience was seamless and professional, and the team made every step easy to understand. I am delighted with the final result and feel much more confident about my smile.",
    name: "Priya Krishnan",
    role: "Verified Patient",
    image: "/home/doctors/dr-amrita.jpg",
  },
];

function Arrow({ left = false }: { left?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${left ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const move = (step: number) =>
    setIndex((current) => (current + step + testimonials.length) % testimonials.length);

  return (
    <section className="overflow-hidden px-5 py-6 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[28px] bg-[#2c7477] px-6 pb-[170px] pt-10 sm:px-10 lg:px-16 lg:pb-[180px] lg:pt-12">
          <Image
            src="/home/testimonial.png"
            alt=""
            width={251}
            height={266}
            aria-hidden="true"
            className="pointer-events-none absolute right-[19%] top-[25%] hidden h-[190px] w-[180px] object-contain opacity-20 lg:block"
          />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase text-[#28d1c2] sm:text-base">
                Testimonial
              </p>
              <h2 className="mt-5 max-w-[690px] text-2xl font-extrabold leading-[1.15] tracking-[-0.025em] text-white sm:text-[42px]">
                Real stories of exceptional care
                <br className="hidden sm:block" /> and transformative smiles
              </h2>
              <p className="mt-5 max-w-[790px] text-base leading-[1.55] text-white/95 sm:text-lg">
                Hear from our patients about the care, comfort and confidence they
                discovered at Elite Dental Studio.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex w-fit items-center gap-4 rounded-[8px] bg-[#28d1c2] lg:py-3 py-1.5 pl-5 pr-3 text-sm font-bold uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#20c4b6]"
            >
              Video Review
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#28cabb]">
                <Arrow />
              </span>
            </button>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-[135px] w-[94%] rounded-[22px] bg-[#f3fbfa] px-5 py-7 shadow-[0_18px_45px_rgba(36,91,94,0.12)] sm:w-[86%] sm:px-10 lg:w-[75%] lg:rounded-[26px] lg:px-14 lg:py-10">
          <div className="flex gap-3 sm:gap-5 lg:gap-8">
            <span className="shrink-0 text-[46px] font-black leading-[0.75] text-[#2c7477] sm:text-[72px]">
              “
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm italic leading-[1.55] text-[#343737] sm:text-lg">
                {testimonial.text}
              </p>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[#fee9db]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="lg:text-xl text-lg font-extrabold text-[#2c7477]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-medium text-[#2c7477]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex overflow-hidden rounded-[7px]">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-11 items-center justify-center bg-[#28d1c2] text-white"
                  >
                    <Arrow left />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next testimonial"
                    className="flex h-10 w-11 items-center justify-center bg-[#2c7477] text-white"
                  >
                    <Arrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
