# 玉置神社 — Tamaki Jinja website

A rebuild of [tamakijinja.or.jp](https://tamakijinja.or.jp) in Next.js 16 (App Router) and Tailwind CSS 4. The concept is 「神の棲む杜」 (the forest where the gods dwell).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # fully static output (32 routes)
npm run lint
```

- Content lives in `src/data/*.ts` and is transcribed from the original site.
- Updating news means editing `src/data/news.ts`; road reports are in `src/data/road.ts`.
- Photos are in `public/images/`.
- The design plan and conventions are in `PLAN.md`.
