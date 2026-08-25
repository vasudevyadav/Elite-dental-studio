/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import SitePage from "@/components/SitePage";
import { getContent } from "@/lib/contentApi";
import { isMainClinic } from "@/lib/clinics";

const fallbackCases = Array.from({ length: 12 }, (_, index) => ({
  src: `/cases/case-${String(index + 1).padStart(2, "0")}.webp`,
  title: `Smile transformation ${String(index + 1).padStart(2, "0")}`,
  label:
    index % 3 === 0 ? "Smile Design" : index % 3 === 1 ? "Restorative Care" : "Advanced Dentistry",
  location: index < 4 ? "Calicut" : index < 8 ? "Kochi" : "Kannur",
  treatmentSlug:
    index % 3 === 0 ? "smile-design" : index % 3 === 1 ? "restorative-care" : "advanced-dentistry",
  locationSlug: index < 4 ? "calicut" : index < 8 ? "kochi" : "kannur",
}));

type GalleryCase = (typeof fallbackCases)[number];

const ArrowIcon = ({ reverse = false }: { reverse?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 ${reverse ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);

function ResultHalf({
  src,
  alt,
  side,
  priority = false,
}: {
  src: string;
  alt: string;
  side: "before" | "after";
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={`${alt} — ${side}`}
      width={1440}
      height={1440}
      priority={priority}
      className={`absolute left-0 h-[200%] w-full max-w-none object-cover ${side === "before" ? "top-0 object-top" : "bottom-0 object-bottom"}`}
      sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,50vw"
    />
  );
}

function BeforeAfterSlider({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const bounds = sliderRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setPosition(Math.max(0, Math.min(100, ((clientX - bounds.left) / bounds.width) * 100)));
  };

  return (
    <div ref={sliderRef} className="absolute inset-0 overflow-hidden bg-[#17474a]">
      <ResultHalf src={src} alt={alt} side="after" priority={priority} />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ResultHalf src={src} alt={alt} side="before" priority={priority} />
      </div>
      <span className="pointer-events-none absolute top-3 left-3 z-10 rounded-full bg-[#174e53]/80 px-3 py-1.5 text-[9px] font-bold tracking-[.14em] text-white uppercase backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 z-10 rounded-full bg-[#174e53]/80 px-3 py-1.5 text-[9px] font-bold tracking-[.14em] text-white uppercase backdrop-blur">
        After
      </span>
      <span
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-white shadow"
        style={{ left: `${position}%` }}
      />
      <span
        className="pointer-events-none absolute top-1/2 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-[#25bfae] text-sm font-black text-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        ↔
      </span>
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Compare before and after for ${alt}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          updatePosition(event.clientX);
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) updatePosition(event.clientX);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") setPosition((value) => Math.max(0, value - 2));
          if (event.key === "ArrowRight") setPosition((value) => Math.min(100, value + 2));
        }}
        className="absolute inset-0 z-30 cursor-ew-resize touch-none focus:outline-none"
      />
    </div>
  );
}

