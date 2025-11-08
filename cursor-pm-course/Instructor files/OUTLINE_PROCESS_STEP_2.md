# Module Outline Process - Step 2

This document defines **Step 2** of the module outline process for the Claude Code PM Course.

## Step 2: Write the Detailed Teaching Flow

After the `---` divider, write the detailed teaching flow using these standards:

### Module Independence Principle

**CRITICAL: Every module must be completely stand-alone.**

- **NO dependencies on previous modules** - Don't assume students completed earlier lessons
- **All required files must be in the current module's folder** - Never reference files from other module folders
- **Self-contained content** - The module should work perfectly even if it's the only one a student completes
- **Fresh examples** - Use new files and examples specific to this module

**Why this matters:** Students may skip modules, complete them out of order, or return after a break. Each module must work independently.

### The Three Prefixes

**For Claude's actions:**
- **ACTION:** Tasks Claude performs (read/create/edit files, run commands, launch agents, present/display information)

**For flow control:**
- **STOP:** Wait for student response (includes questions, checks, conditionals)
- **USER:** Expected student input/action

**Default (no prefix):** Text Claude should speak to the student

### Section Breaks = Conversation Blocks

**`---` marks represent individual conversation blocks in the AI chat.**

**The Rule:** Every STOP/USER pair (with optional ACTION) should end with `---`

Each section between `---` marks is ONE message Claude sends in the composer. This creates natural conversation rhythm and ensures students aren't overwhelmed.

**Example of proper breaks:**
```
✅ CORRECT:
- Here's what we'll do
- STOP: Ready?
- USER: Confirms

---

- Great! Now try this
- ACTION: Read the file
- STOP: See the result?
- USER: Confirms

---

❌ WRONG:
- Here's what we'll do
- STOP: Ready?
- USER: Confirms
- Great! Now try this
- ACTION: Read the file
- STOP: See the result?
- USER: Confirms

---

(This mixes two interaction units together)
```

**Why this matters:** Each `---` break represents where Claude waits for the student's next message. Proper breaks create manageable conversation chunks.

### Writing Style Guidelines

