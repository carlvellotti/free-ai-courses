# Module 1.5: Autonomy Modes & Planning - Teaching Script

Welcome to Module 1.5: Autonomy Modes & Planning

So far you've been using Antigravity in one way - it helps you, you direct it

But Antigravity actually has different **autonomy levels** that change HOW the agent works with you

Think of them like autopilot settings on a car - same car, different levels of AI control

STOP: Ready to see how they work?

USER: Confirms

---

Antigravity has three autonomy levels:

1. **Agent-driven**: Full autopilot - the agent plans, executes, and tests independently
2. **Agent-assisted**: Collaborative mode - the agent suggests, you control (RECOMMENDED)
3. **Review-driven**: Analysis only - the agent reviews and analyzes, doesn't make changes

You've been using Agent-assisted mode - the sweet spot for most PM work

STOP: Look for the autonomy or mode settings in Antigravity - do you see where you can switch between these?

USER: Confirms or describes what they see

---

Let's understand each level:

**Review-driven mode** = Antigravity ONLY reads and analyzes, no changes

This is the safest mode - like having a consultant who gives advice but doesn't touch anything

Perfect for:
- Exploring unfamiliar documents without risk
- Getting analysis before committing to changes
- Research and learning

STOP: Make sense so far?

USER: Confirms

---

**Agent-assisted mode** = The sweet spot (RECOMMENDED)

In this mode, Antigravity suggests approaches and you stay in control

The agent proposes, you decide

It creates drafts you can review, makes suggestions you can accept or reject

This is what you've been using throughout this course

STOP: Does that match how we've been working together?

USER: Confirms

---

**Agent-driven mode** = Full autopilot

In this mode, Antigravity takes over completely

It plans the work, executes it, tests it, and iterates - all autonomously

You give it a goal, it figures out how to achieve it

This is powerful for:
- Routine tasks you trust it to handle
- Complex technical work
- Batch operations

For PM work, you'll usually stick to Agent-assisted so YOU drive the decisions

STOP: Make sense why Agent-assisted is recommended for PMs?

USER: Confirms

---

Now let's talk about something unique to Antigravity: **Planning Mode vs Fast Mode**

This is separate from autonomy levels - it's about HOW the agent approaches tasks

**Planning Mode**: Deep thinking mode
- The agent researches thoroughly
- Creates a structured plan before acting
- Generates artifacts (more on this in a moment)
- Best for complex, multi-step work

**Fast Mode**: Quick execution
- The agent acts immediately
- Skips the planning phase
- Best for simple, clear tasks

STOP: When do you think you'd use Planning Mode vs Fast Mode?

USER: Gives their thinking

---

Good thinking! Here's the general rule:

**Use Planning Mode for:**
- Complex PM deliverables (PRDs, strategy docs)
- Multi-step projects with dependencies
- Work that needs stakeholder review before execution
- Anything where "measure twice, cut once" applies

**Use Fast Mode for:**
- Quick edits and fixes
- Simple file operations
- Tasks with clear, straightforward instructions
- When you already know exactly what you want

For PM work, Planning Mode is often valuable because your work affects many people

STOP: Does this decision framework make sense?

USER: Confirms

---

Now here's something really cool about Antigravity: **Artifacts**

When the agent works in Planning Mode, it automatically generates artifact files:

1. **task.md** - A living checklist of what needs to be done
2. **implementation_plan.md** - The technical blueprint for the work
3. **walkthrough.md** - Proof of work with screenshots and details

These artifacts are incredibly useful for PMs because:
- You can review plans before execution
- You have documentation of what was done
- You can share the plan with stakeholders

STOP: Have you noticed any artifact files being created in your work?

USER: Responds

---

Let's try Planning Mode with a realistic PM scenario

You're planning a feature launch for TaskFlow's new real-time collaboration feature

This needs: messaging strategy, email sequences, in-app announcements, and success metrics

STOP: Make sure you're in Planning Mode (or turn it on if not). Tell me when ready.

USER: Confirms

---

Perfect! Let me show you the feature we're launching

ACTION: Read lesson-modules/1.5-autonomy-modes/feature-announcement.md and present the details

STOP: Sound like a realistic PM task?

USER: Confirms

---

Now let's see Planning Mode in action

When you give a complex request, the agent will:
1. Research relevant files
2. Ask clarifying questions
3. Create a structured plan
4. Wait for your approval before executing

STOP: Ask me: "Plan a multi-channel launch campaign for this feature. Research our positioning and target customers, then create a go-to-market plan."

USER: Types the prompt

---

ACTION: Research context files and potentially web sources

Now I'm asking clarifying questions to make the plan specific to YOUR needs:

Question 1: Which customer segment should we prioritize - Enterprise teams (Sarah persona) or smaller teams (Mike/Alex personas)?

STOP: What's your answer?

USER: Answers

---

Question 2: What's your timeline - quick 2-week launch or more extended 4-week rollout?

STOP: What timeline works?

USER: Answers

---

Question 3: Should we lead with email campaign, in-app announcement, or coordinated simultaneous launch?

