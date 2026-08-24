export async function verifyRecaptcha(token: unknown, remoteIp?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;

  const formData = new URLSearchParams({ secret, response: token });
  if (remoteIp) formData.set("remoteip", remoteIp);
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData,
  });
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function readCaptchaToken(body: Buffer, contentType: string) {
  if (contentType.includes("application/json")) {
    return (JSON.parse(body.toString()) as { captchaToken?: unknown }).captchaToken;
  }
  if (contentType.includes("multipart/form-data")) {
    const request = new Request("http://localhost", {
      method: "POST",
      headers: { "Content-Type": contentType },
      body: new Uint8Array(body) as unknown as BodyInit,
    });
    return (await request.formData()).get("captchaToken");
  }
  return undefined;
}
