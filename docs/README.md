# Project docs (for LLM context)

This folder contains documentation to help AI assistants and other LLMs understand the project. It is **not** part of the public website.

## What this project is

- Static landing page for a pitch at **NJA Meetup** (Sydney Talent Meetup) in Sydney, Australia.
- The site promotes a conference talk / session; the company behind the pitch is **VIA CO** (wearevia.co).
- Stack in `package.json`; config in `astro.config.mjs`, `tailwind.config.mjs`.

## Docs in this folder

| File | Purpose |
|------|--------|
| [README.md](./README.md) | This file — project overview for LLMs. |
| [nja-meetup-pitch.md](./nja-meetup-pitch.md) | NJA Meetup community overview, event model, and company profile (pitch context). |
| [via-co-context.md](./via-co-context.md) | VIA CO company context (from VIA Tome). |
| [pitch-script.md](./pitch-script.md) | Script for the live pitch (greeting, about us, about you, the offer). |

## Site structure (brief)

- `src/pages/index.astro` — main landing page (Hero, Abstract, Key Takeaways, Speaker Bio, Resources, Footer).
- `src/components/` — reusable sections (Hero, Abstract, KeyTakeaways, SpeakerBio, Resources, Footer).
- `src/layouts/Layout.astro` — global layout and meta.
- Styling: VIA navy palette, Inter font; see `tailwind.config.mjs` and `src/styles/global.css`.

When editing content or suggesting copy, use the pitch and company context in this folder so the messaging stays aligned with the NJA Meetup pitch and VIA CO.
