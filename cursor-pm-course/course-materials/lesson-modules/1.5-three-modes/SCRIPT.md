# Module 1.5: Three Modes & Plan Mode Mastery - Teaching Script

Welcome to Module 1.5: Three Modes & Plan Mode Mastery
So far you've been using the AI Pane in one way - it reads files, makes changes, runs commands
But the AI Pane actually has three different modes, each designed for different types of work
Think of them like gears on a bike - same tool, different purposes
STOP: Ready to see how they work?
USER: Confirms

---

The three modes are: Ask, Agent, and Plan
You've been using Agent mode this whole time - that's the default
Agent mode = Cursor can read AND write files, run commands, make changes
STOP: Look at the mode picker in the lower left of the chat box - do you see where it says "Agent"?
USER: Confirms

---

The other two modes have specific purposes:
Ask mode = Cursor can ONLY read and analyze, no changes allowed (safe exploration)
Plan mode = Cursor researches and creates a structured plan, then you approve and execute it
Each mode has a specific use case in your PM workflow
STOP: Make sense so far?
USER: Confirms

---

You can switch modes three ways:
	Click the mode picker dropdown
	Press Cmd/Ctrl+. (Command/Control + period)
	Press Shift+Tab
Let's start with Ask mode since it's the safest
STOP: Click the mode picker and switch to Ask mode
USER: Switches to Ask mode

---

Great! You're now in Ask mode
In this mode, Cursor is read-only - a research partner, not an executor
This is perfect for exploring unfamiliar codebases or new documentation without fear of messing stuff up
Ask mode is useful for:
	Asking questions about files and structure
	Getting analysis without accidental changes
	Planning before you commit to changes
Sometimes AI can be overeager to start doing STUFF - Ask mode prevents that
In reality, you'll probably use this mode the least, but it's useful to know it exists
STOP: Ready to try it?
USER: Confirms

---

Let's try it with TaskFlow's product documentation
STOP: Ask me: "Explain what @PRODUCT.md contains"
USER: Explain what PRODUCT.md contains

---

ACTION: Read company-context/PRODUCT.md and explain
Done! Notice I only read and explained - I didn't create any files or make changes
That's Ask mode - safe exploration without any risk
STOP: Make sense?
USER: Confirms

---

Now let's talk about Agent mode - the one you've been using
STOP: Switch back to Agent mode using any method you'd like (click picker, Cmd/Ctrl+., or Shift+Tab). Tell me when you've done it.
USER: Confirms

---

Agent mode is the workhorse - this is what you'll use 80% of the time
Agent = autonomous executor
It can:
	Read and write files
	Run terminal commands
	Make changes across multiple files
	Iterate and fix errors
We won't practice it much here because you've already been using it in every previous module
STOP: Make sense why this is the default mode?
USER: Confirms

---

Now for the main event: Plan mode
This is Cursor's killer feature for complex PM work
STOP: Ready to dive deep into Plan mode?
USER: Confirms

---

Plan mode is perfect for complex multi-step projects where you need to:
	Coordinate across multiple channels or teams
	Research context before committing to an approach
	Get stakeholder buy-in on the plan before execution
	Track progress on a structured implementation
Here's how it works:
	Research: Cursor reads all relevant context files
	Clarify: Cursor asks you questions to understand constraints and priorities
	Plan: Cursor creates a structured Markdown plan
	Edit: You iterate on the plan together
	Execute: You approve and Cursor builds everything
STOP: Does this workflow make sense?
USER: Confirms

---

Here's what makes Plan mode powerful for PMs:
Cursor can do web searches to supplement your local files
This is huge for product research, competitive analysis, market trends
You can ask Cursor to research competitors, pricing models, feature comparisons, anything
STOP: Make sense?
USER: Confirms

---

Let's try a realistic PM scenario
You're launching a new TaskFlow feature: real-time collaboration
You need to plan a multi-channel launch campaign
This includes: messaging strategy, email sequences, in-app announcements, blog post, sales enablement, support docs, and success metrics
STOP: Switch to Plan mode (Shift+Tab or click the mode picker). Tell me when you're ready.
USER: Confirms

---

Perfect! You're now in Plan mode
I'm going to show you the feature details we're launching
ACTION: Read lesson-modules/1.5-three-modes/feature-announcement.md. Read and present the feature announcement details
STOP: Sound like a realistic PM task?
USER: Confirms

---

Here's where Plan mode shows its power
When you give Plan mode a complex request, it automatically researches your documents and asks clarifying questions
This helps ensure the plan matches your specific needs
STOP: Ask me: "Plan a multi-channel launch campaign for this feature. Research our positioning, competitors, and target customers, then create a comprehensive go-to-market plan."
USER: Plan a multi-channel launch campaign for this feature. Research our positioning, competitors, and target customers, then create a comprehensive go-to-market plan.

---

ACTION: Plan mode researches context files and performs web searches automatically
Now Plan mode is asking clarifying questions
Question 1: Which customer segment should we prioritize - Enterprise teams or SMB teams?
STOP: What's your answer?
USER: [Answers - e.g., "Enterprise first"]

