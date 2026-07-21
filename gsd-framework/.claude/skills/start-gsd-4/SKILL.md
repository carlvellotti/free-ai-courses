---
name: start-gsd-4
description: Learn GSD lesson 4 through its file-backed planning and build workflow. Use when the student types /start-gsd-4.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - Skill
---

# 3.4 Execute

## Setup

ACTION: Read and follow `.claude/rules/teaching-rules.md` before teaching. Then run this idempotent staging action. It never replaces existing work. Echo and summarize the clickable staged path.

```bash
mkdir -p "expense-splitter"
printf '[expense-splitter](expense-splitter/)\\n'
```

This is the payoff. Fresh subagents building your app.

Each agent gets a clean 200k context, executes its plan, commits its work. Agents run in waves - independent tasks in parallel, dependent tasks wait.

I will narrate agents, waves, completions, and failures in prose as GSD reports them.

STOP: Ready to execute Phase 1?

USER: Yes

---

## Before You Run It

**This is the build step - it takes 10-15 minutes.**

Fresh agents will:
1. Read their PLAN.md files
2. Write actual code
3. Verify it works
4. Commit to git

Each wave runs, then the next. I will summarize progress in prose.

**When it finishes**, you'll see "PHASE 1 COMPLETE" and be back at the normal prompt.

STOP: What will you type when you're back at the normal prompt?

USER: Done

Right - you'll type "done" so we can look at what got built.

---

## Run It

Type `/gsd:execute-phase 1` and hit enter.

Each agent reads its PLAN.md, implements the code, verifies it works, and commits. I will narrate the progress and report when all agents finish.

This is the longest step - **10-15 minutes**. Grab a coffee. When you see "PHASE 1 COMPLETE" and you're back at the normal prompt, type "done".

STOP: Run `/gsd:execute-phase 1` now. Type "done" when all agents finish.

USER: Done

---

## What Just Happened

Let's recap what GSD did.

GSD spawned fresh subagents for each plan. Wave 1 ran first. Wave 2 waited for Wave 1 to finish, then ran. And so on.

Each agent had a full 200k context - no degradation from the first to the last. Each task got an atomic git commit. Your main session stayed clean the whole time.

STOP: See how different that is from one long Claude session?

USER: Yes

---

## Check the Git History

ACTION: Run `git -C expense-splitter log --oneline -10` and summarize the actual commits. If history is unavailable, say so honestly.

Each task got its own commit. The format is usually something like `feat(01-01): description` or `feat(01-02): description`.

This means you can:
- **Git bisect** to find exactly which task broke something
- **Revert individual tasks** without losing other work
- **See a clear history** of what was built when

STOP: Pretty clean history, right?

USER: Yes

---

## See Your App Running

Let's see what got built.

ACTION: Inspect the expense-splitter package scripts, start the evidenced dev command as an agent-managed background task in `expense-splitter/`, capture the actual URL from output, repeat it in prose, and run `open <actual-url>`. Never guess the URL.

Open that in your browser. You should see your Expense Splitter - at least the Phase 1 foundation.

STOP: Do you see the app running?

USER: Yes / [Issues]

[If issues: That's sometimes normal for first builds. Let's check what's there and continue. We'll verify more thoroughly in the next lesson.]

---

## What Phase 1 Built

**Important context:** This is Phase 1 only - the foundation.

You can add people and items. That's what Phase 1 delivers.

The full app requires Phase 2 (splitting logic, tip calculation, final summary) and Phase 3 (mobile polish). Those are still in your roadmap, ready to build.

You could keep building right now with `/gsd:plan-phase 2` and `/gsd:execute-phase 2`. Or you can finish this module first to learn verification and quick mode.

STOP: Make sense that this is Phase 1 of a multi-phase build?

USER: Yes

---

## The Summary Files

GSD also created summary files for each executed plan.

ACTION: Find the actual SUMMARY.md files under `expense-splitter/.planning/phases/`, summarize them in prose, and include clickable links.

These track what was actually built, decisions made, any deviations from the plan. Useful for understanding what happened, especially if you come back to this project later.

STOP: Make sense?

USER: Yes

---

## Recap

Phase 1 is built. You have a working Expense Splitter foundation.

Fresh subagents kept quality high from first task to last. Atomic commits give you clean, traceable git history. And your roadmap is ready for Phase 2 whenever you are.

Next, we verify everything works and learn about quick mode and when to use GSD.

STOP: Ready to verify? Type `/start-gsd-5` to continue.

USER: Ready

---

## Important Notes for Claude

- Execution time varies significantly based on number of plans
- If an agent fails mid-execution, GSD usually provides error info
- The app may not be fully functional yet - that's what verification is for
- Git history won't exist if they didn't have git initialized (GSD usually handles this)
- **After "done"**: ALWAYS do the full debrief:
  1. Show git log
  2. Run the dev server
  3. Tell them the URL to open
  4. Explain this is Phase 1 only - full app needs Phases 2 and 3
  5. Show the SUMMARY.md files
- Don't let the student wonder "where's my app?" - proactively show them

## Success Criteria

- [ ] Student ran /gsd:execute-phase 1 successfully
- [ ] Agents completed execution
- [ ] Student saw the git history with atomic commits
- [ ] App is running and student can see it in browser
- [ ] Student understands this is Phase 1 - foundation only
- [ ] Student knows Phase 2 and 3 are ready to build when they want
- [ ] Student saw the SUMMARY.md files
- [ ] Student understands the fresh context advantage

## Sendoff

ACTION: Run this exact progress update, summarize that the lesson is complete, and point the student to `/start-gsd-5`.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="gsd-4"; C="gsd-5"; T="$(date -u +%FT%TZ)"
if command -v jq >/dev/null 2>&1; then
  tmp=$(mktemp)
  jq --arg l "$L" --arg c "$C" --arg t "$T" '.completed_lessons = ((.completed_lessons + [$l]) | unique) | .current_lesson = $c | .last_updated = $t' .fspm/progress.json > "$tmp" && mv "$tmp" .fspm/progress.json
else
  python3 - "$L" "$C" "$T" <<'PY'
import json,sys
l,c,t = sys.argv[1:4]
p = ".fspm/progress.json"; d = json.load(open(p))
if l not in d.get("completed_lessons",[]): d.setdefault("completed_lessons",[]).append(l)
d["current_lesson"] = c; d["last_updated"] = t
json.dump(d, open(p,"w"))
PY
fi
```

NEXT: Type `/start-gsd-5` in the composer.
