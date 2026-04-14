# Performance improvement opportunities — Lotai React

This document summarizes performance-related findings from a read-through of the codebase (Next.js 14 App Router, Prismic, TanStack Query, GSAP, Lenis, Framer Motion). **No code changes have been made.** Use the task list at the end to decide what to implement and in what order.

---

## Context (how the app is shaped today)

- **Heavy client shell:** `src/app/layout.js` is a client component (`'use client'`) and loads Lenis, multiple local fonts, Inter, dynamic `Navigation` (`ssr: false`), `NavCard`, `Fader`, and `Providers` (React Query) for every route.
- **Slice rendering:** Marketing and project pages rely on `src/components/SliceZone/SliceZone.jsx`, which **statically imports** every slice-related module up front. By contrast, `src/slices/index.js` (used by the slice simulator) already uses `next/dynamic` per slice — a much better pattern for bundle size.
- **Data fetching is split:** Server routes like `src/app/project/[id]/page.js` and `src/app/vp/[vp]/page.js` use `createClient` from `@prismicio/client` directly (`'otay'`), while `src/prismicio.js` configures **Next fetch caching** (`force-cache` + `tags: ['prismic']` in production, `revalidate: 5` in dev). Client pages use `usePrismicQuery` in `src/hooks/usePrismicData.js` (React Query, no `staleTime` / cache tuning).
- **Dependencies:** GSAP and Framer Motion are used in navigation/animation paths; **`three` appears in `package.json` but has no imports under `src/`** (dead weight for installs and risk of accidental future imports).

---

## High impact

### 1. `SliceZone` — eager imports inflate JavaScript for every page that uses it

**Where:** `src/components/SliceZone/SliceZone.jsx`  
**Issue:** All sound layouts, project layouts, Vimeo, VP components, etc. are imported whether the current document uses them or not. This increases **initial JS parse/compile time** and **cacheable chunk size** on routes such as `/sounds`, `/mixmedia`, `/project/[id]`, `/shows`, `/manifesto` (see note below on manifesto), and `/vp/[vp]`.  
**Direction:** Mirror `src/slices/index.js`: a map of `slice_type` → `dynamic(() => import(...))` (optionally with `loading` placeholders). Load only components needed for the slices on that page.

### 2. `Menu.jsx` — GSAP on every `mousemove`

**Where:** `src/components/Menu/Menu.jsx`  
**Issue:** `window.addEventListener('mousemove', ...)` calls `gsap.to` on **each menu item** on every mouse move. That is a large amount of layout/animation work and can cause **jank** on lower-end devices.  
**Direction:** Prefer `gsap.quickTo`, a single `requestAnimationFrame` loop updating transforms, **CSS `transform` only** (no new tweens per event), or throttle/delegate updates. Measure with Performance panel after change.

### 3. Server-side Prismic fetches without Next cache configuration

**Where:** e.g. `src/app/project/[id]/page.js`, `src/app/vp/[vp]/page.js` (`createClient` from `@prismicio/client`).  
**Issue:** Bypasses the `fetchOptions` / `revalidateTag('prismic')` setup in `src/prismicio.js`, so you miss **consistent ISR/SSG caching** and alignment with `src/app/api/revalidate/route.js`.  
**Direction:** Use the shared `createClient` from `src/prismicio.js` (or equivalent `fetch` options) for server components so production benefits from `force-cache` + tag revalidation.

### 4. Client-only CMS pages — extra round-trips and loading spinners

**Where:** `src/app/sounds/page.js`, `src/app/mixmedia/page.js`, `src/app/video/page.js`, `src/app/contact/page.js`, `src/app/manifesto/page.js`, `src/app/shows/page.js` — all `'use client'` + `usePrismicQuery`.  
**Issue:** HTML arrives without content; the browser then runs JS, fires a client-side Prismic request, then renders. Slower **TTFB-to-content** and worse **SEO** for text that could be server-rendered.  
**Direction:** Where previews are not required, fetch in a **Server Component** with the cached Prismic client and pass data into smaller client islands for animation only.

---

## Medium impact

### 5. Images: many `<img>` tags vs `next/image`

**Where:** Multiple components under `src/app/project/...`, `src/app/sounds/...`, `src/app/vp/...`, `src/components/NavCard/...`, manifesto `Gallery`, etc.  
**Issue:** Missed **automatic resizing**, **lazy loading**, and **priority** control for LCP. Prismic host is already allowed in `next.config.mjs` (`images.prismic.io`).  
**Direction:** Prefer `next/image` with explicit `width`/`height` or `fill` + `sizes` for responsive layouts.

### 6. React Query defaults for mostly-static CMS data

**Where:** `src/hooks/usePrismicData.js`, `src/app/providers.js`  
**Issue:** Default `staleTime` is 0 — data is “stale” immediately; **refetch on window focus** can trigger repeated Prismic calls. Query keys omit `options`, which can cause incorrect cache sharing if you add filtered queries later.  
**Direction:** Set a generous `staleTime` (and optionally `gcTime`) for document types that change rarely; tune `refetchOnWindowFocus`. Include meaningful `queryKey` parts when `options` varies.

### 7. Third-party script loading (Songkick)

**Where:** `src/app/shows/page.js` — dynamic `<script>` injection for `widget.songkick.com`.  
**Direction:** Consider `next/script` with `strategy="lazyOnload"` or `afterInteractive` so loading is integrated with Next’s scheduling and avoids duplicate manual cleanup where possible.

### 8. Media embeds

