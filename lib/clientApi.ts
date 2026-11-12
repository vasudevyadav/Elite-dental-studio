const sharedRequests = new Map<string, Promise<unknown>>();

export function getSharedApiJson<T>(url: string): Promise<T | null> {
  const existing = sharedRequests.get(url) as Promise<T | null> | undefined;
  if (existing) return existing;

  const pending = fetch(url)
    .then(async (response) => {
      if (response.ok) return (await response.json()) as T;
      sharedRequests.delete(url);
      return null;
    })
    .catch((error) => {
      sharedRequests.delete(url);
      throw error;
    });

  sharedRequests.set(url, pending);
  return pending;
}
