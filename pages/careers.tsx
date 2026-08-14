/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GetServerSideProps } from "next";
import CareersContent from "@/components/careers/CareersContent";
import SitePage from "@/components/SitePage";
import { getContent } from "@/lib/contentApi";

export type CareersData = Record<string, any>;

export default function CareersPage({ data }: { data: CareersData }) {
  return (
    <SitePage title={data.seo.metaTitle} description={data.seo.metaDescription}>
      <CareersContent data={data} />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: CareersData }> = async ({ res }) => {
  const data = await getContent<CareersData>("careers");
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data } };
};
