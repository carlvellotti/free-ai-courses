# Module 2.1: Write a PRD - COMPLETE ✅

**Status:** Ready to teach! All files created and slash command configured.

## Module Overview

Module 2.1 teaches students how to partner with AI to write better PRDs through a structured 6-phase workflow:

1. **Phase 1: Choose Foundation** - Select PRD template
2. **Phase 2: Build Context** - Review company & user research
3. **Phase 3: Sharpen Thinking** - Socratic questioning
4. **Phase 4: Generate Options** - Create 3 PRD versions
5. **Phase 5: Multi-Perspective Review** - Get feedback from 3 perspectives
6. **Phase 6: Address Feedback** - Make decisions & implement changes

## Files Created

### Teaching Infrastructure
- ✅ `SCRIPT.md` - Complete teaching script with proper ACTION/STOP/USER structure
- ✅ `.agent/workflows/start-2-1.md` - Workflow to launch module

### PRD Templates (2 files)
- ✅ `prd-templates/Carls-PRD-Template.md` - Comprehensive PRD structure
- ✅ `prd-templates/Lennys-PRD-Template.md` - Minimal 7-question template

### Context & Research Files (3 files)
- ✅ `taskflow-company-context.md` - Complete TaskFlow company info
- ✅ `user-research/pain-points.md` - User research insights
- ✅ `socratic-questioning.md` - Framework for strategic questions

### Reviewer Personas (3 files)
- ✅ `reviewers/engineer.md` - Technical feasibility perspective
- ✅ `reviewers/executive.md` - Strategic business perspective
- ✅ `reviewers/user-researcher.md` - User needs & UX perspective

### Reference Documentation
- ✅ `FILES_NEEDED.md` - Checklist of required files (now all complete)
- ✅ `MODULE_COMPLETE.md` - This summary

## Directory Structure

```
lesson-modules/2.1-write-prd/
├── SCRIPT.md                      # Main teaching script
├── FILES_NEEDED.md                # File checklist (reference)
├── MODULE_COMPLETE.md             # This summary
├── prd-templates/
│   ├── Carls-PRD-Template.md
│   └── Lennys-PRD-Template.md
├── reviewers/
│   ├── engineer.md
│   ├── executive.md
│   └── user-researcher.md
├── user-research/
│   └── pain-points.md
├── socratic-questioning.md
└── taskflow-company-context.md
```

## Files That Will Be Created During Module

These are created BY Claude during the lesson (no pre-creation needed):

- `ai-chat-todo-prd-v1.md` (Phase 4)
- `ai-chat-todo-prd-v2.md` (Phase 4)
- `ai-chat-todo-prd-v3.md` (Phase 4)
- `ai-chat-todo-prd-review.md` (Phase 5)
- Student's chosen PRD file edited with feedback (Phase 6)

## How to Use

**To start the module:**
```
/start-2-1
```

**What happens:**
1. Antigravity reads `SCRIPT.md` and `.agent/rules/SCRIPT_INSTRUCTIONS.md`
2. Claude delivers the lesson following ACTION/STOP/USER flow
3. Student makes all strategic decisions while Claude helps think through options
4. Student creates a production-ready PRD incorporating multi-perspective feedback

## Key Teaching Features

✅ **Mermaid workflow diagram** showing complete 6-phase process
✅ **Student-driven learning** - student makes all decisions
✅ **Multiple-choice Socratic questions** for faster interaction
✅ **Non-deterministic AI demo** - generates 3 versions from same inputs
✅ **Multi-perspective review** - engineering, executive, UX feedback
✅ **Interactive feedback loop** - student chooses how to address each item
✅ **Real file editing** - Claude implements changes in the PRD
✅ **Customization focus** - emphasizes this workflow is theirs to adapt

## Source Files

Files were ported from: https://github.com/carlvellotti/claude-code-pm-course

- Templates and context files: Direct ports from `course-materials/`
- Reviewer personas: Adapted from `.claude/agents/` (converted from MCP agents to review frameworks)

## Next Steps

Module 2.1 is complete and ready for testing!

To test:
1. Open the course project in Antigravity
2. Type `/start-2-1` in the conversation view
3. Follow the teaching flow
4. Verify all files get created and edited correctly

**Next module to build:** Module 2.2: Analyze Data
