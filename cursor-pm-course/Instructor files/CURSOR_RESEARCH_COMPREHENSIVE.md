# Cursor Comprehensive Research & Course Planning Guide

**Research Date:** November 7, 2025
**Purpose:** Foundation document for building "Cursor for Product Managers" course
**Based on:** Latest Cursor 2.0 features and 2025 capabilities

---

## Executive Summary

Cursor is a full-featured AI IDE (forked from VS Code) that provides an entirely different experience from Claude Code's CLI approach. While both use AI to help with work, Cursor offers a **visual, integrated development environment** with built-in file explorer, inline editing, and multi-file workflows.

**Key Insight for Course:** Cursor is MORE accessible for PMs than Claude Code in some ways (visual interface, no terminal fear) but LESS powerful in others (no parallel agents like Claude Code has). The course structure must adapt significantly.

---

## 🎯 Cursor vs Claude Code: Critical Differences

### Architecture Philosophy

| Aspect | Claude Code | Cursor |
|--------|-------------|---------|
| **Interface** | CLI/Terminal-first | IDE/Visual-first |
| **Base** | Standalone CLI tool | VS Code fork |
| **File Viewing** | Requires external tool (Obsidian) | Built-in file explorer + editor |
| **Learning Curve** | Steeper (terminal intimidation) | Gentler (familiar editor UI) |
| **Best For** | Automation, scripting, multi-repo | Interactive editing, single-project |

### Feature Comparison Table

| Feature | Claude Code | Cursor | PM Course Impact |
|---------|-------------|---------|------------------|
| **Slash Commands** | ✅ Yes (`.claude/commands/`) | ✅ Yes (`.cursor/commands/`) | ✅ Can replicate module structure |
| **Project Context** | ✅ `CLAUDE.md` (hierarchical) | ✅ `.cursor/rules/*.mdc` (new system) | ⚠️ Different syntax, similar concept |
| **@ File Mentions** | ✅ Yes | ✅ Yes (+ folders, code, docs) | ✅ Similar teaching approach |
| **Parallel Agents** | ✅ Yes (8+ agents) | ⚠️ Limited (8 max, uses git worktrees) | ⚠️ Must adjust expectations |
| **Custom Sub-agents** | ✅ Yes (`.claude/agents/`) | ✅ Yes (Custom Modes) | ✅ Can replicate with adaptations |
| **Plan Mode** | ✅ Yes | ✅ Yes (better implementation!) | ✅ Strong feature to teach |
| **Terminal Integration** | ✅ Native (it IS terminal) | ✅ Cmd K in terminal | ⚠️ Different workflow |
| **Web Search** | ✅ Via MCP | ✅ Built-in | ✅ Actually easier in Cursor |
| **Documentation** | ⚠️ Via MCP | ✅ @Docs (superior) | ✅ Better for PMs |

### Philosophy Difference

**Claude Code:** "I am a CLI tool with AI. You talk to me in terminal, I execute tasks."

**Cursor:** "I am an IDE with AI embedded everywhere. You edit files visually, I assist inline."

This philosophical difference means the ENTIRE course narrative must change.

---

## 🔍 Cursor Features: Deep Dive for PMs

### 1. **Slash Commands** (`.cursor/commands/`)

**How It Works:**
- Store reusable AI prompts as Markdown files in `.cursor/commands/[name].md`
- Type `/` in Agent input → dropdown shows all commands
- Select command → prompt executes

**Example Command Structure:**
```markdown
# /weekly-update

Generate a weekly PM status update including:
- Completed work this week
- In-progress items
- Blockers and risks
- Next week priorities

Format in markdown with clear sections.
```

**Course Implications:**
- ✅ Can use exact same `/start-1-1`, `/start-1-2` approach as Claude Code course
- ✅ Commands are Markdown files (easy to create, version control, share)
- ✅ PMs can create their own commands for recurring tasks

**Key Difference from Claude Code:**
- Cursor stores in `.cursor/commands/` vs `.claude/commands/`
- Otherwise functionally identical!

---

### 2. **Project Context: `.cursor/rules/*.mdc` (NEW System)**

**How It Works:**
- OLD: Single `.cursorrules` file (deprecated but still works)
- NEW: Multiple `.mdc` files in `.cursor/rules/` directory
- Each rule can have conditions (glob patterns) to trigger only when relevant
- Rules provide context to AI about project, coding standards, terminology

