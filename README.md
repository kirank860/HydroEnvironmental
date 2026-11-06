# Hydro Environmental & Engineering Services — Website

Corporate website for **Hydro Environmental & Engineering Services LLC (HEES)**, part of Island Tower Group.
Built from the Figma spec *"HEES — Premium Website & Prototype Plan"* and the HYDRO PREQUALIFICATION 2025 brand colours.

## Stack
- Next.js 16 (App Router) · React 19 · TypeScript
- Fonts: Cormorant Garamond (display) · DM Sans (body, nav, labels) — same pairing as hydropsindia.com · Barlow Condensed (logo wordmark)
- Tailwind CSS v4 (tokens in `app/globals.css` → `@theme`)
- GSAP + ScrollTrigger + Lenis for Hydrops-style scroll motion

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
```
app/
  layout.tsx        fonts (Cormorant Garamond, DM Sans, Barlow Condensed) + SEO metadata
  page.tsx          homepage section order
  globals.css       brand tokens + all section styles
components/
  Header.tsx        sticky navbar, dropdowns, full-screen mobile menu
  Footer.tsx
  Logo.tsx          placeholder HEES mark (replace with official vector)
  Motion.tsx        all scroll animations (hero reveal, pinned manifesto, horizontal chapters, reveals)
  sections/         Intro (hero + statement), Manifesto, Chapters, Sections (capabilities → contact)
lib/content.ts      ALL copy, links and data — edit text here
```

## Brand colours (from the prequalification)
| Token | Hex | Source |
|---|---|---|
| brand | `#00A654` | logo green |
| green | `#007F3D` | logo green, AA on light |
| ink | `#1F497D` | "Company Profile" heading navy |
| night | `#0A1D33` | navy, deepened for dark sections |
| blue | `#5BB4E4` | cover water blue (#208BC3), lightened for dark bg |

## Static mode (for Figma import)
Open `http://localhost:3000/?figma` — animations are disabled so html.to.design captures every section cleanly.
Motion is also disabled for users with *reduce motion* turned on.

## Before launch (TODO)
- [x] Logo: vector recreation of the official "he" monogram in `components/Logo.tsx` + `public/logo-mark.svg` (replace with the designer's master SVG/AI if available)
- [ ] Replace Unsplash mood photos (`lib/content.ts`) with approved HEES photos in `/public/images`
- [ ] Confirm public phone number (04-2573677 vs 06-545 3318), email and address
- [ ] Approve project references and publication permission
- [ ] Contact form + inner pages (About, Solutions, Products, Projects, Resources, Contact, Privacy, 404)

## SEO
- Keyword map + JSON-LD (Organization/LocalBusiness, WebSite, FAQPage): `lib/seo.ts`
- Page metadata, Open Graph, Twitter, robots, canonical, geo tags: `app/layout.tsx`
- `app/sitemap.ts` → /sitemap.xml · `app/robots.ts` → /robots.txt · `app/opengraph-image.tsx` → social share card
- H1 = "Water & wastewater treatment company · Sharjah, UAE" + slogan; FAQ section is keyword-targeted and mirrored as FAQPage schema
- After launch: submit /sitemap.xml in Google Search Console, link the Google Business Profile to heesllc.ae, and add inner pages to `app/sitemap.ts`
