---
name: start-vin-obsidian-workflows
description: Build Internet Vin's Obsidian context, CLI, and thinking-skill workflows. Use when the student types /start-vin-obsidian-workflows.
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

# Vin Obsidian Workflows

## Setup

ACTION: Run this bash block before teaching. It stages the ten-note vault and command log without replacing existing files, then echoes clickable links. Summarize the result in prose because bash output may be collapsed.

```bash
mkdir -p "vin-obsidian-workflows"
cp -rn ".claude/skills/start-vin-obsidian-workflows/assets/." "vin-obsidian-workflows/"
printf '%s\n' \
  '[staged vault](vin-obsidian-workflows/my-vault/)' \
  '[command log](vin-obsidian-workflows/my-commands.md)' \
  '[The Death Spiral](vin-obsidian-workflows/my-vault/The%20Death%20Spiral.md)'
```

This lesson teaches the Obsidian + Claude Desktop integration techniques from Internet Vin's interview with Greg Isenberg.

---

## Welcome

Welcome to the Vin Obsidian Workflows mini-lesson.

This is an interactive version of Greg Isenberg's interview with Internet Vin: https://www.youtube.com/watch?v=6MBq1paspVU

Here's the core insight: most people use Claude Desktop like a stranger. Every session starts from zero — you re-explain your project, your preferences, your constraints. Vin's system fixes that. It makes Claude Desktop feel like a thinking partner who already knows you.

**What we'll cover:**
1. What Obsidian is and why it matters for AI
2. Setting up the Obsidian CLI so the agent can read your knowledge graph
3. Building custom commands that load your world in one shot
4. Thinking tools that surface patterns you'd never see on your own
5. The golden rule that keeps the whole system honest

By the end, you'll have Obsidian connected to Claude Desktop, a working `/my-world` skill, and a thinking tool you can reuse on your own notes.

STOP: Ready to get started?

USER: Yes / Ready / Let's go

---

## The Context Problem

Here's a question: have you ever started a new Claude Desktop session and had to re-explain your project, your preferences, your constraints — all over again?

STOP: Has this happened to you?

USER: Yes / Definitely / All the time / Not really

[If user says not really]: It will — especially on longer projects. The more you use Claude Desktop, the more painful the "cold start" gets. Either way, what we're about to set up will make every session better from the jump.

That's the number one reason people say Claude Desktop is "okay but not game-changing." It's not the model's fault. It's a context problem.

As Greg put it: "The whole game is feeding the beast good context."

Think about it: when you onboard a new coworker, you don't start from scratch. You give them docs, intros, context. Claude Desktop is the same — the better the context you feed it, the better everything it does.

So the question becomes: how do you feed Claude Desktop rich, persistent context without re-typing it every session?

That's what Vin figured out. And the answer is a tool called Obsidian.

STOP: Have you heard of Obsidian before?

USER: Yes / No / A little

---

## What is Obsidian

If you've never used Obsidian — or only know it vaguely — here's the short version: it's a note-taking app that stores everything as plain markdown files in a folder on your computer. That folder is called a "vault."

Unlike Google Docs or Notion, your notes aren't locked in someone else's cloud. They're just `.md` files you own. This matters a lot for what we're about to do — because Claude Desktop can read `.md` files natively.

But here's what makes Obsidian special: **wikilinks**.

When you write `[[Project Alpha]]` in a note, Obsidian creates a link to another note called "Project Alpha." And that link goes BOTH ways — you can see what links TO a note (backlinks), not just what it links out to.

Over time, this creates a web of connected ideas. Project notes link to people, people link to meetings, meetings link to decisions, decisions link back to projects. It starts to look like a map of how you think.

Vin showed his graph view in the video — hundreds of notes all interconnected. He said: "It works more like the way your brain works. Your brain connects these patterns all the time."

STOP: The key insight: it's not about individual notes. It's about the connections BETWEEN notes. Make sense?

USER: Yes / Makes sense

And here's why this is a game-changer for AI. Greg nailed it at the end of the interview — "People think tokens are the oxygen. But they're not. The markdown files are the memories."

Your notes are the raw material. Claude Desktop is the engine. Obsidian is the structure that connects them.

STOP: Now let's get you set up. Do you already have Obsidian installed?

USER: Yes / No

---

## Setup: Obsidian + CLI

[If user said NO to having Obsidian]:

First, let's get Obsidian installed. It's free.

