# Subagents

Subagents are Claude Desktop's way of running parallel workers. Each one gets its own fresh context window, like assigning a task to a new employee who isn't overloaded with everything else you've been working on.

The key insight: subagents solve the [[Context Window Management]] problem. Instead of cramming everything into one conversation, you delegate isolated tasks to fresh agents.

## The Three Types

1. **Explore agent** — reads files, searches codebase, answers questions about code. Read-only.
2. **Code agent** — can read AND write files, run commands. Full power.
3. **Custom agent** - defined in `.claude/agents/*.md`. Create or update the file, then `@`-mention that agent to hot-register and invoke it in the current Desktop session.

## When to Use Them

Boris Cherny runs 5 local sessions + 5-10 web sessions in parallel. That's extreme for most people. The practical version:

- **Research tasks** — send a subagent to explore a codebase or read docs while you keep working
- **Independent tasks** — two features that don't touch the same files? Parallelize.
- **Context isolation** — prevent a debugging rabbit hole from polluting your main session
- **Verbose operations** — code reviews, file analysis, anything that generates a lot of output you don't need to see

## The Pattern

Each subagent gets:
- A clear task description
- Relevant file paths or search scope
- Expected output format
- Its own fresh context window

The main session stays clean. You get a summary back.

## Related

- [[Context Window Management]] — subagents are the #1 tool for managing context
- [[The Junior Employee Mental Model]] — subagents ARE the junior employees
- [[Custom Commands]] — you can wrap subagent patterns into reusable commands
