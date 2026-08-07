import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { blogPosts, blogCategories, recentPosts } from "@/components/blogData";

const POSTS_PER_PAGE = 8;

export default function BlogDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const featuredPost = blogPosts[0];

  const filtered = useMemo(
    () =>
      blogPosts.filter((post) => {
        const matchesCategory = category === "All" || post.category === category;
        const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [category, query],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const visiblePosts = useMemo(
    () => filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE),
    [currentPage, filtered],
  );

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    document.getElementById("blog-post-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateSearch = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  const updateCategory = (selected: string) => {
    setCategory(selected);
    setCurrentPage(1);
  };

  return (
    <section className="px-5 pb-14 pt-9 sm:px-8 lg:px-12 lg:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <h1 className="mb-6 text-2xl font-semibold text-[#343939]">Latest Posts</h1>

        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr]">
          <div className="space-y-12">
            <article className="grid gap-6 rounded-[26px] bg-[#f1faf7] p-6 shadow-[0_24px_60px_rgba(38,112,113,0.12)] sm:grid-cols-[1fr_420px] sm:p-8">
              <div className="flex flex-col justify-center gap-4">
                <p className="text-sm uppercase tracking-[0.24em] text-[#296f73]">Latest Posts</p>
                <h2 className="text-4xl font-extrabold leading-tight text-[#175b5e] sm:text-5xl">
                  Invisalign Clear Aligners
                </h2>
                <p className="max-w-xl text-lg font-semibold text-[#1f4848]">
                  At Elite Dental Studio Kochi: Benefits, Process &amp; Cost
                </p>
                <p className="max-w-2xl text-sm leading-7 text-[#425b5b]">
                  If you want straighter teeth without the visibility of metal braces, Invisalign can be the comfortable, discreet choice for your smile journey.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#25cdbd] px-4 py-2 text-sm font-semibold text-white">eliteinfo@gmail.com</span>
                  <span className="text-sm text-[#4d6d6d]">Published: 07 August 2026</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="inline-flex w-fit items-center justify-center rounded-full bg-[#296f73] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#205c60]">
                  Read more
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_18px_45px_rgba(17,67,69,0.12)]">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" sizes="(max-width: 1023px) 100vw, 420px" />
              </div>
            </article>

            <div className="flex flex-col gap-4 rounded-[22px] bg-white p-5 shadow-[0_18px_30px_rgba(25,73,76,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="text-sm text-[#343939]">
                Filter: <strong>{category}</strong>
              </p>
              <label className="relative w-full sm:w-[340px]">
                <span className="sr-only">Search blog posts</span>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7b8888]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </span>
                <input
                  value={query}
                  onChange={(event) => updateSearch(event.target.value)}
                  placeholder="Search"
                  className="h-11 w-full rounded-full border border-[#c7dbda] bg-[#f8fafa] pl-11 pr-4 text-sm text-[#445656] outline-none transition focus:border-[#25bfae]"
                />
              </label>
            </div>

            <div id="blog-post-grid" className="grid gap-6 sm:grid-cols-2">
              {visiblePosts.map((post, index) => (
                <Link key={`${post.slug}-${index}`} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-[22px] border border-[#cde7e7] bg-white shadow-[0_16px_35px_rgba(15,65,68,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(15,65,68,0.12)]">
                  <div className="relative h-[220px] overflow-hidden bg-[#e9f7f6]">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 639px) 100vw, 390px" />
                    <div className="absolute inset-x-0 bottom-0 bg-[#20cdbd] px-4 py-3 text-center text-sm font-semibold text-white">
                      {post.category}
                    </div>
                  </div>
                  <div className="space-y-4 px-5 py-5">
                    <h3 className="text-lg font-bold text-[#1f4c4d]">{post.title}</h3>
                    <p className="text-sm leading-7 text-[#5a7171]">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#296f73]">{post.author}</span>
                      <span className="text-sm font-semibold text-[#296f73]">Read more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && <p className="py-16 text-center font-semibold text-[#296f73]">No blog posts found.</p>}

            {filtered.length > POSTS_PER_PAGE && (
              <nav aria-label="Blog pagination" className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous page"
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                  className="grid h-10 min-w-[40px] place-items-center rounded-full bg-[#20cdbd] px-3 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    aria-current={currentPage === page ? "page" : undefined}
                    onClick={() => changePage(page)}
                    className={`grid h-10 min-w-[40px] place-items-center rounded-full px-3 text-xs font-bold text-white ${currentPage === page ? "bg-[#20cdbd] ring-2 ring-[#20cdbd]/25 ring-offset-2" : "bg-[#296f73]"}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  aria-label="Next page"
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                  className="grid h-10 min-w-[40px] place-items-center rounded-full bg-[#20cdbd] px-3 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  →
                </button>
              </nav>
            )}
          </div>

          <aside className="space-y-10">
            <div className="rounded-[22px] bg-[#2b7478] px-8 py-7 text-white shadow-[0_18px_40px_rgba(15,67,69,0.18)]">
              <h2 className="border-b border-white/50 pb-4 text-2xl font-bold">Categories</h2>
              <ul className="mt-5 space-y-4 text-base font-semibold">
                <li className="flex gap-3">
                  <span>•</span>
                  <button type="button" onClick={() => updateCategory("All")} className="text-left text-white/90 transition hover:text-white">
                    All
                  </button>
                </li>
                {blogCategories.map((categoryItem) => (
                  <li key={categoryItem} className="flex gap-3">
                    <span>•</span>
                    <button type="button" onClick={() => updateCategory(categoryItem)} className="text-left text-white/90 transition hover:text-white">
                      {categoryItem}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[22px] bg-[#25cdbd] px-8 py-7 text-white shadow-[0_18px_40px_rgba(37,205,189,0.18)]">
              <h2 className="border-b border-white/60 pb-4 text-2xl font-bold">Recent Posts</h2>
              <ul className="mt-5 space-y-4 text-base font-semibold leading-6">
                {recentPosts.map((recentPost) => (
                  <li key={recentPost} className="flex gap-3">
                    <span>•</span>
                    <span>{recentPost}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
