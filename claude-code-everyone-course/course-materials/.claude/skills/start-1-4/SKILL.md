---
name: start-1-4
description: |
  Lesson 1.4: Commands & Navigation. Use when the student types /start-1-4.
disable-model-invocation: true
allowed-tools:
  - Read
  - Bash
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

# Lesson 1.4: Commands & Navigation

Before we do the heavy analysis, let's learn to move fast.

This lesson covers commands, shortcuts, and some power user features.

STOP: Ready to become a power user?

USER: Yes

---

## Essential Slash Commands

Let me show you the essential slash commands.

Slash commands work in the composer. Type `/` to see what's available; here are the ones worth knowing right away.

- Use the Models menu in the composer to choose a model. Sonnet 5 on Low works great for this course; use Cmd+Shift+E to change effort.
- Use the lower-right resource dashboard for the context bar and usage, and type **/context** when you want details about loaded context and connected tools.
- **/clear** - clear the current session; use **+ New session** or Cmd+N when you want a separate new session.
- Use the lower-right resource dashboard to see usage.
- Resume work by clicking any previous session in the sidebar. Sessions persist, and right-clicking one gives you Rename, Fork, and Archive.

STOP: Type `/` to see the command menu. See them?

USER: Yes

---

## Course Skills

Those are built-in controls. But here's a secret: you've been using course skills this whole time.

Every time you typed `/start-1-1` or `/start-1-2`, that invoked a course skill.

Course skills are installed under [.claude/skills/](.claude/skills/). For example, open [start-1-1/SKILL.md](.claude/skills/start-1-1/SKILL.md).

It's basically the same concept as the templates we used earlier - a reusable instruction file invoked by its exact slash name.

We won't go deep on creating your own skills in this module, but you can always ask me to make one.

Exact invocation works in the same session after installation, though the picker can be stale.

STOP: If a newly installed skill doesn't respond to its exact `/name`, start a New Chat or new session and invoke it again. The picker itself may lag behind. Make sense?

USER: Yes

---

## The Rewind Feature

Here's one to file away rather than try right now: pressing Escape twice rewinds the conversation. I forget the rewound turns, but files on disk are NOT reverted.

The mental model is simple: rewind the conversation, not your files.

(Don't try it mid-lesson, or you'll rewind the lesson itself. Save it for when a conversation goes down a path you want to undo.)

STOP: Rewind changes the conversation context, not your project files. Got it?

USER: Yes

---

## Models and Effort

Use Cmd+Shift+E to change effort. Sonnet 5 on Low works great for this course, and you can raise effort for a task that needs deeper analysis.

STOP: Open the effort selector with Cmd+Shift+E, take a look, and let me know when you're ready to continue.

USER: Yes

---

## Composer Modes and Permissions

Open the composer mode picker with Cmd+Shift+M. It has five modes: Manual, Accept edits, Plan, Auto, and Bypass permissions.

These modes ARE the permission system: they control how much I do without asking you first. For this course, Auto is the recommended balance; I work without interrupting you while still asking for anything outside the workspace. Plan is there when you want to review a plan before work begins. Bypass permissions exists too; it's fine in a safe project like this one, but Auto is the course default.

STOP: Open the mode picker and choose Auto. Feeling powerful?

USER: Yes

---

## Wrap-up

**Meta skills you just learned:**

1. **Slash commands and session controls**
2. **Course skills invoked with exact `/start-X-X` names**
3. **Resource dashboard and `/context`**
4. **Models and effort**
5. **Composer permission modes, with Auto recommended**

**Where else this applies:**
- When you need deeper analysis on a complex problem, raise effort.
- When you want to revisit a conversational branch, rewind while remembering that project files stay changed.
- When you want to start fresh - /clear and begin again

**Next up:** In 1.5, things get wild. You'll learn about agents - the ability to spin up multiple Claude instances that work in parallel. We're going to process all those competitor files and old campaigns at once. This is where Claude Code starts feeling like a superpower.

STOP: Ready for 1.5?

USER: Yes / /start-1-5

---

## Important Notes for Claude

- **Rewind**: Keep the explanation precise: the conversation rewinds, files do not.
- **Plan mode**: Explain it as an option for reviewing a plan before work.
- **Permissions**: Recommend Auto for the course.

## Success Criteria

- [ ] Student understands slash commands and session controls
- [ ] Student understands course skills invoked with exact `/start-X-X` names
- [ ] Student knows about the resource dashboard and `/context`
- [ ] Student understands models and effort
- [ ] Student understands composer permission modes, with Auto recommended
- [ ] Student is ready for 1.5

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-everyone-1-4
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-1-5`
