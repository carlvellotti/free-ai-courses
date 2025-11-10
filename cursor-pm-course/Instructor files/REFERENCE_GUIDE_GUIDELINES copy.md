# Reference Guide Writing Guidelines
## Quick, Direct, Actionable Reference Material

**Last Updated:** November 9, 2024
**Purpose:** Create concise reference guides that supplement the interactive modules

> **Key principle:** These are QUICK REFERENCE SUPPLEMENTS, not comprehensive tutorials. The interactive modules teach. These guides help people look things up quickly.

---

## 🎯 Core Principles

### 1. **Start with the Thing Immediately**
No preamble. No "what is X" philosophy. If it's an installation guide, start with installation steps in the first section after the header.

**Bad:**
```markdown
## What is Cursor?
Cursor is an AI-powered IDE that transforms how Product Managers...
[300 words of philosophy]

## Why Cursor for PMs?
[200 words of motivation]

## Installation
...
```

**Good:**
```markdown
## Installation

1. Download Cursor from cursor.com
2. Open the .dmg file...
```

### 2. **Quick Reference Format**
Use tables, lists, and code blocks. Less prose, more scannable formats.

**Target length:** 800-1,500 words MAX (not 3,000+)

### 3. **Assume Interactive Context**
Readers are either:
- Looking something up during the interactive module
- Need troubleshooting help
- Want to refresh their memory later

They DON'T need concept explanations (that's in the interactive module).

---

## 📋 Required Structure

Every reference guide must have these sections (IN THIS ORDER):

### Header Block
```markdown
---
title: "X.Y: [Module Title]"
description: "[One line description]"
keywords: '[relevant, search, keywords]'
---

# Module X.Y: [Title]
## Reference Guide

**Last Updated:** [Date]
**Time to Complete:** [Interactive module time]
**Prerequisites:** [Brief list]

---
```

Keep it minimal. No motivational text.

---

### 1. Overview (1-2 sentences max)

```markdown
## 📖 Overview

[1-2 sentences explaining what this module covers]

**Key takeaway:** [Single sentence]
```

**That's it.** No multi-paragraph explanations. If they want context, that's in the interactive module.

---

### 2. Core Content Sections

**Jump straight to the actionable content:**

**For Setup/Installation Modules:**
```markdown
## Installation Steps

### Mac
1. Step
2. Step
3. Step

### Windows
1. Step
2. Step
3. Step
```

Use tables for comparisons, code blocks for commands, numbered lists for steps.

**For Feature Modules:**
```markdown
## How to Use X

[Brief explanation]

[Example command or usage]

## When to Use X

| Scenario | Use X |
|----------|-------|
| ... | ... |
```

**For Workflow Modules:**
```markdown
## Workflow

1. **Step 1:** Do this
2. **Step 2:** Do that
3. **Step 3:** Final step

## Quick Example

[Concrete example with TaskFlow context]
```

**Keep it SHORT.** 2-3 paragraphs per section MAX.

---

### 3. Quick Reference (if needed)

Tables or lists for fast lookup:

```markdown
## Quick Reference

| Command | What it does |
|---------|-------------|
| ... | ... |
```

Or:

```markdown
## Key Shortcuts

- **Cmd+I** - Open Composer
- **Cmd+K** - Inline edit
```

---

### 4. Troubleshooting (3-4 issues only)

```markdown
## 🐛 Troubleshooting

### "Error message"
**Fix:** Brief 1-2 sentence solution

### "Another common issue"
**Fix:** Brief solution
```

**Keep it to 3-4 most common issues.** No wall of text. If the fix is more than 3 steps, it's too detailed.

---

### 5. Resources (Brief links)

```markdown
## 📚 Resources

**Official:**
- [Link] - One-line description

**Community:**
- [Link] - One-line description
```

