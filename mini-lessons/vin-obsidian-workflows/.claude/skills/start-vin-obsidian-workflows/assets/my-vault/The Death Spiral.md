# The Death Spiral

"The AI Coding Death Spiral: enter for speed, stay for the debugging hell." — Reddit

This is the anti-pattern everyone hits at some point.

## The Pattern

1. Try to save time with AI
2. Get low-context, error-prone code
3. Spend more time debugging than you would have writing it
4. Keep going because "the next prompt might fix it"

That last point is the killer. "The frustration of AI coding can resemble a gambling addiction, where the user is always hoping the 'next prompt' will be the one that magically solves everything."

## How to Escape

From the 6-month practitioner report on Reddit:
- **Start with a small, perfectly working base.** Don't try to generate an entire app in one shot.
- **One feature at a time.** Never in a single large prompt.
- **Write a detailed spec first** — see [[Plan Mode]]
- **The 3-prompt rule:** if you've been debugging the same issue for more than 3 prompts, STOP. Think about whether YOU understand the problem.

The mantra: "If confused, the AI is too. Clarify for yourself first."

## Why It Happens

It's almost always a [[Context Window Management]] problem combined with skipping [[Plan Mode]].

Long session → stale context → bad output → more debugging → longer session → even staler context. It's a feedback loop.

The escape hatch: write a handoff doc, use `/clear` or **Cmd+N**, link the handoff, and approach the problem with clean context.

## The Deeper Issue

"AI is a force multiplier for your existing trajectory. A clean codebase gets cleaner. A messy codebase becomes messier even faster, creating an illusion of speed."

The death spiral isn't just about context. It's about [[The Verification Loop]] — if you're not checking output quality at each step, errors compound.

## Related

- [[Plan Mode]] — the #1 prevention strategy
- [[Context Window Management]] — the mechanical cause
- [[The Verification Loop]] — the missing check
- [[Voice-First Workflows]] — sometimes stepping away from the keyboard and talking through the problem breaks the spiral
