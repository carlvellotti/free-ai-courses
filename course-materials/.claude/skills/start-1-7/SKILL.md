---
name: start-1-7
description: |
  1.7 Claude Desktop Navigation. Use when the student types /start-1-7.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion, WebSearch, WebFetch]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

No assets to stage for this lesson.

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# Module 1.7: Claude Desktop Navigation

## Your Role

Teach the final verified Desktop controls in Level 1 with a practical competitive-response scenario.

## Module Learning Objectives

By the end of this module, students should:
1. Know the Desktop mode picker and when to use Plan versus Auto
2. Know how to choose model effort
3. Know how to inspect or clear conversation resources
4. Understand conversation rewind and its file-system boundary
5. Be ready for Level 2 PM workflows

## Teaching Flow

**Say:**

"Welcome to Module 1.7! 🎉

This is the final module of Level 1. We are covering the controls that help you choose how much autonomy and deliberation a task needs."

**Check:** Ask whether the student is ready, then wait.

### Desktop modes

**Say:**

"Desktop's mode picker offers Manual, Accept edits, Plan, Auto, and Bypass. Press `Cmd+Shift+M` to open or change the mode.

Use **Auto** for this course. Choose **Plan** when you want to review a proposed approach before execution, especially for ambiguous or multi-step work. Manual and Accept edits provide tighter control when you want it."

**Check:** Ask the student to open the picker with `Cmd+Shift+M`, choose Plan, and confirm.

### Plan a competitive response

**Say:**

"Imagine a competitor has announced an AI chat feature and leadership wants a response. Ask me: **Research how competitors are implementing AI chat features and propose a TaskFlow response strategy. Report what you find and cite the sources.**"

**Check:** Wait for the request.

**Action:** In Plan mode, propose a short research and synthesis plan without executing it. Present the plan in prose because internal plan displays may be collapsed.

**Check:** Ask the student to approve or revise the plan. Wait for their decision.

**Action:** After plan approval, ask the student to open the mode picker with `Cmd+Shift+M` and choose Auto.

**Check:** STOP and wait for the student to confirm they switched to Auto.

**Action:** Only after that confirmation, execute the approved research with WebSearch and WebFetch, report what you actually find with source links, and summarize progress and results in prose.

### Models, effort, and resources

**Say:**

"Use the Models menu and choose **Sonnet 5 on Low** for this course. Change effort with `Cmd+Shift+E`. Higher effort is useful when a problem needs more deliberation; Low works great for these lessons.

Use `/context` or the lower-right resource dashboard to inspect resources. Use `/clear` when you intentionally want to clear the current conversation."

**Check:** Ask whether the controls make sense, then wait.

### Conversation rewind

**Say:**

"One safety distinction matters: pressing Esc twice rewinds the conversation, so the model forgets the rewound turns. It does **not** revert files already changed on disk. Treat this as conversation rewind, not file undo."

**Check:** Ask the student to explain that difference in their own words, then clarify if needed.

### Wrap up

**Say:**

"Level 1 complete! You can now work with files, agents, custom subagents, project context, Desktop modes, effort, and conversation resources. Next, we apply it all to real PM workflows."

**Check:** Answer questions, then continue to the sendoff.

## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-pms-1-7
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-2-1`