**Example Rule File: `.cursor/rules/product-context.mdc`**
```markdown
# Product Context for TaskFlow

## About TaskFlow
TaskFlow is a project management SaaS for remote teams (Series B, $2.5M ARR, 10K users).

## User Personas
- Sarah (Design Lead) - visual learner, values simplicity
- Mike (Engineering Manager) - technical, wants automation
- Alex (Startup Founder) - busy, needs speed

## Terminology
- Use "Workspace" not "Project"
- Use "Board" not "Dashboard"
- Use "Task" not "Ticket"

## Writing Style
- Active voice
- Oxford commas
- Bullet points over paragraphs
```

**Course Implications:**
- ⚠️ Different from `CLAUDE.md` but similar purpose
- ✅ Actually MORE flexible (can have multiple rules, conditional logic)
- ✅ Can store TaskFlow context here instead of `CLAUDE.md`
- ⚠️ Need to teach the `.mdc` format and `.cursor/rules/` structure

**Migration Note:**
- `.cursorrules` → `.cursor/rules/*.mdc` is the modern approach
- Course should teach the NEW system

---

### 3. **@ Mentions: More Comprehensive Than Claude Code**

**Available @ Symbols:**
- `@Files` - Reference specific files
- `@Folders` - Reference entire directories
- `@Code` - Reference specific functions/classes
- `@Docs` - Reference indexed documentation
- `@Git` - Reference git context (branches, commits)
- `@Past Chats` - Reference previous conversations
- `@Cursor Rules` - Reference project rules
- `@Web` - Web search (built-in!)
- `@Link` - Reference specific URLs
- `@Recent Changes` - Recent file modifications
- `@Lint Errors` - Current linting issues (Chat only)

**Course Implications:**
- ✅ MORE powerful than Claude Code's @ system
- ✅ `@Web` is built-in (no MCP needed like Claude Code)
- ✅ `@Docs` is incredible for PMs (can index internal docs, Notion, etc.)
- ✅ Can teach PMs to build comprehensive context quickly

**PM-Specific Use Cases:**
- "Create PRD using @user-research/ folder and @Docs (Product_Playbook)"
- "Summarize changes from @Git last sprint"
- "Update weekly update based on @Recent Changes"

---

### 4. **Agent Mode: Multi-File Autonomous Work**

**How It Works:**
- Agent is the most autonomous mode (vs Ask/Manual)
- Can read files, edit multiple files, run terminal commands, search web
- Can run up to 8 parallel agents using git worktrees
- Creates plans before executing (Plan Mode integration)

**Three Modes:**
1. **Ask Mode** (Cmd+L) - Read-only, explains code, makes suggestions
2. **Manual Mode** (Cmd+K) - Quick inline edits, single file
3. **Agent Mode** (Cmd+I) - Autonomous multi-file work

