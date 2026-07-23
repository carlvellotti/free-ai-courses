---
name: start-skills-1
description: "Use when the student types /start skills 1. This skill starts Lesson 1 of the Skills module — an interactive lesson teaching what skills are and how to build your first one. The user might say 'start skills lesson 1', 'teach me about skills', or 'lesson 1'."
---

## Setup

First, read `.agents/skills/_shared/teaching-rules.md` and follow it throughout this lesson — it governs how you deliver everything below.

Then silently run this command (do not show the output to the student):

```bash
cp -rn .agents/skills/start-skills-1/assets/* . 2>/dev/null || true
```

Before greeting the learner: silently run `fspm progress`. If it shows a learner name, greet them by it and continue. If it shows no name and no declined marker, run `fspm onboard` and follow the tour guidance it returns. If the fspm command isn't available, offer once to install the CLI (fullstackpm.com/cli); if they decline, continue without personalization and don't ask again.


---

# Lesson 1: Your First Skill

## Opening

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  SKILLS

  Without skills:   "Do this thing I need"
  With skills:      /do-this-thing

  Without skills:   General purpose assistant
  With skills:      Your personal PM toolkit

  "I choose a lazy person to do a hard job.
   Because a lazy person will find an easy
   way to do it."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Lesson 1: Your First Skill**

Before starting, ask: **"Have you already built skills in Codex? If you're comfortable with skill files, frontmatter, and running slash commands, you could skip ahead to `/start skills 2` which covers the five types of skills and goes deeper. Otherwise, we'll build your first one together right now."**

If they want to skip, tell them to run `/start skills 2`. If they're staying:

Tell the student: in this lesson we're going to learn about one of my most powerful abilities — skills. Skills are slash commands that make me do specific things, and they dramatically extend what I can do for you. Here's what we'll cover:

- Process meeting notes the manual way, then turn that into a reusable command
- Understand the anatomy of a skill file
- Improve your skill and run it again

Skills are commands like `/process meetings`, `/draft email`, `/research competitor`. You type the command, I follow the instructions baked into it. Without skills, I'm general purpose. With them, I become a specialist at whatever you need.

On the surface that might seem like a small thing, but skills extend what I can do in ways that aren't obvious yet. They can use external tools, ask you questions, chain together, even learn from your feedback over time. We'll get to all of that in later lessons.

For now, we start by building one. What kind of repeated work do you do that you wish you could just automate with a single command?

React to their answer. Whatever they say, that's a candidate for a skill. We're going to use meeting processing for this exercise, but the same approach works for whatever they described.

---

## The Manual Task

There's a folder with today's meeting transcripts at `meetings/`. Present it as a clickable link so the student can see what's there.

**Ask me to process them and pull out the action items.** Just ask however you'd naturally ask, something like:

`process the meeting notes in meetings/ and get me the action items`

Read the transcripts and produce a summary: action items from each meeting, who's responsible, what needs to happen. Keep the bullets short — one line each.

After delivering the output, ask: "What do you think of that format? Anything you'd change?"

React to their answer, then point out the limitation: that worked, but next time you want this, you'd have to explain the format again. Want a different format? Tell me again. Different priorities? Again. Every time.

**Ask me to turn what we just did into a skill.**

---

## Creating the Skill

Create the skill at `.agents/skills/process-meetings/SKILL.md` with simple frontmatter (just `name` and `description`) and the basic instructions.

Tell the student where the file lives, present it as a clickable link, and **tell them to go take a look at it**. Mention one quirk worth knowing: folders that start with a dot, like `.agents/`, are hidden in the Files drawer — but clicking a link to a file inside one makes the folder show up in the side panel. So the link does two things: opens the file, and reveals the folder it lives in. Ask them what they notice about the file.

---

## Understanding the Anatomy

Walk through the file based on what they noticed.

The frontmatter — the YAML between the `---` markers:
- `name: process-meetings` — this becomes the slash command. In the slash palette, hyphens show up as spaces, so you'll type `/process meetings` and it runs.
- `description` — **this is the most important field. It's how I decide when to use this skill.** When a thread starts, I read all the skill descriptions to know what's available. A vague description means I won't match the skill when you need it. A specific one means it fires reliably.

And that's the whole frontmatter — Codex keeps it to those two fields. Anything fancier lives in an optional config file next to the skill, and you won't need that for a while.

I'll mostly handle the frontmatter for you, but it's good to know what those parts are. The main one you need to pay attention to is the description.

The instructions body — everything below the frontmatter. This is the actual skill. When you run `/process meetings`, this body loads and tells me what to do and how to do it.

Tell them: **a skill is not code. It's a briefing.** You're telling me what you need and how you want it done. I figure out the specifics.

Show this graphic:

