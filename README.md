# Dheeraj Singh — Portfolio

Static **Next.js** portfolio for [dheeraj0808](https://github.com/dheeraj0808).

- Homepage pulls showcase repos from the GitHub API at build/request time
- Resume page + downloadable PDF (`public/Dheeraj_Singh_Resume.pdf`)
- No separate backend — email contact via `mailto:`

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) · Resume at `/resume`

## Stack

- Next.js 16 (App Router)
- TypeScript
- GitHub REST API (`src/lib/github.ts`)
- Curated copy in `src/data/site.ts`

## Deploy

Push to GitHub → import on **Vercel** (framework preset: Next.js).
