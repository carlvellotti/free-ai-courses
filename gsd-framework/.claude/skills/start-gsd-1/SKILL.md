---
name: start-gsd-1
description: Learn GSD lesson 1 through its file-backed planning and build workflow. Use when the student types /start-gsd-1.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - Skill
---

# 3.1 What is GSD

## Setup

ACTION: Read and follow `.claude/rules/teaching-rules.md` before teaching. Then run this idempotent staging action. It never replaces existing work. Echo and summarize the clickable staged path.

```bash
mkdir -p "expense-splitter"
cp -rn ".claude/skills/start-gsd-1/assets/PROJECT_BRIEF.md" "expense-splitter/PROJECT_BRIEF.md"
printf '[expense-splitter/PROJECT_BRIEF.md](expense-splitter/PROJECT_BRIEF.md)\\n'
```

ACTION: Before greeting the learner: silently run `fspm progress`. If it shows a learner name, greet them by it and continue. If it shows no name and no declined marker, run `fspm onboard` and follow the tour guidance it returns. If the fspm command isn't available, offer once to install the CLI (fullstackpm.com/cli); if they decline, continue without personalization and don't ask again.

Welcome to the GSD module! We're leveling up from basic vibecoding to something more powerful.

You've built things with Claude Code before. Maybe you've noticed something though...

STOP: Ever had Claude start strong then get worse as the session goes on? Like it's rushing, cutting corners, forgetting things you told it earlier?

USER: Yes / Definitely

---

That's called "context rot." It's not your imagination - Claude's quality actually drops as the context window fills up.

Here's the rough breakdown:
- **0-30% context:** Peak quality. Thorough, comprehensive, remembers everything.
- **50%+:** Starts rushing. "I'll be more concise." Cuts corners.
- **70%+:** Hallucinations. Forgotten requirements. Drift.

This is why complex projects fall apart halfway through. Basic vibecoding works for simple stuff, but it doesn't scale.

STOP: Make sense why this happens?

USER: Yes

---

## Quick Check

Before we continue - have you completed **Module 2: Vibe Coding**?

That module teaches the basics of building with Claude Code. GSD builds on those skills. If you haven't done it, I'd strongly recommend completing it first - you'll appreciate GSD much more once you've felt the limitations of basic vibecoding.

If you're already comfortable with vibecoding and have a GitHub account set up, you're good to continue.

STOP: Ready to continue, or want to do Module 2 first?

USER: Ready to continue / Already familiar

---

## The GSD Solution

GSD solves context rot with a clever trick: **fresh subagent contexts**.

Instead of one long session that gradually degrades, GSD spawns fresh Claude instances for each task. Each subagent gets a clean 200,000 token context window.

Think about that. Task 50 has the *same quality* as Task 1. No degradation.

Meanwhile, your main session stays at 30-40% context while agents do the heavy lifting.

STOP: That's the core insight - fresh contexts instead of one degrading session. Questions?

USER: No / Makes sense

[If questions, answer them, then continue]

---

## What We're Building in This Module

GSD has a lot of commands and features. The best way to learn it is to build something real.

We're going to build an actual app using GSD from start to finish. By the end of this module, you'll understand the full workflow and be ready to use GSD on your own projects.

But first - let me show you the roadmap so you know what to expect.

---

## Module Roadmap

This module has 5 lessons. Here's the full sequence:

| Lesson | Command | What It Does |
|--------|---------|--------------|
| 3.1 | (this one) | Understand GSD, install it |
| 3.2 | `/gsd:new-project` | GSD interviews you, researches, creates roadmap |
| 3.3 | `/gsd:plan-phase 1` | Breaks phase into atomic task plans |
| 3.4 | `/gsd:execute-phase 1` | Fresh agents build the code |
| 3.5 | `/gsd:verify-work 1` | QA walkthrough, learn quick mode |

**Important time expectation:** This module takes about **45-60 minutes total**. About 30 minutes of that is GSD doing work - researching, planning, building - while you wait.

That's intentional. That's how we build quality software. Grab a coffee during the long steps. The waiting is a feature, not a bug.

STOP: Make sense? Any questions about the overall flow?

USER: Makes sense / Ready

---

## Let's Test Your Understanding

Before we dive in, let me check you understand the workflow.

STOP: What do you think is the first step when starting a new project with GSD?

USER: Start a project / new-project / Setup

Right - `/gsd:new-project`. It interviews you about what you want to build.

STOP: And then what comes next? Planning or building?

USER: Planning

Exactly - you plan before you execute. `/gsd:plan-phase` breaks your roadmap into small, atomic tasks.

STOP: And then?

USER: Execute / Build

Yes - `/gsd:execute-phase` spawns fresh agents to build. Then `/gsd:verify-work` to confirm it works.

Great - you've got the sequence: **new-project → plan-phase → execute-phase → verify-work**.

---

## The Project: Expense Splitter

Now let's see what we're building.

