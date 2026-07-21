# Plan Mode

Overwhelmingly the #1 specific technique across everything I've read about Claude Code.

Choose **Plan** in the Desktop mode picker to have Claude outline its approach before acting. This is a design review: you would never ship a feature without reviewing the spec. Don't let Claude ship code without reviewing the plan.

## The Pattern

1. Choose **Plan** in the mode picker, or use **Cmd+Shift+M** until Plan is selected
2. Claude outlines what it will do
3. You review, adjust, approve
4. Claude executes

Aakash Gupta calls this "Checkpoint + Iterate" — have Claude generate a plan, review it, create checkpoints, use Esc twice to rewind if it goes off track.

## When to Use It

- Any task touching multiple files
- Architecture decisions
- Anything you'd want to review before it happens
- When you're not sure what the right approach is

## When to Skip It

0xDesigner's counter-signal: "you don't need a 'planning mode' or any fancy approaches" — for many tasks, just talking to Claude naturally is enough. I agree for small stuff.

The rule I follow: if the task takes more than one prompt to describe, use plan mode.

## Connection to [[Context Window Management]]

Plan mode is also a context saver. A well-planned execution uses fewer tokens than a chaotic back-and-forth. Less context waste → longer productive sessions.

See also: [[The Death Spiral]] for what happens when you skip planning.
