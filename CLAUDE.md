# Aquatight Site — Claude Context

## Project
Aquatight Waterproofing — waterproofing specialists, Melbourne (Bayside, Mornington Peninsula, Eastern Suburbs).

**Stack**: React SPA · Vite · Tailwind CSS · Framer Motion · Vercel  
**Live domain**: https://www.aquatightwaterproofing.au  
**Vercel team**: ethans-projects-9ae33fde · Project ID: prj_NuDQoAOeadSrec2uhT09AxqgnJJn  
**Repo**: https://github.com/ethancreasey01-ui/aquatight-site  
**GitHub remote**: connected — push to `master` to deploy (once Vercel GitHub integration is linked)

## Structure
Uses a pages folder:
- `index.html` — meta tags, canonical URL, Google tag (AW-17961494205)
- `src/App.jsx` — router/layout shell; routes: `/`, `/services/:slug`, `/service-areas`, `/our-work`, `/aqua-pods`, `/projects/:slug`, `*` (NotFound); also the global tel: click conversion tracker
- `src/pages/Home.jsx` — main page content, contact form, phone number
- `src/pages/AquaPods.jsx` — Aqua Pods (Versipave) page; reuses wording from the Versipave service data
- `src/pages/ProjectDetail.jsx` — `/projects/:slug`, rendered from `WORK`
- `src/components/` — `WorkStrip` (auto-scroll photo strip), `Lightbox`, `BeforeAfter` (draggable/keyboard slider)
- `src/data/index.js` — `WORK` (jobs/photos), `SERVICES`, `TESTIMONIALS`, `NAV_LINKS`, helpers

## Photos and projects (data-driven)
Adding a job = one `WORK` entry in `src/data/index.js` + `public/work/<id>-800.webp` and `<id>-1600.webp`.
It then appears in the Home strip, the `/our-work` grid, Recent projects on Home (first 3 jobs), and its own `/projects/<slug>` page. All photos are cropped to 4:3 (1600x1200 + 800x600) so grids stay even; `SERVICES[].photo` picks each Home service card image. Pod jobs: `pod: true`
(keep them first in the array; they feed `/aqua-pods`). Optional fields (render only if present): `slug`, `title`, `overview`,
`scope`, `duration`, `photos` (extra images), `before` + `after` (`{id,w,h}` pair -> Before/After slider). See the comment above `WORK`.
Add new project slugs to `public/sitemap.xml`. Never invent facts. Alt text/captions: job type + suburb only; no client names or addresses;
strip EXIF/GPS and compress to WebP before committing. Scroll-reveal/count-up animations were removed on purpose (content visible on first paint). `prefers-reduced-motion` stops the strip/reviews animating (they become scrollable rows). Naming: "Aqua Pods" everywhere; "Versipave" appears once (service overview) plus verbatim client quotes.

## Phone Number
**Display**: 0408 827 996  
**Tel href**: `tel:0408827996`  
⚠️ Confirm this is the real client number before going live.

## Contact Form
**Formspree endpoint**: `https://formspree.io/f/meewklkk` (shared with Cherry Builds on purpose). Do not change.

## Google Ads
Base Google tag (AW-17961494205) is in `index.html` head. Phone-click conversion is in `App.jsx` (`PhoneClickTracker`);
form conversion fires in Home's form submit handler. Still verify with Tag Assistant (ad blocker OFF).

## Performance Standards
- Videos: compress with ffmpeg before committing. Target <1MB each.  
  `ffmpeg -i in.mp4 -vcodec libx264 -crf 28 -preset fast -vf "scale='min(720,iw)':-2" -an -movflags +faststart out.mp4`
- Gallery videos: use `loadedIndices` Set pattern — only load `src` on active ±2
- Images below fold: `loading="lazy"`
- Canonical URL: always `https://www.aquatightwaterproofing.au/` — never a Vercel preview URL

## Launch Checklist
- [ ] Confirm real client phone number
- [x] Formspree form ID set
- [ ] Set up Google Ads account + get tag ID
- [x] Add Google base tag to `index.html` head
- [ ] Add phone swap snippet to `App` useEffect
- [x] Add form conversion event to `handleSubmit`
- [ ] Compress all videos <1MB
- [x] Canonical URL points to production domain
- [ ] Connect GitHub remote for auto-deploy
- [ ] Test Tag Assistant with ad blocker OFF
