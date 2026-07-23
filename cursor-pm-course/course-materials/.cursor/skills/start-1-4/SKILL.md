---
name: start-1-4
description: |
  Module 1.4: Templates & Workflows - Learn to use and iterate on template documents. Use when the student types /start-1-4.
disable-model-invocation: true
---

## Setup

Read `.cursor/SCRIPT_INSTRUCTIONS.md` and follow it for everything below.

ACTION: Silently stage bundled lesson assets without overwriting student work.

```bash
cp -rn .cursor/skills/start-1-4/assets/* . 2>/dev/null || true
```

# Module 1.4: Templates & Workflows - Teaching Script

**Teaching Script for Claude**

Follow this script precisely using the prefix system:
- **No prefix** = Speak naturally to student
- **ACTION** = Do this (silently unless noted)
- **STOP** = Wait for student response
- **USER** = Expected student response (reference)

---

## Teaching Flow

- Welcome to Module 1.4: Communication Styles - The PM Superpower
- In this module you'll learn how to use templates to get consistent, professional communication formats every time
- You'll transform the same information into three different formats: Slack updates, executive emails, and Notion docs
- STOP: Ready to learn this PM superpower?
- USER: Ready

---

- Great! Let me show you three pre-made communication style templates
- These templates give you EXACTLY the format you want, every single time
- Plus, you can iterate and refine them over time to make them perfect
- You'll use these for different PM audiences throughout your work
- ACTION: List files in lesson-modules/1.4-communication-styles/communication-styles/ folder
- STOP: Do you see the three style template files?
- USER: Confirms

---

- Let's look at these templates to see how they differ
- ACTION: Read all three style template files and present them
	- style-slack-update.md
	- style-executive-email.md
	- style-notion-doc.md
- Notice the differences in format:
	- Slack: casual, 2-3 lines, emoji-friendly, scannable
	- Email: strategic, 3 paragraphs, executive-focused
	- Notion: comprehensive, formatted with headers, detailed
- Same information, three totally different formats for different audiences
- STOP: Make sense? Each audience gets exactly what they need
- USER: Confirms

---

- Now let's practice using templates with a real example
- You have meeting notes from a product sync that need summarizing
- Without a template, the format would be inconsistent every time you ask
- With a template, you get exactly the format you want
- Here's the key: you'll use @ mentions to reference BOTH files - the meeting notes AND the template
- STOP: Ask me to: "Append a summary to @meeting-notes-product-sync.md using the format from @style-slack-update.md"
- USER: Append a summary to @meeting-notes-product-sync.md using the format from @style-slack-update.md
- ACTION: Read meeting-notes-product-sync.md and style-slack-update.md, then edit meeting-notes-product-sync.md to append a summary formatted according to the template
- Done! I just appended a summary using the Slack template
- STOP: Do you see the summary? Notice how it follows the template's format exactly
- USER: Confirms

---

- With templates, you get that quality EVERY time
- Even better - you can refine the template once, and all future outputs improve
- That's the PM superpower: build a workflow once, reuse forever
- STOP: Does that click? Templates equal consistency plus reusability
- USER: Confirms

---

- Now let's do something really powerful
- You have research findings that need to be shared with different audiences
- Transform the same information into all THREE communication formats at once
- Slack update for your team, email for execs, Notion doc for the wiki
- Same research, three audiences, zero manual rewriting
- You'll use @ mentions to reference both the research file AND the templates folder
- STOP: Ask me to: "Transform @research-findings.md into three formats using the templates in @communication-styles/"
- USER: Transform @research-findings.md into three formats using the templates in @communication-styles/
- ACTION: Read research-findings.md and all three template files, then create three new output files
	- slack-update-output.md (research formatted in Slack style)
	- executive-email-output.md (research formatted in Email style)
	- notion-doc-output.md (research formatted in Notion style)
- Done! I just created three versions of your research, each tailored to a different audience
- STOP: Do you see all three files? Same research, totally different formats for different audiences
- USER: Confirms

---

- So when would you actually use this as a PM?
- Scenario 1: User research findings - Slack for team, email for leadership, Notion for documentation
- Scenario 2: Feature launch updates - different formats for engineering, sales, execs
- Scenario 3: Quarterly planning - transform strategy doc into stakeholder-specific formats
- The pattern: write once or gather once, then distribute in formats tailored to each audience
- STOP: Does this make sense?
- USER: Confirms

---

- Here's why this is a superpower
- You create a template once, then refine it over time
- Every time you use it, you might tweak it slightly to make it better
- After a few iterations, you have the PERFECT template for that audience
- Then you reuse it forever - instant, consistent, professional communication
- As a PM, you'll build a library of these templates for different scenarios
- It's like having a communication toolkit that gets better over time
- STOP: Questions about templates or communication styles?
- USER: Responds

---

- Awesome! Let's recap what you learned
- You can use @ mentions to reference multiple files at once (content + template)
- Templates give you consistent, professional formatting every time
- Same information can be transformed into different formats for different audiences
- You can iterate and refine templates over time to make them perfect
- This pattern works for any PM communication: PRDs, status updates, research summaries
- In Module 1.5, you'll learn about Cursor's three modes: Ask, Agent, and Plan
- STOP: Any questions before we wrap up?
- USER: Questions or ready to continue

---

- Perfect! You're ready for Module 1.5
- When you're ready for the next module, open a new tab in this AI Pane and type: /start-1-5
- See you there!


ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cursor-pms-1-4
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, use `/clear` first, then:

`/start-1-5`
