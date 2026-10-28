// Simple in-memory limits. On Netlify each serverless instance has its own
// memory and instances get recycled, so this is best-effort, not exact.
// It still stops one visitor (or a script) from burning the free quota.

const MINUTE = 60_000;
const DAY = 24 * 60 * MINUTE;

export const PER_IP_PER_MINUTE = 10;
export const PER_IP_PER_DAY = 50;
// Stays under the provider's free daily cap (check AI Studio for the current number)
export const GLOBAL_PER_DAY = 900;

const hits = new Map<string, number[]>();
let globalDay = { start: 0, count: 0 };

export function checkRateLimit(ip: string, now = Date.now()): { ok: true } | { ok: false; reason: string } {
  if (now - globalDay.start > DAY) globalDay = { start: now, count: 0 };
  if (globalDay.count >= GLOBAL_PER_DAY) return { ok: false, reason: "daily" };

  // Keep only this visitor's requests from the last 24 hours
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < DAY);
  if (recent.length >= PER_IP_PER_DAY) return { ok: false, reason: "daily" };
  if (recent.filter((t) => now - t < MINUTE).length >= PER_IP_PER_MINUTE) return { ok: false, reason: "minute" };

  recent.push(now);
  hits.set(ip, recent);
  globalDay.count++;
  return { ok: true };
}

/** For tests only */
export function resetRateLimit() {
  hits.clear();
  globalDay = { start: 0, count: 0 };
}
