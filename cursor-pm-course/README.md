# Cursor for Product Managers

**An interactive course teaching PMs how to use Cursor AI for daily product work**

---

## 🎯 What is This?

This is an interactive, hands-on course that teaches Product Managers how to use **Cursor** - an AI-powered IDE - for PM work like writing PRDs, analyzing user research, processing data, creating roadmaps, and more.

**This is a PROOF OF CONCEPT** currently containing only Module 1.1 (Welcome to TaskFlow) to validate the teaching mechanism.

---

## 🚀 Quick Start

### Prerequisites

1. **Cursor installed** - Download from [cursor.com](https://cursor.com)
2. **Cursor account** (free or paid)
3. **This course folder** downloaded or cloned

### How to Start

1. **Open this folder in Cursor**
   - Launch Cursor
   - File → Open Folder
   - Select the "Cursor for Product Managers" folder

2. **Open Composer**
   - Press `Cmd+I` (Mac) or `Ctrl+I` (Windows/Linux)
   - This opens Cursor's AI Composer mode

3. **Start Module 1.1**
   - In Composer, type: `/start-1-1`
   - Press Enter
   - Follow along as Claude guides you through the module!

---

## 📚 Course Structure (Full Version - Coming Soon)

### Current Status: POC (Module 1.1 Only)

This proof of concept includes:
- ✅ Module 1.1: Welcome to TaskFlow

### Planned Future Modules:

**Module 1: Cursor Fundamentals**
- 1.2: Using Cursor's Interface (Chat, Cmd K, Composer)
- 1.3: @ Mentions and File Operations
- 1.4: First PM Tasks (meeting notes, research synthesis)
- More modules coming...

**Module 2: Practical PM Skills**
- Writing PRDs
- Analyzing data
- Planning features with Plan Mode
- More coming...

**Module 3: Advanced Features**
- Custom slash commands
- Project rules
- Parallel agents for research
- More coming...

---

## 🏢 About TaskFlow (Your Learning Company)

Throughout this course, you'll work for **TaskFlow** - a fictional project management SaaS company.

**What it is:**
- Series B startup ($2.5M ARR, 10K users)
- "Asana meets Linear" for remote teams
- You're the Senior PM for activation & onboarding

**Why this matters:**
Every exercise uses realistic PM documents from TaskFlow - PRDs, user research, competitive analysis, meeting notes. You're not learning in a vacuum; you're doing real PM work!

---

## 🎓 How This Course Works

### Interactive Teaching

Unlike traditional courses where you read and then try things:

1. **Type a slash command** (e.g., `/start-1-1`)
2. **Claude becomes your instructor** - guides you step-by-step
3. **You practice immediately** - hands-on exercises
4. **Get feedback in real-time** - Claude checks your understanding
5. **Progress through modules** - each builds on the last

### Teaching Mechanism

This course uses Cursor's features to create an interactive learning experience:

- **Slash commands** (`.cursor/commands/`) trigger each module
- **Teaching scripts** (`lesson-modules/X.X-name/SCRIPT.md`) guide Claude on how to teach
- **Project rules** (`.cursor/rules/`) establish course context and instructor personality
- **Pre-created files** (`company-context/`) provide realistic PM documents

---

## 📖 What You'll Learn

By the end of the course (when complete), you'll know how to use Cursor for:

- **Documentation:** Writing PRDs, user stories, roadmaps, feature specs
- **Research:** Analyzing user interviews, synthesizing feedback, competitive analysis
- **Data:** Processing surveys, analyzing metrics, building dashboards
- **Communication:** Creating stakeholder updates, exec summaries, team docs
- **Planning:** Sprint planning, roadmapping, feature prioritization
- **Automation:** Custom workflows, reusable templates, PM productivity systems

---

## 🛠️ Course Architecture

### File Structure

```
Cursor for Product Managers/
├── .cursor/
│   ├── rules/
│   │   ├── course-instructor.mdc      # Establishes teaching personality
│   │   └── taskflow-context.mdc       # Product context for all modules
│   └── commands/
│       └── start-1-1.md                # Slash command to start Module 1.1
├── company-context/
│   ├── COMPANY.md                      # TaskFlow company overview
│   ├── PRODUCT.md                      # Product details
│   ├── PERSONAS.md                     # User personas
│   └── COMPETITIVE.md                  # Competitive landscape
├── lesson-modules/
│   └── 1.1-welcome/
│       └── SCRIPT.md                   # Teaching script for Module 1.1
├── README.md                           # This file
└── CURSOR_RESEARCH_COMPREHENSIVE.md   # Research on Cursor features
```

### How It Works

1. **Project Rules** (`.cursor/rules/*.mdc`) tell Cursor:
   - You're teaching a course (be an instructor, not just an assistant)
   - Follow teaching scripts exactly
   - Use TaskFlow context throughout

2. **Slash Commands** (`.cursor/commands/*.md`) trigger modules:
   - User types `/start-1-1` in Composer
   - Command tells Cursor to read and follow the teaching script

3. **Teaching Scripts** (`lesson-modules/*/SCRIPT.md`) guide Claude:
   - Step-by-step lesson plan
   - What to say, when to wait for student, how to provide feedback
   - Structured like a teacher's lesson plan

---

## ✅ POC Success Criteria

This proof of concept tests whether the teaching mechanism works in Cursor.

**POC succeeds if:**
- ✅ User can run `/start-1-1` command
- ✅ Cursor reads the SCRIPT.md file
- ✅ Cursor acts as an instructor (follows script, waits for responses, provides encouragement)
- ✅ Teaching flow feels natural and guided
- ✅ Module completes with clear next steps

**POC fails if:**
- ❌ Cursor just displays script instead of following it as instructions
- ❌ Instructor personality doesn't come through
- ❌ Script adherence is weak or inconsistent

---

## 🤔 Differences from Claude Code Course

This course is adapted from "Claude Code for Product Managers" with key changes for Cursor:

**Advantages of Cursor:**
- ✅ Visual interface (see files, not just terminal)
- ✅ Built-in file explorer
- ✅ @Docs integration (index company wikis, internal docs)
- ✅ Superior Plan Mode for structured planning
- ✅ Less intimidating for non-technical PMs

**Differences:**
- ⚠️ Limited parallel agents (8 max vs Claude Code's unlimited)
- ⚠️ Different context system (.cursor/rules vs CLAUDE.md hierarchy)
- ⚠️ Three workflows to learn (Chat, Cmd K, Composer vs one interface)

---

## 🐛 Feedback & Issues

This is a proof of concept. Your feedback is invaluable!

If you encounter issues:
- Script not being followed correctly
- Confusing instructions
- Technical problems
- Suggestions for improvement

Please share your feedback to help improve the course!

---

## 📄 License

MIT License - feel free to use and adapt!

---

## 🙏 Credits

- Inspired by "Claude Code for Product Managers" course
- Built to test if interactive AI-taught courses work in Cursor
- TaskFlow is a fictional company created for learning purposes

---

**Ready to start? Open Composer (Cmd+I / Ctrl+I) and type `/start-1-1`**
