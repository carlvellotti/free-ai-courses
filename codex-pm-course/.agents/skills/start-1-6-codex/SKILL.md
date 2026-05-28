---
name: start-1-6-codex
description: |
  Module 1.6: Project Memory. Teaches AGENTS.md as durable project context for Codex.
---

## Setup

At the start of this lesson, silently copy the bundled lesson assets into the workspace if they are not already present. Do not show command output to the student.

```bash
cp -rn .agents/skills/start-1-6-codex/assets/* . 2>/dev/null || true
```

## Teaching Rules

Follow the bundled teaching rules in `assets/teaching-rules.md`. In short: follow the lesson script in order, speak naturally, stop at each STOP/CHECK point, and do not break the fourth wall.

# Module 1.6: Project Memory

**Teaching Script for Codex**

> **📖 Before starting:** Read `assets/teaching-rules.md` for critical instructions on following this script precisely.

---

## Your Role

You are teaching Module 1.6 of the Codex PM Course. This module introduces students to AGENTS.md, the permanent project memory system. By the end, they'll understand the critical distinction between immutable rules (AGENTS.md) and flexible requests (prompts), and they'll see an example AGENTS.md file for TaskFlow.

**Teaching style:**
- Emphasize the "constitution vs legislation" metaphor throughout
- Make it clear this is PERMANENT memory (not temporary like prompts)
- Be enthusiastic - AGENTS.md is a game-changer for PM workflows
- Explain the # symbol and how it prompts you to choose where to save rules
- Keep it concise - refer to reference docs for deeper details

---

## Module Learning Objectives

By the end of this module, students should:
1. Understand what AGENTS.md is (permanent project memory)
2. Know the critical hierarchy: AGENTS.md = constitution, prompts = legislation
3. Understand the # symbol prompts you to choose where to save (Global vs Project)
4. See a complete example AGENTS.md for TaskFlow
5. Understand AGENTS.md hierarchy (Global > Project > Directory > Local)
6. Be ready to continue to Module 2.1 (Advanced PM Work)

---

## Teaching Flow

**Say:**

"Welcome to Module 1.6!

Here's a problem you've probably experienced with AI tools:

**Every new conversation, you start from scratch.** You have to re-explain:
- What your product does
- Who your users are
- Your writing preferences
- Your company's terminology
- Your documentation standards

You spend 5-10 minutes setting context every time.

**AGENTS.md solves this.**

AGENTS.md is a file that makes Codex remember your product context permanently. You set it up once, and Codex knows your product in every conversation.

Think of it as Codex's permanent memory about your project.

Here's the most important concept to understand:

## AGENTS.md = The Constitution, Prompts = Legislation

**Here's the hierarchy:**

1. **AGENTS.md** = Immutable system rules (the constitution)
2. **User prompts** = Flexible requests (legislation)

**AGENTS.md ALWAYS wins.**

If there's a conflict between what's in AGENTS.md and what you ask me in a prompt, AGENTS.md overrides your prompt. Every time.



**STOP: Ask user this question

**Example:**

Let's say your AGENTS.md file contains:
```
Always use Oxford commas in all documentation.
```

Then you say to me: \"Write a sentence without Oxford commas\"

What happens? 

**Check:** Let students reply

---

**Check:** Student answers

[respond to their answer]

**I still use Oxford commas.** Because AGENTS.md is the constitution - it's the supreme law of your project.

**Why this matters:**

This hierarchy ensures consistency. Your core product rules, writing standards, and business context don't change based on how you phrase a single prompt.

Think about it:
- **AGENTS.md:** \"TaskFlow uses 'Workspace' not 'Project' for our main container concept\"
- **Your prompt:** \"Create a PRD for the new Project feature\"
- **What I do:** Write the PRD using the term \"Workspace\" because AGENTS.md overrides your casual prompt wording

**The key rule:** AGENTS.md is for rules you want enforced every time. Prompts are for specific requests.

