# Cursor for Product Managers - Curriculum Outline

**Status:** Planning Phase
**Last Updated:** November 7, 2025
**Approach:** Lightweight launch - cover critical features + real PM scenarios

---

## 🎯 Course Philosophy

**Three-Module Structure:**
1. **Module 0:** Get set up (Install Cursor, open course folder - 20 min)
2. **Module 1:** Master the instrument (Cursor interface & core features - 3 hours)
3. **Module 2:** Play the songs (Real PM work using what you learned - 2 hours)

**Goal:** Students productive in ~5.5 hours (vs 20+ hours for comprehensive course)

---

## 🖥️ Cursor Interface: Current Understanding

### **Two Main Interfaces:**

#### 1. **Composer (Cmd+I or Cmd+L - same thing!)**
The main AI workspace with **three modes** inside it:

- **Ask Mode**
  - What it does: Read-only partner - searches codebase, analyzes files, answers questions, NEVER makes changes
  - When to use: Learning, exploring, planning, understanding code
  - PM use case: "Explain this PRD", "What are our personas?", "Summarize this research"

- **Agent Mode**
  - What it does: Autonomous executor - makes changes across multiple files, can run terminal commands, iterates
  - When to use: Building/editing files, multi-file changes, executing plans
  - PM use case: "Create PRD from research", "Transform this into 3 formats", "Build roadmap document"

- **Plan Mode** (Shift+Tab to activate)
  - What it does: Structured planner - researches codebase, asks clarifying questions, creates Markdown plans
  - When to use: Complex multi-step work requiring structured approach
  - PM use case: Feature planning, launch strategy, complex document creation

**Recommended Workflow:** Ask (understand) → Plan (structure) → Agent (execute)

#### 2. **Cmd K - Inline Editing**
- What it does: Quick edits in the current file
- When to use: Fast fixes, typos, small changes
- PM use case: Fixing a typo in PRD, quick document updates

---

## 📚 MODULE 0: Getting Started (2 modules)

**Goal:** Get Cursor installed, set up account, and open the course folder
**Time:** ~20 minutes total

**Philosophy:** Simple, friction-free setup. Get students into the course as quickly as possible.

---

### **0.1 Installation & Account Setup** 🔨 TO BUILD

**Download, install, and create account**

**What to cover:**

1. **Download Cursor**
   - Visit cursor.com or cursor.com/download
   - Auto-detects OS (Mac or Windows)
   - Latest version: 2.0.64 (as of Nov 2025)

2. **Installation**
   - **Mac:** Open .dmg → drag to Applications → launch
   - **Windows:** Run .exe → follow wizard → launch
   - Requirements: macOS 10.15+ / Windows 10+, 4GB RAM (8GB recommended)

3. **First Launch & Account Setup**
   - Sign up with email/password (no credit card required)
   - **14-day free Pro trial** automatically starts
   - Optional: VS Code settings import (one-click if they have VS Code)
   - Configuration prompts:
     - Keybindings (recommend: VS Code defaults)
     - Language preferences
     - Codebase indexing (recommend: enable)

4. **Free Tier Explanation**
   - 14-day Pro trial (full features)
   - After trial: Free tier with limited AI queries
   - **Student offer:** 1 year free Pro with .edu email (cursor.com/students)

**Why this matters:** Zero friction to get started. Emphasize: free trial, no credit card, takes 5-10 minutes.

**Time:** 10-15 minutes

**Files needed:**
- None (pre-course setup)

---

### **0.2 Opening the Course Folder** 🔨 TO BUILD

**Download and load the course files into Cursor**

**What to cover:**

1. **Download course files**
   - Go to course website
   - Click **"Download Course Files"** button
   - Browser downloads ZIP automatically (from GitHub release: `/releases/latest/download/complete-course.zip`)
   - Unzip to Documents folder (or desired location)

