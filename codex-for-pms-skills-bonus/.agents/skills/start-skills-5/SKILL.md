---
name: start-skills-5
description: "Use when the student types /start skills 5. This skill starts Lesson 5 of the Skills module — the final lesson covering where to find skills, how to share them, and the skills ecosystem. The user might say 'start skills lesson 5', 'lesson 5', 'skills ecosystem', or 'start skills 5'."
---

## Setup

First, read `.agents/skills/_shared/teaching-rules.md` and follow it throughout this lesson — it governs how you deliver everything below.

There are no assets to copy for this lesson.

---

# Lesson 5: The Ecosystem

## Opening

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  L5 · THE ECOSYSTEM

  Skills are just folders.
  Folders can be copied.
  Copied folders can be shared.

  "The nice thing about standards is that
   you have so many to choose from."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

This is the last lesson. You've built skills, seen the techniques, and know when to build. Now we're zooming out to the world beyond your own skills folder.

**Lesson 5: The Ecosystem**

Here's what we'll do in this lesson:

- Find and install skills from OpenAI's curated catalog and community sources
- Evaluate third-party skills before trusting them
- Share your own skills with teammates
- Talk about what it looks like to roll this out at your company

You don't have to build everything from scratch. There are hundreds of skills already out there. Knowing where to find them and how to evaluate them is just as important as building your own.

Have you gone looking for any skills on your own yet? Tried to find anything online?

React to their answer. If they have, ask what they found. If not, that's fine — you're about to show them where everything lives.

---

## **Skills are Portable**

As you already know, skills are just markdown files in folders. And that quote in the opening box? For once in the history of software, the opposite happened — the industry picked one standard. It's called Agent Skills, it's an open spec at agentskills.io, and it's the exact SKILL.md format you've been writing all module.

```
┌─────────────────────────────────────────────┐
│           Same skill works in:              │
│                                             │
│   Codex · Claude Code · Cursor · Copilot    │
│   Gemini CLI · VS Code · and dozens more    │
│                                             │
│   One open format: a folder + SKILL.md      │
│   Version in git. Move between jobs.        │
│   No vendor lock-in.                        │
└─────────────────────────────────────────────┘
```

And it's not theoretical. Cursor reads `.agents/skills/` directly — the skills you built in this module would load there today, unchanged. Claude Code reads the same SKILL.md format from its own skills folder, so moving a skill there is copying a folder. Build once, use anywhere.

Because the format is open, the ecosystem is open. Anyone can build, share, and remix skills. No app store approval, no proprietary format. That's what makes the next few sections possible.

---

## **Where to Get Skills**

There are three places to find skills other people have built. We're going to look at all three.

### **1. OpenAI's Curated Skills**

Codex ships with a skill whose whole job is installing other skills. It's called `skill-installer`, and it pulls from OpenAI's curated catalog at github.com/openai/skills.

You invoke it with the `$` syntax you learned in Lesson 1 — that points me at a skill mid-prompt.

**Type this in the composer:**

`$skill-installer show me the curated skills I can install`

When they do, run the skill-installer skill and present the catalog. Help them browse — **have them pick one that looks useful and tell you to install it.** If nothing grabs them, that's a fine outcome too (the curated catalog leans developer-heavy); install one anyway as the demo, picking whichever is most PM-adjacent.

Run the install. Note where it lands — skill-installer installs outside this project, in your user-level skills folder, so it's available in every project, not just this one. That's the difference between the two scopes:

- **Project scope** — `.agents/skills/` in this repo. Everyone who has the repo gets the skill.
- **User scope** — your home folder. Just you, but everywhere.

After installing, find the SKILL.md it created (check the path skill-installer reports; user-level skills typically land under `~/.codex/skills/` or `~/.agents/skills/`) and present it as a clickable link so they can open it.

**Ask them: "What do you notice about it?"**

Point out: same frontmatter, same markdown body, same structure. They already know how to read these. Installed skills aren't special — they're the exact same files they've been building all module. And they could edit this one if they wanted to.

One honest caveat, same as Lesson 1: the new skill won't show up in the slash palette until a new thread starts. It's installed; it's just not loaded into this conversation.

Before moving on, three things to check before installing any skill:
1. **Read the SKILL.md** — is it well-structured, or just a prompt someone saved?
2. **Look in the folder** — does it bundle scripts, and what do the instructions tell me to run?
3. **Try it on something low-stakes first** — don't run a new skill on real work until you've seen what it does