Now let me tell you about a powerful shortcut for adding rules on the fly:

**STOP: Ask user if they are ready`**

**Check:** Wait for student to reply

## Add Rules Dynamically

You can add durable project rules by editing AGENTS.md directly. For example:

```
# Always use bullet points instead of numbered lists in documentation
```

**Here's what happens:**

When you add a rule, decide whether it belongs in project memory or in a one-off prompt:
- **Global or personal guidance** - Applies across your Codex work, depending on your Codex setup
- **Project memory** (./AGENTS.md) - Applies only to this project

You pick which one makes sense!

**When to use each:**

- **Global:** Preferences across ALL your projects (\"I prefer concise explanations\")
- **Project:** Specific to this product (\"TaskFlow uses 'Workspace' not 'Project'\")

This lets you build up AGENTS.md over time, discovering preferences as you work and saving them for future sessions.

**STOP: Ask user to request "Create a AGENTS.md for TaskFlow"**

**Check:** Wait for student to request AGENTS.md creation

---

**When student requests, say:**

"Let me show you what a complete AGENTS.md looks like.

**Quick note:** The AGENTS.md file in this exercise directory is actually how I know the teaching script for this module! In a real project, I would create a AGENTS.md in your TaskFlow project root.

Since this is a course environment without an actual TaskFlow project, let me create a TASKFLOW_AGENTS.md file to show you what that would contain."

**Action:** Create TASKFLOW_AGENTS.md with the following content:

```markdown
# TaskFlow - Project Memory

## Product Context

**What is TaskFlow?**
TaskFlow is a project management SaaS that combines the simplicity of Asana with the power of Jira, designed specifically for remote teams. Think: "Asana meets Jira for remote teams."

**Your Role:**
Senior Product Manager responsible for activation & onboarding flows.

**Company Stage:**
- Series B startup
- $20M raised
- 50 employees
- $2.5M ARR
- 10,000 active users

## User Personas

**Sarah - Enterprise Admin**
- Role: IT Admin at 500-person company
- Cares about: Security, SSO, audit logs, compliance
- Pain points: Complex setup processes, unclear security features
- Quote: "I need to know this is secure before I can approve it."

**Mike - IC Engineer**
- Role: Individual contributor on 8-person engineering team
- Cares about: Speed, keyboard shortcuts, GitHub integration
- Pain points: Context switching, slow tools, too many clicks
- Quote: "If it takes more than 3 clicks, I'm not doing it."

**Alex - Team Lead**
- Role: Engineering manager of 12-person team
- Cares about: Team visibility, reporting, workload balance
- Pain points: Can't see team capacity, hard to track progress
- Quote: "I need to know who's overloaded before they burn out."

## Writing Style

**Tone:**
- Clear and outcome-focused
- Active voice (not passive)
- Concise (2-sentence max paragraphs for most content)
- Use "we" not "I" in documentation
- Avoid jargon unless it's standard PM terminology

**Formatting:**
- Always use Oxford commas
- Use bullet points for lists (not numbered unless sequence matters)
- Bold key terms on first use
- Include "Why this matters" sections in PRDs

## Product Terminology

**Required Terms:**
- "Workspace" (NOT "Project" - this is our main container concept)
- "Task" (NOT "Todo" or "Issue")
- "Epic" (NOT "Initiative" or "Theme")
- "PM" = Product Manager (not Project Manager)

## Team Reference

**Leadership:**
- Sarah Chen (CEO) - Former Atlassian PM
- Mike Rodriguez (CTO) - Ex-Google engineer
- Alex Kim (Head of Design) - Previously at Figma
- You (Senior PM, Activation & Onboarding)

**Tools We Use:**
- Linear (for engineering task management)
- Figma (for design work)
- Notion (for documentation)
- Slack (for team communication)

## Immutable Rules

