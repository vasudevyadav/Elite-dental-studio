import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorsDirectory from "@/components/DoctorsDirectory";
import FAQSection from "@/components/FAQSection";
import SitePage from "@/components/SitePage";
import { getContent, type DoctorsData } from "@/lib/contentApi";

export default function DoctorsPage({ data }: { data: DoctorsData }) {
  return (
    <SitePage title={data.pageSeo.metaTitle} description={data.pageSeo.metaDescription}>
      <DoctorsDirectory data={data} />
      <FAQSection />
      <BookAppointmentSection />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: DoctorsData }> = async ({ res }) => {
  const data = await getContent<DoctorsData>("doctors");
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data } };
};
import type { GetServerSideProps } from "next";
