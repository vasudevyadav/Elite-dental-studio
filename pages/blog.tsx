import BlogDirectory from "@/components/BlogDirectory";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import FAQSection from "@/components/FAQSection";
import SitePage from "@/components/SitePage";
import { getBlogs, type BlogApiPost } from "@/lib/blogsApi";

type Props = { posts: BlogApiPost[] };

export default function BlogPage({ posts }: Props) {
  return (
    <SitePage
      title="Dental Blog | Elite Dental Studio"
      description="Read dental care tips, treatment guides and the latest news from Elite Dental Studio."
    >
      <BlogDirectory posts={posts} />
      <FAQSection />
      <BookAppointmentSection />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { posts: await getBlogs() } };
};
import type { GetServerSideProps } from "next";
