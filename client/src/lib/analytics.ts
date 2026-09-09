/**
 * FEC Playbook™ conversion analytics
 * Design reminder: track a small set of clear visitor intentions without changing the consent model.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
}
