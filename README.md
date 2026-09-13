# UPSC Knowledge Hub — Schemes & International Relations

A static, front-end-only React + TypeScript app for UPSC/UPPSC prep:
government schemes, India's bilateral/multilateral relations, foreign-policy
doctrines, a dated Current Affairs module bridging news to the static
syllabus, a Prelims MCQ lab, a Mains answer-writing lab with rule-based
feedback, spaced-repetition-style revision flashcards, and local
bookmarks/notes. No backend, no API keys, no database — everything runs
and persists (via the browser's `localStorage`) entirely client-side, so
it deploys as static files on GitHub Pages.

## Quick start (local development)

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Hot-reload is on by default.

## Build

```bash
npm run build      # outputs static files to ./dist
npm run preview    # serve the production build locally to sanity-check it
```

## Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages automatically on every push to `main`.

One-time setup after you push this repo to GitHub:

1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No further configuration is needed — `vite.config.ts` uses `base: "./"`
(relative asset paths) and the app uses a `HashRouter`, so it works at
any repository name or path depth without edits, and page refreshes /
deep links never 404 (a common GitHub Pages gotcha with client-side
routers).

### Manual deploy (alternative)

If you'd rather not use GitHub Actions:

```bash
npm run build
npx gh-pages -d dist
```

(`npx gh-pages` will need to be run once with `npm install -D gh-pages`
first, or use any static-file deploy method you prefer — the `dist/`
folder is 100% static HTML/CSS/JS.)

## Project structure

```
src/
  data/            # all content lives here as typed TS arrays
    types.ts       # shared interfaces (Scheme, Country, Organisation, Doctrine, CurrentAffair, MCQ, MainsQuestion)
    sources.ts     # official-source registry + "last verified" string
    schemes.ts
    countries.ts
    organisations.ts
    doctrines.ts
    currentAffairs.ts
    mcqs.ts
    mains.ts
  lib/
    storage.ts     # localStorage read/write + JSON export helper
    hooks.ts       # useBookmarks / useNotes / useProgress
  components/
    ui.tsx         # shared presentational atoms (Pill, Stamp, StarRating, etc.)
  pages/           # one file per route
  App.tsx          # layout, sidebar nav, search, routes
  main.tsx         # HashRouter + mount
```

## Extending the content

This ships with a hand-verified dataset — **25 schemes, 21 countries, 14
international organisations, 8 foreign-policy doctrines, 10 dated Current
Affairs entries, 33 MCQs and 13 Mains questions** — researched against
official/primary sources as of September 2026, rather than thousands of
auto-generated records. Coverage spans every UPSC/UPPSC-relevant scheme
sector (agriculture, rural/urban development, health, education, women &
child, social justice, tribal welfare, financial inclusion, MSME,
infrastructure, energy, environment, science & tech, defence, skilling)
and every IR layer (bilateral neighbourhood + major powers + extended
neighbourhood, regional groupings, UN-system multilateral bodies, foreign
policy doctrines, and 2025-26 current affairs — the India-US tariff
dispute and its Feb 2026 resolution, the China reset via Tianjin, BRICS'
2026 expansion to 11 members, the G20 handover to the US, Operation
Sindoor, the stalled QUAD summit, and more). To add more:

1. **Add a scheme** — append an object to `src/data/schemes.ts` matching
   the `Scheme` interface in `src/data/types.ts`. Add the source you used
   to `src/data/sources.ts` if it's not already there.
2. **Add a country** — same pattern in `src/data/countries.ts`.
3. **Add an organisation** — same pattern in `src/data/organisations.ts`.
   Set `membershipUncertain: true` if membership has changed recently, to
   surface the verification banner on that page.
4. **Add a doctrine** — foreign-policy concepts/vision documents (Panchsheel,
   Neighbourhood First, MAHASAGAR, etc.) go in `src/data/doctrines.ts`
   matching the `Doctrine` interface.
5. **Add a Current Affairs entry** — dated developments that bridge to the
   static syllabus go in `src/data/currentAffairs.ts` matching the
   `CurrentAffair` interface (background / what changed / why India cares
   / static links). This is the module to keep freshest — see below.
6. **Add an MCQ** — append to `src/data/mcqs.ts`. `answer` is the
   zero-based index into `options`.
7. **Add a Mains question** — append to `src/data/mains.ts`. `keywords`
   drives the rule-based content-coverage score in the Mains Lab.

There is no build step or CMS — TypeScript will flag any missing field
via `npm run build` (`tsc -b`) before you deploy.

## Source policy

Every scheme/country/organisation card links to one official source via
`sourceKey` (resolved in `src/data/sources.ts`). Time-sensitive facts
(membership rosters, budget figures) are flagged rather than hard-coded
as permanent — see `LAST_VERIFIED` in `src/data/sources.ts` and the
`membershipUncertain` flag on organisations. Update `LAST_VERIFIED`
whenever you refresh the dataset.

## What this is / isn't

This is a functional MVP: schemes database, country/organisation
profiles, foreign-policy doctrines, prelims practice, mains practice,
revision, bookmarks, notes, search, comparison — all working, all
deployable as-is. It is **not** a pre-populated encyclopedia of every
scheme and every country; the data model is built so you (or
contributors) can grow it incrementally without touching any app code.

Content was web-researched as of September 2026. Fast-moving facts —
BRICS/G20 rosters, trade-agreement entry-into-force dates, recent
bilateral visits, QUAD/G20 summit hosting — are the most likely to go
stale first; each has a `sourceKey` linking to the relevant official
page, and organisations with unsettled membership are flagged with
`membershipUncertain: true`. The Current Affairs module in particular is
a living layer: revisit `src/data/currentAffairs.ts` every few months,
retire entries that have been superseded (or turn them into a static
"background" line inside a newer entry), and add new developments in the
same shape.
