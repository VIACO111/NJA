# NJA Meetup — Landing Page

Static landing page for the **VIA CO** pitch at **NJA Meetup** (Sydney Talent Meetup). Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Goal: drive P&C folks to the **free training** and the team program.

---

## What this is

- **One-page site**: hero, “why this matters,” what you’ll get, speaker (VIA team), next steps (training signup, team program, Meetup), footer.
- **Message**: Better decisions and more C-suite buy-in; free training (limited spots); team offsites / collective flow state.
- **Brand**: VIA CO (wearevia.co). Styling: VIA navy, Inter, clean B2B look.

---

## Project structure

```
NJA/
├── README.md                 ← You are here (project rundown)
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   └── favicon.svg
├── docs/                      ← For LLMs / context (not part of the website)
│   ├── README.md              ← What the project is, doc index
│   ├── nja-meetup-pitch.md    ← Community + event profile
│   ├── via-co-context.md      ← VIA CO company context
│   └── pitch-script.md        ← Live pitch script
└── src/
    ├── layouts/
    │   └── Layout.astro       ← HTML shell, meta, fonts, global styles
    ├── pages/
    │   └── index.astro        ← Main page (all content and config)
    ├── components/
    │   ├── Hero.astro         ← Headline, subtitle, conference, primary CTA
    │   ├── Abstract.astro     ← Rich text section (“Why this matters”)
    │   ├── KeyTakeaways.astro ← Numbered cards (“What you’ll get”)
    │   ├── SpeakerBio.astro   ← Name, title, bio, company link
    │   ├── Resources.astro     ← Links (“Next steps”)
    │   └── Footer.astro       ← Links + “Powered by”
    └── styles/
        └── global.css         ← Tailwind + base styles
```

- **Build output**: `dist/` (static HTML/CSS). Not committed (see `.gitignore`).

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

Everything for the **homepage** is in **`src/pages/index.astro`**:

| What | Where in `index.astro` |
|------|------------------------|
| **Training / team program URLs** | Top of file: `TRAINING_SIGNUP_URL`, `TEAM_PROGRAM_URL` (replace `#signup` with your real signup link, e.g. from QR). |
| **Page title & meta** | `<Layout title="…" description="…" />`. |
| **Hero** | `Hero` props: `title`, `subtitle`, `conferenceName`, `date`, `primaryCtaUrl`, `primaryCtaLabel`. |
| **Why this matters** | `Abstract` `content` (HTML string). |
| **What you’ll get** | `KeyTakeaways` `items` (array of strings). |
| **Speaker** | `SpeakerBio`: `name`, `title`, `bio`, `companyName`, `companyUrl`; optional `imageSrc` for a headshot. |
| **Next steps** | `Resources` `resources` array: `title`, `href`, `description`. |
| **Footer** | `Footer` `socialLinks`, `poweredBy`, `poweredByUrl`. |

Components live in `src/components/` if you want to change layout or styling.

---

## Docs folder (`docs/`)

The **`docs/`** folder is for **context and LLMs**, not for the live site:

- **`docs/README.md`** — Short project overview and index of the other docs.
- **`docs/nja-meetup-pitch.md`** — NJA Meetup community pitch and event/company profile.
- **`docs/via-co-context.md`** — VIA CO positioning and key info (from VIA Tome).
- **`docs/pitch-script.md`** — Full script for the live pitch (greeting, about us, about you, the offer).

Use these when editing copy or when another AI needs to understand the project.

---

## Deploying to GitHub Pages

1. **Set your GitHub username and repo name** in `astro.config.mjs`:
   - Replace `YOUR_GITHUB_USERNAME` with your GitHub username (e.g. `johndoe`).
   - If your repo isn’t called `NJA`, change `repoName` to match (e.g. `nja-landing`).  
   Your site will be at: **`https://YOUR_USERNAME.github.io/REPO_NAME/`**

2. **Push the repo to GitHub** (if you haven’t already):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/NJA.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages**:
   - Repo → **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

4. **Deploy**:
   - Every push to `main` runs the workflow in `.github/workflows/deploy.yml` (build + deploy).
   - Or run it manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.
   - After it finishes, the site is live at the URL from step 1.

**Deploying to cPanel (Git):** The repo includes a [`.cpanel.yml`](.cpanel.yml) for [cPanel Git deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/). Edit `.cpanel.yml` and set `DEPLOYPATH` to your account (e.g. `/home/your_cpanel_user/public_html/`). Ensure **Node.js** is set up on the server (cPanel → Setup Node.js App). Push to your cPanel Git repo; the post-receive hook will run `npm ci`, `npm run build`, and copy `dist/` into `DEPLOYPATH`.

**Other hosts:** You can also upload the contents of **`dist/`** to Netlify, Vercel, S3, Cloudflare Pages, etc. For a non–GitHub Pages deploy, set `site` and `base` in `astro.config.mjs` as needed (e.g. `base: '/'`).

---

## Tech

- **Astro** 4.x — static site, single page.
- **Tailwind CSS** 3.x — via `@astrojs/tailwind`.
- **TypeScript** — for types only; no runtime TS in the built output.

Colors and fonts are in `tailwind.config.mjs` (VIA navy palette) and `Layout.astro` (Inter from Google Fonts).
