import type { NextApiRequest, NextApiResponse } from "next";
import { getEdsApiBaseUrl } from "@/lib/apiConfig";
import { readCaptchaToken, verifyRecaptcha } from "@/lib/recaptchaServer";

const MAX_BODY_SIZE = 9 * 1024 * 1024;
const legacyGoogleSheetsWebhook =
  "https://script.google.com/macros/s/AKfycbx9FdZpKEpunXlDOEoYMC-scY0oUit24n0VfbL7A3guiB0AA18simXUc4veA_hYt355yg/exec";

type Consultation = Record<string, unknown> & {
  captchaToken?: string;
  phone?: string;
  name?: string;
    email?: string;
    clinicSlug?: string;
    source?: string;
    url?: string;
    message?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    gclid?: string;
};

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

async function triggerClickToCall(phone: unknown) {
  const token = process.env.DEEPCALL_TOKEN;
  const userId = process.env.DEEPCALL_USER_ID;
  const customerCli = process.env.DEEPCALL_CUSTOMER_CLI;
  const agentNumber = process.env.DEEPCALL_AGENT_NUMBER;
  const agentCli = process.env.DEEPCALL_AGENT_CLI;
  const customer = String(phone || "").replace(/\D/g, "");

  if (!token || !userId || !customerCli || !agentNumber || !agentCli || customer.length < 10) {
    return;
  }

  const query = new URLSearchParams({
    user_id: userId,
    token,
    callFirst: "agent",
    customer,
    customerCLI: customerCli,
    agentType: "agent_number",
    agent_number: agentNumber,
    agentCLI: agentCli,
  });
  await fetch(`https://v4-api.deepcall.com/api/v3/clickToCall/para?${query}`, {
    method: "POST",
    headers: { "cache-control": "no-cache" },
  });
}

async function forwardLeadToGoogleSheets(consultation: Consultation) {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || legacyGoogleSheetsWebhook;
  const lead = new URLSearchParams({
    datetime: new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date()),
    name: String(consultation.name || ""),
    phone: String(consultation.phone || ""),
    email: String(consultation.email || ""),
    location: String(consultation.clinicSlug || ""),
    url: String(consultation.url || consultation.source || ""),
    utm_source: String(consultation.utm_source || ""),
    utm_medium: String(consultation.utm_medium || ""),
    utm_campaign: String(consultation.utm_campaign || ""),
    utm_term: String(consultation.utm_term || ""),
    utm_content: String(consultation.utm_content || ""),
    gclid: String(consultation.gclid || ""),
    message: String(consultation.message || ""),
  });
  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: lead,
  });
}

function escapeHtml(value: unknown) {
  return String(value || "").replace(/[&<>'"]/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return replacements[character];
  });
}

async function sendLeadNotification(consultation: Consultation) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_EMAIL_FROM;
  const recipients = process.env.LEAD_NOTIFICATION_EMAILS?.split(",").map((email) => email.trim());
  if (!apiKey || !from || !recipients?.length) return;

  const fields = [
    ["Name", consultation.name],
    ["Phone", consultation.phone],
    ["Email", consultation.email],
    ["Clinic", consultation.clinicSlug],
    ["Source", consultation.source],
    ["Message", consultation.message],
  ];
  const html = `<h2>New appointment request</h2><table>${fields
    .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
    .join("")}</table>`;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: String(consultation.email || ""),
      subject: "New Elite Dental Studio appointment request",
      html,
    }),
  });
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
    const captchaToken = await readCaptchaToken(body, contentType);
    const verified = await verifyRecaptcha(captchaToken, req.socket.remoteAddress);
    if (!verified) {
      return res.status(400).json({ success: false, message: "Please complete the CAPTCHA." });
    }
    let consultation: Consultation | undefined;
    if (contentType.includes("application/json")) {
      const data = JSON.parse(body.toString()) as Consultation;
      delete data.captchaToken;
      consultation = data;
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
    if (response.ok && consultation) {
      const notifications = [forwardLeadToGoogleSheets(consultation)];
      if (consultation.phone) notifications.push(triggerClickToCall(consultation.phone));
      notifications.push(sendLeadNotification(consultation));
      const results = await Promise.allSettled(notifications);
      results.forEach((result) => {
        if (result.status === "rejected") console.error("Unable to deliver lead notification.", result.reason);
      });
    }
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
