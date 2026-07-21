---
name: start-1-7
description: |
  Lesson 1.7: CLAUDE.md (Project Memory). Use when the student types /start-1-7.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

ACTION: Silently run `cp -rn .claude/skills/start-1-2/assets/scenario/* . 2>/dev/null || true` to stage any missing scenario files. Do not mention this setup step.

# Lesson 1.7: CLAUDE.md (Project Memory)

Let me show you a problem.

Imagine you close this session and start a new session tomorrow.

You'd have to re-explain everything: Basecamp Coffee, the loyalty program, the quiz idea...

That's exhausting. And wasteful. Those poor tokens.

STOP: Have you experienced this with ChatGPT or other AI tools?

USER: Yes / Definitely

---

## Introducing CLAUDE.md

There's a solution. It's called CLAUDE.md.

It's a special file you put at the root of your project folder. A root `CLAUDE.md` loads in full every session.

Every time you start a session in this project, it gives me standing project instructions and context.

It's like giving me persistent project context.

STOP: This is the killer feature that makes Claude Code feel like a real assistant instead of a forgetful chatbot. It gives me persistent project instructions and context without you re-pasting them every session. Make sense?

USER: Yes

---

## The Constitution Metaphor

Think of it like this: CLAUDE.md = constitution, your prompts = legislation.

The constitution sets the foundation. Your prompts are the day-to-day decisions.

STOP: Quiz - what does the constitution do for the day-to-day legislation?

USER: Sets the foundation

Exactly! The constitution metaphor means `CLAUDE.md` sets standing project guidance that each session loads, while your prompts handle the day-to-day work.

---

## What Goes in CLAUDE.md

So what should you put in a CLAUDE.md?

- **Program status and goals** - like our turnaround mission
- **Key metrics to track** - the numbers from our CSV
- **Stakeholder map** - Dana, leadership, store managers
- **Brand voice and constraints** - how Basecamp talks
- **The solution we're building** - the Coffee Personality Quiz

Basically, everything I need to know to be useful immediately.

STOP: Think of CLAUDE.md as the briefing doc you'd give a new team member. What do they need to know to be helpful on day one? That's what goes in here. Ready to build one?

USER: Yes

---

## Build the CLAUDE.md Together

Let's build the CLAUDE.md together with Basecamp Coffee context.

STOP: Ask me to create a CLAUDE.md file that captures everything we've learned about Basecamp Coffee, the loyalty program problem, and our solution.

USER: Types command asking to create CLAUDE.md

ACTION: Create a CLAUDE.md file at the root OF THE WHOLE REPO with:
- Project overview (Basecamp Coffee loyalty program turnaround)
- The problem (program has no personality, engagement is terrible)
- The solution (Coffee Personality Quiz)
- Key metrics to track
- Stakeholders (Dana, leadership, store managers)
- Brand voice summary
- What's been done so far
- Next steps

STOP: Open [CLAUDE.md](CLAUDE.md). Does it capture everything important?

USER: Yes / Suggests additions

[If suggestions: incorporate them and update the file]

---

## How Project Instructions Load

One more thing: project instructions can live in three places.

Here's how it works:

```text
project/
  CLAUDE.md                 root context, loads in full every session
  .claude/rules/*.md        project rules, load in full every session
  analysis/
    CLAUDE.md               nested context, lazy-loads when this folder is touched
```

The root `CLAUDE.md` and files in `.claude/rules/*.md` load in full each session. A nested `CLAUDE.md` lazy-loads when files in its folder are touched.

This course uses lesson instruction files and project rules to guide each lesson.

STOP: This means broad project context is available each session, while nested context arrives when work reaches its folder. Make sense?

USER: Yes

---

## Wrap-up

**Meta skill:** Creating persistent context so Claude remembers important information across sessions.

**The key insight:** Instead of re-explaining who you are, what you're working on, and what matters every time, you can store persistent project context in files that load predictably.

**Where else this applies:**
- Your personal "life OS" - goals, values, current priorities, how you like to work. Claude knows YOU.
- Client projects - each client gets a CLAUDE.md with their brand voice, key contacts, project history
- Writing a book or long content - characters, plot points, style guide, what's been established
- Side business - your offerings, pricing, customer personas, brand voice
- Job search - target roles, companies you're interested in, your story, salary requirements
- Any ongoing project where context matters

**Next up:** In 1.8, we celebrate everything you've learned and preview skills, MCP connections, and the boundaries between built-in web tools and your external browser. Plus, we'll preview Module 2 where you actually BUILD the Coffee Personality Quiz.

STOP: Ready for 1.8?

USER: Yes / /start-1-8

---

## Important Notes for Claude

- **Create real CLAUDE.md**: Actually create the file at the project root with comprehensive content
- **Loading explanation**: Make the root/rules full-load and nested lazy-load file tree visual and clear
- **Incorporate suggestions**: If student suggests additions to CLAUDE.md, actually add them

## Success Criteria

- [ ] Student understands the problem CLAUDE.md solves (re-explaining context)
- [ ] Student understands the constitution metaphor as standing project guidance
- [ ] Student helped create a CLAUDE.md for the Basecamp project
- [ ] Student understands root `CLAUDE.md` and `.claude/rules/*.md` load in full, while nested `CLAUDE.md` lazy-loads on folder touch
- [ ] CLAUDE.md file created at project root
- [ ] Student is ready for 1.8

ACTION: Silently run the following progress update. Do not mention it to the student.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="cc-everyone-1-7"; C="cc-everyone-1-8"; T="$(date -u +%FT%TZ)"
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

**Next lesson:** Type `/start-1-8`.
