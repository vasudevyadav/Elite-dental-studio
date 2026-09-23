import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ siteKey: siteKey || null });
}
