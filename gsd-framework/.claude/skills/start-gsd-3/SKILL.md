---
name: start-gsd-3
description: Learn GSD lesson 3 through its file-backed planning and build workflow. Use when the student types /start-gsd-3.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - Skill
---

# 3.3 Plan the Build

## Setup

ACTION: Read and follow `.claude/rules/teaching-rules.md` before teaching. Then run this idempotent staging action. It never replaces existing work. Echo and summarize the clickable staged path.

```bash
mkdir -p "expense-splitter"
printf '[expense-splitter](expense-splitter/)\\n'
```

Now we turn your roadmap into executable plans.

GSD breaks each phase into small atomic tasks - 2-3 tasks per plan. Each task is designed to fit in about 50% of a fresh context window.

This "aggressive atomicity" is what prevents context rot. No single task is big enough to degrade quality.

STOP: Ready to plan Phase 1?

USER: Yes

---

## Optional: Discuss Before Planning

Quick note: there's an optional `/gsd:discuss-phase 1` you can run before planning.

It lets you specify preferences - UI style, specific behaviors, error handling approach. GSD captures those and feeds them into planning.

We'll skip it for now. You can explore it on your own projects.

STOP: Sound good?

USER: Yes

---

## What Happens During Planning

When you run `/gsd:plan-phase 1`, here's what happens:

1. **Research** - GSD spawns agents to research phase-specific details
2. **Plan** - Creates atomic plans (2-3 tasks each)
3. **Verify** - Runs a verification check to make sure plans actually achieve the phase goals

The planner creates plans, a checker reviews them, planner revises if needed. This loop runs until plans pass verification.

**Time expectation:** This takes **5-10 minutes**. Research, planning, and verification all happen automatically.

**When it finishes**, you'll see "PHASE 1 PLANNED" and be back at the normal composer. I will narrate progress and results in prose.

STOP: What will you type when you're back at the normal prompt?

USER: Done

Right - you'll type "done" so we can look at the plans together.

---

## Run It

Type `/gsd:plan-phase 1` and hit enter.

GSD will run a planner, checker, and possibly a researcher. I will narrate their visible progress in prose. This takes 5-10 minutes.

STOP: Run `/gsd:plan-phase 1` now. Type "done" when it finishes.

USER: Done

---

## Let's See What GSD Created

ACTION: Find the actual phase folder under `expense-splitter/.planning/phases/`, list its contents in prose, and link the files.

You should see several PLAN.md files.

ACTION: Read one of the PLAN.md files, summarize its XML task structure, and include its clickable link.

---

## Understanding the Plan Structure

Notice the XML structure? This IS the prompt that subagents will execute.

Each `<task>` has:
- **name** - what we're doing
- **files** - what files to touch
- **action** - specific instructions
- **verify** - how to check it worked
- **done** - what "complete" looks like

This isn't a document that becomes a prompt. It **IS** the executable instruction.

STOP: See how specific each task is? No ambiguity.

USER: Yes

---

## Understanding Waves

Look at the plan numbers: 01-01, 01-02...

The first number is the phase. The second is the plan number.

Plans are assigned to **"waves."** Independent tasks run in parallel. Wave 1 might have plan 01-01 running. Wave 2 waits for Wave 1 to complete, then runs.

This is "wave-based parallelism." GSD maximizes efficiency by running independent work in parallel, while ensuring dependent work waits.

STOP: Make sense how waves work?

USER: Yes

---

## Why This Matters

Here's what's powerful:

Each plan is small enough for one focused subagent. Each subagent gets a fresh 200k context - no degradation. The last task executes with the same quality as the first.

Your main session stays clean while agents do the heavy lifting.

STOP: Ready to execute and watch subagents build your app?

USER: Yes

---

## What's Next

You have atomic plans ready to execute.

Each plan fits in ~50% context. They've been verified to achieve phase goals. Waves let independent work happen in parallel.

Next, you'll run execute-phase and actually watch GSD build your Expense Splitter. This is where it gets real.

STOP: Ready to build? Type `/start-gsd-4` to continue.

USER: Ready

---

## Important Notes for Claude

- The exact phase folder name depends on how GSD named it during roadmapping
- Number of PLAN.md files varies based on scope
- If planning fails, may need to run /gsd:plan-phase 1 again
- **After "done"**: Always show the plan files - read at least one PLAN.md so student sees the XML structure
- Make sure student understands plans ARE the prompts, not documents that become prompts

## Success Criteria

- [ ] Student ran /gsd:plan-phase 1 successfully
- [ ] PLAN.md files exist in the phase folder
- [ ] Student saw the XML task structure (Claude read and showed a plan file)
- [ ] Student understands wave-based parallelism
- [ ] Student understands why small plans prevent context rot
- [ ] Student understands plans ARE the executable prompts

## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete gsd-3
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, use `/clear` first, then:

`/start-gsd-4`
