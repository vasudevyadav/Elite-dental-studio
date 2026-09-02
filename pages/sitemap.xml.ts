import type { GetServerSideProps } from "next";
import { getBlogs } from "@/lib/blogsApi";
import { getContent, type ClinicRef, type DoctorsData } from "@/lib/contentApi";
import { getServices } from "@/lib/servicesApi";
import { absoluteUrl } from "@/lib/siteUrl";
import { isMainClinic } from "@/lib/clinics";

const staticPaths = [
  "/",
  "/about",
  "/services",
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
  services.forEach((service) => paths.set(`/services/${service.slug}`, undefined));
  blogs.forEach((post) =>
    paths.set(`/blog/${post.slug}`, post.updatedAt || post.publishedAt || undefined),
  );
  (doctorsData?.items || []).forEach((doctor) =>
    paths.set(doctor.profileUrl || `/doctors/${doctor.slug}`, undefined),
  );
  locationsData.items
    .filter((location) => isMainClinic(location.slug))
    .forEach((location) => paths.set(`/locations/${location.slug}`, undefined));

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
