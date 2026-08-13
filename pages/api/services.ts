import type { NextApiRequest, NextApiResponse } from "next";
import { getServicesStrict, type ServiceListItem } from "@/lib/servicesApi";

type Response =
  { success: true; data: { items: ServiceListItem[] } } | { success: false; message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const items = await getServicesStrict();
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json({ success: true, data: { items } });
  } catch (error) {
    console.error("Unable to load services for navigation.", error);
    return res.status(502).json({ success: false, message: "Services API is unavailable" });
  }
}
