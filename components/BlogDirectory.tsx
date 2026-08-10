import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import BlogSidebar from "@/components/BlogSidebar";
import { blogPosts } from "@/components/blogData";

const repeatedPosts = Array.from({ length: 32 }, (_, index) => blogPosts[1 + (index % Math.max(1, blogPosts.length - 1))]);
const PAGE_SIZE = 8;

export default function BlogDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const featured = blogPosts[0];
  const filtered = useMemo(() => repeatedPosts.filter((post) =>
    (category === "All" || post.category.toLowerCase() === category.toLowerCase()) &&
    post.title.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const selectCategory = (value: string) => { setCategory(value === "Blog" ? "All" : value); setPage(1); };

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8 text-[#333] sm:px-8 sm:py-10 lg:px-[34px] lg:pb-[72px] lg:pt-12">
      <div className="grid min-w-0 items-start gap-9 lg:grid-cols-[minmax(0,820px)_270px] lg:gap-10 xl:gap-[70px]">
        <main>
          <h1 className="mb-5 text-xl font-medium text-[#282828]">Latest Posts</h1>
          <article className="rounded-xl bg-[#eff9f7] p-2.5 shadow-[0_0_26px_rgba(23,99,100,.13)] sm:rounded-[14px] sm:p-[18px]">
            <div className="relative h-[250px] overflow-hidden rounded-[10px] bg-white shadow-[0_3px_17px_rgba(0,0,0,.09)] after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.9)_52%,transparent_100%)] sm:h-[320px] lg:h-[370px] lg:after:bg-[linear-gradient(90deg,#fff_0%,#fff_42%,rgba(255,255,255,.5)_55%,transparent_74%)]">
              <div className="absolute left-5 top-6 z-[2] max-w-[70%] sm:left-9 sm:top-8 sm:max-w-[360px] lg:left-14 lg:top-10 lg:max-w-[390px]">
                <strong className="block text-[27px] font-extrabold leading-[1.1] tracking-[-.04em] text-[#18cfc1] [text-shadow:2px_2px_0_#19585c] sm:text-[38px] lg:text-[50px]">Invisalign<br />Clear Aligners</strong>
                <span className="mt-2 block text-sm leading-[1.4] text-[#2c2b2b] sm:text-xl lg:mt-2.5 lg:text-[25px]">At<br /><b>Elite Dental Studio Kochi:</b><br />Benefits, Process &amp; Cost</span>
              </div>
              <Image className="z-0 object-cover object-[60%_center]" src={featured.image} alt="Clear Invisalign aligners" fill priority sizes="760px" />
            </div>
            <h2 className="mx-2.5 mb-4 mt-5 max-w-[690px] text-base font-semibold leading-[1.4] text-[#276f72] sm:text-xl lg:mb-[19px] lg:mt-6 lg:text-[23px]">{featured.title}</h2>
            <div className="flex flex-wrap items-center gap-2.5 px-2.5 pb-2 sm:gap-5 lg:gap-7">
              <span className="rounded-sm bg-[#21cdbd] px-[11px] py-[7px] text-[13px] text-white">eliteinfo@gmail.com</span>
              <small className="text-xs text-[#6e8686]">Published: {featured.date}</small>
              <Link className="rounded-sm bg-[#286f73] px-[21px] py-2 text-[13px] font-semibold text-white sm:ml-auto" href={`/blog/${featured.slug}`}>Read more</Link>
            </div>
          </article>

          <div className="mx-2.5 mb-6 mt-10 flex flex-col items-stretch gap-3 text-base sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:text-lg lg:mt-[68px]">
            <p>Filter: <b>{category}</b></p>
            <label className="relative w-full sm:w-[300px]"><span className="absolute left-[15px] top-2 text-[19px] text-[#777]" aria-hidden="true">⌕</span><input className="h-[43px] w-full rounded-[7px] border border-[#909090] px-4 pl-11 text-sm outline-none focus:border-[#25bfae] focus:ring-4 focus:ring-[#25bfae]/10" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search" aria-label="Search posts" /></label>
          </div>

          <div className="grid grid-cols-1 gap-x-[26px] gap-y-[30px] sm:grid-cols-2" id="blog-post-grid">
            {visible.map((post, index) => (
              <article className="overflow-hidden rounded-[10px] border border-[#c8dedc] bg-white shadow-[0_5px_13px_rgba(17,91,92,.11)]" key={`${post.slug}-${index}`}>
                <Link href={`/blog/${post.slug}`} className="relative block h-[185px] overflow-hidden sm:h-[195px] xl:h-[205px]">
                  <Image className="object-cover" src={post.image} alt={post.title} fill sizes="(max-width: 720px) 100vw, 340px" />
                  <span className="absolute inset-x-0 bottom-0 bg-[#21cdbd] p-2 text-center text-sm font-semibold leading-[1.2] text-white">How to Choose the Right Dental Clinic<br />in Kannur for Your Family?</span>
                </Link>
                <h3 className="mx-3.5 mt-[13px] text-base mb-4 font-medium leading-[1.4]">{post.title}</h3>
                <div className="flex items-end gap-2 px-3 pb-2.5"><small className="text-[10px] leading-[1.45] text-[#6a8583]">By eliteinfo@gmail.com<br />Published: 07 August 2026</small><Link className="ml-auto whitespace-nowrap rounded-sm bg-[#286f73] px-[15px] py-1.5 text-[13px] font-semibold text-white" href={`/blog/${post.slug}`}>Read more</Link></div>
              </article>
            ))}
          </div>

          {visible.length === 0 && <p className="py-[60px] text-center">No blog posts found.</p>}
          <nav className="mt-[62px] flex items-center justify-center gap-[13px]" aria-label="Blog pagination">
            {[1, 2, 3, "…", pages].map((item, index) => typeof item === "number" ?
              <button key={`${item}-${index}`} className={`grid h-7 w-7 cursor-pointer place-items-center rounded-full border-0 text-[10px] font-bold text-white ${page === item ? "bg-[#21cdbd]" : "bg-[#2d7376]"}`} onClick={() => setPage(item)}>{item}</button> :
              <span className="grid h-7 w-2.5 place-items-center text-[10px]" key={index}>{item}</span>)}
            <button className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border-0 bg-[#21cdbd] text-[10px] font-bold text-white" onClick={() => setPage(Math.min(page + 1, pages))}>→</button>
          </nav>
        </main>
        <BlogSidebar onCategory={selectCategory} />
      </div>
    </section>
  );
}
