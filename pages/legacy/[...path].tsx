import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

const LEGACY_ORIGIN = "https://legacy.elitedentalstudio.co.in";

function rewriteLegacyAssets(html: string, pagePath: string) {
  const basePath = pagePath.endsWith("/") ? pagePath : `${pagePath}/`;
  const absoluteBase = `${LEGACY_ORIGIN}${basePath}`;

  // Relative src/href:
  // images/foo.webp
  // css/style.css
  // fonts/font.woff2
  html = html.replace(
    /(src|href)=["'](?!https?:\/\/|\/\/|#|data:|mailto:|tel:|javascript:|\/)([^"']+)["']/gi,
    (_match, attr, value) => {
      const cleanValue = value.replace(/^\.\//, "");

      return `${attr}="${absoluteBase}${cleanValue}"`;
    },
  );

  // Root-relative src/href:
  // /images/foo.webp
  // /css/style.css
  // /fonts/font.woff2
  html = html.replace(/(src|href)=["'](\/(?!\/)[^"']*)["']/gi, (_match, attr, value) => {
    return `${attr}="${LEGACY_ORIGIN}${value}"`;
  });

  // srcset:
  // images/a.webp 480w, images/b.webp 768w
  html = html.replace(/(\bsrcset)=["']([^"']+)["']/gi, (_match, attr, value) => {
    const rewritten = value
      .split(",")
      .map((item: string) => {
        const parts = item.trim().split(/\s+/);
        const src = parts[0];

        if (
          src.startsWith("http://") ||
          src.startsWith("https://") ||
          src.startsWith("//") ||
          src.startsWith("data:") ||
          src.startsWith("/")
        ) {
          return item.trim();
        }

        parts[0] = `${absoluteBase}${src.replace(/^\.\//, "")}`;

        return parts.join(" ");
      })
      .join(", ");

    return `${attr}="${rewritten}"`;
  });

  // CSS url(...)
  html = html.replace(
    /url\(\s*["']?(?!https?:\/\/|\/\/|data:|#)([^)"']+)["']?\s*\)/gi,
    (_match, value) => {
      const cleanValue = value.trim().replace(/^\.\//, "");

      if (cleanValue.startsWith("/")) {
        return `url("${LEGACY_ORIGIN}${cleanValue}")`;
      }

      return `url("${absoluteBase}${cleanValue}")`;
    },
  );

  return html;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const path = Array.isArray(context.params?.path)
    ? context.params.path.join("/")
    : context.params?.path || "";

  const pagePath = `/${path}/`;
  const url = `${LEGACY_ORIGIN}${pagePath}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: context.req.headers.accept || "text/html,*/*",
        "User-Agent": context.req.headers["user-agent"] || "Elite-Dental-Next-Proxy",

        ...(context.req.headers.cookie
          ? {
              Cookie: context.req.headers.cookie,
            }
          : {}),
      },
      redirect: "follow",
    });

    const contentType = response.headers.get("content-type") || "text/html; charset=UTF-8";

    const rawHtml = await response.text();

    const html = rewriteLegacyAssets(rawHtml, pagePath);

    context.res.statusCode = response.status;

    context.res.setHeader("Content-Type", contentType);

    context.res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

    return {
      props: {
        html,
      },
    };
  } catch (error) {
    console.error("Legacy proxy error:", error);

    context.res.statusCode = 502;

    return {
      props: {
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <title>Legacy server unavailable</title>
            </head>
            <body>
              <h1>Legacy server unavailable</h1>
            </body>
          </html>
        `,
      },
    };
  }
};

export default function LegacyPage({
  html,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
