import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import https from "node:https";
import type { IncomingHttpHeaders } from "node:http";

const LEGACY_HOST = "legacy.elitedentalstudio.co.in";
const LEGACY_IP = "147.93.25.6";
const LEGACY_ORIGIN = `https://${LEGACY_HOST}`;

function rewriteLegacyAssets(html: string, pagePath: string) {
  const basePath = pagePath.endsWith("/") ? pagePath : `${pagePath}/`;
  const absoluteBase = `${LEGACY_ORIGIN}${basePath}`;

  // Relative src/href
  html = html.replace(
    /(src|href)=["'](?!https?:\/\/|\/\/|#|data:|mailto:|tel:|javascript:|\/)([^"']+)["']/gi,
    (_match, attr, value) => {
      const cleanValue = value.replace(/^\.\//, "");
      return `${attr}="${absoluteBase}${cleanValue}"`;
    },
  );

  // Root-relative src/href
  html = html.replace(
    /(src|href)=["'](\/(?!\/)[^"']*)["']/gi,
    (_match, attr, value) => {
      return `${attr}="${LEGACY_ORIGIN}${value}"`;
    },
  );

  // srcset
  html = html.replace(
    /(\bsrcset)=["']([^"']+)["']/gi,
    (_match, attr, value) => {
      const rewritten = value
        .split(",")
        .map((item: string) => {
          const parts = item.trim().split(/\s+/);
          const src = parts[0];

          if (
            src.startsWith("http://") ||
            src.startsWith("https://") ||
            src.startsWith("//") ||
            src.startsWith("data:")
          ) {
            return item.trim();
          }

          if (src.startsWith("/")) {
            parts[0] = `${LEGACY_ORIGIN}${src}`;
          } else {
            parts[0] = `${absoluteBase}${src.replace(/^\.\//, "")}`;
          }

          return parts.join(" ");
        })
        .join(", ");

      return `${attr}="${rewritten}"`;
    },
  );

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

function fetchLegacy(
  path: string,
  requestHeaders: IncomingHttpHeaders,
): Promise<{
  statusCode: number;
  contentType: string;
  html: string;
  setCookie?: string[];
}> {
  return new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: LEGACY_HOST,
        port: 443,
        path,
        method: "GET",

        // Keep legacy hostname for TLS/SNI, but bypass DNS and connect
        // directly to the Hostinger server IP.
        servername: LEGACY_HOST,
        lookup: (_hostname, _options, callback) => {
          callback(null, LEGACY_IP, 4);
        },

        headers: {
          Host: LEGACY_HOST,
          Accept: requestHeaders.accept || "text/html,*/*",
          "User-Agent":
            requestHeaders["user-agent"] || "Elite-Dental-Next-Proxy",
          ...(requestHeaders.cookie
            ? { Cookie: requestHeaders.cookie }
            : {}),
        },
      },
      (response) => {
        const chunks: Buffer[] = [];

        response.on("data", (chunk) => {
          chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        });

        response.on("end", () => {
          const setCookie = response.headers["set-cookie"];

          resolve({
            statusCode: response.statusCode || 200,
            contentType:
              response.headers["content-type"] ||
              "text/html; charset=UTF-8",
            html: Buffer.concat(chunks).toString("utf8"),
            setCookie,
          });
        });
      },
    );

    request.setTimeout(12000, () => {
      request.destroy(new Error("Legacy backend request timed out"));
    });

    request.on("error", reject);
    request.end();
  });
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const path = Array.isArray(context.params?.path)
    ? context.params.path.join("/")
    : context.params?.path || "";

  const pagePath = `/${path}/`;

  try {
    const response = await fetchLegacy(pagePath, context.req.headers);

    const html = rewriteLegacyAssets(response.html, pagePath);

    context.res.statusCode = response.statusCode;
    context.res.setHeader("Content-Type", response.contentType);
    context.res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate",
    );

    if (response.setCookie?.length) {
      context.res.setHeader("Set-Cookie", response.setCookie);
    }

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
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
