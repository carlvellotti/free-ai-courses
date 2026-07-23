---
name: start-gsd-5
description: Learn GSD lesson 5 through its file-backed planning and build workflow. Use when the student types /start-gsd-5.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - Skill
---

# 3.5 Verify & Beyond

## Setup

ACTION: Read and follow `.claude/rules/teaching-rules.md` before teaching. Then run this idempotent staging action. It never replaces existing work. Echo and summarize the clickable staged path.

```bash
mkdir -p "expense-splitter"
printf '[expense-splitter](expense-splitter/)\\n'
```

The loop isn't complete until we verify.

GSD has a verification command that walks you through testing. Think of it like your **QA step** - making sure what got built actually works.

It uses "goal-backward verification" - instead of asking "what tasks did we do?" it asks "what must be TRUE for this to work?"

STOP: Ready to verify your Expense Splitter?

USER: Yes

---

## What Verification Looks Like

Here's what will happen when you run `/gsd:verify-work 1`:

GSD creates a **checklist of test cases** based on Phase 1's success criteria. Things like:
- Can you add a person?
- Can you remove a person?
- Can you add an item with a price?
- Does validation work?

For each test, GSD will:
1. Tell you what to try
2. Wait for you to test it in the app
3. Ask you to say "pass" or describe what's wrong

It's interactive QA. You're the tester. GSD tracks the results.

STOP: Make sense how this will work?

USER: Yes

---

## Run It

ACTION: Make sure the app is running. If it is not, inspect the package scripts, start the evidenced dev command as an agent-managed background task, capture the actual URL, repeat it in prose, and run `open <actual-url>`.

Type `/gsd:verify-work 1` and hit enter.

GSD will walk you through each test case. For each one:
- Try the guided action in the browser the agent opened
- Type "pass" if it works
- Describe the issue if something's wrong

Go through all the tests. When you're done and back at the normal prompt, type "done".

STOP: Type `/gsd:verify-work 1` in the composer now. Go through the browser verification, then type "done".

USER: Done

---

STOP: Is your Expense Splitter working as expected?

USER: Yes / [Has issues]

[If issues:]
If something's broken, GSD has `/gsd:debug`. It spawns debug agents to find the root cause, creates fix plans, and verifies the fix. Then you just run `/gsd:execute-phase 1` again to apply fixes. Systematic debugging, not "let me poke around and hope."

[If working:]
Nice! That's the full loop: **new-project → plan-phase → execute-phase → verify-work**.

---

## Quick Mode

What about small changes that don't need full planning?

That's `/gsd:quick`. Ad-hoc tasks with GSD guarantees.

Example: "Add a dark mode toggle." That doesn't need a whole phase. But GSD still spawns a fresh subagent and commits atomically. Just skips the heavy planning machinery.

Use quick mode for **tweaks**. Full planning for **features**.

STOP: Makes sense when to use each?

USER: Yes

---

## When to Use GSD

GSD is powerful, but it's not always necessary.

**Use GSD when:**
- Building something complex (multiple components, real logic)
- You want reliable, repeatable results
- The project will take multiple sessions
- You care about clean git history

**Skip GSD when:**
- Quick one-off tasks (just ask Claude directly)
- Exploring or prototyping (basic vibecoding is fine)
- Simple single-file changes

STOP: Clear on when GSD adds value?

USER: Yes

---

## Other Commands to Know

A few more commands to know:

- `/gsd:progress` - Where am I? What's next?
- `/gsd:map-codebase` - Analyze an existing project you want to add GSD to
- `/gsd:pause-work` and `/gsd:resume-work` - Clean handoffs between sessions
- `/gsd:help` - Shows everything

You don't need to memorize these. Just know they exist.

STOP: Any questions?

USER: No / [Questions]

[If questions, answer them]

---

## The GSD Philosophy

Let's zoom out on what you learned:

**Context engineering** - Fresh contexts beat one degrading session.

**Aggressive atomicity** - Small plans, each fits in ~50% context.

**Plans are prompts** - The PLAN.md IS the executable instruction.

**State persistence** - STATE.md means you can resume anytime.

**Goal-backward verification** - Check what must be TRUE, not what tasks were done.

This is spec-driven development designed for solo developers. No sprint ceremonies. No story points. Just reliable builds.

STOP: Feel like you could use GSD on your own project now?

USER: Yes

---

## What's Next for Your Expense Splitter

You have a working Phase 1!

**Want to keep building?** Run:
- `/gsd:plan-phase 2` - plan the splitting logic and tip calculation
- `/gsd:execute-phase 2` - build it
- Repeat for Phase 3

The roadmap is already set. GSD picks up right where you left off.

**Want to start something new?** Use `/gsd:new-project` on your own idea.

GSD works for web apps, APIs, CLIs, automation - anything complex enough to benefit from fresh contexts and atomic plans.

STOP: Any ideas for what you want to build next?

USER: [Response]

---

## Module Complete!

You learned the GSD workflow: **new-project → plan-phase → execute-phase → verify-work**.

You understand why fresh subagent contexts prevent quality degradation.

You built a real app with atomic commits and clean verification.

This is how you go from vibecoding to reliable, repeatable builds.

Go make something. GSD will keep Claude sharp the whole way.

STOP: Thanks for building with me. Now go ship something cool.

USER: (exits)

---

## Important Notes for Claude

- Verification may reveal issues - that's normal and expected
- /gsd:debug is powerful but complex - don't go too deep in this intro
- The philosophy recap is important - make sure it lands
- End on an empowering note
- **Before verify-work**: Explain it's like QA with interactive test cases
- **During verify-work**: Student types "pass" or describes issues for each test
- Make sure they understand the full loop before ending

## Success Criteria

- [ ] Student ran /gsd:verify-work successfully
- [ ] Student understood the interactive QA flow (test → pass/fail)
- [ ] Student understands goal-backward verification
- [ ] Student knows about /gsd:quick and when to use it
- [ ] Student understands when to use GSD vs plain Claude Code
- [ ] Student knows the key GSD commands
- [ ] Student can articulate the core GSD philosophy (fresh contexts, atomic plans)
- [ ] Student knows how to continue building (plan-phase 2, execute-phase 2, etc.)
- [ ] Student feels confident to use GSD independently

## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete gsd-5
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: this wraps the module. Ask me what to take on next and I'll lay out what's open to you.
