# Antigravity for PMs - Website Migration Plan

## Executive Summary

Clone cursorforpms.com → antigravityforpms.com with the Antigravity PM course content. The site uses Next.js/Nextra documentation framework with course delivery via GitHub releases (users download ZIP, open in Antigravity, run slash commands).

---

## Phase 1: Repository Setup

### 1.1 Create New GitHub Repo

```
Repo name: antigravity-pm-course
Structure:
├── website/                    # Nextra docs site (clone of cursorforpms.com)
│   ├── pages/
│   │   ├── index.mdx          # Homepage
│   │   ├── module-0/          # Getting Started
│   │   ├── module-1/          # Fundamentals
│   │   ├── module-2/          # Advanced PM Work
│   │   └── reference/         # Company context docs
│   ├── public/
│   │   ├── images/
│   │   └── videos/
│   ├── theme.config.tsx
│   ├── next.config.js
│   └── package.json
│
├── course-materials/           # The actual course (current folder)
│   ├── .agent/
│   ├── company-context/
│   └── lesson-modules/
│
├── releases/                   # GitHub release assets
│   └── antigravity-pm-course-v1.0.zip
│
└── README.md
```

### 1.2 Clone Cursor Website Source

**Option A:** If you have access to cursorforpms.com source code, copy it directly
**Option B:** Rebuild using Nextra template with same structure

**Recommended:** Option A if available, otherwise scaffold fresh Nextra site

---

## Phase 2: Content Swap (Cursor → Antigravity)

### 2.1 Global Find & Replace

