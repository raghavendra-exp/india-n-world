// Simple typed localStorage wrapper. Everything the app persists
// (bookmarks, notes, quiz/mains progress) lives entirely in the
// browser — no backend, no account system, matching the
// "no runtime server" requirement.

const PREFIX = "upsc-hub:";

export function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function saveJSON<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.error("localStorage save failed", e);
  }
}

export function exportAllData(): string {
  const out: Record<string, unknown> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(PREFIX)) {
      try {
        out[k.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(k) || "null");
      } catch {
        /* skip */
      }
    }
  }
  return JSON.stringify(out, null, 2);
}
