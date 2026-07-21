---
name: start-ross-mike-workflows
description: Learn Ross Mike's planning, context, automation, and product-taste workflows. Use when the student types /start-ross-mike-workflows.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

# Ross Mike Workflows

## Setup

ACTION: Run this bash block before teaching. The action stages the packaged scaffold without replacing any existing student file, then echoes a clickable link. Summarize the result in prose because bash output may be collapsed.

```bash
mkdir -p "ross-mike-workflows"
cp -rn ".claude/skills/start-ross-mike-workflows/assets/." "ross-mike-workflows/"
printf '[ross-mike-workflows/my-plan.md](ross-mike-workflows/my-plan.md)\n'
```

This lesson teaches the planning techniques from Ross Mike's "Claude Code Clearly Explained" video with Greg Isenberg.

---

## Welcome

Hey! Welcome to the Ross Mike Workflows mini-lesson.

This is an interactive version of Greg Isenberg's interview with Ross Mike: https://www.youtube.com/watch?v=zxMjOqM7DFs

The core insight: most people fail with Claude Code not because of the AI, but because of their inputs.

**What we'll cover:**
1. The "slop in, slop out" problem - why vague prompts fail
2. The Ask User Question technique - a prompt that transforms your planning
3. Hands-on practice - you'll build a real PRD for your own idea
4. Three bonus rules - context management, earning automation, and audacity

By the end, you'll have a reusable technique and your own project plan.

STOP: Ready to get started?

USER: Yes / Ready / Let's go

---

## The Problem

Most people fail with Claude Code for one reason: they give it garbage inputs and expect magic outputs. Ross Mike calls this "slop in, slop out."

Here's what a typical bad plan looks like:

**BAD PLAN:**
> Build me a TikTok UGC generating app for my marketing agency.

That's it. One sentence. No features. No decisions. Just vibes.

And then people wonder why the AI produces mediocre results.

STOP: Have you ever given Claude a vague prompt like this and been disappointed with the output?

USER: Yes / Probably / I don't know

---

## The Problem with Vague Plans

When you give Claude a vague input, it has to make hundreds of decisions for you:
- What features should it have?
- How should the UI look?
- What tech stack?
- How should users interact with it?
- What happens when something fails?

Every decision it makes on your behalf is a guess. And guesses compound into something you didn't want.

Now here's what the same idea looks like AFTER using the right technique:

**GOOD PLAN:**
```
# TikTok UGC Generator - PRD

## Feature 1: Script Generation
- User inputs brand voice + product details
- AI generates 3 script variations
- Each script has hook, body, CTA structure
- Test: Scripts render in under 3 seconds, include all 3 sections

## Feature 2: Avatar Selection
- Library of 10 pre-built avatars
- Preview avatar before generation
- Test: Avatar preview renders in under 5 seconds

## Feature 3: Video Generation
- Combines script + avatar + background music
- Progress indicator during generation
- Test: Video exports as MP4, playable, under 60 seconds length

## Feature 4: Asset Management
- Videos organized by client/campaign folders
- Download individual or batch export
- Test: Can retrieve any asset within 2 clicks

## UI Decisions
- Minimal, clean interface (not dashboard-heavy)
- Step-by-step wizard flow for new videos
- Dark mode default

## Technical Decisions
- React frontend
- Videos stored in S3, streamed on demand
- $5/month hard budget cap on AI API costs per user
```

Same idea. Completely different level of detail. This plan will actually produce good output.

STOP: See the difference? What do you notice about the second version?

USER: It has features / It has tests / It made decisions / etc.

---

## The Technique: Ask User Question

Here's the prompt that transforms vague ideas into detailed plans.

**THE PROMPT:**

> Read this plan file. Interview me in detail using the ask user question tool about literally anything - technical implementation, UI/UX concerns, and trade-offs.

That's it. This one prompt changes everything.

This forces Claude to ask YOU questions before it starts building. Questions like:
- "What's your ideal workflow - step-by-step wizard or open dashboard?"
- "How should we handle API costs - hard budget cap or pay-as-you-go?"
- "What UI style - minimal, dashboard-heavy, or chat-first?"

