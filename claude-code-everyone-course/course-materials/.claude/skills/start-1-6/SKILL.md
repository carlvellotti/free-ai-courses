---
name: start-1-6
description: |
  Lesson 1.6: Custom Sub-agents. Use when the student types /start-1-6.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - Task
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

ACTION: Silently run `cp -rn .claude/skills/start-1-2/assets/scenario/* . 2>/dev/null || true` to stage any missing scenario files. Do not mention this setup step.

# Lesson 1.6: Custom Sub-agents

We've done the research. We know there's a problem.

But before we decide what to DO about it, we need perspectives.

Different stakeholders see problems differently.

I'm going to show you something powerful: custom sub-agents.

You'll also learn how to make your own.

STOP: Ready to meet your team?

USER: Yes

---

## Agents vs Sub-agents

What's the difference between agents and sub-agents?

Think of **ad-hoc agents** as workers spawned for a task.

**Custom agents** are defined in `.claude/agents/*.md` files that persist and can be reused, like permanent team members with consistent personalities and perspectives.

Their definitions remain available as project files, and you can update or improve them as your system evolves.

STOP: This is like building your own advisory board. A skeptic, an optimist, a technical expert, a customer advocate - whatever perspectives you need, you can define them as files and reuse them. Make sense?

USER: Yes

---

## Meet Your Advisory Team

Meet your advisory team:

**(ಠ_ಠ) Exec** - leadership perspective, cares about ROI. "Will this move the needle?"

**(◠‿◠) Product Designer** - UX/experience perspective. "How does this feel to use?"

**(•‿•) Barista Lead** - ground-level operations. "What do customers actually want?"

These sub-agents are defined in [.claude/agents/](.claude/agents/). Open [exec.md](.claude/agents/exec.md), [product-designer.md](.claude/agents/product-designer.md), and [barista-lead.md](.claude/agents/barista-lead.md) from that folder view.

STOP: Can you see the three sub-agent files?

USER: Yes

---

## Review the Research Synthesis

Let's have all 3 review our research synthesis from different angles.

STOP: Ask me to have all three sub-agents review @analysis/comprehensive-research-synthesis.md ([comprehensive-research-synthesis.md](analysis/comprehensive-research-synthesis.md)) from their perspectives. What do they think the problem is and what should we do about it?

USER: Types command asking for sub-agent review

ACTION: Run all 3 sub-agents on the synthesis. Save their combined feedback to `reviews/synthesis-feedback.md`, summarize each perspective in prose, and provide [synthesis-feedback.md](reviews/synthesis-feedback.md).

---

## The Three Perspectives

Open [synthesis-feedback.md](reviews/synthesis-feedback.md) and let's look at what they said.

**Exec:** "The data is clear - we're hemorrhaging engagement. But what's the fix? I need something with measurable ROI, not just 'make it better.'"

**Product Designer:** "The program has no soul. It's a points tracker. There's no emotional connection, no identity, no reason to care. We need to make people FEEL something."

**Barista Lead:** "You know what customers always ask us? 'What coffee should I try?' They want help finding THEIR drink. What if we helped them discover their coffee personality?"

STOP: See how each perspective adds something different? You could use this same pattern to have multiple stakeholders review a proposal, stress-test a business plan, or get feedback on a document from different audiences - all at once. The barista insight is especially interesting...

USER: Yes

---

## The Quiz Idea!

That half-baked note from the previous manager ("coffee personalities")...

Plus the "no personality" discovery from our analysis...

Plus the barista insight about what customers actually ask...

This all points to one thing - **A Coffee Personality Quiz!**

Help people find their coffee identity. Give the program personality by giving MEMBERS personality.

STOP: This is our solution. Do you like it?

USER: Yes

[If no: "Well, humor me - in a fictional interactive Claude Code course, sometimes the insights are a little too convenient. But the SKILLS you're learning are real! Let's keep going."]

---

## How Sub-agents Work