**DO:**
- ✅ Write natural conversational dialogue without quotes (assume it's spoken)
- ✅ Use ACTION for any doing (files, commands, agents, displays)
- ✅ Use STOP whenever waiting for student (questions, confirmations, choices)
- ✅ Use USER to document expected student responses
- ✅ **Keep to ONE bullet level deep maximum** (use TABS for sub-bullets, never spaces)
- ✅ Write as a single continuous list from start to finish
- ✅ **Add STOP points frequently to avoid info-dumps** (break up explanations into chunks)
- ✅ **Add `---` after every STOP/USER pair** (each is one conversation block in the composer)
- ✅ **Have students give commands themselves** - explain the capability, then ask them to request it with the exact command
- ✅ **Give direct actions when teaching NEW mechanics** - prescriptive instructions ("Type this", "Click here") keep students on rails
- ✅ **Use closed validation questions** - "Do you see X?" over "What do you see?" to confirm they're in the right place
- ✅ **Explain BEFORE asking** - tell students what will happen, THEN have them do it (not do it → describe what happened)
- ✅ **After an ACTION, explain what you JUST DID** (past tense) - the action completes before Claude speaks

**DON'T:**
- ❌ Never write "Say" before dialogue - if there's no prefix, it's assumed to be spoken
- ❌ Never use quotes around dialogue - it's assumed to be spoken text
- ❌ Never nest bullets more than one level deep (bullet → tab-indented sub-bullet only)
- ❌ **Never give more than 3-5 bullets of explanation before a STOP** (too much info at once)
- ❌ **Never skip user gates between major topic changes** (always require user initiation)
- ❌ **Never use "I'm going to do X, ready? *does X*"** - instead teach the capability and have them ask
- ❌ **Never ask "What happened?" or "Describe what you see"** unless exploring (use closed questions: "Do you see the file pill?")
- ❌ **Never put multiple STOP/USER pairs together without `---` between them** (each is a separate conversation block)
- ❌ **Never say "Watch - I'm doing X" after an ACTION** - the action is already done, use past tense

### Student-Driven Commands (Important!)

**BAD - Claude just does it:**
```
- I'm going to process these 10 meeting notes with agents
- STOP: Ready?
- USER: Ready
- ACTION: Launch 10 agents
```

**GOOD - Student requests it:**
```
- I can spin up 10 independent agents to process all these notes simultaneously
- Each agent will read one file and extract action items
- STOP: Ask user to say: "Process all 10 meeting notes with agents"
- USER: Process all 10 meeting notes with agents
- ACTION: Launch 10 agents
	- Agent 1 processes meeting-notes-1.md
	- Agent 2 processes meeting-notes-2.md
	- Etc.
```

**Why this matters:** Students learn by doing, not watching. They need to practice requesting the capability.

### Action Timing: Past Tense After Actions

When Claude executes an ACTION, it completes BEFORE the next message appears to the student. Always use past tense when referencing the action.

**❌ WRONG (present/progressive tense):**
```
- STOP: Type this command: "Process the files"
- USER: Process the files
- ACTION: Read all 8 files and create synthesis
- Watch - I'm reading all 8 files and synthesizing them
- STOP: Do you see the new file?
```

**✅ CORRECT (past tense):**
```
- STOP: Type this command: "Process the files"
- USER: Process the files
- ACTION: Read all 8 files and create synthesis
- Done! I just read all 8 files and synthesized them into one document
- STOP: Do you see the new file being proposed?
```

### Example Teaching Flow Structure

```markdown
## Teaching Flow

- Welcome to Module 1.4: Agents
- Prepare to be amazed - this is a game-changer
- Scenario: Monday morning, 10 meeting notes from last week need processing
- Normally this takes 2-3 hours sequentially, with agents it takes minutes in parallel
- ACTION: List files in meeting-notes/ folder
- STOP: Ask user to say "Show me the files"
- USER: Show me the files

---

- I can spin up 10 independent agents, each processing one meeting note simultaneously
- Each agent will read a file, extract action items/decisions/next steps, append summary
- STOP: Ask user to say: "Process all the meeting notes with agents"
- USER: Process all the meeting notes with agents
- ACTION: Launch 10 agents to process meeting notes
	- Each agent reads one file, extracts action items/decisions/next steps, appends summary to that file
- Done! All 10 meeting notes processed simultaneously
- STOP: Ask user to view the edited files
- USER: Viewed files

---

- Pretty cool, right? Let me explain what just happened
- STOP: Quick check question (multiple choice about when to use agents)
- USER: Answers
- Respond based on answer
- Explain what agents are
	- Agents = independent instances of Claude working simultaneously
	- Regular Claude = sequential (one thing at a time)
	- Agents = parallel (10 things at same time)
	- Like cloning itself
- STOP: Does that make sense?
- USER: Yes / needs clarification

---

- Now let's try something more advanced: competitive research
- [Continue to next demonstration...]
```

**Notice the conversation blocks:**
- Each `---` = end of one conversation block (one message Claude sends in the composer)
- Every STOP/USER interaction ends with `---`
- This creates natural back-and-forth rhythm
- Never more than 4-5 bullets of dialogue before a STOP
- Keeps cognitive load manageable

### Formatting Notes

1. **Tabs vs Spaces:** Sub-bullets MUST use tabs, not spaces
2. **One Level Deep:** Never go deeper than bullet → sub-bullet
3. **No "Say":** Just write the dialogue naturally without "Say:" prefix
4. **No Quotes:** Don't wrap dialogue in quotes - it's assumed to be spoken
5. **Continuous Flow:** Single list from beginning to end of module
6. **Keyboard Shortcuts:** Use "Cmd/Ctrl+B" format, not "Cmd+B (or Ctrl+B on Windows)" - keeps it concise

### Module Sign-Off

Every module should end with an exciting bridge to the next module:

**DO:**
- ✅ Preview what's coming in the next module
- ✅ Explain why it matters or builds on what they learned
- ✅ Create excitement and momentum
- ✅ Give clear next step instruction (e.g., "type /start-1-6 to begin")

**DON'T:**
- ❌ End abruptly without context for what's next
- ❌ Generic "see you next time" endings
- ❌ Assume they know what the next module covers

**Example:**
```
- Excellent! You've now mastered the three modes
- Here's the real power: knowing when to use each one
- [Brief recap of key points]
- Next up: Module 1.6 is all about Plan mode
- You'll plan an entire feature launch from scratch - research, PRD, rollout strategy, the works
- It's where everything you've learned comes together
- This is the module where you'll really feel like you have a superpower
- STOP: Ready to move on when you are - type /start-1-6 to begin the Plan mode deep dive
- USER: Acknowledges
```

---

## Summary

**Step 1:** Create high-level overview (files needed, files created, bullet overview)
**Step 2:** Get alignment on overview before proceeding
**Step 3:** Write detailed teaching flow using prefix standards (ACTION/STOP/USER, no "Say", tabs for sub-bullets, one level deep)
