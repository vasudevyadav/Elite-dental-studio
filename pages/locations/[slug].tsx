import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorsSection from "@/components/DoctorsSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SitePage from "@/components/SitePage";
import { getContent, section, type DynamicSection } from "@/lib/contentApi";

function renderSectionIcon(icon: unknown) {
  if (typeof icon === "string" && icon) return icon;
  if (icon && typeof icon === "object" && "url" in icon && (icon as { url?: string }).url) {
    const image = icon as { url: string; alt?: string };
    return (
      <Image
        src={image.url}
        alt={image.alt || ""}
        width={32}
        height={32}
        className="mx-auto h-8 w-8 object-contain"
      />
    );
  }
  return "✦";
}

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
  const travel = section(data.sections, "travel") || {};
  const faq = section(data.sections, "faq") || {};
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
            {benefits.items.map((item: Record<string, unknown>) => (
              <article
                key={String(item.title)}
                className="rounded-2xl border border-[#b8dfdc] bg-[#effaf8] p-6 text-center"
              >
                <div className="text-3xl">{renderSectionIcon(item.icon)}</div>
                <h3 className="mt-3 font-bold text-[#286f73]">{String(item.title)}</h3>
                <p className="mt-2 text-sm text-[#607779]">{String(item.text)}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {services.items?.length > 0 ? (
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <h2 className="text-center text-3xl font-bold text-[#174e53]">{services.heading}</h2>
          {services.subHeading && (
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#607779] sm:text-base">
              {services.subHeading}
            </p>
          )}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((item: Record<string, unknown>) => (
              <article
                key={String(item.title)}
                className="rounded-2xl border border-[#dbe9e7] bg-white p-6 shadow-[0_10px_28px_rgba(23,78,83,.06)]"
              >
                <h3 className="font-bold text-[#174e53]">{String(item.title)}</h3>
                <p className="mt-2 text-sm leading-6 text-[#607779]">{String(item.description)}</p>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <ServicesSection compact title={services.title} description={services.description} />
      )}

      <DoctorsSection compact clinicSlug={doctors.clinicSlug || data.slug} />

      {travel.items?.length > 0 && (
        <section className="bg-[#f3faf9] px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold tracking-[.16em] text-[#20a99d] uppercase sm:text-sm">
              {travel.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#174e53] sm:text-3xl">{travel.title}</h2>
            {travel.description && (
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#607779] sm:text-base">
                {travel.description}
              </p>
            )}
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {travel.items.map((item: Record<string, unknown>) => (
                <article
                  key={String(item.title)}
                  className="rounded-xl border-2 border-white bg-white p-5 text-center text-[#286f73] shadow-sm"
                >
                  <div className="text-3xl">{renderSectionIcon(item.icon)}</div>
                  <h3 className="mt-3 font-bold">{String(item.title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526f71]">{String(item.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {faq.items?.length > 0 && (
        <FAQSection
          content={{
            eyebrow: faq.eyebrow || "FAQs",
            title: faq.title || "Frequently Asked Questions",
            description: faq.description || "",
            items: faq.items.map((item: Record<string, unknown>) => ({
              question: String(item.question),
              answer: String(item.answer),
            })),
          }}
        />
      )}

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
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return { props: { data } };
  } catch {
    return { notFound: true };
  }
};
