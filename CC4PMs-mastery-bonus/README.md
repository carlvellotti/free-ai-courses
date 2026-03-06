# CC4PMs Mastery Bonus: Claude Code Skills & Commands

Three power-ups for Claude Code that make it dramatically more useful.

<img src="meme.webp" alt="Claude Code at the moment" width="400" />

| Skill | What It Does | Type | Prerequisites |
|-------|-------------|------|---------------|
| `/consult-the-council` | Ask GPT, Gemini, and Grok the same question — get 3 perspectives at once | Command | API keys for OpenAI, Google, xAI |
| `/spin-up` | Force Claude to delegate work to parallel subagents instead of doing everything in one thread | Command | None |
| `/web-research` | Upgraded web research with Tavily search + Firecrawl scraping | Skill | Tavily MCP server, Firecrawl CLI |

## Quick Concepts: Skills vs Commands

Claude Code has two extension types:

- **Commands** (`.claude/commands/`) — Slash commands you invoke manually (e.g., `/consult-the-council`). They're prompt files that tell Claude what to do.
- **Skills** (`.claude/skills/`) — Automatic behaviors Claude activates when relevant. They include trigger conditions, allowed tools, and reference docs. You can also invoke them manually.

Both live in your project's `.claude/` directory.

---

## Installation

### 1. `/consult-the-council` — Multi-Model Council

Ask Claude to consult GPT, Gemini, and Grok simultaneously and synthesize their answers. Great for hard decisions, architecture debates, or getting unstuck.

**Install:**

```bash
# Copy the command file
cp consult-the-council/consult-the-council.md YOUR_PROJECT/.claude/commands/

# Copy the Python script (put it wherever makes sense for your project)
cp consult-the-council/consult_council.py YOUR_PROJECT/scripts/
```

> **Important:** Update the script path in `consult-the-council.md` (line 31) to match where you put `consult_council.py`.

**Prerequisites:**

```bash
# Install Python dependencies
pip3 install openai google-genai

# Set API keys (add to your .env or export them)
OPENAI_API_KEY=sk-...       # https://platform.openai.com/api-keys
GEMINI_API_KEY=...           # https://aistudio.google.com/apikey
GROK_API_KEY=xai-...         # https://console.x.ai
```

The script loads keys from a `.env` file in your project root, or from environment variables.

**Usage:**
```
/consult-the-council Should I use a monorepo or polyrepo for my microservices?
```

**Customization:** Edit `consult_council.py` to change models, reasoning levels, or add/remove providers.

---

### 2. `/spin-up` — Subagent Delegation

Forces Claude to break your request into subtasks and run them through parallel subagents. The main conversation stays clean — only the plan, dispatches, and final summary appear. All the heavy lifting happens in background agents.

This is especially useful for:
- Tasks that touch many files
- Research-heavy requests
- Anything you'd rather not watch Claude do step-by-step

**Install:**

```bash
cp spin-up/spin-up.md YOUR_PROJECT/.claude/commands/
```

**Prerequisites:** None. This is just a prompt.

**Usage:**
```
/spin-up
```
Claude will ask you what to work on, then break it into parallel subtasks.

---

### 3. `/web-research` — Tavily + Firecrawl Web Research

Gives Claude a proper research workflow: Tavily for fast search/discovery, Firecrawl for deep page scraping. Way better than the built-in `WebSearch` and `WebFetch` tools.

**Install:**

```bash
# Create the skill directory and copy the file
mkdir -p YOUR_PROJECT/.claude/skills/web-research
cp web-research/SKILL.md YOUR_PROJECT/.claude/skills/web-research/
```

**Prerequisites:**

**Tavily MCP Server** (free tier: 1,000 searches/month):
1. Get an API key at [tavily.com](https://tavily.com)
2. Add to your Claude Code MCP config (`.claude/settings.json` or via `claude mcp add`):

```bash
claude mcp add tavily -- npx -y tavily-mcp@latest
```

Then set the env var:
```bash
export TAVILY_API_KEY=tvly-...
```

Or add it to your MCP config with an `env` block.

**Firecrawl CLI** (free tier: 500 credits/month):
1. Get an API key at [firecrawl.dev](https://www.firecrawl.dev)
2. Install the CLI:

```bash
npm install -g firecrawl
firecrawl auth # paste your API key
```

**Usage:**

The skill activates automatically when you ask Claude to research something:
```
Research the latest pricing trends for developer tools
```

Or invoke directly:
```
/web-research What are the top alternatives to Notion in 2025?
```

---

## Notes

- **Model versions** in `consult_council.py` are set to the latest as of early 2025. Update them as new models release.
- **API costs** — Consult-the-council runs 3 API calls with max reasoning. Expect ~$0.50-2.00 per query depending on response length. Tavily and Firecrawl have generous free tiers.
- These work in any Claude Code project — just copy the files into your `.claude/` directory.
