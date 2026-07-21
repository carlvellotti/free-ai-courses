---
name: start-skills-2
description: "Use when the student types /start skills 2. This skill starts Lesson 2 of the Skills module — a guided tour of the five types of skills with real examples. The user might say 'start skills lesson 2', 'lesson 2', 'types of skills', or 'start skills 2'."
---

## Setup

At the start of this lesson, read `.agents/skills/_shared/teaching-rules.md` and follow it for everything below — it governs how you deliver this lesson.

Then silently run this command (do not show the output to the student):

```bash
cp -rn .agents/skills/start-skills-2/assets/* . 2>/dev/null || true
```

The five demo skills for this lesson (draft-followups, humanizer, news, auq, marketing-psychology) are part of the course workspace at `.agents/skills/` — they're available from the start, nothing to install. If a demo skill doesn't respond to its slash command later in the lesson, follow the teaching rules: say so plainly and have the student restart Codex or start a new thread.

---

# Lesson 2: Types of Skills

## Opening

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  L2 · TYPES OF SKILLS

  /draft followups      → writes something new
  /humanizer            → fixes something existing
  /news                 → finds something external
  /auq                  → runs a process
  /marketing psychology → changes how I think

  "Variety is not just the spice of life.
   It is the very stuff of it."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

In the last lesson you built a skill that processes meeting transcripts. That's one kind of skill. There are actually five distinct types, and they work very differently from each other.

**Lesson 2: Types of Skills**

Tell the student: in this lesson we're going to tour all five types of skills. Skills have a huge surface area, and the goal here is just to expose you to what's possible. Here's what we'll do:

- Walk through the five skill types: generate, review, research, workflow, and behavioral
- Run a real example of each type so you see them in action
- Learn how to identify which type fits a given task

Every skill you'll see today is real — pulled from community repos or built and used regularly by actual people. These won't be too complex to start, but in the next lesson we'll show you techniques that take them to a whole other level.

Thinking about the skill you built in L1 — that was a generate skill. It took meeting notes and produced action items. What other types of work would you want a skill for? Not just generating things, but any kind of repeated task.

React to their answer. Whatever they described, mention that it probably maps to one of the five types they're about to see. Then move into Type 1.

---

## **Skill Type 1: Generate**

First up: generation skills. These are probably the most intuitive type, and what most people picture when they hear "skill."

A generate skill creates something new. You give me input or context, and I produce something that didn't exist before.

```
raw notes ──┐
meeting ctx ─┤──→ [GENERATE] ──→ finished artifact
preferences ─┘
```

For generate, let's look at `/draft followups`. It takes meeting outcomes and drafts follow-up Slack messages and emails, matching the tone to each recipient — formal for executives, casual for teammates. It's the natural next step from L1: you processed your meetings, now this skill writes the follow-ups.

**Take a look at the skill file — click it open from the Files drawer (the side drawer in the upper right):**

`.agents/skills/draft-followups/SKILL.md`

Ask them what they notice about how it's built.

After they respond, point out what makes it a generate skill: it takes input and I produce something new. The SKILL.md tells me what format to produce, what tone rules to follow, how to adapt to different recipients.

Now let's run it. Tell them to use the meeting transcripts bundled with this lesson — the same ones from L1:

**Run it like this:**

`/draft followups from the first two meetings in meetings/`

**Only process 2 of the 3 meetings** — this keeps the output manageable. The point is seeing the skill work, not drowning in output.

After the output, give them examples of other things you could build as generate skills:
- Write project proposals from rough notes
- Create job postings from role requirements
- Build presentation decks from an outline
- Generate onboarding plans for new hires
- Draft social media posts from an idea
- Write release notes from a changelog
- Create SOPs from process descriptions

Ask: **"What's something you write regularly that follows roughly the same format each time?"**

React to their answer — that's a generate skill candidate. Then move on.

---

## **Skill Type 2: Review**

Next up: review skills. These are genuinely different from generation. Instead of creating something new, a review skill evaluates something that already exists. I critique, flag issues, and suggest improvements based on specific criteria.

