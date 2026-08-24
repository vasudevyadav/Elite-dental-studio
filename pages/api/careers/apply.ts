import type { NextApiRequest, NextApiResponse } from "next";
import { getEdsApiBaseUrl } from "@/lib/apiConfig";
import { readCaptchaToken, verifyRecaptcha } from "@/lib/recaptchaServer";

const MAX_BODY_SIZE = 6 * 1024 * 1024;

export const config = {
  api: {
    bodyParser: false,
    responseLimit: "1mb",
  },
};

async function readBody(req: NextApiRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  let size = 0;

  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BODY_SIZE) throw new Error("PAYLOAD_TOO_LARGE");
    chunks.push(buffer);
  }

  return Buffer.concat(chunks);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = await readBody(req);
    const contentType = req.headers["content-type"] || "multipart/form-data";
    const verified = await verifyRecaptcha(
      await readCaptchaToken(body, contentType),
      req.socket.remoteAddress,
    );
    if (!verified) {
      return res.status(400).json({ success: false, message: "Please complete the CAPTCHA." });
    }
    const response = await fetch(`${getEdsApiBaseUrl()}/careers/apply`, {
      method: "POST",
      headers: {
        "Content-Type": contentType,
      },
      body: new Uint8Array(body),
    });
    const payload = await response.text();
    res.status(response.status);
    res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
    return res.send(payload);
  } catch (error) {
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      return res.status(413).json({ success: false, message: "Résumé must be smaller than 5 MB." });
    }
    console.error("Unable to submit career application.", error);
    return res.status(502).json({ success: false, message: "Application service is unavailable." });
  }
}
