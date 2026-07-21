# CLAUDE.md Best Practices

CLAUDE.md is the single most important project context file for Claude Desktop. A root `CLAUDE.md` and `.claude/rules/*.md` load in full. Nested `CLAUDE.md` files load lazily when Claude works with files in their subtree.

Anthropic's official framing of the extension stack:
- **CLAUDE.md** = always-on context (who you are)
- **Skills** = on-demand knowledge and workflows
- **MCP** = external connections (Jira, Slack, etc.)
- **[[Custom Commands]]** = shortcuts for repeated prompts
- **[[Hooks]]** = deterministic automation

## What Goes in CLAUDE.md

Keep it short. "Keeping your CLAUDE.md as short as possible is a fantastic forcing function for simplifying your codebase and internal tooling."

My rule: if you can't explain something concisely, it's not ready for CLAUDE.md.

Three sections that matter:
1. **What this project is** — one paragraph
2. **Domain rules** — the stuff Claude will get wrong without guidance
3. **Validation** — how to check that output is correct

## The Power of Negative Constraints

This was a revelation: "Codify failures into your project's CLAUDE.md. Adding specific negative rules (e.g., 'NEVER use X method for Y task') is often more valuable than positive guidelines because it prevents the AI from repeating costly mistakes."

When Claude makes a mistake, immediately add a NEVER rule. Your CLAUDE.md evolves from positive guidelines to battle-tested negative constraints over time.

Net Ninja flagged this too — Claude has a habit of using new features/hooks everywhere in your project after creating them. You need explicit "don't do this" rules.

## The Hierarchy

CLAUDE.md files cascade:
- `~/.claude/CLAUDE.md` - global preferences
- `project/CLAUDE.md` and `project/.claude/rules/*.md` - full project context
- `project/src/CLAUDE.md` - nested context that loads when that subtree is touched

This maps to [[The Junior Employee Mental Model]] — it's the onboarding doc. [[Context Window Management]] matters here too: a bloated CLAUDE.md eats into your working context.
