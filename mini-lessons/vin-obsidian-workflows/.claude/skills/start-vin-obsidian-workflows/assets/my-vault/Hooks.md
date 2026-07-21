# Hooks

Hooks are deterministic automation that runs at specific lifecycle points. They're the "must-do" rules that complement the "should-do" suggestions in [[CLAUDE.md Best Practices]]. Hook support and schemas evolve, so check current documentation before applying an example.

The key distinction: CLAUDE.md is a suggestion. Hooks are enforced. Claude can ignore CLAUDE.md. It can't ignore a hook.

## How They Work

Hooks fire on lifecycle events:
- **PreToolUse** — before Claude uses a tool (firewall)
- **PostToolUse** — after Claude uses a tool (quality gate)
- **Stop** — when Claude finishes responding (review check)
- **SessionStart** — when a session begins (preload context)

They communicate via stdin/stdout and exit codes. A hook can block an action, modify it, or just log it.

## The Best Use Cases

**PreToolUse firewall** — prevent Claude from modifying certain files:
```json
{
  "event": "PreToolUse",
  "command": "check-if-protected-file.sh"
}
```
This connects directly to the golden rule from Vin's Obsidian setup — agents read, never write. You could enforce this with a hook.

**Stop quality gate** — require specific markers before Claude can finish:
A hook that checks for `// COMPLETE` comments before allowing Claude to stop. Forces thoroughness.

**Skill activation** — UserPromptSubmit hooks that detect patterns and load relevant skills automatically.

## The Power

"Hooks are the deterministic 'must-do' rules that complement the 'should-do' suggestions in CLAUDE.md."

Where [[Custom Commands]] are on-demand (you trigger them), hooks are automatic (they trigger themselves). Together they're your automation layer.

## Related

- [[CLAUDE.md Best Practices]] — suggestions vs enforcement
- [[Custom Commands]] — on-demand vs automatic
- [[The Verification Loop]] — hooks can automate verification
- [[The Junior Employee Mental Model]] — hooks are like mandatory processes a junior must follow