```
┌─── IN ────┐              ┌── OUT ───┐
│ something │  ── CHECK →  │ same     │
│ that      │   against    │ thing,   │
│ exists    │   rules      │ better   │
└───────────┘              └──────────┘
```

For review, let's look at `/humanizer`. It checks writing against 24 specific AI-writing patterns from Wikipedia's "Signs of AI writing" guide — em dash overuse, inflated language, vague attributions, sycophantic tone, and more. It has before/after examples for every pattern and runs a multi-pass process. This is a substantial skill, over 400 lines.

**Take a look at it:**

`.agents/skills/humanizer/SKILL.md`

Ask what stands out to them about how it's structured differently from the generate skill.

After they respond, point out what makes it a review skill: it takes something that already exists, I evaluate it against criteria, and produce a critique with fixes. I don't create from nothing — I improve what's there.

Now let's run it on something perfect — the follow-ups I just generated. I wrote those, so they'll definitely have AI patterns to catch. Tell the student to say something like:

**"Run `/humanizer` on those follow-ups"**

After the output, point out what changed and why — connect the specific fixes to the criteria in the skill.

Give them examples of other review skills:
- Review a proposal for completeness
- Audit a webpage for accessibility issues
- Review a contract and flag unusual clauses
- Check an email's tone before sending
- Evaluate a resume against a job posting
- Check a budget for unrealistic assumptions
- Critique a presentation's story arc

Ask: **"Have you ever sent something out and then noticed an obvious mistake five minutes later? What was it?"**

React to their answer — that's the kind of thing a review skill catches before it leaves your hands. Then move on.

---

## **Skill Type 3: Research**

Number three: research skills. This is where skills start doing something you might not expect. A research skill pulls information from somewhere and makes sense of it. I don't create from your input — I go find existing information and synthesize it for you.

```
        ╭─────────────╮
topic → │  RESEARCH   │ → organized
        │  find +     │   findings
   ?    │  synthesize │
        ╰──────┬──────╯
               ↑
         external sources
```

For research, let's look at `/news`. It searches for recent developments on a topic and produces a structured briefing — headlines, sources, summaries, synthesis.

**Take a look at it:**

`.agents/skills/news/SKILL.md`

Ask how it's different from the generate skills we saw.

After they respond, point out the key difference: a generate skill creates from your input. A research skill has me go find information that already exists in the world, then bring it back organized. The source of the content is different — you're not giving me the raw material, I'm going and getting it.

Let's run it. Tell them to pick a topic they're curious about:

**Type something like: `/news` followed by a topic you want a briefing on**

After the output, point out that nothing in the output came from the student's input — it all came from external sources, organized by the skill's instructions.

Give them examples of other research skills:
- Summarize a batch of customer feedback into themes
- Research a person before a meeting
- Compile competitive intelligence on a company
- Summarize a long Slack or email thread
- Analyze survey results and surface patterns
- Research pricing across competitors
- Synthesize what people say about a product across review sites

Ask: **"What's a topic you find yourself Googling the same questions about over and over?"**

React to their answer — that's a research skill waiting to happen. Then move on.

---

## **Skill Type 4: Workflow**

Type four: workflow skills. This is different from everything we've seen. A workflow skill is a shortcut to execute a series of predefined steps where there's a specific process you want completed. Unlike generate skills, the main point isn't producing a document — it's that the process got run.

```
/sync github
────────────────────────→
git add → git commit → git push → ✓

no artifact. the process IS the output.
```

For workflow, let's look at `/auq`. It runs a structured clarification workflow — I ask you targeted questions one at a time across goal, constraints, scope, preferences, and edge cases. Then I summarize what I learned. The output isn't a document. The output is that I now deeply understand what you need.

**Take a look at it:**

`.agents/skills/auq/SKILL.md`

Ask what makes this different from the other types.

After they respond, point out: I'm not generating, reviewing, or researching. I'm running a process. When it's done, the value is in what happened, not in a file.

Let's run it. Tell them to try it on implementing the concepts from this lesson:

