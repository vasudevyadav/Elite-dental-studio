import Link from "next/link";
import type { ReactNode } from "react";
import SitePage from "@/components/SitePage";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPolicyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const sectionId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function LegalPolicyPage({
  eyebrow,
  title,
  description,
  intro,
  updated,
  sections,
}: LegalPolicyPageProps) {
  return (
    <SitePage title={`${title} | Elite Dental Studio`} description={description}>
      <section className="relative isolate overflow-hidden bg-[#083f43] px-5 pt-24 pb-20 text-white sm:px-8 sm:pt-32 sm:pb-24 lg:px-12">
        <div className="pointer-events-none absolute -top-32 -right-28 -z-10 h-96 w-96 rounded-full bg-[#25bfae]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-20 -z-10 h-96 w-96 rounded-full bg-[#66e0d5]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[.22em] text-[#66e0d5] uppercase sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-[40px] leading-[1.08] font-bold tracking-[-.045em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">{intro}</p>
          <p className="mt-7 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="bg-[#f3fbfa] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <aside className="rounded-[22px] border border-[#d8eeeb] bg-white p-6 shadow-[0_16px_45px_rgba(18,73,77,.07)] lg:sticky lg:top-6">
            <p className="text-xs font-extrabold tracking-[.18em] text-[#20aa9e] uppercase">
              On this page
            </p>
            <nav aria-label={`${title} sections`} className="mt-5">
              <ol className="space-y-3">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <Link
                      href={`#${sectionId(section.title)}`}
                      className="group flex gap-3 text-sm leading-6 text-[#607275] transition hover:text-[#07565a]"
                    >
                      <span className="font-bold text-[#25bfae]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold">{section.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="overflow-hidden rounded-[26px] border border-[#d8eeeb] bg-white px-5 shadow-[0_20px_55px_rgba(18,73,77,.08)] sm:px-10 lg:px-12">
            {sections.map((section, index) => (
              <article
                id={sectionId(section.title)}
                key={section.title}
                className={`py-9 sm:py-11 ${index ? "border-t border-[#d8eeeb]" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f6] text-xs font-extrabold text-[#159b90]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-2xl leading-tight font-bold tracking-[-.025em] text-[#174e53] sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#607275] sm:text-base sm:leading-8 [&_a]:font-semibold [&_a]:text-[#078b82] [&_a]:underline [&_a]:decoration-[#25bfae]/45 [&_a]:underline-offset-4 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                      {section.content}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
