import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  devIndicators: false,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  serverExternalPackages: ["sanitize-html"],

  async rewrites() {
    return [
      {
        source: "/implant",
        destination: "/legacy/implant",
      },
      {
        source: "/implant/:path*",
        destination: "/legacy/implant/:path*",
      },
      {
        source: "/aligner",
        destination: "/legacy/aligner",
      },
      {
        source: "/aligner/:path*",
        destination: "/legacy/aligner/:path*",
      },
      {
        source: "/dental-care",
        destination: "/legacy/dental-care",
      },
      {
        source: "/dental-care/:path*",
        destination: "/legacy/dental-care/:path*",
      },
      {
        source: "/coimbatore-aligner",
        destination: "/legacy/coimbatore-aligner",
      },
      {
        source: "/coimbatore-aligner/:path*",
        destination: "/legacy/coimbatore-aligner/:path*",
      },
      {
        source: "/coimbatore-generic",
        destination: "/legacy/coimbatore-generic",
      },
      {
        source: "/coimbatore-generic/:path*",
        destination: "/legacy/coimbatore-generic/:path*",
      },
      {
        source: "/coimbatore-implant",
        destination: "/legacy/coimbatore-implant",
      },
      {
        source: "/coimbatore-implant/:path*",
        destination: "/legacy/coimbatore-implant/:path*",
      },
      {
        source: "/leads",
        destination: "/legacy/leads",
      },
      {
        source: "/leads/:path*",
        destination: "/legacy/leads/:path*",
      },
      {
        source: "/captcha",
        destination: "/legacy/captcha",
      },
      {
        source: "/captcha/:path*",
        destination: "/legacy/captcha/:path*",
      },
      {
        source: "/captcha",
        destination: "/legacy/captcha",
      },
      {
        source: "/captcha/:path*",
        destination: "/legacy/captcha/:path*",
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
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
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