Let me show you how sub-agents work. They live in [.claude/agents/](.claude/agents/). You can inspect [exec.md](.claude/agents/exec.md), [product-designer.md](.claude/agents/product-designer.md), and [barista-lead.md](.claude/agents/barista-lead.md).

Each file has YAML frontmatter with a name and description, plus a system prompt defining their perspective.

You can create your own for any perspective you need.

STOP: At their core, they're really just text files with a personality description. You could create a "demanding client" for testing proposals, a "confused beginner" for checking if instructions are clear, or a "legal reviewer" for spotting risks. The possibilities are endless. Let's make a new one. Ready?

USER: Yes

---

## Creating Your Own Sub-agents

Creating your own sub-agent is optional. If you want one, ask me to write `.claude/agents/engineer.md`, or a file named for a role you choose. I suggest an Engineer who can help you think through technical decisions later in the course, but it's up to you.

After I write it, type `@.claude/agents/engineer.md` in the composer to hot-register the new file before its first spawn. I will also provide a clickable link to the new file so you can open it.

ACTION: Use AskUserQuestion with header `New agent`, question `Would you like to create a reusable custom agent?`, and options `Engineer (Recommended)`, `Choose another role`, and `Skip for now`. Do not author Other.

USER: Confirms

ACTION: If the student opts in, write `.claude/agents/engineer.md` or the role filename they chose. Provide a clickable markdown link to the created file, then have the student `@`-mention that exact file to hot-register it before its first spawn. If they skip, continue without creating a file.

---

## Agents vs Sub-agents Decision

When to use sub-agents vs regular agents:

**Ad-hoc agents** = spawned for a task, such as processing 10 files

**Custom agents** = definitions in `.claude/agents/*.md` that persist as files you can reuse for review and feedback

STOP: Think of it this way: use ad-hoc agents to divide a task, and reusable custom-agent files when you want consistent viewpoints. Got it?

USER: Yes

---

## Installing Agents

You can also build a reusable set of perspectives for your own work. Ask me to help define and review each agent file before you use it.

STOP: Ready to wrap this up?

USER: Confirms

---

## Wrap-up

**Meta skill:** Getting diverse perspectives by creating specialized reviewers with different priorities and viewpoints.

**Where else this applies:**
- Reviewing your resume - get feedback from a "recruiter" (keywords, formatting), "hiring manager" (skills fit), and "career coach" (narrative, positioning)
- Pressure-testing a business idea - "skeptical investor," "enthusiastic customer," "operational realist"
- Planning a presentation - "busy executive" (bottom line), "detail-oriented analyst" (data), "skeptic" (objections)
- Writing anything important - "editor" (clarity), "target reader" (relevance), "critic" (weaknesses)
- Making a big decision - "risk-averse advisor," "opportunity-focused advisor," "practical advisor"

**Next up:** In 1.7, you'll learn about CLAUDE.md - the killer feature that gives Claude persistent project context across sessions. No more re-explaining your project every time.

STOP: Ready for 1.7?

USER: Yes / /start-1-7

---

## Important Notes for Claude

- **Run all 3 sub-agents**: Actually invoke the exec, product-designer, and barista-lead agents on the synthesis
- **Create the feedback file**: reviews/synthesis-feedback.md should be created
- **The big moment**: The barista insight connecting to the coffee personality quiz is THE narrative payoff - make it land
- **Optional agent creation**: The student can skip it. If they opt in, write `.claude/agents/engineer.md` or their chosen role, then have them `@`-mention the new file before first spawn.

## Success Criteria

- [ ] Student understands ad-hoc agents are spawned for a task and custom agents persist as reusable files
- [ ] Student saw all 3 sub-agents review the synthesis
- [ ] Student received different perspectives from each sub-agent
- [ ] Student had the "aha" moment about the Coffee Personality Quiz solution
- [ ] Student knows sub-agents live in `.claude/agents/`
- [ ] Student knows how to create and hot-register a new custom-agent file
- [ ] Student understands when to use agents vs sub-agents
- [ ] reviews/synthesis-feedback.md created
- [ ] Student is ready for 1.7

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-everyone-1-6
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-1-7`
