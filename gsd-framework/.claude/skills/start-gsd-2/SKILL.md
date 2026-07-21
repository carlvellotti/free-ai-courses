---
name: start-gsd-2
description: Learn GSD lesson 2 through its file-backed planning and build workflow. Use when the student types /start-gsd-2.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - Skill
---

# 3.2 Start a Project

## Setup

ACTION: Read and follow `.claude/rules/teaching-rules.md` before teaching. Then run this idempotent staging action. It never replaces existing work. Echo and summarize the clickable staged path.

```bash
mkdir -p "expense-splitter"
printf '[expense-splitter](expense-splitter/)\\n'
```

In this lesson, you'll run `/gsd:new-project` for the first time.

Here's what GSD is going to do:

1. **Interview you** about what you want to build (~3-5 mins of your input)
2. **Spawn research agents** to investigate best practices, architecture, pitfalls (~5-10 mins)
3. **Create requirements** organized into v1/v2/out-of-scope
4. **Generate a roadmap** with phases and success criteria
5. **Save everything** to `expense-splitter/.planning/`

All from one command. You just answer questions when prompted.

STOP: Ready?

USER: Yes

---

## Before You Run It

A few important things:

**This will take 10-15 minutes.** Most of that is GSD researching and planning while you wait. That's normal - it's doing real work.

**You'll be asked questions first.** Use your `PROJECT_BRIEF.md` as reference when describing the Expense Splitter. You can customize features however you want - whatever you choose WILL get built.

**You'll see optional agent toggles.** GSD will ask if you want:
- **Research agents** - investigate best practices (recommended ON)
- **Plan checker** - verifies plans achieve goals (recommended ON)
- **Verifier** - confirms work after execution (recommended ON)

These add quality but also add time. I recommend enabling all of them for the full experience.

**When it finishes**, you'll see "PROJECT INITIALIZED" and be back at the normal composer. I will narrate progress and summarize the result in prose.

STOP: What will you type when GSD finishes and you're back at the normal prompt?

USER: Done

Exactly - you'll type "done" so we can continue the lesson together.

---

## Run It

Type `/gsd:new-project` and hit enter.

GSD will take over and start asking you questions. Answer using [PROJECT_BRIEF.md](expense-splitter/PROJECT_BRIEF.md) as a guide and describe the Expense Splitter features.

Remember: this takes 10-15 minutes. Grab a coffee if you want. When you see "PROJECT INITIALIZED" and you're back at the normal prompt, type "done".

STOP: Run `/gsd:new-project` now. Type "done" when you're back at the normal prompt.

USER: Done

---

## Let's See What GSD Created

Nice work! GSD just did a lot behind the scenes.

It interviewed you to understand your vision. It spawned research agents in parallel to investigate stack options, feature patterns, architecture approaches, and common pitfalls. Then it synthesized everything into a structured spec.

And your main context stayed clean while all those agents did the heavy lifting.

Let's tour what it created.

ACTION: List `expense-splitter/.planning/`, echo the file names in prose, and include clickable links.

---

You should see several files. Let me walk you through each one.

ACTION: Read [PROJECT.md](expense-splitter/.planning/PROJECT.md) and summarize its contents.

**PROJECT.md** is your project vision and constraints - the high-level "what and why." It captures what you described in the interview.

STOP: Does it match what you described?

USER: Yes

---

ACTION: Read [REQUIREMENTS.md](expense-splitter/.planning/REQUIREMENTS.md) and summarize its contents.

**REQUIREMENTS.md** has your features organized into v1, v2, and out-of-scope.

Notice the REQ-IDs - things like PEOPLE-01, SPLIT-02. These trace through the whole system. Every requirement maps to exactly one phase. When GSD builds and verifies, it references these IDs.

STOP: See how it organized the features?

USER: Yes

---

ACTION: Read [ROADMAP.md](expense-splitter/.planning/ROADMAP.md) and summarize its contents.

**ROADMAP.md** shows the phases and what each one delivers.

Each phase has **success criteria** - these are observable behaviors, not just tasks.

"User can add people to the bill" is a success criterion. "Create People component" is just a task. GSD thinks in **outcomes**.

STOP: Make sense how the roadmap is structured?

USER: Yes

---

ACTION: Read [STATE.md](expense-splitter/.planning/STATE.md) and summarize its contents.

**STATE.md** is GSD's memory. It tracks where you are, what decisions were made, any blockers.

Here's the cool part: these files persist in the Desktop project tree. In a new session, use **Cmd+N**, invoke `/start-gsd-2`, link [STATE.md](expense-splitter/.planning/STATE.md), and GSD uses its recorded position to resume the workflow.

STOP: Pretty useful, right?

USER: Yes

---

## Recap

You just went from project brief to complete spec with one command.

GSD interviewed you, researched best practices, and created traceable requirements. `expense-splitter/.planning/` is now your source of truth.

Here's what you have:
- **PROJECT.md** - Vision and constraints
- **REQUIREMENTS.md** - Features with IDs that trace through the system
- **ROADMAP.md** - Phases with success criteria (outcomes, not tasks)
- **STATE.md** - Persistent memory across sessions

Next, we'll plan Phase 1. You'll see how GSD breaks it into small, atomic tasks - the secret to keeping quality high.

STOP: Ready to plan the build? Type `/start-gsd-3` to continue.

USER: Ready

---

## Important Notes for Claude

- If .planning folder doesn't exist, the new-project command may have failed - have them run it again
- The exact file contents will vary based on their interview answers
- STATE.md might be minimal at this point - that's normal
- **After "done"**: Always walk through each file in `expense-splitter/.planning/`, read it, summarize it, and link it.
- The file tour is critical for understanding what GSD created

## Success Criteria

- [ ] Student ran /gsd:new-project successfully
- [ ] `expense-splitter/.planning/` exists with PROJECT.md, REQUIREMENTS.md, ROADMAP.md, STATE.md
- [ ] Student saw and understood what each file contains (Claude read and summarized each)
- [ ] Student understands STATE.md enables session persistence
- [ ] Student knows requirements have IDs that trace through the system
- [ ] Student understands roadmap has success criteria (outcomes, not tasks)

## Sendoff

ACTION: Run this exact progress update, summarize that the lesson is complete, and point the student to `/start-gsd-3`.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="gsd-2"; C="gsd-3"; T="$(date -u +%FT%TZ)"
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

NEXT: Type `/start-gsd-3` in the composer.
