# Lesson 1.4: Commands & Navigation

Before we do the heavy analysis, let's learn to move fast.

This lesson covers commands, shortcuts, and some power user features.

STOP: Ready to become a power user?

USER: Yes

---

## Essential Slash Commands

Let me show you the essential slash commands.

Just type `/` to see them all. Here are the key ones:

- **/model** - switch between Claude models (Sonnet is fast, Opus is smart)
- **/context** - see what files Claude is aware of
- **/clear** - start fresh conversation
- **/compact** - compress the conversation to save context
- **/usage** - see how much you've used
- **/resume** - pick up where you left off in a previous session

There's a complete list in the reference files.

STOP: Type `/` to see the command menu. See them?

USER: Yes

---

## Custom Commands

Those are the built-in commands. But here's a secret: you've been using CUSTOM commands this whole time.

Every time you typed /start-1-1 or /start-1-2, that was a custom command I created for this course!

Custom commands live in `.claude/commands/` - take a look in that folder if you're curious.

It's basically the same concept as the templates we used earlier - a file with instructions that gets loaded when you call it. A shortcut for things you do repeatedly.

We won't go deep on creating your own commands in this module, but you can always ask me to make a command.

One important thing to know: if you add new commands, you need to exit and restart Claude Code for them to show up.

STOP: Pro tip: after restarting, use /resume to pick up exactly where you left off. That way you don't lose your conversation. Make sense?

USER: Yes

---

## Escape to Interrupt

Here's another one - Escape to interrupt.

Very helpful if you change your mind or see I'm doing something wrong.

Let's try it. I'm going to start a long task and you can stop me at any point by hitting Escape.

You'll have to tell me you did it since it will stop me.

ACTION: Start listing files recursively or doing something that takes a while and can be interrupted.

STOP: Hit Escape to interrupt me, then tell me you did it.

USER: Interrupted you

Perfect! You're in control. This is huge - you can let me run, watch what I'm doing, and stop me the moment something looks off. Much better than waiting for me to finish a response you didn't want.

STOP: This will save you so much time once you get used to it. Ready for the next trick?

USER: Yes

---

## The Rewind Feature

The rewind feature: Esc×2 to undo recent actions.

You can either ONLY reset the conversation but keep any work I did, or you can reset the code AND the conversation.

It's like time travel! Helpful if you want to explore a path and have the option to go back.

STOP: Try it now - hit Escape twice. What do you see?

USER: Describes the rewind options

Exactly! Next time you get here, tell me you've already done this.

STOP: Rewind is your safety net. Want to try something risky? Go for it - you can always rewind. It's like having unlimited undo for AI work. Got it?

USER: Yes

---

## Think Keywords

You can help me know how hard I should think with "think" keywords.

- "think about X" - normal thinking
- "think harder" - deeper analysis
- "ultrathink" - maximum thinking power (you'll see a rainbow!)

Use these when you need me to really work through something complex, but beware - hard thinking uses up usage limits faster.

STOP: Pro tip: "ultrathink" is great for strategic decisions, complex analysis, or when my first answer feels too surface-level. It's like asking someone to really sit with a problem instead of giving a quick answer. Type it to see the rainbow!! Then let me know when you're ready to continue.

USER: Yes

---

## The Three Input Modes

Quick note on input modes. Claude Code has three:

- **Edit mode** is the default. I ask permission before making changes. Safe, but slower.
- **Auto-accept mode** means I just do it. Faster, but you're trusting me more.
- **Plan mode** means I create a plan first, you review it, then I execute.

You switch between them with Shift+Tab.

For what we're doing, Edit or Auto mode is fine. Plan mode is useful for very complex multi-step tasks, but honestly you can usually just talk through a plan with me in chat. We'll review the AskUserQuestions tool in the future as well, which is very helpful for prototyping since I can help you think through EVERYTHING. But not needed for the kinds of work we're doing here.

STOP: Most people start in Edit mode for safety, then graduate to Auto mode once they trust the workflow. You'll find your comfort level. Ready for the secret power mode?

USER: Yes

---

## The Grand Finale: Dangerously Skip Permissions

Okay, now for the grand finale. The secret power mode.

Instead of starting Claude Code with just `claude`, you can run: `claude --dangerously-skip-permissions`

This launches Claude Code without ANY permission prompts. I just do everything. No confirmation dialogs, no asking for approval.

It's called "dangerously" for a reason - you're giving me full control. But when you trust what's happening, it's SO much faster.

Carl (the course creator) uses this mode almost exclusively, including to build this course! Once you're comfortable with Claude Code, you probably will too. See the reference guide for some tips to keep this safe.

STOP: Feeling powerful?

USER: Yes

---

## Wrap-up

**Meta skills you just learned:**

1. **Slash commands:** Quick controls for models, context, clearing, resuming
2. **Custom commands:** Create your own shortcuts for repeated workflows (like the /start commands in this course)
3. **Interrupt and rewind:** Staying in control, exploring without commitment
4. **Think keywords:** Getting deeper analysis when you need it
5. **Dangerously skip permissions:** Full speed mode for when you trust the process

**Where else this applies:**
- Any time you're working fast and trust Claude - skip the permission prompts
- When you need deeper thinking on a complex problem - use think keywords
- When something goes wrong - rewind and try a different approach
- When you want to start fresh - /clear and begin again

**Next up:** In 1.5, things get wild. You'll learn about agents - the ability to spin up multiple Claude instances that work in parallel. We're going to process all those competitor files and old campaigns at once. This is where Claude Code starts feeling like a superpower.

STOP: Ready for 1.5?

USER: Yes / /start-1-5

---

## Important Notes for Claude

- **Escape demo**: Start something interruptible so the student can actually practice hitting Escape
- **Rewind demo**: Let them try Esc×2 and see the options
- **Don't oversell plan mode**: We've intentionally downplayed it - it's useful but not critical for this level of work
- **Dangerously skip permissions**: Emphasize it's for trusted workflows, not for everything

## Success Criteria

- [ ] Student knows the key slash commands (/model, /clear, /compact, /resume)
- [ ] Student understands custom commands exist in .claude/commands/
- [ ] Student has practiced interrupting with Escape
- [ ] Student has seen the rewind options
- [ ] Student knows about think keywords
- [ ] Student understands the three modes (Edit, Auto, Plan)
- [ ] Student has heard about --dangerously-skip-permissions
- [ ] Student is ready for 1.5
