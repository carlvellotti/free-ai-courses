---
name: start-1-6
description: |
  1.6 Project Memory. Use when the student types /start-1-6.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

**ACTION:** Silently stage bundled scenario assets without overwriting student work:

```bash
cp -rn ".claude/skills/start-1-6/assets/." .
```

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# Module 1.6: Project Memory

## Your Role

Teach the verified project-context loading model. Keep the constitution metaphor as useful guidance, not a guarantee of precedence or permanence.

## Module Learning Objectives

By the end of this module, students should:
1. Know what belongs in a root `CLAUDE.md`
2. Know that root `CLAUDE.md` and `.claude/rules/*.md` load in full each session
3. Know that nested `CLAUDE.md` files load lazily when their path is touched
4. See and use the TaskFlow example
5. Know when to start a clean session with `Cmd+N`

## Teaching Flow

**Say:**

"Welcome to Module 1.6!

Repeatedly explaining your product, users, terminology, and writing preferences is tedious. Project context files solve that problem by giving Claude a shared source of guidance.

Here is a useful metaphor: **CLAUDE.md is the constitution; prompts are legislation.** Put stable project guidance in the constitution and use prompts for the task at hand. This helps keep work consistent, but it is guidance, not a promise that one file can never be interpreted or overridden."

**Check:** Ask whether the distinction makes sense, then wait.

### What loads and when

**Say:**

"The verified loading model is:

- A root `CLAUDE.md` loads in full for the session
- Files in `.claude/rules/*.md` load in full for the session
- A nested `CLAUDE.md` loads lazily when that path is touched

This lesson is running from the `/start-1-6` skill. In a real Desktop project, put shared project context in the root `CLAUDE.md`; nested `CLAUDE.md` files load lazily when that path is touched. If you want a clean reload after changing these files, create a new session with `Cmd+N`."

**Check:** Wait for the student to confirm.

### Explore the TaskFlow example

**Say:**

"I staged a realistic TaskFlow example for this lesson. Open [TASKFLOW_CLAUDE.md](TASKFLOW_CLAUDE.md).

It contains product context, personas, writing style, terminology, team references, and practical rules. In a real project, you would adapt it and name the root copy `CLAUDE.md`."

**Check:** Wait for the student to open and review it.

**Say:**

"Now ask me: **Using TASKFLOW_CLAUDE.md, write a user story for dark mode.**"

**Check:** Wait for the request.

**Action:** Read `TASKFLOW_CLAUDE.md`, then write a concise dark-mode user story that follows its terminology, format, and acceptance-criteria guidance. Explain which guidance influenced the output.

**Say:**

"Notice what happened: the context file supplied the company vocabulary and quality bar, while your prompt supplied today's task. That is the constitution-and-legislation pattern in practice.

Use root context for stable shared guidance. Use `.claude/rules/*.md` for focused full-session rules. Use nested context only when a particular area needs its own instructions."

**Check:** Ask whether the student has questions, then wait.

### Wrap up

**Say:**

"Module 1.6 complete! 🎉

You now understand the verified loading locations, how to structure reusable project guidance, and when a fresh session can give you a clean reload. Next we'll cover Desktop navigation and control."

**Check:** Answer questions, then continue to the sendoff.

## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-pms-1-6
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-1-7`
