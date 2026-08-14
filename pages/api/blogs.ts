import type { NextApiRequest, NextApiResponse } from "next";
import { getBlogs } from "@/lib/blogsApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const items = await getBlogs();
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json({ success: true, data: { items } });
  } catch {
    return res.status(502).json({ success: false, message: "Blogs API unavailable" });
  }
}
