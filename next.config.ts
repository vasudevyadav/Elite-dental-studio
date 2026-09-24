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
      // =========================
      // Legacy PHP Landing Pages
      // =========================

      {
        source: "/implant/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/implant/:path*",
      },

      {
        source: "/aligner/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/aligner/:path*",
      },

      {
        source: "/dental-care/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/dental-care/:path*",
      },

      {
        source: "/coimbatore-aligner/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/coimbatore-aligner/:path*",
      },

      {
        source: "/coimbatore-generic/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/coimbatore-generic/:path*",
      },

      {
        source: "/coimbatore-implant/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/coimbatore-implant/:path*",
      },

      // =========================
      // Legacy Leads Panel
      // =========================

      {
        source: "/leads/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/leads/:path*",
      },

      // =========================
      // Legacy Captcha
      // =========================

      {
        source: "/captcha/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/captcha/:path*",
      },

      // =========================
      // Legacy Bigin Integration
      // =========================

      {
        source: "/bigin/:path*",
        destination: "https://legacy.elitedentalstudio.co.in/bigin/:path*",
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
