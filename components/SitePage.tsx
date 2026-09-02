import Head from "next/head";
import type { ReactNode } from "react";
import { useRouter } from "next/router";
import GlobalFooter from "@/components/GlobalFooter";
import Navbar from "@/components/Navbar";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";

type SitePageProps = {
  title: string;
  description: string;
  children: ReactNode;
  mainClassName?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  showFooterLocations?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

export default function SitePage({
  title,
  description,
  children,
  mainClassName = "",
  canonicalUrl,
  noIndex = false,
  showFooterLocations = true,
  structuredData,
}: SitePageProps) {
  const router = useRouter();
  const canonical = canonicalUrl || absoluteUrl(router.asPath.split("?")[0] || "/");
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Elite Dental Studio",
      url: getSiteUrl(),
      logo: absoluteUrl("/navbar/elite-logo.png"),
      sameAs: [
        "https://www.facebook.com/elitedentalstudio1",
        "https://www.instagram.com/elitedental_studio/",
        "https://www.youtube.com/channel/UCOfybkaXV4UoBAE0bjGIkVQ",
      ],
    },
    ...(Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : []),
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <link rel="canonical" href={canonical} />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:site_name" content="Elite Dental Studio" key="og-site-name" />
        <meta property="og:title" content={title} key="og-title" />
        <meta property="og:description" content={description} key="og-description" />
        <meta property="og:url" content={canonical} key="og-url" />
        <meta property="og:image" content={absoluteUrl("/navbar/elite-logo.png")} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {schema.map((item, index) => (
          <script
            key={`structured-data-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </Head>
      <div className="overflow-x-clip bg-white">
        <Navbar />
        <main className={mainClassName}>{children}</main>
        <GlobalFooter showLocations={showFooterLocations} />
      </div>
    </>
  );
}