Ask if they're ready to look at the next source.

### **2. Community Skill Sites**

There's also a community site at **skills.sh** run by Vercel. It's a gallery of skills people have published — you can browse by category, see what's popular (the leaderboard shows install counts), and it works with Codex along with about seventy other tools. That's the open standard paying off again.

Tell the student you're going to open it for them, then run:

`open https://skills.sh`

Let them browse. Tell them: **pick one that looks interesting and give me the link or the name.**

When they pick one, you handle the install — no terminal needed on their end. Fetch the skill's page to confirm the package, then run the install command yourself, non-interactively, into this project:

`npx skills add <source> --skill <name> -a codex -y`

That installs at project scope, so the skill lands in `.agents/skills/` right here in the workspace. Find the new folder and present its SKILL.md as a clickable link — they can also see it appear in the Files drawer (the side drawer in the upper right).

Point out: they could edit this too. Installed skills aren't read-only. Once it's in your project, it's yours.

### **3. Community Repos**

Skills are also shared as plain GitHub repos. People publish personal collections, and companies open-source internal skills. Since a skill is just a folder, "installing" from a repo is copying that folder into `.agents/skills/` — you can ask me to do it, or point `$skill-installer` at a GitHub URL and it'll handle it.

The difference: no curation. So prefer the curated catalog and skills.sh when you can. If installing from somewhere unfamiliar:
- Read the SKILL.md and folder contents before running
- Look for scripts in the folder and check what the instructions tell me to execute
- Same common sense as installing any software

Ask if they have any questions about finding and evaluating skills.

---

## **Sharing Your Skills**

Now the other side — sharing skills you build.

Skills are great for teams. Everyone running the same `/standup` or `/prd` means consistent processes without a wiki page nobody reads.

Ask them: "Can you think of a process at your company that would benefit from everyone running the same skill?"

React to their answer. Then walk through the two approaches:

```
Repo Approach                    Plugin Approach
──────────────                   ───────────────
.agents/skills/ in your repo     Skills bundled as an installable
                                 package in the Plugins directory

✓ Simple — clone and go          ✓ Pick and choose what to install
✓ Versioned through git          ✓ Bundles MCP servers + apps too
✗ Everyone gets ALL skills       ✗ More setup to get going
✗ Tied to one project            ✗ Someone needs to maintain it

Best for: small teams            Best for: orgs with many skills
```

### **Option 1: Skills in a Repo**

The simplest approach. Put skills in `.agents/skills/` in a project repo. Anyone who clones the repo gets all the skills automatically. When someone updates a skill, everyone gets the update on their next pull. You've been living inside this approach all module — this course is a repo full of skills.

### **Option 2: A Plugin**

Codex has a bigger unit of packaging called a plugin — a bundle that can hold multiple skills, plus app connections and MCP servers, with a small manifest file describing it all. The Plugins directory in the app has three shelves: plugins curated by OpenAI, plugins shared with your workspace, and plugins you created. Share one with your workspace and teammates browse and install it like an app — no cloning your repo, no copying folders.

You don't need to build one today. The mental model is enough: a skill is a file you share with your project, a plugin is a package you share with your company.

Ask them (they can reply with just the letter): "Which approach makes more sense for your team right now?"

- **A** — Repo: we're a small team and live in shared repos anyway
- **B** — Plugin: we'd want people picking from a catalog
- **C** — Honestly not sure yet — talk me through it

React to their answer. If C, walk through it: under ~10 skills and one main team repo means start with the repo approach; multiple teams or skills that bundle integrations means a plugin earns its setup cost.

---

## **Rolling This Out at Your Company**

Tell the student: if your company isn't already doing this, there's a real opportunity here. Being the person who sets up a skills system for your team is a visible, high-impact move. Here's what the tactical steps look like:

1. **Start with the repo approach** — pick 3-5 skills that would help your team and put them in `.agents/skills/` in a shared repo
2. **Get 2-3 people using them** — the skills sell themselves once people see the output
3. **Collect feedback** — what's working, what's not, what else do people want
4. **Graduate to a plugin** if the collection grows past 10-15 skills or other teams want in
5. **Give the collection an owner** — skills are living documents, and a toolkit nobody maintains quietly rots

This is the kind of thing that gets noticed by leadership. You're not just using AI tools — you're building the infrastructure for your team to use them well.

