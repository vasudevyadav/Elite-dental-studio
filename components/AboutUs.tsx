import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedArrowCta from "./AnimatedArrowCta";

function ToothIcon() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2bd0c0]">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-white lg:h-[18px] lg:w-[18px]">
        <path d="M12 2.5c-1.7 0-2.8-.9-4.4-.9C4.7 1.6 3 4 3 7c0 2.6 1.2 4.8 2 7 .9 2.5 1.3 6.5 3.4 6.5 1.8 0 1.8-4.3 3.6-4.3s1.8 4.3 3.6 4.3c2.1 0 2.5-4 3.4-6.5.8-2.2 2-4.4 2-7 0-3-1.7-5.4-4.6-5.4-1.6 0-2.7.9-4.4.9Z" />
      </svg>
    </span>
  );
}

export default function AboutUs() {
  return (
    <section id="about-us" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="mx-auto w-full max-w-[610px]">
          <Image
            src="/home/elite-6-year.png"
            alt="Elite Dental Studio treatment room with over 20 years of medical service experience"
            width={799}
            height={885}
            sizes="(max-width: 1024px) 90vw, 43vw"
            className="h-auto w-full"
          />
        </div>

        <div className="lg:py-4">
          <div className="mb-6 flex items-center gap-2.5">
            <ToothIcon />
            <span className="text-lg font-bold text-[#2bd0c0] lg:text-xl">About Us</span>
          </div>

          <h2 className="mb-4 text-2xl leading-[1.3] font-bold tracking-[-0.025em] text-[#286d73] lg:text-4xl">
            Best Dental Clinic in Calicut, Kochi, Kannur &amp; Coimbatore
          </h2>

          <div className="space-y-4 text-sm leading-[1.6] text-[#303436] sm:text-lg lg:text-lg">
            <p>
              Elite Dental Studio has been treating patients since 2020 as an ISO 9001 certified
              dental clinic in Calicut, Kochi, Kannur and Coimbatore. Every clinic runs on the same
              documented standard, so the care you receive in Calicut matches what a patient
              receives in Kochi, Kannur or Coimbatore.
            </p>
            <p>
              Our team includes MDS qualified specialists across implantology, orthodontics,
              pedodontics and oral surgery. Your case goes to the doctor trained in that exact
              field, not a single general dentist managing every problem. That structure, recognised
              through the Famdent Excellence in Dentistry Award for clinical innovation and patient
              care, is what patients mean when they call Elite Dental Studio the best dental clinic
              in Calicut, Kochi, Kannur &amp; Coimbatore.
            </p>
          </div>

          <div className="mt-10 border-y border-[#dfe8e8] py-7">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-4">
              <div className="grid items-center gap-2 lg:flex">
                <strong className="shrink-0 text-2xl leading-none font-black text-[#2bd0c0] lg:text-5xl">
                  <AnimatedCounter value={100} suffix="%" duration={1400} />
                </strong>
                <span className="text-sm leading-relaxed font-semibold text-[#303436] sm:text-sm">
                  Invisalign Treatment
                  <br />
                  Completed
                </span>
              </div>

              <div className="grid items-center gap-3 lg:flex">
                <strong className="shrink-0 text-2xl leading-none font-black text-[#2bd0c0] lg:text-5xl">
                  <AnimatedCounter value={100} suffix="%" duration={1400} />
                </strong>
                <span className="text-sm leading-relaxed font-semibold text-[#303436] sm:text-sm">
                  Patient Satisfaction
                  <br />
                  Rate
                </span>
              </div>
            </div>
          </div>

          <AnimatedArrowCta
            label="MORE ABOUT"
            href="/about"
            className="smooth-hover button-hover hover-lift mt-6 inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#07515a] py-2 pr-2.5 pl-5 text-base font-bold text-white hover:bg-[#2d7378] focus:ring-4 focus:ring-[#2bd0c0]/25 focus:outline-none lg:mt-10 lg:py-2.5"
          />
        </div>
      </div>
    </section>
  );
}
