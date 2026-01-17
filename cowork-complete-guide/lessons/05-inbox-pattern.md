# Lesson 5: The Inbox Pattern & Your First Skill

So far, we've done one-time organization.

But what about ongoing file management? Files come in constantly.

Let's build a system.

WAIT: Familiar with "inbox zero" for email?

USER: Yes / Sort of / No

---

Same idea for files:

- **inbox/** – Drop files here. Unprocessed. The chaos landing zone.
- **processed/** – Files I've handled, organized by type or date.
- **outputs/** – New things I create (reports, summaries, spreadsheets).
- **reference/** – Read-only context. Brand guidelines, templates, things I should read but not modify.

This is the folder structure I recommend for any Cowork project.

WAIT: Where would YOU drop a new receipt that just came in?

USER: [Says inbox]

Right. inbox/ is the landing zone. Everything starts there, then flows through the system.

---

Let me create this for you.

ACTION: Create the four folders (inbox/, processed/, outputs/, reference/) with README.md in each explaining purpose

ACTION: Create a root README.md explaining the system

Done. You now have a file processing system.

WAIT: Check your Artifacts – see the new structure?

USER: Yes

---

Now here's where it gets powerful.

A **Skill** is just a markdown file with instructions I follow.

You create it once. Use it forever.

Every time you want your inbox processed the same way, you tell me to use the skill.

This is how you get consistency without rewriting prompts.

WAIT: Want to create your first Skill?

USER: Yes

---

Let's write instructions for processing your inbox.

ACTION: Create skills/file-processor.md with:

```markdown
# File Processor Skill

## Purpose
Process all files in the inbox/ folder and organize them.

## Instructions
1. Read every file in inbox/
2. Determine what each file is by reading its contents
3. Move to processed/ in appropriate subfolder:
   - processed/invoices/
   - processed/receipts/
   - processed/documents/
   - processed/images/
   - processed/other/
4. Rename files: YYYY-MM-DD-description.ext
5. Create outputs/processing-log-[date].md with all changes

## Constraints
- Never delete files
- Never modify files in reference/
- Ask before creating new category folders

## Naming Convention
YYYY-MM-DD-brief-description.ext
Example: 2026-01-15-amazon-receipt.pdf
```

There's your File Processor skill. It's now a permanent part of your system.

WAIT: Take a look at skills/file-processor.md. What would you change about this skill for your own work? Different categories? Different naming?

USER: [Suggests changes or says it works for them]

[If changes]: Good instinct – you can edit that file anytime to customize it.

[If works]: You can always tweak it later as you learn what you need.

---

Let's test it. I'll drop some sample files in your inbox.

ACTION: Create 5 sample files in inbox/ (varied types – a receipt image, a document, a screenshot, etc.)

Now tell me to process your inbox using the skill.

You can say something like: "Read the file-processor skill and process my inbox."

WAIT: Try it.

USER: [Instruction to use the skill]

---

ACTION: Read skills/file-processor.md and follow instructions to process inbox

Done. Check processed/ and outputs/.

WAIT: How'd that work?

USER: [Response]

---

That skill now exists forever in this folder.

Any time you want to process files the same way, just tell me to use it.

You can edit the skill file to change behavior. Add categories, change naming, add constraints.

This is how you build a personal assistant that knows YOUR preferences.

WAIT: Ready for research synthesis?

USER: Yes

---

**What you learned:** The Inbox Pattern for ongoing file management. Skills for reusable instructions.

**What you built:** A file processing system with your first Skill.

**Key insight:** Skills = instructions I follow. Create once, use forever.

**Next up:** Research synthesis – turning piles of documents into insights.

WAIT: Say "next lesson" to continue.

USER: Next lesson
