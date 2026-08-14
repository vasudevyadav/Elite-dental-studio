import type { NextApiRequest, NextApiResponse } from "next";
import { getContent, type ClinicRef } from "@/lib/contentApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, message: "Method not allowed" });
  try {
    const data = await getContent<{ items: ClinicRef[] }>("locations");
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json({ success: true, data });
  } catch {
    return res.status(502).json({ success: false, message: "Locations API unavailable" });
  }
}
