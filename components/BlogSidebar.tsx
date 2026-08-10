import Link from "next/link";
import { blogCategories, recentPosts } from "@/components/blogData";

type Props = { onCategory?: (category: string) => void };

export default function BlogSidebar({ onCategory }: Props) {
  const categoryLink = (category: string) =>
    onCategory ? (
      <button type="button" onClick={() => onCategory(category)}>{category}</button>
    ) : (
      <Link href="/blog">{category}</Link>
    );

  return (
    <aside className="grid gap-5 lg:block lg:pt-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
      <section className="rounded-[13px] bg-[#2a7377] px-[27px] pb-[30px] pt-[26px] text-white">
        <h2 className="border-b border-white/65 pb-3.5 text-[26px] font-semibold leading-[1.2]">Categories</h2>
        <ul className="mt-[18px] list-none p-0">
          {blogCategories.map((category) => <li className="relative mb-4 pl-[18px] text-base font-semibold leading-[1.55] before:absolute before:left-0 before:content-['•'] [&_a]:text-inherit [&_button]:cursor-pointer [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-left [&_button]:font-inherit [&_button]:text-inherit" key={category}>{categoryLink(category)}</li>)}
        </ul>
      </section>
      <section className="rounded-[13px] bg-[#26cdbc] px-[27px] pb-[30px] pt-[26px] text-white lg:mt-[70px]">
        <h2 className="border-b border-white/65 pb-3.5 text-[26px] font-semibold leading-[1.2]">Recent Posts</h2>
        <ul className="mt-[18px] list-none p-0">
          {recentPosts.map((post) => <li className="relative mb-4 pl-[18px] text-base font-semibold leading-[1.55] before:absolute before:left-0 before:content-['•']" key={post}>{post}</li>)}
        </ul>
      </section>
    </aside>
  );
}