---

Question 2: What's your timeline - soft launch in 2 weeks with full launch in 4 weeks, or different timing?
STOP: What timeline works?
USER: [Answers - e.g., "2 week beta, 4 week full launch"]

---

Question 3: Should we lead with email campaign, in-app announcement, or coordinated simultaneous launch?
STOP: What's your preference?
USER: [Answers - e.g., "Coordinated simultaneous launch"]

---

Perfect! Plan mode has everything it needs
Now it's generating the plan document...
ACTION: Plan mode creates a PLAN showing:
	**Files to create:** launch-campaign-plan.md, launch-timeline.md
	**Structure for launch-campaign-plan.md:**
		Executive summary
		Target audience (Enterprise focus)
		Key messaging pillars
		Multi-channel campaign (email, in-app, blog, sales, support)
		Success metrics
	**Structure for launch-timeline.md:**
		Week-by-week execution phases
		Deliverable owners
		Dependencies and milestones
	**Execution order:** Research → Draft messaging → Create campaign materials → Launch sequence
This is THE PLAN - it's showing you what it WILL build, not building it yet
STOP: Do you see the plan document? Review what Plan mode is proposing.
USER: Reviews plan

---

This plan is your blueprint
It shows exactly what Plan mode will create when you click "Build"
Notice it's structured and detailed - you can see the entire approach before committing
This is your chance to iterate and refine BEFORE any files are created
STOP: Does the plan look good, or want to make changes?
USER: [May request changes or confirm it's good]

---

(If they request changes):
USER: [Requests change - e.g., "Add a webinar to the campaign" or "Include social media channels"]
ACTION: Plan mode updates the plan document with requested changes
Updated! The plan now includes [explain what changed]
STOP: Better? Any other changes to the plan?
USER: [May iterate again or confirm done]
(If they iterate again, repeat this section, then continue)

---

Excellent! The plan is finalized
Now here's the magic moment
You'll click "Build" and Plan mode will execute everything in the plan
STOP: Ready? Click the "Build" button.
USER: Clicks Build

---

Watch Plan mode execute the plan!
ACTION: Plan mode switches to execution mode and creates:
	lesson-modules/1.5-three-modes/launch-campaign-plan.md (following the planned structure)
	lesson-modules/1.5-three-modes/launch-timeline.md (following the planned structure)
Plan mode tracks progress as it builds each file
Done! All deliverables created exactly as outlined in the plan
STOP: Do you see the two new files that were just created?
USER: Confirms

---

This is the power of Plan mode
The complete workflow was:
	1. You gave one complex prompt
	2. Plan mode researched files and did web searches (automatic)
	3. Plan mode asked clarifying questions
	4. Plan mode generated a detailed PLAN document (the blueprint)
	5. You reviewed and iterated on the plan
	6. You clicked "Build"
	7. Plan mode executed and created everything
This "plan first, build later" approach is perfect for complex PM work
You get to review the strategy before any work is done
STOP: Can you see how powerful this is for complex PM projects?
USER: Confirms

---

Finally let's summarize when to use each mode
Here's the decision framework:
**Ask mode:**
	Exploring new files or codebases
	Need information without risk of changes
	Quick analysis or research
**Agent mode:**
	80% of your daily work
	Making changes, creating files, implementing features
	Anything hands-on and tactical
**Plan mode:**
	Complex multi-step projects
	Need to coordinate across teams or channels
	Want to iterate on approach before executing
	Large projects where "measure twice, cut once" applies
STOP: Which mode do you think you'd use for writing a PRD?
USER: [May answer - probably Agent or Plan depending on complexity]

---

Good thinking! It depends on the complexity
Simple PRD for a small feature? Agent mode - just do it
Complex PRD for a multi-phase feature with cross-team dependencies? Plan mode - research, plan, iterate, execute
The key is: Plan mode is for when you need structure before action
STOP: Make sense?
USER: Confirms

---

Excellent! You've now mastered all three modes
Quick recap:
	**Ask mode:** Read-only exploration (safest)
	**Agent mode:** Autonomous execution (most common)
	**Plan mode:** Structured planning for complex work (most powerful)
Mode switching: Click the picker, Cmd/Ctrl+., or Shift+Tab
Plus you learned about web search - a game-changer for PM research
And you just planned a complete multi-channel product launch in minutes
That's something that would normally take hours of meetings and back-and-forth
STOP: Any questions about the three modes or Plan mode workflow?
USER: [May ask questions or confirm done]

---

(If questions):
[Answer their questions]
STOP: Anything else?
USER: No / another question
(Repeat if needed, then continue)

---

Fantastic work! You now have the complete Cursor AI Pane toolkit
You can switch between modes based on what you need
You can use web search to supplement your knowledge
And you can tackle complex multi-step projects with Plan mode
Next up: Module 1.7 is about Project Rules
Project Rules let you customize how Cursor behaves for your specific workflow
You'll set up rules for writing PRDs, analyzing data, and other common PM tasks
It's how you make Cursor work exactly the way YOU work
STOP: Ready to move on when you are - type /start-1-7 to continue
USER: Acknowledges
