import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const facilities = [
  {
    title: "Dental Implant Motor",
    tag: "Implantology",
    image: "/facilities/implant-motor-v2.png",
    text: "A dental implant motor is a precision-driven system used during implant surgery. Multiple speed and torque settings give our clinicians close control while preparing the jawbone and placing an implant.",
    detail:
      "This controlled approach supports accurate positioning, efficient treatment and predictable results while helping reduce procedure time for the patient.",
  },
  {
    title: "Advanced Portable Digital RVG",
    tag: "Digital diagnostics",
    image: "/facilities/digital-rvg-v2.png",
    text: "Our compact Radiographic Vision System captures high-quality digital images of the teeth and surrounding structures and displays them immediately for diagnosis.",
    detail:
      "Digital acquisition is faster than film-based X-rays and uses significantly lower radiation exposure, while its portable design allows efficient imaging within the clinic.",
  },
  {
    title: "Conscious Sedation",
    tag: "Patient comfort",
    image: "/facilities/sedation-v2.png",
    text: "Conscious sedation helps anxious patients remain calm and comfortable during fillings, extractions, root canal treatments and other dental procedures.",
    detail:
      "You remain conscious, responsive and able to communicate throughout treatment while a trained dental professional carefully monitors your comfort and wellbeing.",
  },
  {
    title: "Dedicated Surgical Unit",
    tag: "Advanced care",
    image: "/facilities/surgical-unit-v2.png",
    text: "Our contemporary, purpose-built surgical unit supports minor and major oral surgeries, including advanced dental implant procedures.",
    detail:
      "A focused clinical setting, modern equipment and carefully followed protocols allow the team to perform surgical care with precision and confidence.",
  },
  {
    title: "Private Patient Lounges",
    tag: "Comfort",
    image: "/facilities/lounge-v2.png",
    text: "Dedicated patient lounges create a calm, considered environment away from the clinical treatment areas.",
    detail:
      "Patients and accompanying family members can relax comfortably before consultation and recover peacefully after treatment.",
  },
  {
    title: "Children’s Play Area",
    tag: "Family friendly",
    image: "/facilities/play-area-v2.png",
    text: "A dedicated play area gives our youngest patients a welcoming space to explore, play and feel at ease.",
    detail:
      "The familiar, friendly environment helps reduce dental anxiety and makes the overall treatment experience more positive for children and parents.",
  },
  {
    title: "Intraoral Camera",
    tag: "Clear consultation",
    image: "/facilities/intraoral-camera-v2.png",
    text: "A state-of-the-art intraoral camera captures detailed, real-time views from inside the mouth and displays them clearly during consultation.",
    detail:
      "You can see exactly what your dentist sees, understand the diagnosis and take part in treatment decisions with greater clarity and confidence.",
  },
  {
    title: "W&H Lina Eco B-Class Sterilizer",
    tag: "Sterilisation",
    image: "/facilities/sterilizer-v2.png",
    text: "Our clinics use the advanced W&H Lina Eco B-Class sterilisation system to maintain uncompromising instrument hygiene.",
    detail:
      "The internationally manufactured equipment works alongside strict handling protocols followed by trained doctors and clinical staff to support a safe treatment environment.",
  },
  {
    title: "In-house OPG & Digital Radiography",
    tag: "Precision imaging",
    image: "/facilities/opg-v2.png",
    text: "Modern RVG and panoramic OPG imaging allow our clinicians to diagnose oral health concerns in a fast, painless and non-invasive way.",
    detail:
      "Digital sensors provide clear images with minimal radiation exposure and make it easier to review, enlarge and process diagnostic information immediately.",
  },
  {
    title: "BioLase Laser Dentistry",
    tag: "Gentle technology",
    image: "/facilities/laser-v2.png",
    text: "BioLase combines focused light and thermal energy to deliver highly precise dental treatment with an exceptionally gentle patient experience.",
    detail:
      "Laser-assisted care can improve comfort and accuracy across a range of procedures while supporting a cleaner, more controlled treatment area.",
  },
  {
    title: "Cosmetology",
    tag: "Aesthetic care",
    image: "/facilities/cosmetology-v2.png",
    text: "Our aesthetic approach considers tooth alignment, shape and colour alongside overall facial harmony and personal preferences.",
    detail:
      "Careful planning helps create a balanced result that improves appearance and confidence without losing the natural character of your smile.",
  },
  {
    title: "Full Mouth Rehabilitation",
    tag: "Complete restoration",
    image: "/facilities/full-mouth-v2.png",
    text: "Full mouth rehabilitation coordinates advanced restorative and surgical care to rebuild the health, function and appearance of a smile.",
    detail:
      "Every treatment plan is personalised around your clinical needs, bringing multiple areas of dentistry together in a clear, carefully sequenced journey.",
  },
];

