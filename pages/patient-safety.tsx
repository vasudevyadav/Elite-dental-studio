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
    "Yes. Our sterilisation equipment, imaging standards, and clinical protocols are consistent across Calicut, Kochi, Kannur and Coimbatore.",
  ],
  [
    "Is sedation safe for dental procedures?",
    "Conscious sedation is administered and monitored by a trained dental professional throughout your procedure. You remain conscious and responsive, with a reduced level of awareness that makes treatment more comfortable.",
  ],
  [
    "How does digital imaging reduce my radiation exposure?",
    "Digital RVG and OPG use sensors instead of film, which need a lower radiation dose to produce a clear image, meaning less exposure per scan than traditional dental X-rays.",
  ],
  [
    "What protective measures are in place between patients?",
    "Gloves and masks are changed for each patient, and every treatment surface is cleaned and disinfected before the next appointment begins.",
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
      <section className="relative isolate overflow-hidden bg-[#083f43] text-white">
        <Image
          src="/safety/patient-safety-hero.png"
          alt="Dental specialist presenting a sealed sterile instrument pouch to a patient"
          fill
          priority
          className="-z-20 object-cover object-[72%_center] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,42,46,.98)_0%,rgba(4,53,57,.91)_43%,rgba(4,53,57,.35)_72%,rgba(4,53,57,.08)_100%)] max-sm:bg-[linear-gradient(90deg,rgba(3,42,46,.98)_0%,rgba(4,53,57,.88)_68%,rgba(4,53,57,.48)_100%)]" />
        <div className="pointer-events-none absolute top-10 -left-32 -z-10 h-96 w-96 rounded-full bg-[#25bfae]/15 blur-3xl" />
        <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:min-h-[690px] sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-[720px]">
            <p className="text-xs font-bold tracking-[.22em] text-[#47d9cb] uppercase sm:text-sm">
              ISO 9001 certified care
            </p>
            <h1 className="mt-2.5 text-[38px] leading-[1.08] font-bold tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Patient Safety at Elite Dental Studio
            </h1>
            <h2 className="mt-3 text-xl font-medium text-[#66e0d5] sm:text-2xl">
              Safety you can see. Care you can trust.
            </h2>
            <p className="mt-6 max-w-[650px] text-base leading-8 text-white/85 sm:text-lg">
              From sealed instruments and Class B sterilisation to digital diagnosis and monitored
              sedation, every detail is prepared around your protection, comfort and confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Class B sterilisation", "Digital imaging", "Consistent across 4 clinics"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#safety-process"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25bfae] px-7 py-3.5 text-center text-sm font-bold transition hover:bg-[#1ba99d]"
              >
                <ShieldIcon /> See our safety process
              </Link>
              <Link
                href="#book-safely"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-center text-sm font-bold backdrop-blur transition hover:bg-white hover:text-[#174e53]"
              >
                <PhoneIcon /> Talk to our care team
              </Link>
            </div>
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
          <div className="relative min-h-[500px] overflow-hidden rounded-[28px] bg-[#174e53] shadow-[0_22px_60px_rgba(18,73,77,.14)] sm:min-h-[560px]">
            <Image
              src="/safety/clinic-safety-team.png"
              alt="Dental professionals in a modern Elite Dental Studio treatment room"
              fill
              className="object-cover object-center"
              sizes="(max-width:1024px) 100vw,45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073c40]/90 via-[#073c40]/10 to-transparent" />

            <div className="absolute top-5 left-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-[#0d4a4e]/85 p-3.5 text-white shadow-xl backdrop-blur-md sm:top-7 sm:left-7">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#25bfae]">
                <ShieldIcon />
              </span>
              <p className="text-xs leading-5 text-white/70">
                <b className="block text-sm text-white">Documented and maintained</b>
                One standard across our network
              </p>
            </div>

            <div className="absolute right-4 bottom-4 left-4 grid grid-cols-2 gap-2 sm:right-6 sm:bottom-6 sm:left-6 sm:gap-3">
              {[
                ["ISO 9001", "Certified processes"],
                ["100K+", "Patients treated"],
                ["4", "Clinic locations"],
                ["Class B", "Autoclave standard"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/80 bg-[#0b4549]/85 px-3 py-3 text-white shadow-lg backdrop-blur-md sm:rounded-2xl sm:px-4 sm:py-4"
                >
                  <strong className="block text-base text-[#60e1d5] sm:text-xl">{value}</strong>
                  <span className="mt-1 block text-[8px] tracking-[.1em] text-white/60 uppercase sm:text-[10px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="safety-process"
        className="overflow-hidden bg-[#103f43] px-5 py-8 text-white sm:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-bold tracking-[.2em] text-[#55ded2] uppercase">
                Instrument sterilisation
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.045em] sm:text-5xl">
                A complete sterile cycle—not a quick clean.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/65">
                Every instrument passes through the W&amp;H Lina Eco, a Class B autoclave from an
                international manufacturer. It reaches every surface, including hollow and wrapped
                instruments—not only the exterior.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-[#58d9ce]/25 bg-white/5 p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#25bfae] text-xl font-bold">
                  B
                </span>
                <p className="text-sm leading-6 text-white/70">
                  <b className="block text-base text-white">Class B standard</b>Built for hollow,
                  wrapped and solid instruments.
                </p>
              </div>
            </div>
            <div className="relative space-y-4 before:absolute before:top-8 before:bottom-8 before:left-6 before:w-px before:bg-gradient-to-b before:from-[#56ded2] before:via-[#56ded2]/50 before:to-transparent sm:before:left-8">
              {sterilisationSteps.map(([title, text], index) => (
                <article
                  key={title}
                  className="group relative ml-14 rounded-[22px] border border-white/10 bg-white/[.06] p-5 transition duration-500 hover:translate-x-1 hover:border-[#58d9ce]/40 hover:bg-white/[.09] sm:ml-20 lg:p-4"
                >
                  <span className="absolute top-5 -left-[3.55rem] z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-[#103f43] bg-[#25bfae] text-sm font-bold text-white shadow-[0_0_0_1px_rgba(88,217,206,.35)] sm:top-6 sm:-left-[5rem] sm:h-16 sm:w-16 sm:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-bold tracking-[.16em] text-[#55ded2] uppercase">
                    Safety checkpoint
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-7 text-white/60">{text}</p>
                </article>
              ))}
              <div className="relative ml-14 rounded-[22px] bg-[#25bfae] p-5 text-sm leading-6 font-semibold text-white sm:ml-20 sm:p-6">
                ✓ Nothing reaches your treatment tray unless it has completed the full cycle.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl lg:px-12">
          <div className="relative overflow-hidden rounded-[32px] bg-[#eef9f7] p-5 sm:p-8 lg:p-12">
            <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[#68e0d3]/20 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-12">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c6e5e1] bg-white px-4 py-2 text-[10px] font-bold tracking-[.16em] text-[#168d84] uppercase shadow-sm">
                  <span className="text-[#25bfae]">✦</span>
                  Prepared for every patient
                </div>
                <h2 className="mt-5 text-3xl leading-[1.08] font-semibold tracking-[-.045em] text-[#174e53] sm:text-5xl lg:text-[56px]">
                  A clean operatory, <span className="text-[#20b9aa]">reset for you.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#607275]">
                  The chair, surfaces and protective equipment are prepared again between every
                  appointment—so your treatment begins in a clean, carefully controlled space.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {protectiveMeasures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#d8ebe8] bg-white/85 p-4 shadow-[0_8px_24px_rgba(20,84,87,.05)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#83d8d0]"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#dcf6f2] text-sm font-bold text-[#168d84]">
                        ✓
                      </span>
                      <p className="text-sm leading-5 font-semibold text-[#315c60] lg:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative order-1 min-h-[350px] lg:order-2 lg:min-h-[600px]">
                <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#174e53] shadow-[0_28px_70px_rgba(15,72,76,.18)] sm:rounded-[40px]">
                  <Image
                    src="/office/kochi-04.webp"
                    alt="Prepared Elite Dental Studio operatory"
                    fill
                    className="object-cover transition duration-700 hover:scale-[1.02]"
                    sizes="(max-width:1024px) 100vw,54vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#083e42]/60 via-transparent to-transparent" />
                </div>
                <div className="absolute right-4 bottom-4 left-4 flex items-center gap-4 rounded-2xl border border-white/20 bg-[#0e4a4e]/88 p-4 text-white shadow-xl backdrop-blur-md sm:right-7 sm:bottom-7 sm:left-7 sm:p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25bfae]">
                    <ShieldIcon />
                  </span>
                  <p className="text-sm leading-6 text-white/70">
                    <b className="block text-base text-white">Protection at every touchpoint</b>
                    Cleaned, disinfected and prepared before you arrive.
                  </p>
                </div>
                <div className="absolute -top-4 -right-2 hidden items-center gap-3 rounded-2xl bg-white p-4 text-[#174e53] shadow-[0_16px_45px_rgba(16,72,76,.15)] sm:flex lg:-right-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dcf6f2] text-lg text-[#168d84]">
                    ✓
                  </span>
                  <span className="text-sm leading-5 font-semibold">
                    Reset between
                    <br /> every appointment
                  </span>
                </div>
              </div>
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

      <section className="bg-[#edf8f6] px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Patient safety
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Frequently Asked Questions
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
