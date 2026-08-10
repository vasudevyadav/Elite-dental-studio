import Image from "next/image";
import Link from "next/link";
import SitePage from "@/components/SitePage";

const sterilisationSteps = [
  ["Cleaned immediately", "Instruments are cleaned and inspected immediately after every use."],
  ["Class B autoclave", "Each tool completes the W&H Lina Eco Class B autoclave cycle."],
  ["Separated storage", "Sterilised instruments are stored separately from used instruments."],
  ["Protocol verified", "Trained doctors and clinical staff follow strict handling protocols."],
];

const protectiveMeasures = [
  "Gloves and masks worn by the clinical team during treatment",
  "Fresh gloves and masks for every patient",
  "Protective eyewear used during treatment",
  "Treatment surfaces and chairs disinfected between appointments",
];

const technologies = [
  {
    title: "Digital imaging",
    label: "RVG & OPG",
    image: "/service/what-treatment.png",
    text: "Portable digital RVG and in-house OPG use digital sensors for faster results and lower radiation exposure per scan, without losing diagnostic clarity.",
  },
  {
    title: "Dedicated surgery",
    label: "Surgical unit",
    image: "/office/calicut-08.webp",
    text: "Implant placement and minor or major surgery take place in a dedicated unit, separate from routine treatment chairs.",
  },
  {
    title: "Conscious sedation",
    label: "Monitored comfort",
    image: "/about-freepik-treatment.jpg",
    text: "Available for fillings, extractions and root canal treatment. You remain conscious and responsive while a trained professional monitors you.",
  },
  {
    title: "Clear diagnosis",
    label: "Intraoral camera",
    image: "/about-freepik-checkup.jpg",
    text: "See the same real-time image your dentist sees, understand the concern and make an informed treatment decision.",
  },
];

const clinics = [
  ["Calicut", "+91 9745 072 555"],
  ["Kochi", "+91 9567 124 888"],
  ["Kannur", "+91 9645 874 777"],
  ["Coimbatore", "+91 9633 694999"],
];

const faqs = [
  [
    "Is every instrument sterilised before my appointment?",
    "Yes. All instruments go through our Class B autoclave sterilisation cycle before use, for every patient, at every visit, across all four clinics.",
  ],
  [
    "Do you follow the same safety protocol at every branch?",
    "Yes. Our sterilisation equipment, imaging standards and clinical protocols are consistent across Calicut, Kochi, Kannur and Coimbatore.",
  ],
  [
    "Is sedation safe for dental procedures?",
    "Conscious sedation is administered and monitored by a trained dental professional throughout your procedure. You remain conscious and responsive, with reduced awareness that makes treatment more comfortable.",
  ],
  [
    "How does digital imaging reduce my radiation exposure?",
    "Digital RVG and OPG use sensors instead of film. They need a lower radiation dose to produce a clear image, meaning less exposure per scan than traditional dental X-rays.",
  ],
  [
    "What protective measures are in place between patients?",
    "Gloves and masks are changed for every patient, and each treatment surface is cleaned and disinfected before the next appointment begins.",
  ],
];

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.2 2c-4.3-1.8-7-4.5-8.8-8.8L9 8 7 3Z" />
  </svg>
);

