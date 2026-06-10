"use client";

import { useEffect } from "react";

function getSessionId() {
  const key = "magadh_session_id";
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;

  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  window.localStorage.setItem(key, id);
  return id;
}

function postAnalytics(payload: Record<string, unknown>, beacon = false) {
  const body = JSON.stringify(payload);

  if (beacon && navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/analytics/track",
      new Blob([body], { type: "application/json" })
    );
    return;
  }

  fetch("/api/analytics/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true
  }).catch(() => undefined);
}

export function useAnalyticsTracking() {
  useEffect(() => {
    const sessionId = getSessionId();
    const startedAt = Date.now();
    const base = {
      sessionId,
      path: window.location.pathname,
      source: document.referrer || "direct"
    };

    postAnalytics({ ...base, eventName: "page_view", durationSeconds: 0 });

    const heartbeat = window.setInterval(() => {
      postAnalytics({
        ...base,
        eventName: "heartbeat",
        durationSeconds: Math.round((Date.now() - startedAt) / 1000)
      });
    }, 30_000);

    const exit = () => {
      postAnalytics(
        {
          ...base,
          eventName: "page_exit",
          durationSeconds: Math.round((Date.now() - startedAt) / 1000)
        },
        true
      );
    };

    window.addEventListener("pagehide", exit);

    return () => {
      window.clearInterval(heartbeat);
      window.removeEventListener("pagehide", exit);
    };
  }, []);
}