The magic: by answering these questions, YOU make the decisions. Claude stops guessing.

STOP: Ready to try this yourself?

USER: Yes / Let's do it

---

## Your Turn

Give me a one-sentence app idea. The "bad" version - vague, no details, just the concept.

Don't overthink it. Something you'd actually want to build.

STOP: What's your idea?

USER: [User types their app idea]

---

## The Interview

ACTION: Now interview the user about their idea using the AskUserQuestion tool (call the actual tool; never type lettered or numbered menus). Each call may author at most 4 options; the tool adds Other automatically, so never author one. Ask 3-4 rounds of questions covering:
- Core workflow and user flow
- UI/UX style and feel
- Technical decisions and trade-offs
- Edge cases and error handling

Be specific. Push them to make real decisions. Don't let them say "whatever you think is best."

After collecting their answers, continue to the next section.

---

## Your Plan

ACTION: Write a detailed PRD based on their answers to `ross-mike-workflows/my-plan.md` in the workspace root. Format it like the TikTok UGC example - features with tests, UI decisions, technical decisions. The staged my-plan.md is a placeholder meant to be filled: replace its contents. (Any OTHER existing file still needs the student's explicit approval before overwriting.)

I've written your plan here: [open my plan](ross-mike-workflows/my-plan.md).

Take a look at it. You went from one sentence to a real specification. This is what saves you tokens and frustration later - the AI isn't guessing anymore.

STOP: Click [open my plan](ross-mike-workflows/my-plan.md) and take a look. Does it capture what you wanted?

USER: Yes / Mostly / I want to change something

[If they want changes, help them refine the plan. Then continue.]

---

## Ross Mike's Other Tips

So you've now learned the Ask User Question technique - that's tip #1 from Ross Mike's list. But in the video, he shares four more tips that build on this foundation.

Let's go through them. I'm going to give you a scenario for each one.

---

## Scenario 1: The MCP Obsession

You've been trying to build an app but it keeps coming out wrong. You start Googling and see people talking about MCP servers, custom skills, plugins, agent.md files...

You think: "Maybe I need to set up more tools. Maybe that's why my output sucks."

STOP: What do you think Ross Mike would say about this?

USER: [User responds]

Here's what Ross actually said:

> "Don't over-obsess on MCP skills. I'm not saying don't get into these, don't read about them, don't use them. But I can almost guarantee you these things are not the reason why your product isn't working. Most of the time? Your plan sucks."

The answer is almost never "I need more tools." The answer is usually "I need a better plan."

You just learned the technique that fixes this. When your output is bad, run the Ask User Question interview again. Refine your plan. That's the fix.

STOP: Make sense? Any questions before we move on?

USER: Yes / Makes sense / Question

[If they have a question, answer it. Then continue.]

---

## Scenario 2: The Long Session

You've been working with Claude for a while. Things were going great at first - Claude was sharp, followed instructions perfectly.

But now it's getting weird. Claude repeats things you already discussed. It forgets context. It starts making mistakes it wasn't making before.

STOP: What do you think is happening?

USER: [User responds]

Ross Mike calls this the "drunk AI" problem:

> "As a conversation gets longer, the context window fills up. The model has to process too much information, and it starts to deteriorate - it forgets instructions, hallucinates, or gets lazy."

His rule is simple:

> "I generally wouldn't go over 50%. The moment you see 50% or even 40%, I would start a new session."

Think of it like this: imagine a professor kept dumping information on you for hours without a break. At some point you'd start forgetting stuff too.

The fix: when you hit 40-50% context, start fresh. Summarize your progress, paste it into a new session, and keep going.

This is Ross Mike's advice from the interview, not a verified quality threshold for Claude Desktop. Long projects can benefit from a clean handoff. Check the lower-right resource dashboard or type `/context`. When you want a reset, ask me to write a handoff into the project, then use `/clear` or open a new session with **Cmd+N** and link that handoff.

STOP: Do you know where to check your context usage in Claude Desktop?

USER: Yes / No / Not sure

[If no: Type `/context` to see resource information, or check the lower-right resource dashboard. Keep Ross Mike's quoted 40-50% rule in mind as his workflow advice.]

STOP: Make sense? Ready for the next scenario?

USER: Yes / Ready / Question

[If they have a question, answer it. Then continue.]

---

## Scenario 3: The Ralph Temptation

You've probably seen the hype about "Ralph loops" - automated workflows where you give Claude a task list and it builds your entire app while you sleep.

Sounds amazing, right? Set it and forget it.

STOP: Would you use a Ralph loop for your next project?

USER: [User responds]

Here's Ross Mike's take:

> "Imagine not knowing how to drive, but then buying a Tesla for the self-driving stuff. Cool in theory, but maybe it's a great idea to know how to drive, how to steer, how to hit the corners before you get the full automated version."

And he's blunt about it:

> "If we were to sit here eye to eye and you haven't built anything, deployed anything, there isn't a URL that I myself or Greg can click on that you've built - you have no business using Ralph."

The thing is: when you build manually - one feature, test it, next feature - you develop what Ross calls "vibe QA testing." You learn the rhythm. You know when something feels off.

If you automate before you have that instinct, you won't know how to fix things when they break.

His rule: **Earn the right to automate.** Deploy something manually first. Then automate.

STOP: Make sense? One more scenario to go.

USER: Yes / Makes sense / Question

[If they have a question, answer it. Then continue.]

---

## Scenario 4: The Clone Trap

You see a tweet: "I cloned a $4 billion app in 2 hours with Claude Code!"

Impressive, right? You think maybe you should do the same - clone something successful.

STOP: What's the problem with this approach?

USER: [User responds]

Here's what Ross and Greg said about this:

> "There's a lot of tutorials about cloning billion dollar software. 'I cloned a $4 billion software. Look at me.' But that's not the type of software that's going to work in 2026."

Greg called it "scroll-stopping software" - the stuff that makes you pause because you've never seen it before.

Ross shared an example: an app that generates running routes based on your mood. You tell it you're stressed or angry, and it creates a personalized route.

> "If you look at that app - the animations, how things were floating, the colors used for different emotions - that required thought. That's audacious."

His final tip:

> "Software development is starting to become easy. But software engineering - making things usable, creating great UX, having taste - that's hard. If all of us can clone the same features, what makes software different? Audacity."

STOP: Think about the plan you just created. What's one thing that could make it feel *different* - not just functional, but memorable?

USER: [User responds]

That's the mindset. Don't just build features. Build something with taste.

---

## Wrap Up

Let's recap what you learned from Ross Mike:

1. **The Ask User Question technique** - the prompt that transforms vague ideas into real plans
2. **Don't obsess over tools** - if your output sucks, fix your plan first
3. **The 50% context rule** - start fresh before Claude gets "drunk"
4. **Earn the right to automate** - build manually before using Ralph loops
5. **Audacity over syntax** - taste is the differentiator now

You've got your PRD in [my plan](ross-mike-workflows/my-plan.md). You've got the prompt to reuse on any project.

Now go build something worth clicking on.

Good luck.

---

## Notes for Claude

**Teaching style:**
- Conversational, direct, no fluff
- Quote examples inline. After reading or writing a file, echo the relevant result in prose and include a clickable link because tool output may be collapsed.
- Actually use the Ask User Question tool during the interview section
- Write real content to my-plan.md

**If user doesn't have an idea:**
- Suggest: "a personal finance tracker" or "a habit tracking app" or "a recipe organizer"
- Or use the TikTok UGC example as practice

**If user seems confused:**
- Slow down, check understanding
- Offer to re-explain the Ask User Question technique

**Success criteria:**
- [ ] User understands slop in / slop out concept
- [ ] User successfully used Ask User Question interview process
- [ ] User has a real PRD in ross-mike-workflows/my-plan.md
- [ ] User knows the 50% rule, earn automation rule, audacity rule

## Sendoff

ACTION: Run this exact progress update, summarize that the lesson is complete, and point the student to `/choose-next`.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="ross-mike-workflows"; C="choose-next"; T="$(date -u +%FT%TZ)"
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

NEXT: Type `/choose-next` in the composer.
