import Image from "next/image";
import { useRef, useState } from "react";

const posts = [
  {
    title: "Common Problems Associated with Teeth and Gums",
    description: "Is it serious, or can it wait? That’s what most people ask when they notice...",
    date: "16 Jun 2026",
    image: "/home/services/invisible-aligners.png",
  },
  {
    title: "Common Problems Associated with Teeth and Gums",
    description: "Is it serious, or can it wait? That’s what most people ask when they notice...",
    date: "16 Jun 2026",
    image: "/home/services/dental-fillings.png",
  },
  {
    title: "Modern Care for a Healthier, Stronger Smile",
    description: "Simple preventive steps can protect your teeth and gums for years to come...",
    date: "18 Jun 2026",
    image: "/home/services/laser-dentistry.png",
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

export default function BlogSection() {
  const [start, setStart] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const visiblePosts = [posts[start], posts[(start + 1) % posts.length]];

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
    <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase text-dent-accent sm:text-base">
            Latest Blog
          </p>
          <h2 className="lg:mt-5 mt-2 max-w-[650px] text-2xl font-extrabold leading-[1.25] tracking-[-0.025em] text-[#2c7477] sm:text-[42px]">
            Latest dental news insights and
            <br className="hidden sm:block" /> oral health advice
          </h2>
        </div>
        <button className="smooth-hover button-hover hover-lift inline-flex w-fit items-center gap-4 rounded-[8px] bg-[#064a50] py-1.5 lg:py-3 pl-5 pr-3 text-sm font-bold uppercase text-white !hidden lg:block">
          View All Post
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2c7477]">
            <Arrow />
          </span>
        </button>
      </div>
    
      <div className="lg:mt-16 mt-8 flex items-center gap-4 lg:gap-8">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous blog posts"
          className="smooth-hover button-hover hover-lift hidden h-10 w-10 shrink-0 items-center justify-center rounded-[5px] bg-dent-accent text-white hover:bg-dent-nav sm:flex"
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
              className={`group smooth-hover card-hover overflow-hidden rounded-[22px] border-2 border-[#27cfc0] bg-white shadow-[0_12px_28px_rgba(32,103,106,0.08)] ${index === 1 ? "hidden md:block" : ""
                }`}
            >
              <div className="relative h-[270px] overflow-hidden bg-white sm:h-[285px]">
                <div className="absolute left-0 top-0 z-10 flex h-full w-[52%] flex-col justify-center bg-white px-6 sm:px-8">
                  <p className="text-[17px] font-medium leading-[1.3] text-[#292929] sm:text-[24px]">
                    Common Problems
                    <br /> Associated with
                  </p>
                  <p className="mt-2 text-[29px] font-black leading-[1.05] text-[#27cfc0] [text-shadow:1px_1px_0_#143f43] sm:text-[42px]">
                    Teeth &amp;
                    <br /> Gums
                  </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-[58%]">
                  <span className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
                  <span className="absolute -right-14 bottom-0 z-0 h-52 w-52 rounded-full bg-dent-accent" />
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 55vw, 28vw"
                    className="image-hover relative z-[1] object-cover object-center"
                  />
                </div>
              </div>

              <div className={`${index === 0 ? "bg-dent-accent" : "bg-[#2c7477]"} px-5 py-4 text-white`}>
                <h3 className="text-sm font-extrabold sm:text-base">{post.title}</h3>
                <p className="mt-1 truncate text-xs text-white/90 sm:text-sm">
                  {post.description}
                </p>
                <div className="mt-3 flex items-center justify-between gap-4 text-xs italic">
                  <span>
                    Posted on <span className="mx-2 inline-block w-12 border-t border-white/70 align-middle" />{" "}
                    <strong>{post.date}</strong>
                  </span>
                  <span className="link-hover shrink-0 font-bold">Read More →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next blog posts"
          className="smooth-hover button-hover hover-lift hidden h-10 w-10 shrink-0 items-center justify-center rounded-[5px] bg-[#2c7477] text-white hover:bg-[#205f63] sm:flex"
        >
          <Arrow />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous blog post"
          className="smooth-hover button-hover hover-lift flex h-11 w-12 items-center justify-center rounded-lg bg-dent-accent text-white shadow-sm active:scale-95 focus:outline-none focus:ring-4 focus:ring-dent-accent/25"
        >
          <Arrow left />
        </button>

        <div className="flex items-center gap-1.5" aria-hidden="true">
          {posts.map((post, index) => (
            <span
              key={`${post.title}-${index}`}
              className={`smooth-hover h-2 rounded-full ${
                index === start ? "w-6 bg-[#2c7477]" : "w-2 bg-[#acd5d6]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next blog post"
          className="smooth-hover button-hover hover-lift flex h-11 w-12 items-center justify-center rounded-lg bg-[#2c7477] text-white shadow-sm active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#2c7477]/25"
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
}
