import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

function ToothIcon() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2bd0c0]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="lg:h-[18px] lg:w-[18px] fill-white"
      >
        <path d="M12 2.5c-1.7 0-2.8-.9-4.4-.9C4.7 1.6 3 4 3 7c0 2.6 1.2 4.8 2 7 .9 2.5 1.3 6.5 3.4 6.5 1.8 0 1.8-4.3 3.6-4.3s1.8 4.3 3.6 4.3c2.1 0 2.5-4 3.4-6.5.8-2.2 2-4.4 2-7 0-3-1.7-5.4-4.6-5.4-1.6 0-2.7.9-4.4.9Z" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#07515a]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14m-5-5 5 5-5 5"
        />
      </svg>
    </span>
  );
}

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="mx-auto w-full max-w-[610px]">
          <Image
            src="/home/about-us-img.png"
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
            <span className="lg:text-xl text-lg font-bold text-[#2bd0c0]">About Us</span>
          </div>

          <h2 className="mb-4 text-2xl font-extrabold leading-[1.3] tracking-[-0.025em] text-[#286d73] lg:text-4xl">
            Best Dental Clinic in  Calicut, Kochi, Kannur &amp;
            Coimbatore
          </h2>

          <div className="space-y-4 text-sm leading-[1.6] text-[#303436] sm:text-lg lg:text-lg">
            <p>
              Elite Dental Studio, The Best Dental clinic in Calicut, Kochi,
              Kannur, Kerala offers a comprehensive set of oral healthcare
              services, ensures top-class armamentarium, and implements the
              latest pain-management technology to provide affordable dental
              care services including Dental implants, Pediatric dentistry,
              Root canal therapy, Laser dentistry, Periodontics,
              Prosthodontics, Cosmetic Treatments etc., all of the highest
              quality.
            </p>
            <p>
              Our vision is to exceed patient expectations in each service we
              provide and ensure that each patient sustains a healthy smile
              each time.
            </p>
          </div>

          <div className="mt-10 border-y border-[#dfe8e8] py-7">
            <div className="grid gap-6 grid-cols-2 lg:gap-4">
              <div className="lg:flex grid items-center gap-2 ">
                <strong className="shrink-0 text-2xl font-black leading-none text-[#2bd0c0] lg:text-5xl">
                  <AnimatedCounter value={98} suffix="%" duration={1400} />
                </strong>
                <span className="text-sm leading-relaxed text-[#303436] sm:text-sm font-semibold">
                  Invisalign Treatment
                  <br />
                  Complete
                </span>
              </div>

              <div className="lg:flex grid items-center gap-3">
                <strong className="shrink-0 text-2xl font-black leading-none text-[#2bd0c0] lg:text-5xl">
                  <AnimatedCounter value={100} suffix="%" duration={1400} />
                </strong>
                <span className="text-sm leading-relaxed text-[#303436] sm:text-sm font-semibold">
                  Patient Satisfaction
                  <br />
                  Rate
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="lg:mt-10 mt-6 inline-flex items-center gap-3 rounded-lg bg-[#07515a] lg:py-2.5 py-2 pl-5 pr-2.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2d7378] focus:outline-none focus:ring-4 focus:ring-[#2bd0c0]/25"
          >
            MORE ABOUT
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
