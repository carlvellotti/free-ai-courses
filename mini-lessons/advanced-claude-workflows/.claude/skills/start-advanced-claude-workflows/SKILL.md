---
name: start-advanced-claude-workflows
description: Learn diagram context, Desktop shortcuts, stop hooks, automation, and drift recovery. Use when the student types /start-advanced-claude-workflows.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - WebSearch
  - WebFetch
---

# Advanced Claude Workflows

## Setup

ACTION: Run this bash block before teaching. It stages every packaged asset without replacing existing files, then echoes clickable links. Summarize the staged paths in prose because bash output may be collapsed.

```bash
mkdir -p "advanced-claude-workflows"
cp -rn ".claude/skills/start-advanced-claude-workflows/assets/." "advanced-claude-workflows/"
printf '%s\n' \
  '[pizza diagram source](advanced-claude-workflows/.ai/diagrams/example-pizza-flow.md)' \
  '[pizza diagram viewer](advanced-claude-workflows/pizza-flow.html)' \
  '[my Desktop shortcuts](advanced-claude-workflows/my-desktop-shortcuts.md)' \
  '[inert stop hook example](advanced-claude-workflows/stop-hook-example.settings.json)' \
  '[hook demo file](advanced-claude-workflows/advanced-hook-demo.js)'
```

ACTION: Before greeting the learner: silently run `fspm progress`. If it shows a learner name, greet them by it and continue. If it shows no name and no declined marker, run `fspm onboard` and follow the tour guidance it returns. If the fspm command isn't available, offer once to install the CLI (fullstackpm.com/cli); if they decline, continue without personalization and don't ask again.

## Welcome

Welcome to Advanced Claude Workflows.

This lesson is based on the video "Advanced Claude Code techniques" featuring John Lindquist (egghead.io) on the How I AI podcast with Claire Vo: https://www.youtube.com/watch?v=LvLdNkgO-N0

These are techniques senior engineers use for production work, not just demos.

What we'll cover:

1. Mermaid diagrams that give Claude a compact map of an app
2. Desktop controls and reusable skills instead of shell aliases
3. Stop hooks as automatic quality gates
4. The "infinite junior engineer" mindset
5. A file-backed pattern for recovering from drift

STOP: Ready to start?

USER: Yes / Let's go

## The Problem

Here's what normally happens when you ask Claude to explain an unfamiliar project:

1. You ask: "Please explain the authentication flow."
2. Claude searches through files.
3. Claude reads connected files to understand the system.
4. You wait for the answer.

What if Claude had a compact architecture map to read first?

STOP: Have you experienced Claude spending lots of time exploring before doing anything useful?

USER: Yes / Sometimes / Not sure

## Mermaid Diagrams

Mermaid diagrams are a text format that compresses an app's logic into a form Claude can read quickly.

ACTION: Read [pizza diagram source](advanced-claude-workflows/.ai/diagrams/example-pizza-flow.md), summarize its participants and error handling in prose, then run this agent-managed action to open the staged viewer in the student's real browser:

```bash
open "advanced-claude-workflows/pizza-flow.html"
```

The HTML uses Mermaid from a CDN when the browser renders it. No local server is required. The editable source remains here: [pizza diagram source](advanced-claude-workflows/.ai/diagrams/example-pizza-flow.md).

See that flow? Customer -> App -> Kitchen -> Driver -> Customer.

For a real app, you might have diagrams for auth flows, database operations, and API routes. They explain how code connects.

STOP: Makes sense? The diagram serves both you and Claude.

USER: Yes / Got it / Interesting

## Loading Bounded Context

In Claude Desktop, the exact `/start-advanced-claude-workflows` skill owns this bounded diagram context. It reads the packaged diagram before explaining the pizza flow and tells you in prose what it used.

ACTION: Explain the pizza ordering flow now using the diagram. Mention the specific file and include its clickable link. Do not claim zero file reads or invisible preloading.

For larger projects, use multiple focused diagram files and load only what the task needs.

STOP: Ready to make this workflow easy to repeat?

USER: Yes / Ready

## Desktop Shortcuts, Not Shell Aliases

The original workflow used shell aliases. In Desktop, the useful arc is inverted:

- Use the mode picker for **Manual / Accept edits / Plan / Auto / Bypass**. Recommend **Auto** for this exercise. **Cmd+Shift+M** cycles modes.
- Use the **Models** menu for model and effort choices. For this exercise, choose **Sonnet 5 on Low**.
- Use an exact skill such as `/start-advanced-claude-workflows` when you want a reusable context workflow.

No shell configuration is edited in this lesson.

STOP: Which Desktop control would help your workflow most: the mode picker, Models menu, or a reusable skill?

USER: [Student responds]

## Create Your Desktop Workflow

ACTION: Ask what recurring context or process the student wants. Update [my Desktop shortcuts](advanced-claude-workflows/my-desktop-shortcuts.md) only after showing the proposed text and getting approval. Record:

