---
name: write-proposal
description: "Write a project proposal from rough notes or a brief description. Follows a consistent template and draws on past proposal examples for tone and structure. Use when the user says 'write a proposal', 'draft a proposal', 'proposal for', or 'write proposal'."
---

# Write Proposal

Write a project proposal based on the user's input (rough notes, a topic description, or a brief).

## Process

1. Read the proposal template at `.agents/skills/write-proposal/template.md` for structure and required sections.
2. Check `.agents/skills/write-proposal/examples/` for past proposals. Read any that are relevant to the current topic — similar domain, similar scope, or similar audience. Use them for tone and depth calibration, not as copy sources.
3. If the user's input is vague, ask 1-2 clarifying questions before drafting. When there are natural choices, present them as a lettered menu (A, B, C) so the user can answer with one letter. Don't ask if there's enough to work with.
4. Draft the proposal following the template structure. Adapt section depth to the project scope — a small internal project doesn't need the same level of detail as a cross-team initiative.

## Style

- Professional but not stiff. Write like a senior PM, not a consultant.
- Lead each section with the key point, then support it.
- Keep the executive summary under 4 sentences.
- Be specific about timelines, resources, and success metrics. Vague proposals don't get approved.
