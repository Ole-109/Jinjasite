# 玉置神社 — Website Rebuild Plan

**Goal:** a world-class, atmospheric website for 玉置神社 (Tamaki Jinja, tamakijinja.or.jp) using **all** content from the existing site, built with **Next.js 16 (App Router) + Tailwind CSS 4**. All files UTF-8. Japanese is the primary language; English appears only as elegant eyebrow labels / subtitles.

## Concept — 「神の棲む杜」 (The Forest Where the Gods Dwell)

- Mist-shrouded cedar forest at 1,076 m, ancient shrine, three-thousand-year-old 神代杉.
- Palette: **sumi** (ink-black) & **cedar** greens for dark, immersive bands; **washi** paper tones for reading sections; **gold** (gold-leaf roof ornaments) as the main accent; **shu** vermilion used sparingly.
- Type: Shippori Mincho B1 (headings, `font-mincho`), Zen Kaku Gothic New (body), Cormorant Garamond italic (latin eyebrows, `font-latin`). Vertical writing (`tategaki`) for poetic accents.
- Motion: slow, silk-like. Drifting `<Mist/>`, `<Reveal/>` fade/unblur on scroll, gentle hover. Respect `prefers-reduced-motion` (already global).

## Foundation (done — by the lead)

| Path | Purpose |
|---|---|
| `src/app/globals.css` | Theme tokens (`bg-sumi`, `text-gold`, `bg-washi`, `text-ink-soft`, …), utilities `font-mincho`, `font-latin`, `tategaki`, `washi-texture`, `sumi-texture`, `hairline-gold`, `prose-jinja`, `.reveal` |
| `src/app/layout.tsx` | Fonts, metadata template (`%s｜玉置神社`), Header, Footer |
| `src/components/layout/Header.tsx`, `Footer.tsx` | Fixed transparent→solid header, full-screen menu, footer |
| `src/components/ui/*` | `Reveal`, `Mist`, `Emblem`, `Shide` (divider), `SectionTitle`, `PageHero`, `ButtonLink`, `Container` |
| `src/data/site.ts` | Name, address, tel/fax, map embed, YouTube videos, `nav` |
| `public/images/*` | Optimised shrine photos (see list below) |

Images: `honsha.jpg` (hero, misty main hall + torii, 2400w), `dainichido.jpg`, `wakamiya-jinmu.jpg`, `izumo-kyokai.jpg` (2400w), `video-short.jpg`, `video-long.jpg` (1280w), small legacy photos `emado.jpg`, `fusuma-1.jpg`, `fusuma-2.jpg`, `kaguraden.jpg`, `mikoshi.jpg`, `shamusho.jpg`, `oosugi.jpg` (≈300px — only use small, e.g. framed thumbnails), `road/detour-168-425.png`, `road/closure-sarukai.png`, `kouhoushi/issue-01..13.jpg` (newsletter covers).

Source content: `/tmp/claude-0/-home-user-Jinjasite/de38dea6-414a-5e44-8128-44af3ea84d96/scratchpad/source-pages.json` (URL → {title, text, assets}); raw HTML in `.../scratchpad/raw/pages/`.

## Phase 1 — Typed content layer (`src/data/`)

Transcribe the source text **faithfully** (no invented facts) into typed TS modules:

