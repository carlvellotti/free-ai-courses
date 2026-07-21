# Context Window Management

"AI context is like milk; it's best served fresh and condensed." — YK/ykdojo

This is the thing that catches people off guard. As conversations get longer, quality degrades. The model loses track of earlier context, starts repeating itself, forgets instructions, makes mistakes it wasn't making before.

Ross Mike calls this the "drunk AI" problem. His rule: don't go over 50% context usage. The moment you see 40-50%, start a new session.

## The Core Strategy

**Fresh context > stale context, always.**

- One feature per chat. Mixing features is coding drunk.
- Start new sessions often rather than fighting with stale context
- Use `/clear` for a clean conversation or **Cmd+N** for a new Desktop session after writing a handoff
- Use `/context` to audit what's consuming your budget

## Handoff Documents

The killer pattern: at the end of a session, ask Claude to summarize the current state into a handoff doc. Then use `/clear` or **Cmd+N** and link that doc. Fresh context + a written handoff.

This connects to [[Subagents]] — each subagent gets its own fresh context window. It's like giving a task to a new employee who isn't tired yet.

## The Cost Connection

Context management IS cost management. Every token you waste on bloated context is money. The practitioner who spent $417 on a word game — one animation fix cost $20 because Claude needed to re-learn the entire codebase. That's a [[Context Window Management]] failure.

Cost-saving strategies:
- Focused prompts = smaller context = less cost
- Handoff docs between sessions
- [[Subagents]] for isolated tasks
- Use Sonnet for simple tasks, Opus for complex ones

## Related

- [[Plan Mode]] — planning reduces context waste
- [[CLAUDE.md Best Practices]] — a lean CLAUDE.md preserves context
- [[The Death Spiral]] — context bloat is a contributing factor
