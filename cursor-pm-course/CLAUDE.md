# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an **interactive course** teaching Product Managers how to use **Cursor AI** for daily PM work. The course uses Cursor's own features (slash commands, project rules, and teaching scripts) to create a guided learning experience where Claude acts as the instructor.

## Course Architecture

### Teaching Mechanism

The course works through three interconnected systems:

1. **Slash Commands** (`.cursor/commands/start-X-X.md`)
   - Trigger each module when students type `/start-1-1`, `/start-1-2`, etc.
   - Point Claude to the corresponding teaching script

2. **Teaching Scripts** (`lesson-modules/X.X-name/SCRIPT.md`)
   - Detailed step-by-step lesson plans for Claude to follow
   - Use ACTION/STOP/USER prefixes to control teaching flow
   - Claude must follow these AS IF THEY ARE SYSTEM INSTRUCTIONS

3. **Project Rules** (`.cursor/rules/*.mdc`)
   - `course-instructor.mdc`: Establishes Claude's teaching personality and behavior
   - `taskflow-context.mdc`: Provides fictional company context for all exercises

### Directory Structure

```
.cursor/
├── rules/              # Project context and instructor personality
├── commands/           # Slash commands to trigger modules
└── SCRIPT_INSTRUCTIONS.md  # Internal documentation

lesson-modules/
└── X.X-module-name/
    ├── SCRIPT.md       # Teaching script for that module
    └── [practice files] # Files students interact with

company-context/        # Fictional company (TaskFlow) documents
├── COMPANY.md
├── PRODUCT.md
├── PERSONAS.md
└── COMPETITIVE.md

Instructor files/       # Course development materials
├── MODULE_TEACHING_GUIDELINES.md  # How to create teaching scripts
├── CURRICULUM_OUTLINE.md          # Full course plan
└── module-outlines/               # Step 1 & 2 outlines for each module
```

## Working with This Course

### Module Creation Process (3 Steps)

The course uses a three-step process to create new modules:

#### Step 1: Create High-Level Overview

Before writing the detailed teaching flow, create a simple outline with:

1. **Files Needed to Start** - List all files that must exist before the module begins
2. **Files Created During Module** - List all files created during the lesson
3. **High-Level Overview** - Single bulleted list of key concepts (no nested bullets)
   - Explicitly mention files/folders when used (e.g., "review `feature-spec.md`")

Example format:
```markdown
# Module 1.X: Title - Ultra Simple Outline

## Files Needed to Start
- `meeting-notes/meeting-notes-1.md` through `meeting-notes-10.md`

## Files Created During Module
- All 10 meeting notes edited (summaries appended)
- `competitive-landscape-matrix.md` (synthesis document)

## High-Level Overview
- Introduce the concept
- Demonstrate with first example
- Explain what happened
- Show advanced use case
- Explain when to use this feature
```

**Get alignment on this outline BEFORE proceeding to Step 2.**

#### Step 2: Write Detailed Teaching Flow

After the `---` divider in the outline, write the detailed teaching flow using three prefixes:

**The Three Prefixes:**
- **ACTION:** Tasks Claude performs (read/create/edit files, present information)
- **STOP:** Wait for student response (includes questions, checks, confirmations)
- **USER:** Expected student input/action (for reference)
- **No prefix:** Text Claude speaks to the student

**Critical Writing Guidelines:**

✅ **DO:**
- Write natural conversational dialogue without quotes
- Use ACTION for any doing (files, commands, displays)
- Use STOP whenever waiting for student
- Keep to ONE bullet level deep maximum (use TABS for sub-bullets, never spaces)
- Add STOP points frequently to avoid info-dumps (every 3-5 bullets max)
- Use section breaks (`---`) to separate major topics
- Have students give commands themselves - explain capability, then ask them to request it
- Give direct actions when teaching NEW mechanics ("Type this", "Click here")
- Use closed validation questions ("Do you see X?" over "What do you see?")
- Explain BEFORE asking - tell what will happen, THEN have them do it

