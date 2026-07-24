# GitHub Releases Distribution Plan

> **Superseded (2026-07):** Course delivery moved to the FSPM CLI (fullstackpm.com catalog). GitHub Releases are no longer the distribution mechanism. This document is kept for historical reference only - do not implement from it.

## Executive Summary

Implement GitHub Releases as the distribution mechanism for course materials. This allows versioned course downloads, clean separation of marketing site from course content, and standard open-source distribution practices.

**Key Decision:** Make repository PUBLIC to enable simple, no-auth-required downloads via GitHub Releases.

---

## Current State

```
claude-code-pm-course/          # Private GitHub repo
├── website/                    # Nextra docs site (deployed to ccforpms.com)
│   ├── pages/
│   ├── public/
│   ├── theme.config.tsx
│   └── package.json
├── lesson-modules/             # Interactive course modules (in root)
│   ├── module-0-0.md
│   ├── module-1-1.md
│   └── ...
├── company-context/            # TaskFlow reference materials
│   ├── overview.md
│   ├── product.md
│   └── ...
├── .claude/                    # Slash commands for course
│   └── commands/
└── README.md
```

**Issues:**
- Course materials scattered in root directory
- No clear distribution mechanism for students
- Repository is private (limits discoverability and trust)

---

## Proposed Structure

### File Organization

```
claude-code-pm-course/          # PUBLIC GitHub repo
├── website/                    # Nextra docs site → ccforpms.com
│   ├── pages/
│   ├── public/
│   │   ├── images/
│   │   ├── sitemap.xml
│   │   └── robots.txt
│   ├── theme.config.tsx
│   └── package.json
├── course-materials/           # ← NEW: Everything students need
│   ├── lesson-modules/         # Move from root
│   │   ├── module-0-0.md
│   │   ├── module-1-1.md
│   │   └── ...
│   ├── company-context/        # Move from root
│   │   ├── overview.md
│   │   ├── product.md
│   │   └── ...
│   ├── .claude/                # Move from root
│   │   └── commands/
│   └── README.md               # Instructions for students
├── docs/                       # Internal documentation
│   ├── SEO_IMPLEMENTATION_SPEC.md
│   └── GITHUB_RELEASES_PLAN.md
├── .gitignore
├── LICENSE                     # CC BY-NC-ND 4.0
└── README.md                   # Repo README (for developers/contributors)
```

---

## GitHub Releases Strategy

### Release Structure

**v1.0.0 - Course Launch**
```
Release Assets:
├── complete-course.zip         # All modules (0-2) + context + .claude
├── module-0-getting-started.zip    # Just Module 0 + shared files
├── module-1-fundamentals.zip       # Just Module 1 + shared files
└── module-2-advanced.zip           # Just Module 2 + shared files
```

### What Gets Zipped

**complete-course.zip:**
```
course-materials/
├── lesson-modules/
├── company-context/
├── .claude/
└── README.md
```

**module-0-getting-started.zip:**
```
module-0/
├── lesson-modules/module-0-*.md
├── company-context/            # Shared across all modules
├── .claude/                    # Shared across all modules
└── README.md
```

**module-1-fundamentals.zip:**
```
module-1/
├── lesson-modules/module-1-*.md
├── company-context/
├── .claude/
└── README.md
```

---

## Implementation Plan

### Phase 1: Restructure Repository (1 hour)

**Tasks:**
1. Create `course-materials/` directory
2. Move `lesson-modules/` → `course-materials/lesson-modules/`
3. Move `company-context/` → `course-materials/company-context/`
4. Move `.claude/` → `course-materials/.claude/`
5. Create `course-materials/README.md` with student instructions
6. Update root `.gitignore` if needed
7. Test that website still builds (`npm run build` in website/)

**Commands:**
```bash
mkdir course-materials
mv lesson-modules course-materials/
mv company-context course-materials/
mv .claude course-materials/
```

**Files to update:**
- Any references to old paths (likely none, but verify)
- Module 0.2 instructions (update in future commit)

---

### Phase 2: Create Release Script (30 minutes)

Create `scripts/create-release.sh`:

```bash
#!/bin/bash
# Creates course material zips for GitHub Release

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: ./scripts/create-release.sh v1.0.0"
  exit 1
fi

echo "Creating release zips for $VERSION..."

# Create temp directory
mkdir -p releases

# Create complete course zip
cd course-materials
zip -r ../releases/complete-course.zip . -x "*.DS_Store"
cd ..

# Create module-specific zips
# Module 0
mkdir -p releases/module-0
cp -r course-materials/company-context releases/module-0/
cp -r course-materials/.claude releases/module-0/
mkdir releases/module-0/lesson-modules
cp course-materials/lesson-modules/module-0-*.md releases/module-0/lesson-modules/
cp course-materials/README.md releases/module-0/
cd releases/module-0
zip -r ../module-0-getting-started.zip . -x "*.DS_Store"
cd ../..

# Module 1
mkdir -p releases/module-1
cp -r course-materials/company-context releases/module-1/
cp -r course-materials/.claude releases/module-1/
mkdir releases/module-1/lesson-modules
cp course-materials/lesson-modules/module-1-*.md releases/module-1/lesson-modules/
cp course-materials/README.md releases/module-1/
cd releases/module-1
zip -r ../module-1-fundamentals.zip . -x "*.DS_Store"
cd ../..

# Module 2
mkdir -p releases/module-2
cp -r course-materials/company-context releases/module-2/
cp -r course-materials/.claude releases/module-2/
mkdir releases/module-2/lesson-modules
cp course-materials/lesson-modules/module-2-*.md releases/module-2/lesson-modules/
cp course-materials/README.md releases/module-2/
cd releases/module-2
zip -r ../module-2-advanced.zip . -x "*.DS_Store"
cd ../..

# Cleanup temp directories
rm -rf releases/module-0 releases/module-1 releases/module-2

echo "✅ Release zips created in releases/ directory:"
ls -lh releases/

echo ""
echo "Next steps:"
echo "1. Review zips in releases/ directory"
echo "2. Create GitHub release: gh release create $VERSION releases/*.zip"
```

**Make executable:**
```bash
chmod +x scripts/create-release.sh
```

**Add to .gitignore:**
```
# Release artifacts
releases/
*.zip
```

---

### Phase 3: Create First Release (15 minutes)

**Steps:**

1. **Generate release zips:**
```bash
./scripts/create-release.sh v1.0.0
```

2. **Verify zips look correct:**
```bash
unzip -l releases/complete-course.zip
unzip -l releases/module-0-getting-started.zip
```

3. **Create GitHub release:**
```bash
gh release create v1.0.0 \
  releases/complete-course.zip \
  releases/module-0-getting-started.zip \
  releases/module-1-fundamentals.zip \
  releases/module-2-advanced.zip \
  --title "v1.0.0 - Course Launch" \
  --notes "Initial release of Claude Code for Product Managers course.

**What's Included:**
- Module 0: Getting Started (Installation, setup)
- Module 1: Fundamentals (File operations, agents, sub-agents, project memory)
- Module 2: Advanced PM Work (PRDs, data analysis, product strategy)

**Download Options:**
- \`complete-course.zip\` - All modules (recommended for most students)
- \`module-0-getting-started.zip\` - Just Module 0 (try before you commit)
- \`module-1-fundamentals.zip\` - Just Module 1
- \`module-2-advanced.zip\` - Just Module 2

**Getting Started:**
1. Download \`complete-course.zip\`
2. Unzip and navigate to the folder
3. Run \`claude\` in the course-materials directory
4. Type \`/start-0-0\` to begin

Full documentation: https://ccforpms.com"
```

4. **Make repo public:**
```bash
# Via GitHub CLI
gh repo edit --visibility public

# Or via GitHub web UI:
# Settings → Danger Zone → Change visibility → Make public
```

---

### Phase 4: Update Module 0.2 Instructions (15 minutes)

**Update:** `website/pages/getting-started/start-and-clone.mdx`

Change from:
```markdown
git clone https://github.com/carlvellotti/claude-code-pm-course
cd claude-code-pm-course
```

To:
```markdown
## Download Course Materials

**Option 1: Direct Download (Recommended)**

```bash
# Download the complete course
curl -L https://github.com/carlvellotti/claude-code-pm-course/releases/latest/download/complete-course.zip -o course.zip

# Unzip it
unzip course.zip

# Navigate to course materials
cd course-materials

# Start Claude Code
claude
```

**Option 2: Git Clone (Advanced)**

If you're comfortable with Git and want to pull updates:

```bash
git clone https://github.com/carlvellotti/claude-code-pm-course
cd claude-code-pm-course/course-materials
claude
```

**What's Next?**

Once Claude Code is running in the `course-materials/` directory, type:
```
/start-1-1
```

This kicks off the interactive course!
```

---

### Phase 5: Update Website Download Links (15 minutes)

**Update:** `website/pages/index.mdx`

Add download section:
```markdown
## Get Started

**👉 [Download Course Materials](https://github.com/carlvellotti/claude-code-pm-course/releases/latest/download/complete-course.zip)** (Latest: v1.0.0)

**👉 [Installation Guide](/getting-started/installation)** - Install Claude Code in 15 minutes

**👉 [Start the Course](/getting-started/start-and-clone)** - Download materials and begin
```

---

## Student Experience

### Happy Path

**Step 1: Student visits ccforpms.com**
- Reads about the course
- Clicks "Download Course Materials"

**Step 2: Downloads complete-course.zip**
```bash
curl -L https://github.com/carlvellotti/claude-code-pm-course/releases/latest/download/complete-course.zip -o course.zip
```

**Step 3: Unzips and navigates**
```bash
unzip course.zip
cd course-materials
```

**Step 4: Starts Claude Code**
```bash
claude
```

**Step 5: Begins course**
```
/start-0-0
```

---

## Future: Multiple Releases

### Example: Mini-Course Strategy

**v1.0.0 - Full Course (Current)**
- Modules 0-2
- Complete PM workflow

**v2.0.0 - Data Analysis Deep Dive**
- Expanded Module 2.2 content
- Additional datasets and exercises
- Advanced analytics techniques