- `about.ts` — 神社概要 text + history timeline (BC37 創立/崇神天皇, 神武天皇御東征伝承, 平安 神仏混淆・玉置三所権現・熊野三山の奥院, 1163 梵鐘銘, 1794 本殿再建 (寛政6), 1804 社務所建立 (文化元), 江戸 別当寺高牟婁院, 1868 慶応四 神仏分離, 1887 出雲大社玉置教会, 1959 杉の巨樹群 県天然記念物 / 梵鐘 重文, 1988 社務所・台所 重文, 1992 大日堂再建, 2004 世界遺産登録).
- `deities.ts` — 御祭神 per shrine (本社/三柱神社/若宮社/神武社/玉石社) with kana readings + short roles from the 境内 text.
- `precincts.ts` — every 境内 entry (本社, 三柱神社, 若宮社/神武社, 社務所, 出雲大社玉置教会, 大日堂社, 神楽殿, 絵馬堂, 御神輿殿, 彩色戸襖, 和泉式部参詣記念, 梵鐘, 杉の巨樹群) with paragraphs, image, notes (e.g. 改修中).
- `festivals.ts` — annual 祭事 (month, day or rule e.g. 「3月初の午の日」, 春分/秋分), monthly 月次祭, daily 日供祭; flag major ones (例祭 10/24, 初午祭, 大祓, 歳旦祭).
- `news.ts` — every post (slug, title, date ISO, category: お知らせ/祭事/道路/広報紙, body paragraphs, bus timetables as structured tables, attached PDF links to original URLs).
- `road.ts` — road reports (date, title, body, optional image).
- `access.ts` — car routes, bus/taxi, 世界遺産予約バス details.
- `kouhoushi.ts` — 13 newsletter issues (no., date, cover image, original PDF URL).
- `visit.ts` — 正式参拝, ペット連れ, 令和の大改修, 参拝作法 (general etiquette may be written as clearly-generic guidance), 崇敬会 benefits, 世界遺産 text.

## Phase 2 — Pages (`src/app/<route>/page.tsx`)

Each page: `export const metadata`, `<PageHero>` with crumbs, sections alternating `washi-texture` and `sumi-texture`, `<SectionTitle>`, `<Reveal>`.

| Route | Highlights |
|---|---|
| `/` | Full-screen hero (honsha.jpg, slow Ken-Burns zoom, Mist, vertical 「玉置神社」 + 「神の棲む杜」, scroll cue); poetic intro with key numbers (標高1,076m / 創建 紀元前37年 / 樹齢3000年 / 世界遺産2004); 御祭神 preview; 境内 highlights mosaic; 次の祭事 (client-side upcoming-festival countdown); video section (YouTube click-to-load facade); 世界遺産 band; latest news; road-info notice; access CTA |
| `/about` | Overview + vertical timeline |
| `/deities` | Elegant deity cards grouped by shrine |
| `/precincts` | Alternating editorial blocks per building, sticky in-page index |
| `/festivals` | Year-wheel / month grid, monthly & daily rites, upcoming highlight |
| `/visit` | 正式参拝, 参拝作法, ペット, 令和の大改修, 崇敬会 link |
| `/heritage` | 大峯奥駈道, 75 靡 visual (玉置山 = 10th), 世界遺産 info |
| `/sukeikai` | Purpose + benefits |
| `/access` | Map embed, route cards, bus booking table, taxi |
| `/road` | Latest road reports, closure maps |
| `/news`, `/news/[slug]` | Filterable list + article pages (`generateStaticParams`) |
| `/kouhoushi` | Cover gallery linking to PDFs |
| `not-found.tsx`, `sitemap.ts`, `robots.ts`, `icon.svg`, `opengraph-image` | polish |

## Phase 3 — Review (lead)

`npm run build` + `npm run lint` clean, Playwright screenshots desktop/mobile for every route, no horizontal overflow, no console errors, a11y (alt text, landmarks, contrast), content accuracy vs source.

## Engineering rules

- Next 16: `params` is a Promise (`const { slug } = await params`). `cacheComponents` is **off**; site is fully static.
- Never compute "today" in a Server Component (would freeze at build time). Anything date-relative → small `"use client"` component.
- Use `next/image` for local images; `<Image fill>` needs a sized `relative` parent and `sizes`.
- Tailwind 4 tokens only (no hard-coded hex in classNames). Reuse foundation components; don't edit them without telling the lead.
- Workers run `npx tsc --noEmit` and `npx eslint <files>` only. **Only the controller runs `npm run build`** (concurrent builds clash).
- All files UTF-8; keep Japanese text exact (full-width punctuation as in source).
