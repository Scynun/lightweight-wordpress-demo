# PixelRank Studio — Demo WordPress Site (Lightweight)

A static demo built to show the look and structure proposed for the
Freelancer gig **"Lightweight WordPress site at low cost"** (ID 40806234,
budget ₹2,000–2,500, client: web-dev/SEO company, Ahmedabad, 4.7★/4 reviews,
payment verified + deposit placed, 78 bids at scout time on 2026-11-07).

## What's in this demo

- `index.html` — Home: hero, **video testimonial** (clearly-marked placeholder),
  services preview, portfolio preview, blog preview, enquiry form (validated in JS)
- `services.html` — 6 services with deliverables + pricing (WordPress design, Local SEO, WooCommerce, Speed Optimization, Content, Maintenance)
- `portfolio.html` — 6 projects with working category filter (Web Design / SEO / E-commerce / Local Business)
- `blog.html` — 4 sample posts with working category filter
- `post-why-wordpress.html`, `post-local-seo.html`, `post-enquiry-form.html`, `post-speed.html` — full sample posts
- `contact.html` — contact details + "what happens next" + enquiry form (with budget selector)
- `style.css` — single stylesheet, system fonts, no frameworks, no external requests
- `main.js` — mobile nav toggle, portfolio/blog filters, form validation + demo success message

## Lightweight by design (matches the brief)

- No frameworks, no web fonts, no external requests at all — the whole site is
  ~50 KB of HTML/CSS/JS. Portfolio "images" are CSS gradients, not image files.
- Semantic HTML + meta description + Open Graph tags on every page (SEO-friendly).
- Fully responsive (single column under 760px, mobile nav toggle).

## Placeholders (clearly marked in the demo)

- **Video testimonial:** no real client video was supplied. The home page shows a
  styled placeholder box; clicking it explains that the real video (YouTube embed
  or self-hosted MP4, lazy-loaded) would play there.
- **Company name / clients / contact details:** fictional ("PixelRank Studio",
  hello@pixelrank.example, +91 98765 43210) — the client would supply their real
  brand, copy, photos and testimonial video.
- **Enquiry form:** client-side validation + demo success message only; no backend
  in a static demo.

## How to view

Open `index.html` in any browser, or visit the GitHub Pages link.
No build step, no server needed.

## Real delivery would be WordPress

This demo is static HTML/CSS/JS only, to show the design and structure.
The real delivery for the client would be built on WordPress, with:

- A lightweight theme matching this design (no heavy page builder)
- Real WordPress pages: Home, Services, Portfolio (custom post type + filter),
  Blog (categories + search), Contact
- The client's real video testimonial embedded (lazy-loaded YouTube / self-hosted)
- Enquiry form via WPForms / Contact Form 7 with email notifications
- On-page SEO (Rank Math / Yoast), caching + image optimization, Google Business
  Profile + Analytics/Search Console setup
- Client's own copy, logo, photos and portfolio items

No bid has been placed and no client has been contacted — this is a demo only.
