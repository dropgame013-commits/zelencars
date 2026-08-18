# ZELENCARS — Automotive Visuals

Full rebuild of the ZelenCars site: dark cinematic automotive brand site,
built as a static HTML/CSS/JS project (no build step, no framework) so it's
easy to host anywhere and easy to hand off. GSAP + ScrollTrigger drive the
scroll choreography; Lenis adds the smooth/inertial scroll feel; everything
degrades gracefully (native scroll, no parallax) if a CDN script fails to
load or the visitor has "reduce motion" on.

There is no reviews/testimonials system anywhere in this project — not in
the UI, not in the backend, not paused. The only conversion path is the
booking form at the bottom.

## Run it locally

No build step — it's plain HTML/CSS/JS. Any static file server works:

```bash
npx serve .
# or: python3 -m http.server 8080
```

Then open the printed local URL.

## Project structure

```
index.html            All markup, sections, data-i18n attributes
styles.css             Design tokens + every section's styling
script.js              i18n, scroll FX, cursor, portfolio, services, form
public/
  videos/              Drop real MP4s here (filenames below)
  images/              Drop real JPG/WebP here (filenames below)
  logo/favicon.svg      Current mark (aperture ring). Swap for a real logo later.
```

## Replacing media — the site already works without this

Every video/photo slot on the site is wired to a specific filename. Until
that file exists, the slot shows a designed "awaiting footage" card (dark
gradient + grain + the expected filename) instead of a broken box — so the
site looks intentional even empty, and doubles as a checklist. Drop a file
in with the exact name below and it replaces the card automatically, no
code changes needed.

**Videos** → `public/videos/`
- `hero-loop.mp4` — hero background, the first thing anyone sees. Landscape, ideally 10–20s, no audio needed (it's muted).
- `cta-loop.mp4` — background for the "Твой автомобиль. Твоя история." closing section.
- `work-01.mp4`, `work-02.mp4`, `work-03.mp4`, `work-04.mp4`, `work-05.mp4` — portfolio video tiles.

**Photos** → `public/images/`
- `work-02.jpg`, `work-05.jpg`, `work-07.jpg` — portfolio photo tiles.
- `service-video.jpg`, `service-photo.jpg`, `service-social.jpg` — shown on the right of the Services list (swaps when you click a service).
- `og-cover.jpg` — social share preview image (1200×630 recommended). Optional but nice to have.

Portfolio piece names (`Untitled Coupe`, `Night Drive`, etc.) are placeholders —
rename them in `script.js` inside the `i18n` object (`work.item1.name` … `work.item8.name`,
in both the `ru` and `en` blocks).

## Booking form → your email (Web3Forms)

The form submits to [Web3Forms](https://web3forms.com/), a free
form-to-email service. Nothing to deploy or host.

1. Go to web3forms.com and enter the inbox email where you want booking
   requests delivered. They'll email you an Access Key.
2. Open `script.js`, find `WEB3FORMS_ACCESS_KEY`, replace the placeholder
   string with that key.

That's it — the form starts emailing that inbox instantly. Reply to people
on Telegram directly (their handle is a required field). Until you paste a
real key, the form correctly shows an error on submit instead of silently
failing — that's expected, not a bug.

## Language

RU is the default; the RU/EN toggle (header, mobile menu, footer) swaps
every string on the page via the dictionary at the top of `script.js`. Add
new copy there under both `ru` and `en` — every visible string on the site
goes through this, nothing is hardcoded per-language in the HTML.

## Decorative metadata

The GPS coordinates, "EST. 2021", and frame-counter readouts around the
hero/contact are an intentional stylistic device (film/camera metadata),
not literal claims — edit or remove them directly in `index.html`
(`.hero-meta`, `.contact-coords`) if you'd rather they reflect something
specific (a real studio location, etc.).

## Deploying with a real domain

1. Push this folder to a GitHub repo.
2. Deploy on [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/) —
   sign in with GitHub, import the repo, leave build settings empty (no
   build step needed). You get a free `.vercel.app`/`.netlify.app` URL.
3. Buy a domain (Cloudflare Registrar or Namecheap are both solid) and add
   it under the project's "Domains" settings — you'll get DNS records to
   add at your registrar.

## What's deliberately not here

- No reviews/testimonials/ratings — the brief was explicit about this.
- No CMS/backend — content lives in `index.html` + the `script.js` i18n
  dictionary. For a brand this size that's a feature, not a gap: no moving
  parts to break, no hosting bill beyond a static host.
