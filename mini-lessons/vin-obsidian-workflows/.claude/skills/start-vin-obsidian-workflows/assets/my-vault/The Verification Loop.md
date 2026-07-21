# The Verification Loop

Boris Cherny (the creator of Claude Code) says verification loops deliver 2-3x quality improvement. That's not a small number.

The hard truth from Reddit: "Claude can write code all day but can't click a button to see if it works." AI-generated code is NOT optimized for security, performance, or scalability by default. You have to explicitly prompt for these and always verify.

## The PM Angle

You are the QA layer. Every output needs human eyes before it ships. This isn't new for PMs — we already review designs, specs, and code. The difference is the volume and speed of output.

## Debugging Patterns That Work

**Blind paste** — copy error messages directly into Claude without reading them yourself. Claude is remarkably good at diagnosis from raw errors. 0xDesigner: "I got another error and just pasted the error without reading." Claude diagnosed a missing gas token from a raw wallet error.

**Screenshot debugging** — paste screenshots of UI bugs directly. Claude's vision is powerful for visual debugging. "A single screenshot can replace three paragraphs of explanation."

**The re-prompt** — if output seems wrong, press Esc twice to rewind the conversation and rephrase (files on disk stay as they are). Often a slight rephrasing yields vastly superior results.

## The TDD Loop for AI

Powerful pattern from a practitioner with 6 months of daily AI pairing:
1. AI writes a failing test
2. Human reviews the test
3. AI writes the implementation
4. Test passes → move on

This enforces requirements and ensures correctness. Even without formal TDD: always ask Claude to verify its own work.

## Connection to Other Notes

- [[The Junior Employee Mental Model]] — you wouldn't trust a junior's work without review
- [[Plan Mode]] — verification starts before execution
- [[The Death Spiral]] — skipping verification is how you get there
- Boris Cherny's "Grill me on these changes" prompt — make Claude critique its own work. See [[Custom Commands]] for how to automate this.
