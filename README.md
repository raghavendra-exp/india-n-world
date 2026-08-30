# UPSC Knowledge Hub — Schemes & International Relations

A static, front-end-only React + TypeScript app for UPSC prep: government
schemes, India's bilateral/multilateral relations, a Prelims MCQ lab, a
Mains answer-writing lab with rule-based feedback, spaced-repetition-style
revision flashcards, and local bookmarks/notes. No backend, no API keys,
no database — everything runs and persists (via the browser's
`localStorage`) entirely client-side, so it deploys as static files on
GitHub Pages.

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
    types.ts       # shared interfaces (Scheme, Country, Organisation, MCQ, MainsQuestion)
    sources.ts     # official-source registry + "last verified" string
    schemes.ts
    countries.ts
    organisations.ts
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

This ships with a deliberately small, hand-verified starter dataset (6
schemes, 6 countries, 7 organisations, 8 MCQs, 4 Mains questions) rather
than thousands of auto-generated records, so that everything in it is
something you can trust. To add more:

1. **Add a scheme** — append an object to `src/data/schemes.ts` matching
   the `Scheme` interface in `src/data/types.ts`. Add the source you used
   to `src/data/sources.ts` if it's not already there.
2. **Add a country** — same pattern in `src/data/countries.ts`.
3. **Add an organisation** — same pattern in `src/data/organisations.ts`.
   Set `membershipUncertain: true` if membership has changed recently, to
   surface the verification banner on that page.
4. **Add an MCQ** — append to `src/data/mcqs.ts`. `answer` is the
   zero-based index into `options`.
5. **Add a Mains question** — append to `src/data/mains.ts`. `keywords`
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
profiles, prelims practice, mains practice, revision, bookmarks, notes,
search, comparison — all working, all deployable as-is. It is **not** a
pre-populated encyclopedia of every scheme and every country; the data
model is built so you (or contributors) can grow it incrementally
without touching any app code.
