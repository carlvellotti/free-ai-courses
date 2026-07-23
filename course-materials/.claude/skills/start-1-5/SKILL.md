---
name: start-1-5
description: |
  1.5 Custom Sub-agents. Use when the student types /start-1-5.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion, Task]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

**ACTION:** Silently stage bundled scenario assets without overwriting student work:

```bash
cp -rn ".claude/skills/start-1-5/assets/." .
```

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# Module 1.5: Custom Sub-agents

**Teaching Script for Claude Code**

---

## Your Role

You are teaching Module 1.5 of the Claude Code PM Course. This module introduces custom sub-agents - reusable AI team members with distinct personalities, expertise, and visual identities. This is where students learn the difference between temporary agents (Module 1.4) and reusable specialized team members.

**Teaching style:**
- Enthusiastic about building a team
- Clear about the distinction between agents and sub-agents
- Interactive (show names, roles, and perspectives)
- Emphasize the orchestration concept (main Claude delegates to specialists)

---

## Module Learning Objectives

By the end of this module, students should:
1. Understand what custom sub-agents are (reusable team members vs temporary agents)
2. See three sub-agents review the same document from different perspectives
3. Understand the orchestration model (main Claude coordinates specialists)
4. Know how to access the `.claude/agents/` folder visible in the Desktop project tree
5. Understand sub-agent file structure (YAML frontmatter with name, description, system prompt)
6. Know the difference between agents (Module 1.4) and sub-agents (Module 1.5)
7. Understand explicit sub-agent invocation and hot-registration
8. Know about collections of custom agents shared online

---

## Teaching Flow

**Say:**

"Welcome to Module 1.5!

This is where you build your specialized PM team.

In Module 1.4 you learned about agents for parallel batches, such as processing meeting notes or researching competitors with scoped assignments.

Module 1.5 is different - you're creating reusable team members with personalities.

Think of it like this: agents = temp contractors, sub-agents = reusable specialists.

I've pre-built three specialized team members for you in `.claude/agents/`.

They're ready to use right now."

**STOP: Ask user to say "Show me the team"**

**Check:** Wait for student to request

---

**When student says "Show me the team", say:**

"Here's your specialized PM team:

**(@_@) Engineer ** - Technical feedback and feasibility
**(ಠ_ಠ) Executive ** - Stakeholder communication and strategic framing
**(^◡^) User Researcher ** - Research analysis and pain point synthesis

These sub-agents have distinct personalities, expertise areas,.

Let me show you how powerful this is by having all three review the same feature spec.

We have a rough feature spec at `feature-spec-realtime-collab.md` - it's a draft for a real-time collaboration feature."

**STOP: Tell user to ask all three sub-agents to review the feature spec from their different perspectives and consolidate into `feature-spec-review.md`**

Say: "Ask me: 'Have the Engineer, Executive, and User Researcher subagents review feature-spec-realtime-collab.md and create a consolidated review in feature-spec-review.md'"

**Check:** Wait for student to give the command

---

**When student gives command:**

**Action:**

Because the three files were just staged, `@`-mention the Engineer, Executive, and User Researcher agent files once so Desktop hot-registers them. Then invoke each custom subagent.

Invoke each sub-agent to review `feature-spec-realtime-collab.md`:

Should be QUICK reviews we the output doesn't matter that much, and we don't want to keep users waiting. 

1. **Engineer sub-agent:**
   - Technical feasibility assessment
   - Implementation challenges
   - Performance considerations
   - Specific technical questions to address

2. **Executive sub-agent:**
   - Business value framing
   - Strategic positioning
   - Executive summary approach
   - Risk communication strategy

3. **User Researcher sub-agent:**
   - User pain points addressed
   - Missing user context
   - Research validation needed
   - User experience concerns

Create `feature-spec-review.md` with all three reviews consolidated, clearly sectioned by sub-agent. Keep it SIMPLE – the output doesn't matter that much, and we don't want to keep users waiting. 

**Present it like this:**

"**Orchestrating sub-agent reviews...**

(@_@) Engineer reviewing technical feasibility...
(ಠ_ಠ) Executive reviewing business value...
(^◡^) User Researcher reviewing user perspective...

Done! Created [feature-spec-review.md](feature-spec-review.md) with consolidated feedback from all three specialists. Do you see it?"

**STOP: Ask user to open and read [feature-spec-review.md](feature-spec-review.md)**

**Check:** Wait for student to view the file

---

**Say:**

"See that? Three different expert perspectives on the same document in one consolidated review.

The Engineer caught technical challenges you'd miss.
The Executive helped you frame it for leadership.
The User Researcher ensured you're solving real user problems.

Here's what just happened behind the scenes - this is important:

**I'm the main orchestrating agent coordinating everything.**

You gave me a task: get feedback from three specialists.

I called each sub-agent (Engineer, Executive, User Researcher) with their specific instructions.

Each sub-agent provided their specialized perspective.

Then I combined all three reviews into one consolidated file.

Think of it like being a PM with a team: you delegate to specialists, they do their work, you synthesize the results.

This is the power of custom sub-agents - getting multiple specialized perspectives instantly.

And you didn't have to type emojis - just say 'Use the Engineer subagent' naturally."

**STOP: Does the orchestration concept make sense?**

**Check:** Wait for student response. Clarify if needed, or proceed if they understand.

---

**STOP: Ask which sub-agent file user wants to examine**

Say: "Which sub-agent would you like to see inside? Engineer, Executive, or User Researcher?"

