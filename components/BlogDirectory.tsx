import Image from "next/image";
import { useMemo, useState } from "react";

const POSTS_PER_PAGE = 8;

const posts = [
  { title: "How to Choose the Right Dental Clinic in Kannur for Your Family?", image: "/about-freepik-checkup.jpg", category: "Dental Care" },
  { title: "Complete Guide to Clear Aligners and a Confident Smile", image: "/home/services/invisible-aligners.jpg", category: "Clear Aligners" },
  { title: "Why Regular Dental Checkups Matter for Every Family", image: "/about-freepik-consultation.jpg", category: "Dental Care" },
  { title: "Dental Implants: Benefits, Process and Aftercare", image: "/service/services-2.png", category: "Dental Implants" },
  { title: "Simple Ways to Keep Your Teeth and Gums Healthy", image: "/about-freepik-treatment.jpg", category: "Dental Care" },
  { title: "Everything You Should Know About Dental Crowns", image: "/home/services/dental-fillings.jpg", category: "Bridges & Crowns" },
  { title: "How Invisible Braces Can Transform Your Smile", image: "/service/services-1.png", category: "Clear Aligners" },
  { title: "When Is Root Canal Treatment the Right Choice?", image: "/service/services-3.png", category: "Dental Care" },
  { title: "Common Signs That You May Need a Dental Filling", image: "/home/services/dental-fillings.png", category: "Dental Fillings" },
  { title: "Laser Dentistry: Comfortable Care with Modern Technology", image: "/home/services/laser-dentistry.jpg", category: "Laser Gum Surgery" },
  { title: "What Parents Should Know About Paediatric Dentistry", image: "/about/about-2.png", category: "General Dentistry" },
  { title: "A Step-by-Step Guide to Your Dental Implant Journey", image: "/service/services-inner-1.png", category: "Dental Implants" },
  { title: "Dental Veneers: A Natural-Looking Smile Makeover", image: "/service/services-inner-2.png", category: "Dental Veneers" },
  { title: "How to Prevent Tooth Sensitivity and Enamel Wear", image: "/service/services-inner-3.png", category: "Dental Abrasion" },
  { title: "Braces or Clear Aligners: Which Option Suits You?", image: "/home/services/invisible-aligners.png", category: "Clear Aligners" },
  { title: "Healthy Gum Habits for a Stronger, Brighter Smile", image: "/service/services-inner-4.png", category: "Dental Care" },
];

const categories = ["Blog", "Bridges & Crowns", "Clear Aligners", "Cosmetic Dentistry", "Dental Abrasion", "Dental Attrition", "Dental Care", "Dental Crown", "Dental Fillings", "Dental Granuloma", "Dental Implants", "Dental Implants Treatment", "Dental Tourism", "Dental Veneers", "General Dentistry", "Invisible Braces", "Laser Gum Surgery", "Operculectomy"];
const recent = ["Denture Stomatitis – Causes, Symptoms, Diagnosis, Treatment, and Prevention", "Tooth Cervical Abrasion, Causes, Treatment and Prevention", "How To Heal Mouth Ulcers Fast With Glycerine?", "Why Do My Teeth Hurt When I Have A Cold?", "Zirconia Crown Or PFM Crown: Which Is Better For You?"];

