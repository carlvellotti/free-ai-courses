# Antigravity PM Course - Implementation Spec

## Overview
Converting Cursor PM Course to Antigravity PM Course with minimal changes.

## Key Mappings

| Cursor | Antigravity |
|--------|-------------|
| `.cursor/` | `.agent/` |
| `.cursor/commands/` | `.agent/workflows/` |
| `.cursor/rules/` | `.agent/rules/` |
| `*.mdc` | `*.md` |
| AI Pane | Conversation view / Agent Manager |
| Composer | Agent Manager |
| Ask Mode | Review-driven mode |
| Agent Mode | Agent-assisted / Agent-driven mode |
| Plan Mode | Planning Mode (with Fast Mode alternative) |
| Cmd+I / Cmd+L | Agent Manager interface |
| Cmd+K | Quick Edit (similar) |

## Antigravity-Specific Concepts to Introduce

### Autonomy Levels (replaces Three Modes)
1. **Agent-driven**: Full autopilot - agent plans, writes, tests independently
2. **Agent-assisted** (recommended): Collaborative - agent suggests, human controls
3. **Review-driven**: Agent only analyzes/reviews, doesn't generate (like Ask mode)

### Planning vs Fast Mode
- **Planning Mode**: Deep thinking, creates artifacts (task.md, implementation_plan.md)
- **Fast Mode**: Quick execution, skips planning

### Agent Manager Interface
- **Inbox**: Tracks all agent conversations
- **Workspaces**: Open different project folders
- **Conversation view**: Where you chat with the agent
- **Editor view**: Toggle to code editor mode
- **Browser integration**: Agents can test in Chrome

### Artifacts System
- `task.md` - Living checklist
- `implementation_plan.md` - Technical blueprint
- `walkthrough.md` - Proof of work with screenshots/videos

### Configuration Locations
- Global rules: `~/.gemini/GEMINI.md`
- Global workflows: `~/.gemini/antigravity/global_workflows/`
- Workspace rules: `.agent/rules/`
- Workspace workflows: `.agent/workflows/`

## Files to Create

### Folder Structure
```
antigravity-pm-course/
└── course-materials/
    ├── .agent/
    │   ├── workflows/
    │   │   ├── start-1-1.md
    │   │   ├── start-1-2.md
    │   │   ├── start-1-3.md
    │   │   ├── start-1-4.md
    │   │   ├── start-1-5.md
    │   │   ├── start-1-6.md
    │   │   ├── start-2-1.md
    │   │   ├── start-2-2.md
    │   │   └── start-2-3.md
    │   └── rules/
    │       ├── course-instructor.md
    │       ├── taskflow-context.md
    │       ├── taskflow-terminology.md
    │       └── SCRIPT_INSTRUCTIONS.md
    ├── company-context/
    │   ├── COMPANY.md
    │   ├── PRODUCT.md
    │   ├── PERSONAS.md
    │   └── COMPETITIVE.md
    └── lesson-modules/
        ├── 1.1-welcome/
        │   └── SCRIPT.md
        ├── 1.2-interface/
        │   ├── SCRIPT.md (REWRITE)
        │   └── interface-practice.md
        ├── 1.3-first-tasks/
        │   ├── SCRIPT.md
        │   ├── meeting-notes-raw.md
        │   ├── product-sync-notes.md
        │   └── user-interviews/
        ├── 1.4-templates-workflows/
        │   ├── SCRIPT.md
        │   └── [supporting files]
        ├── 1.5-three-modes/
        │   ├── SCRIPT.md (REWRITE → autonomy-modes)
        │   └── [supporting files]
        ├── 1.6-project-rules/
        │   └── SCRIPT.md
        ├── 2.1-write-prd/
        │   ├── SCRIPT.md
        │   └── [all supporting files]
        ├── 2.2-analyze-data/
        │   ├── SCRIPT.md
        │   └── [CSV files]
        └── 2.3-product-strategy/
            ├── SCRIPT.md
            └── [frameworks]
```

## Checklist

- [ ] Create folder structure
- [ ] Create workflow files (9 start-*.md)
- [ ] Create rules files (4 files)
- [ ] Copy company-context (4 files, unchanged)
- [ ] Copy/update 1.1-welcome
- [ ] REWRITE 1.2-interface for Agent Manager
- [ ] Copy/update 1.3-first-tasks + supporting files
- [ ] Copy/update 1.4-templates-workflows + supporting files
- [ ] REWRITE 1.5-three-modes for Autonomy Levels
- [ ] Copy/update 1.6-project-rules
- [ ] Copy/update 2.1-write-prd + supporting files
- [ ] Copy/update 2.2-analyze-data + CSV files
- [ ] Copy/update 2.3-product-strategy + frameworks
- [ ] Verify no stray "Cursor" or ".cursor" references

## Find/Replace Rules

1. "Cursor" → "Antigravity" (except in comparisons)
2. "Cursor for Product Managers" → "Antigravity for Product Managers"
3. ".cursor/" → ".agent/"
4. "AI Pane" → "conversation view"
5. "Composer" → "Agent Manager"
6. "Cmd+I" → (varies - Agent Manager doesn't have same shortcut)
7. "Cmd+L" → (varies)
8. ".mdc" → ".md" (in file references)

## Module 1.2 Rewrite Notes (Interface)

Cursor teaches:
- File explorer, Editor pane, AI Pane (3-pane layout)
- Markdown preview (Cmd+Shift+V)
- @ mentions, drag files, Add to Chat
- Cmd+K for inline edits
- Model selector

Antigravity equivalent:
- Agent Manager (Inbox, Workspaces, Conversation view)
- Editor view (toggle from Agent Manager)
- File explorer in editor
- @ mentions work similarly
- Autonomy level selector (Agent-driven/Agent-assisted/Review-driven)
- Model selector (Gemini 3 Pro, Claude options)

## Module 1.5 Rewrite Notes (Three Modes → Autonomy & Planning)

Cursor teaches:
- Ask Mode (read-only)
- Agent Mode (autonomous execution)
- Plan Mode (research → clarify → plan → execute)

Antigravity equivalent:
- Review-driven (like Ask mode - analyze only)
- Agent-assisted (recommended - collaborative)
- Agent-driven (full autopilot)
- Planning Mode vs Fast Mode (separate from autonomy)
- Artifacts system (task.md, implementation_plan.md, walkthrough.md)
