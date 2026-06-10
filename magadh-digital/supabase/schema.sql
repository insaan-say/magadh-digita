create extension if not exists pgcrypto;

create table if not exists analytics_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text not null,
  event_name text not null,
  path text,
  source text,
  device_type text,
  city text,
  country text,
  duration_seconds integer,
  user_agent text
);

create index if not exists analytics_events_created_at_idx on analytics_events(created_at desc);
create index if not exists analytics_events_session_idx on analytics_events(session_id);

alter table analytics_events enable row level security;

-- Contact form submissions are not stored in any database.
-- Server analytics routes use the service role key, so no public policies are required.