2. **Open folder in Cursor**
   - In Cursor (already open from Module 0.1):
   - Click **"Open project"** button OR File → Open Folder
   - Navigate to unzipped **"cursor-for-pms"** folder
   - Click **"Open"**

3. **Verify files loaded**
   - See file explorer on left
   - Confirm folders visible: company-context/, lesson-modules/, .cursor/
   - "You should see all the course files now"

4. **Ready for Module 1.1!**
   - Open Composer (Cmd+I or Cmd+L)
   - Type `/start-1-1` to begin
   - "Let's get started!"

**Why this matters:** Students need the course files loaded to use the slash commands and follow along. Download button on website makes this seamless (no GitHub navigation needed).

**Time:** 5 minutes

**Files needed:**
- None (students download during module)

---

## 📚 MODULE 1: Cursor Fundamentals (7 modules)

**Goal:** Learn Cursor interface and core PM-relevant features BY DOING real PM work
**Time:** ~3 hours total

**Philosophy:** Teach features THROUGH PM scenarios, not abstract lessons. Based on ccforpms Module 1.3 approach.

---

### **1.1 Welcome to TaskFlow** ✅ BUILT & TESTED

**What it covers:**
- What is Cursor for PM work
- TaskFlow introduction (fictional company)
- Course mechanics and structure
- How teaching works (slash commands + scripts)

**Status:** Complete, tested, working perfectly

**Time:** 15-20 minutes

---

### **1.2 Cursor Interface - Hands-On Practice** 🔨 TO BUILD

**Hands-on introduction to Cursor's interface through actual exercises**

**Teaching approach:** Create `interface-practice.md` file with secret codes/passwords hidden throughout. Claude guides students to:

1. **Find the file in file explorer**
   - "Open `interface-practice.md` - what's the secret code at the top?"
   - Student reports back: "CURSOR2025"
   - Validates they actually opened it!

2. **Markdown preview (Cmd+Shift+V)**
   - "Press Cmd+Shift+V - what do you see now?"
   - Student describes formatted output
   - Install **Markdown All in One** extension (not Markdown Preview Enhanced)

3. **Three-pane layout**
   - Left: File explorer
   - Middle: Editor/artifacts
   - Right: Composer chat
   - Bottom: Settings pane (optional)
   - "Describe your screen layout"

4. **"Add to Chat" workflow** 🆕
   - **THE most common way to add context** (even more than @ mentions!)
   - "Right-click on `company-context/COMPANY.md` - what options appear?"
   - "Click 'Add to Chat' - what happens in Composer?"
   - Student describes seeing file appear as pill/tag in input
   - Also works with: folders, code selections, multiple files
   - **Why this matters:** Faster than typing @filename, visual selection

