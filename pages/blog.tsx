import type { GetServerSideProps } from "next";
import BlogDirectory from "@/components/BlogDirectory";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import FAQSection from "@/components/FAQSection";
import SitePage from "@/components/SitePage";
import { getBlogsData, type BlogListData } from "@/lib/blogsApi";

type Props = { data: BlogListData; initialCategory: string };

export default function BlogPage({ data, initialCategory }: Props) {
  return (
    <SitePage
      title={data.pageSeo?.metaTitle || "Dental Blog | Elite Dental Studio"}
      description={
        data.pageSeo?.metaDescription ||
        "Read dental care tips, treatment guides and the latest news from Elite Dental Studio."
      }
    >
      <BlogDirectory posts={data.items} initialCategory={initialCategory} />
      <FAQSection />
      <BookAppointmentSection />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query, res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  const data = await getBlogsData();
  const requestedCategory = typeof query.category === "string" ? query.category : "All";
  const initialCategory = data.items.some((post) =>
    post.categories.some((category) => category.slug === requestedCategory),
  )
    ? requestedCategory
    : "All";
  return { props: { data, initialCategory } };
};