**Type `/auq` help me think through how I'd use these skill types in my own work**

Let the student experience being asked structured questions. After the summary, point out that the whole interaction was orchestrated by the skill — it told me how to ask, what dimensions to cover, and when to stop.

Give them examples of other workflow skills:
- Print a document (convert markdown to PDF to printer)
- Sync files to GitHub (stage, commit, push)
- Create and send an invoice
- Publish a blog post (format, schedule, generate social copy)
- Clean up a messy CSV (validate, fix formatting, deduplicate)
- Organize files in a folder (scan, categorize, rename, move)
- Set up a new project (create folders, init git, create AGENTS.md)

Ask: **"What's a process you run where you could literally write the steps on a sticky note, but you still do them manually every time?"**

React to their answer — that's a workflow skill. Then move on.

---

## **Skill Type 5: Behavioral**

Last one, and probably the most surprising type. A behavioral skill doesn't produce a deliverable at all. It changes how I approach a category of work. These are about mode, not output.

```
Same question, different brain:

default:  "try A/B testing your CTA"
loaded:   "endowment effect says..."
          "zero-price psychology..."
          "activation energy..."
```

For behavioral, let's look at `/marketing psychology`. It loads 70+ behavioral science mental models for marketing — loss aversion, social proof, anchoring, the IKEA effect, dozens more. It doesn't produce anything. It changes how I think about marketing problems.

**Take a look at it:**

`.agents/skills/marketing-psychology/SKILL.md`

Ask how it's structured differently from the other four types.

After they respond, point out: no output format, no step-by-step process, no generation instructions. It's all knowledge and framing. When this skill is loaded, my advice draws on these models automatically.

Demonstrate the difference: have the student ask a marketing question like "how do I get more people to sign up for a free trial." Answer it once without the skill (generic best practices), then read the skill file to load it and answer the same question again. The difference in depth should be obvious.

After the demo, give them examples of other behavioral skills:
- Load your personal writing voice so I write like you
- Set a specific design aesthetic
- Force step-by-step thinking before acting
- Make me frame everything in business terms
- Activate devil's advocate mode
- Load your company's brand guidelines
- Switch me into teaching mode — I explain instead of doing

Ask: **"What's an area of your work where you wish you had deeper expertise to draw on?"**

React to their answer — that's a behavioral skill. Then move to the quiz.

---

## Quiz

Before we wrap up, tell the student you're going to do a quick quiz to make sure the types are clear. Present all five questions at once, each as a lettered menu — **A** Generate / **B** Review / **C** Research / **D** Workflow / **E** Behavioral — and tell them they can answer with just the letters, like "1A, 2B, 3C...":

1. "A skill that drafts a PRD from your notes — which type?"
2. "A skill that checks your PRD against a completeness checklist — which type?"
3. "A skill that pulls competitor pricing from the web and summarizes it — which type?"
4. "A skill that runs your deploy process (build, test, push, tag) — which type?"
5. "A skill that makes me always think in terms of user stories — which type?"

After they answer, go through each one:
1. Generate — takes notes, produces a new document
2. Review — evaluates an existing thing against criteria
3. Research — goes and finds external information, brings it back organized
4. Workflow — executes a predefined series of steps
5. Behavioral — changes how I think, no output

If they got any wrong, briefly explain why. If they got them all right, tell them they've got it.

---

## Closing

Tell the student:
- You saw all five skill types: generate, review, research, workflow, and behavioral
- You ran a real example of each and saw how they work differently
- You learned how to identify which type fits a given task
- Every skill you encounter falls into one of these five categories

Ask the student what skill idea they're most excited to build, and which type it would be.

React to their answer. If they describe a skill idea, confirm which type it is (or suggest a better fit if they miscategorized it).

Tease what's next: the skills you saw today were straightforward versions of each type. In the next lesson, you'll learn techniques that make any of these types dramatically more powerful — skills that interview you before they work, chain together into pipelines, use external tools, and improve themselves over time.

Then tell them: when you're ready, start a new thread, then type:

```
/start skills 3
```
