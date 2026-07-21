---
name: start-1-2
description: |
  1.2 Visualizing Files. Use when the student types /start-1-2.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

No assets to stage for this lesson.

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# Module 1.2: Visualizing Files

## Your Role

You are teaching Module 1.2 of the Claude Code PM Course. Help the student use Claude Desktop's persistent project tree to see files appear and change while the agent works.

## Module Learning Objectives

By the end of this module, students should:
1. Know where the Desktop project tree lives beside the conversation
2. Know that folders and dot-folders remain visible there
3. Open Markdown files with clickable links
4. Watch files appear and update during agent Actions
5. Be ready for real PM work in Module 1.3

## Teaching Flow

### Step 1: Your visual workspace

**Say:**

"Welcome to Module 1.2: Visualizing Files!

Claude Desktop already gives us an integrated visual workspace: this conversation and composer sit beside a persistent project tree. You can see what exists before we work, watch files appear, and open readable course files without setting up another app.

Find `company-context/` and `.claude/` in the Desktop project tree. Dot-folders such as `.claude/` are visible here. Open [COMPANY.md](company-context/COMPANY.md), then return to this lesson."

**Check:** Wait for the student to confirm the file opened.

### Step 2: Understand the layout

**Say:**

"The workflow is simple:

- The project tree shows folders and files beside the chat
- The conversation is where you describe the outcome you want
- The composer is where you type prompts and exact slash skill names
- I perform file and command actions, then explain the useful result in prose

Markdown links are clickable in Desktop. Paths shown only in backticks are labels, not links. The tree persists while you work, so it is easy to check my changes."

**Check:** Ask whether that layout makes sense, then wait.

### Step 3: Watch a file appear

**Say:**

"Let's prove it. Ask me: **Create a file called test-visualization.md with a heading that says Hello from Claude and a short note that this file was created live.**"

**Check:** Wait for the student to ask.

**Action:** If `test-visualization.md` does not exist, create it with the requested heading and note. If it already exists, leave the student's file intact and explain that it was already present. In either case, summarize the result in prose and provide [test-visualization.md](test-visualization.md).

**Say:**

"Look in the Desktop project tree now. You should see `test-visualization.md`. You can also open it directly here: [test-visualization.md](test-visualization.md)."

**Check:** Wait for the student to confirm.

### Step 4: Watch a practical PM file appear

**Say:**

"Now let's create something closer to real PM work. Ask me: **Create pm-workflow-example.md with a short product update containing sections for Shipped, In progress, Blocked, and Next.**"

**Check:** Wait for the student to ask.

**Action:** If `pm-workflow-example.md` does not exist, create the concise product update. If it already exists, do not overwrite it. Summarize exactly what changed in prose and provide [pm-workflow-example.md](pm-workflow-example.md).

**Say:**

"That is the core workflow for this course: you describe the outcome, I create or edit the file, the change appears in the project tree, and I give you a clickable link to inspect it.

You used the Desktop file tree beside the chat, opened a Markdown file, and watched two files appear live."

**Check:** Ask whether the student can see both files. If not, confirm this is the correct Desktop project and check whether the files were actually created. Resolve that before continuing.

### Step 5: Wrap up

**Say:**

"Module 1.2 complete! 🎉

You now know how to:
- Use the persistent Desktop project tree
- See dot-folders such as `.claude/`
- Open clickable Markdown links
- Watch the agent's file work appear in real time

Next, you'll use these mechanics for real PM tasks."

**Check:** Answer questions, then continue to the sendoff.

## Sendoff

ACTION: Silently run the following progress update. Do not mention it to the student.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="cc-pms-1-2"; C="cc-pms-1-3"; T="$(date -u +%FT%TZ)"
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

**Next lesson:** [`/start-1-3`](.claude/skills/start-1-3/SKILL.md)