Open [PROJECT_BRIEF.md](expense-splitter/PROJECT_BRIEF.md). That's our starting spec. ACTION: Read it and summarize its core features in prose.

This is the kind of thing you might have brainstormed with Claude already - a rough idea of what you want to build.

Here's what the app does:
- **Add people** to the bill (Sarah, Mike, Jenny...)
- **Add items** from the receipt with prices
- **Assign who had what** - including shared items like appetizers
- **Handle tip** - choose percentage, split equally or proportionally
- **Handle tax** - same options
- **Show the final breakdown** - "Sarah owes $34.50, Mike owes $28.20..."

STOP: You can probably see why this would be complex - lots of logic, edge cases, multiple UI components. The kind of thing where an AI could easily lose track halfway through. Make sense?

USER: Yes

---

This is exactly the kind of project where basic vibecoding falls apart.

Multiple components that need to work together. Real calculation logic with edge cases. State management across the UI.

GSD will keep quality high from the first task to the last.

STOP: Ready to install GSD?

USER: Yes

---

## Installing GSD

The installer is `npx get-shit-done-cc`. I'll run it only after you say go. Installing it globally makes the GSD commands available in all your projects; if you ever want it gone, just ask me to run `npm uninstall -g get-shit-done-cc`.

```
npx get-shit-done-cc
```

It'll ask you a couple questions:
- Choose **Claude Code** when it asks about runtime
- Choose **install globally** when it asks about location

STOP: Do you explicitly consent to the agent running `npx get-shit-done-cc` and choosing the authored Claude Code runtime and global install options?

USER: Yes / I consent

ACTION: If and only if the student consents, the agent runs `npx get-shit-done-cc`, narrates prompts and progress in prose, chooses **Claude Code** for runtime and **install globally** for location, and reports the actual result. If the student declines, do not install and explain that the remaining hands-on GSD commands require it.

---

**Important:** Claude Desktop may need a new session to refresh the new GSD skills. ACTION: Write the current lesson state and next step to `expense-splitter/.planning/STATE.md` without replacing existing GSD state. Then ask the student to use **Cmd+N**, invoke `/start-gsd-1`, and link [STATE.md](expense-splitter/.planning/STATE.md).

STOP: Open the new Desktop session and tell me when `/start-gsd-1` has read STATE.md.

USER: I'm back / Done

---

Let's verify GSD is installed. Type `/gsd:help` in the composer and submit it.

STOP: Do you see a list of GSD commands?

USER: Yes

---

## What `/gsd:new-project` Will Do

In the next lesson, you'll run `/gsd:new-project`. Here's what to expect:

**The Interview (~3-5 minutes)**
- GSD asks about your project vision
- You describe the Expense Splitter (use PROJECT_BRIEF.md as reference)
- GSD clarifies features, tech preferences, scope

**The Research Phase (~5-10 minutes)**
- GSD spawns a team of research subagents in parallel:
  - **Stack researcher** - best tech choices
  - **Features researcher** - common patterns and must-haves
  - **Architecture researcher** - how to structure the code
  - **Pitfalls researcher** - common mistakes to avoid
- You can enable/disable these (recommended to enable for the full experience)

**The Output**
- Creates `expense-splitter/.planning/` with:
  - `PROJECT.md` - your vision document
  - `REQUIREMENTS.md` - features organized by priority
  - `ROADMAP.md` - phases with success criteria
  - `STATE.md` - tracks where you are (enables session persistence)

**Time Warning:** The whole `/gsd:new-project` process takes **10-15 minutes** depending on options chosen. That's normal - GSD is doing real research.

STOP: Ready to see all this in action? Make sense what's about to happen?

USER: Yes / Ready

---

You're all set.

GSD is installed. You understand the workflow. You know what to expect time-wise.

In the next lesson, you'll run `/gsd:new-project` and watch GSD interview you, research best practices, and create a complete project plan.

STOP: Ready? Type `/start-gsd-2` to continue.

USER: Ready

---

## Important Notes for Claude

- If `npx get-shit-done-cc` fails, offer to run `npm install -g get-shit-done-cc` only after fresh explicit consent
- If `/gsd:help` doesn't work in a new session, the student may need to fully restart Claude Desktop, then use **Cmd+N**, invoke `/start-gsd-1`, and link STATE.md
- The project will be built in `expense-splitter/`
- Emphasize the time expectations - students should expect waiting

## Success Criteria

- [ ] Student understands context rot and why it happens
- [ ] Student understands fresh subagent contexts as the solution
- [ ] Student completed Module 2 prerequisite check
- [ ] Student understands the module sequence (new-project → plan → execute → verify)
- [ ] Student knows time expectations (~45-60 mins, 30 of which is waiting)
- [ ] GSD is installed and `/gsd:help` works
- [ ] Student has seen PROJECT_BRIEF.md
- [ ] Student knows what /gsd:new-project will do (interview, research, create planning files)

## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete gsd-1
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, use `/clear` first, then:

`/start-gsd-2`
