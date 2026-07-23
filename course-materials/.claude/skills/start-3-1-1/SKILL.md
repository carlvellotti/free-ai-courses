---
name: start-3-1-1
description: |
  3.1.1 Welcome & First Generation. Use when the student types /start-3-1-1.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

**ACTION:** Silently stage bundled scenario assets without overwriting student work:

```bash
cp -rn ".claude/skills/start-3-1-1/assets/." .
```

**ACTION:** Silently verify that the Python image runtime imports successfully. If any dependency is missing, run `python3 -m pip install -r requirements.txt` yourself. Never show raw installer output; summarize only whether the runtime is ready or what concise error remains before the first generation.

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# Module 3.1.1: Welcome & First Generation

**Teaching Script for Claude Code**

---

## Teaching Flow

Welcome to **Nano Banana Pro in Claude Code for PMs**!

I'm going to quote the course creator Carl here: "You aren't going to believe how fucking amazing this is."

He's right. We're going to use Gemini 3 Pro - also known as Nano Banana Pro - Google's most advanced image generation model. It can create photorealistic images, transform reference photos, generate text overlays, and so much more.

STOP: Are you ready to see what it can do?

USER: Yes / Ready

---

Before we generate anything, we need to set up your API key. This takes about 2-3 minutes and you only do it once.

First, go to Google AI Studio:

**https://aistudio.google.com/**

STOP: Open that link in your browser and let me know when you're there.

USER: I'm there

---

If this is your first time, accept the Terms of Service.

Then:
1. Click **"Get API Key"** in the left sidebar
2. Click **"Create API key"** in the upper right
3. Name your key whatever you want and select **"Default Gemini Project"**
4. Click on the key in the dashboard to reveal it
5. Copy the key - it starts with "AIza..."

STOP: Do you have your API key copied?

USER: Yes

---

Important: You also need to set up billing for Gemini 3 Pro to work.

Don't worry about cost - it's about $0.10 per image, and this whole course will cost less than $5 total. (This goes to Google, not to Carl... unfortunately.)

1. In Google AI Studio, go to **Get API key** (bottom of left sidebar)
2. Under the **"Quota tier"** column, click **Set up billing**
3. Follow the prompts to add a payment method

STOP: Is your billing set up?

USER: Yes / Done

---

Now let's add your API key without putting the secret in this conversation.

ACTION: If `.env` does not exist, copy `.env.example` to `.env`. Never overwrite an existing `.env`. Then provide the clickable link [.env](.env).

Click [.env](.env) in the Desktop project tree and paste the key directly after `GEMINI_API_KEY=`. Save the file, then tell me **done**. Never paste the key into the composer.

STOP: Wait for the student to say "done."

USER: Done

---

ACTION: Verify that `.env` exists and that `GEMINI_API_KEY` loads as a non-empty value. Do not print, echo, log, or otherwise expose the key. Report only whether verification succeeded.

Great, you're all set up!

Now for the fun part - let's generate your first image.

I have a reference photo of Carl, the course creator. You can find it at `carl-reference.JPG` if you want to see what you're working with. We're going to put him in a banana suit to welcome you to the course.

STOP: Say "Generate Carl in a banana suit welcoming me to Nano Banana"

USER: Generate Carl in a banana suit welcoming me to Nano Banana

---
This will take about 10-15 seconds

ACTION: Run generate() with reference image `carl-reference.JPG` and prompt: "Carl in a bright yellow banana suit, standing confidently with arms crossed, big friendly smile, ready to teach. Text overlay says 'Welcome to Nano Banana!' Professional course instructor vibe but fun and playful."

ACTION: After generation succeeds, read the exact saved path reported by `generate()`, state that path in prose, and provide a Markdown link to that exact file so the student can open it in Desktop.

STOP: What do you think?

USER: Response about the image

---

Pretty incredible, right?

That's Gemini 3 Pro. It can take a reference photo and transform it while keeping the person recognizable. And because we're doing this in Claude Code, I handle all the complexity for you:

- API calls
- Session management
- Saving outputs
- Picking smart parameters

Through this course, you'll build your own system of prompts, reference images, and styles. We'll start by covering general use and then move onto PM use cases in the next module.

STOP: Want to hear what's coming next in this module?

USER: Yes

---

Here's what we'll cover in Module 3.1:

- **Understanding the Basics** - how the generate() function works, available parameters, output structure
- **Consistency & Style** - using reference images, building a style database, extracting styles from existing images
- **Iteration Strategies** - sessions, refining images step by step, reverting when needed

Once you've got the fundamentals down, Module 3.2 will show you PM-specific use cases like mockups, personas, and diagrams.

STOP: Ready to continue to the next lesson?

USER: Yes / Ready

---

Great! In the next lesson, you'll learn how the `generate()` function works and all the options available to you.

Run `/start-3-1-2` when you're ready to continue.

ACTION: End module

---

## Important Notes for Claude

**File operations in this module:**
- Read `.env.example` to show the student the template
- Copy `.env.example` to `.env` when student requests
- The student opens [.env](.env) and pastes the key directly into the file; the key never enters chat
- Verify only that the key loads and is non-empty; never echo it

**For the image generation:**
- Use the `generate()` function from `image_gen.py`
- Pass the reference image path and the exact prompt specified
- The output will be saved automatically to `outputs/`

**If something goes wrong:**
- API key errors: Have them open [.env](.env) and check the value directly without sharing it
- Billing errors: Confirm billing is set up in Google AI Studio settings
- Generation fails: Check the error message and troubleshoot accordingly

**Opening images:** State the exact path and link it. Optionally run `open <path>` for the student.

---

## Success Criteria

Module 3.1.1 is successful if the student:

- ✅ Has their Gemini API key set up in `.env`
- ✅ Has billing configured in Google AI Studio
- ✅ Generated their first image (Carl in banana suit)
- ✅ Understands what they'll learn in this module
- ✅ Knows how to continue to the next lesson

---

**Remember: This is the student's first taste of image generation. Make it magical. The "wow" moment with that first generated image sets the tone for the entire module.**
## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-pms-3-1-1
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-3-1-2`
