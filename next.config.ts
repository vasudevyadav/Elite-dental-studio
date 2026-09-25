import type { NextConfig } from "next";
import { siteRedirects } from "./lib/siteRedirects";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  serverExternalPackages: ["sanitize-html"],
  // Landing pages need "/aligner/" with a trailing slash; proxy.ts handles slash redirects.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // Services section moved from /services (plural) to /service (singular).
      { source: "/services", destination: "/service", permanent: true },
      { source: "/services/", destination: "/service", permanent: true },
      { source: "/services/:slug", destination: "/service/:slug", permanent: true },
      { source: "/services/:slug/", destination: "/service/:slug", permanent: true },
      ...siteRedirects.flatMap(({ source, destination }) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]),
      {
        source: "/",
        has: [{ type: "host" as const, value: "elitedentalstudio.co.in" }],
        destination: "https://www.elitedentalstudio.co.in/",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reinventmedia.in",
        pathname: "/elitedentalstudio/**",
      },
      {
        protocol: "https",
        hostname: "cms.elitedentalstudio.co.in",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cms.elitedentalstudio.co.in",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
