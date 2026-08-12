import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";

const opportunities = [
  [
    "Dentists & specialists",
    "Clinical",
    "Work with experienced teams, modern diagnostics and specialist-led treatment planning.",
    "01",
  ],
  [
    "Dental nurses & assistants",
    "Patient care",
    "Help make every procedure organised, comfortable and reassuring for our patients.",
    "02",
  ],
  [
    "Front office & coordinators",
    "Operations",
    "Create a warm, seamless experience across appointments, visits and follow-up care.",
    "03",
  ],
] as const;

export default function CareersContent() {
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const fieldClass =
    "w-full rounded-xl border border-[#c9dfdc] bg-[#f8fbfb] px-4 py-3.5 text-sm text-[#254d50] outline-none transition placeholder:text-[#91a2a3] hover:border-[#9bcac5] focus:border-[#25bfae] focus:bg-white focus:ring-4 focus:ring-[#25bfae]/10";

  return (
    <>
      <div className="[&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[rgba(4,55,60,.58)]">
        <HeroSection
          slides={[
            {
              img: "/safety/clinic-safety-team.png",
              alt: "Dental professionals at Elite Dental Studio",
            },
          ]}
          content={{
            eyebrow: "Careers at Elite",
            title: "Build your career",
            accent: "around better care.",
            description:
              "Join a multidisciplinary dental team where skill, empathy and continuous learning shape every patient experience.",
          }}
        />
      </div>

      <section className="bg-white px-5 py-6 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
              Life at Elite
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Good people make exceptional care possible.
            </h2>
          </div>
          <div className="grid gap-6 text-sm leading-7 text-[#607779] sm:grid-cols-2">
            <p>
              We are a growing team of clinicians and care professionals united by high standards,
              thoughtful service and respect for every patient.
            </p>
            <p>
              Across our clinics, you will find modern technology, collaborative specialists and
              opportunities to keep learning while doing meaningful work.
            </p>
          </div>
        </div>
      </section>

      <section id="openings" className="bg-[#f3f9f8] px-5 py-6 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
              Opportunities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-4xl">
              Find where you fit.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {opportunities.map(([title, label, copy, number]) => (
              <article
                key={title}
                className="group flex min-h-[290px] flex-col rounded-[22px] border border-[#cfe2df] bg-white p-6 shadow-[0_14px_35px_rgba(19,78,82,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#88c7c1] hover:shadow-[0_20px_45px_rgba(19,78,82,.12)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#e5f6f3] px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-[#168f85] uppercase">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-[#9ab5b3]">{number}</span>
                </div>
                <h3 className="mt-8 text-xl leading-snug font-semibold text-[#174e53]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#667d7f]">{copy}</p>
                <a
                  href="#apply"
                  className="mt-auto flex items-center justify-between border-t border-[#dceae8] pt-5 text-sm font-bold text-[#168f85]"
                >
                  Apply for this role
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e5f6f3] transition group-hover:bg-[#25bfae] group-hover:text-white">
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-8 bg-white px-5 py-8 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
            Join our team
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-4xl">
            Your next chapter could start here.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#667d7f]">
            Share a few details and your résumé. We will review your profile for current and
            upcoming opportunities.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-[#d4e6e3] bg-white shadow-[0_24px_65px_rgba(18,75,79,.11)] lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(155deg,#174e53,#267176)] p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -bottom-24 h-64 w-64 rounded-full border-[44px] border-[#4dd8cb]/10" />
            <p className="text-xs font-bold tracking-[.18em] text-[#58ddcf] uppercase">Apply now</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
              Tell us where you would like to grow.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Our hiring team reviews every profile carefully and connects when your experience
              matches a suitable role.
            </p>
            <div className="relative mt-9 space-y-4 border-t border-white/15 pt-7 text-sm">
              {[
                "Profiles reviewed by our team",
                "Open to clinical and support roles",
                "PDF, DOC and DOCX accepted",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-white/78">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#25bfae]/20 text-xs text-[#65e3d7]">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
            <a
              href="mailto:info@elitedentalstudio.co.in"
              className="relative mt-9 block text-sm font-bold text-[#62dfd3]"
            >
              info@elitedentalstudio.co.in
            </a>
          </div>
          <form
            className="grid gap-x-5 gap-y-5 p-6 sm:grid-cols-2 sm:p-9 lg:p-11"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Name
              </span>
              <input className={fieldClass} name="name" placeholder="Full name" required />
            </label>
            <label>
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Phone
              </span>
              <input
                className={fieldClass}
                name="phone"
                placeholder="Mobile number"
                type="tel"
                required
              />
            </label>
            <label>
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Email
              </span>
              <input
                className={fieldClass}
                name="email"
                placeholder="name@example.com"
                type="email"
                required
              />
            </label>
            <label>
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Position
              </span>
              <select className={fieldClass} name="position" required defaultValue="">
                <option value="" disabled>
                  Select role
                </option>
                <option>Dentist / Specialist</option>
                <option>Dental Nurse / Assistant</option>
                <option>Patient Coordinator</option>
                <option>Front Office / Administration</option>
                <option>Other</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                CV / Résumé
              </span>
              <input
                ref={fileRef}
                className="sr-only"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex w-full items-center justify-between rounded-xl border border-dashed border-[#9fcac6] bg-[#f7fbfa] px-4 py-4 text-sm text-[#607779] transition hover:border-[#25bfae] hover:bg-[#effaf8]"
              >
                <span>{fileName || "PDF, DOC or DOCX"}</span>
                <strong className="text-[#168f85]">Choose file</strong>
              </button>
            </label>
            <button
              type="submit"
              className="mt-1 w-full rounded-xl bg-[#25bfae] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,191,174,.2)] transition hover:bg-[#176b70] sm:col-span-2"
            >
              Submit application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
