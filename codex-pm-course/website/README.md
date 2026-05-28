# Codex for Product Managers — Documentation Website

This is the Nextra-based documentation/marketing website for the **Codex for Product Managers** course (codexforpms.com).

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Building

```bash
# Build static site
npm run build

# Output is written to the `out/` directory.
# next-sitemap generates robots.txt + sitemap.xml and Pagefind indexes
# the content automatically via the postbuild script.
```

## Deployment to Vercel

### Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Add New Project → import `carlvellotti/codex-pm-course`
3. **Root Directory:** `website`
4. **Framework Preset:** Next.js
5. **Build Command:** `npm run build`
6. **Output Directory:** `out`
7. Deploy, then attach the `codexforpms.com` domain (DNS already on Vercel)

### Vercel CLI

```bash
npm i -g vercel
cd website
vercel          # preview
vercel --prod   # production
```

## Project Structure

```
website/
├── pages/               # All content pages (MDX)
│   ├── company-context/ # TaskFlow company info
│   ├── getting-started/ # Module 0: install + first run
│   ├── fundamentals/    # Module 1: Fundamentals
│   ├── advanced/        # Module 2: Advanced PM Work
│   ├── vibe-coding/     # Module 3: Vibe Coding
│   ├── _app.jsx         # Next.js app wrapper (mounts EmailPopup)
│   ├── _document.jsx    # Tracking pixels (env-gated)
│   ├── _meta.ts         # Navigation config
│   ├── index.mdx        # Homepage
│   └── search.mdx       # Search page with Pagefind
├── public/
│   ├── favicon.ico/.png # PLACEHOLDER — replace with real Codex brand assets
│   └── images/          # OG card (placeholder) + lesson images
├── next.config.mjs      # Next.js configuration (static export)
├── next-sitemap.config.js
├── theme.config.tsx     # Nextra theme + SEO head (GA id is a PLACEHOLDER)
└── package.json
```

## Notes / placeholders to replace

- **Brand assets** (`public/favicon.*`, `public/images/codexforpms-thumbnail.png`) are solid-color placeholders. Replace with real Codex-branded assets once the palette is finalized.
- **GA4 id** in `theme.config.tsx` is `G-PLACEHOLDER`. Replace with the real codexforpms.com GA4 measurement id.
- See `BUSINESS/build/projects/platform-launch/codex-site-plan.md` (in the carls-life-os vault) for the full build plan and followups.

## Tech Stack

- **Next.js 14** — static site generation (`output: 'export'`)
- **Nextra 3** — documentation theme
- **next-sitemap** — robots.txt + sitemap.xml
- **Pagefind** — client-side search
- **MDX** — Markdown with JSX

## Links

- **Live Site:** https://codexforpms.com
- **Course Repository:** https://github.com/carlvellotti/codex-pm-course
- **Nextra Docs:** https://nextra.site
- **Pagefind Docs:** https://pagefind.app
