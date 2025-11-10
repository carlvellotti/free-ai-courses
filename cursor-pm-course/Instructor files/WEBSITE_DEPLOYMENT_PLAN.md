# Website Deployment Plan
## Cursor for Product Managers Course

**Goal:** Deploy website to Vercel matching ccforpms.com EXACTLY in design, structure, and functionality.

**Repository:** https://github.com/carlvellotti/cursor-pm-course

---

## 🎯 STRATEGY: Copy & Replace (EASIEST!)

Instead of recreating everything from scratch, we'll:

1. **Copy the entire working `website/` folder from ccforpms repo**
   - Gets us all configs, styling, infrastructure that already works
   - Guarantees identical design
   - Saves tons of time

2. **Replace their content with ours**
   - Swap out their reference guides → our reference guides (already done!)
   - Update branding (Claude Code → Cursor)
   - Update URLs and repo links
   - Create company-context pages

3. **Deploy**
   - Test locally
   - Push to GitHub
   - Deploy to Vercel

**Time saved:** 30+ minutes of config/CSS creation. Total time: ~1.5 hours instead of 2+ hours.

---

## 📊 Current State

### What We Have ✅
```
cursor-pm-course/
├── .cursor/                    # Slash commands & rules
├── company-context/            # TaskFlow docs
├── lesson-modules/             # 9 complete interactive modules (1.1-2.3)
├── Instructor files/           # Teaching materials (PRIVATE)
├── website/pages/              # ✅ All 12 reference guides complete!
│   ├── getting-started/        # 0.1, 0.2, 0.3
│   ├── fundamentals/           # 1.1-1.6
│   └── advanced/               # 2.1-2.3
├── CLAUDE.md
├── README.md
└── .gitignore
```

### What We Need to Add 🔨
```
website/
├── package.json               # Dependencies & build scripts
├── next.config.mjs           # Next.js config
├── theme.config.tsx          # Nextra theme (EXACT copy of ccforpms)
├── tsconfig.json             # TypeScript config
├── next-sitemap.config.js    # Sitemap generation
├── pages/
│   ├── _app.tsx              # App wrapper with global CSS
│   ├── _meta.ts              # Root navigation
│   ├── index.mdx             # Homepage (EXACT copy of ccforpms structure)
│   ├── search.mdx            # Pagefind search page
│   └── company-context/      # TaskFlow reference materials
│       └── [files from company-context/]
├── styles/
│   └── globals.css           # EXACT copy of ccforpms styling
└── public/
    ├── favicon.png           # Icon
    ├── og-image.png          # Social preview (1200x630)
    └── [videos if any]
```

---

## 🎨 Design Requirements (Match ccforpms.com EXACTLY)