**v3.0.0 - API Integration Course**
- New Module 3
- Custom integrations
- MCP servers

**Students choose which release to download based on their interests.**

---

## Migration Checklist

### Pre-Migration
- [ ] Backup current repo state
- [ ] Verify website builds successfully
- [ ] Verify all slash commands work

### Migration
- [ ] Create `course-materials/` directory
- [ ] Move `lesson-modules/`, `company-context/`, `.claude/` into it
- [ ] Create `course-materials/README.md`
- [ ] Create `scripts/create-release.sh`
- [ ] Update `.gitignore` to ignore `releases/` and `*.zip`
- [ ] Commit restructure: "Reorganize course materials for GitHub Releases distribution"
- [ ] Push to main

### First Release
- [ ] Run `./scripts/create-release.sh v1.0.0`
- [ ] Verify all zips contain expected files
- [ ] Create GitHub release with all 4 zips
- [ ] Make repository public
- [ ] Verify release downloads work (test the curl command)

### Website Updates
- [ ] Update Module 0.2 (`start-and-clone.mdx`) with new download instructions
- [ ] Update homepage with download links
- [ ] Test download links on live site
- [ ] Update any other references to cloning the repo

### Testing
- [ ] Download `complete-course.zip` as a student would
- [ ] Unzip and verify structure
- [ ] Run `claude` and verify `/start-0-0` works
- [ ] Test module-specific zips work correctly

---

## Rollback Plan

If something goes wrong:

**Option 1: Revert commit**
```bash
git revert HEAD
git push
```

**Option 2: Delete release and make repo private**
```bash
gh release delete v1.0.0
gh repo edit --visibility private
```

**Option 3: Keep releases but fix issues**
- Create v1.0.1 with fixes
- Update website links to point to v1.0.1

---

## Benefits of This Approach

✅ **No Git bloat** - Zips stored by GitHub, not in repo
✅ **Clean versioning** - v1.0.0, v1.1.0, v2.0.0
✅ **Simple downloads** - One curl command, no auth
✅ **Flexible distribution** - Complete course or individual modules
✅ **Standard practice** - How open source projects distribute
✅ **Fast downloads** - GitHub's CDN
✅ **Professional** - Feels like a real product
✅ **SEO boost** - Public repo ranks better
✅ **Trust building** - Open source = transparency

---

## Risks & Mitigations

**Risk: Someone forks and resells**
- **Mitigation:** CC BY-NC-ND 4.0 license prohibits commercial use
- **Reality:** People who would steal wouldn't pay anyway
- **Opportunity:** Forks = more visibility and credibility

**Risk: Course materials copied elsewhere**
- **Mitigation:** Your brand (ccforpms.com) is the canonical source
- **Reality:** Content is already visible on website anyway
- **Opportunity:** More people discover and link to you

**Risk: Website source code exposed**
- **Mitigation:** It's just a Nextra site, nothing proprietary
- **Reality:** All documentation sites are open source
- **Opportunity:** Community can contribute improvements via PRs

---

## Timeline

**Total time: ~2.5 hours**

- Phase 1: Restructure repo (1 hour)
- Phase 2: Create release script (30 min)
- Phase 3: First release (15 min)
- Phase 4: Update Module 0.2 (15 min)
- Phase 5: Update website links (15 min)
- Testing: (15 min)

**Can be done in one session.**

---

## Success Criteria

- [ ] Course materials are in `course-materials/` directory
- [ ] Website still builds and deploys correctly
- [ ] v1.0.0 release exists with 4 downloadable zips
- [ ] Repository is public
- [ ] Download links on website work
- [ ] Students can download, unzip, and run `/start-0-0` successfully
- [ ] All slash commands work from `course-materials/` directory

---

## Next Steps After Implementation

1. **Monitor downloads:** Check GitHub Insights → Traffic → Popular content
2. **Gather feedback:** Ask early students about download experience
3. **Plan v1.0.1:** Bug fixes, typo corrections
4. **Plan v2.0.0:** New modules or expanded content
5. **Consider automation:** GitHub Actions to auto-create releases on tag push

---

## Questions & Answers

**Q: Can we undo this if it doesn't work?**
**A:** Yes - just revert the commit and delete the release.

**Q: What if students want updates?**
**A:** Re-download latest release, or use git pull if they cloned.

**Q: How do we handle bug fixes?**
**A:** Release v1.0.1 with fixes, update website links to point to latest.

**Q: Can we add paid content later?**
**A:** Yes - create a separate private repo for paid modules, or host paid downloads elsewhere.

**Q: Will this work with the current slash commands?**
**A:** Yes - `.claude/` moves with course materials, all commands work from `course-materials/` directory.

---

## Related Documentation

- SEO Implementation: `docs/SEO_IMPLEMENTATION_SPEC.md`
- GitHub Releases Docs: https://docs.github.com/en/repositories/releasing-projects-on-github
- Vercel Deployment: `website/VERCEL_SETTINGS.md`

---

**Ready for review. Please approve or suggest changes before implementation.**
