import type { GetServerSideProps } from "next";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import NearestClinic from "@/components/NearestClinic";
import AboutUs from "@/components/AboutUs";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import AffordableDentalTreatment from "@/components/affordable-dental-treatment";
import SitePage from "@/components/SitePage";
import { defaultClinics, type Clinic } from "@/components/NearestClinic";
import { getBlogs, type BlogApiPost } from "@/lib/blogsApi";
import {
  getContent,
  type ClinicRef,
  type DoctorListItem,
  type DoctorsData,
} from "@/lib/contentApi";
import { getServicesStrict, type ServiceListItem } from "@/lib/servicesApi";

type HomeProps = {
  services: ServiceListItem[];
  doctors: DoctorListItem[];
  blogs: BlogApiPost[];
  clinics: Record<string, Clinic>;
};

type LocationDetail = {
  name: string;
  slug: string;
  contact: {
    mobile: string;
    telephone?: string | null;
    email: string;
    addressLines: string[];
    mapUrl?: string;
  };
};

export default function Home({ services, doctors, blogs, clinics }: HomeProps) {
  return (
    <SitePage
      title="Elite Dental Studio | Specialist Dental Care Across Calicut, Kochi, Kannur and Coimbatore"
      description="ISO 9001 certified specialist dental care across Calicut, Kochi, Kannur and Coimbatore, led by MDS qualified doctors since 2020."
    >
      <HeroSection />
      <StatsBar />
      <NearestClinic clinics={clinics} />
      <AboutUs />
      <ServicesSection initialServices={services} />
      <DoctorsSection initialDoctors={doctors} />
      <AwardsSection />
      <TestimonialsSection />
      <BlogSection initialPosts={blogs} />
      <FAQSection />
      <BookAppointmentSection />
      <AffordableDentalTreatment />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ res }) => {
  const [services, doctorsData, blogs, locationsData] = await Promise.all([
    getServicesStrict().catch(() => []),
    getContent<DoctorsData>("doctors").catch(() => null),
    getBlogs().catch(() => []),
    getContent<{ items: ClinicRef[] }>("locations").catch(() => ({ items: [] })),
  ]);

  const locationDetails = await Promise.all(
    locationsData.items.map((location) =>
      getContent<LocationDetail>(`locations/${location.slug}`).catch(() => null),
    ),
  );
  const clinics = Object.fromEntries(
    locationDetails
      .filter((item): item is LocationDetail => Boolean(item))
      .map((item) => {
        const key = item.slug.toUpperCase();
        const fallback = defaultClinics[key];
        const addressLines = item.contact.addressLines?.length
          ? item.contact.addressLines
          : fallback?.addressLines || [];
        return [
          key,
          {
            name: item.name.toUpperCase(),
            phone: item.contact.mobile || fallback?.phone || "",
            landline: item.contact.telephone || fallback?.landline || item.contact.mobile || "",
            email: item.contact.email || fallback?.email || "",
            addressLines,
            mapQuery: addressLines.join(", ") || fallback?.mapQuery || item.name,
            mapUrl: item.contact.mapUrl || fallback?.mapUrl,
          },
        ];
      }),
  );

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return {
    props: {
      services,
      doctors: doctorsData?.items || [],
      blogs: blogs.slice(0, 10),
      clinics,
    },
  };
};
