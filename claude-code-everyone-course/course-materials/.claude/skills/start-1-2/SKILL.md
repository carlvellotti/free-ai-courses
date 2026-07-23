---
name: start-1-2
description: |
  Lesson 1.2: File Exploration & Visualization. Use when the student types /start-1-2.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

ACTION: Silently run `cp -rn .claude/skills/start-1-2/assets/scenario/* . 2>/dev/null || true` to stage any missing scenario files. Do not mention this setup step.

# Lesson 1.2: File Exploration & Visualization

Alright, NOW we enter the scenario.

You love coffee. Like, really love it. So when you saw an opening for a manager position at Basecamp Coffee, you jumped at it.

Basecamp Coffee is a regional chain - about 45 locations across the Pacific Northwest. Good beans, cozy vibes, loyal regulars.

Beware: the previous manager was... not great. Things are a bit of a mess. Notes everywhere. Half-finished projects. A loyalty program that's apparently bleeding money.

But hey - that's why they hired you. Time to figure out what's going on.

STOP: Ready to see what you inherited?

USER: Yes

---

## Explore the File Structure

Let's see what you're working with. Ask me to show you the file structure.

STOP: Say "Show me the file structure"

USER: Show me the file structure

ACTION: Point out that nested folders, including dot-folders, are visible in the persistent file explorer. Run a read-only listing if useful and summarize its salient output: "You've got company-context (the background info), inherited-chaos (the mess you inherited), templates, and attachments."

[Show the file tree in ASCII]

STOP: See how there are two main folders? [company-context/](company-context/) and [inherited-chaos/](inherited-chaos/)? Ask me to summarize the company context for you.

USER: Summarize the company context for me

---

## Read the Context Files

ACTION: Read the three files in [company-context/](company-context/) and give a conversational summary:
- [SCENARIO.md](company-context/SCENARIO.md): Your situation - 3 months to turn around a failing loyalty program
- [LOYALTY-PROGRAM.md](company-context/LOYALTY-PROGRAM.md): The current program structure and (bad) metrics
- [BRAND-VOICE.md](company-context/BRAND-VOICE.md): How Basecamp communicates

Notice how I just read multiple files and gave you a summary? You could do the same thing with any folder of documents - contracts, research papers, meeting notes. Just point me at them and ask for a summary.

STOP: Any questions about the company context before we peek at the chaos?

USER: Responds

---

## Peek into the Chaos

Now let's peek into the inherited chaos. What's in here?

ACTION: Inspect [inherited-chaos/](inherited-chaos/) and summarize what you see - messy notes, customer feedback, competitor research, old campaigns, and a CSV of data. State what the inspection established in prose.

See the mess you've inherited? We'll dig into this later.

I'm reading and summarizing these files, and you can also browse the same folders in the file explorer or open any file in the in-app viewer. Let's get comfortable moving between those two views.

Let's tour the workspace.

STOP: Ready to explore the visual workspace that's already here?

USER: Yes

---

## Tour the Workspace

This app already gives you a complete visual workspace. Use the persistent file explorer for nested navigation; dot-folders are visible by default. Select a markdown file to render it in the in-app viewer.

Expand [company-context/](company-context/) in the left file explorer and open [BRAND-VOICE.md](company-context/BRAND-VOICE.md).

STOP: Do you see the course folders and BRAND-VOICE.md in the viewer?

USER: Yes

---

## Verify File Visibility

Nice - the project and I now live in one workspace. In the left file explorer, do you see the course folders?

STOP: Do you see them over there?

USER: Confirms

---

## Talk About Files

Find [company-context/](company-context/) - do you see the three files inside?

Open [BRAND-VOICE.md](company-context/BRAND-VOICE.md) and find the secret word at the top.

STOP: What's the secret word?

USER: COFFEE

---

## Explain Markdown Files

Nice! What you're seeing is a markdown or .md file, which is just a very common standard for documents. LLMs love markdown files.

The in-app viewer renders markdown for you, so headings and lists are easy to read right here.

STOP: Did that work for you?

USER: Yes

---

## Demonstrate File Creation

Okay, that's viewing files. Of course, I can create files too.

STOP: Ask me to create a test file roasting ChatGPT.

USER: Create a test file roasting ChatGPT

ACTION: Create a file called `test-file.md` with fun content roasting ChatGPT, and put the secret word "ESPRESSO" at the very top. Then provide [test-file.md](test-file.md) so the student can open it.

Okay, I added a secret word to the top again. Can you find it?

STOP: What's the secret word?

USER: ESPRESSO

---

## Establish the Workflow

That's me, espesso! You're getting the hang of this.

This is the workflow: your files, the in-app viewer, and our conversation all work together in one project. You can browse what changes while we work.

STOP: Feel comfortable with the setup?

USER: Yes

---

## Wrap-up

**Meta skill:** Exploring unfamiliar file structures and setting up a workspace where you can see what's happening.

**Where else this applies:**
- You inherit a project from a coworker who left - messy folders, no documentation. Claude can map it out and explain what everything is.
- A client sends you a zip file with their "brand assets" - 17 folders, inconsistent naming. Get oriented in minutes instead of hours.
- Your own Downloads folder has become a graveyard. Point Claude at it: "What's in here? What can I delete?" (Great way to clean up disk space.)
- Starting a new job and need to understand how the team organizes their shared drive.
- You downloaded a course or resource pack and want to understand what's actually in it before diving in.

**Next up:** In 1.3, we're going to actually dig into that inherited chaos. You'll learn how to extract insights from messy documents, synthesize patterns across folders, analyze images, and pull in web research - all with simple @ mentions. We're going to start uncovering what's actually wrong with this loyalty program.

STOP: Ready for 1.3?

USER: Yes / /start-1-3

---

## Important Notes for Claude

- **Workspace**: Use the existing Desktop file explorer and in-app viewer; dot-folders are visible. Whenever the student must open a file, provide a markdown file link.
- **Secret words**: BRAND-VOICE.md must have "COFFEE" at top; test-file.md gets "ESPRESSO"
- **Patience**: Go slow and offer to help troubleshoot.
- **File creation**: Actually create test-file.md - don't just describe it

## Success Criteria

- [ ] Student understands the Basecamp Coffee scenario and their role
- [ ] Student can navigate nested folders in the Desktop file explorer
- [ ] Student can open markdown files in the in-app viewer
- [ ] Student found both secret words (COFFEE, ESPRESSO)
- [ ] Student understands the workflow: files + viewer + Claude in one project
- [ ] Student is ready to proceed to 1.3

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-everyone-1-2
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-1-3`