### Visual Design
- **Colors:** Teal (#1DD3B0) primary, Red (#FF5856) accents
- **Fonts:** Poppins (headings), Inter (body), JetBrains Mono (code)
- **Dark mode:** Default and primary
- **Layout:** Nextra docs theme with sidebar navigation
- **Sidebar width:** 320px

### Navigation Structure
```
Home
├── Module 0: Getting Started
│   ├── 0.1: Introduction
│   ├── 0.2: Installation
│   └── 0.3: Opening Course Folder
├── Module 1: Fundamentals
│   ├── 1.1: Welcome to TaskFlow
│   ├── 1.2: Interface
│   ├── 1.3: First Tasks
│   ├── 1.4: Templates & Workflows
│   ├── 1.5: Three Modes
│   └── 1.6: Project Rules
├── Module 2: Advanced PM Work
│   ├── 2.1: Write a PRD
│   ├── 2.2: Analyze Data
│   └── 2.3: Product Strategy
├── TaskFlow Context
│   ├── Company Overview
│   ├── Product Details
│   ├── User Personas
│   └── Competitive Landscape
└── Search
```

### Homepage Structure
- Hero section with course title
- Video embed (if applicable)
- "Who this is for" section
- Module breakdown with descriptions
- Prerequisites and requirements
- Call-to-action buttons
- Exactly matching ccforpms.com layout

---

## 📝 Complete File List with Exact Content

### 1. `website/package.json`

```json
{
  "name": "cursor-for-pms-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next",
    "build": "next build",
    "postbuild": "next-sitemap && npx -y pagefind --site out",
    "preview": "npx serve out -p 3000"
  },
  "dependencies": {
    "next": "14.2.5",
    "nextra": "3.2.3",
    "nextra-theme-docs": "3.2.3",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/node": "24.8.1",
    "next-sitemap": "4.2.3",
    "pagefind": "1.1.0"
  }
}
```

### 2. `website/next.config.mjs`

```javascript
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true
})

export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  basePath: '',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
})
```

### 3. `website/theme.config.tsx`

```tsx
export default {
  logo: <span style={{ fontWeight: 600 }}>Cursor for Product Managers</span>,
  project: {
    link: 'https://github.com/carlvellotti/cursor-pm-course'
  },
  docsRepositoryBase: 'https://github.com/carlvellotti/cursor-pm-course',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Cursor for Product Managers'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Cursor for Product Managers" />
      <meta property="og:description" content="Learn Cursor for PM work - an interactive course teaching AI-powered productivity" />
      <meta property="og:image" content="/og-image.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  ),
  darkMode: true,
  primaryHue: 169,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <span>
        CC BY-NC-ND 4.0 {new Date().getFullYear()} © Cursor for Product Managers
      </span>
    )
  },
  feedback: {
    content: 'Give feedback →',
    labels: 'feedback'
  },
  editLink: {
    component: null
  },
  toc: {
    backToTop: true
  }
}
```

### 4. `website/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 5. `website/next-sitemap.config.js`

```javascript
module.exports = {
  siteUrl: 'https://cursorforpms.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false
}
```

### 6. `website/pages/_app.tsx`

```tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

### 7. `website/pages/_meta.ts`

```typescript
export default {
  index: 'Home',
  'getting-started': 'Module 0: Getting Started',
  fundamentals: 'Module 1: Fundamentals',
  advanced: 'Module 2: Advanced PM Work',
  'company-context': 'TaskFlow Context',
  search: 'Search'
}
```

### 8. `website/pages/index.mdx`

**TODO:** Copy EXACT structure from ccforpms.com including:
- Hero section
- Video embed (TBD if we have one)
- "Who this is for" section
- Module breakdown
- Prerequisites
- Call-to-action buttons

### 9. `website/pages/search.mdx`

```mdx
---
title: Search
---

# Search

<div id="search"></div>

<script>
  window.addEventListener('DOMContentLoaded', () => {
    new PagefindUI({ element: "#search" });
  });
</script>
```

### 10. `website/styles/globals.css`

**EXACT copy from ccforpms.com** including:
- Google Fonts imports (Poppins, Inter, JetBrains Mono)
- CSS variables for colors
- Teal/red color scheme
- Dark mode styling
- Code block styling
- Sidebar styling (320px)
- All responsive adjustments

### 11. `website/pages/company-context/` files

Copy from root `company-context/` folder:
- `company-overview.mdx` (from COMPANY.md)
- `product-details.mdx` (from PRODUCT.md)
- `user-personas.mdx` (from PERSONAS.md)
- `competitive-landscape.mdx` (from COMPETITIVE.md)
- `_meta.ts` for navigation

---

## 🔧 Instructor Files Handling

### Problem
- Instructor files in root need to sync between computers (use git)
- But should NOT be deployed to Vercel (public site)
- GitHub repo IS public, so they'll be visible there

### Solution Options

**Option A: Keep in git, exclude from Vercel (RECOMMENDED)**

Create `vercel.json` in root:
```json
{
  "buildCommand": "cd website && npm run build",
  "outputDirectory": "website/out",
  "installCommand": "cd website && npm install"
}
```

Create `website/.vercelignore`:
```
../Instructor files/
```

**Pros:**
- ✅ Files sync via git
- ✅ Not deployed to live site
- ⚠️ Visible in GitHub repo (but repo is already public)

**Option B: Make repo private**
- Requires private GitHub repo
- Everything syncs, nothing truly public

**Option C: Separate private repo**
- Use git submodule for instructor files
- More complex setup

**DECISION:** Use Option A (same as current approach)

---

## 📦 GitHub Release Setup

### What to Include in Release ZIP

```
cursor-for-pms-v1.0.0.zip
├── .cursor/
│   ├── commands/
│   └── rules/
├── company-context/
│   ├── COMPANY.md
│   ├── PRODUCT.md
│   ├── PERSONAS.md
│   └── COMPETITIVE.md
├── lesson-modules/
│   ├── 0.1-installation/
│   ├── 0.2-open-folder/
│   ├── 1.1-welcome/
│   ├── 1.2-interface/
│   ├── 1.3-first-tasks/
│   ├── 1.4-templates-workflows/
│   ├── 1.5-three-modes/
│   ├── 1.6-project-rules/
│   ├── 2.1-write-prd/
│   ├── 2.2-analyze-data/
│   └── 2.3-product-strategy/
├── README.md
└── CLAUDE.md
```

### What to EXCLUDE
- ❌ `Instructor files/`
- ❌ `website/` (that's just for the site)
- ❌ `.git/`
- ❌ `node_modules/`
- ❌ `.DS_Store`

### Create Release

```bash
# From repo root
cd ..
zip -r cursor-for-pms-v1.0.0.zip \
  cursor-pm-course/.cursor \
  cursor-pm-course/company-context \
  cursor-pm-course/lesson-modules \
  cursor-pm-course/README.md \
  cursor-pm-course/CLAUDE.md \
  -x "*/node_modules/*" "*/.git/*" "*/Instructor files/*" "*/.DS_Store"
```

### Upload to GitHub

1. Go to https://github.com/carlvellotti/cursor-pm-course/releases
2. Click "Create a new release"
3. Tag: `v1.0.0`
4. Title: "v1.0.0 - Course Release"
5. Description:
   ```
   Complete Cursor for Product Managers course including:
   - All modules (0.1-2.3)
   - TaskFlow company context
   - Interactive teaching scripts
   - Slash commands and project rules

   Download, unzip to Documents folder, and open in Cursor to begin.
   ```
6. Attach `cursor-for-pms-v1.0.0.zip`
7. Publish

### Update Download Links

Replace `REPO-URL` in these files with actual release URL:

**Files to update:**
- `website/pages/getting-started/installation.mdx` (line 28)
- `website/pages/getting-started/opening-course-folder.mdx` (line 26)

**Replace with:**
```
https://github.com/carlvellotti/cursor-pm-course/releases/download/v1.0.0/cursor-for-pms-v1.0.0.zip
```

---

## 🚀 Deployment Steps

### Phase 1: Copy Working Website Structure (10 min)

**MUCH EASIER APPROACH:** Clone the working ccforpms website structure and replace content!

1. **Clone ccforpms repo temporarily**
   ```bash
   cd ~/Downloads
   git clone https://github.com/carlvellotti/claude-code-pm-course.git ccforpms-temp
   ```

2. **Copy entire website folder to our repo**
   ```bash
   cd /path/to/cursor-pm-course
   rm -rf website  # Remove our empty website folder
   cp -r ~/Downloads/ccforpms-temp/website ./website
   rm -rf ~/Downloads/ccforpms-temp  # Clean up
   ```

3. **Replace content with ours**
   ```bash
   cd website
   rm -rf pages/getting-started/*
   rm -rf pages/fundamentals/*
   rm -rf pages/advanced/*
   rm -rf pages/company-context/*
   ```

4. **Move our reference guides into the copied structure**
   ```bash
   # Our guides are already in website/pages/ so they should be there
   # But verify they're using the correct structure
   ```

5. **Update branding/config files** (see Phase 2 below)

**This gives us:**
- ✅ All working configs (next.config.mjs, tsconfig.json, etc.)
- ✅ All working styling (globals.css with exact colors/fonts)
- ✅ All working infrastructure (package.json, sitemap, search)
- ✅ Proven deployment setup

### Phase 2: Update Branding & URLs (10 min)

**Files to update with Cursor branding:**

1. **`website/package.json`**
   - Change `"name": "claude-code-pm-course-site"` → `"cursor-for-pms-site"`

2. **`website/theme.config.tsx`**
   - Change logo: `"Claude Code for Product Managers"` → `"Cursor for Product Managers"`
   - Change repo URLs: `claude-code-pm-course` → `cursor-pm-course`
   - Update title template: `"Claude Code for Product Managers"` → `"Cursor for Product Managers"`
   - Update meta descriptions to mention "Cursor" not "Claude Code"

3. **`website/next-sitemap.config.js`**
   - Update site URL from their domain to ours (vercel URL initially)

4. **`website/pages/index.mdx`**
   - Replace entire homepage content with Cursor course intro
   - Update all references from "Claude Code" to "Cursor"
   - Update module descriptions
   - Update prerequisites (Cursor installed, not Claude Code)

5. **`website/pages/_meta.ts`**
   - Already correct structure, just verify

6. **`website/pages/company-context/`**
   - Create these from our root `company-context/` files
   - Convert .md to .mdx
   - Add _meta.ts for navigation

### Phase 3: Test Locally (15 min)

```bash
cd website
npm install
npm run dev
```

**Checklist:**
- [ ] Site loads at localhost:3000
- [ ] Homepage displays correctly
- [ ] Navigation works (all sections accessible)
- [ ] Reference guides display properly
- [ ] Company context pages work
- [ ] Dark mode works
- [ ] Search page exists (won't work until built)
- [ ] Styling matches ccforpms.com

### Phase 4: Build & Test (10 min)

```bash
npm run build
npm run preview
```

**Checklist:**
- [ ] Build completes without errors
- [ ] Sitemap generated
- [ ] Pagefind index created
- [ ] Preview site works
- [ ] Search works on preview

### Phase 5: Git Commit & Push (5 min)

```bash
git add .
git commit -m "Add website files for Vercel deployment"
git push origin main
```

### Phase 6: Create GitHub Release (15 min)

1. Create release ZIP (exclude instructor files)
2. Upload to GitHub releases
3. Update download URLs in installation.mdx and opening-course-folder.mdx
4. Commit and push URL updates

### Phase 7: Deploy to Vercel (15 min)

```bash
# From repo root
vercel login
vercel

# Answer prompts:
# - Project name: cursor-for-pms-course
# - Directory: ./website
```

**Then in Vercel dashboard:**
1. Go to Project Settings
2. Verify Root Directory: `website`
3. Verify Build Command: `npm run build`
4. Verify Output Directory: `out`
5. Deploy to production: `vercel --prod`

### Phase 8: Post-Deployment (10 min)

**Test live site:**
- [ ] Visit vercel URL
- [ ] Test all navigation
- [ ] Test search
- [ ] Test download link
- [ ] Test on mobile
- [ ] Test dark mode

**Optional: Custom domain**
- Settings → Domains
- Add `cursorforpms.com` or whatever domain
- Update DNS records

---

## 📋 Pre-Flight Checklist

### Files Ready
- [ ] All 12 reference guides complete (✅ DONE)
- [ ] Company context files exist in root
- [ ] Interactive modules complete (1.1-2.3)
- [ ] Slash commands configured

### Website Structure
- [ ] Copy entire website/ folder from ccforpms repo
- [ ] Verify all config files are present (package.json, next.config, etc.)
- [ ] Verify our reference guides are in pages/ directories
- [ ] Create company-context/ pages from root files
- [ ] Update branding in configs

### URLs to Update
- [ ] installation.mdx download link
- [ ] opening-course-folder.mdx download link
- [ ] GitHub repo URL in theme.config.tsx
- [ ] Site URL in next-sitemap.config.js

---

## 🎯 Success Criteria

### Design Match
- ✅ Looks identical to ccforpms.com
- ✅ Same colors (teal/red)
- ✅ Same fonts (Poppins/Inter/JetBrains)
- ✅ Same layout and spacing
- ✅ Same navigation structure

### Functionality
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ Search works
- ✅ Download link works
- ✅ Mobile responsive
- ✅ Dark mode default

### Content
- ✅ All 12 reference guides accessible
- ✅ Company context pages work
- ✅ Homepage matches structure
- ✅ SEO meta tags correct

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (need 18+)
- Check all dependencies installed
- Check for TypeScript errors
- Check MDX syntax in pages

### Vercel Deployment Fails
- Verify root directory set to `website`
- Check build logs for errors
- Verify all imports resolve
- Check public assets exist

### Styling Looks Wrong
- Verify globals.css imported in _app.tsx
- Check CSS variable names match
- Verify fonts loading from Google Fonts
- Clear browser cache

### Search Not Working
- Verify Pagefind ran in postbuild
- Check for /pagefind/ directory in out/
- Verify search.mdx has correct script
- Test in production build (not dev)

---

## 📊 Estimated Timeline

**Total time:** ~1.5 hours (FASTER with copy approach!)

- Copy website structure: 10 min
- Update branding: 10 min
- Local testing: 15 min
- Build & test: 10 min
- Git push: 5 min
- Create release: 15 min
- Deploy to Vercel: 15 min
- Post-deploy testing: 10 min
- Buffer for issues: 20 min

---

## 🔄 Next Steps After Initial Deploy

1. **Test everything** on live site
2. **Share with beta testers** for feedback
3. **Monitor analytics** (if added)
4. **Update content** as needed
5. **Create Module 0 interactive scripts** (if not done)
6. **Add any missing company-context** details
7. **Consider custom domain**
8. **Set up analytics** (Google Analytics, Plausible, etc.)

---

## 📝 Notes

- This deployment matches ccforpms.com exactly in structure and design
- Instructor files remain in git but excluded from deployment
- GitHub release provides easy course file download
- Vercel handles all hosting and deployment
- Search powered by Pagefind (client-side, no backend needed)
- Static site generation for fast performance