export default function PatientSafetyPage() {
  return (
    <SitePage
      title="Patient Safety at Elite Dental Studio"
      description="Learn about instrument sterilisation, digital imaging, conscious sedation and clinical safety protocols across Elite Dental Studio clinics."
    >
      <section className="relative isolate overflow-hidden bg-[#0b4549] text-white">
        <Image
          src="/office/kochi-02.webp"
          alt="Clean modern treatment room at Elite Dental Studio"
          fill
          priority
          className="-z-20 object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,45,49,.98)_0%,rgba(5,61,65,.9)_52%,rgba(5,61,65,.3)_100%)]" />
        <div className="mx-auto flex min-h-[590px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-[760px]">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[.22em] text-[#55dfd2] uppercase">
              <span className="h-px w-9 bg-[#55dfd2]" /> Safety without compromise
            </p>
            <h1 className="mt-5 text-[40px] leading-[1.08] font-bold tracking-[-.045em] sm:text-6xl lg:text-[68px]">
              Patient Safety at <span className="text-[#50d9cc]">Elite Dental Studio</span>
            </h1>
            <p className="mt-6 max-w-[680px] text-base leading-8 text-white/82 sm:text-lg">
              Safety runs through every instrument we sterilise, every image we take, every sedation
              procedure we monitor and every team member we train.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#safety-process"
                className="rounded-full bg-[#25bfae] px-7 py-3.5 text-center text-sm font-bold transition hover:bg-[#1ba99d]"
              >
                Explore our safety process
              </Link>
              <Link
                href="#book-safely"
                className="rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-center text-sm font-bold backdrop-blur transition hover:bg-white hover:text-[#174e53]"
              >
                Ask our care team
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-[#07383c]/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {[
              ["ISO 9001", "Certified processes"],
              ["100K+", "Patients treated"],
              ["4", "Clinic locations"],
              ["Class B", "Autoclave standard"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-white/10 px-3 py-5 text-center">
                <strong className="block text-lg text-[#59dfd3] sm:text-xl">{value}</strong>
                <span className="mt-1 block text-[10px] tracking-[.12em] text-white/55 uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Consistent across every clinic
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              The same standard, wherever you visit.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#607275]">
              Since opening in 2020, we have treated more than 100,000 patients across Calicut,
              Kochi, Kannur and Coimbatore.
            </p>
            <p className="mt-4 text-base leading-8 text-[#607275]">
              The same sterilisation equipment, imaging standards and documented safety protocols
              apply at every branch, so the quality of your care does not change with location.
            </p>
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-[28px] sm:min-h-[430px]">
            <Image
              src="/office/calicut-04.webp"
              alt="Elite Dental Studio clinical team"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,45vw"
            />
            <div className="absolute right-5 bottom-5 left-5 flex items-center gap-4 rounded-2xl bg-[#174e53]/95 p-5 text-white backdrop-blur">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25bfae]">
                <ShieldIcon />
              </span>
              <p className="text-sm leading-6 text-white/80">
                <b className="block text-base text-white">Documented and maintained</b>ISO-aligned
                processes across our network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="safety-process" className="bg-[#eff8f6] px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
                Instrument sterilisation
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
                How we sterilise every instrument
              </h2>
              <p className="mt-5 text-base leading-8 text-[#607275]">
                Every instrument passes through the W&amp;H Lina Eco, a Class B autoclave from an
                international manufacturer. It reaches every surface, including hollow and wrapped
                instruments—not only the exterior.
              </p>
              <p className="mt-5 rounded-xl bg-[#174e53] px-5 py-4 text-sm leading-6 font-semibold text-white">
                Nothing reaches you unless it has completed the full cycle.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sterilisationSteps.map(([title, text], index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[#d6e9e6] bg-white p-5 shadow-[0_10px_30px_rgba(20,84,87,.06)]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dcf5f1] text-sm font-bold text-[#188e84]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#174e53]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#647678]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
          <div className="relative min-h-[350px] overflow-hidden rounded-[28px] sm:min-h-[470px]">
            <Image
              src="/office/kochi-04.webp"
              alt="Prepared Elite Dental Studio operatory"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,45vw"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Prepared for every patient
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Protective equipment and a clean operatory
            </h2>
            <div className="mt-7 grid gap-3">
              {protectiveMeasures.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-xl bg-[#f2f9f8] p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#25bfae] text-sm font-bold text-white">
                    ✓
                  </span>
                  <p className="text-sm leading-6 text-[#50696b] sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf8f6] px-5 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Technology with purpose
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Advanced technology and patient comfort
            </h2>
            <p className="mt-5 text-base leading-7 text-[#607275]">
              Imaging, surgery, sedation and diagnosis are designed around clarity, comfort and
              safer care.
            </p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto px-5 pb-5 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {technologies.map((item) => (
              <article
                key={item.title}
                className="group min-w-[84vw] snap-start overflow-hidden rounded-[22px] bg-white shadow-[0_14px_40px_rgba(18,82,86,.09)] sm:min-w-[55vw] lg:min-w-0"
              >
                <div className="relative h-[210px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:1024px) 70vw,25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c4c50]/85 to-transparent" />
                  <span className="absolute right-4 bottom-4 left-4 text-xs font-bold tracking-[.13em] text-[#5ee0d4] uppercase">
                    {item.label}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#174e53]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#607275]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="book-safely" className="bg-white px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#174e53,#28777a)] p-7 text-white sm:p-10 lg:px-12">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[.18em] text-[#55ded2] uppercase">
                Book your appointment
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Questions about safety before your visit?
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                Our team is happy to talk you through our sterilisation, imaging and treatment
                protocols.
              </p>
            </div>
            <Link
              href="/contact#contact-form"
              className="rounded-full bg-[#25bfae] px-7 py-3.5 text-center text-sm font-bold"
            >
              Send an enquiry
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clinics.map(([city, phone]) => (
              <a
                key={city}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 transition hover:bg-white hover:text-[#174e53]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#25bfae] text-white">
                  <PhoneIcon />
                </span>
                <span>
                  <small className="block text-[9px] tracking-[.12em] uppercase opacity-60">
                    {city}
                  </small>
                  <b className="mt-1 block text-sm">{phone}</b>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf8f6] px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Your safety questions, answered
            </h2>
          </div>
          <div className="mt-9 space-y-3">
            {faqs.map(([question, answer], index) => (
              <details
                key={question}
                open={index === 0}
                className="group rounded-2xl border border-[#d5e8e5] bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-[#174e53] marker:hidden">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e4f7f4] text-xl text-[#188e84] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-[#e2eeee] pt-4 text-sm leading-7 text-[#607275]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
