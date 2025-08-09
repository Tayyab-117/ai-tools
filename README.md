# FreeAIHub — Scalable, Vercel-ready AI Tools Hub

Zero-API, client-side tools. Add new tools fast with the registry pattern.

## Quick start
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Deploy (no GitHub needed)
```bash
npm i -g vercel
vercel
vercel --prod
```

## Add a new tool
1. Create `tools-impl/MyNewTool.tsx` (client component).
2. Register in `lib/registry.tsx` using dynamic import.
