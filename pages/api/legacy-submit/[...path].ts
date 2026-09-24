import type { NextApiRequest, NextApiResponse } from "next";
import https from "node:https";

const LEGACY_HOST = "legacy.elitedentalstudio.co.in";
const LEGACY_IP = "147.93.25.6";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const parts = Array.isArray(req.query.path)
    ? req.query.path
    : req.query.path
      ? [req.query.path]
      : [];

  if (!parts.length) {
    return res.status(400).send("Missing legacy path");
  }

  const legacyPath = "/" + parts.join("/");

  const headers: Record<string, string | string[]> = {
    Host: LEGACY_HOST,
    Accept: req.headers.accept || "*/*",
    "User-Agent":
      req.headers["user-agent"] || "Elite-Dental-Next-Proxy",
  };

  if (req.headers["content-type"]) {
    headers["Content-Type"] = req.headers["content-type"];
  }

  if (req.headers["content-length"]) {
    headers["Content-Length"] = req.headers["content-length"];
  }

  if (req.headers.cookie) {
    headers.Cookie = req.headers.cookie;
  }

  if (req.headers["x-requested-with"]) {
    headers["X-Requested-With"] = req.headers["x-requested-with"];
  }

  const proxyReq = https.request(
    {
      hostname: LEGACY_HOST,
      port: 443,
      path: legacyPath,
      method: req.method || "GET",
      servername: LEGACY_HOST,

      lookup: (_hostname, options, callback) => {
        if (typeof options === "object" && options?.all) {
          callback(null, [
            {
              address: LEGACY_IP,
              family: 4,
            },
          ]);
          return;
        }

        callback(null, LEGACY_IP, 4);
      },

      headers,
    },

    (proxyRes) => {
      res.statusCode = proxyRes.statusCode || 200;

      if (proxyRes.headers["content-type"]) {
        res.setHeader(
          "Content-Type",
          proxyRes.headers["content-type"],
        );
      }

      if (proxyRes.headers["set-cookie"]) {
        res.setHeader(
          "Set-Cookie",
          proxyRes.headers["set-cookie"],
        );
      }

      if (proxyRes.headers.location) {
        res.setHeader(
          "Location",
          proxyRes.headers.location,
        );
      }

      res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate",
      );

      proxyRes.pipe(res);
    },
  );

  proxyReq.setTimeout(15000, () => {
    proxyReq.destroy(
      new Error("Legacy PHP request timed out"),
    );
  });

  proxyReq.on("error", (error) => {
    console.error("Legacy POST proxy error:", error);

    if (!res.headersSent) {
      res.status(502).json({
        success: false,
        message: "Legacy PHP server unavailable",
      });
    } else {
      res.end();
    }
  });

  req.pipe(proxyReq);
}
