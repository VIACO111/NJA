# Say the hard thing — Landing & Signup

Static site for **VIA CO**’s “Say the hard thing” strategic training for P&C leaders. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Drives signups to the free online training and team program.

---

## What this is

- **Landing** (`/RCTraining/`): hero, why this matters, agenda, speakers, offer, resources.
- **Signup** (`/RCTraining/signup/`): training details and registration form (payment via Wise).
- **Thanks** (`/RCTraining/thanks/`): post-registration confirmation.
- **Brand**: VIA CO (wearevia.co). VIA palette, Inter + Montserrat, en-AU.

---

## Project structure

```
NJA/
├── README.md
├── package.json
├── astro.config.mjs          ← base: '/RCTraining'
├── tailwind.config.mjs
├── public/via-assets/        ← logos, Buildup SVGs, PDFs, etc.
├── docs/                     ← LLM/context (gitignored)
└── src/
    ├── layouts/
    │   └── Layout.astro       ← HTML shell, meta, fonts, header logo
    ├── pages/
    │   ├── index.astro        ← Landing (all copy in constants)
    │   ├── signup.astro        ← Registration page
    │   └── thanks.astro       ← Thank-you page
    ├── components/
    │   ├── landing/           ← Hero, AbstractEventDetails, Agenda, etc.
    │   └── signup/            ← SignupForm
    └── styles/
        └── global.css
```

- **Build output**: `dist/` (see `.gitignore`).

---

## Setup & commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # Serve dist/ locally
```

---

## Customising content

- **Landing**: all homepage copy and config live in **`src/pages/index.astro`** (constants at the top, then components with props).
- **Signup**: copy and form labels in **`src/pages/signup.astro`**; form behaviour in **`src/components/signup/SignupForm.astro`**.

---

## Docs folder (`docs/`)

The **`docs/`** folder is for **context and LLMs**, not for the live site:

- **`docs/README.md`** — Short project overview and index of the other docs.
- **`docs/nja-meetup-pitch.md`** — NJA Meetup community pitch and event/company profile.
- **`docs/via-co-context.md`** — VIA CO positioning and key info (from VIA Tome).
- **`docs/pitch-script.md`** — Full script for the live pitch (greeting, about us, about you, the offer).

Use these when editing copy or when another AI needs to understand the project.

---

## Deploying

- **GitHub Actions**: Push to `main` runs `.github/workflows/deploy.yml` (Node 20, `npm ci || npm install`, `npm run build`, FTP upload). Configure FTP secrets in the repo.
- **cPanel**: [`.cpanel.yml`](.cpanel.yml) supports Git deploy; set `DEPLOYPATH` and Node.js in cPanel.
- **Other**: Upload `dist/` to any static host. Set `site` and `base` in `astro.config.mjs` (e.g. `base: '/RCTraining'` for subpath).

---

## Tech

- **Astro** 4.x, **Tailwind CSS** 3.x via `@astrojs/tailwind`, **TypeScript**.
- Colours and fonts: `tailwind.config.mjs` (VIA palette), `Layout.astro` (Inter, Montserrat).
