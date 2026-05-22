# Navjeevan Homoeopathic Clinic

Official website for **Dr. Ritika Ukawat** — Homoeopath, Clinical Nutritionist & Dietician.
Mumbai-based clinic with online consultations across India.

🌐 **Live site:** _coming soon_
📞 **Phone / WhatsApp:** +91 98934 14057
📍 **Mumbai, India** + Online India-wide
🔗 **Instagram:** [@navjeevan_homoeopathic_clinic](https://www.instagram.com/navjeevan_homoeopathic_clinic/)

---

## Tech stack

- Plain **HTML + CSS + JavaScript** — no build step
- **[Lenis](https://github.com/darkroomengineering/lenis)** for smooth scroll
- **[Swiper.js](https://swiperjs.com/)** for the Wellness Wisdom carousel
- **Instagram embed iframes** for reels
- **Google Fonts** — Fraunces (serif headlines) + Inter (body)

## Project structure

```
/
├── index.html         Home — hero, dual approach, conditions, wisdom carousel, reels, testimonials
├── about.html         Dr. Ritika's story, credentials, philosophy
├── services.html      Homoeopathy + Nutrition + Integrated Plan
├── conditions.html    9 condition cards + FAQ accordion
├── contact.html       Booking form (auto-fills WhatsApp), map, hours
├── css/
│   └── style.css
├── js/
│   └── main.js        Smooth scroll, scroll reveals, counters, mobile menu
├── assets/            Logo, doctor photos, educational creatives
└── README-IMAGE-PROMPTS.md   Prompts for generating additional brand visuals
```

## Run locally

Just open `index.html` in any browser — no server needed.

For a local dev server with auto-reload:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

Drag the entire folder into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) — done.
Both auto-detect static sites and deploy in seconds.

## Brand palette

| Token | Hex |
|---|---|
| Cream base | `#FAF7F2` |
| Sage primary | `#6B8E5A` |
| Sage deep | `#2F4A2A` |
| Leaf accent | `#8FA982` |
| Apple green | `#7BB342` |
| Terracotta | `#C97B5E` |
| Ink (text) | `#1E2A1C` |

## Sections

**Home:**
1. Hero — portrait, animated counters, CTAs
2. Marquee — brand values strip
3. Dual Approach — Homoeopathy + Nutrition
4. Conditions — 8 specialty cards
5. About Preview
6. Process — 4-step healing journey
7. Wellness Wisdom — auto-sliding Swiper carousel
8. Featured Banner — brand creative
9. Instagram Reels — embedded video iframes
10. Testimonials
11. CTA + Footer

**Floating actions** — WhatsApp + Call buttons fixed on every page.

---

© 2026 Navjeevan Homoeopathic Clinic. All rights reserved.
