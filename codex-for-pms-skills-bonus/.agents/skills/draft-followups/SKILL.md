---
name: draft-followups
description: |
  Draft follow-up Slack messages and emails from meeting outcomes.
  Matches tone to recipient using people files when available. Drafts only — never auto-send.
---

## What This Skill Does

Takes the action items and follow-ups extracted from a meeting and drafts the actual communications — Slack messages or emails — for each one. Uses people files (when they exist) to match tone and format to each recipient's preferences.

## How To Use

**Standalone:** Run the skill and point it at meeting notes, transcripts, or a list of action items.
**Composed:** Other skills (like `draft-and-humanize`) can call this as a step in a pipeline. Read whatever meeting context or extracted action items the previous step produced.

## What It Reads

1. The meeting notes, transcripts, or extracted action items the user (or calling skill) points to.
2. People files, if the workspace has them: glob for `people/*.md` for communication preferences and tone calibration. If there are none, rely on the Tone Rules below.

If no action items or follow-ups can be found, ask the user: "No follow-ups identified. What communications should I draft?"

## Output Format

Drafts are displayed in the conversation for review. Nothing is written to files — these are copy-paste ready.

For each follow-up:

---
**TO:** [Recipient] | **VIA:** [Slack / Email]
**RE:** [Topic]

> [Draft message]

**Context:** Why this message, what meeting it stems from, what action it supports.
---

## Tone Rules

- **Executives / skip-levels:** Concise, lead with the ask or update, no fluff. Respect their time.
- **Peers / teammates:** Conversational, direct, match their usual communication style.
- **Cross-functional partners:** Professional but warm, context-heavy (they may not have been in the meeting).
- **Check people files when they exist** for specific preferences (e.g., "prefers async Slack," "wants written specs," "structured communicator with numbered points").

## Grouping

If multiple follow-ups go to the same person, consider combining into a single message rather than sending three separate Slack messages. Flag this to the PM: "Lisa has 3 follow-ups — want me to combine into one message or keep separate?"

After displaying all drafts, ask: "These are drafts for your review. Want me to adjust tone, add context, or cut any?"
