---
name: start-1-3
description: |
  Lesson 1.3: Working with Files. Use when the student types /start-1-3.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - WebSearch
  - WebFetch
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

ACTION: Silently run `cp -rn .claude/skills/start-1-2/assets/scenario/* . 2>/dev/null || true` to stage any missing scenario files. Do not mention this setup step.

# Lesson 1.3: Working with Files

Now that you can see your files, let's actually work with them.

This lesson is about the @ symbol for referencing files and folders.

We're going to do 5 scenarios that cover the main ways you'll use Claude Code with files.

As we go through these files, you'll also be learning about Basecamp's struggles. This information will be helpful in future lessons. We're unraveling the mystery.

STOP: Ready?

USER: Yes

---

## Scenario 1: Single File → Extract

First up: reading one file, extracting structured info from it, and creating new files.

The previous manager left messy notes. Let's see what's useful.

STOP: Ask me to read @inherited-chaos/previous-manager-notes.md ([previous-manager-notes.md](inherited-chaos/previous-manager-notes.md)) and extract the action items and key insights into a new file.

USER: Types command referencing the file

ACTION: Read [previous-manager-notes.md](inherited-chaos/previous-manager-notes.md), extract action items and key insights, create `organized/action-items.md` with the structured output, and provide [action-items.md](organized/action-items.md).

**Discovery:** Among the chaos, there's a note: "What if we helped people find their coffee personality? Like a quiz or something. Could be fun. Never had time to figure it out."

Interesting... let's keep that in mind for later.

STOP: See how we pulled structure from chaos? You could also have the action items added to that document instead of creating a new one.

USER: Yes

---

## Scenario 2: Folder → Synthesize

Next: pointing at a WHOLE folder and finding patterns across multiple files.

We've been collecting customer feedback for months. What are they telling us?

STOP: Ask me to look at the @inherited-chaos/customer-feedback/ folder ([customer-feedback/](inherited-chaos/customer-feedback/)) and synthesize themes across all the files.

USER: Types command referencing the folder

ACTION: Read all four feedback files (january.md through april.md), synthesize patterns across them, create `organized/feedback-synthesis.md` with the themes, and provide [feedback-synthesis.md](organized/feedback-synthesis.md).

**Discovery:** Recurring theme - "fine but forgettable." People sign up, earn a few points, forget about it. The phrase "fine but forgettable" appears multiple times across different months.

STOP: Imagine doing that manually - opening 4 files, reading each one, taking notes, finding patterns. This took seconds. You could do this with hundreds of customer emails, support tickets, survey responses - anything where patterns are hiding in volume. Ready for the next one?

USER: Yes

---

## Scenario 3: Apply Template

So far you've just been asking me to take actions and I'm doing them the way I think is best. (Which is usually pretty good 💅)

But you might have a particular format, template, or instructions you want me to follow. Instead of prompting those every time, you can just save those instructions in a file and then reference it when asking me to do something.

This is where you start to see the power of being on your computer instead of in a chatbot. It's just way easier for you to give me relevant context.

Leadership needs an update. We have a template we use: @templates/leadership-update-template.md ([leadership-update-template.md](templates/leadership-update-template.md)).

STOP: Ask me to create a leadership update using @organized/feedback-synthesis.md ([feedback-synthesis.md](organized/feedback-synthesis.md)) and following the format in @templates/leadership-update-template.md ([leadership-update-template.md](templates/leadership-update-template.md)).

USER: Types command referencing both files

ACTION: Read both files, create `organized/leadership-update.md` following the template format with content from the feedback synthesis, and provide [leadership-update.md](organized/leadership-update.md).

Key learning: You can reference files as format guides, not just content sources. This is your first peek into building out your own workflows and systems.

STOP: Think about all the templates you use - meeting notes, weekly reports, proposals. Save them as files, and I'll always follow that format. No more copy-pasting into ChatGPT and hoping it gets the structure right. Make sense?

USER: Yes

---

## Scenario 4: Image → Analyze

I can also view images!

Here's our current loyalty program flyer: [loyalty-flyer.jpg](attachments/loyalty-flyer.jpg).

Let's see if I can find any improvements.

STOP: Open [loyalty-flyer.jpg](attachments/loyalty-flyer.jpg) to see what we're working with, then ask me to review it. (You can also paste or attach your own images into the composer anytime - same idea.)

USER: Asks for a review of the flyer

ACTION: Analyze the shipped image directly from `attachments/loyalty-flyer.jpg` - note that it's generic, says "the Coffee Shop" instead of Basecamp Coffee, has no personality or brand identity, and could be any chain's flyer.

**Discovery:** Generic offer. Nothing that says "Basecamp Coffee." Could be any chain. This is part of the problem - even our marketing materials have no personality.

STOP: This is useful for all kinds of things - analyzing UIs, showing me bugs, asking me to use it for inspiration. And you can provide multiple images at once. Make sense?

USER: Yes

---

## Scenario 5: Web → Research

Last one: pulling in external information from the web.

What are successful loyalty programs doing that we're not?

STOP: Ask me to search the web for best practices in coffee shop loyalty programs.

USER: Types command asking for web research

ACTION: Search the web, find relevant articles about successful loyalty programs, synthesize key findings.

**Discovery:** Report the current patterns the live sources support. Look for whether strong programs create identity and community rather than only transactions, and cite the sources used.

STOP: Web search is incredibly powerful for research tasks. Need to understand a new industry? Research competitors? Find best practices for anything? Just ask. I'll search, read, and synthesize - no more 97 browser tabs. Cool, right?

USER: Yes

---

## End of Lesson Reflection

Something's wrong with this program. We've seen symptoms - forgettable, generic, no engagement.

But we need to go deeper to find the real problem.

That's what we'll do in the next lessons.

STOP: See how we've started to piece together a picture?

USER: Yes

---

## Wrap-up

**Meta skills you just learned:**

1. **Single file → Extract:** Pull structured information from messy documents
2. **Folder → Synthesize:** Find patterns across multiple files
3. **Apply template:** Use one file to control the format of output
4. **Image → Analyze:** Get insights from visual content
5. **Web → Research:** Pull in external information on demand

**Where else this applies:**
- Meeting notes from the last quarter - extract every action item assigned to you
- 50 customer support tickets - synthesize into themes for your product team
- Your company has a specific format for proposals - use it as a template for any new proposal
- Screenshot a competitor's pricing page - get instant analysis of their positioning
- Research best practices for anything: hiring, onboarding, presentation design, whatever you're working on

**Next up:** In 1.4, you'll learn about slash commands, sessions, context visibility, models and effort, and the composer permission modes. You're about to become a power user.

STOP: Ready for 1.4?

USER: Yes / /start-1-4

---

## Important Notes for Claude

- **File creation**: Actually create the output files (action-items.md, feedback-synthesis.md, leadership-update.md) in the organized/ folder
- **Coffee personalities hint**: Make sure to highlight the "coffee personality" idea when extracting from the notes - this seeds the solution
- **Web search**: Use real web search capabilities to find actual best practices

## Success Criteria

- [ ] Student extracted action items from messy notes into structured file
- [ ] Student synthesized 4 months of feedback into themes
- [ ] Student created a leadership update using a template
- [ ] Student analyzed the loyalty flyer image
- [ ] Student saw web research in action
- [ ] Student noticed the "fine but forgettable" theme
- [ ] Student heard about the "coffee personality" idea (seed for later)
- [ ] Student is ready for 1.4

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-everyone-1-3
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-1-4`