**Where:** `src/components/Vimeo/Vimeo.jsx` (iframe), `src/app/project/components/project_video/project_video.jsx` (`<video>`), VP `VideoEmbed` (raw HTML).  
**Direction:** `loading="lazy"` on iframes where supported; for `<video>`, consider `preload="metadata"` (or `none` until play) for large assets; lazy-mount embeds below the fold.

### 9. Root layout — global cost on every navigation

**Where:** `src/app/layout.js`  
**Issue:** Multiple **local font files** + Lenis + navigation tree on every page. Some of this may be intentional for brand consistency.  
**Direction:** Audit whether all fonts are needed globally; use **`display: 'swap'`** where applicable; consider lazy-loading **non-critical** UI (e.g. parts of nav) after first paint if design allows.

### 10. `globals.css` — external asset in CSS variable

**Where:** `--pattern: url('http://allyourhtml.club/...')`  
**Issue:** Extra **DNS/TLS/request** on first paint; third-party availability affects your styles.  
**Direction:** Host the pattern in `public/` or on your own CDN; use HTTPS same-origin if possible.

---

## Lower impact / hygiene

### 11. `console.log` in production paths

**Where:** e.g. `SliceZone.jsx`, `Menu.jsx`, several pages and slice components.  
**Direction:** Remove or gate behind `process.env.NODE_ENV === 'development'` to avoid main-thread stringification and noise.

### 12. Unused / misleading imports

**Where:** `src/app/manifesto/page.js` imports `SliceZone` but the rendered tree uses discrete components (`Header`, `Content`, etc.) — **SliceZone is not used in JSX**. That can still pull the huge `SliceZone` module into the manifesto bundle.  
**Direction:** Remove the unused import (and any other dead imports found in a quick pass).

### 13. `SliceZone` render loop mutates arrays during render

**Where:** `sliderImages.push`, `videoImages.push`, `collabArray.push` inside `slices.map`.  
**Issue:** Works today but is fragile and can confuse React’s model; minor cost from repeated work on re-renders.  
**Direction:** Pre-process slices into groups in a `useMemo` or a pure function outside render.

### 14. `three` dependency

**Where:** `package.json`  
**Direction:** Remove if truly unused, or document why it stays (keeps install lean and avoids accidental bundle bloat later).

### 15. Dev script runs Slice Machine init alongside Next

**Where:** `"dev": "concurrently \"next dev\" \"npx @slicemachine/init@latest\""`  
**Issue:** Not production performance, but can affect **local dev CPU/network**.  
**Direction:** Run Slice Machine only when needed, or use a separate npm script.

---

## Task list (for your approval)

Check items you want done; unchecked items can be deferred or skipped.

### Bundle & code splitting

- [ ] **T1:** Refactor `src/components/SliceZone/SliceZone.jsx` to use `next/dynamic` (pattern aligned with `src/slices/index.js`) so slice components load on demand.
- [ ] **T2:** Remove unused `SliceZone` import from `src/app/manifesto/page.js` (quick win even before T1).
- [ ] **T3:** Remove or justify the `three` dependency after confirming no dynamic/import-string usage.

### Runtime / interaction performance

- [ ] **T4:** Rework `src/components/Menu/Menu.jsx` mousemove handling to avoid per-event `gsap.to` on all items (quickTo, rAF, or CSS transforms).
- [ ] **T5:** Add lazy loading / preload strategy for Vimeo iframes and project `<video>` elements.

### Data fetching & caching

- [ ] **T6:** Switch server-side Prismic usage in `project/[id]` and `vp/[vp]` (and any similar pages) to `createClient` from `src/prismicio.js` (or equivalent caching) so tag revalidation applies consistently.
- [ ] **T7:** Tune `usePrismicQuery` (`staleTime`, `gcTime`, `refetchOnWindowFocus`, complete `queryKey`).
- [ ] **T8:** Migrate selected CMS pages from client fetch + spinner to Server Components + cached Prismic fetch, keeping small client islands only where needed.

### Images, assets, scripts

- [ ] **T9:** Replace high-traffic `<img>` usages with `next/image` + appropriate `sizes` (especially Prismic URLs and large galleries).
- [ ] **T10:** Self-host or replace the external `--pattern` URL in `globals.css`.
- [ ] **T11:** Migrate Songkick loading to `next/script` with an explicit loading strategy.

### Layout & fonts

- [ ] **T12:** Audit global fonts in `layout.js`; drop or subset unused faces; confirm font loading behavior (`display`, variable fonts).

### Cleanup & maintainability

- [ ] **T13:** Strip or dev-gate `console.log` / debug logging across `src/`.
- [ ] **T14:** Refactor `SliceZone` slice grouping (slider / video / collaborator) to a pure pre-pass + stable keys (no mutation during `map`).
- [ ] **T15:** Split `layout.js` into a server layout shell + client `AppShell` for Lenis/nav/query if you want a smaller client boundary (larger refactor — pair with T8).

### Measurement (recommended before/after any large change)

- [ ] **T16:** Run `next build` and note First Load JS per route; optionally add Lighthouse/Web Vitals in CI or Vercel Analytics for real-user data.

---

## Suggested priority order (opinion only)

1. **T4** (Menu mousemove) — direct main-thread win.  
2. **T1 + T2** — large JS reduction on many routes.  
3. **T6 + T7** — fewer redundant network fetches, better CDN/cache behavior.  
4. **T9** — LCP and bandwidth, especially media-heavy pages.  
5. **T8** — bigger architectural payoff, schedule when you have time for RSC migration.

---

*Generated from repository review; adjust tasks if product constraints (e.g. Prismic previews, mandatory client-only APIs) require keeping some patterns as-is.*
