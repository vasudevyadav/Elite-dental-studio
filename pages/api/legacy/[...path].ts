import type { NextApiRequest, NextApiResponse } from "next";

const LEGACY_ORIGIN = "https://legacy.elitedentalstudio.co.in";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const path = Array.isArray(req.query.path) ? req.query.path.join("/") : req.query.path || "";

    const url = `${LEGACY_ORIGIN}/${path}`;

    const response = await fetch(url, {
      method: req.method,
      headers: {
        Accept: req.headers.accept || "*/*",
        "User-Agent": req.headers["user-agent"] || "Next.js Legacy Proxy",
        ...(req.headers.cookie ? { Cookie: req.headers.cookie } : {}),
      },
      redirect: "manual",
    });

    const body = await response.arrayBuffer();

    const contentType = response.headers.get("content-type");

    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }

    const cacheControl = response.headers.get("cache-control");

    if (cacheControl) {
      res.setHeader("Cache-Control", cacheControl);
    }

    res.status(response.status).send(Buffer.from(body));
  } catch (error) {
    console.error("Legacy proxy error:", error);

    res.status(502).json({
      error: "Legacy server unavailable",
    });
  }
}
