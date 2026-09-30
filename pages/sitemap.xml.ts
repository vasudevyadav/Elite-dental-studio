import type { GetServerSideProps } from "next";
import { getBlogs } from "@/lib/blogsApi";
import { getContent, type ClinicRef, type DoctorsData } from "@/lib/contentApi";
import { getServices } from "@/lib/servicesApi";
import { absoluteUrl } from "@/lib/siteUrl";

const staticPaths = [
  "/",
  "/about",
  "/service",
  "/doctors",
  "/our-dental-office",
  "/facilities",
  "/patient-safety",
  "/international-patients",
  "/contact",
  "/blog",
  "/careers",
  "/gallery/cases",
];

// Published CMS detail pages can become available before their collection
// endpoints are refreshed. Keep these canonical URLs discoverable until the
// corresponding services/locations list responses include them as well.
const requiredDynamicPaths = [
  "/pediatric-dental-clinic-in-coimbatore",
  "/service/dental-braces-treatment-in-coimbatore",
  "/service/dental-implants-treatment-in-coimbatore",
  "/service/wisdom-teeth-removal-in-coimbatore",
  "/service/smile-makeover-treatment-in-coimbatore",
  "/service/laser-dental-clinic-in-coimbatore",
  "/service/cosmetic-dentist-in-coimbatore",
];

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const [services, blogs, doctorsData, locationsData] = await Promise.all([
    getServices().catch(() => []),
    getBlogs().catch(() => []),
    getContent<DoctorsData>("doctors").catch(() => null),
    getContent<{ items: ClinicRef[] }>("locations").catch(() => ({ items: [] })),
  ]);
  const paths = new Map<string, string | undefined>();
  staticPaths.forEach((path) => paths.set(path, undefined));
  requiredDynamicPaths.forEach((path) => paths.set(path, undefined));
  services.forEach((service) => paths.set(`/service/${service.slug}`, undefined));
  blogs.forEach((post) =>
    paths.set(`/${post.slug}`, post.updatedAt || post.publishedAt || undefined),
  );
  (doctorsData?.items || []).forEach((doctor) =>
    paths.set(doctor.profileUrl || `/doctors/${doctor.slug}`, undefined),
  );
  locationsData.items.forEach((location) => paths.set(`/${location.slug}`, undefined));

  const urls = Array.from(paths)
    .map(([path, lastModified]) => {
      const lastmod = lastModified
        ? `<lastmod>${escapeXml(new Date(lastModified).toISOString())}</lastmod>`
        : "";
      return `  <url><loc>${escapeXml(absoluteUrl(path))}</loc>${lastmod}</url>`;
    })
    .join("\n");

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
  );
  res.end();
  return { props: {} };
};