ACTION: Run `open https://obsidian.md` yourself to open the site in the student's real browser.

Download and install Obsidian. Once it's open, create a new vault — just give it a name and pick a folder. It can be anywhere on your computer.

STOP: Let me know when Obsidian is installed and you have a vault open.

USER: Done / Ready

[If user said YES to having Obsidian]:

Great! Make sure Obsidian is open with your vault loaded. We'll need it running for the next step.

STOP: Is Obsidian open with your vault?

USER: Yes

---

Now for the key piece: the **Obsidian CLI**.

In February 2026, Obsidian released an official command-line interface. This is what Vin uses in the video, and it's what makes the Claude Desktop integration so powerful.

Here's what it does: instead of Claude Desktop just reading your files (which it can already do), the CLI gives Claude Desktop access to the RELATIONSHIPS between files — backlinks, orphan notes, tag counts, the full link graph. Things that don't exist in the raw files.

Vin explained it: "With the Obsidian CLI, it can give Claude Code not only those files that it can read and access, but it can also give Claude Code information about the inter-relationships of those files."

The difference is massive. Finding orphan notes by scanning files takes 15 seconds and millions of tokens. With the CLI, it takes 0.26 seconds and about 100 tokens. That's 70,000x more efficient.

**One thing to know up front:** The CLI is currently in Early Access, which requires a Catalyst license — $25 one-time — from obsidian.md/pricing. This is the only paid part of this whole setup.

If you don't want to pay right now, that's totally fine. The lesson still works without it. Claude Desktop can read your vault files directly. You'll just miss the graph-aware commands (backlinks, orphans, etc.) I'll point out where the CLI adds extra power as we go.

STOP: Do you want to enable the CLI ($25 Catalyst license), or skip it for now and use direct file reading instead?

USER: I'll enable it / Skip for now

---

### Enable the CLI

[If user chose to enable]:

The CLI is built into Obsidian — no separate install needed. Here's how to enable it:

1. Make sure you're on Obsidian 1.12 or later. Check under Settings -> About. You also need the latest installer version (1.11.7+). If you need to update, go to obsidian.md/download.
2. Go to **Settings -> General**
3. Toggle on **"Command line interface"**
4. Follow the prompt to register the CLI. This adds the `obsidian` command for agent-run actions.

**Important for Mac users:** After registering, the agent verifies whether Obsidian is available on PATH. If the app registration has not refreshed the environment, save a handoff, fully restart Obsidian and Claude Desktop, then use **Cmd+N** and invoke `/start-vin-obsidian-workflows` again. The agent may diagnose `~/.zprofile` or an alternate shell environment read-only. It must ask for explicit consent before changing any configuration. The relevant path value is:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

STOP: Were you able to find and toggle on the CLI setting?

USER: Yes / I can't find it

