# Custom Commands

Custom skills are reusable slash workflows you create yourself. They live in `.claude/skills/<name>/SKILL.md` and can be triggered with `/name`.

This is where Claude Desktop starts feeling like YOUR tool instead of a generic assistant.

## How They Work

Create `.claude/skills/my-command/SKILL.md` with matching `name` frontmatter and instructions. When you type `/my-command`, Claude reads that skill and follows the instructions.

Examples:
- `/review` — code review with your team's standards
- `/plan` — generate a PRD from a one-sentence idea
- `/debug` — structured debugging workflow
- `/standup` — morning briefing that reads your project state

## The Vin Obsidian Connection

This is exactly what Internet Vin built for his Obsidian workflow:
- `/context` — loads your entire vault's context in one shot
- `/today` — morning planning ritual
- `/close` — evening reflection
- `/challenge` — pressure-test your beliefs using vault history
- `/emerge` — surface hidden patterns in your notes
- `/ideas` — 30-day vault scan for actionable insights

The power move: commands that reference your [[CLAUDE.md Best Practices]] and read your personal files to build context automatically.

## Building a PM Toolkit

Aakash Gupta's PM workflow was basically a chain of commands: meeting transcript → PRD → Jira tickets → Slack summary → dashboard.

You could build each step as a command:
- `/transcript-to-prd`
- `/prd-to-tickets`
- `/daily-metrics`

Each one is a pattern you've validated manually, then codified. See [[The Verification Loop]] — only automate what you've verified.

## Related

- [[Hooks]] — commands are on-demand; hooks are automatic
- [[CLAUDE.md Best Practices]] — commands complement CLAUDE.md
- [[Subagents]] — commands can spawn subagents for complex tasks