5. **Model switching dropdown** 🆕
   - "Look at the top of Composer - see the model dropdown?"
   - Show where it is (currently shows "Claude 3.5 Sonnet")
   - Explain briefly: Sonnet (default), Opus (complex work), Haiku (quick tasks)
   - **Default for PMs:** "Just use Sonnet unless you have a specific reason"
   - (We'll cover WHEN to switch in Module 1.5)

6. **Composer vs Cmd K**
   - "Press Cmd+I - this is Composer. What appears?"
   - "Now close it. Put cursor on a line and press Cmd+K. What's different?"
   - Conversational validation they understand the difference

7. **@ mentions preview**
   - "In Composer, type '@company' - what autocomplete options appear?"
   - Teaser for Module 1.3

**Why this matters:** Hands-on validation they can navigate Cursor. No abstract explanations - they DO it and report what they see.

**Time:** 20-25 minutes (expanded from 15-20 to include "Add to Chat" and model switching)

**Files needed:**
- `lesson-modules/1.2-interface/interface-practice.md` (with secret codes scattered throughout)
- Teaching script validates by asking for codes/descriptions

---

### **1.3 Your First PM Tasks: @ Mentions & File Operations** 🔨 TO BUILD

**THE BREAKTHROUGH MODULE - Learn core features BY DOING real PM work**

**Teaching philosophy:** Based on ccforpms 1.3 - teach @ mentions, file ops, web search through realistic PM scenarios

**Scenario 1: Append to Existing File** (8 min)
- Raw meeting notes → append summary to bottom of same file
- **Teaches:** @ single file (or "Add to Chat"), in-place editing
- Student practice: Process `meeting-notes-raw.md` - append summary section
- **Validation:** "What summary was appended to the bottom?"
- **🆕 Apply/Reject workflow introduced here:**
  - "When Cursor suggests the changes, look at the preview - see the green additions?"
  - "Click 'Apply' to accept, or 'Reject' to try again"
  - **Why this matters:** Always review changes before accepting

**Scenario 2: Transform to New File** (8 min)
- Product sync notes → create new executive email file
- **Teaches:** Reading one file, creating new formatted output
- Student practice: Transform `product-sync-notes.md` into `product-sync-email.md`
- **Validation:** "What's in the email? How is it different from the original notes?"
- **Practice Apply/Reject again:** Review new file before accepting

**Scenario 3: Folder Analysis to New File** (10 min)
- 8 interview transcripts → create insights document
- **Teaches:** @ folder (or "Add to Chat" on folder), multi-file analysis
- Real files: `user-interviews/` folder with 8 interviews
- **Validation:** "What's the #1 pain point mentioned across all interviews?"

**Why this matters:** Students see IMMEDIATE value. "I just saved 2 hours processing those meetings!" Not abstract feature learning.

**Time:** 25-30 minutes (expanded to include Apply/Reject workflow teaching)

**Files needed:**
- `lesson-modules/1.3-first-tasks/meeting-notes-raw.md` (will be edited in-place)
- `lesson-modules/1.3-first-tasks/product-sync-notes.md` (source for email transformation)
- `lesson-modules/1.3-first-tasks/user-interviews/` (8 interview files)

**Files created:**
- `meeting-notes-raw.md` (summary appended to bottom)
- `product-sync-email.md` (new executive email)
- `user-research-insights.md` (synthesis document)

**Reuse from ccforpms:** Port meeting notes and interview files from ccforpms 1.3

---

### **1.4 Communication Styles - The PM Superpower** 🔨 TO BUILD

**Use reusable communication templates for consistent formatting**

**Why separate module:** Communication transformation is SO powerful for PMs it deserves its own focus. This is what saves 10 hours/week.

**Key Concept:** In Module 1.3 we just said "summarize this" - but PMs usually have specific formats they want. Templates let you get EXACTLY the format you need, and you can iterate to make them perfect.

**Scenario 1: Examine Style Templates** (5 min)
- Show pre-made templates: `communication-styles/`
  - `style-slack-update.md` (casual, 2-3 lines)
  - `style-executive-email.md` (strategic, 3 paragraphs)
  - `style-notion-doc.md` (comprehensive, formatted)
- Student examines them: "What's different between Slack vs Email style?"

**Scenario 2: Template-Based Summary** (10 min)
- Revisit `meeting-notes-raw.md` from Module 1.3 (already has one basic summary)
- This time, append a SECOND summary using the executive email template
- Use @ mentions to reference meeting notes AND email template
- Compare: basic summary vs template-formatted summary
- **Validation:** "How is the template summary different from the first one?"
- **Shows:** Templates give consistent, professional formatting every time

**Scenario 3: Transform Research into 3 Formats** (12 min)
- Use `@user-research-insights.md` from Module 1.3
- Use `@communication-styles/` folder
- Generate 3 outputs: Slack + Email + Notion
- **Same info, 3 audiences, 0 rewriting**
- **Validation:** "How long was the Slack version vs Notion version?"
- PMs can iterate on templates to make them perfect, then reuse forever

**Why this matters:** PMs rewrite the same info for different audiences constantly. Style templates = write once, transform instantly. Save 10+ hours/week.

**Time:** 25-30 minutes

**Files needed:**
- `lesson-modules/1.4-communication-styles/communication-styles/` (3 style templates)
- `lesson-modules/1.3-first-tasks/meeting-notes-raw.md` (from Module 1.3, already has one summary)
- `lesson-modules/1.3-first-tasks/user-research-insights.md` (from Module 1.3, for transformation exercise)

**Files created:**
- `meeting-notes-raw.md` (edited again - second template-based summary appended)
- `slack-update-output.md`, `executive-email-output.md`, `notion-doc-output.md` (3 transformed outputs)

**Reuse from ccforpms:** Adapt communication style templates from ccforpms 1.3

---

### **1.5 Three Modes: Ask vs Agent vs Plan** 🔨 TO BUILD

**When to use which Composer mode (and which model)**

**Teaching approach:** Now that they've USED Composer in 1.3 and 1.4, explain the three modes + model selection

**Mode 1: Ask** (5 min)
- What it does: Read-only partner - analyzes, answers questions, NEVER makes changes
- When to use: Learning, exploring, planning, understanding
- Practice: "Ask mode - explain what PRODUCT.md contains and compare to competitors"

**Mode 2: Agent** (5 min)
- What it does: Autonomous executor - makes changes across files, runs commands, iterates
- When to use: Building/editing files, executing plans
- Practice: "Agent mode - create PRD outline from research" (creates actual file)

**Mode 3: Plan** (5 min)
- What it does: Structured planner - researches, asks questions, creates Markdown plans (Shift+Tab)
- When to use: Complex multi-step work requiring structure
- Practice: "Plan mode - plan a feature launch" (teaser for 1.6)

**🆕 Model Selection** (3 min)
- **Claude 3.5 Sonnet (default):** 95% of PM work - fast, capable, balanced
- **Claude 3 Opus:** Super complex strategic work, heavy context, deep analysis
- **Claude 3 Haiku:** Lightning-fast for simple tasks ("fix this typo", "alphabetize list")
- **For PMs:** Stick with Sonnet unless you have a specific reason to switch

**🆕 Complete Decision Framework:**

**Interface level:**
- Quick inline edit in current file? → **Cmd K**
- Everything else? → **Composer**

**Composer mode:**
- Single question/explanation? → **Ask mode**
- Build/create/edit files? → **Agent mode**
- Complex multi-step planning work? → **Plan mode**

**Model selection:**
- Default for everything → **Sonnet**
- Massive strategic doc with tons of context → **Opus** (slower but deeper)
- "Fix this one typo real quick" → **Haiku** (very fast)

**Why this matters:** Picking the right combo = better results faster. Most PMs will use **Composer Agent + Sonnet** for 90% of work.

**Time:** 20-25 minutes (expanded to include model selection framework)

---

### **1.6 Plan Mode Mastery** 🔨 TO BUILD

**Cursor's killer feature - structured thinking for complex PM work**

**Deep dive into Plan Mode (introduced in 1.5)**

**What to teach:**
- Shift+Tab to activate Plan Mode
- Research → clarify → plan → edit → execute workflow
- Interactive clarification questions
- Editing plans collaboratively
- Saving plans as documentation

**Hands-on Exercise: Product Launch Campaign Planning**
- **Scenario:** Launch a new feature (real-time collaboration) to customers
- **Complexity:** Coordinate messaging, email sequences, in-app announcements, blog post, sales enablement, support docs, success metrics
- Reference multiple context files (feature details, customer feedback, competitive positioning, personas)
- Cursor researches context and asks clarifying questions:
  - "Which customer segment should we target first?"
  - "Email or in-app announcement priority?"
  - "Timeline constraints?"
- Student answers interactively
- Cursor generates structured multi-channel launch plan with timeline
- Practice editing the plan (adjust messaging, reorder steps, add channels)
- Execute to create launch documents (or save plan for later)

**Why emphasize:** Plan Mode is MORE powerful in Cursor than Claude Code. Perfect for non-coding PM work requiring coordination across teams/channels.

**Time:** 25-30 minutes

**Files needed:**
- `feature-announcement.md` (new feature details)
- `target-customers.md` (customer segments and feedback)
- `competitive-positioning.md` (competitor messaging)
- Company context files (PRODUCT.md, PERSONAS.md)

**Files created:**
- `launch-campaign-plan.md` (comprehensive GTM plan)
- `launch-timeline.md` (execution timeline)

---

### **1.7 Project Rules: .cursor/rules** 🔨 TO BUILD

**Set context once, Cursor remembers forever - with before/after proof**

**Like CLAUDE.md but different syntax**

**What to teach:**
- `.cursor/rules/*.mdc` files
- Product context (terminology, personas, metrics)
- Writing style rules
- How rules apply automatically
- Global vs project rules

**Hands-on Exercise: Before/After Comparison**

**Step 1: Baseline (5 min)**
- Ask Cursor: "Write a product update announcing the new Workspace Sharing feature"
- Save as `product-update-baseline.md`
- Review: Likely inconsistent terminology, generic, no personas

**Step 2: Explain Rules (5 min)**
- Show existing `.cursor/rules/` files (course-instructor.mdc, taskflow-context.mdc)
- "This is WHY Cursor has known about TaskFlow all course!"
- Rules auto-apply, no @mention needed

**Step 3: Create Rules WITH Cursor's Help (8 min)**
- Ask Cursor (Agent mode): "Help me create `.cursor/rules/taskflow-terminology.mdc`"
- Include: Terminology ("Workspace" not "Project"), personas (Sarah, Mike, Alex), style (active voice, Oxford commas)
- **Meta moment:** Using Cursor to create rules FOR Cursor!

**Step 4: Test Rules (5 min)**
- Ask the EXACT same prompt: "Write a product update announcing the new Workspace Sharing feature"
- Save as `product-update-with-rules.md`

**Step 5: Compare Before/After (5 min)**
- Open both files side-by-side
- **Magic moment:** Same prompt, dramatically better output
- Validation: "What's different? Does it use 'Workspace'? Mention personas?"

**Why this matters:** See the immediate impact. Rules make Cursor write like YOUR team, automatically.

**Time:** 20-25 minutes

**Files created:**
- `product-update-baseline.md` (before rules)
- `.cursor/rules/taskflow-terminology.mdc` (the rules file)
- `product-update-with-rules.md` (after rules - side-by-side comparison)

**Reuse from ccforpms:** Adapt CLAUDE.md module for .mdc syntax

---

## 📚 MODULE 2: Real PM Work (3 modules)

**Goal:** Apply Cursor skills to realistic PM scenarios
**Time:** 2.5-3 hours total

**Approach:** These can be VERY similar to ccforpms - just adapted for Cursor interface and features

---

### **2.1 Write a PRD** 🔨 TO BUILD

**End-to-end PRD workflow**

**The Complete Workflow:**

1. **Start with rough idea**
   - "I'm thinking about adding dark mode to TaskFlow"

2. **Use Plan Mode to structure approach**
   - What research do we need?
   - What questions to answer?
   - What sections in PRD?

3. **Reference research with @ mentions**
   - `@user-interviews` folder
   - `@competitive-analysis` file
   - `@Docs` for company context

4. **Generate PRD in Composer (Agent mode)**
   - Full structured PRD
   - RICE scoring
   - User stories
   - Success metrics

5. **Iterate with Cmd K for quick fixes**
   - Fix typos
   - Adjust wording
   - Polish sections

**What Students Create:**
- Complete PRD for dark mode feature (or similar)
- Following TaskFlow's template
- Using actual research files
- Production-ready output

**Time:** 45-60 minutes

**Reuse from ccforpms:**
- Same TaskFlow feature (dark mode works well)
- Same PRD template structure
- Similar research files
- Adapt for Cursor workflow (Plan Mode first, then Agent mode)

---

### **2.2 Analyze User Research** 🔨 TO BUILD

**Synthesis work - PM bread and butter**

**The Workflow:**

1. **Reference multiple interview files**
   - Use `@Folders` to reference entire user-interviews directory
   - Or `@Files` to reference specific interviews

2. **Extract insights in Composer (Agent mode)**
   - Pain points by persona
   - Common themes
   - Key quotes
   - Patterns across interviews

3. **Create synthesis document**
   - Executive summary
   - Detailed findings
   - Recommendations
   - Next steps

**What Students Create:**
- User research synthesis document
- Pain points organized by persona
- Actionable recommendations

**Time:** 30-45 minutes

**Reuse from ccforpms:**
- Same user interview files (5-8 interviews)
- Same exercise structure
- Adapt for Cursor @ mention workflow

---

### **2.3 Data Analysis** 🔨 TO BUILD

**Working with CSV files, surveys, metrics**

**The Workflow:**

1. **Load CSV file with user survey results**
   - `@Files` to reference CSV
   - Cursor can read and analyze CSV data

2. **Analyze in Composer (Agent mode)**
   - Sentiment analysis
   - Theme extraction
   - Statistical summaries
   - Identify trends

3. **Create insights document**
   - Key findings
   - Data visualizations (if possible)
   - Recommendations
   - Action items

**What Students Create:**
- Survey analysis document
- Insights and recommendations
- Data-driven next steps

**Time:** 30-45 minutes

**Reuse from ccforpms:**
- Same CSV files (user survey results)
- Same data analysis exercise
- Similar output format

---

## 📊 Total Course Length

| Module | # of Lessons | Time per Lesson | Total Time |
|--------|--------------|-----------------|------------|
| **Module 0** | 2 | 5-15 min | ~20 min |
| **Module 1** | 7 | 15-30 min | ~3 hours |
| **Module 2** | 3 | 30-60 min | ~2 hours |
| **TOTAL** | **12 lessons** | - | **~5.5 hours** |

**Breakdown:**
- **0.1 Installation & Account Setup:** 10-15 min
- **0.2 Opening Course Folder:** 5 min
- **1.1 Welcome:** 15-20 min
- **1.2 Interface:** 20-25 min (includes "Add to Chat" + model switching)
- **1.3 First PM Tasks:** 25-30 min (includes Apply/Reject workflow)
- **1.4 Communication Styles:** 25-30 min (PM superpower)
- **1.5 Three Modes:** 20-25 min (includes model selection framework)
- **1.6 Plan Mode:** 25-30 min
- **1.7 Project Rules:** 20-25 min
- **2.1 Write PRD:** 45-60 min
- **2.2 User Research:** 30-45 min
- **2.3 Data Analysis:** 30-45 min

**Comparison:** Claude Code for PMs = ~20 hours (comprehensive)

**Perfect for lightweight launch:** Students productive in ~5.5 hours (one afternoon or weekend).

---

## 🔄 Key Adaptations from Claude Code Course

### **What We're ADDING (Cursor-specific):**

✅ **Module 1.2: Hands-On Interface Practice**
- Conversational validation approach (find secret codes, describe what you see)
- **🆕 "Add to Chat" workflow** - Right-click to add files/folders (more common than @ mentions!)
- **🆕 Model switching dropdown** - Sonnet/Opus/Haiku introduction
- Markdown All in One extension setup
- Three-pane layout orientation
- Doesn't exist in ccforpms (Obsidian setup instead)

✅ **Module 1.3: Apply/Reject Workflow** 🆕
- **Critical:** Teach students to review changes before accepting
- Apply vs Reject buttons when Cursor suggests edits
- Integrated into first hands-on tasks (Scenario 1 & 2)
- Essential safety/quality workflow

✅ **Module 1.4: Communication Styles as separate module**
- Split from ccforpms 1.3 because it's so powerful for PMs
- Reusable templates = 10 hours/week saved
- Deserves its own focus

✅ **Module 1.5: Complete Decision Framework** 🆕
- Ask vs Agent vs Plan (unique to Cursor)
- **🆕 Model selection framework** - When to use Sonnet/Opus/Haiku
- **🆕 Cmd K vs Composer decision tree**
- Comprehensive "when to use what" guide
- Doesn't exist in Claude Code

✅ **Module 1.6: Heavier emphasis on Plan Mode**
- Cursor's Plan Mode is superior to Claude Code's
- Full dedicated module (vs brief mention in ccforpms)
- Shift+Tab workflow, interactive planning

✅ **@Web built-in**
- No MCP setup needed (vs Claude Code requirement)
- Easier, more accessible

✅ **Visual interface advantages throughout**
- File explorer built-in (no Obsidian needed)
- Can see files as you work
- Less intimidating than terminal

---

### **What We're REMOVING (not needed for lightweight v1):**

❌ **Obsidian/visualization setup**
- Claude Code needs external viewer
- Cursor has file explorer built-in
- Entire module not needed

❌ **Parallel agents module**
- Claude Code: unlimited agents (powerful!)
- Cursor: limited to 8 agents
- Less useful, skip for v1

❌ **Custom sub-agents**
- Claude Code: `.claude/agents/` files
- Cursor: custom modes exist but more complex
- Skip for lightweight launch

❌ **MCP setup for basic features**
- Claude Code needs MCP for @Web, @Docs
- Cursor has these built-in
- Simpler for students

❌ **Terminal integration**
- Claude Code IS the terminal
- Cursor has terminal but less critical for PMs
- Skip for v1

---

### **What We're KEEPING (works great in Cursor):**

✅ **Project memory concept**
- Claude Code: CLAUDE.md hierarchy
- Cursor: .cursor/rules/*.mdc
- Same concept, different syntax
- Keep the module, adapt the content

✅ **@ mentions**
- Claude Code has @Files, @Folders
- Cursor has MORE @ symbols (@Docs, @Web, @Git, etc.)
- Even better in Cursor!

✅ **PRD workflow (Module 2.1)**
- Same TaskFlow scenario
- Same PRD template
- Same research files
- Just adapt for Cursor features

✅ **User research synthesis (Module 2.2)**
- Same interview files
- Same exercise
- Works perfectly in Cursor

✅ **Data analysis (Module 2.3)**
- Same CSV files
- Same analysis exercise
- Cursor handles data well

---

## ❓ Open Questions for Alignment

### **1. Module 1.2 - Three Composer Modes**

**NEED TO CLARIFY:**
- What does **Ask mode** do vs **Agent mode**?
- When should PMs use each mode?
- Practical differences in behavior?

This is the MOST CRITICAL module to get right since it's unique to Cursor.

---

### **2. Plan Mode Placement**

**Current:** Module 1.4 (early in course)

**Rationale:** It's so powerful, teach it early so students can use it throughout Module 2

**Alternative:** Move it later (after students have used Composer/Agent more)

**Question:** Does early placement make sense, or should students get comfortable with basic Composer first?

---

### **3. Parallel Agents**

**Current plan:** Skip entirely for v1

**Rationale:**
- Limited to 8 agents (vs Claude Code's unlimited)
- Less impactful than in Claude Code
- Adds complexity to lightweight launch

**Question:** Should we include a light "1.6 Parallel Agents" module anyway? Or save for v2?

---

### **4. Module 2 Scenarios**

**Current:**
- 2.1 Write a PRD
- 2.2 Analyze User Research
- 2.3 Data Analysis

**Question:** Are these the right three scenarios? Or should we swap one out for:
- Communication (create Slack update, exec email, Notion doc)?
- Competitive analysis?
- Sprint planning?
- Something else?

---

### **5. Custom Slash Commands**

**Current plan:** Not teaching in v1 (lightweight)

**Rationale:**
- Students already learned `/start-X-X` commands (they're using them!)
- Creating custom commands adds complexity
- Save for v2

**Question:** Should we include a quick "1.6 Creating Your Own Slash Commands" module? It's pretty powerful for PM workflows.

---

## 🎯 Next Steps

1. **Clarify Composer modes** (Ask vs Agent vs Plan)
2. **Align on module order** (especially Plan Mode placement)
3. **Confirm Module 2 scenarios** (PRD + Research + Data = right mix?)
4. **Start building Module 1.2** (most critical new module)
5. **Port and adapt Module 2 content** from ccforpms

---

## 📝 Status & Notes

**Last Updated:** November 7, 2025

### ✅ **Completed:**
- Module 1.1 built and tested - working PERFECTLY
- Teaching mechanism validated (slash commands + SCRIPT.md + .cursor/rules)
- Curriculum structure finalized (10 modules, ~5 hours)
- Module breakdown based on ccforpms 1.3 approach (teach through PM work)
- **🆕 Added critical Cursor-specific features:**
  - "Add to Chat" workflow (Module 1.2)
  - Model switching (Modules 1.2 + 1.5)
  - Apply/Reject workflow (Module 1.3)
  - Complete decision framework (Module 1.5)

### 🔨 **Ready to Build:**
- Module 1.2: Interface hands-on practice (now includes "Add to Chat" + model switching)
- Module 1.3: First PM tasks (now includes Apply/Reject workflow)
- Module 1.4: Communication styles
- Module 1.5: Three Modes + decision framework (now includes model selection)
- Modules 1.6-1.7: Plan Mode, Project Rules
- Module 2.1-2.3: PRD, Research, Data (port from ccforpms)

### ❓ **Still Need:**
- Research if image pasting works differently in Cursor (for potential future module)

### ⏱️ **Timeline:**
- **If we start building:** Could have Module 1.2-1.4 done this week
- **Full course:** 1-2 weeks if we move fast
- **POC approach:** Build 1.2, test with user, iterate

### 🔍 **Recent Changes (Nov 7):**
- **Added Module 0: Getting Started** (2 lessons, ~20 min total)
  - 0.1: Installation & Account Setup (combined from original 0.1 + 0.2)
  - 0.2: Opening the Course Folder (GitHub release download via website button)
- **Updated Module 0.2 approach:**
  - Website "Download Course Files" button → GitHub release ZIP
  - No terminal commands, no GitHub navigation needed
  - Simple: download → unzip → open in Cursor
  - Skipped: Clone repo (gets website code too), SSH (remote dev only), terminal commands (too technical)
- **Created Step 1 outlines for all 12 modules** (high-level overviews ready for review)
- **Clarified Ask vs Agent vs Plan modes** (research complete):
  - Ask = Read-only partner (never makes changes)
  - Agent = Autonomous executor (creates/edits files)
  - Plan = Structured planner (researches, asks questions, creates plans)
  - Recommended workflow: Ask (understand) → Plan (structure) → Agent (execute)
- Removed @Docs from curriculum (technical documentation, not PM-relevant)
- Added "Add to Chat" workflow - THE most common context-adding method
- Added model switching introduction (Sonnet/Opus/Haiku)
- Added Apply/Reject workflow - critical safety/quality practice
- Strengthened decision framework in 1.5 (Cmd K vs modes vs models)
- Time adjustments: 1.2 → 20-25 min, 1.3 → 25-30 min, 1.5 → 20-25 min
- Total course: 10 lessons → **12 lessons** (~5 hours → ~5.5 hours)

---

**This is going to be incredible.** 🚀
