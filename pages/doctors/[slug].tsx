import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorProfile from "@/components/DoctorProfile";
import { drAmalAppointmentContent } from "@/content/siteSections";
import SitePage from "@/components/SitePage";
import { getContent, type DoctorDetail } from "@/lib/contentApi";

export default function DoctorDetailsPage({ doctor }: { doctor: DoctorDetail }) {
  return (
    <SitePage title={doctor.seo.metaTitle} description={doctor.seo.metaDescription}>
      <DoctorProfile doctor={doctor} />
      <BookAppointmentSection content={drAmalAppointmentContent} />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ doctor: DoctorDetail }> = async ({
  params,
  res,
}) => {
  try {
    const doctor = await getContent<DoctorDetail>(`doctors/${String(params?.slug || "")}`);
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return { props: { doctor } };
  } catch {
    return { notFound: true };
  }
};
import type { GetServerSideProps } from "next";
