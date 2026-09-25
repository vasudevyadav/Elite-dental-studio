import type { NextApiRequest, NextApiResponse } from "next";
import { getDoctorsPage } from "@/lib/contentApi";

function firstQueryValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, message: "Method not allowed" });
  try {
    const page = Number(firstQueryValue(req.query.page)) || undefined;
    const limit = Number(firstQueryValue(req.query.limit)) || undefined;
    const clinic = firstQueryValue(req.query.clinic);
    const search = firstQueryValue(req.query.search);

    const data = await getDoctorsPage({ page, limit, clinic, search });
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json({ success: true, data });
  } catch {
    return res.status(502).json({ success: false, message: "Doctors API unavailable" });
  }
}