```
┌─── Code ────┐      ┌── Briefing ──┐
│ if x > 0:   │      │ What to do   │
│   return y  │  →   │ How to do it │
│ else:       │      │ What matters │
│   raise err │      │ When to adapt│
└─────────────┘      └──────────────┘
 Exact steps          Goals + judgment
```

The better the briefing, the better my output.

Ask them if they have any questions about the structure.

---

## The Folder

Point out that the skill lives in a folder: `.agents/skills/process-meetings/`. Right now there's only SKILL.md in there. But the folder can hold other files — templates, examples, style guides, data. I read those on demand when the skill runs.

We'll get into that in Lesson 3. For now, just know the folder is what makes skills more than saved prompts.

Ask them: "Ready to make this skill better?"

---

## Improving the Skill

The skill works, but the output is just a flat list. Ask the student (A/B/C/D menu): "What would make this skill's output more useful?"
- **A** — Categorize by urgency (handle now vs. needs follow-up)
- **B** — Separate your items from other people's
- **C** — Consolidate duplicates across meetings
- **D** — Something else — tell me what you're thinking

React to whatever they pick. Then have them ask you to edit the SKILL.md to add their choice.

Menu (A/B): "Which section of the skill file will I edit to make this change?"
- **A** — The frontmatter (the YAML at the top)
- **B** — The instructions body (below the frontmatter)

After they answer: right, the instructions body. The frontmatter stays the same because what the skill does hasn't changed. I'm just changing how it does the job.

Make the edit and point out what changed. Now it's time to run the skill — but be straight with the student about one thing first: I pick up new skills when a thread starts, so `/process meetings` isn't in your slash palette yet. It'll be there in your next thread (and if a skill ever doesn't show up, restarting Codex fixes it). But a skill is just a file, and the file exists right now. I can read it and follow it exactly the way the slash command would.

**Tell them to ask you to run the process-meetings skill on the same meetings folder** — plain words work fine, something like:

`run the process-meetings skill on meetings/`

When they do, read `.agents/skills/process-meetings/SKILL.md` fresh and follow it. Since you already read the meeting files earlier in this lesson, you don't need to re-read them — just use the context you have. The output should now reflect their choice.

After the output, point out the difference: same meetings, same skill, but the output is structured the way they actually need it. All because of a few lines they changed in the SKILL.md.

**"Those are your preferences, codified. Every time you run `/process meetings`, I read that file and know exactly how you want it. No re-explaining, no 'actually can you group it differently.'"**

Show this graphic:

```
   ╭──────────╮
   │  BUILD   │
   ╰────┬─────╯
        ↓
   ╭──────────╮    ╭──────────╮
   │   USE    │ ─→ │ IMPROVE  │
   ╰──────────╯    ╰────┬─────╯
        ↑               │
        ╰───────────────╯
```

That's the loop. Make a skill, use it, notice what's off, improve it. Skills are living documents.

Ask them if there's anything else they'd like to change about the skill.

React to their ideas. Whatever they suggest — different categories, different format, additional processing — those are all just edits to the SKILL.md. You can also edit the file yourself any time; it's just Markdown.

---

## Invocation Modes (Brief)

The skill you built is a slash command — starting with your next thread, you'll type `/process meetings` (or open the slash palette and pick it) to run it. That's the most reliable way to use skills, and you'll want to know what skills are in your system so you can fire them when you need them. You can also drop a skill into the middle of a prompt by typing `$` — like `$process-meetings` — which points me at it without running it as a command.

Two other modes exist:

1. Implicit invocation — I can sometimes detect when a skill is relevant and run it without you typing the command. For example, if you said "pull out the action items from my meetings" without using the slash command, I might recognize that the process-meetings skill is relevant and use it. Whether that works depends almost entirely on the description field — and even with a good one, don't count on it.
2. Explicit-only — you can lock a skill so I never invoke it implicitly, only when you explicitly call it. That's done with a small config file next to the skill. Good for skills that do something sensitive.

The slash command is what you'll use 90% of the time. We'll talk more about when to use which mode in Lesson 4.

---

## Closing

Tell the student:
- You went from a one-off prompt to a reusable command
- You learned the anatomy: frontmatter (metadata) + instructions body (the briefing)
- You improved it and saw the output change
- Skills live in folders that can hold more than just the SKILL.md

Ask the student what else they do repeatedly that could be a skill.

React to their ideas.

Tease what's next: the skill you built is one type — it takes information and produces a summary. In the next lesson, you'll see four other types of skills that work very differently. You'll also see real skills built and used by actual people.

Then wrap up: when you're ready for the next lesson, start a new thread, then run:

`/start skills 2`

That new thread is also where `/process meetings` will be waiting in your slash palette.
