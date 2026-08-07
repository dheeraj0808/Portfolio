# Dheeraj Singh — Portfolio

Personal portfolio for **[Dheeraj Singh](https://github.com/dheeraj0808)** — Backend-focused Software Engineer at **Epic Web Service**.

Built with **Next.js 16** (App Router) + TypeScript. No separate backend: content is curated in-repo and enriched from the GitHub API.

## Highlights

- **Wenuru** featured first — studio management platform ([staging.wenuru.com](https://staging.wenuru.com/))
- **Open Source** section — 4 NPM packages published as [`dheeraj08`](https://www.npmjs.com/~dheeraj08)
- Selected GitHub projects loaded via API (`Spotify-Backend`, `UserVault`, `Vaani`, …)
- Resume: `/resume` embeds and downloads `public/Dheeraj_Singh_Resume.pdf`
- Contact via `mailto:dheerajsingh1939@gmail.com`

## Quick start

```bash
npm install
npm run dev
```

| URL | What |
|-----|------|
| [http://localhost:3000](http://localhost:3000) | Homepage |
| [http://localhost:3000/resume](http://localhost:3000/resume) | Resume viewer + PDF download |

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Project structure

```text
Portfolio/
├── public/
│   ├── Dheeraj_Singh_Resume.pdf   # Downloadable resume
│   └── profile.jpg
├── src/
│   ├── app/
│   │   ├── page.tsx               # Home
│   │   ├── resume/page.tsx        # Resume (PDF embed)
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/                # Hero, Projects, OpenSource, …
│   ├── data/site.ts               # Profile, experience, packages, featured work
│   └── lib/github.ts              # GitHub API + showcase merge
├── package.json
└── README.md
```

## Content sources

| Section | Source |
|---------|--------|
| Identity, experience, skills | [`src/data/site.ts`](src/data/site.ts) |
| Wenuru (featured #1) | `site.featured` + live staging URL |
| NPM packages | `site.packages` → npm + GitHub links |
| Other projects | GitHub API for `dheeraj0808` + copy in `projectCopy` |
| Resume PDF | [`public/Dheeraj_Singh_Resume.pdf`](public/Dheeraj_Singh_Resume.pdf) |

To update copy, edit `src/data/site.ts`. To replace the resume, overwrite `public/Dheeraj_Singh_Resume.pdf`.

## Featured work

1. **Wenuru — Studio Management Platform** — NestJS, TypeScript, Sequelize, 4-tier RBAC, Razorpay, push notifications · [Live](https://staging.wenuru.com/)
2. **Open-source NPM (`dheeraj08`)** — `rupee-india`, `numindia`, `indian-pincode`, `gstin-utils`
3. **GitHub showcase** — Spotify-Backend, UserVault, Vaani, and more

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19 · TypeScript
- CSS (custom design tokens — no Tailwind)
- GitHub REST API (revalidate ~1h)

## Deploy

1. Push this repo to GitHub
2. Import on [Vercel](https://vercel.com/) (Next.js preset)
3. Deploy — no env vars required for the public site

Optional: set `metadataBase` in `src/app/layout.tsx` to your production URL for better Open Graph links.

## Links

- GitHub: [github.com/dheeraj0808](https://github.com/dheeraj0808)
- NPM: [npmjs.com/~dheeraj08](https://www.npmjs.com/~dheeraj08)
- Email: dheerajsingh1939@gmail.com

## License

MIT — feel free to fork for your own portfolio; replace content in `src/data/site.ts` and `public/`.
