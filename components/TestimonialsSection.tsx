import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedArrowCta from "./AnimatedArrowCta";
import type { TestimonialItem } from "@/lib/testimonialsApi";

function Arrow({ left = false }: { left?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${left ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

type TestimonialsSectionProps = {
  initialTestimonials?: TestimonialItem[];
};

export default function TestimonialsSection({
  initialTestimonials = [],
}: TestimonialsSectionProps) {
  const [wordpressTestimonials, setWordpressTestimonials] =
    useState<TestimonialItem[]>(initialTestimonials);
  const [isLoading, setIsLoading] = useState(initialTestimonials.length === 0);
  const [reviewType, setReviewType] = useState<"text" | "video">("text");
  const [index, setIndex] = useState(0);
  const testimonials = wordpressTestimonials.filter((item) => item.type === reviewType);
  const testimonial = testimonials[index] || testimonials[0];

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/testimonials", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        const items = payload?.data?.items;
        if (Array.isArray(items)) setWordpressTestimonials(items);
      })
      .catch((error) => {
        if ((error as Error).name !== "AbortError") {
          console.error("Unable to load testimonials.", error);
        }
      })
      .finally(() => setIsLoading(false));
    return () => controller.abort();
  }, []);

  const move = (step: number) =>
    testimonials.length &&
    setIndex((current) => (current + step + testimonials.length) % testimonials.length);

  const selectReviewType = (type: "text" | "video") => {
    setReviewType(type);
    setIndex(0);
  };

  return (
    <section id="testimonials" className="overflow-hidden px-5 py-6 sm:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="bg-dent-panel relative rounded-[28px] px-6 pt-10 pb-[100px] sm:px-10 lg:px-16 lg:pt-12 lg:pb-[160px]">
          <Image
            src="/home/testimonial.png"
            alt=""
            width={251}
            height={266}
            aria-hidden="true"
            className="pointer-events-none absolute top-[25%] right-[19%] hidden h-[190px] w-[180px] object-contain opacity-20 lg:block"
          />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-dent-accent text-sm font-semibold uppercase sm:text-base">
                Testimonial
              </p>
              <h2 className="mt-3 max-w-[690px] text-2xl leading-[1.15] font-semibold tracking-[-0.025em] text-white lg:text-[39px]">
                Real Stories of Exceptional Care &amp; Better Smiles
              </h2>
              <p className="mt-3 max-w-[790px] text-base leading-[1.55] text-white/95 sm:text-lg">
                Across dozens of Google reviews, one line repeats, the doctor explained what they
                were doing before they did it.
              </p>
            </div>

            <div className="flex flex-wrap gap-3" role="group" aria-label="Choose review type">
              {/* <AnimatedArrowCta
                label="VIDEO REVIEW"
                onAction={() => (reviewType === "video" ? move(1) : selectReviewType("video"))}
                arrowClassName="text-[#28cabb]"
                className="hover:bg-dent-nav inline-flex w-fit items-center gap-4 rounded-[8px] border border-white/40 bg-transparent py-1.5 pr-3 pl-5 text-sm font-bold text-white uppercase transition hover:-translate-y-0.5 lg:py-3"
              /> */}
            </div>
          </div>
        </div>

        {testimonial && (
          <div className="relative z-20 mx-auto -mt-[135px] w-[94%] rounded-[22px] bg-[#f3fbfa] px-5 py-7 shadow-[0_18px_45px_rgba(36,91,94,0.12)] sm:w-[86%] sm:px-10 lg:w-[75%] lg:rounded-[26px] lg:px-14 lg:py-10">
            <div className="flex gap-3 sm:gap-5 lg:gap-8">
              <span className="shrink-0 text-[46px] leading-[0.75] font-black text-[#29666b] sm:text-[72px]">
                “
              </span>
              <div className="min-w-0 flex-1">
                {reviewType === "video" && testimonial.videoUrl ? (
                  <VideoReview testimonial={testimonial} />
                ) : (
                  <p className="text-sm leading-[1.55] text-[#343737] italic sm:text-lg">
                    {testimonial.text}
                  </p>
                )}

                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[#fee9db]">
                      {testimonial.image.url ? (
                        <Image
                          src={testimonial.image.url}
                          alt={testimonial.image.alt || testimonial.name}
                          fill
                          sizes="64px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-xl font-extrabold text-[#29666b]">
                          {initials(testimonial.name)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#29666b] lg:text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-medium text-[#29666b]">{testimonial.role}</p>
                      {testimonial.location.name && (
                        <p className="mt-0.5 text-xs font-bold tracking-[.08em] text-[#25a99e] uppercase">
                          {testimonial.location.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex overflow-hidden rounded-[7px]">
                    <button
                      type="button"
                      onClick={() => move(-1)}
                      aria-label="Previous testimonial"
                      className="bg-dent-accent flex h-10 w-11 items-center justify-center text-white"
                    >
                      <Arrow left />
                    </button>
                    <button
                      type="button"
                      onClick={() => move(1)}
                      aria-label="Next testimonial"
                      className="bg-dent-panel flex h-10 w-11 items-center justify-center text-white"
                    >
                      <Arrow />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!testimonial && (
          <div className="relative z-20 mx-auto -mt-[90px] flex min-h-44 w-[94%] items-center justify-center rounded-[22px] bg-[#f3fbfa] px-6 py-8 text-center shadow-[0_18px_45px_rgba(36,91,94,0.12)] sm:w-[86%] lg:w-[75%]">
            <p className="text-base font-semibold text-[#29666b] sm:text-lg">
              {isLoading
                ? "Loading reviews…"
                : reviewType === "video"
                  ? "Video reviews will appear here when added from the website backend."
                  : "Reviews will appear here when added from the website backend."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function VideoReview({ testimonial }: { testimonial: TestimonialItem }) {
  const embedUrl = youtubeEmbedUrl(testimonial.videoUrl);
  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-[#174e53]">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={`${testimonial.name} video review`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          src={testimonial.videoUrl}
          poster={testimonial.videoThumbnail.url || undefined}
          controls
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

function youtubeEmbedUrl(value: string) {
  try {
    const url = new URL(value);
    if (url.hostname === "youtu.be")
      return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v") || url.pathname.split("/").filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}