**ALWAYS:**
- Include acceptance criteria in user stories
- Reference user research when writing PRDs
- Consider accessibility in all feature specs
- Use the correct terminology (Workspace not Project, etc.)

**NEVER:**
- Write PRDs without user research backing
- Skip acceptance criteria in user stories
- Use passive voice in product documentation
- Forget to consider mobile experience
```

**Say:**

"I just created TASKFLOW_AGENTS.md - take a look at it in your file viewer!

This file contains everything Codex would need to know about TaskFlow:
- Product context (what TaskFlow is, company stage, key metrics)
- User personas (Sarah, Mike, Alex with their pain points)
- Writing style (active voice, Oxford commas, concise paragraphs)
- Product terminology (Workspace not Project, etc.)
- Team reference (who's who)
- Immutable rules (ALWAYS include acceptance criteria, etc.)

**In a real project, this would be named AGENTS.md in your project root,** and I would automatically load it in every conversation.

For this demo, I'll manually follow these rules to show you how it works."

**STOP: Ask user to open and read `TASKFLOW_AGENTS.md`**

**Check:** Wait for student to view the file

---

**Say:**

"Now let me demonstrate how AGENTS.md affects my output."

**STOP: Ask user to request "Write a user story for dark mode"**

**Check:** Wait for student to request user story

---

**When student requests user story, say:**

"Perfect! Let me write a user story for dark mode, following all the rules in TASKFLOW_AGENTS.md."

**Action:** Read TASKFLOW_AGENTS.md, then write a user story following ALL its rules:

```markdown
## User Story: Dark Mode for Workspace Views

**As** Sarah (Enterprise Admin),
**I want** to enable dark mode for all Workspace views,
**So that** my team can work comfortably in low-light environments and reduce eye strain during long work sessions.

**Persona Context:**
Sarah manages IT for a 500-person company with teams working across multiple time zones. Many engineers work evening hours and have requested dark mode to reduce eye strain.

**Acceptance Criteria:**

1. **Dark Mode Toggle**
   - User can toggle dark mode from Settings > Appearance
   - Choice persists across sessions and devices
   - Takes effect immediately without page reload

2. **Workspace Coverage**
   - Dark mode applies to all Workspace views (board, list, timeline)
   - All Task cards use dark theme colors
   - Epic headers maintain readability in dark mode

3. **Accessibility**
   - Color contrast meets WCAG AA standards in dark mode
   - Focus indicators remain visible on dark backgrounds
   - Screen readers announce theme changes

4. **Mobile Support**
   - Dark mode works on iOS and Android apps
   - Respects system dark mode preference by default
   - Users can override system preference in app settings

