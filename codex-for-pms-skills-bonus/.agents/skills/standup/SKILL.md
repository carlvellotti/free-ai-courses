---
name: standup
description: "Generate a daily standup update based on your configured preferences. On first run, asks setup questions and saves your config. Use when the user says 'standup', 'daily update', 'write my standup', or 'standup update'."
---

# Daily Standup

Generate a daily standup update.

## First Run Setup

Check if `.agents/skills/standup/config.json` exists.

**If config.json does NOT exist**, run the setup flow before generating anything. Ask these questions one at a time, each as a lettered menu the user can answer with a single letter:

1. "What format do you want your standups in?"
   - **A)** Slack message
   - **B)** Email
   - **C)** Markdown file
   - **D)** Something else — tell me
2. "What sections should the standup include?"
   - **A)** Yesterday / Today / Blockers
   - **B)** Done / Doing / Blocked
   - **C)** Wins / Plans / Needs
   - **D)** Custom — tell me
3. "How long should each section be?"
   - **A)** 1-2 bullets each
   - **B)** 3-5 bullets each
   - **C)** Short paragraphs
4. "Should I look at git history or recent files to find what you worked on?"
   - **A)** Yes — check git log
   - **B)** Yes — check recently modified files
   - **C)** No — I'll tell you what I did

Save all answers to `.agents/skills/standup/config.json` as a JSON object. Confirm the config was saved and tell the user they can edit it anytime at that path.

**If config.json exists**, read it and skip straight to generating. No questions.

## Generating the Standup

1. Read `.agents/skills/standup/config.json` for preferences.
2. If config says to check git log: run `git log --oneline --since="yesterday"` to see recent commits.
3. If config says to check recent files: look at recently modified files in the working directory.
4. Draft the standup in the configured format and section structure.
5. If you don't have enough context for a section, ask the user rather than making things up.

## Output

Deliver the standup in the configured format. If it's a Slack message, format it for easy copy-paste. If it's markdown, write it to a file.
