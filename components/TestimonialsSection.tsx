import Image from "next/image";
import { useState } from "react";
import AnimatedArrowCta from "./AnimatedArrowCta";

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
    <section id="testimonials" className="overflow-hidden px-5 py-6 sm:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="bg-dent-panel relative rounded-[28px] px-6 pt-10 pb-[100px] sm:px-10 lg:px-16 lg:pt-12 lg:pb-[160px]">
          <Image
            src="/home/testimonial.png"
            alt=""
            width={251}
            height={266}
            aria-hidden="true"
            className="pointer-events-none absolute top-[25%] right-[19%] hidden h-[190px] w-[180px] object-contain opacity-20 lg:block"
          />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-dent-accent text-sm font-semibold uppercase sm:text-base">
                Testimonial
              </p>
              <h2 className="mt-3 max-w-[690px] text-2xl leading-[1.15] font-semibold tracking-[-0.025em] text-white lg:text-[39px]">
                Real Stories of Exceptional Care &amp; Better Smiles
              </h2>
              <p className="mt-3 max-w-[790px] text-base leading-[1.55] text-white/95 sm:text-lg">
                Across dozens of Google reviews, one line repeats, the doctor explained what they
                were doing before they did it.
              </p>
            </div>

            <AnimatedArrowCta
              label="VIDEO REVIEW"
              onAction={() => move(1)}
              arrowClassName="text-[#28cabb]"
              className="bg-dent-accent hover:bg-dent-nav inline-flex w-fit items-center gap-4 rounded-[8px] py-1.5 pr-3 pl-5 text-sm font-bold text-white uppercase transition hover:-translate-y-0.5 lg:py-3"
            />
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-[135px] w-[94%] rounded-[22px] bg-[#f3fbfa] px-5 py-7 shadow-[0_18px_45px_rgba(36,91,94,0.12)] sm:w-[86%] sm:px-10 lg:w-[75%] lg:rounded-[26px] lg:px-14 lg:py-10">
          <div className="flex gap-3 sm:gap-5 lg:gap-8">
            <span className="shrink-0 text-[46px] leading-[0.75] font-black text-[#29666b] sm:text-[72px]">
              “
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-[1.55] text-[#343737] italic sm:text-lg">
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
                    <h3 className="text-lg font-extrabold text-[#29666b] lg:text-xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-medium text-[#29666b]">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex overflow-hidden rounded-[7px]">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous testimonial"
                    className="bg-dent-accent flex h-10 w-11 items-center justify-center text-white"
                  >
                    <Arrow left />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next testimonial"
                    className="bg-dent-panel flex h-10 w-11 items-center justify-center text-white"
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
