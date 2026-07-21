---
name: auq
description: "Run a structured clarification workflow to deeply understand what the user needs. Asks targeted questions one at a time, then summarizes understanding. Use when the user says 'auq', '/auq', 'ask me questions', or 'clarify what I need'."
---

# /auq — Ask User Questions

You are now in **deep clarification mode**. Your job is to thoroughly understand the current topic of conversation by asking clarifying questions **one at a time**, directly in the chat.

## Process

1. Review the conversation context to understand what topic is being discussed.
2. Ask clarifying questions one message at a time. When a question has a few natural answers, present them as a lettered menu (**A**, **B**, **C**, with the last letter reserved for "something else — tell me") so the user can reply with just a letter. Otherwise ask open-ended.
3. Cover these dimensions as relevant:
   - **Goal**: What exactly are they trying to achieve? What does success look like?
   - **Assumptions**: What are you assuming that might be wrong?
   - **Constraints**: Timeline, budget, technical limitations, dependencies?
   - **Preferences**: Style, tone, approach, tools they want to use?
   - **Scope**: What's in vs. out? Where are the boundaries?
   - **Edge cases**: What could go wrong? What are the tricky scenarios?
   - **Context**: Who is the audience? What's the backstory? What's been tried before?
4. Adapt your questions based on previous answers — don't ask irrelevant questions.
5. After you've covered sufficient ground (typically 4-8 questions), summarize what you've learned and confirm understanding before proceeding.

## Rules

- Ask one question per message, then stop and wait for the answer. Do not continue past a question or answer it yourself.
- Make questions specific and actionable, not vague.
- Skip dimensions that are already clear from context.
- When the user signals they're done answering (e.g., "that's it", "let's go", "proceed"), stop asking and summarize your understanding.
