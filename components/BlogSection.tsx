import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatBlogDate, type BlogApiPost } from "@/lib/blogsApi";
import AnimatedArrowCta from "./AnimatedArrowCta";

type HomeBlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
};

const fallbackPosts: HomeBlogPost[] = [
  {
    slug: "common-problems-associated-with-teeth-and-gums",
    title: "Common Problems Associated with Teeth and Gums",
    description: "Is it serious, or can it wait? That’s what most people ask when they notice...",
    date: "16 Jun 2026",
    image: "/home/services/invisible-aligners.png",
    category: "Oral Health",
  },
  {
    slug: "common-problems-associated-with-teeth-and-gums",
    title: "Common Problems Associated with Teeth and Gums",
    description: "Is it serious, or can it wait? That’s what most people ask when they notice...",
    date: "16 Jun 2026",
    image: "/home/services/dental-fillings.png",
    category: "Dental Care",
  },
  {
    slug: "modern-care-for-a-healthier-stronger-smile",
    title: "Modern Care for a Healthier, Stronger Smile",
    description: "Simple preventive steps can protect your teeth and gums for years to come...",
    date: "18 Jun 2026",
    image: "/home/services/laser-dentistry.png",
    category: "Healthy Smile",
  },
];

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

export default function BlogSection({ initialPosts }: { initialPosts?: BlogApiPost[] }) {
  const [start, setStart] = useState(0);
  const toHomePosts = (items: BlogApiPost[]): HomeBlogPost[] =>
    items.map((post, index) => ({
      slug: post.slug,
      title: post.title,
      description: post.excerpt,
      date: formatBlogDate(post.publishedAt),
      image: post.image?.url || fallbackPosts[index % fallbackPosts.length].image,
      category: post.categories?.[0]?.name || "Dental Care",
    }));
  const [apiPosts, setApiPosts] = useState<HomeBlogPost[] | null>(() =>
    initialPosts?.length ? toHomePosts(initialPosts) : null,
  );
  const touchStartX = useRef<number | null>(null);
  const posts = apiPosts?.length ? apiPosts : fallbackPosts;
  const visiblePosts = [posts[start], posts[(start + 1) % posts.length]];

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/blogs", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        const items = payload?.data?.items;
        if (!Array.isArray(items) || !items.length) return;

        setApiPosts(toHomePosts(items));
        setStart(0);
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  const move = (step: number) => {
    setStart((current) => (current + step + posts.length) % posts.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const distance = touchStartX.current - event.changedTouches[0].clientX;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) {
      return;
    }

    move(distance > 0 ? 1 : -1);
  };

  return (
    <section id="blog" className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:px-16">
        <div>
          <p className="text-dent-accent text-sm font-semibold uppercase lg:text-base lg:font-extrabold">
            Latest Blog
          </p>
          <h2 className="mt-2 max-w-[650px] text-xl leading-[1.25] font-bold tracking-[-0.025em] text-[#29666b] lg:mt-5 lg:text-[40px]">
            Latest Dental News Insights &amp;
            <br className="hidden sm:block" /> Oral Health Advice
          </h2>
        </div>
        <AnimatedArrowCta
          label="VIEW ALL POST"
          href="/blog"
          arrowClassName="text-[#29666b]"
          className="smooth-hover button-hover hover-lift hidden w-fit items-center gap-4 rounded-[8px] bg-[#064a50] py-3 pr-3 pl-5 text-sm font-bold text-white uppercase lg:inline-flex"
        />
      </div>

      <div className="mt-8 flex items-center gap-4 lg:mt-16 lg:gap-8">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous blog posts"
          className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav hidden h-10 w-10 shrink-0 items-center justify-center rounded-[5px] text-white sm:flex"
        >
          <Arrow left />
        </button>

        <div
          className="grid min-w-0 flex-1 touch-pan-y gap-8 md:grid-cols-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-live="polite"
        >
          {visiblePosts.map((post, index) => (
            <article
              key={`${post.title}-${start}-${index}`}
              className={`group smooth-hover card-hover overflow-hidden rounded-[22px] border-2 border-[#27cfc0] bg-white shadow-[0_12px_28px_rgba(32,103,106,0.08)] ${
                index === 1 ? "hidden md:block" : ""
              }`}
            >
              <div className="relative h-[200px] overflow-hidden bg-white lg:h-[285px]">
                <div className="absolute top-0 left-0 z-10 flex h-full w-[52%] flex-col justify-center bg-white px-6 sm:px-8">
                  <p className="text-sm leading-[1.3] font-medium text-[#292929] lg:text-xl">
                    Latest Insights
                    <br /> About
                  </p>
                  <p className="mt-2 line-clamp-2 text-[29px] leading-[1.05] font-black text-[#27cfc0] [text-shadow:1px_1px_0_#143f43] sm:text-[42px]">
                    {post.category}
                  </p>
                </div>
                <div className="absolute top-0 right-0 h-full w-[58%]">
                  <span className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
                  <span className="bg-dent-accent absolute -right-14 bottom-0 z-0 h-52 w-52 rounded-full" />
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 55vw, 28vw"
                    className="image-hover relative z-[1] object-cover object-center"
                  />
                </div>
              </div>

              <div
                className={`${index === 0 ? "bg-dent-accent" : "bg-dent-panel"} px-5 py-4 text-white`}
              >
                <h3 className="mb-2 text-sm font-semibold sm:text-xl">{post.title}</h3>
                <p className="mt-1 truncate text-xs text-white/90 lg:text-base">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-4 text-xs lg:text-base">
                  <span>
                    Posted on{" "}
                    <span className="mx-2 inline-block w-12 border-t border-white/70 align-middle" />{" "}
                    <strong>{post.date}</strong>
                  </span>
                  <Link href={`/blog/${post.slug}`} className="link-hover shrink-0 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next blog posts"
          className="smooth-hover button-hover hover-lift bg-dent-panel hidden h-10 w-10 shrink-0 items-center justify-center rounded-[5px] text-white hover:bg-[#205f63] sm:flex"
        >
          <Arrow />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous blog post"
          className="smooth-hover button-hover hover-lift bg-dent-accent focus:ring-dent-accent/25 flex h-11 w-12 items-center justify-center rounded-lg text-white shadow-sm focus:ring-4 focus:outline-none active:scale-95"
        >
          <Arrow left />
        </button>

        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: Math.min(posts.length, 8) }, (_, index) => index).map((index) => (
            <span
              key={index}
              className={`smooth-hover h-2 rounded-full ${
                index === start % Math.min(posts.length, 8)
                  ? "bg-dent-panel w-6"
                  : "w-2 bg-[#acd5d6]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next blog post"
          className="smooth-hover button-hover hover-lift bg-dent-panel focus:ring-dent-panel/25 flex h-11 w-12 items-center justify-center rounded-lg text-white shadow-sm focus:ring-4 focus:outline-none active:scale-95"
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
}
