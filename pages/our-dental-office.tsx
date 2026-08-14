import BookAppointmentSection from "@/components/BookAppointmentSection";
import NearestClinic from "@/components/NearestClinic";
import SitePage from "@/components/SitePage";
import OfficeComfort from "@/components/office/OfficeComfort";
import OfficeGallery from "@/components/office/OfficeGallery";
import OfficeHero from "@/components/office/OfficeHero";
import OfficeIntroduction from "@/components/office/OfficeIntroduction";
import { appointmentContent } from "@/content/siteSections";
import { getContent, section, type DynamicSection } from "@/lib/contentApi";

type OfficeData = {
  seo: { metaTitle: string; metaDescription: string };
  sections: DynamicSection[];
};

export default function OurDentalOfficePage({ data }: { data: OfficeData }) {
  return (
    <SitePage
      title={data.seo.metaTitle}
      description={data.seo.metaDescription}
      mainClassName="bg-[#f7fbfa]"
    >
      <OfficeHero data={section(data.sections, "hero")} />
      <OfficeIntroduction data={section(data.sections, "introduction")} />
      <OfficeGallery data={section(data.sections, "gallery")} />
      <OfficeComfort data={section(data.sections, "comfort")} />
      <NearestClinic />
      <BookAppointmentSection content={appointmentContent} />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: OfficeData }> = async ({ res }) => {
  const data = await getContent<OfficeData>("our-dental-office");
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data } };
};
import type { GetServerSideProps } from "next";
