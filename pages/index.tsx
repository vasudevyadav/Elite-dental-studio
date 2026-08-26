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
import { getTestimonials, type TestimonialItem } from "@/lib/testimonialsApi";

type HomeProps = {
  services: ServiceListItem[];
  doctors: DoctorListItem[];
  blogs: BlogApiPost[];
  clinics: Record<string, Clinic>;
  testimonials: TestimonialItem[];
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

function isSpecificMapUrl(mapUrl?: string) {
  if (!mapUrl) return false;

  try {
    const url = new URL(mapUrl);
    return url.pathname !== "/" || Boolean(url.search);
  } catch {
    return false;
  }
}

export default function Home({ services, doctors, blogs, clinics, testimonials }: HomeProps) {
  return (
    <SitePage
      title="Elite Dental Studio | Specialist Dental Care Across Calicut, Kochi, Kannur and Coimbatore"
      description="ISO 9001 certified specialist dental care across Calicut, Kochi, Kannur and Coimbatore, led by MDS qualified doctors since 2020."
      showFooterLocations={false}
    >
      <h1 className="sr-only">
        Elite Dental Studio: specialist dental care in Calicut, Kochi, Kannur and Coimbatore
      </h1>
      <HeroSection />
      <StatsBar />
      <NearestClinic clinics={clinics} />
      <AboutUs />
      <ServicesSection initialServices={services} />
      <DoctorsSection initialDoctors={doctors} />
      <AwardsSection />
      <TestimonialsSection initialTestimonials={testimonials} />
      <BlogSection initialPosts={blogs} />
      <FAQSection />
      <BookAppointmentSection />
      <AffordableDentalTreatment />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ res }) => {
  const clinicSlugs = new Set(["calicut", "kochi", "kannur", "coimbatore"]);
  const [services, doctorsData, blogs, locationsData, testimonials] = await Promise.all([
    getServicesStrict().catch(() => []),
    getContent<DoctorsData>("doctors").catch(() => null),
    getBlogs().catch(() => []),
    getContent<{ items: ClinicRef[] }>("locations").catch(() => ({ items: [] })),
    getTestimonials().catch(() => []),
  ]);

  const locationDetails = await Promise.all(
    locationsData.items
      .filter((location) => clinicSlugs.has(location.slug))
      .map((location) =>
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
            mapQuery: fallback?.mapQuery || addressLines.join(", ") || item.name,
            ...(fallback?.mapEmbedUrl ? { mapEmbedUrl: fallback.mapEmbedUrl } : {}),
            mapUrl:
              (isSpecificMapUrl(item.contact.mapUrl) ? item.contact.mapUrl : undefined) ||
              fallback?.mapUrl ||
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                addressLines.join(", ") || item.name,
              )}`,
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
      testimonials,
    },
  };
};
