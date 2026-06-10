# Magadh Digital

Premium dark agency website built with Next.js 15, TypeScript, Tailwind CSS and Nodemailer.

The frontend is intentionally lightweight: no WebGL, no heavy splash screen, no smooth-scroll engine and no cursor animation, so it stays smooth on mobile and older PCs.

## Run locally

```powershell
npm install
npm run dev
```

Open `://localhost:3000`.

## Production checks

```powershell
npm run linthttp
npm run build
```

## Contact Email Setup

The contact form sends email only. It does not save inquiries, phone numbers, emails, budgets or messages in any database.

1. Copy `.env.example` to `.env.local`.
2. Add SMTP values for Nodemailer.
3. For Gmail, create a Google App Password and use it as `SMTP_PASS`.
4. Add the same SMTP variables in Vercel Project Settings > Environment Variables.

The contact form posts to `/api/contact` and sends a notification email to `magadhdigitalsolutions@gmail.com`.

## Hidden dashboard

Route: `/magadh-admin`

Use the password from `MAGADH_ADMIN_PASSWORD`. The dashboard shows visitor analytics only. Contact form submissions are not stored.

## Analytics

Optional analytics:
 - Internal Supabase analytics via `/api/analytics/track`
 - Optional Google Analytics through `NEXT_PUBLIC_GA_ID`
 - Optional Microsoft Clarity through `NEXT_PUBLIC_CLARITY_ID`

For Supabase analytics, create a free Supabase project and run `supabase/schema.sql`. This schema creates only `analytics_events`; it does not create inquiry or email-log tables.

## Editing content

Most editable content lives in:

 - `lib/data.ts`
 - `constants/services.ts`
 - `constants/contact.ts`
 - `sections/*`

Hero visual/content lives in:

 - `components/hero/hero-service-reel.tsx`
 - `components/hero/rotating-services.tsx`

Contact/backend logic lives in:

 - `components/contact/contact-form.tsx`
 - `app/api/contact/route.ts`
 - `lib/server/*`
