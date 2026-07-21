# Lesson 1.5: Agents

Remember those competitor files, old campaigns, and the CSV we saw but didn't touch? They're all in `inherited-chaos/` - take a look if you need a refresher.

Now we handle them.

This is where things get crazy.

STOP: Ready to process EVERYTHING at once?

USER: Yes

---

## The Big Reveal - Parallel Processing

**The Big Reveal:** We have 10 old campaign files to analyze.

Normally you'd read them one by one. That would take forever. It would even take me a while.

Instead, I can spin up 10 agents - 10 independent instances of myself - and process ALL of them simultaneously.

Think of it like cloning myself. I give each clone their own task. All clones work at the same time.

Then I combine their findings.

STOP: This is one of the most powerful features in Claude Code. Tasks that would take hours manually - or dozens of ChatGPT conversations - happen in seconds. Ready to see it in action?

USER: Yes

---

## Decision Quiz

STOP: Quick quiz - when should you use agents? A) One complex task, or B) Many similar tasks?

USER: B / Many similar tasks

Exactly! Agents are for parallelizable work - many similar things that can be done independently.

STOP: Ready to see it in action?

USER: Yes

---

## Campaign Salvage - 10 Agents

Let's start with the 10 old campaigns.

STOP: Ask me to use agents to analyze all the files in @inherited-chaos/old-campaigns/ and figure out which campaign ideas are worth salvaging. I'll create an individual agent for each and then combine their findings.

USER: Types command about analyzing campaigns

ACTION: Launch agents to analyze each of the 10 campaign files in parallel. Synthesize results into analysis/campaign-salvage-report.md with findings about each campaign.

**Discovery:** Previous manager kept trying engagement tactics, but they were all transactional (double points, bonus rewards). Nothing about identity or belonging. Every single campaign was about getting MORE TRANSACTIONS, not about making people FEEL something.

STOP: That just happened in parallel. 10 files, analyzed simultaneously, synthesized into one report. Imagine doing this with 100 customer interviews, or a year's worth of meeting notes. This is where Claude Code starts feeling like a superpower. Ready for more?

USER: Yes

---

## Advanced: Cross-Source Analysis

Now let's do something more advanced. We've analyzed campaigns and competitors separately. Let's connect the dots.

We'll use 4 agents, each doing something DIFFERENT:

- **Agent 1:** Analyze the member data CSV - what do the numbers tell us?
- **Agent 2:** Cross-reference competitor strengths vs our failed campaigns - what are they doing that we tried and failed at?
- **Agent 3:** Connect customer feedback themes to competitor insights - are customers asking for things competitors already have?
- **Agent 4:** Identify gaps - what works elsewhere that we haven't even tried?

Then synthesize into one comprehensive picture.

STOP: Ask me to use 4 agents to: analyze the member data CSV, cross-reference competitor strengths vs our campaigns, connect customer feedback to competitor features, and identify gaps. Then synthesize it all together.

USER: Types command for the 4-agent analysis

ACTION: Launch 4 specialized agents:
1. Analyze member-data-summary.csv for trends
2. Compare competitor research to our failed campaigns
3. Connect feedback themes to competitor features
4. Identify gaps in our approach

Synthesize everything into analysis/comprehensive-research-synthesis.md

**Discoveries:**
- The CSV shows people sign up, visit 2-3 times, then disappear. They're not leaving angry - they're leaving indifferent.
- Competitors with personality features have 3x better retention than points-only programs.
- Customers keep asking for "something more" but can't articulate what.
- The gap: nobody in our market has a personality-based approach.

STOP: See how connecting different sources reveals things you'd miss looking at them separately?

USER: Yes

---

## The Core Discovery

Connecting this to the overall story:

**THE CORE DISCOVERY:** "The program has no personality. It's transactional. Members don't engage because there's nothing to engage WITH. Points aren't enough - people need identity, belonging, a reason to care."

This connects back to the seed from 1.3: "coffee personalities"... that half-baked idea is starting to make sense.

STOP: Are you seeing it? The program needs PERSONALITY.

USER: Yes

---

## Agent Decision Framework

So when should you use agents?

**Use agents when:**
- You have many similar files
- Parallelizable tasks
- Research across multiple sources

**Don't use agents when:**
- You have one complex task
- Sequential work
- Things that depend on each other

STOP: The mental model: if you could hand the same instructions to 10 interns and have them each work independently, agents are perfect. If the work requires back-and-forth or builds on itself, stick with regular conversation. Clear?

USER: Yes

---

## Wrap-up

**Meta skill:** Parallel processing - handling many similar tasks simultaneously instead of one at a time.

**When to use agents:** You have multiple similar things that need the same type of analysis. The work is parallelizable - each piece can be done independently.

**Where else this applies:**
- 10 job postings for roles you're considering - analyze all of them at once, compare requirements
- 5 vendors you're evaluating - research each one in parallel, synthesize into a comparison
- 20 articles you've saved to read - have agents summarize each, then synthesize the key insights
- Apartment hunting - 8 listings to analyze for pros/cons/red flags simultaneously
- Competitive analysis - research 6 competitors at once instead of one by one
- Planning a trip - agents researching flights, hotels, activities, restaurants all at once

**Next up:** In 1.6, you'll meet your advisory team. Custom sub-agents with different perspectives - an exec, a designer, a frontline employee - each giving you feedback from their point of view. This is where we figure out what to actually DO about the loyalty program problem.

STOP: Ready for 1.6?

USER: Yes / /start-1-6

---

## Important Notes for Claude

- **Actually use agents**: Don't fake the parallel processing - actually spin up multiple agents
- **Create real files**: campaign-salvage-report.md and comprehensive-research-synthesis.md should be created in the analysis/ folder
- **Core discovery emphasis**: Make sure the "no personality" insight lands clearly
- **Coffee personality callback**: Explicitly connect back to the idea from previous-manager-notes.md

## Success Criteria

- [ ] Student saw 10 agents process campaigns in parallel
- [ ] Student saw 4 specialized agents do cross-source analysis
- [ ] Student understands when to use agents (parallel, similar tasks)
- [ ] Student understands when NOT to use agents (sequential, dependent tasks)
- [ ] Student grasped the core discovery: "program has no personality"
- [ ] Student saw the coffee personality idea resurface
- [ ] analysis/campaign-salvage-report.md created
- [ ] analysis/comprehensive-research-synthesis.md created
- [ ] Student is ready for 1.6