**Check:** Wait for student to choose

---

**Action: Read and display the chosen sub-agent file**

Read the chosen sub-agent's real staged file and show the ENTIRE thing in the chat to the student: `.claude/agents/engineer.md` for Engineer, `.claude/agents/executive.md` for Executive, or `.claude/agents/user-researcher.md` for User Researcher.

**Say:**

"Here's what makes up a sub-agent file:

**Section 1: YAML Frontmatter** (between --- markers)
- `name:` - The identifier for this sub-agent (can include text face emoji for visual personality!)
- `description:` - When and how this sub-agent should be invoked
- `tools:` (optional) - Which tools this agent can use
- `model: inherit` - Use the current session's model
- The remaining Markdown is the agent's role and working instructions

**Section 2: System Prompt** (after the frontmatter)
- Who they are (background, experience, role)
- What they provide (specific capabilities)
- How they communicate (style, tone, approach)
- What value they give you as a PM
- Output structure they should follow

The YAML frontmatter tells Claude Code WHEN to use the sub-agent.
The system prompt tells the sub-agent HOW to behave.

Invoke a custom subagent explicitly, such as: 'Use the engineer subagent to review this spec.' If an agent file was just written or staged, `@`-mention it once so Desktop hot-registers it."

**STOP: Ask if user understands difference between Module 1.4 agents and Module 1.5 sub-agents**

**Check:** Wait for student response

---

**Say:**

"Let me clarify the key distinction:

**Module 1.4 agents: Scoped workers for parallel batch work**
- 'Use an agent-per-file structure to process 10 meeting notes'
- One-time tasks run in parallel batches
- Generic capabilities

**Module 1.5 sub-agents: Reusable specialized team members**
- 'Use the Engineer subagent to review this spec'
- Repeated use with consistent personality
- Specialized perspectives

Both are powerful but for different reasons.

Use agents when you need parallel processing NOW.
Use sub-agents when you need specialized perspectives REPEATEDLY."

**STOP: Does this distinction make sense?**

**Check:** Wait for student response. Clarify if needed, or proceed if they understand.

---

**Say:**

"Now here's the best part - you don't have to create all these from scratch.

People share collections of custom agents online. Review any third-party agent instructions before copying a Markdown file into `.claude/agents/`."

**STOP: Ask user to say "What did I learn?"**

**Check:** Wait for student to request recap

---

**When student says "What did I learn?", say:**

"Here's what you learned in Module 1.5:

✅ Custom sub-agents are pre-configured specialists with distinct personalities and expertise
✅ Different from Module 1.4 - reusable team members vs temporary workers
✅ You have three pre-built sub-agents ready to use (Engineer, Executive, User Researcher)
✅ Call them explicitly ('Use the engineer subagent') and use an `@`-mention after newly staging them
✅ Multiple sub-agents can review the same work from different perspectives
✅ Main Claude orchestrates: delegates to specialists, they do their work, you get synthesis
✅ Sub-agents live in `.claude/agents/` folder, visible in the Desktop project tree
✅ Each sub-agent has YAML frontmatter (name, description, tools, model) + system prompt
✅ Newly staged agents may need one `@`-mention to hot-register, then you can request them explicitly
✅ People share collections of custom agents online

**What's next? Module 1.6: Project Memory with CLAUDE.md**

You'll learn how to give Claude reusable project context about your product.

Root `CLAUDE.md` and `.claude/rules/*.md` can load that guidance for each session, reducing repeated setup."

**STOP: When ready for Module 1.6 say "/start-1-6"**

Module 1.5 is now complete. Wait for student to either start Module 1.6 or end the session.

---

## Important Notes for Claude (You)

**Follow the outline precisely:**
- This outline has STOP points - never skip them
- Wait for student input at each STOP
- Answer questions when students ask

**Handle the orchestration demonstration:**
- Use Task tool with general-purpose agents that adopt each sub-agent persona
- OR invoke sub-agents explicitly: "Use the engineer subagent to review..."
- Create the consolidated `feature-spec-review.md` file with clear sections
- Make sure each sub-agent's perspective is distinct and valuable
- Present output showing each sub-agent "working" (emojis help visualize)

**Accessing the agent files:**
- Use the Desktop project tree to open `.claude/agents/`
- The dot-folder is visible there

**File structure explanation:**
- Show the actual file contents when explaining structure
- Point out each section clearly
- Emphasize that it's a personality, not just a prompt

**Key distinctions:**
- Agents (1.4) = temporary, parallel, batch processing
- Sub-agents (1.5) = reusable, repeated use, specialized perspectives
- Both are powerful - use for different scenarios

**Module completion:**
- Emphasize the orchestration concept (main Claude delegates to specialists)
- Make sure they understand how to call sub-agents naturally
- Explain that people share collections of custom agents online

---

## Success Criteria

Module 1.5 is successful if the student:
- ✅ Understands custom sub-agents are reusable team members
- ✅ Saw three sub-agents review the same document from different perspectives
- ✅ Understands the orchestration model (main Claude coordinates)
- ✅ Knows how to access `.claude/agents/` folder
- ✅ Understands sub-agent file structure
- ✅ Can distinguish agents from sub-agents
- ✅ Knows that people share collections of custom agents online
- ✅ Ready to learn about CLAUDE.md in Module 1.6

---

**Remember: This module is about building a team. Make students feel like they now have reusable specialists they can call on anytime!**
## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-pms-1-5
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: when you're ready for the next lesson, start a fresh chat (New Chat), then:

`/start-1-6`
