import type { GetServerSideProps } from "next";
import BlogDirectory from "@/components/BlogDirectory";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import FAQSection from "@/components/FAQSection";
import SitePage from "@/components/SitePage";
import { getBlogsData, type BlogListData } from "@/lib/blogsApi";

type Props = { data: BlogListData };

export default function BlogPage({ data }: Props) {
  return (
    <SitePage
      title={data.pageSeo?.metaTitle || "Dental Blog | Elite Dental Studio"}
      description={
        data.pageSeo?.metaDescription ||
        "Read dental care tips, treatment guides and the latest news from Elite Dental Studio."
      }
    >
      <BlogDirectory posts={data.items} />
      <FAQSection />
      <BookAppointmentSection />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data: await getBlogsData() } };
};
