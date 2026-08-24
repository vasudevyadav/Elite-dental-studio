import type { GetServerSideProps } from "next";
import { absoluteUrl } from "@/lib/siteUrl";

export default function Robots() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
  res.write(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /thank-you\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`);
  res.end();
  return { props: {} };
};
