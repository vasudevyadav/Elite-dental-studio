/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GetServerSideProps } from "next";
import Link from "next/link";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorsSection from "@/components/DoctorsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SitePage from "@/components/SitePage";
import { getContent, section, type DynamicSection } from "@/lib/contentApi";

type LocationData = {
  slug: string;
  name: string;
  seo: { metaTitle: string; metaDescription: string };
  contact: {
    mobile: string;
    mobileHref: string;
    telephone?: string | null;
    email: string;
    addressLines: string[];
    mapUrl: string;
    mapEmbedUrl: string;
  };
  workingHours: { days: string; time: string }[];
  sections: DynamicSection[];
};

const heroFallbacks: Record<string, string> = {
  calicut: "/office/calicut-04.webp",
  kochi: "/office/kochi-03.webp",
  coimbatore: "/office/1f0186e7-99d0-44d4-a6dd-efb98b394a8e.webp",
};

export default function LocationPage({ data }: { data: LocationData }) {
  const hero = section(data.sections, "hero") || {};
  const intro = section(data.sections, "introduction") || {};
  const benefits = section(data.sections, "benefits") || {};
  const services = section(data.sections, "services") || {};
  const doctors = section(data.sections, "doctors") || {};
  const heroImage = hero.slides?.[0]?.image;

  return (
    <SitePage title={data.seo.metaTitle} description={data.seo.metaDescription}>
      <div className="[&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[rgba(4,55,60,.52)]">
        <HeroSection
          slides={[
            {
              img: heroImage?.url || heroFallbacks[data.slug] || "/locations-kannur-hero.png",
              alt: heroImage?.alt || `Elite Dental Studio ${data.name}`,
            },
          ]}
          content={{
            eyebrow: "Elite Dental Studio",
            title: `${data.name} Dental`,
            accent: "Clinic",
            description:
              intro.paragraphs?.[0] ||
              `Specialist-led dental care, modern technology and comfortable treatment in ${data.name}.`,
          }}
        />
      </div>

      <section className="bg-[#276368] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[.16em] text-[#4cdfd1] uppercase">
              Our {data.name} clinic
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {intro.title || `Trusted dental care in ${data.name}`}
            </h1>
            {(intro.paragraphs || []).map((paragraph: string) => (
              <p key={paragraph} className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
                {paragraph}
              </p>
            ))}
            <Link
              href="#appointment"
              className="mt-7 inline-flex rounded-lg bg-[#25cdbd] px-6 py-3 text-sm font-bold"
            >
              {intro.cta?.label || "Book Your Appointment"}
            </Link>
          </div>

          <div className="overflow-hidden rounded-[22px] bg-white text-[#315f63] shadow-xl">
            <iframe
              title={`Elite Dental Studio ${data.name} map`}
              src={data.contact.mapEmbedUrl}
              className="h-[260px] w-full border-0"
              loading="lazy"
            />
            <div className="space-y-3 p-6 text-sm">
              <p className="font-bold text-[#174e53]">{data.name} Clinic</p>
              <p>{data.contact.addressLines.join(", ")}</p>
              <a className="block font-semibold" href={`tel:${data.contact.mobileHref}`}>
                {data.contact.mobile}
              </a>
              <a className="block break-all" href={`mailto:${data.contact.email}`}>
                {data.contact.email}
              </a>
              <a
                href={data.contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-lg bg-[#276368] px-5 py-2.5 font-bold text-white"
              >
                Get directions ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {benefits.items?.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <h2 className="text-center text-3xl font-bold text-[#286f73]">{benefits.title}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.items.map((item: Record<string, string>) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#b8dfdc] bg-[#effaf8] p-6 text-center"
              >
                <h3 className="font-bold text-[#286f73]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#607779]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <ServicesSection compact title={services.title} description={services.description} />
      <DoctorsSection compact clinicSlug={doctors.clinicSlug || data.slug} />
      <div id="appointment">
        <BookAppointmentSection />
      </div>
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: LocationData }> = async ({
  params,
  res,
}) => {
  try {
    const data = await getContent<LocationData>(`locations/${String(params?.slug || "")}`);
    const suppliedMaps: Record<string, string> = {
      calicut: "https://share.google/Fwtkjjfxd6VB0I8Pg",
      kochi: "https://share.google/rBjee9uoOFuyUrBiN",
      kannur: "https://share.google/hqWjVESaLgEvGCPDX",
    };
    data.contact.mapUrl = suppliedMaps[data.slug] || data.contact.mapUrl;
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return { props: { data } };
  } catch {
    return { notFound: true };
  }
};