| Find | Replace With |
|------|--------------|
| Cursor | Antigravity |
| cursor | antigravity |
| cursorforpms.com | antigravityforpms.com |
| Cursor Pro | Antigravity subscription |
| $20/month | [Antigravity pricing] |
| Cursor AI | Antigravity AI |
| Claude | [Antigravity's AI - check branding] |

### 2.2 Branding Updates

| Element | Current (Cursor) | New (Antigravity) |
|---------|------------------|-------------------|
| Logo | Cursor logo | Antigravity logo |
| Primary color | Cursor purple/blue | Antigravity brand colors |
| Favicon | cursor favicon | antigravity favicon |
| OG images | cursor social cards | antigravity social cards |
| Hero video | Cursor demo | Antigravity demo (NEW NEEDED) |

### 2.3 Feature/Concept Name Changes

| Cursor Concept | Antigravity Equivalent |
|----------------|------------------------|
| Composer | Editor view |
| Agent mode | Planning mode |
| Normal mode | Fast mode |
| .cursor/rules | .agent/rules |
| .cursorrules | .agent/rules/*.md |
| Cmd+I / Ctrl+I | [Antigravity shortcut] |
| @codebase | @Files / @Folders |

---

## Phase 3: Website Pages to Update

### 3.1 Homepage (index.mdx)

**Hero Section:**
- [ ] New headline: "Antigravity for Product Managers"
- [ ] New subheadline about Antigravity's PM capabilities
- [ ] New hero video showing Antigravity in action
- [ ] Update CTA buttons

**Who This Is For:**
- [ ] Update tool references (Antigravity not Cursor)
- [ ] Same PM audience targeting

**What You'll Learn:**
- [ ] Update feature names (Editor view, Planning mode, etc.)
- [ ] Keep PM-focused outcomes

**Module Overview:**
- [ ] Update module descriptions
- [ ] Keep same time estimates (~3 hours based on 1.1 update)
- [ ] Update module count if different

**Download CTA:**
- [ ] Link to GitHub releases for Antigravity course
- [ ] Update installation instructions

### 3.2 Module 0: Getting Started

**Pages needed:**
- [ ] `0.1-installation.mdx` - How to install Antigravity
- [ ] `0.2-setup.mdx` - Course folder setup
- [ ] `0.3-first-launch.mdx` - Opening the course

**Content changes:**
- [ ] Antigravity installation steps (different from Cursor)
- [ ] .agent folder structure explanation
- [ ] Slash command system explanation

### 3.3 Module 1: Fundamentals (6 pages)

| Page | Content Source | Key Changes |
|------|----------------|-------------|
| 1.1 Welcome | lesson-modules/1.1-welcome/ | TaskFlow intro |
| 1.2 Interface | lesson-modules/1.2-interface/ | Editor view focus |
| 1.3 First Tasks | lesson-modules/1.3-first-tasks/ | @ mentions |
| 1.4 Templates | lesson-modules/1.4-templates-workflows/ | Communication styles |
| 1.5 Planning Mode | lesson-modules/1.5-autonomy-modes/ | Planning vs Fast mode |
| 1.6 Project Rules | lesson-modules/1.6-project-rules/ | .agent/rules |

### 3.4 Module 2: Advanced PM Work (3 pages)

| Page | Content Source | Key Changes |
|------|----------------|-------------|
| 2.1 Write PRD | lesson-modules/2.1-write-prd/ | PRD workflow |
| 2.2 Analyze Data | lesson-modules/2.2-analyze-data/ | CSV analysis |
| 2.3 Product Strategy | lesson-modules/2.3-product-strategy/ | Strategic frameworks |

### 3.5 Reference Section

**Pages to create from company-context/:**
- [ ] TaskFlow Company Overview (from COMPANY.md)
- [ ] Product Details (from PRODUCT.md)
- [ ] User Personas (from PERSONAS.md)
- [ ] Competitive Landscape (from COMPETITIVE.md)

---

## Phase 4: Technical Setup

### 4.1 Domain & Hosting

- [ ] Purchase antigravityforpms.com
- [ ] Set up Vercel project (or current hosting provider)
- [ ] Configure DNS
- [ ] Set up SSL certificate

### 4.2 Analytics & Tracking

- [ ] Create new Google Analytics property
- [ ] Update GA tracking ID in site config
- [ ] Set up conversion tracking for downloads

### 4.3 GitHub Releases

- [ ] Create first release (v1.0.0)
- [ ] Attach course-materials.zip
- [ ] Write release notes

### 4.4 SEO & Social

- [ ] Update meta titles/descriptions
- [ ] Create OG images for social sharing
- [ ] Update schema.org Course markup
- [ ] Set canonical URLs

---

## Phase 5: Content Creation Needed

### 5.1 New Assets Required

| Asset | Description | Priority |
|-------|-------------|----------|
| Hero video | Screen recording of Antigravity PM workflow | HIGH |
| Logo | Antigravity for PMs logo/wordmark | HIGH |
| Favicon | Site favicon | HIGH |
| OG image | Social share card (1200x630) | MEDIUM |
| Screenshots | UI screenshots for each module page | MEDIUM |
| Module thumbnails | Visual cards for module overview | LOW |

### 5.2 Written Content Updates

| Content | Status | Notes |
|---------|--------|-------|
| Homepage copy | NEEDS UPDATE | Swap Cursor → Antigravity |
| Module descriptions | NEEDS UPDATE | Already done in SCRIPT.md files |
| Installation guide | NEEDS CREATION | Antigravity-specific |
| FAQ | NEEDS UPDATE | Antigravity-specific questions |
| About/Credits | NEEDS UPDATE | Carl Vellotti / Full Stack PM |

---

## Phase 6: Quality Assurance

### 6.1 Pre-Launch Checklist

- [ ] All Cursor references removed
- [ ] All links working (no 404s)
- [ ] GitHub release downloads working
- [ ] Course ZIP extracts correctly
- [ ] Slash commands work in Antigravity
- [ ] Mobile responsive
- [ ] Dark/light mode working
- [ ] Analytics tracking

### 6.2 Course Testing

- [ ] Run through Module 1.1 → 1.6 in Antigravity
- [ ] Run through Module 2.1 → 2.3 in Antigravity
- [ ] Verify all file references work
- [ ] Verify CSV data analysis works
- [ ] Test on fresh Antigravity install

---

## Phase 7: Launch

### 7.1 Soft Launch

1. Deploy to antigravityforpms.com
2. Test with 2-3 beta users
3. Collect feedback
4. Fix issues

### 7.2 Public Launch

1. Announce on LinkedIn
2. Post in Full Stack PM community
3. Share on Twitter/X
4. Email newsletter announcement

---

## Migration Checklist Summary

### Repository
- [ ] Create antigravity-pm-course repo
- [ ] Copy/scaffold Nextra website
- [ ] Copy course-materials folder
- [ ] Create initial GitHub release

### Content
- [ ] Global find/replace (Cursor → Antigravity)
- [ ] Update all concept names (Composer → Editor, etc.)
- [ ] Update homepage content
- [ ] Update/create Module 0 pages
- [ ] Update Module 1 pages
- [ ] Update Module 2 pages
- [ ] Create Reference section pages

### Assets
- [ ] Create hero video
- [ ] Create logo/favicon
- [ ] Create OG images
- [ ] Take screenshots

### Technical
- [ ] Purchase domain
- [ ] Set up hosting
- [ ] Configure analytics
- [ ] Set up GitHub releases

### Testing
- [ ] Full course walkthrough
- [ ] Link checking
- [ ] Mobile testing
- [ ] Cross-browser testing

---

## Questions to Resolve

1. **Do you have the cursorforpms.com source code?** If yes, direct clone is fastest. If no, we scaffold fresh.

2. **Antigravity branding assets?** Do you have official logo, colors, etc. or creating custom "Antigravity for PMs" branding?

3. **Antigravity installation process?** Need to document how users install/access Antigravity (different from Cursor).

4. **Pricing model?** Is the course free like Cursor version? Any premium tiers planned?

5. **Hero video?** Will you record a new demo video or use screenshots initially?

6. **Module 3 (Nano Banana)?** The Cursor site has a Module 3 for visual design. Do you want this for Antigravity? (You mentioned Nano Banana Pro in 1.5 and 1.6)

---

## Estimated Timeline

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Repo Setup | 1 day | Source code access |
| Phase 2: Content Swap | 1-2 days | None |
| Phase 3: Page Updates | 2-3 days | Content decisions |
| Phase 4: Technical Setup | 1 day | Domain purchase |
| Phase 5: Asset Creation | 2-3 days | Video recording |
| Phase 6: QA | 1-2 days | All above complete |
| Phase 7: Launch | 1 day | QA passed |

**Total: ~10-14 days** (can be compressed with parallel work)

---

## Next Steps

1. **Answer the questions above** (source code, branding, etc.)
2. **Create the GitHub repo**
3. **Start with Phase 1-2** (repo setup + content swap)
4. **Parallel: Create assets** (video, logo, screenshots)
5. **Deploy and test**
6. **Launch!**