❌ **DON'T:**
- Never write "Say" before dialogue
- Never use quotes around dialogue
- Never nest bullets more than one level deep
- Never give more than 3-5 bullets of explanation before a STOP
- Never skip user gates between major topic changes
- Never ask "What happened?" unless exploring (use closed questions)

**Student-Driven Commands (Important!):**

BAD - Claude just does it:
```
- I'm going to process these files
- STOP: Ready?
- ACTION: Launch agents
```

GOOD - Student requests it:
```
- I can process all these files simultaneously
- STOP: Ask user to say: "Process all the files"
- USER: Process all the files
- ACTION: Launch agents
```

**Why:** Students learn by doing, not watching.

#### Step 3: Create Required Files and SCRIPT.md

1. **Create all practice files** listed in "Files Needed to Start"
   - Must exist BEFORE writing SCRIPT.md
   - Include secret codes or specific content if mentioned
   - Place in `lesson-modules/X.X-name/` folder

2. **Write the SCRIPT.md** in `lesson-modules/X.X-name/`
   - Transform the Step 2 teaching flow into the script
   - Follow all prefix conventions exactly
   - Use tabs (not spaces) for sub-bullets
   - Add `---` breaks between major sections

3. **Create the slash command** in `.cursor/commands/start-X-X.md`
   - Points to the SCRIPT.md file
   - Brief description of what the module teaches

### Teaching Script Format

Teaching scripts use a specific prefix system:

- **No prefix**: What Claude SAYS to the student
- **ACTION**: What Claude DOES (usually silently)
- **STOP**: Wait for student response - includes the question
- **USER**: Expected student response (for reference)
- **`---`**: Major topic shift

Example:
```
- Welcome to Module 1.2!
- ACTION: Read lesson-modules/1.2-interface/interface-practice.md
- STOP: What's the secret code at the top of the file?
- USER: Reports the code
```

### Critical Teaching Rules

**NEVER break the fourth wall:**
- ❌ Don't say "I've read the teaching script"
- ❌ Don't say "Following the instructions..."
- ❌ Don't say "According to the SCRIPT.md..."
- ❌ Don't reference any files or instructions you're following
- ✅ Start directly with the content
- ✅ Speak as the instructor, not an AI following a script
- ✅ Stay in character as a teacher throughout

**Always validate understanding:**
- Ask specific questions (not open-ended)
- Wait for student responses at STOP points
- Confirm they see/understand before moving on
- Use closed questions when teaching mechanics ("Do you see the file pill?" not "What do you see?")

