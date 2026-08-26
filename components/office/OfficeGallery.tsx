/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { OfficeImage, OfficeLocation } from "./officeData";
import { isMainClinic } from "@/lib/clinics";

const OFFICE_IMAGES_PER_PAGE = 9;

export default function OfficeGallery({ data }: { data?: Record<string, any> }) {
  const galleryImages: OfficeImage[] = Array.isArray(data?.items)
    ? data.items
        .filter(
          (item: Record<string, any>) =>
            isMainClinic(item.locationSlug) && typeof item.image?.url === "string",
        )
        .sort(
          (first: Record<string, any>, second: Record<string, any>) =>
            Number(first.sortOrder || 0) - Number(second.sortOrder || 0),
        )
        .map((item: Record<string, any>) => ({
          src: item.image.url,
          location: locationName(item.locationSlug),
          label: item.label || item.image.alt || `${locationName(item.locationSlug)} clinic`,
        }))
    : [];
  const locations: OfficeLocation[] = [
    "All",
    ...(data?.locations
      ?.filter((item: Record<string, string>) => isMainClinic(item.slug))
      .map((item: Record<string, string>) => item.name) || [
      "Calicut",
      "Kochi",
      "Kannur",
      "Coimbatore",
    ]),
  ] as OfficeLocation[];
  const [filter, setFilter] = useState<OfficeLocation>("All");
  const [activeImage, setActiveImage] = useState<OfficeImage | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const visibleImages =
    filter === "All" ? galleryImages : galleryImages.filter((image) => image.location === filter);
  const totalPages = Math.max(1, Math.ceil(visibleImages.length / OFFICE_IMAGES_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);
  const paginatedImages = visibleImages.slice(
    (activePage - 1) * OFFICE_IMAGES_PER_PAGE,
    activePage * OFFICE_IMAGES_PER_PAGE,
  );

  const selectPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page)));
    requestAnimationFrame(() =>
      mobileTrackRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  const selectFilter = (location: OfficeLocation) => {
    setFilter(location);
    setCurrentPage(1);
    mobileTrackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const moveMobileSlider = (direction: "previous" | "next") => {
    const track = mobileTrackRef.current;
    const card = track?.querySelector<HTMLElement>("button");
    if (!track || !card) return;
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 16;
    track.scrollBy({
      left: (card.offsetWidth + gap) * (direction === "next" ? 1 : -1),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!activeImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActiveImage(null);
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", close);
    };
  }, [activeImage]);

  return (
    <section id="office-tour" className="bg-[#f7fbfa] px-5 py-8 sm:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl lg:px-12">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-base font-semibold tracking-[.16em] text-[#25bfae] uppercase">
              {data?.eyebrow || "Virtual tour"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-[#174e53] sm:text-5xl">
              {data?.title || "A closer look inside"}
            </h2>
          </div>
          <div
            className="flex w-full max-w-full [scrollbar-width:none] gap-1 overflow-x-auto rounded-full border border-[#b9d7d4] bg-white p-1.5 lg:w-fit [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filter office gallery"
          >
            {locations.map((location) => (
              <button
                key={location}
                type="button"
                onClick={() => selectFilter(location)}
                aria-pressed={filter === location}
                className={`smooth-hover shrink-0 rounded-full px-4 py-2 text-sm font-semibold sm:px-5 ${filter === location ? "bg-[#176b70] text-white" : "text-[#426164] hover:bg-[#e8f7f5]"}`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={mobileTrackRef}
          id="office-gallery-results"
          className="-mx-5 mt-8 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:mt-10 sm:grid sm:auto-rows-[260px] sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:auto-rows-[280px] lg:grid-cols-3 lg:gap-8 [&::-webkit-scrollbar]:hidden"
        >
          {paginatedImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`group relative h-[270px] w-[84vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-[22px] text-left sm:h-auto sm:w-auto sm:max-w-none ${index === 0 ? "sm:row-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""}`}
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                loading="lazy"
                sizes="(max-width: 639px) 84vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063f45]/85 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div>
                  <p className="text-xs font-bold tracking-[.15em] text-[#58ddcf] uppercase">
                    {image.location}
                  </p>
                  <p className="mt-1 text-base font-semibold">{image.label}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-xl backdrop-blur-md transition group-hover:bg-white group-hover:text-[#07565a]">
                  +
                </span>
              </div>
            </button>
          ))}
          {!paginatedImages.length && (
            <div className="flex min-h-[220px] items-center justify-center rounded-[22px] border border-[#d6e6e4] bg-white px-6 text-center text-base font-semibold text-[#426164] sm:col-span-2 lg:col-span-3">
              Clinic photos will appear here when added from the WordPress backend.
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between sm:hidden">
          <p className="text-xs font-semibold text-[#527174]">
            Swipe to explore {filter === "All" ? "all offices" : filter}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moveMobileSlider("previous")}
              aria-label="Previous office image"
              className="grid h-11 w-11 place-items-center rounded-full border border-[#9ccbc7] bg-white text-xl text-[#176b70]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => moveMobileSlider("next")}
              aria-label="Next office image"
              className="grid h-11 w-11 place-items-center rounded-full bg-[#176b70] text-xl text-white"
            >
              →
            </button>
          </div>
        </div>
        {totalPages > 1 && (
          <nav
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
            aria-label="Office gallery pagination"
          >
            <OfficePageButton
              label="Previous"
              disabled={activePage === 1}
              onClick={() => selectPage(activePage - 1)}
            />
            {paginationItems(activePage, totalPages).map((item) =>
              typeof item === "number" ? (
                <button
                  key={item}
                  type="button"
                  onClick={() => selectPage(item)}
                  aria-label={`Go to gallery page ${item}`}
                  aria-current={activePage === item ? "page" : undefined}
                  className={`h-10 min-w-10 rounded-xl px-3 text-sm font-bold transition ${activePage === item ? "bg-[#176b70] text-white" : "border border-[#9ccbc7] bg-white text-[#176b70] hover:bg-[#e8f7f5]"}`}
                >
                  {item}
                </button>
              ) : (
                <span key={item} className="px-1 text-[#6a8583]" aria-hidden="true">
                  …
                </span>
              ),
            )}
            <OfficePageButton
              label="Next"
              disabled={activePage === totalPages}
              onClick={() => selectPage(activePage + 1)}
            />
          </nav>
        )}
      </div>
      {activeImage && <OfficeLightbox image={activeImage} onClose={() => setActiveImage(null)} />}
    </section>
  );
}

function paginationItems(currentPage: number, totalPages: number): Array<number | string> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  const pages = Array.from(new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]))
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((first, second) => first - second);
  const items: Array<number | string> = [];
  pages.forEach((page, index) => {
    const previous = pages[index - 1];
    if (previous && page - previous > 1) items.push(`ellipsis-${previous}-${page}`);
    items.push(page);
  });
  return items;
}

function OfficePageButton({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="h-10 rounded-xl border border-[#9ccbc7] bg-white px-4 text-sm font-bold text-[#176b70] transition hover:bg-[#e8f7f5] disabled:cursor-not-allowed disabled:opacity-35"
    >
      {label}
    </button>
  );
}

function locationName(slug: string): Exclude<OfficeLocation, "All"> {
  const names: Record<string, Exclude<OfficeLocation, "All">> = {
    calicut: "Calicut",
    kochi: "Kochi",
    kannur: "Kannur",
    coimbatore: "Coimbatore",
  };
  return names[slug] || "Calicut";
}

function OfficeLightbox({ image, onClose }: { image: OfficeImage; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-[#032d31]/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.label}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-[#07565a] sm:top-6 sm:right-6"
      >
        ×
      </button>
      <div className="relative h-[70dvh] w-full max-w-6xl overflow-hidden rounded-[16px] bg-[#0b555a] sm:h-[76vh] sm:rounded-[22px]">
        <Image src={image.src} alt={image.label} fill sizes="100vw" className="object-contain" />
      </div>
      <p className="mt-4 text-center text-sm font-semibold text-white">
        {image.location} · {image.label}
      </p>
    </div>
  );
}