STOP: What's your preference?

USER: Answers

---

Perfect! I have everything I need

Now I'm creating the plan...

ACTION: Generate a structured plan document showing:
- Files to create: launch-campaign-plan.md, launch-timeline.md
- Structure for each file
- Key sections and content outline
- Execution order

This is the PLAN - the blueprint showing what will be created

STOP: Review the plan. Does it look good, or want to make changes before I execute?

USER: Reviews and responds

---

(If they request changes):
ACTION: Update the plan based on their feedback
Updated! The plan now includes your changes.
STOP: Better? Any other changes?
USER: May iterate or confirm done

---

Excellent! The plan is finalized

Here's the key difference from Fast Mode:
- In Planning Mode, you see the full plan BEFORE any work is done
- You can iterate and refine
- Then you approve execution

This is perfect for PM work where you need to think before you act

STOP: Ready for me to execute the plan and create the deliverables?

USER: Confirms

---

Executing the plan...

ACTION: Create the planned deliverables:
- lesson-modules/1.5-autonomy-modes/launch-campaign-plan.md
- lesson-modules/1.5-autonomy-modes/launch-timeline.md

Done! All deliverables created as outlined in the plan

STOP: Do you see the new files?

USER: Confirms

---

This is the power of Planning Mode

The complete workflow was:
1. You gave one complex prompt
2. I researched files (automatic)
3. I asked clarifying questions
4. I generated a plan document (the blueprint)
5. You reviewed and iterated
6. You approved
7. I executed and created everything

This "plan first, execute later" approach is perfect for complex PM work

You stay in control while I handle the complexity

STOP: Can you see how powerful this is for complex projects?

USER: Confirms

---

Let's recap the autonomy framework:

**Autonomy Levels:**
- **Agent-driven**: Full autopilot (agent does everything)
- **Agent-assisted**: Collaborative (agent suggests, you decide) - RECOMMENDED
- **Review-driven**: Analysis only (agent reads, doesn't write)

**Execution Modes:**
- **Planning Mode**: Research → Clarify → Plan → Review → Execute (for complex work)
- **Fast Mode**: Direct execution (for simple tasks)

**Artifacts:**
- task.md, implementation_plan.md, walkthrough.md - auto-generated documentation

STOP: Which autonomy level do you think you'd use for writing a PRD?

USER: Answers

---

Good thinking! For PRDs:
- **Agent-assisted** is usually best - YOU make the product decisions
- **Planning Mode** helps structure complex PRDs
- The agent helps you think, but YOU drive

For quick fixes or simple edits:
- **Fast Mode** in Agent-assisted is perfect

The key is matching the autonomy level to the task complexity and your need for control

STOP: Make sense?

USER: Confirms

---

Excellent! You've now mastered Antigravity's autonomy system

Quick recap:
- **Three autonomy levels** control how much the agent takes over
- **Planning vs Fast Mode** controls depth of thinking
- **Artifacts** provide documentation and proof of work
- **Agent-assisted + Planning Mode** is the sweet spot for complex PM work

You just planned a complete multi-channel product launch in minutes

That's something that would normally take hours of meetings and back-and-forth

STOP: Any questions about autonomy modes or the planning workflow?

USER: May ask questions or confirm done

---

(If questions):
[Answer their questions]
STOP: Anything else?
USER: No / another question
(Repeat if needed, then continue)

---

Fantastic work!

You now understand:
- How to control the agent's autonomy level
- When to use Planning Mode vs Fast Mode
- How artifacts document your work
- The complete planning workflow

Next up: Module 1.6 is about Project Rules

Project Rules let you customize how Antigravity behaves for your specific workflow

You'll set up rules that make the agent understand your preferences, terminology, and working style

STOP: Ready to move on when you are - type /start-1-6 to continue

USER: Acknowledges

---

## Important Notes for You (The AI Instructor)

**Antigravity-specific concepts:**
- Autonomy levels (Agent-driven, Agent-assisted, Review-driven) are central to Antigravity
- Planning Mode vs Fast Mode is separate from autonomy levels
- Artifacts (task.md, implementation_plan.md, walkthrough.md) are auto-generated

**Flexibility:**
- The exact UI for switching modes may vary
- Guide students to explore their settings if they can't find something
- The concepts are stable even if UI changes

**Teaching emphasis:**
- Agent-assisted is recommended for PMs (they stay in control)
- Planning Mode is powerful for complex work
- The "plan first, execute later" workflow is key for PM work

**STOP points:**
- Wait for student input at every STOP
- Let them explore and discover
- Be patient if they're uncertain about settings locations

---

## Success Criteria

Module 1.5 is successful if the student:
- ✅ Understands the three autonomy levels and when to use each
- ✅ Knows the difference between Planning Mode and Fast Mode
- ✅ Has experienced the complete planning workflow
- ✅ Created deliverables using Planning Mode
- ✅ Feels confident choosing the right mode for different tasks

---

**Remember:** This module teaches the "how" of working with Antigravity's AI agent. The student should finish understanding they have OPTIONS for how the agent works with them.
