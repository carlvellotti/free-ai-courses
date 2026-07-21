# Module 1.6: Project Rules - Teaching Script

Welcome to Module 1.6: Project Rules

Here you'll discover the "secret sauce" that's been helping me throughout this entire course

We're going to run an experiment - create the same thing twice and see what happens

STOP: Ready to see some magic?

USER: Ready

---

First, let's write a product announcement

TaskFlow is launching a new feature: "Workspace Sharing"

STOP: Ask me directly: "Write a product update announcing the new Workspace Sharing feature"

USER: Write a product update announcing the new Workspace Sharing feature

ACTION: Generate product-update-baseline.md
	- Generic writing, inconsistent terminology (mixes "Workspace" and "Project")
	- No persona references
	- Could be any company's announcement
	- Save as product-update-baseline.md

Done! I just wrote a product update for you

STOP: Review it - what do you think? Is it good? Does it seem specific or generic?

USER: Evaluates (likely says it's decent/good)

---

[Respond based on input]

It's not bad, right? But look closer at the details

Does it use "Workspace" consistently? Or does it say "Project" in some places?

Does it mention Sarah, Mike, or Alex - our TaskFlow personas?

Is the writing style distinctly TaskFlow? Or could this be any product announcement?

Here's the issue: I had zero context about YOUR product, YOUR terminology, YOUR style

So I had to guess and make it generic

STOP: Do you see what I mean about it being generic?

USER: Confirms

---

Now it gets interesting

I said I had zero context... but that's not entirely true

I HAVE had context all along in this course - that's why I keep talking about TaskFlow correctly

The secret is hiding in plain sight in your project files

Let me show you where to look

STOP: In the file explorer on the left, find and open the folder called `.agent` - do you see it?

USER: Confirms

---

Perfect! Now inside that .agent folder, there's a folder called `rules`

This is where project rules live - it's a special folder that Antigravity always checks

STOP: Open the `rules` folder - what files do you see in there?

USER: Reports seeing course-instructor.md and taskflow-context.md

---

Exactly! Those two files are "project rules"

They've been loaded into EVERY conversation we've had in this course

That's why I know about TaskFlow, why I use "Workspace" correctly, why I reference Sarah and Mike

These rules are automatically applied to every chat session - no @mention needed

They're like my persistent memory for this project

STOP: Want to see what's inside these rules files?

USER: Yes

---

ACTION: Read .agent/rules/course-instructor.md

This one tells me how to behave - my teaching personality, how to run the course

ACTION: Read .agent/rules/taskflow-context.md

This one tells me about TaskFlow - the company, the product, the people

These rules auto-apply to every chat session in this project

No @mention needed, no copying and pasting context every time

They just work automatically - like giving me persistent memory

They are things I always know, for every conversation. They are powering this course.

STOP: Starting to make sense?

USER: Confirms

---

Now here's where it gets really fun

You're going to create a NEW rules file

But instead of writing it yourself, I'm going to write it for you

Very meta moment: using Antigravity to create rules FOR Antigravity!

This file will define your terminology, personas, and writing style preferences

STOP: Ask me this: "Help me create .agent/rules/taskflow-terminology.md with our product terminology and style preferences"

USER: Help me create .agent/rules/taskflow-terminology.md with our product terminology and style preferences

ACTION: Generate .agent/rules/taskflow-terminology.md
	- Terminology section: "Workspace" not "Project", "Task" not "To-do", etc.
	- Personas section: Reference Sarah (Enterprise Admin), Mike (IC Engineer), Alex (Team Lead)
	- Writing style: Active voice, Oxford commas, no emojis, conversational but professional
	- Output preferences: Use real names in examples, include specific use cases

Done! I just created your rules file

STOP: Review the file - does this capture your preferences?

USER: Reviews and confirms

---

Perfect! Now for the magic moment

Ask me the EXACT same prompt you used at the beginning

Word for word: "Write a product update announcing the new Workspace Sharing feature"

Same prompt, but now I have the rules loaded

STOP: Type that exact command again

USER: Write a product update announcing the new Workspace Sharing feature

ACTION: Generate product-update-with-rules.md
	- Uses "Workspace" consistently throughout
	- References Sarah, Mike, and/or Alex with realistic use cases
	- Matches the TaskFlow writing style (active voice, conversational, professional)
	- Feels like it came from someone who KNOWS the product
	- Save as product-update-with-rules.md

Done! I just wrote your second product update

But this one should feel very different. Check it out.

STOP: Compare it to the first version - what changed?

USER: Observes the differences

---

Same exact prompt

Completely different output

First version: Generic, inconsistent, could be any company

Second version: Uses "Workspace" correctly, mentions real personas, sounds like TaskFlow

That's the power of rules - they give me context without you having to repeat it every time

STOP: Make sense?

USER: Confirms

---

Quick explainer – there are two types of rules

Project rules: What you just created - stored in .agent/rules/ in THIS project folder
	- Only apply to this project
	- Great for company/product-specific context
	- Example: TaskFlow terminology, personas, product details

Global rules: Stored in Antigravity's settings (we're not using these in the course)
	- Apply to ALL projects you work on
	- Great for personal preferences that cross projects
	- Example: Your writing style, how you like PRDs formatted, preferred meeting note structure

STOP: Makes sense? Project = this folder only, Global = everywhere

USER: Confirms

---

When should you use project rules in real PM work?

Product terminology: Like we just did - "Workspace" not "Project", company-specific terms

Product context: Your personas, tech stack, key features, competitive positioning

Writing style guides: Your company's voice, formatting preferences, documentation standards

Team conventions: How your team writes PRDs, names branches, structures documents

Think of rules as "the stuff you'd put in a new teammate's onboarding doc"

Once it's in rules, you never have to repeat it again

STOP: Make sense?

USER: Responds

---

Excellent! You now understand the secret weapon

Rules = persistent context that auto-applies to every conversation

No @mentions, no copying prompts, no repeating yourself

This is how you make Antigravity truly understand YOUR product and YOUR team

There are more examples of Antigravity rules you might want to use in the reference document

And now... here's the big moment

You've just completed ALL OF MODULE 1!

That's six complete lessons mastering Antigravity fundamentals

Let me recap everything you've learned:
	- Module 1.1: Welcome to TaskFlow - introduction to the course
	- Module 1.2: Interface basics - how to navigate Antigravity's Agent Manager
	- Module 1.3: First tasks - @mentions and file references
	- Module 1.4: Templates & workflows - using and refining template documents
	- Module 1.5: Autonomy modes - Agent-driven, Agent-assisted, Review-driven, Planning vs Fast
	- Module 1.6 (this one): Project rules - persistent context that makes everything better

You now know how to USE Antigravity - the interface, the mechanics, the features

That's not a small thing - you have the complete foundation

Most people never get this far. You're already ahead of the curve.

Now we go deeper.

Module 2 is where things get really practical for PMs

We're going beyond "how to use Antigravity" into "how to do your actual PM work with Antigravity"

You'll write real PRDs, analyze competitive research, process user feedback data

All the messy, real-world PM tasks you do every week

This is where Antigravity becomes a true force multiplier for your work

Ready to level up?

STOP: When you're ready to start Module 2, type /start-2-1

USER: Acknowledges
