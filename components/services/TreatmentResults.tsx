import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type ResultItem = {
  id?: string;
  label: string;
  beforeImage: { url: string; alt?: string };
  afterImage: { url: string; alt?: string };
};

const RESULTS_PER_PAGE = 6;

function ResultImage({
  src,
  label,
  side,
  combined,
}: {
  src: string;
  label: string;
  side: "before" | "after";
  combined: boolean;
}) {
  return (
    <Image
      src={src}
      alt={`${label} ${side}`}
      width={1440}
      height={1440}
      className={
        combined
          ? `absolute left-0 h-[200%] w-full max-w-none object-cover ${side === "before" ? "top-0 object-top" : "bottom-0 object-bottom"}`
          : "absolute inset-0 h-full w-full object-cover"
      }
      sizes="(max-width: 768px) 88vw, 33vw"
    />
  );
}

function ComparisonCard({ item }: { item: ResultItem }) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const combined = item.beforeImage.url === item.afterImage.url;
  const updatePosition = (clientX: number) => {
    const bounds = frameRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setPosition(Math.max(0, Math.min(100, ((clientX - bounds.left) / bounds.width) * 100)));
  };

  return (
    <article className="overflow-hidden rounded-[22px] border border-[#c6dfdc] bg-white shadow-[0_16px_40px_rgba(18,75,79,.09)]">
      <div ref={frameRef} className="relative aspect-[1.32/1] overflow-hidden bg-[#174e53]">
        <ResultImage
          src={item.afterImage.url}
          label={item.label}
          side="after"
          combined={combined}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <ResultImage
            src={item.beforeImage.url}
            label={item.label}
            side="before"
            combined={combined}
          />
        </div>
        <span className="pointer-events-none absolute top-4 left-4 z-10 rounded-full bg-[#174e53]/85 px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-white uppercase backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 z-10 rounded-full bg-[#25bfae]/90 px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-white uppercase backdrop-blur">
          After
        </span>
        <span
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow"
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
          aria-label={`Compare before and after — ${item.label}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            updatePosition(event.clientX);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId))
              updatePosition(event.clientX);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") setPosition((value) => Math.max(0, value - 3));
            if (event.key === "ArrowRight") setPosition((value) => Math.min(100, value + 3));
          }}
          className="absolute inset-0 z-30 cursor-ew-resize touch-none focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25bfae] focus-visible:ring-inset"
        />
      </div>
    </article>
  );
}

export default function TreatmentResults({
  serviceTitle,
  data,
}: {
  serviceTitle: string;
  data?: Record<string, unknown>;
}) {
  const items = (data?.items as ResultItem[] | undefined)?.filter(
    (item) => item.beforeImage?.url && item.afterImage?.url,
  );
  const [visibleCount, setVisibleCount] = useState(RESULTS_PER_PAGE);
  const visibleItems = items?.slice(0, visibleCount);
  const hasMoreResults = (items?.length || 0) > visibleCount;

  if (!items?.length) return null;

  const viewAll = data?.viewAll as { label?: string; url?: string } | undefined;

  return (
    <section className="overflow-hidden bg-[#f2f9f8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
              {(data?.eyebrow as string) || "Before & after"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              {(data?.title as string) || "See what thoughtful care can achieve."}
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#607779]">
            {(data?.description as string) ||
              `Explore selected patient transformations from Elite Dental Studio. Your ${serviceTitle.toLowerCase()} result will depend on your individual clinical condition and treatment plan.`}
          </p>
        </div>
        <div className="-mx-5 mt-10 flex snap-x [scrollbar-width:none] gap-5 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {visibleItems?.map((item) => (
            <div
              key={item.id || `${item.label}-${item.beforeImage.url}`}
              className="w-[86vw] max-w-[390px] shrink-0 snap-center sm:w-auto sm:max-w-none"
            >
              <ComparisonCard item={item} />
            </div>
          ))}
        </div>
        {hasMoreResults && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) => Math.min(items?.length || 0, count + RESULTS_PER_PAGE))
              }
              className="rounded-xl bg-[#168f85] px-8 py-3 text-sm font-bold text-white hover:bg-[#12726a]"
            >
              Load More Results
            </button>
          </div>
        )}
        <div className="mt-14 flex w-full justify-center text-center">
          <Link
            href={viewAll?.url || "/gallery/cases"}
            className="rounded-xl bg-[#168f85] px-10 py-2 text-lg font-semibold text-white"
          >
            {viewAll?.label || "View all smile transformations →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
