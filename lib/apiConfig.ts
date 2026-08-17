export function getEdsApiBaseUrl(): string {
  const apiBaseUrl = process.env.EDS_API_BASE_URL;
  if (!apiBaseUrl) throw new Error("EDS_API_BASE_URL is not configured.");
  return apiBaseUrl.replace(/\/$/, "");
}
