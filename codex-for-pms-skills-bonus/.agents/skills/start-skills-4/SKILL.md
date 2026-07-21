---
name: start-skills-4
description: "Use when the student types /start skills 4. This skill starts Lesson 4 of the Skills module — a discussion-based lesson about when to build skills, when not to, and how to maintain them. The user might say 'start skills lesson 4', 'lesson 4', or 'philosophy of skills'."
---

## Setup

At the start of this lesson, read `.agents/skills/_shared/teaching-rules.md` and follow it for the entire lesson. Those rules govern how you deliver everything below.

This lesson has no assets and no setup commands. It's discussion-based.

---

# Lesson 4: Philosophy of Skills

## Opening

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  L4 · PHILOSOPHY OF SKILLS

  Skills you'll actually use:     3-5
  Skills you'll build and forget: 20+
  Skills you'll wish you hadn't
    made so complicated:          all of them

  "You can do anything, but not everything."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

After the last three lessons, you've probably got a list of skills you want to build. Folder architecture, tools, skills that ask questions, self-improving — the possibilities are wide open.

**Lesson 4: Philosophy of Skills**

This is a short lesson — no demos, no building. It's about knowing when to build and when not to. Here's what we'll cover:

- A decision framework for when to build a skill vs. when to just prompt
- Why skills need ongoing care (and when to retire them)
- Common traps that waste your time
- A quiz to test your judgment on real scenarios

The temptation after the last lesson is to skill-ify everything. That's not always the right call. The difference between someone who uses skills well and someone who wastes time on them is knowing where the line is.

You've seen a lot of skills over these lessons. Which ones got you most excited to build something for your own work?

React to their answer. Use what they say as a reference point later when you pressure-test against the framework.

---

## **The Decision Framework**

Not everything should be a skill. Most things fall into one of four buckets:

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Do it once         →  just prompt me               │
│  Regular but short  →  put it in AGENTS.md          │
│  Complex + repeated →  make it a skill              │
│  AGENTS.md bloated  →  move reference to skills     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Walk through each one briefly:
- **Just prompt it:** You need a one-off summary, a quick email draft, a format conversion. No skill needed. Just ask.
- **AGENTS.md:** You always want bullet points, you have a preferred tone, you want me to know your team names. Add a line to AGENTS.md and it applies to everything.
- **Make it a skill:** Complex, multi-step, and you do it regularly. Meeting processing, proposal writing, standup generation. Worth the investment.
- **Move to skills:** Your AGENTS.md is over 500 lines and I'm loading tons of context I don't always need. Time to break reference material into skill folders.

Ask them: "Think about the skills you mentioned wanting to build. Based on this framework, do any of them actually belong in AGENTS.md or as a prompt instead?"

React to what they say. If they're moving things out of the skill column, that's good judgment. If they're keeping everything, push back gently — the threshold is higher than most people think.

---

## **The Setup Trap**

There's a trap that catches a lot of people. Tell the student:

> Some people get so excited about skills that they spend all their time building the perfect setup instead of doing real work.
>
> There's a joke in the community:
> **"bro I spent all weekend in Codex"**
> **"oh nice, what did you build?"**
> **"dude my setup is crazy"**

The gut check is simple:
- If you're spending more time **building skills** than **using them to get work done**, you've crossed the line
- A skill should save you time, not become a project of its own
- Start with the one skill that would save you the most time this week, not the most interesting one to build

Ask them: "What's one thing you do this week that would benefit most from being a skill — not the coolest one to build, but the one that would save you the most time?"

React to their answer.

---

## **Skills Need Care**

Skills don't stay good forever. Three things happen over time:

- **Your process changes** — what you needed three months ago isn't what you need now
- **Tools update** — Codex gets new capabilities, MCP servers add features, the tools your skills lean on change
- **The skill becomes unnecessary** — something that needed detailed instructions before might just work with a simple prompt now

A skill you write today and never revisit will slowly get stale. Not broken — just less useful than it could be.

The fix:
- **Check in occasionally** — run your skills and see if the output still matches what you want
- **Update the ones you use** — a skill is just a file in `.agents/skills/`. Open the SKILL.md from the Files drawer and edit it when your process changes, or ask me to edit it for you. Codex picks up the changes automatically.
- **Retire the ones you don't** — every skill I'm not using is noise. Fewer skills = better matching

Ask them: "Have you ever gone back to an old template or document and realized it was completely out of date? Same thing happens with skills."

React briefly, then move to the quiz.

---

## **Quiz**

Tell the student you're going to test their judgment with some real scenarios — four of them. Ask the questions below one at a time. Present each as an A/B/C/D menu and tell them they can reply with just the letter. After each answer, give the explanation before moving to the next question.

1. "Your coworker wants to build a skill for something they do once a quarter. What do you tell them?"
   - **A** — Build it — consistency matters even quarterly
   - **B** — Probably just prompt it — not worth the investment
   - **C** — Put it in AGENTS.md instead
   - **D** — Depends on how complex it is

   Explanation: Once a quarter is almost never worth a skill. Just prompt it.

2. "You've built 15 skills and only use 4 regularly. What should you do?"
   - **A** — Keep them all — you might need them later
   - **B** — Retire the unused ones — they're clutter
   - **C** — Combine similar ones into fewer skills
   - **D** — Review and update the ones you're not using

   Explanation: Retire the unused ones. Codex loads every skill's description so it can decide when to use them — and it caps how much room that list gets. 15 skills means 11 unused descriptions adding noise and making matching worse for the 4 that matter.

3. "You built a skill 3 months ago and the output quality has dropped. What's happening?"
   - **A** — The skill is broken
   - **B** — Something changed — time to update it
   - **C** — Codex got worse at following instructions
   - **D** — You need to add more rules to the skill

   Explanation: Skills are like any living document. Something changed — time to review and update.

4. "You're about to build a skill for formatting your weekly email. Your AGENTS.md already has your formatting preferences. Should you still build the skill?"
   - **A** — Yes — skills are always better
   - **B** — No — AGENTS.md is handling it fine
   - **C** — Only if AGENTS.md is getting too long
   - **D** — Move the formatting to a skill and remove from AGENTS.md

   Explanation: If AGENTS.md is handling it and isn't bloated, don't add complexity. Only move to a skill when the instructions are too much for AGENTS.md.

---

## Closing

Tell the student:
- **The decision framework** — prompt it, AGENTS.md it, or skill it. Most things are the first two.
- **The setup trap** — build the skill that saves you the most time, not the most interesting one
- **Skills need care** — check in, update, retire. They don't stay good forever.
- **Your judgment matters** — the quiz tested your instincts, and those instincts are what keep your skill system lean

Ask the student: based on everything in this lesson, what's the first skill you're actually going to build for your real work — and why does it clear the bar?

React to their answer. If it's a good candidate, tell them why. If it's borderline, push back.

Tease what's next: in the next and final lesson, they'll look at where to find skills other people have built and how to share theirs with their team.

Then tell them: when you're ready, start a new thread and type the command below.

```
/start skills 5
```