- Their preferred mode and why
- Their Models-menu choice
- The exact skill they will invoke
- The bounded files that skill should read

If they want a new skill, first check `.claude/skills/` for a collision, propose a specific name, and create it only after explicit approval. Never edit shell startup files.

STOP: Does the workflow in [my Desktop shortcuts](advanced-claude-workflows/my-desktop-shortcuts.md) match what you want?

USER: Yes / I want a change

## Stop Hooks

Now for the most powerful technique: stop hooks.

Here's a frustrating pattern:

1. You ask Claude to write code.
2. Claude writes it and says "Done!"
3. A check finds errors.
4. You return the errors.
5. Claude fixes them and tries again.

A stop hook can make the check automatic before Claude finishes.

STOP: Have you experienced this loop?

USER: Yes / All the time / Sometimes

## Inert Hook Demonstration

The example is intentionally not active. It lives at [inert stop hook example](advanced-claude-workflows/stop-hook-example.settings.json), and its target is [hook demo file](advanced-claude-workflows/advanced-hook-demo.js).

ACTION: Read both files and walk through exactly what the example does:

1. On a Stop event, run a command from the project root.
2. Ignore the check if the demo file does not exist.
3. Pass if the file contains `// COMPLETE`.
4. Otherwise return a blocking reason asking for that marker.

Then run the same check manually against the staged demo, summarize the initial failure, add `// COMPLETE` to the staged demo, rerun the check, and summarize the pass. This demonstrates the feedback loop without activating a hook.

Hook support and schemas evolve. Check the current documentation before applying this example.

STOP: Clear on the concept?

USER: Yes / Makes sense

## Optional Hook Application

OFFER: Ask whether the student wants to apply this example to the project's `.claude/settings.local.json`. Do not apply it unless they explicitly consent.

[If they decline]: Keep the example inert and continue.

[If they consent]:

ACTION: First read the existing settings if present. Structurally merge the example hook into the JSON while preserving every existing key and every existing hook entry. Back up the existing file beside it before writing. Validate the merged JSON, show a concise before/after summary, and ask for one final confirmation before the write. Never replace the settings object wholesale. If safe structural merge is not possible, stop and explain why.

## How Stop Hooks Work

A hook is code that runs automatically at a lifecycle moment. A stop hook runs when Claude finishes a response, before it waits for the next input.

```text
Claude finishes -> Stop hook runs -> Checks code
  |-- Errors found -> reason returned, Claude fixes, tries again
  |-- No errors -> Claude stops
```

The example uses this pattern:

1. Run a check.
2. If it fails, output JSON with `"decision": "block"` and a reason.
3. If it passes, output nothing.

Other inert examples could run type checking, linting, tests, or a build. The agent runs those checks and summarizes the salient failure and fix in prose.

STOP: What quality checks would you add to your projects?

USER: [Student responds]

## The Infinite Junior Engineer

Imagine you had infinite junior engineers, always available and happy to do tedious work. What would you have them do?

Most people think: "Write code faster."

But the real answer is all the work around the code:

- Trace who wrote code and why
- Find the history of every file involved
- Write a risk assessment before touching anything
- Generate a technical specification for review
- Document the change afterward
- Summarize a pull request for reviewers
- Draft commit messages

The AI isn't replacing your judgment. It's doing prep work so you can focus on decisions that matter.

STOP: What "drudgery" tasks would you hand off to infinite junior engineers?

USER: [Student responds]

## Handling Drift

Sometimes a conversation gets confused and correction makes it worse. Use a handoff file:

1. Ask Claude to write a concise handoff containing the goal, decisions, evidence, failed attempts, current files, and next action.
2. Review the handoff at [a clickable project path](advanced-claude-workflows/handoff.md).
3. Use `/clear` or open a new Desktop session with **Cmd+N**.
4. Invoke the relevant skill and link the handoff.
5. If useful, paste the handoff into another AI and ask where the prior approach drifted.

Fresh eyes can identify where a thread derailed. This pattern makes the transfer explicit and inspectable.

STOP: Have you ever used one AI to debug another?

USER: Yes / No / Interesting idea

## Wrap Up

You learned:

1. Mermaid diagrams provide compact architecture context.
2. Desktop modes, the Models menu, and skills replace shell-alias mechanics.
3. Stop hooks can create automatic quality gates, while this demo stays inert until consent.
4. The infinite junior engineer framing turns prep work into automation candidates.
5. Handoff files make drift recovery portable and reviewable.

Your assets are in [advanced-claude-workflows](advanced-claude-workflows/).

## Teaching Notes

- Keep the conversation direct and pause at every STOP.
- Use AskUserQuestion with no more than four authored options; built-in Other is the escape hatch.
- After any file or bash action, echo salient results in prose and link the file.
- Do not imply that the inert hook is active.

## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete advanced-claude-workflows-1
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: this wraps the module. Ask me what to take on next and I'll lay out what's open to you.