Ask them: "Does your company have anything like this already, or would you be starting from scratch?"

React to their answer.

---

## Closing

Tell the student:

- **Found and installed skills** from OpenAI's curated catalog, skills.sh, and community repos
- **Learned to evaluate** third-party skills — read the SKILL.md, check the folder for scripts, test low-stakes
- **Two sharing approaches** — repo for small teams, plugin for orgs
- **A roadmap for rolling this out** at your company

Ask the student: what skill from this lesson — or the whole module — are you most likely to go use first?

React to their answer.

Then deliver the full module sendoff:

```
╔═══════════════════════════════════════════════╗
║                                               ║
║   Module Complete: Skills                     ║
║                                               ║
║   L1  Built your first skill                  ║
║   L2  Learned the five types                  ║
║   L3  Mastered advanced techniques            ║
║   L4  Developed judgment for when to build    ║
║   L5  Connected to the ecosystem              ║
║                                               ║
║   You have the full picture.                  ║
║   Go build something.                         ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

That's the whole system — what skills are, what types exist, how to make them powerful, when to build them, and how to find and share them. And because it's all one open standard, none of it is locked to this tool or this project. The folder you build today follows you.

Where to go from here:

- The best next step is the skill idea you named back in Lesson 1 or 4 — start a new thread and build it for real
- Browse skills.sh or the curated catalog (`$skill-installer`) when you hit a problem someone's probably solved
- If your team would benefit, start the shared repo this week — three skills is enough to begin

This module is one slice of the full Mastery course — the rest covers context management, delegation, research workflows, data analysis, document production, and building a personal operating system. Tell the student the details are at fullstackpm.com when they want to keep going.

---

## Teaching Notes

These are notes for the instructor, not part of the lesson delivery.

**skill-installer specifics (if asked):**
- Built-in system skill; pulls from the curated catalog at github.com/openai/skills
- Direct install: `$skill-installer <skill-name>` (e.g., `$skill-installer gh-address-comments`)
- Also installs from a GitHub URL: `$skill-installer install https://github.com/openai/skills/tree/main/skills/.experimental/<name>`
- Newly installed skills load when a new thread starts; if one doesn't appear, restarting Codex picks it up

**Skill scopes (if asked):**
- Project: `.agents/skills/` in the repo (Codex also checks parent folders up to the repo root)
- User: `~/.agents/skills/` (some installers use `~/.codex/skills/`; both are read)
- Frontmatter is just `name` + `description`; optional extras (UI metadata, dependencies) live in `agents/openai.yaml` inside the skill folder

**Plugin specifics (if asked):**
- A plugin is a folder with a `.codex-plugin/plugin.json` manifest plus optional `skills/`, `.mcp.json`, `.app.json`, and `hooks/`
- Workspace sharing: Plugins → Created by you → Share, then add workspace members or groups
- Teams can also publish a repo-level marketplace: `.agents/plugins/marketplace.json` at the repo root listing plugins to offer
- Marketplace management is CLI-side: `codex plugin marketplace add owner/repo` (also takes git URLs and local paths), plus `list`, `upgrade`, `remove`
- Disable an installed plugin with `enabled = false` in config, or uninstall from the plugin browser

**Security specifics (if asked):**
- Codex skill frontmatter has no tool-permission field — skills run under your normal approval and sandbox settings, so installing a skill doesn't grant new powers
- Still review any `scripts/` folder and any commands the SKILL.md instructs Codex to run before using a third-party skill
- A skill from a stranger's repo is a prompt you're choosing to trust; read it first

**skills.sh install details (if asked):**
- Install command: `npx skills add <source>` where source is GitHub shorthand (`owner/repo`), a full URL, or a local path
- `--skill <name>` picks specific skills, `-a codex` targets Codex, `-y` skips prompts, `--list` previews without installing
- Default installs to project scope (`.agents/skills/`); `-g` installs to the user directory instead
- The CLI supports 70+ agents — the same package can install to Codex, Claude Code, and Cursor at once

**Cross-tool portability (if asked):**
- The Agent Skills standard lives at agentskills.io (originally developed by Anthropic, released as an open spec)
- Cursor reads `.agents/skills/` and `~/.agents/skills/` directly, and even loads `.claude/skills/` and `.codex/skills/` for compatibility
- Claude Code, GitHub Copilot, VS Code, Gemini CLI, and dozens of others read the same SKILL.md format from their own skill folders
