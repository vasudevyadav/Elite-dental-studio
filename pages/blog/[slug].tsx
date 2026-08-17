import type { GetServerSideProps } from "next";
import Image from "next/image";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import BlogSidebar from "@/components/BlogSidebar";
import FAQSection from "@/components/FAQSection";
import SitePage from "@/components/SitePage";
import {
  formatBlogDate,
  getBlog,
  getBlogs,
  sanitizeWordPressHtml,
  type BlogApiPost,
} from "@/lib/blogsApi";

type Props = { post: BlogApiPost; relatedPosts: BlogApiPost[] };

export default function BlogPostPage({ post, relatedPosts }: Props) {
  const categories = Array.from(
    new Map(
      relatedPosts.flatMap((item) => item.categories).map((item) => [item.slug, item]),
    ).values(),
  );

  return (
    <SitePage title={`${post.title} | Elite Dental Studio`} description={post.excerpt}>
      <section className="mx-auto max-w-[1240px] px-4 pt-8 pb-[34px] text-[#333] sm:px-8 sm:pt-10 lg:px-[34px] lg:pt-12">
        <p className="-mb-8 text-lg font-medium text-[#282828] sm:-mb-[26px] sm:text-xl">
          Latest Posts
        </p>
        <div className="grid min-w-0 items-start gap-9 lg:grid-cols-[minmax(0,820px)_270px] lg:gap-10 xl:gap-[70px]">
          <main className="min-w-0">
            <header className="relative mt-[50px] h-[250px] overflow-hidden rounded-[10px] bg-[#174e53] sm:h-[330px] lg:h-[390px]">
              <Image
                className="object-cover"
                src={post.image.url}
                alt={post.image.alt}
                fill
                priority
                sizes="800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073c41]/85 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 z-10 text-white sm:right-8 sm:bottom-7 sm:left-8">
                <p className="text-xs font-bold tracking-[.14em] text-[#58ddcf] uppercase">
                  {post.categories[0]?.name || "Dental Care"}
                </p>
                <p className="mt-2 text-xs text-white/80">
                  {post.author.name} · {formatBlogDate(post.publishedAt)}
                </p>
              </div>
            </header>
            <article className="text-[15px] leading-[1.72] text-[#4c5555] sm:text-base [&_a]:font-semibold [&_a]:text-[#168f85] [&_a]:underline [&_h1]:mt-8 [&_h1]:mb-5 [&_h1]:text-[22px] [&_h1]:leading-[1.35] [&_h1]:font-semibold [&_h1]:text-[#277579] sm:[&_h1]:text-[25px] [&_h2]:mt-8 [&_h2]:mb-3.5 [&_h2]:text-xl [&_h2]:leading-[1.35] [&_h2]:font-semibold [&_h2]:text-[#278184] sm:[&_h2]:text-[23px] [&_h3]:mt-8 [&_h3]:mb-3.5 [&_h3]:text-xl [&_h3]:leading-[1.35] [&_h3]:font-semibold [&_h3]:text-[#278184] [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-[#437f81] [&_img]:my-7 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl [&_li]:my-1 [&_p]:mb-[17px] [&_table]:my-8 [&_table]:block [&_table]:w-full [&_table]:min-w-[680px] [&_table]:overflow-x-auto [&_table]:rounded-xl [&_table]:border [&_table]:border-[#bddbd8] [&_table]:bg-white [&_table]:text-sm [&_table]:shadow-[0_10px_28px_rgba(23,78,83,.07)] [&_tbody]:w-full [&_td]:border-r [&_td]:border-b [&_td]:border-[#d5e7e5] [&_td]:px-5 [&_td]:py-3.5 [&_td]:align-top [&_th]:border-r [&_th]:border-b [&_th]:border-[#b7d9d5] [&_th]:bg-[#e9f8f6] [&_th]:px-5 [&_th]:py-4 [&_th]:text-left [&_th]:font-bold [&_th]:text-[#174e53] [&_tr:last-child_td]:border-b-0 [&_ul]:mt-2 [&_ul]:mb-[18px] [&_ul]:list-disc [&_ul]:pl-[18px]">
              <h1>{post.title}</h1>
              <div
                className="wordpress-blog-content"
                dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(post.content || "") }}
              />
            </article>
          </main>
          <BlogSidebar categories={categories} recentPosts={relatedPosts.slice(0, 5)} />
        </div>
      </section>
      <div className="mx-auto max-w-[1240px] [&_#appointment]:px-5 sm:[&_#appointment]:px-8 lg:[&_#appointment]:px-[34px] [&_.faq-section]:px-5 sm:[&_.faq-section]:px-8 lg:[&_.faq-section]:px-[34px]">
        <FAQSection />
        <BookAppointmentSection />
      </div>
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const slug = String(params?.slug || "");
  const [post, posts] = await Promise.all([getBlog(slug), getBlogs()]);
  if (!post) return { notFound: true };
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { post, relatedPosts: posts.filter((item) => item.slug !== slug) } };
};
