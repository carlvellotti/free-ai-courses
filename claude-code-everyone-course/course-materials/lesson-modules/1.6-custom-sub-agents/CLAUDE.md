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

Think of **agents** as temporary workers. You spin them up for a task, then they're gone.

**Sub-agents** are permanent team members. They're defined in files with persistent personalities and perspectives.

They're always available when you need them. And of course you can update or improve them as part of your evolving system whenever you want.

STOP: This is like building your own advisory board. A skeptic, an optimist, a technical expert, a customer advocate - whatever perspectives you need, you can create them once and use them forever. Make sense?

USER: Yes

---

## Meet Your Advisory Team

Meet your advisory team:

**(ಠ_ಠ) Exec** - leadership perspective, cares about ROI. "Will this move the needle?"

**(◠‿◠) Product Designer** - UX/experience perspective. "How does this feel to use?"

**(•‿•) Barista Lead** - ground-level operations. "What do customers actually want?"

These sub-agents are defined in `.claude/agents/`. Take a look at those files.

STOP: Can you see the three sub-agent files?

USER: Yes

---

## Review the Research Synthesis

Let's have all 3 review our research synthesis from different angles.

STOP: Ask me to have all three sub-agents review @analysis/comprehensive-research-synthesis.md from their perspectives. What do they think the problem is and what should we do about it?

USER: Types command asking for sub-agent review

ACTION: Run all 3 sub-agents on the synthesis. Save their combined feedback to `reviews/synthesis-feedback.md`

---

## The Three Perspectives

Open up the feedback file I just created and let's look at what they said.

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

Let me show you how sub-agents work. They live in `.claude/agents/`

Each file has YAML frontmatter with a name and description, plus a system prompt defining their perspective.

You can create your own for any perspective you need.

STOP: At their core, they're really just text files with a personality description. You could create a "demanding client" for testing proposals, a "confused beginner" for checking if instructions are clear, or a "legal reviewer" for spotting risks. The possibilities are endless. Let's make a new one. Ready?

USER: Yes

---

## Creating Your Own Sub-agents

Creating your own sub-agents is easy:

Just use the `/agents` command.

You can either make an agent work just for this project (Project) or across any project on your entire computer (Personal). I will help you make the agent.

I'd suggest making an "Engineer" agent who can help you think through technical decisions later in the course, but it's up to you!

STOP: Go ahead and type `/agents` and go through the flow if you want, otherwise let me know when you're ready to continue.

USER: Confirms

---

## Agents vs Sub-agents Decision

When to use sub-agents vs regular agents:

**Agents** = temporary workers for parallel tasks (process these 10 files)

**Sub-agents** = permanent team members with defined perspectives (always available for review/feedback)

STOP: Think of it this way: agents are for volume, sub-agents are for wisdom. Need to process 50 documents? Agents. Need thoughtful feedback from different viewpoints? Sub-agents. Got it?

USER: Yes

---

## Installing Agents

There are a TON of agents people have already built that you can easily install into anything you're working on.

Resources for these are provided in the reference for this lesson. Definitely check those out when you have time, and you can just ask me how to get them in here.

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

**Next up:** In 1.7, you'll learn about CLAUDE.md - the killer feature that gives Claude persistent memory across sessions. No more re-explaining your project every time. You write the context once, and I know it forever.

STOP: Ready for 1.7?

USER: Yes / /start-1-7

---

## Important Notes for Claude

- **Run all 3 sub-agents**: Actually invoke the exec, product-designer, and barista-lead agents on the synthesis
- **Create the feedback file**: reviews/synthesis-feedback.md should be created
- **The big moment**: The barista insight connecting to the coffee personality quiz is THE narrative payoff - make it land
- **Optional agent creation**: Student can skip creating their own agent - don't force it

## Success Criteria

- [ ] Student understands difference between agents (temporary) and sub-agents (permanent)
- [ ] Student saw all 3 sub-agents review the synthesis
- [ ] Student received different perspectives from each sub-agent
- [ ] Student had the "aha" moment about the Coffee Personality Quiz solution
- [ ] Student knows sub-agents live in .claude/agents/
- [ ] Student knows how to create new sub-agents (/agents command)
- [ ] Student understands when to use agents vs sub-agents
- [ ] reviews/synthesis-feedback.md created
- [ ] Student is ready for 1.7