function FacilityIcon({ index }: { index: number }) {
  const common = "h-4 w-4";
  const paths = [
    <>
      <path d="M8 4c-2 2-3 5-2 9 1 5 3 7 5 7 1 0 1-4 2-4s1 4 2 4c2 0 4-2 5-7 1-4 0-7-2-9-2-1-4 1-5 1s-3-2-5-1Z" />
    </>,
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </>,
    <>
      <path d="M7 8a5 5 0 0 1 10 0c0 5-2 9-5 12-3-3-5-7-5-12Z" />
      <path d="M9 9h6" />
    </>,
    <>
      <path d="M4 19h16M7 19V8h10v11M9 8V5h6v3" />
      <path d="M12 11v5M9.5 13.5h5" />
    </>,
    <>
      <path d="M5 15h14v4H5zM7 15v-4a5 5 0 0 1 10 0v4" />
    </>,
    <>
      <circle cx="9" cy="8" r="2" />
      <circle cx="16" cy="7" r="1.5" />
      <path d="M5 19c0-4 1.5-7 4-7s4 3 4 7M13 19c0-3 1-6 3-6s3 3 3 6" />
    </>,
    <>
      <path d="M5 7h10v10H5zM15 10l4-2v8l-4-2" />
      <path d="M8 10h4M8 13h3" />
    </>,
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10M7 12h10" />
    </>,
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M7 15l3-3 2 2 4-5 2 2" />
    </>,
    <>
      <path d="m4 18 8-12 2 5 6 2-12 7Z" />
      <path d="m16 5 1-2M19 8l2-1" />
    </>,
    <>
      <path d="M12 20s7-4 7-10a4 4 0 0 0-7-2 4 4 0 0 0-7 2c0 6 7 10 7 10Z" />
      <path d="M9 12h6" />
    </>,
    <>
      <path d="M8 4c-2 2-3 5-2 9 1 5 3 7 5 7 1 0 1-4 2-4s1 4 2 4c2 0 4-2 5-7 1-4 0-7-2-9-2-1-4 1-5 1s-3-2-5-1Z" />
    </>,
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className={common}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

export default function FacilitiesExperience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reachedCount, setReachedCount] = useState(0);
  const [lineBounds, setLineBounds] = useState({ top: 0, height: 0 });

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportMarker = window.innerHeight * 0.52;
      const rows = Array.from(timelineRef.current.querySelectorAll("article"));
      if (!rows.length) return;
      const firstRect = rows[0].getBoundingClientRect();
      const lastRect = rows[rows.length - 1].getBoundingClientRect();
      const start = firstRect.top + firstRect.height / 2 - rect.top;
      const end = lastRect.top + lastRect.height / 2 - rect.top;
      const nextProgress = Math.min(
        1,
        Math.max(0, (viewportMarker - (rect.top + start)) / Math.max(1, end - start)),
      );
      setLineBounds({ top: start, height: end - start });
      setProgress(nextProgress);
      setReachedCount(
        rows.filter(
          (row) =>
            row.getBoundingClientRect().top + row.getBoundingClientRect().height / 2 <=
            viewportMarker,
        ).length,
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-[#f4faf9] px-6 py-8 sm:px-10 lg:px-16 lg:py-14 xl:px-24"
    >
      <div className="pointer-events-none absolute -top-48 right-0 h-96 w-96 rounded-full bg-[#58d8c9]/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          <p className="text-xs font-bold tracking-[.22em] text-[#20aa9e] uppercase">
            Designed around you
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.045em] text-[#123f43] lg:text-4xl">
            Technology that feels human.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#607477] lg:text-base">
            Explore the clinical technology, safety systems and comfort-led spaces behind the Elite
            experience.
          </p>
          <div className="mx-auto mt-4 flex w-fit items-center gap-2">
            <span className="h-px w-12 bg-[#a8dcd7]" />
            <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#25bfae]" />
            <span className="h-px w-12 bg-[#a8dcd7]" />
          </div>
        </div>

        <div ref={timelineRef} className="relative space-y-10 lg:space-y-16">
          <div
            className="absolute left-1/2 hidden w-[3px] -translate-x-1/2 overflow-hidden rounded-full bg-[#d6e9e7] lg:block"
            style={{ top: lineBounds.top, height: lineBounds.height }}
          >
            <div
              className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-[#66dfd2] via-[#25bfae] to-[#137f7b] shadow-[0_0_16px_rgba(37,191,174,.6)]"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 z-30 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#0b7774] shadow-[0_0_0_4px_rgba(37,191,174,.22),0_0_18px_rgba(37,191,174,.7)] lg:block"
            style={{ top: lineBounds.top + progress * lineBounds.height }}
          />
          {facilities.map((facility, index) => {
            const reversed = index % 2 === 1;
            const reached = index < reachedCount;
            return (
              <article
                key={facility.title}
                className="relative grid items-center gap-6 lg:grid-cols-2 lg:gap-16"
              >
                <span
                  className={`absolute top-1/2 left-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f4faf9] transition-colors duration-300 lg:flex ${reached ? "bg-[#25bfae] text-white shadow-[0_0_0_1px_#65c9c0,0_0_18px_rgba(37,191,174,.38)]" : "bg-white text-[#709493] shadow-[0_0_0_1px_#b5d5d2,0_6px_15px_rgba(20,76,79,.1)]"}`}
                >
                  <FacilityIcon index={index} />
                </span>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#d9eae8] shadow-[0_18px_45px_rgba(12,73,77,.12)] ${reversed ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-[1.035]"
                    sizes="(max-width:1024px) 100vw,50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073e42]/55 via-transparent to-transparent" />
                  <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between text-white">
                    <span className="rounded-full border border-white/25 bg-[#0b4448]/65 px-4 py-2 text-[11px] font-bold tracking-[.14em] uppercase backdrop-blur">
                      {facility.tag}
                    </span>
                  
                  </div>
                </div>
                <div className={`${reversed ? "lg:order-1" : ""} text-left`}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#25bfae]" />
                    <span className="text-xs font-bold tracking-[.18em] text-[#20aa9e] uppercase">
                      Elite facility {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-.04em] text-[#174e53] lg:text-4xl">
                    {facility.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#536d70] lg:text-base">
                    {facility.text}
                  </p>
                  <p className="mt-2.5 text-sm leading-7 text-[#708487] lg:text-[15px]">
                    {facility.detail}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#e2f5f2] px-4 py-2.5 text-xs font-bold text-[#237b7e]">
                      Modern technology
                    </span>
                    <span className="rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#597477] shadow-sm">
                      Patient-first care
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
