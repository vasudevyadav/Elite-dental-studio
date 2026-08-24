import Link from "next/link";
import type { BlogApiPost, BlogCategory } from "@/lib/blogsApi";

type Props = {
  onCategory?: (category: string) => void;
  selectedCategory?: string;
  categories?: BlogCategory[];
  recentPosts?: BlogApiPost[];
};

export default function BlogSidebar({
  onCategory,
  selectedCategory,
  categories = [],
  recentPosts = [],
}: Props) {
  const categoryLink = (category: BlogCategory) =>
    onCategory ? (
      <button
        type="button"
        onClick={() => onCategory(category.slug)}
        aria-pressed={selectedCategory === category.slug}
        className={selectedCategory === category.slug ? "text-[#54f1e2] underline" : ""}
      >
        {category.name}
      </button>
    ) : (
      <Link href={category.slug === "All" ? "/blog" : `/blog?category=${category.slug}`}>
        {category.name}
      </Link>
    );

  return (
    <aside className="grid gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:block lg:pt-12">
      <section className="rounded-[13px] bg-[#2a7377] px-[27px] pt-[26px] pb-[30px] text-white">
        <h2 className="border-b border-white/65 pb-3.5 text-[26px] leading-[1.2] font-semibold">
          Categories
        </h2>
        <ul
          className={`mt-[18px] list-none p-0 ${
            categories.length > 20
              ? "max-h-[820px] overflow-y-auto overscroll-contain pr-3 [scrollbar-color:rgba(255,255,255,.65)_transparent] [scrollbar-width:thin]"
              : ""
          }`}
        >
          {[{ name: "All", slug: "All" }, ...categories].map((category) => (
            <li
              className="[&_button]:font-inherit relative mb-4 pl-[18px] text-base leading-[1.55] font-semibold before:absolute before:left-0 before:content-['•'] [&_a]:text-inherit [&_button]:cursor-pointer [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-left [&_button]:text-inherit"
              key={category.slug}
            >
              {categoryLink(category)}
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-[13px] bg-[#26cdbc] px-[27px] pt-[26px] pb-[30px] text-white lg:mt-[70px]">
        <h2 className="border-b border-white/65 pb-3.5 text-[26px] leading-[1.2] font-semibold">
          Recent Posts
        </h2>
        <ul className="mt-[18px] list-none p-0">
          {recentPosts.map((post) => (
            <li
              className="relative mb-4 pl-[18px] text-base leading-[1.55] font-semibold before:absolute before:left-0 before:content-['•']"
              key={post.slug}
            >
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
