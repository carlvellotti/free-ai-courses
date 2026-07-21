---
name: start-skills-3
description: "Use when the student types /start skills 3. This skill starts Lesson 3 of the Skills module — a hands-on tour of advanced techniques that make skills more powerful: progressive disclosure, tools, skills that ask, self-improvement, and composition. The user might say 'start skills lesson 3', 'lesson 3', 'advanced techniques', or 'start skills 3'."
---

## Setup

At the start of this lesson, read `.agents/skills/_shared/teaching-rules.md` and follow it for everything you do in this lesson.

Then silently run this command (do not show the output to the student):

```bash
mkdir -p meetings && cp -n .agents/skills/start-skills-3/assets/meetings/*.md meetings/ 2>/dev/null || true
```

The demo skills for this lesson — write-proposal, convert-doc, process-meetings-plus, standup, writing-voice, draft-and-humanize, draft-followups, humanizer — are part of this course workspace and live in `.agents/skills/`. They have been available in the slash palette since this thread started. There is nothing to install or deploy.

---

# Lesson 3: Advanced Techniques

## Opening

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  L3 · ADVANCED TECHNIQUES

  Basic skill:
  └── SKILL.md           "do the thing"

  Advanced skill:
  ├── SKILL.md           orchestrator
  ├── template.md        reference
  ├── examples/          calibration
  └── corrections/       memory

  "Any sufficiently advanced technology is
   indistinguishable from magic."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Last lesson you saw the five types of skills. Now we're going to cover the techniques that make them genuinely powerful.

**Lesson 3: Advanced Techniques**

Tell the student: this lesson is where skills go from "that's convenient" to "that changes how I work." We're covering the techniques that turn a simple SKILL.md into a real system. Here's what we'll do:

- Learn the folder architecture that makes everything else possible
- Connect skills to external tools like pandoc and CLIs
- Build skills that ask you questions and remember your answers
- See skills that learn from your feedback and chain together into pipelines

These techniques layer on top of each other. By the end of this lesson, you'll see how a single skill can combine several of them to do things that would be impossible with just a SKILL.md file alone.

There are five big ideas, and the first one is the foundation for all the rest. What do you think makes a skill more than just a saved prompt?

React to their answer. Whatever they say, connect it to the idea that skills need structure beyond a single file. That's exactly where we're starting.

---

## **Big Idea 1: The Folder Architecture (Progressive Disclosure)**

Remind the student: in L1 we pointed out that skills are folders, not just files. That's about to matter a lot.

Most simple skills are just a SKILL.md file. Instructions in, output out. But the moment a skill needs reference material — a template, examples, a style guide — you don't want to shove all of that into the SKILL.md.

**The SKILL.md should be the orchestration. Everything else lives in the folder.** This pattern is called **progressive disclosure** — I only load what I need, when I need it.

Show this graphic:

```
Basic Skill                    Skill with Progressive Disclosure
─────────────                  ──────────────────────────────────
write-proposal/                write-proposal/
└── SKILL.md                   ├── SKILL.md          ← orchestrator
    (everything                ├── template.md       ← reference doc
     lives here)               └── examples/
                                   └── past-work.md  ← sample output
```

On the left, everything is crammed into one file. On the right, the SKILL.md orchestrates, and reference material lives alongside it in the folder.

**Take a look at the `/write proposal` skill:**

`.agents/skills/write-proposal/SKILL.md`

Present the SKILL.md as a clickable link (never link the folder itself — folder links open in Finder, and dot-folders are hidden in the Files drawer until a file inside them is opened). Tell them: once it opens, the whole write-proposal folder appears in the side panel next to it. Never suggest commands for exploring files — just give the link. Ask them what they see in the folder.

