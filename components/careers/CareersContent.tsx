/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useMemo, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import Recaptcha, { recaptchaEnabled } from "@/components/Recaptcha";

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

export default function CareersContent({ data }: { data: Record<string, any> }) {
  const jobs =
    data.jobs ||
    opportunities.map(([title, label, description, number]) => ({
      title,
      department: { name: label },
      description,
      number,
    }));
  const heroImage = data.hero?.slides?.[0]?.image;
  const application = data.applicationSection || {};
  const departments = Array.from(
    new Map(
      jobs.map((job: Record<string, any>) => [job.department?.slug, job.department]),
    ).values(),
  ).filter(Boolean) as Array<Record<string, string>>;
  const clinics = Array.from(
    new Map(
      jobs
        .flatMap((job: Record<string, any>) => job.clinics || [])
        .map((clinic: Record<string, string>) => [clinic.slug, clinic]),
    ).values(),
  ) as Array<Record<string, string>>;
  const [department, setDepartment] = useState("");
  const [clinic, setClinic] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [fileName, setFileName] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );
  const fileRef = useRef<HTMLInputElement>(null);
  const visibleJobs = useMemo(
    () =>
      jobs.filter(
        (job: Record<string, any>) =>
          (!department || job.department?.slug === department) &&
          (!clinic || job.clinics?.some((item: Record<string, string>) => item.slug === clinic)),
      ),
    [clinic, department, jobs],
  );
  const positionOptions = application.positionOptions?.length
    ? application.positionOptions
    : jobs.map((job: Record<string, any>) => ({ label: job.title, value: job.slug }));

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (recaptchaEnabled() && !captchaToken) {
      setFeedback({ type: "error", message: "Please complete the CAPTCHA." });
      return;
    }
    setSubmitting(true);
    setFeedback(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const job = jobs.find((item: Record<string, any>) => item.slug === formData.get("position"));
    if (job) {
      formData.set("jobId", job.id);
      formData.set("jobSlug", job.slug);
    }
    formData.set("consent", "true");
    formData.set("captchaToken", captchaToken);
    try {
      const response = await fetch("/api/careers/apply", { method: "POST", body: formData });
      const payload = await response.json().catch(() => null);
      if (!response.ok || payload?.success === false) {
        throw new Error(payload?.message || "Application submit nahi ho saka. Please try again.");
      }
      setFeedback({
        type: "success",
        message: payload?.message || "Application submitted successfully.",
      });
      form.reset();
      setFileName("");
      setSelectedJob("");
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Application submit nahi ho saka.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  const fieldClass =
    "w-full rounded-xl border border-[#c9dfdc] bg-[#f8fbfb] px-4 py-3.5 text-sm text-[#254d50] outline-none transition placeholder:text-[#91a2a3] hover:border-[#9bcac5] focus:border-[#25bfae] focus:bg-white focus:ring-4 focus:ring-[#25bfae]/10";

  return (
    <>
      <div className="[&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[rgba(4,55,60,.58)]">
        <HeroSection
          slides={[
            {
              img: heroImage?.url || "/safety/clinic-safety-team.png",
              alt: heroImage?.alt || "Dental professionals at Elite Dental Studio",
            },
          ]}
          content={{
            eyebrow: data.hero?.eyebrow || "Careers at Elite",
            title: data.hero?.title || "Build your career",
            accent: data.hero?.accent || "around better care.",
            description:
              data.hero?.description ||
              "Join a multidisciplinary dental team where skill, empathy and continuous learning shape every patient experience.",
          }}
        />
      </div>

      <section className="bg-white px-5 py-6 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
              {data.introduction?.eyebrow || "Life at Elite"}
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              {data.introduction?.title || "Good people make exceptional care possible."}
            </h2>
          </div>
          <div className="grid gap-6 text-sm leading-7 text-[#607779] sm:grid-cols-2">
            {(data.introduction?.paragraphs || []).map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="bg-[#f3f9f8] px-5 py-6 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
              {data.jobsSection?.eyebrow || "Opportunities"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-4xl">
              {data.jobsSection?.title || "Find where you fit."}
            </h2>
          </div>
          {(departments.length > 1 || clinics.length > 1) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                className={fieldClass}
                aria-label="Filter jobs by department"
              >
                <option value="">All departments</option>
                {departments.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                value={clinic}
                onChange={(event) => setClinic(event.target.value)}
                className={fieldClass}
                aria-label="Filter jobs by clinic"
              >
                <option value="">All clinics</option>
                {clinics.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {visibleJobs.map((job: Record<string, any>, index: number) => (
              <article
                key={job.id || job.title}
                className="group flex min-h-[290px] flex-col rounded-[22px] border border-[#cfe2df] bg-white p-6 shadow-[0_14px_35px_rgba(19,78,82,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#88c7c1] hover:shadow-[0_20px_45px_rgba(19,78,82,.12)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#e5f6f3] px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-[#168f85] uppercase">
                    {job.department?.name}
                  </span>
                  <span className="text-sm font-semibold text-[#9ab5b3]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-xl leading-snug font-semibold text-[#174e53]">
                  {job.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#667d7f]">{job.description}</p>
                <a
                  href="#apply"
                  onClick={() => setSelectedJob(job.slug)}
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
          {visibleJobs.length === 0 && (
            <p className="mt-9 rounded-xl bg-white p-6 text-center text-sm font-semibold text-[#607779]">
              No open positions match these filters.
            </p>
          )}
        </div>
      </section>

      <section id="apply" className="scroll-mt-8 bg-white px-5 py-8 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
            {application.eyebrow || "Join our team"}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-4xl">
            {application.title || "Your next chapter could start here."}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#667d7f]">
            {application.description ||
              "Share a few details and your résumé. We will review your profile for current and upcoming opportunities."}
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-[#d4e6e3] bg-white shadow-[0_24px_65px_rgba(18,75,79,.11)] lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(155deg,#174e53,#267176)] p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -bottom-24 h-64 w-64 rounded-full border-[44px] border-[#4dd8cb]/10" />
            <p className="text-xs font-bold tracking-[.18em] text-[#58ddcf] uppercase">
              {application.panelEyebrow || "Apply now"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
              {application.panelTitle || "Tell us where you would like to grow."}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72">
              {application.panelDescription ||
                "Our hiring team reviews every profile carefully and connects when your experience matches a suitable role."}
            </p>
            <div className="relative mt-9 space-y-4 border-t border-white/15 pt-7 text-sm">
              {(
                application.highlights || [
                  "Profiles reviewed by our team",
                  "Open to clinical and support roles",
                  "PDF, DOC and DOCX accepted",
                ]
              ).map((item: string) => (
                <p key={item} className="flex items-center gap-3 text-white/78">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#25bfae]/20 text-xs text-[#65e3d7]">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
            <a
              href={`mailto:${application.email || "info@elitedentalstudio.co.in"}`}
              className="relative mt-9 block text-sm font-bold text-[#62dfd3]"
            >
              {application.email || "info@elitedentalstudio.co.in"}
            </a>
          </div>
          <form
            className="grid gap-x-5 gap-y-5 p-6 sm:grid-cols-2 sm:p-9 lg:p-11"
            onSubmit={submitApplication}
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
              <select
                className={fieldClass}
                name="position"
                required
                value={selectedJob}
                onChange={(event) => setSelectedJob(event.target.value)}
              >
                <option value="" disabled>
                  Select role
                </option>
                {positionOptions.map((option: Record<string, string>) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                CV / Résumé
              </span>
              <input
                ref={fileRef}
                className="sr-only"
                name="resume"
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
            <div className="sm:col-span-2">
              <Recaptcha onTokenChange={setCaptchaToken} />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 w-full rounded-xl bg-[#25bfae] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,191,174,.2)] transition hover:bg-[#176b70] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
            >
              {submitting ? "Submitting…" : application.submitButtonLabel || "Submit application"}
            </button>
            {feedback && (
              <p
                role="status"
                className={`text-sm font-semibold sm:col-span-2 ${feedback.type === "success" ? "text-[#168f85]" : "text-red-600"}`}
              >
                {feedback.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