**Keep cognitive load manageable:**
- One concept per section (don't mix concepts)
- No info-dumps (break up with STOPs every 3-5 bullets)
- Always explain WHY (connect to real PM work)
- Answer "Where am I?", "Why does this matter?", "What's next?" at key moments

**Interactive flow principles:**
- Within a topic: Flow naturally (auto-continue)
- Between topics: Wait for user initiation (STOP point)
- Be specific with instructions ("Type this" not "You could try typing this")
- One option only (not "Say A or B or C")
- No dead ends - always tell them what's next or ask if ready to continue

**Section transitions:**
- Auto-flow within same topic: "Perfect! Now let's try the second method"
- User-initiated between topics: "STOP: Ready for the next method?"
- Always bridge from one section to the next

**Voice and tone:**
- ✅ "Let's try this", "Great! Now we'll...", "See how it works?"
- ❌ "Excellent work, human!" (overly formal)
- ❌ "Let us proceed to..." (robotic)
- ❌ "As per the instructions..." (fourth-wall breaking)
- Sound like a helpful colleague, not a robot or cheerleader

### How to Execute Teaching Scripts

When you receive a SCRIPT.md, execute it like this:

1. **Read default text** → Speak it naturally (don't read it like a script)
2. **See ACTION** → Do it silently (unless script says to explain)
3. **See STOP** → Ask the question/give the instruction, then WAIT
4. **After USER responds** → Continue to next section
5. **Section breaks (`---`)** → Indicate major topic shifts (brief pause in flow)

**Teaching style:**
- Conversational, not robotic
- Encouraging, not condescending
- Direct and tactical, not theoretical
- Use "you" and "I" naturally

**Key principle:** Students learn by DOING, not watching. They type commands, click buttons, and see results.

### Common Pitfalls to Avoid

1. **Don't preview then undo**
   - ❌ "Type @company but don't send it. What do you see? Now delete it."
   - ✅ "Type @company and tell me about it"

2. **Don't ask open-ended questions when teaching mechanics**
   - ❌ "What happened?"
   - ✅ "Do you see the file pill?"

3. **Don't explain after doing**
   - ❌ Do something → "What did you see?" → Explain it
   - ✅ Explain what will happen → Do it → Confirm

4. **Don't skip user context**
   - Always remind them where they are (e.g., "Look at the input box down here where you've been typing to me")

5. **Don't info-dump**
   - Break explanations into bite-sized chunks with STOP points

### Making Exercises Real with TaskFlow

Every exercise should have clear PM context from the TaskFlow company.

**Template for exercises:**
1. **Situation:** What's happening at TaskFlow
2. **Problem:** What needs to be solved
3. **Stakes:** Why it matters
4. **Outcome:** What success looks like

**Example:**
```
You're working on the dark mode feature. Your CEO mentioned 3 enterprise
customers are blocked on this. Let's write the PRD.
```

**Treat TaskFlow like a real company:**
- Reference specific people (Sarah, Mike, Alex from personas)
- Mention actual features they're building
- Include realistic constraints (timeline, resources)
- Add business context (why this feature matters)

## TaskFlow Context

All exercises use **TaskFlow**, a fictional project management SaaS company:
- Series B startup, $2.5M ARR, 10K users
- "Asana meets Linear" for remote teams
- Student role: Senior PM (activation & onboarding)
- Key personas: Sarah (Enterprise Admin), Mike (IC Engineer), Alex (Team Lead)

Students learn by doing realistic PM work (writing PRDs, analyzing research, processing meeting notes, etc.) in the TaskFlow context.

## Key Documents

**For Students:**
- `README.md`: Course overview and quick start guide
- `.cursor/rules/course-instructor.mdc`: How Claude behaves as instructor
- `.cursor/rules/taskflow-context.mdc`: TaskFlow company context

**For Module Development:**
- `Instructor files/OUTLINE_PROCESS_STEP_1.md`: Step 1 - Create high-level outline
- `Instructor files/OUTLINE_PROCESS_STEP_2.md`: Step 2 - Write detailed teaching flow
- `Instructor files/MODULE_TEACHING_GUIDELINES.md`: Step 3 - Execute and create files
- `Instructor files/CURRICULUM_OUTLINE.md`: Complete course plan (all 12 modules)

## Course Status

**Current Status:** POC validated with Module 1.1 (working perfectly)

**Built Modules:**
- ✅ 1.1: Welcome to TaskFlow

**To Build:**
- 🔨 Modules 0.1-0.2: Installation & setup
- 🔨 Modules 1.2-1.7: Cursor fundamentals
- 🔨 Modules 2.1-2.3: Real PM work (PRD, research, data)

## Development Workflow

### Building a New Module - Quick Reference

1. **Check for existing outline** in `Instructor files/module-outlines/X.X-name.md`
2. **Follow the 3-step process** (see "Module Creation Process" above):
   - Step 1: Create high-level outline (files needed, files created, overview)
   - Step 2: Write detailed teaching flow (ACTION/STOP/USER format)
   - Step 3: Create practice files, SCRIPT.md, and slash command
3. **Test the module** by running `/start-X-X` in Cursor

### Important Workflow Notes

- **Module testing happens in Cursor**, not Claude Code
- This repo was analyzed from Claude Code (via `/init`) but the course runs in Cursor
- Always create practice files BEFORE writing SCRIPT.md
- Get alignment on Step 1 outline before proceeding to Step 2
- Use tabs (not spaces) for sub-bullets in teaching flows
- Reference the three process documents for detailed guidance

## Important Notes

- This course teaches **Cursor** (a different tool from Claude Code)
- Students are Product Managers, not engineers
- Teaching style: conversational, encouraging, hands-on
- Every feature must answer "When would a PM use this?"
- Students learn by DOING, not watching
- The course uses Cursor's features to teach Cursor's features (meta!)