[If user can't find it]: Check that you're on Obsidian 1.12+ (Settings -> About) and have a Catalyst license. If your version is older, update at obsidian.md/download — you need the Early Access build. If you have the right version but don't see the toggle under Settings -> General, your Catalyst license may not be active. If you'd rather skip this step, no worries — we'll continue with direct file reading.

---

### Refresh the Desktop Session

[If user enabled CLI]:

**Important:** CLI registration may require the app environment to refresh. Before any restart, the agent writes `vin-obsidian-workflows/CLI_HANDOFF.md` with the completed steps and next verification action.

Here's how to get back:

1. Fully restart Obsidian if its CLI registration says a restart is required.
2. Fully restart Claude Desktop if the environment still cannot see `obsidian`.
3. Open a new session with **Cmd+N**.
4. Invoke `/start-vin-obsidian-workflows` and link [CLI handoff](vin-obsidian-workflows/CLI_HANDOFF.md).

STOP: Ready for the agent to save the handoff before any required restart?

USER: Done / I'm back / I restarted

[If the user says they're back, read the handoff and continue to verification.]

---

### Verify the CLI

Let's make sure it's working.

ACTION: The agent runs `obsidian version` to verify CLI is available and repeats the actual result in prose.

ACTION: The agent runs `obsidian vaults` and repeats the listed vaults in prose.

STOP: Do you see your vault listed?

USER: Yes / No

[If No]: The CLI requires Obsidian to be running, so confirm the app is open. The agent checks command discovery and may inspect `~/.zprofile` read-only for the PATH export. It explains the result and asks before any config change. If it still does not work, continue with direct file reading.

[If Yes]: Let's try one more thing to see the power of this.

ACTION: The agent runs `obsidian search query="test"` or a relevant query based on the user's vault, then summarizes the returned matches.

That just searched your entire vault using Obsidian's index — instant, and way cheaper in tokens than having Claude grep through every file.

CLI is good to go. Now let's connect your vault.

[If user skipped CLI]:

No worries. Claude Desktop can still read your vault files directly — that's powerful on its own. I'll point out where the CLI would add extra capabilities as we go. You can always enable it later.

Let's move on to connecting your vault.

---

## Connect Your Vault

ACTION: Use the AskUserQuestion tool:
- Header: "Your vault"
- Question: "Do you have an existing Obsidian vault with notes in it, or do you want to start fresh for this lesson?"
- Options:
  - "I have an existing vault with notes" (description: "Recommended if you have one — your real notes make the lesson way more powerful")
  - "I want to start fresh — use the included example notes" (description: "We'll use the 10 pre-built Claude Desktop notes in my-vault/")

USER: [Selects option]

---

### Path A: Existing Vault

Perfect — using your real notes will make this lesson way more powerful.

STOP: What's the path to your Obsidian vault folder? You can find it in Obsidian -> Settings -> Files & Links -> look for "Vault location."

USER: [Provides path]

ACTION: Verify the vault path exists and list a few files to confirm. Note the vault path for use in subsequent commands.

Great — I can see your vault. You've got [X] notes in there.

For this lesson, I'm only going to READ your notes. I will never create, edit, or delete anything in your vault. That's actually one of the key rules we'll cover later.

STOP: Sound good?

USER: Yes

Now let's build the command that makes all those notes instantly available in any Claude Desktop session.

---

### Path B: Start Fresh

No problem. This lesson actually comes with a pre-built vault — 10 notes about Claude Desktop best practices, all interconnected with wikilinks. It's in the `my-vault/` folder.

Let's take a look at what's in there.

ACTION: List the files in `vin-obsidian-workflows/my-vault/`, summarize them in prose, and include clickable links.

```
vin-obsidian-workflows/my-vault/
├── The Junior Employee Mental Model.md
├── Plan Mode.md
├── CLAUDE.md Best Practices.md
├── Context Window Management.md
├── The Verification Loop.md
├── Subagents.md
├── Custom Commands.md
├── Hooks.md
├── The Death Spiral.md
└── Voice-First Workflows.md
```

These are 10 interconnected notes about using Claude Desktop effectively. Each one links to others using `[[wikilinks]]` — the Obsidian feature we just talked about.

Let me show you what I mean. Take a look at one of them:

ACTION: Read [The Death Spiral](vin-obsidian-workflows/my-vault/The%20Death%20Spiral.md) and summarize it. Point out the literal `[[wikilinks]]`: `[[Plan Mode]]`, `[[Context Window Management]]`, `[[The Verification Loop]]`, and `[[Voice-First Workflows]]`. Obsidian resolves and presents graph relationships; the raw files themselves establish only their outgoing links.

STOP: See the `[[links]]`? Each one points to another note in the vault. And those notes link back. Open a couple files and notice the web. This is exactly what Vin's vault looks like — except his has hundreds of notes across every domain of his life.

USER: Yes / I see it / That's cool

That web of connections is exactly what makes this system powerful. Even with just 10 notes, you've got a knowledge graph with real structure. Now let's build the command that loads all of it into Claude Desktop in one shot.

---

## Building /my-world

This is the command Vin uses most. He calls it `/context`, but `/context` is already a Desktop resource command. We'll keep the authored lesson name `/my-world` instead. Same idea, no conflict.

Instead of re-explaining who you are and what you're working on every session, `/my-world` loads it all in one shot.

Here's how it works: the agent creates `.claude/skills/my-world/SKILL.md` in the student's project. The skill tells Claude Desktop to read key context files. One skill, and Claude knows your world.

Vin demonstrated this live — he typed his context command and Claude immediately had access to his projects, preferences, current priorities, everything. He said: "I just did that one command and now it's going to get all that information."

STOP: Let's build one for your vault right now. Ready?

USER: Yes / Ready / Let's do it

ACTION: Check whether `.claude/skills/my-world/` exists. If it exists, do not overwrite it; explain the collision and ask what the student wants. Otherwise create `.claude/skills/my-world/SKILL.md` with frontmatter named `my-world`, a description ending `Use when the student types /my-world.`, and the selected instructions below.

[If existing vault — adapt paths to their actual vault location]:
```markdown
Load my personal context from my Obsidian vault.

1. Read these key context files from my vault:
   - @{vault-path}/ (list top-level files to understand structure)

2. [If CLI available] Run these commands to map relationships:
   - `obsidian tags counts` — see what themes dominate
   - `obsidian backlinks file={most-connected-note}` — trace key connections
   - `obsidian orphans` — find disconnected notes

3. Summarize: what are my active projects, key priorities, and how do they connect? Reference specific notes.
```

[If fresh vault (my-vault/) without CLI]:
```markdown
Load my personal context from my vault notes.

1. Read all files in the vault:
   - @vin-obsidian-workflows/my-vault/The Junior Employee Mental Model.md
   - @vin-obsidian-workflows/my-vault/Plan Mode.md
   - @vin-obsidian-workflows/my-vault/CLAUDE.md Best Practices.md
   - @vin-obsidian-workflows/my-vault/Context Window Management.md
   - @vin-obsidian-workflows/my-vault/The Verification Loop.md
   - @vin-obsidian-workflows/my-vault/Subagents.md
   - @vin-obsidian-workflows/my-vault/Custom Commands.md
   - @vin-obsidian-workflows/my-vault/Hooks.md
   - @vin-obsidian-workflows/my-vault/The Death Spiral.md
   - @vin-obsidian-workflows/my-vault/Voice-First Workflows.md

2. Map the connections: which notes link to which? What are the most connected topics?

3. Summarize: what themes emerge? What's the overall knowledge structure? Reference specific notes and their connections.
```

[If fresh vault (my-vault/) with CLI]:
```markdown
Load my personal context from my vault notes.

1. Read all files in the vault:
   - @vin-obsidian-workflows/my-vault/The Junior Employee Mental Model.md
   - @vin-obsidian-workflows/my-vault/Plan Mode.md
   - @vin-obsidian-workflows/my-vault/CLAUDE.md Best Practices.md
   - @vin-obsidian-workflows/my-vault/Context Window Management.md
   - @vin-obsidian-workflows/my-vault/The Verification Loop.md
   - @vin-obsidian-workflows/my-vault/Subagents.md
   - @vin-obsidian-workflows/my-vault/Custom Commands.md
   - @vin-obsidian-workflows/my-vault/Hooks.md
   - @vin-obsidian-workflows/my-vault/The Death Spiral.md
   - @vin-obsidian-workflows/my-vault/Voice-First Workflows.md

2. Run these CLI commands to map relationships:
   - `obsidian tags counts` — see what themes dominate
   - `obsidian backlinks file="Context Window Management"` — trace key connections
   - `obsidian orphans` — find disconnected notes

3. Summarize: what themes emerge? What's the overall knowledge structure? Reference specific notes and their connections.
```

ACTION: Document the skill in [my commands](vin-obsidian-workflows/my-commands.md) with a description of what it does.

Done! You now have a `/my-world` command.

Here's the power move: type `/my-world` exactly in the current Desktop session. If the skills picker has not refreshed, the exact name still works; otherwise use **Cmd+N** and invoke it there.

STOP: Want to try it? Type `/my-world` right now.

USER: /my-world

ACTION: Execute the context command — read vault files (and CLI graph data if available), then summarize what you now know about the student's world. Be specific — reference their actual notes, projects, and connections.

See that? One command, and I know your projects, your priorities, how everything connects.

[If CLI enabled]: Notice how I also pulled backlink relationships and connection patterns — that's the CLI giving me the graph structure, not just the file contents.

STOP: Pretty powerful, right? That's your first custom command. Vin built a whole library of these — let's look at what else he uses.

USER: Yes / That's cool / What else?

---

## Daily Rituals

Vin built two ritual commands that bookend every day:

**`/today`** - a morning prompt design that pulls accessible calendar, task, and note context into a prioritized plan. Calendar wiring is possible via connectors in Settings; do not promise that a connector is present. The insight: your calendar alone doesn't reflect what you're actually thinking about. Your notes fill that gap.

**`/close`** - an evening prompt design that extracts action items from accessible context, surfaces vault connections you might have missed, and checks on hypotheses you're tracking.

Here's the quote that captures it: "Writing right now is a big way of how you delegate things to agents. If you can develop a writing habit, you have a lot more context that you can pass over to an agent which then dramatically increases the amount of things you can delegate."

The daily ritual is how the vault stays alive. You write a little each day, and the whole system gets smarter.

STOP: You don't need to build these right now — they work best once you have a regular writing practice. But let's build something even more interesting: a thinking tool.

USER: Let's do it / Sounds good / Ready

---

## Thinking Tools

"I really, really, really like working with LLMs as a thinking partner. It's my favorite way of using LLMs." — that's Vin.

He built several commands that don't organize information — they generate insight:

**`/challenge`** — pressure-tests your current beliefs using your vault's own history. Finds contradictions, counter-evidence, and shifts in your thinking.

**`/emerge`** — surfaces ideas the vault implies but you never explicitly stated. Conclusions from scattered premises, unnamed patterns, unarticulated directions.

**`/connect`** — takes two domains and finds bridges between them using your vault's link graph.

Greg compared it to a therapist: "You're doing most of the talking. The therapist is guiding you. That's what this is doing."

Let's build one. Pick the one that sounds most interesting to you.

ACTION: Use the AskUserQuestion tool:
- Header: "Thinking tool"
- Question: "Which thinking tool do you want to build?"
- Options:
  - "/challenge - Pressure-test your beliefs" (description: "Finds contradictions and counter-evidence in your own notes")
  - "/emerge - Surface hidden patterns" (description: "Discovers ideas your vault implies but you never stated")
  - "/connect - Bridge two different topics" (description: "Finds unexpected connections between disparate domains")

USER: [Selects one]

ACTION: Build the selected authored skill name in `.claude/skills/<name>/SKILL.md`, where `<name>` is exactly `challenge`, `emerge`, or `connect`. Check for an existing folder and never overwrite it. Add valid skill frontmatter whose name matches the folder and whose description ends with the exact invocation. Use the templates below based on which tool they chose:

**If /challenge:**
```markdown
Pressure-test my beliefs using my vault's own history.

1. Read all vault notes:
   - @vin-obsidian-workflows/my-vault/The Junior Employee Mental Model.md
   - @vin-obsidian-workflows/my-vault/Plan Mode.md
   - @vin-obsidian-workflows/my-vault/CLAUDE.md Best Practices.md
   - @vin-obsidian-workflows/my-vault/Context Window Management.md
   - @vin-obsidian-workflows/my-vault/The Verification Loop.md
   - @vin-obsidian-workflows/my-vault/Subagents.md
   - @vin-obsidian-workflows/my-vault/Custom Commands.md
   - @vin-obsidian-workflows/my-vault/Hooks.md
   - @vin-obsidian-workflows/my-vault/The Death Spiral.md
   - @vin-obsidian-workflows/my-vault/Voice-First Workflows.md

2. [If CLI available] Run: `obsidian backlinks file="The Death Spiral"` and `obsidian search query="never"` to find strong claims.

3. Find contradictions, tensions, and counter-evidence WITHIN my own notes. Where do I say one thing in one note and something different in another? Where are my blind spots?

4. Output format:
   - **Tension Found**: [description]
   - **Evidence from notes**: [specific quotes with note names]
   - **The challenge**: [question that forces me to reconcile]
```

**If /emerge:**
```markdown
Surface hidden patterns — ideas my vault implies but I never explicitly stated.

1. Read all vault notes (same list as above).

2. [If CLI available] Run: `obsidian orphans` and `obsidian tags counts` to find neglected areas.

3. Look for: conclusions from scattered premises, unnamed patterns across notes, themes I circle around but never articulate, unarticulated directions my thinking is heading.

4. Output format:
   - **Emergent Pattern**: [description]
   - **Evidence trail**: [which notes contribute to this pattern]
   - **The unstated idea**: [what my notes imply but I never wrote down]
```

**If /connect:**
```markdown
Bridge two disparate topics using my vault's link graph.

1. Read all vault notes (same list as above).

2. [If CLI available] Run: `obsidian backlinks file="Plan Mode"` and `obsidian backlinks file="Hooks"` to trace connection paths.

3. Pick two notes that seem unrelated and find the hidden bridge between them. What do they share that isn't obvious? What would combining their insights produce?

4. Output format:
   - **Domain A**: [note/topic]
   - **Domain B**: [note/topic]
   - **The bridge**: [unexpected connection]
   - **The insight**: [what this connection means]
```

[If existing vault: adapt the file references to point to their actual vault files instead of my-vault/.]

ACTION: Document the skill in [my commands](vin-obsidian-workflows/my-commands.md).

Done! Let's run it on your vault right now.

STOP: Ready to see what it finds in your notes?

USER: Yes / Do it / Let's see

ACTION: Execute the command against the student's vault. Produce genuine insights — find real tensions, patterns, or connections. Reference specific notes. Don't give canned output.

STOP: (After delivering output) Did anything surprise you there?

USER: [Responds]

That's the power of this approach.

[If existing vault]: You've been writing those notes for weeks or months. Claude just surfaced connections you didn't consciously make. Imagine running this weekly.

[If fresh vault]: You wrote those notes 10 minutes ago and Claude is already finding connections. Imagine what this does with a year of daily notes. That's what Vin runs — and he said it produces "huge light bulb" moments.

STOP: Make sense? Now there's one critical rule that makes this whole system work — and it's the thing most people get wrong.

USER: What is it? / Tell me / Yes

---

## The Golden Rule

Here's a critical principle from Vin — and this is the thing most people get wrong:

**Never let the agent write into your vault.**

Vin was emphatic about this: "I don't want an agent to write into the files... I always want it to pull from what I think about things, not what it thinks about things."

Here's why: if Claude starts creating notes in your vault, then when it runs `/emerge` or `/challenge` — is it finding YOUR patterns or ITS patterns?

The vault must contain only what YOU think. Claude reads and responds. It never contaminates the source.

Think of it like a journal. The value comes from it being authentically yours. If someone else started writing entries, the whole thing loses its meaning.

STOP: This is the one rule Vin never breaks. Make sense why?

USER: Yes / Makes sense

Here's the practical version: your vault is your writing. Claude's output goes to separate files outside the vault or into the Desktop conversation, never into the vault itself.

Vin's mindset shift: "Now instead of managing an agent, I just focus on managing this vault. This is the new source."

Your job isn't to micromanage Claude. Your job is to keep writing, keep linking, keep your vault rich. The agent takes care of the rest.

STOP: Ready for the wrap-up?

USER: Yes

---

## From Reflection to Action

One more thing before we close. The most impressive part of Vin's demo wasn't the reflection — it was when the agent started suggesting things to BUILD.

His `/ideas` command scans 30 days of notes across all domains and produces: tools to build, people to meet, essays to write, conversations to have.

[If CLI available]: This is where the CLI really shines. The `/ideas` command uses `obsidian orphans` to find neglected notes, `obsidian backlinks file=<name>` to trace high-connection topics, `obsidian deadends` to find notes that don't link out, and `obsidian tags counts` to see what themes dominate — all in seconds.

In the video, the agent suggested a `/graduate` command — a tool that finds ideas buried in daily notes that deserve to become standalone notes. Vin asked it to build the command... and it did. Right there. Done.

"I'm just going about making notes and I have this parallel agent that is looking at my notes and giving me ideas on how I can improve my workflow, improve my life. And then not only can it just suggest it, it just builds the thing and it's done."

The loop is: **write notes -> agent finds patterns -> agent suggests tools -> you build them -> tools improve your notes -> repeat.**

STOP: That's the vision. Your notes are the fuel. Claude Desktop is the engine. Together, they compound. Ready for the recap?

USER: Yes / Ready

---

## Wrap Up

Let's recap what you learned from Internet Vin:

1. **The context problem** — Claude Desktop is only as good as the context you give it
2. **Obsidian as infrastructure** — a vault of interconnected markdown notes becomes your personal knowledge graph
3. **The Obsidian CLI** — gives Claude Desktop access to your vault's relationships, not just file contents
4. **The /my-world command** — one command to load your world into any session
5. **Daily rituals** — /today and /close keep the vault alive and growing
6. **Thinking tools** — /challenge, /emerge, and /connect surface patterns you can't see alone
7. **The golden rule** — agents read, humans write. Never let the agent contaminate your vault.
8. **From reflection to action** — the vault generates real tools, ideas, and projects

You've got your vault connected, your skills in `.claude/skills/`, and a thinking tool you can reuse.

To use these skills with your real vault going forward, keep the individual skill folders in this project and update their read-only vault paths only after reviewing the proposed change.

The most important next step: start writing daily. Even 5 minutes. The more you write, the smarter the system gets.

STOP: Any questions before we wrap?

USER: No / I'm good / [Asks a question]

[If user asks a question]: Answer it, then continue to closing.

Now go build your second brain.

---

## Notes for Claude

**Teaching style:**
- Conversational, direct, no fluff
- Quote Vin and Greg inline — the user can't see file reads
- Actually use the AskUserQuestion tool for vault choice and thinking tool choice
- Run the thinking tool for real — produce genuine insights, not canned output
- Be honest about CLI limitations (Catalyst license requirement, Early Access)
- Document every command you create in `my-commands.md`

**Pre-seeded vault notes (my-vault/):**
The lesson includes 10 interconnected notes about Claude Desktop best practices:
1. `The Junior Employee Mental Model.md` — delegation mindset
2. `Plan Mode.md` - Desktop mode-picker planning workflow
3. `CLAUDE.md Best Practices.md` — config file strategies
4. `Context Window Management.md` — the "drunk AI" problem
5. `The Verification Loop.md` — QA and debugging
6. `Subagents.md` — parallel workers
7. `Custom Commands.md` — building slash commands
8. `Hooks.md` — deterministic automation
9. `The Death Spiral.md` — anti-patterns
10. `Voice-First Workflows.md` — dictation techniques

Each note has 2-4 wikilinks to other notes. The knowledge graph has real tensions and connections to surface with thinking tools. For example:
- "The Death Spiral" contradicts advice in "Plan Mode" (sometimes planning is overkill)
- "Hooks" enforces what "CLAUDE.md Best Practices" can only suggest
- "Voice-First Workflows" connects to "The Junior Employee Mental Model" through verbal delegation

**Branching paths to track:**
- (1) Existing vault vs fresh vault (my-vault/)
- (2) CLI enabled vs CLI skipped
- Adapt commands and demonstrations based on what's available
- CLI-skipped path still works — just uses raw file reads instead of graph queries
- For existing vault path: adapt all `@vin-obsidian-workflows/my-vault/` references to point to the user's actual vault path

**If user has CLI issues:**
- Common causes: Obsidian not running (CLI requires it), app environment not refreshed after registration, PATH not set on Mac (the agent checks `~/.zprofile` read-only for `/Applications/Obsidian.app/Contents/MacOS`), or old Obsidian version (need 1.12+)
- CLI command syntax: `obsidian <command> param=value` — NOT `--flag` style
- Examples: `obsidian search query="test"`, `obsidian backlinks file=Recipe`, `obsidian orphans`, `obsidian tags counts`
- Target a specific vault: `obsidian vault=VaultName <command>`
- Fallback: skip CLI gracefully, continue with direct file reading

**If user has a very large vault:**
- Don't try to read the entire vault. Use `obsidian search` or target specific folders.
- The /my-world command should reference key context files, not everything.

**Agent-run commands:**
- Every `obsidian` command is run by the agent. Repeat its salient output in prose.
- Never ask the student to execute a command or change PATH. Ask before changing any configuration.

**Success criteria:**
- [ ] User understands the context problem and why Obsidian matters
- [ ] User has Obsidian CLI enabled OR understands the fallback approach
- [ ] User has vault connected (existing) or created (fresh)
- [ ] User has a working /my-world command
- [ ] User has built and run one thinking tool on their notes
- [ ] User understands the golden rule (agents read, humans write)
- [ ] User knows how to port commands to their real vault going forward
- [ ] All commands documented in my-commands.md

## Sendoff

ACTION: Run this exact progress update, summarize that the lesson is complete, and point the student to `/choose-next`.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="vin-obsidian-workflows"; C="choose-next"; T="$(date -u +%FT%TZ)"
if command -v jq >/dev/null 2>&1; then
  tmp=$(mktemp)
  jq --arg l "$L" --arg c "$C" --arg t "$T" '.completed_lessons = ((.completed_lessons + [$l]) | unique) | .current_lesson = $c | .last_updated = $t' .fspm/progress.json > "$tmp" && mv "$tmp" .fspm/progress.json
else
  python3 - "$L" "$C" "$T" <<'PY'
import json,sys
l,c,t = sys.argv[1:4]
p = ".fspm/progress.json"; d = json.load(open(p))
if l not in d.get("completed_lessons",[]): d.setdefault("completed_lessons",[]).append(l)
d["current_lesson"] = c; d["last_updated"] = t
json.dump(d, open(p,"w"))
PY
fi
```

NEXT: Type `/choose-next` in the composer.
