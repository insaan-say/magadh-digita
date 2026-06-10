export type AnalyticsEvent = {
  id: string;
  created_at: string;
  session_id: string;
  event_name: string;
  path: string | null;
  source: string | null;
  device_type: string | null;
  city: string | null;
  duration_seconds: number | null;
};