React to their answer. Walk through what's in the folder:
- **SKILL.md** — instructions (how to write a proposal, what tone, what structure)
- **template.md** — the structure every proposal should follow
- **examples/** — a real past proposal for tone and depth calibration

When I run this skill, I read the SKILL.md first for instructions, then pull in the template and check examples if relevant. Codex only carries each skill's name and description around by default — the full SKILL.md loads when the skill is actually used, and the reference files only when they're read. A 20-page style guide in the folder costs zero tokens until I actually read it.

Point out: the SKILL.md gives me the goal and reference material, but doesn't dictate every single step. Good skills give enough information to do the job well, with enough flexibility to adapt.

**Let's run it. Give me a topic for a proposal — anything you'd actually need to propose at work:**

`/write proposal` followed by your topic

After the output, point out how the template shaped the structure and the example calibrated the depth and tone. Three files, each doing a different job.

Ask: **"When would a skill need this kind of structure versus being fine as a single file?"**

React to their answer. The test is simple:
- **Single file is fine** when everything is instruction logic — "do this, then this, check for that"
- **Folder architecture** when you're embedding reference data — examples, templates, style guides, large rule sets
- **The test:** if you could remove a chunk from the SKILL.md and the logic still makes sense, that chunk is reference material and belongs in its own file

Ask if they're ready for the next technique.

---

## **Big Idea 2: Skills That Use Tools**

Skills can do more than generate text — they can use external tools. CLIs, scripts, APIs, anything installed on your system. You never have to touch these tools yourself — I run the commands, you stay in the thread.

Tools give me the *ability* to do things. Skills tell me *how to do them well.*

```
Tools give Codex abilities          Skills say how to use them
─────────────────────────           ──────────────────────────
pandoc        → convert docs        /convert doc  → with THIS template
git           → version control     /sync github  → in THIS sequence
Stripe CLI    → billing             /stripe invoice → with THESE defaults
web search    → find info           /web research → in THIS workflow
```

For this demo, we need pandoc installed. Check if it's available by silently running `which pandoc` (and check for a PDF engine with `which weasyprint wkhtmltopdf`). If pandoc is not installed, tell the student: "For this next demo, we need to install a tool called pandoc. It's a free command-line tool that converts documents between formats — markdown to PDF, HTML to Word, that kind of thing. It's one of the most popular document conversion tools out there. Mind if I install it?" (Use the install method that fits their system — `brew install pandoc` on macOS, `winget install pandoc` on Windows.) Wait for their permission before installing. Same deal if there's no PDF engine — ask before installing weasyprint.

Pandoc takes documents in one format and converts them to another:

```
markdown ─┐
HTML      ─┤──→ [ pandoc ] ──→ PDF, Word, HTML, etc.
LaTeX     ─┘
```

**Take a look at the `/convert doc` skill** — present `.agents/skills/convert-doc/SKILL.md` as a clickable link (not the folder), so the folder shows up in the side panel:

```
convert-doc/
├── SKILL.md              ← instructions (use pandoc with these flags)
└── templates/
    ├── clean-report.css  ← Professional style
    ├── fun.css           ← Fun style (bright, playful)
    └── whimsical.css     ← Whimsical style (elegant serif)
```

The SKILL.md is the orchestrator — it tells me to use pandoc with specific options. The templates/ folder has three CSS styles that control how the output looks. Same progressive disclosure pattern: the CSS sits in the folder, costs nothing until I actually need it.

Without the skill, if you said "convert this to PDF," I'd run pandoc with generic defaults. The skill says "run pandoc with THIS template, THESE margins, THIS font." Consistent, polished output every time.

**Let's run it on the example proposal from the last section:**

`/convert doc .agents/skills/write-proposal/examples/api-integration-q1.md`

It will ask which style you want — Professional, Fun, or Whimsical, as an A/B/C menu. Pick one and see what comes out.

After it converts, open the result for the student so the styled PDF pops up (`open` on macOS, `start` on Windows).

After the demo, point out: same file, but the output is polished because the skill encoded the how. The template, the margins, the fonts — all specified by the skill, all stored in the folder.

Ask if they're ready for the next technique.

---

## **Big Idea 3: Skills That Ask**

Skills can do more than execute — they can stop mid-thread and ask you questions. There's no special machinery behind this: the SKILL.md just tells me when to pause, what to ask, and what to do with your answer. I put the options in front of you as a lettered menu and wait. Building questions into a skill unlocks two patterns, and they feel very different.

### **Pattern 1: Mid-task judgment calls**

The first pattern is having the skill ask you follow-up questions during its work — getting your judgment at exactly the right moment instead of guessing.

**Take a look at `/process meetings plus`:**

```
process-meetings-plus/
└── SKILL.md    ← same as a basic meeting processor, but asks about borderline items
```

This is an upgraded version of the `/process meetings` skill you built in L1. The original just extracted action items and gave you the list. This version does something different when it hits a gray area — someone said "we should probably look into that" or "I'll think about it." Instead of guessing whether that's a real action item, it collects those borderline items and asks you.

**Run it on the meeting transcripts from L1:**

`/process meetings plus` on just one or two of the meeting transcripts from `meetings/`

**Only process 2 meetings** — the point is experiencing the asking pattern, not processing every file. They'll get asked about borderline items mid-task as a lettered menu, and their answers shape the output.

After the output, point out: the result is better because the skill involved your judgment at the right moment. This is pure instruction logic — no folder structure needed. The SKILL.md just tells me when and what to ask.

Other places this pattern is useful:
- A research skill that asks which angle you care about before diving in
- A review skill that asks what you care about most before reviewing
- A generate skill that asks who the audience is before drafting
- A workflow skill that confirms parameters before executing something irreversible

Any questions about this pattern, or ready to see the second way skills use questions?

### **Pattern 2: First-run setup**

The second pattern is totally different — and it connects back to the folder architecture.

**Take a look at `/standup`:**

```
standup/
├── SKILL.md      ← instructions (check for config, ask if missing)
└── (no config yet — first run will create one)
```

This skill checks if there's a config file in its folder. If there isn't one — meaning it's the first time you're running it — it asks setup questions: what format? What sections? How long?

It saves the answers to a config file in the skill folder. Next time it runs, it reads the config and skips straight to work.

**Run it:**

`/standup`

They'll get the setup questions. After they answer, show them the config file that was created. Then show the updated folder structure:

```
standup/
├── SKILL.md       ← instructions
└── config.json    ← YOUR answers (just created)
```

**Now run it again:**

`/standup`

This time — no questions. It reads the config and generates immediately. Point out the difference: first run asked questions, second run went straight to work.

**The questions just built the progressive disclosure layer for you.** The skill asked, and your answers became a reference file in the folder. Asking is how skills learn what they need to know. The folder is how they remember it.

If you ever want to change your preferences, just edit the config file directly.

This is especially powerful for skills you share with a team — everyone runs the same `/standup` skill, but each person's config is different. The skill sets itself up automatically. We'll talk more about team sharing in Lesson 5.

The broader pattern: questions work at different moments, and the timing changes everything:
- **Before** a task — setup questions, config
- **During** a task — judgment calls, borderline items
- **After** a task — "does this look right?" confirmation

Ask if they're ready for the next technique.

---

## **Big Idea 4: Skills That Grow (Self-Improving)**

Most skills are static — same output every time. A self-improving skill stores data in its folder and reads it on the next run. The folder becomes its memory.

**Take a look at the `/writing voice` skill** — present `.agents/skills/writing-voice/SKILL.md` as a clickable link (not the folder), so the corrections/ folder is visible in the side panel:

```
writing-voice/
├── SKILL.md              ← instructions (write in this voice)
└── corrections/
    ├── too-formal.md     ← "use direct language, not consultant-speak"
    └── avoid-lists.md    ← "write in paragraphs, not bullets"
```

There are correction files already in there. Every time you run this skill and give feedback, I save a new correction to that folder. Next run, I read all corrections and adjust.

```
Run 1:                    Run 5:
─────                     ─────
writing-voice/            writing-voice/
├── SKILL.md              ├── SKILL.md
└── corrections/          └── corrections/
    └── (2 files)              ├── too-formal.md
                               ├── avoid-lists.md
                               ├── no-rhetorical-qs.md
                               └── more-contractions.md

Output: mostly generic    Output: sounds like YOU
```

**Let's try it. Run:**

`/writing voice` followed by a topic — anything you'd actually write about

After the output, suggest specific feedback options based on what was written. Things like:
- "Too many rhetorical questions"
- "Not punchy enough"
- "Too formal"
- "Would never start a paragraph that way"

Tell them to give feedback and show how the correction gets saved. Then have them run it again to see the difference.

**"The skill learns from your corrections without you rewriting the SKILL.md."**

Ask: **"What's making this possible?"**

React to their answer. It's the folder architecture again. The corrections/ folder is progressive disclosure — reference data that accumulates over time. Without the folder, the skill has no memory.

There's a simpler version of this too: a **gotchas file**. Instead of automatic correction logging, you maintain a `gotchas.md` in the skill folder manually. Every time the skill makes a specific mistake, you add a line. I read it and avoid those mistakes. Less automated, but very effective.

Other skills that can grow:
- A meeting processor that learns which things you don't consider action items
- A research skill that remembers topics you've already covered
- A review skill that learns which critiques you always dismiss

Ask if they're ready for the last technique.

---

## **Big Idea 5: Skills That Chain (Composition)**

Everything so far has been about making a single skill more powerful. Composition is different — it's about skills calling other skills to build pipelines.

**Take a look at `/draft and humanize`:**

```
draft-and-humanize/
└── SKILL.md    ← pure orchestration (run this, then run that)
```

This skill chains two other skills in this workspace: `/draft followups`, which drafts follow-up messages from meeting outcomes, and `/humanizer`, which strips AI writing patterns out of text.

```
/draft and humanize
        │
        ├── Step 1: /draft followups
        │   └── generates follow-up messages
        │
        └── Step 2: /humanizer
            └── cleans AI patterns from the output

        = polished messages, one command
```

Each piece is still usable on its own. But this skill connects them so you don't have to run them manually in sequence.

**Run it:**

`/draft and humanize` on the meetings in `meetings/`

**Only process 2 of the meetings** to keep the output manageable — the point is seeing the pipeline, not reading 5 follow-ups twice. Let them see the full pipeline: drafts generated, then automatically cleaned up.

After the output, point out what the humanizer caught and changed. The builder-validator loop in action: one skill creates, another checks.

This pattern works for anything:
- **Research + Generate:** gather info, then produce a document
- **Generate + Review:** draft something, then critique it
- **Workflow + Generate:** complete a process, then summarize what happened

Notice: composition is the one technique that doesn't use the folder architecture. It's purely orchestration — the SKILL.md coordinates other skills. No reference files needed.

Any questions about composition before we wrap up?

---

## Closing

Tell the student:
- **Progressive disclosure** — the folder architecture that turns a skill from a prompt into a system
- **Tools** — pandoc, git, APIs. Tools give me abilities, skills say how to use them
- **Skills that ask** — mid-task judgment calls and first-run setup that writes its own config
- **Self-improving** — corrections that accumulate in the folder, making output better over time
- **Composition** — skills calling other skills to build pipelines

Ask them what combination of these techniques they'd be most interested in building for their own work.

React to their answer.

Tease what's next: in the next lesson we'll step back from building and talk about the philosophy — when you should build a skill, when you shouldn't, and how to think about managing them over time.

Then tell them: when you're ready, start a new thread and type:

`/start skills 4`

---

## Teaching Notes

These are notes for the instructor, not part of the lesson delivery.

**Progressive disclosure — folder structure details (if asked):**
- Files in the skill folder are NOT auto-loaded. The SKILL.md has to tell Codex to read them.
- Codex only preloads each skill's name, description, and path. The full SKILL.md loads when the skill is used, and reference files only when they're read.
- Reference files by explicit path from the project root (e.g., `.agents/skills/write-proposal/template.md`) so there's no ambiguity about what to read.
- Keep SKILL.md under 500 lines. Break detailed content into reference files (40-60% token savings reported)
- Codex reads reference files on demand — a 20-page doc in the folder costs zero tokens until actually needed

**Skills that ask — details (if asked):**
- There's no special question tool in Codex. The skill's instructions tell Codex to pause, present options, and wait for the answer.
- Present choices as A/B/C/D menus in the thread, one question at a time. Reserve the last letter for "something else — tell me" when open answers make sense.
- Config files can be JSON, YAML, or plain text — whatever's easiest to read/edit

**Pandoc / tools details (if asked):**
- Pandoc installs via `brew install pandoc` (macOS) or `winget install pandoc` (Windows)
- PDF output needs a PDF engine too — weasyprint or wkhtmltopdf
- Common conversions: md→pdf, md→docx, md→html, html→pdf
- Custom templates go in the skill folder and get passed via `--template` flag
- Other CLI tools that work well in skills: git, ffmpeg, imagemagick, curl, jq

**Composition details (if asked):**
- Skills reference other skills by name — Codex runs them if they're present in `.agents/skills/`
- No formal dependency management — if a referenced skill is missing, the chain breaks
- The builder-validator pattern (generate + review) is the most common composition
- You can chain more than two — research → generate → review → format is a valid pipeline

**Self-improving details (if asked):**
- Corrections are just files — the skill reads the folder on each run
- Keep corrections inside the skill folder so the memory travels with the skill if you share or move it
- Gotchas files are simpler than automatic logging — just a markdown list you maintain manually
- The skill needs explicit instructions to read the corrections folder and to write corrections when feedback is given