export default function BlogDirectory() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const filtered = useMemo(() => posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())), [query]);
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

  return (
    <section className="px-5 pb-14 pt-9 sm:px-8 lg:px-12 lg:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <h1 className="mb-6 text-2xl font-semibold text-[#343939]">Latest Posts</h1>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div>
            <article className="rounded-[16px] bg-[#f1faf7] p-5 sm:p-7">
              <div className="relative h-[250px] overflow-hidden rounded-[14px] bg-white shadow-[0_5px_18px_rgba(25,73,76,0.12)] sm:h-[390px]">
                <Image src="/home/services/invisible-aligners.jpg" alt="Invisalign clear aligners" fill priority sizes="(max-width: 1023px) 92vw, 820px" className="object-cover shadow-[0_8px_25px_rgba(35,97,100,0.50)]" />
                <div className="absolute inset-y-0 left-0 flex w-[58%] flex-col justify-center bg-white/90 px-7 sm:px-12">
                  <p className="text-2xl font-black leading-tight text-[#16cdbc] [text-shadow:1px_1px_0_#164e52] sm:text-5xl">Invisalign<br />Clear Aligners</p>
                  <p className="mt-2 text-sm font-semibold text-[#333] sm:text-xl">At<br /><strong>Elite Dental Studio Kochi:</strong><br />Benefits, Process &amp; Cost</p>
                </div>
              </div>
              <h2 className="mt-6 text-xl font-bold leading-snug text-[#296f73] sm:text-2xl">Invisalign Clear Aligners At Elite Dental Studio Kochi: Benefits, Process &amp; Cost</h2>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-base text-[#596565]">
                <span className="rounded bg-[#25cdbd] px-3 py-2 text-white">eliteinfo@gmail.com</span>
                <span>Published: 07 August 2026</span>
                <button type="button" className="rounded bg-[#296f73] px-5 py-2 font-bold text-white">Read more</button>
              </div>
            </article>

            <div className="mt-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="font-semibold text-[#343939]">Filter: <strong className="ml-3">All</strong></p>
              <label className="relative block w-full sm:w-[275px]">
                <span className="sr-only">Search blog posts</span>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7b8888]">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>

                </span>
                <input value={query} onChange={(event) => updateSearch(event.target.value)} placeholder="Search" className="h-11 w-full rounded-md border border-[#8ea1a1] bg-[#f8fafa] pl-10 pr-4 text-sm outline-none focus:border-[#25bfae]" />
              </label>
            </div>

            <div id="blog-post-grid" className="mt-8 grid scroll-mt-6 gap-x-8 gap-y-10 sm:grid-cols-2">
              {visiblePosts.map((post, index) => (
                <article key={`${post.title}-${index}`} className="overflow-hidden rounded-[13px] border border-[#b7d3d1] bg-[#f5fbfa] shadow-[0_6px_18px_rgba(31,92,94,0.08)]">
                  <div className="relative h-[185px] overflow-hidden">
                    <Image src={post.image} alt="" fill sizes="(max-width: 639px) 92vw, 390px" className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-[#20cdbd] px-4 py-2 text-center text-sm font-semibold text-white">{post.title}</div>
                  </div>
                  <div className="px-4 pb-4 pt-3">
                    <h2 className="min-h-[50px] text-lg font-semibold leading-7 text-[#364343]">{post.title}</h2>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <p className="text-sm leading-5 text-[#657171]">By eliteinfo@gmail.com<br />Published: 07 August 2026</p>
                      <button type="button" className="shrink-0 rounded bg-[#296f73] px-4 py-2 text-sm font-semibold text-white">Read more</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && <p className="py-16 text-center font-semibold text-[#296f73]">No blog posts found.</p>}
            {filtered.length > POSTS_PER_PAGE && (
              <nav aria-label="Blog pagination" className="mt-12 flex justify-center gap-3">
                <button type="button" aria-label="Previous page" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)} className="grid h-8 min-w-8 place-items-center rounded-full bg-[#20cdbd] px-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">←</button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button key={page} type="button" aria-current={currentPage === page ? "page" : undefined} onClick={() => changePage(page)} className={`grid h-8 min-w-8 place-items-center rounded-full px-2 text-xs font-bold text-white ${currentPage === page ? "bg-[#20cdbd] ring-2 ring-[#20cdbd]/25 ring-offset-2" : "bg-[#296f73]"}`}>{page}</button>
                ))}
                <button type="button" aria-label="Next page" disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)} className="grid h-8 min-w-8 place-items-center rounded-full bg-[#20cdbd] px-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">→</button>
              </nav>
            )}
          </div>

          <aside className="space-y-12 lg:sticky lg:top-6">
            <div className="rounded-[16px] bg-[#2b7478] px-8 py-7 text-white">
              <h2 className="border-b border-white/50 pb-4 text-2xl font-bold">Categories</h2>
              <ul className="mt-5 space-y-4 text-base font-semibold">{categories.map((category) => <li key={category} className="flex gap-3"><span>•</span><a href={`#${category.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[#25d2c1]">{category}</a></li>)}</ul>
            </div>
            <div className="rounded-[16px] bg-[#25cebd] px-8 py-7 text-white">
              <h2 className="border-b border-white/60 pb-4 text-2xl font-bold">Recent Posts</h2>
              <ul className="mt-5 space-y-4 text-base font-semibold leading-6">{recent.map((post) => <li key={post} className="flex gap-3"><span>•</span><a href="#" className="hover:text-[#185f64]">{post}</a></li>)}</ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
