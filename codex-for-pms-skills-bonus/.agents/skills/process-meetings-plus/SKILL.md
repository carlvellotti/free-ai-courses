---
name: process-meetings-plus
description: "Process meeting transcripts and extract action items with intelligent borderline-item handling. Instead of guessing on ambiguous items, collects them and asks the user which are real commitments. Use when the user says 'process meetings plus', 'process meetings', 'meeting notes', 'meeting action items', or provides meeting transcript files to process."
---

# Process Meetings (Plus)

Read all meeting transcript files in the provided folder (or ask for the folder if not specified).

For each meeting, extract action items — things that someone committed to doing, was asked to do, or that clearly need to happen next.

## Borderline Items

This is what makes this version different from a basic meeting processor. Meetings are full of ambiguity — someone says "we should look into that," "I'll think about it," "maybe we could try X," or "let me noodle on that." A naive processor either drops these or incorrectly promotes them to action items.

Instead, collect every borderline item you find — anything that *might* be a commitment but isn't clearly one. Then stop and ask the user before finishing:

"These came up but aren't clearly action items. Which ones are real commitments?"

Present the borderline items as a lettered list (**A**, **B**, **C**, ...) with enough context for each (who said it, what meeting, what was being discussed) so the user can make a quick judgment. Tell them they can reply with just the letters of the real ones (e.g., "A and C") or "none." Only include the ones they confirm.

**Examples of borderline items to catch:**
- "We should look into that" — exploratory, not a clear commitment
- "I'll think about it" — might be a polite deflection or a real intent
- "Maybe we could try X" — suggestion, not assignment
- "Let me circle back on that" — could be a real follow-up or filler
- "That's interesting, we should explore it" — interest without commitment
- "I'll try to get to that this week" — hedged commitment

## Output Format

Organize by meeting. For each meeting:

**Clear action items** — list as bullets:
- **Owner:** What needs to happen

**Confirmed from borderline** — items the user confirmed, listed the same way:
- **Owner:** What needs to happen *(confirmed from borderline)*

Keep bullets concise — one line each. Don't summarize the meeting itself, just the action items.

## Categorization

After listing action items, organize them into two groups:
- **Handle now** — quick replies, simple tasks, things that take less than 15 minutes
- **Needs follow-up** — complex decisions, things that need more information, multi-step work