**Parallel Agents:**
- Uses git worktrees to create isolated copies of codebase
- Each agent works independently without conflicts
- Can run different approaches simultaneously and compare
- LIMITED to 8 agents (vs Claude Code's unlimited)

**Course Implications:**
- ⚠️ Agent concept different from Claude Code's parallel agents
- ⚠️ Limited to 8 parallel tasks (vs Claude Code's unlimited)
- ✅ But has better UI for tracking agents (left sidebar)
- ✅ Plan Mode integration is superior to Claude Code

**Teaching Approach:**
- Focus on "multi-file workflows" not "clone yourself 20 times"
- Emphasize Plan Mode as the power feature
- Parallel agents as "compare different approaches" not "batch processing"

---

### 5. **Plan Mode: Cursor's Killer Feature**

**How It Works:**
1. Press `Shift+Tab` when describing complex task
2. Cursor researches codebase, asks clarifying questions
3. Creates structured plan with file paths, to-dos, code references
4. You edit the plan inline
5. Execute the plan (or save as Markdown for later)

**Why It's Better Than Claude Code:**
- Interactive clarification questions
- Visual plan editor
- File path references with clickable links
- Can save plans as documentation
- Integrated into Agent workflow

**Course Implications:**
- ✅ This should be a MAJOR module (more prominent than in Claude Code course)
- ✅ PMs will LOVE this for feature planning, PRD development, roadmap creation
- ✅ Plan-first workflow is perfect for PM thinking

**PM Use Cases:**
- "Plan out how to implement dark mode feature"
- "Create plan for analyzing Q4 user feedback data"
- "Plan competitive research across 5 competitors"

---

### 6. **Custom Modes: Like Sub-Agents but More Flexible**

**How It Works:**
- Create custom AI modes with specific instructions and tool permissions
- Each mode can have different model, keybinding, allowed tools
- Examples: "Planner" mode (o1 model, planning only), "Executor" mode (Claude, edit enabled)

**Configuration:**
- Enable in Settings → Features → Chat → Custom modes
- Click "Add custom mode"
- Set name, model, instructions, tools (Edit, Run, MCP)

**Course Implications:**
- ✅ Similar to Claude Code's custom sub-agents
- ✅ Actually more flexible (can control tools, models per mode)
- ⚠️ Different interface (mode selector vs agent files)

**PM Custom Modes Ideas:**
- "PRD Reviewer" mode (o1, detailed analysis, no edits)
- "User Research Analyzer" mode (Claude, synthesis focus)
- "Executive Communicator" mode (write mode, concise business language)

---

### 7. **Composer vs Chat vs Cmd K: Three Workflows**

**Cmd K (Ctrl/⌘ K) - Inline Editing:**
- Quick edits at cursor position
- Single file focus
- Diff view for accepting/rejecting changes
- Best for: Fast tweaks, generating small functions

**Chat/Ask (Cmd L) - Read-Only Assistant:**
- Sidebar chat
- Explains code, answers questions
- No direct editing (you copy/paste results)
- Best for: Learning, understanding, getting suggestions

**Composer/Agent (Cmd I) - Multi-File Autonomous:**
- Full-screen workspace
- Multi-file editing
- Autonomous task execution
- Integrated with Plan Mode
- Best for: Complex features, refactoring, building from scratch

**Course Implications:**
- ⚠️ Must teach all three workflows (Claude Code only has one)
- ✅ More options = more flexibility for PMs
- ⚠️ Risk of confusion ("which do I use when?")

**Teaching Strategy:**
- Start with Chat (safe, read-only, familiar)
- Move to Cmd K (quick edits, see immediate results)
- Graduate to Composer (complex multi-file work)

---

### 8. **Terminal Integration: Cmd K in Terminal**

**How It Works:**
- Built-in terminal in Cursor
- Press Cmd/Ctrl K in terminal → AI prompt bar appears
- Describe desired terminal action → AI generates command
- Accept (Esc) or Run immediately (Cmd+Enter)

**Features:**
- Uses recent terminal history as context
- Can generate git commit messages
- Follow-up instructions supported

**Course Implications:**
- ✅ Less scary than pure CLI (still visual IDE around it)
- ✅ PMs can avoid memorizing git commands
- ⚠️ Different from Claude Code (which IS the terminal)

**PM Use Cases:**
- "Create git commit message for recent changes"
- "Find all markdown files modified this week"
- "Generate branch name for dark mode feature"

---

### 9. **Documentation Integration: @Docs**

**How It Works:**
- Go to Settings → Indexing & Docs
- Add documentation URLs
- Cursor indexes content (including child pages if you add trailing `/`)
- Use `@Docs` to reference in prompts
- Cursor uses vector similarity search to find relevant docs

**Pre-indexed Docs:**
- Cursor comes with many popular frameworks already indexed
- Check before adding custom docs

**Course Implications:**
- ✅ HUGE advantage over Claude Code (which needs MCP)
- ✅ PMs can index internal wikis, Notion, Confluence, etc.
- ✅ "Institutional knowledge" becomes AI-accessible

**PM Use Cases:**
- Index company product wiki
- Add design system documentation
- Include API documentation
- Reference past PRDs and roadmaps

---

### 10. **Memories: Persistent Learning**

**How It Works:**
- Cursor automatically extracts memories from conversations
- Stores facts, preferences, instructions
- Can manually tell Cursor to "Remember [X]"
- Applies memories in future interactions

**Example:**
- "Remember that when writing PRDs, always include RICE scoring"
- "Remember that our primary user persona is Sarah, the Design Lead"
- Cursor: "Got it, I'll apply this in future PRDs"

**Course Implications:**
- ✅ Complement to Rules system (Rules = static, Memories = learned)
- ✅ PMs can train Cursor over time
- ⚠️ Still in GA (Generally Available) but improving

**Teaching Approach:**
- Start with Rules (explicit, predictable)
- Introduce Memories as "AI learns your preferences"
- Show how they work together

---

## 🎓 Course Teaching Mechanism: Recommendations

### Primary Teaching Method: Slash Commands (Same as Claude Code!)

**Good News:** Cursor supports slash commands in `.cursor/commands/` folder with nearly identical syntax to Claude Code.

**Approach:**
1. Store teaching scripts in `.cursor/commands/start-X-X.md`
2. User types `/start-1-1` in Composer
3. Command loads teaching content
4. **CRITICAL DIFFERENCE:** Cursor will display content in chat, NOT execute it as instructions to itself

**The Problem:**
- Claude Code: `/start-1-1` → Claude reads teaching script → Claude BECOMES the instructor
- Cursor: `/start-1-1` → Displays teaching script → User reads it → ???

**Proposed Solution:**

**Option A: Hybrid Approach (RECOMMENDED)**
- Slash command contains: "Read and follow the instructions in `lesson-modules/1.1-welcome/TEACHING_GUIDE.md`"
- Teaching guide has: "You are now the instructor for Module 1.1. Follow this script..."
- Cursor reads guide and becomes instructor

**Option B: Self-Contained Commands**
- Each slash command IS the complete teaching script
- Pro: Simpler structure
- Con: Longer command files, harder to maintain

**Option C: Custom Mode as Instructor**
- Create "Course Instructor" custom mode
- Mode has system prompt: "You are teaching Cursor to PMs. Be encouraging, explain why, demonstrate first."
- Each slash command activates Instructor mode + loads lesson content

**RECOMMENDATION:** Use Option A (Hybrid) for consistency with Claude Code course structure, with Option C as an enhancement.

---

### Project Rules for Course Context

**Create `.cursor/rules/course-context.mdc`:**
```markdown
# Cursor for PMs Course Context

You are an instructor teaching Product Managers how to use Cursor effectively.

## Teaching Style
- Encouraging and patient
- Always explain WHY and WHEN to use features
- Demonstrate first, then have student practice
- Provide real-world PM scenarios
- Never assume technical knowledge

## About TaskFlow
[TaskFlow context goes here - same as Claude Code course]

## Course Structure
[Module structure goes here]

When a user runs a /start-X-X command, you are teaching that specific module.
```

This ensures Cursor knows it's teaching throughout the course.

---

### Visual Advantage: Leverage the IDE

**Key Insight:** Unlike Claude Code (terminal only), Cursor has a visual interface. USE IT!

**Curriculum Adaptations:**

1. **Module 0.2: No Obsidian Needed!**
   - Claude Code requires external file viewer
   - Cursor HAS file explorer built-in
   - **Replace:** "Install Obsidian" → "Explore Cursor's file explorer"
   - **Benefit:** Faster onboarding, one less tool to install

2. **Module 1.2: Visualizing Files → Using the IDE**
   - Rename to "Navigating Cursor's Interface"
   - Teach: File explorer, split editors, terminal panel, sidebar organization
   - Show: How to open multiple files, arrange workspace

3. **New Module: Cmd K vs Composer vs Chat**
   - Critical to teach three workflows early
   - Prevents confusion
   - Shows when to use each approach

4. **Module 1.4: Agents → Different Narrative**
   - Claude Code: "Clone yourself 20 times for batch processing!"
   - Cursor: "Run multiple approaches in parallel to find best solution"
   - Focus on: Plan Mode + 8 parallel agents for exploration
   - NOT on: Batch processing 50 files (limited to 8)

---

## 📋 Recommended Course Structure Adaptations

### Module Changes from Claude Code Course

| Module | Claude Code | Cursor Adaptation | Reason |
|--------|-------------|-------------------|---------|
| **0.1 Installation** | Install via npm | Download from cursor.com | Different install method |
| **0.2 Setup** | Install Obsidian | Skip! (IDE has viewer) | Built-in file explorer |
| **1.1 Welcome** | Keep same | Keep same | Concept identical |
| **1.2 Visualization** | Obsidian setup | **Rename: "Cursor Interface Tour"** | No external tool needed |
| **NEW: 1.2b** | N/A | **Add: "Three Workflows: Chat, Cmd K, Composer"** | Critical for Cursor |
| **1.3 First Tasks** | Keep mostly same | Adapt prompts for Composer | Same concept, different UI |
| **1.4 Agents** | Parallel batch processing | **Rename: "Agent Mode & Plan Mode"** | Different capabilities |
| **1.5 Custom Sub-agents** | `.claude/agents/` | **Rename: "Custom Modes"** | Different implementation |
| **1.6 CLAUDE.md** | CLAUDE.md hierarchy | **Rename: "Project Rules & Memories"** | Different system |
| **1.7 Planning Mode** | Less emphasis | **MAJOR MODULE: "Plan Mode Mastery"** | Cursor's killer feature |
| **2.1 Write PRD** | Keep same | Keep same + emphasize Plan Mode | Enhanced workflow |
| **2.2 Analyze Data** | Keep same | Keep same + show @Docs | Easier in Cursor |
| **2.3 Strategy** | Keep same | Add parallel agent comparison | Leverage 8 agents |

### New Modules to Add

1. **"Inline Editing Mastery (Cmd K)"** - Quick PM workflows
2. **"Documentation Indexing with @Docs"** - Index company wikis
3. **"Terminal Cmd K for PMs"** - No-fear git and terminal
4. **"Comparing Multiple Approaches with Parallel Agents"** - Use 8 agents for exploration

### Modules to Remove/Merge

1. **Obsidian-related content** - Not needed
2. **MCP setup for basic features** - Cursor has @Web and @Docs built-in
3. **Terminal fear content** - Less relevant (IDE reduces intimidation)

---

## 🎯 Cursor's Unique Strengths for PMs

### Advantages Over Claude Code

1. **Visual Interface = Less Intimidating**
   - No terminal fear for non-technical PMs
   - Familiar editor layout (like Notion, Google Docs)
   - See files and changes visually

2. **Better Documentation Integration**
   - @Docs built-in (no MCP needed)
   - Can index internal wikis, Confluence, Notion
   - Instant access to company knowledge

3. **Superior Plan Mode**
   - Interactive planning workflow
   - Visual plan editor
   - Saves plans as documentation

4. **Built-in Web Search**
   - No setup required (Claude Code needs MCP)
   - @Web just works

5. **Three Workflow Options**
   - Chat for questions
   - Cmd K for quick edits
   - Composer for complex work
   - More flexibility for different PM tasks

### Weaknesses Compared to Claude Code

1. **Limited Parallel Agents**
   - Only 8 vs Claude Code's unlimited
   - Can't do "process 50 meeting notes at once"
   - Must adapt course expectations

2. **No True Agent Autonomy**
   - Claude Code agents are more independent
   - Cursor agents need more guidance

3. **Single Project Focus**
   - Claude Code can work across multiple repos
   - Cursor is IDE-bound to one project

4. **Terminal Integration Weaker**
   - Cursor has terminal but it's secondary
   - Claude Code IS the terminal (more powerful for automation)

---

## 🚀 Next Steps: Building the Course

### Phase 1: Foundation Setup (NEXT)

1. **Create Directory Structure**
   ```
   cursor-for-pms/
   ├── .cursor/
   │   ├── commands/
   │   │   ├── start-0-1.md
   │   │   ├── start-0-2.md
   │   │   └── ...
   │   └── rules/
   │       ├── course-context.mdc
   │       └── taskflow-context.mdc
   ├── company-context/
   │   ├── COMPANY.md
   │   ├── PRODUCT.md
   │   ├── PERSONAS.md
   │   └── COMPETITIVE.md
   ├── lesson-modules/
   │   ├── 0.1-installation/
   │   ├── 0.2-setup/
   │   ├── 1.1-welcome/
   │   └── ...
   └── README.md
   ```

2. **Port TaskFlow Context**
   - Copy company-context/ files from Claude Code course
   - Adapt for Cursor (no changes needed to content)

3. **Create Course Context Rules**
   - `.cursor/rules/course-context.mdc` - Teaching instructions
   - `.cursor/rules/taskflow-context.mdc` - Product context

4. **Test Slash Command Mechanism**
   - Create `/start-test` command
   - Verify Cursor can read teaching guides and act as instructor
   - Validate the teaching loop works

### Phase 2: Core Modules (1-2 weeks)

1. **Module 0.1: Installation**
   - Download from cursor.com
   - Account setup
   - Verify installation

2. **Module 0.2: First Project Setup**
   - Clone course repo
   - Open in Cursor
   - Explore interface (file explorer, terminal, sidebar)

3. **Module 1.1: Welcome to TaskFlow**
   - Port from Claude Code course
   - Test in Cursor environment

4. **Module 1.2: Cursor Interface Tour**
   - File explorer
   - Split editors
   - Terminal panel
   - Settings

5. **Module 1.2b: Three Workflows**
   - Chat (Cmd L)
   - Cmd K inline editing
   - Composer (Cmd I)
   - When to use each

### Phase 3: Advanced Modules (2-3 weeks)

- Port remaining modules with adaptations
- Create new Cursor-specific modules
- Test all teaching scripts

### Phase 4: Polish & Deploy (1 week)

- Create README.md
- Build simple website
- Deploy to GitHub
- Create getting started guide

---

## 📊 Success Metrics for Course

### Student Outcomes

By end of course, PMs should be able to:

1. **Navigate Cursor confidently**
   - Use Chat, Cmd K, and Composer appropriately
   - Manage files and workspace

2. **Leverage Project Context**
   - Create `.cursor/rules/*.mdc` files
   - Use @ mentions effectively
   - Index documentation with @Docs

3. **Plan Before Building**
   - Use Plan Mode for complex tasks
   - Create structured approaches
   - Save plans as documentation

4. **Work Efficiently**
   - Create custom slash commands for recurring tasks
   - Use custom modes for specialized work
   - Build PM-specific workflows

5. **Collaborate with Engineers**
   - Understand agent capabilities and limitations
   - Communicate technical requirements clearly
   - Review code and implementations

---

## 🎓 Key Teaching Principles for Cursor Course

### 1. **Leverage the Visual Interface**
- Unlike Claude Code, SHOW don't just tell
- Use screenshots, GIFs, videos
- Point to specific UI elements

### 2. **Reduce Fear, Increase Confidence**
- Cursor is less scary than terminal (emphasize this!)
- PMs can SEE what's happening
- Undo is easy (unlike CLI commands)

### 3. **Three Workflows, Clear Guidance**
- Avoid confusion by teaching when to use Chat vs Cmd K vs Composer
- Provide decision framework early
- Use consistent examples

### 4. **Plan First, Build Second**
- Emphasize Plan Mode throughout
- "Think before you act" is very PM-friendly
- Show how plans become documentation

### 5. **Real PM Workflows**
- Every exercise answers "When would I use this?"
- Use TaskFlow context consistently
- Show how Cursor fits into PM tools ecosystem

---

## 🔮 Future Considerations

### Cursor 3.0 Likely Features

Based on trajectory, expect:
- More parallel agents (beyond 8)
- Better memory system
- Enhanced collaboration features
- Deeper integrations (Notion, Linear, etc.)

### Course Maintenance

- Update quarterly as Cursor evolves
- Monitor Cursor changelog
- Adapt modules as features change
- Community feedback loop

---

## 📝 Appendix: Quick Reference

### Cursor Keyboard Shortcuts for PMs

| Shortcut | Action | PM Use Case |
|----------|--------|-------------|
| `Cmd/Ctrl + L` | Open Chat | Ask questions, get explanations |
| `Cmd/Ctrl + K` | Inline Edit | Quick fixes, generate text |
| `Cmd/Ctrl + I` | Open Composer | Multi-file work, complex tasks |
| `Shift + Tab` | Plan Mode | Create structured plans |
| `/` | Slash Commands | Run custom PM workflows |
| `Cmd/Ctrl + P` | Quick Open | Find files fast |
| `Cmd/Ctrl + Shift + P` | Command Palette | Access all Cursor features |

### Essential @ Mentions for PMs

- `@Files` - Reference specific documents
- `@Folders` - Include entire directories
- `@Docs` - Use indexed documentation
- `@Web` - Search web for information
- `@Recent Changes` - Review recent edits
- `@Git` - Git context (branches, commits)

### Cursor vs Claude Code: Quick Decision Guide

**Use Cursor if:**
- You prefer visual interfaces
- Single project focus
- Want built-in docs integration
- Need superior Plan Mode
- Less comfortable with terminal

**Use Claude Code if:**
- You love terminal workflows
- Need massive parallel processing (20+ agents)
- Work across multiple repos
- Want pure automation
- Comfortable with CLI

**Use Both if:**
- You're building serious PM automation
- Want best of both worlds
- Different tools for different tasks

---

## ✅ Research Complete

This document provides comprehensive foundation for building "Cursor for Product Managers" course.

**Next Action:** Review this research with Carl, get approval on teaching mechanism, then begin Phase 1 (Foundation Setup).

**Confidence Level:** HIGH - Cursor's features are well-documented and stable for course creation.

**Timeline Estimate:** 4-6 weeks to build complete course, following Claude Code structure with adaptations.
