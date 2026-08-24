import type { NextApiRequest, NextApiResponse } from "next";
import { getEdsApiBaseUrl } from "@/lib/apiConfig";

const MAX_BODY_SIZE = 9 * 1024 * 1024;

async function verifyTurnstile(token: unknown, remoteIp?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;

  const formData = new URLSearchParams({ secret, response: token });
  if (remoteIp) formData.set("remoteip", remoteIp);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData,
  });
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

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
    const contentType = req.headers["content-type"] || "application/json";
    let forwardedBody: BodyInit = new Uint8Array(body) as unknown as BodyInit;
    if (contentType.includes("application/json")) {
      const data = JSON.parse(body.toString()) as { captchaToken?: string };
      const verified = await verifyTurnstile(data.captchaToken, req.socket.remoteAddress);
      if (!verified) {
        return res.status(400).json({ success: false, message: "Please complete the CAPTCHA." });
      }
      delete data.captchaToken;
      const consultation = data;
      forwardedBody = JSON.stringify(consultation);
    }
    const response = await fetch(`${getEdsApiBaseUrl()}/consultation`, {
      method: "POST",
      headers: {
        "Content-Type": contentType,
      },
      body: forwardedBody,
    });
    const payload = await response.text();
    res.status(response.status);
    res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
    return res.send(payload);
  } catch (error) {
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      return res
        .status(413)
        .json({ success: false, message: "Attachment must be smaller than 8 MB." });
    }
    console.error("Unable to submit consultation request.", error);
    return res
      .status(502)
      .json({ success: false, message: "Consultation service is unavailable." });
  }
}
