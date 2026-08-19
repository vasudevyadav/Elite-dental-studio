/**
 * Auto-inserts "/" as the user types digits, producing DD/MM/YYYY
 * incrementally (e.g. "12" -> "12", "123" -> "12/3", "12345" -> "12/34/5").
 */
export function formatDateInput(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  const day = digits.slice(0, 2);
  const month = digits.slice(2, 4);
  const year = digits.slice(4, 8);
  return [day, month, year].filter(Boolean).join("/");
}
