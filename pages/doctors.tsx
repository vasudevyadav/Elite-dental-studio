import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorsDirectory from "@/components/DoctorsDirectory";
import SitePage from "@/components/SitePage";
import { DOCTORS_PAGE_SIZE, getDoctorsPage, type DoctorsData } from "@/lib/contentApi";

export default function DoctorsPage({ data }: { data: DoctorsData }) {
  return (
    <SitePage title={data.pageSeo.metaTitle} description={data.pageSeo.metaDescription}>
      <DoctorsDirectory data={data} />
      <BookAppointmentSection />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: DoctorsData }> = async ({ res }) => {
  const data = await getDoctorsPage({ page: 1, limit: DOCTORS_PAGE_SIZE });
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data } };
};
import type { GetServerSideProps } from "next";