**CRITICAL RULES FOR LINKS:**
- **VERIFY EVERY LINK** - Do not hallucinate URLs. If you're not 100% certain a URL exists, DO NOT include it.
- **Only include USEFUL links** - Don't add links just to hit a number. 2-3 genuinely helpful links > 8 mediocre ones.
- **Prefer official docs** - Cursor official documentation, forums, GitHub
- **Skip generic links** - Don't link to "reddit.com/r/ProductManagement" just to have a link
- **Test before including** - If you can't verify the link works, leave it out

**3-8 links MAX** (fewer is fine if that's all that's useful).

---

### 6. What's Next (Required)

```markdown
## 🚀 What's Next?

**Module X.Y complete:**
- ✅ Thing you learned
- ✅ Another thing

**Next: Module X.Z**

[One sentence about what's coming]

**[Go to Module X.Z →](link)**
```

**Keep it to 3-4 bullet points.** No long summaries.

---

## ✍️ Writing Style

### Voice & Tone

- **Direct and actionable** (not conversational essays)
- **Professional but friendly** (colleague sharing notes, not a textbook)
- **Minimal motivation** (assume they're already motivated)
- **No philosophical preambles** (get to the point)

### Language

- **Active voice:** "Click the button" not "The button should be clicked"
- **Second person:** Use "you"
- **Present tense:** "Cursor opens" not "Cursor will open"
- **Plain English:** No jargon without definition

### Formatting

- **Bold** for key terms and emphasis
- **Code blocks** for commands and file paths
- **Tables** for comparisons and quick reference
- **Lists** for steps and features (much better than paragraphs)
- **Callouts** sparingly (only for critical info)

**Callout format:**
```markdown
> ⚠️ **Important:** Brief critical info here
```

---

## 🎨 Content Depth Guidelines

### How Much to Include?

**Installation/Setup modules:** 800-1,200 words
- Focus on steps and troubleshooting
- Platform-specific instructions
- Common errors and fixes

**Feature/Concept modules:** 1,000-1,500 words
- Brief concept explanation
- Usage examples
- When to use it
- Quick reference

**Workflow modules:** 1,200-1,800 words
- Step-by-step workflow
- Example with TaskFlow
- Variations
- Quick tips

**NEVER exceed 2,000 words.** If you're hitting that, you're including too much.

---

## ❌ What NOT to Include

### Cut These Entirely:

1. **"What is X?" philosophical sections** - The interactive module covers this
2. **"Why X matters" motivation** - They're already in the course
3. **Comparisons to other tools** (unless directly relevant to a decision)
4. **Extensive background context** - Keep it minimal
5. **"Pro Tips" sections** - Include in best practices if needed, otherwise skip
6. **Long persona descriptions** - Brief mention only
7. **Detailed examples** (more than 1-2) - Interactive module has these
8. **Instructor notes or encouragement** - Save for interactive
9. **Extensive community resources** - 5-8 links max
10. **Long troubleshooting sections** - 3-4 issues max

### Keep These Minimal:

1. **Overview** - 1-2 sentences only
2. **Best practices** - Quick do/don't list (5-7 items total)
3. **Examples** - 1-2 max, brief
4. **Context** - Just enough to orient, no essays

---

## ✅ Quality Checklist

Before publishing, verify:

### Length
- [ ] Under 1,500 words (under 2,000 absolute max)
- [ ] No section longer than 3-4 paragraphs
- [ ] More tables/lists than prose

### Structure
- [ ] Starts immediately with actionable content (no preamble)
- [ ] Header block with metadata
- [ ] Brief 1-2 sentence overview
- [ ] Core content (setup/usage/workflow)
- [ ] 3-4 troubleshooting items
- [ ] 5-8 resource links
- [ ] What's next section

### Writing
- [ ] Direct and actionable (not essays)
- [ ] No motivational fluff
- [ ] No "what is X" philosophy sections
- [ ] Tables and lists for quick scanning
- [ ] Platform-specific where needed

### Accuracy
- [ ] All commands/steps tested
- [ ] Links work
- [ ] Examples use TaskFlow context

---

## 📊 Before/After Example

### ❌ TOO LONG (Old Style)

```markdown
## What is Cursor?

Cursor is an AI-powered IDE that transforms how Product Managers work.
Unlike traditional coding tools, Cursor combines a familiar text editor
interface with powerful AI assistance...

[300 words of explanation]

### Why Cursor for PMs?

Most people think Cursor is just for coding, but it's actually exceptional
for Product Management work...

[200 words]

### Cursor vs Other Tools

You might be wondering how Cursor compares to other tools...

[400 words with comparison table]

### Installation

Now that you understand what Cursor is, let's get it installed...

1. Download...
```

**Total: 900+ words BEFORE getting to installation**

---

### ✅ GOOD (Direct Style)

```markdown
## 📖 Overview

Install Cursor on Mac or Windows in under 10 minutes.

**Key takeaway:** Download the installer from cursor.com, run it, create an account.

---

## Installation

### Mac

1. Download `.dmg` from [cursor.com](https://cursor.com)
2. Open the file and drag to Applications
3. Launch Cursor from Applications folder

### Windows

1. Download `.exe` from [cursor.com](https://cursor.com)
2. Run the installer
3. Launch from Start menu

---

## First Launch

1. Choose your theme
2. Create account (email + password)
3. No credit card needed for 14-day Pro trial

**Student?** Get 1 year free at [cursor.com/students](https://cursor.com/students)

---

## 🐛 Troubleshooting

### "Cursor won't open on Mac"
**Fix:** System Preferences → Security & Privacy → Open Anyway

### "Pro trial not activated"
**Fix:** Verify email, restart Cursor

### "Can't verify email"
**Fix:** Check spam, resend from Settings → Account

---

## 📚 Resources

- [Cursor Docs](https://docs.cursor.com) - Official documentation
- [Cursor Forum](https://forum.cursor.com) - Community support

**Note:** Only 2 links here because that's all that's genuinely useful. Don't add fluff.

---

## 🚀 What's Next?

**Module 0.1 complete:**
- ✅ Cursor installed
- ✅ Account created
- ✅ Pro trial activated

**Next: Module 0.2 - Opening Course Folder**

**[Go to Module 0.2 →](link)**
```

**Total: ~300 words**

---

## 💡 Key Takeaways

1. **Start with the thing** - No preamble, no philosophy
2. **800-1,500 words max** - Be ruthless about cutting
3. **Tables and lists > prose** - Make it scannable
4. **3-4 troubleshooting items** - Most common only
5. **Assume interactive context** - This supplements, doesn't replace
6. **Brief resources** - 3-8 links, one-line descriptions, VERIFIED ONLY
7. **No motivation or encouragement** - Save for interactive

**Remember:** These are QUICK REFERENCE guides, not tutorials. If someone wants to learn from scratch, they do the interactive module. If they want to look something up fast, they use this.

---

## 🚨 Link Policy

**DO NOT HALLUCINATE LINKS.** This is critical.

When adding resources:
1. **Only include links you can verify exist** - Use WebFetch to check if uncertain
2. **Prefer official Cursor links** - docs.cursor.com, cursor.com, forum.cursor.com
3. **Skip if you're guessing** - Better to have 2 verified links than 8 that might be fake
4. **Common verified links:**
   - https://cursor.com - Official site
   - https://docs.cursor.com - Official docs
   - https://forum.cursor.com - Official forum
   - https://discord.gg/cursor - Official Discord (verify this exists)
   - https://github.com/getcursor/cursor - Official GitHub (if it exists)

**DO NOT include:**
- Links to documentation sections that might not exist (e.g., docs.cursor.com/features/specific-thing)
- YouTube channels you're not certain about
- Community resources you're making up
- Generic "helpful" sites that aren't actually specific to Cursor

**Test:** Can someone solve their problem in under 2 minutes of reading? If not, it's too long.
