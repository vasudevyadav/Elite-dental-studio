const DEFAULT_UPSTREAM_TIMEOUT_MS = 10_000;

const inFlightRequests = new Map<string, Promise<unknown>>();

export async function fetchWithTimeout(
  input: string | URL,
  init: RequestInit = {},
  timeoutMs = DEFAULT_UPSTREAM_TIMEOUT_MS,
): Promise<Response> {
  const timeoutSignal = AbortSignal.timeout(timeoutMs);
  const signal = init.signal ? AbortSignal.any([init.signal, timeoutSignal]) : timeoutSignal;

  return fetch(input, { ...init, signal });
}

export function dedupeInFlight<T>(key: string, request: () => Promise<T>): Promise<T> {
  const existing = inFlightRequests.get(key) as Promise<T> | undefined;
  if (existing) return existing;

  const pending = request().finally(() => {
    if (inFlightRequests.get(key) === pending) inFlightRequests.delete(key);
  });
  inFlightRequests.set(key, pending);
  return pending;
}
