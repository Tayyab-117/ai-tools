# FreeAIHub v5

- 22 privacy‑first tools (text, data, images, utilities).
- Consistent light UI, header/footer everywhere.
- Per‑tool SEO content + JSON‑LD (SoftwareApplication + FAQ).
- Detailed Privacy (GDPR‑friendly) & Terms.
- Cookie banner for consent (minimal) — stored in localStorage.
- Contact form via `NEXT_PUBLIC_FORM_ENDPOINT` or mailto fallback.
- Sitemap at `/sitemap.xml` via app router (`app/sitemap.ts`).

## Deploy
1. Upload to GitHub → Vercel auto‑build (Next.js 14).
2. (Optional) set env vars: `NEXT_PUBLIC_FORM_ENDPOINT`, `NEXT_PUBLIC_DONATION_URL`.

## Add a tool
Create `tools/my-tool.tsx`, then add a dynamic import + entry in `lib/registry.tsx`.
