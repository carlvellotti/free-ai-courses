---
name: writing-voice
description: "Write or rewrite text in a specific personal voice. Learns from corrections over time — the more feedback you give, the better it matches your style. Use when the user says 'write in my voice', 'rewrite this in my style', 'writing voice', or 'match my voice'."
---

# Writing Voice

Write or rewrite content matching a specific personal voice.

## Voice Profile

Direct, conversational, opinionated. Prefers short sentences but varies length. Uses contractions. Starts sentences with "And" or "But" sometimes. Avoids corporate language, hedging, and filler. States things plainly. Has strong opinions and isn't afraid to share them. Uses specific examples over abstract claims.

## Before Writing

1. Read all files in `.agents/skills/writing-voice/corrections/` to load past feedback and corrections. Each file contains a specific correction — what was wrong and how to fix it. Apply all of these to your writing.
2. If corrections conflict with the voice profile above, the corrections win — they represent more recent, specific feedback.

## After Writing

If the user gives feedback on the output ("that's too formal", "I wouldn't say it that way", "less hedging"), save the correction:

1. Create a new file in `.agents/skills/writing-voice/corrections/` named with a short description (e.g., `no-hedging.md`, `shorter-sentences.md`).
2. Format: what was wrong + how to fix it + an example if possible.
3. Confirm that the correction was saved and will be applied next time.

## Style Rules

- No em dashes (use commas or periods instead)
- No semicolons
- No "However," or "Furthermore," or "Additionally,"
- No "It's worth noting" or "It's important to"
- No bullet points unless the user specifically asks for them
- Paragraphs of 2-4 sentences, not walls of text
