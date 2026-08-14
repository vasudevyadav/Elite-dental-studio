/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { officeImages, type OfficeImage, type OfficeLocation } from "./officeData";

export default function OfficeGallery({ data }: { data?: Record<string, any> }) {
  const apiItems = data?.items as Array<Record<string, any>> | undefined;
  const galleryImages: OfficeImage[] = apiItems?.length
    ? apiItems.map((item, index) => ({
        src: item.image?.url || officeImages[index % officeImages.length].src,
        label: item.label,
        location: (data?.locations?.find(
          (location: Record<string, string>) => location.slug === item.locationSlug,
        )?.name || item.locationSlug) as OfficeImage["location"],
      }))
    : officeImages;
  const locations: OfficeLocation[] = [
    "All",
    ...(data?.locations?.map((item: Record<string, string>) => item.name) || [
      "Calicut",
      "Kochi",
      "Kannur",
      "Coimbatore",
    ]),
  ] as OfficeLocation[];
  const [filter, setFilter] = useState<OfficeLocation>("All");
  const [activeImage, setActiveImage] = useState<OfficeImage | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const visibleImages =
    filter === "All" ? galleryImages : galleryImages.filter((image) => image.location === filter);

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
    mobileTrackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [filter]);

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
                onClick={() => setFilter(location)}
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
          className="-mx-5 mt-8 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:mt-10 sm:grid sm:auto-rows-[260px] sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:auto-rows-[280px] lg:grid-cols-3 lg:gap-8 [&::-webkit-scrollbar]:hidden"
        >
          {visibleImages.map((image, index) => (
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
                sizes="(max-width: 768px) 100vw, 50vw"
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
      </div>
      {activeImage && <OfficeLightbox image={activeImage} onClose={() => setActiveImage(null)} />}
    </section>
  );
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