export default function CasesPage({ data }: { data: Record<string, any> }) {
  const cases: GalleryCase[] = data.items?.length
    ? data.items
        .filter((item: Record<string, any>) => isMainClinic(item.location?.slug))
        .map((item: Record<string, any>, index: number) => ({
          src:
            item.combinedImage?.url ||
            item.beforeImage?.url ||
            `/cases/case-${String(index + 1).padStart(2, "0")}.webp`,
          title: item.title,
          label: item.category?.name,
          location: item.location?.name,
          treatmentSlug: item.category?.slug,
          locationSlug: item.location?.slug,
        }))
    : fallbackCases;
  const locations = (data.filters?.locations || []).filter((location: Record<string, string>) =>
    isMainClinic(location.slug),
  );
  const treatments = data.filters?.treatments || [];
  const [selected, setSelected] = useState<number | null>(null);
  const [activeLocation, setActiveLocation] = useState<string>("");
  const [activeTreatment, setActiveTreatment] = useState<string>("");

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight")
        setSelected((value) => (value === null ? null : (value + 1) % cases.length));
      if (event.key === "ArrowLeft")
        setSelected((value) => (value === null ? null : (value - 1 + cases.length) % cases.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, cases.length]);

  const move = (direction: number) =>
    setSelected((value) =>
      value === null ? null : (value + direction + cases.length) % cases.length,
    );

  const visibleCases = cases
    .map((item: GalleryCase, index: number) => ({ ...item, originalIndex: index }))
    .filter(
      (item: GalleryCase & { originalIndex: number }) =>
        (!activeLocation || item.locationSlug === activeLocation) &&
        (!activeTreatment || item.treatmentSlug === activeTreatment),
    );

  const caseCard = (item: (typeof visibleCases)[number], className = "") => (
    <article
      key={item.src}
      onClick={() => setSelected(item.originalIndex)}
      className={`group relative min-h-[210px] cursor-zoom-in overflow-hidden rounded-2xl bg-[#17474a] text-left transition duration-300 hover:-translate-y-1 ${className}`}
    >
      <BeforeAfterSlider src={item.src} alt={item.title} />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031d20]/75 via-transparent to-transparent" />
      <span className="pointer-events-none absolute right-4 bottom-4 left-4 z-20">
        <span className="block text-[9px] font-bold tracking-[.14em] text-[#6ce1d6] uppercase">
          {item.location} · {item.label}
        </span>
        <span className="mt-1 block text-xs font-bold text-white sm:text-sm">
          Case {String(item.originalIndex + 1).padStart(2, "0")}
        </span>
      </span>
    </article>
  );

  return (
    <SitePage title={data.seo.metaTitle} description={data.seo.metaDescription}>
      <div className="[&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[rgba(23,78,83,.60)]">
        <HeroSection
          slides={[
            {
              img: data.hero?.slides?.[0]?.image?.url || "/about/about-hero.png",
              alt: data.hero?.slides?.[0]?.image?.alt || "Elite Dental Studio smile gallery",
            },
          ]}
          content={{
            eyebrow: data.hero.eyebrow,
            title: data.hero.title,
            accent: data.hero.accent,
            description:
              data.hero.description ||
              "Explore real transformations shaped by precise planning, modern dentistry and care personal to every patient.",
          }}
        />
      </div>

      <section className="bg-[#2a686d] px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-5 border-b border-white/15 pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[.2em] text-[#5eddd1] uppercase">
                {data.archive.eyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">
                {data.archive.title}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55">{data.archive.description}</p>
          </div>

          <div className="mb-8 rounded-2xl border border-white/12 bg-white/[.06] p-3 lg:p-4">
            <div>
              <span className="mb-3 block px-2 text-xs font-bold tracking-[.18em] text-white/85 uppercase">
                Filter by location
              </span>
              <div className="grid grid-cols-2 gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => setActiveLocation("")}
                  aria-pressed={!activeLocation}
                  className={`rounded-xl px-7 py-3 text-sm font-bold transition ${!activeLocation ? "bg-[#25bfae] text-white shadow-[0_8px_20px_rgba(37,191,174,.22)]" : "bg-white/[.08] text-white/90 hover:bg-white/15 hover:text-white"}`}
                >
                  All
                </button>
                {locations.map((location: Record<string, string>) => (
                  <button
                    key={location.slug}
                    type="button"
                    onClick={() => setActiveLocation(location.slug)}
                    aria-pressed={activeLocation === location.slug}
                    className={`rounded-xl px-7 py-3 text-sm font-bold transition ${activeLocation === location.slug ? "bg-[#25bfae] text-white shadow-[0_8px_20px_rgba(37,191,174,.22)]" : "bg-white/[.08] text-white/90 hover:bg-white/15 hover:text-white"}`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>
            {treatments.length > 0 && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <span className="mb-3 block px-2 text-xs font-bold tracking-[.18em] text-white/85 uppercase">
                  Filter by treatment
                </span>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={() => setActiveTreatment("")}
                    aria-pressed={!activeTreatment}
                    className={`rounded-xl px-7 py-3 text-sm font-bold transition ${!activeTreatment ? "bg-[#25bfae] text-white" : "bg-white/[.08] text-white/90 hover:bg-white/15"}`}
                  >
                    All
                  </button>
                  {treatments.map((treatment: Record<string, string>) => (
                    <button
                      key={treatment.slug}
                      type="button"
                      onClick={() => setActiveTreatment(treatment.slug)}
                      aria-pressed={activeTreatment === treatment.slug}
                      className={`rounded-xl px-7 py-3 text-sm font-bold transition ${activeTreatment === treatment.slug ? "bg-[#25bfae] text-white" : "bg-white/[.08] text-white/90 hover:bg-white/15"}`}
                    >
                      {treatment.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2">
            {visibleCases
              .slice(0, 3)
              .map((item, index) =>
                caseCard(
                  item,
                  index === 0
                    ? "min-h-[432px] sm:row-span-2 sm:min-h-0"
                    : "min-h-[210px] sm:min-h-0",
                ),
              )}
          </div>
          {visibleCases.length > 3 && (
            <div className="mt-3 grid auto-rows-[300px] grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[320px] lg:grid-cols-3">
              {visibleCases.slice(3).map((item) => caseCard(item, "h-full min-h-0"))}
            </div>
          )}

          <div className="mt-14 border-t border-white/15 pt-10 text-white lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[.18em] text-[#5de2d4] uppercase">
                {data.disclaimer.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-.03em] lg:text-4xl">
                {data.disclaimer.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-white">
                {data.disclaimer.description}
              </p>
            </div>
            <Link
              href={data.disclaimer.cta.url}
              className="mt-6 inline-flex rounded-full bg-[#25bfae] px-7 py-3.5 text-sm font-bold transition hover:bg-[#45d2c4] lg:mt-0"
            >
              {data.disclaimer.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Treatment case image viewer"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#031d20]/95 p-4 backdrop-blur-md sm:p-8"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white hover:text-[#174e53]"
          >
            ×
          </button>
          <div className="absolute top-6 left-6 text-xs font-bold tracking-[.15em] text-white/65 uppercase">
            {String(selected + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
            aria-label="Previous image"
            className="absolute bottom-5 left-[calc(50%_-_3.25rem)] z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#25bfae] sm:top-1/2 sm:bottom-auto sm:left-6 sm:-translate-y-1/2"
          >
            <ArrowIcon reverse />
          </button>
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl"
          >
            <BeforeAfterSlider src={cases[selected].src} alt={cases[selected].title} priority />
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
            aria-label="Next image"
            className="absolute right-[calc(50%_-_3.25rem)] bottom-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#25bfae] sm:top-1/2 sm:right-6 sm:bottom-auto sm:-translate-y-1/2"
          >
            <ArrowIcon />
          </button>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center sm:bottom-6">
            <p className="text-sm font-bold text-white">{cases[selected].title}</p>
            <p className="mt-1 text-[10px] font-bold tracking-[.14em] text-[#67dfd3] uppercase">
              Drag to compare · {cases[selected].label}
            </p>
          </div>
        </div>
      )}
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: Record<string, any> }> = async ({
  res,
}) => {
  const data = await getContent<Record<string, any>>("gallery");
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data } };
};