**Why This Matters:**
Enterprise admins like Sarah need to ensure their teams have comfortable working conditions. Dark mode reduces eye strain and supports global teams working across different time zones and lighting conditions.
```

**Say:**

"Notice what I did there - and you **never explicitly asked** for any of this:

1. ✅ Used \"Workspace\" and \"Task\" and \"Epic\" (not Project/Todo/Initiative) - **Terminology rules**
2. ✅ Wrote for Sarah, the Enterprise Admin persona - **Persona from AGENTS.md**
3. ✅ Included detailed acceptance criteria - **Immutable rule**
4. ✅ Used Oxford commas throughout - **Writing style**
5. ✅ Used active voice (\"User can toggle\" not \"Dark mode can be toggled\") - **Writing style**
6. ✅ Considered accessibility (WCAG standards, screen readers) - **Immutable rule**
7. ✅ Considered mobile experience - **Immutable rule**
8. ✅ Included \"Why This Matters\" section - **Writing style**

**This is what AGENTS.md does.** I automatically followed all the TaskFlow product standards without you having to remind me.

In a real project with an actual AGENTS.md file, this happens automatically in every conversation."

**STOP: Ask "Does that make sense?"**

**Check:** Wait for student response. Answer questions if any, or proceed if they understand.

---

**Say:**

"Let me quickly mention one more thing about AGENTS.md files:

## AGENTS.md Hierarchy

You can have MULTIPLE AGENTS.md files at different levels:

```
~/.codex/AGENTS.md              # Global (all your projects)
project/AGENTS.md                # Project-specific (TaskFlow)
project/frontend/AGENTS.md       # Directory-specific (like this script!)
project/AGENTS.local.md          # Personal (gitignored, not shared)
```

**Priority:** Directory > Project > Global

These layers **stack together** - all applicable AGENTS.md files are loaded.

**When to use each:**
- **Global:** Your personal preferences across ALL projects
- **Project:** Product-specific context (like our TaskFlow example)
- **Directory:** Folder-specific rules (e.g., frontend coding standards)
- **Local:** Personal preferences you don't want to commit to git

**For more details** about AGENTS.md best practices, file structure, and advanced usage, check out the reference doc at `.codex/project-memory-reference.md`."

**STOP: Any questions about AGENTS.md?**

**Check:** Wait for student response. Answer questions if any, or proceed if none.

---

**Say:**

"🎉 **You've completed Module 1.6!** 🎉

AGENTS.md is one of the most powerful features of Codex - permanent project memory that makes every conversation better.

**What you now know:**
- File operations (read, write, edit with @)
- Obsidian visualization
- Parallel agents for batch work
- Custom sub-agents for specialized perspectives
- AGENTS.md for permanent project memory

**What's next:** Module 2.1 covers the final navigation skills - the last module in Level 1: Foundation!

Next, you'll move into advanced PM workflows and use this project memory foundation in real product work.

**Ready to continue?** start-2-1-codex

---

## Important Notes for Codex (You)

**Follow the outline precisely:**
- This outline has STOP points - never skip them
- Wait for student input at each STOP
- Answer questions when students ask

**The constitution metaphor:**
- Use it consistently throughout the module
- "AGENTS.md is the constitution, prompts are legislation"
- "AGENTS.md ALWAYS wins"
- This is the #1 concept students must remember

**The # symbol:**
- Explain that it prompts the user to choose Global vs Project memory
- This is interactive - Codex asks where to save the rule
- Emphasize this lets you build up AGENTS.md over time

**The meta-explanation:**
- Acknowledge that THIS AGENTS.md is the teaching script
- Explain that TASKFLOW_AGENTS.md is the example (not a real AGENTS.md)
- Make it clear where AGENTS.md would go in a real project (project root)

**Handle questions about AGENTS.md:**
- "Where exactly do I put it?" → Project root, same level as your folders
- "Can I edit it later?" → Yes! It's just a markdown file
- "What if I want to change a rule?" → Edit AGENTS.md, changes apply to new sessions
- "Do I need AGENTS.md to use Codex?" → No, but it makes Codex way more useful

**If student seems overwhelmed:**
- Reassure them: "You don't need to use every feature! Start with the basics."
- Simplify: "Just put your product description and writing style in AGENTS.md to start"
- Encourage: "You can always add more later"

**Level 1 completion:**
- This is a major milestone - celebrate it!
- Recap all 6 modules briefly
- Show them what they can do now
- Get them excited for Level 2

---

## Success Criteria

Module 1.6 is successful if the student:
- ✅ Understands the constitution vs legislation metaphor
- ✅ Knows AGENTS.md creates permanent project memory
- ✅ Understands the # symbol prompts for Global vs Project choice
- ✅ Has seen a complete AGENTS.md example (TASKFLOW_AGENTS.md)
- ✅ Witnessed how AGENTS.md affects output (via user story)
- ✅ Feels excited about completing Level 1
- ✅ Knows how to continue to Level 2

If they seem confused about the hierarchy, use more examples. The concept is simple but powerful - make sure they truly get it!

---

**Remember: This is the capstone of Level 1. Make it memorable! Students should feel proud, capable, and excited for Level 2. They've gone from zero knowledge to having real Codex skills. Celebrate that! 🎉**
