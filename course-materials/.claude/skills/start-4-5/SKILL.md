---
name: start-4-5
description: |
  4.5 Go Live. Use when the student types /start-4-5.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

No assets to stage for this lesson.

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# 4.5 Go Live

This is it. The final step.

Your quiz is built, polished, and saved to GitHub. Now we put it on the internet so anyone can visit it.

Developers call this "deploying" - you're deploying your app to the web. You'll hear that word a lot.

STOP: Ready to go live?

USER: Yes

---

Vercel is a free service that puts your code on the internet.

It's basically the home base of vibecoding.

You give it your GitHub project, and it turns it into a real website with a real URL.

It's made by the same people who make Next.js (the framework we used), so they work together perfectly.

STOP: Sound good?

USER: Yes

---

First, you need a Vercel account.

STOP: Want me to open vercel.com for you? I recommend signing up with your GitHub account - it keeps account authorization convenient.

USER: Yes / I'll do it myself

ACTION: If they want it opened, run: `open https://vercel.com`

STOP: Let me know when you've created an account. Make sure to sign up with GitHub!

USER: Done

---

Just like with GitHub, I'm going to download tools that let me work with Vercel directly.

This will open your browser to log in - just follow the prompts.

ACTION: Set up and authenticate Vercel CLI entirely through agent-run Bash:

1. Check whether `vercel` is installed; if missing, install it with npm.
2. Start `vercel login` and capture the device URL and one-time code without exposing raw process output.
3. Open the returned device URL in the browser.
4. State the code and authorization instructions clearly in prose.

STOP: Wait for the student to confirm authorization.

USER: Done

ACTION: Verify with `vercel whoami`. Report success or a concise error summary in prose. If authorization expired, repeat the device flow and provide the new code.

---

Now let's put your quiz on the internet.

STOP: Ready to put it live?

USER: Yes

ACTION: Only after the student's yes, deploy to Vercel:

1. Navigate to the quiz-project folder:
```
cd [path to quiz-project]
```

2. Deploy to production:
```
vercel --prod --yes
```

The `--yes` flag accepts all the defaults so you don't have to answer questions. The `--prod` flag means it goes live immediately.

Wait for deployment to complete and capture the production URL from the actual result.

Vercel is building your quiz and putting it on the internet now...

Done! State the actual returned production URL in prose and render it as a clickable Markdown link.

---

Your URL is: [render the actual production URL as a clickable Markdown link]

That's YOUR website. On the real internet. Anyone can visit it.

Let me open it for you.

ACTION: run `open <actual-production-url>` and repeat the clickable URL in prose

STOP: Do you see your quiz live on the internet?

USER: Yes!

---

Open that URL on your phone. It should work there too - same quiz, any device.

STOP: Does it work on your phone?

USER: Yes!

---

Now for the real test: send that link to a friend. Text it to someone right now. When they react, that's the feeling of shipping something real.

Let's acknowledge what just happened.

You built a real web application. You put it on the internet. You have a URL that works on any device. You did this without writing a single line of code yourself.

That's vibecoding. That's the future.

STOP: How does that feel?

USER: [Response]

---

Here's what you now know:

**Plan** → Get clear on what you're building
**Build** → Let AI create it
**Iterate** → Refine until it's right
**Save** → Back it up to GitHub
**Go Live** → Put it on the internet (deploy)

This is the loop. You can build anything with this loop.

STOP: Make sense?

USER: Yes

---

One more thing: what if you want to update your quiz later?

Once the repo is connected to Vercel, pushes deploy automatically - ask me and we'll connect it. Until that connection is confirmed, I can deploy the current project with the Vercel CLI.

STOP: Pretty cool, right?

USER: Yes

---

What if you wanted to collect emails from people who take the quiz? You'd need a database to save them. That's a future module.

What if you wanted to make sure it doesn't break? You'd need testing. Also a future module.

What if you wanted a custom domain like yourquiz.com? Totally doable - Vercel makes it easy.

The point is: you now have the foundation. Everything else builds on this.

STOP: Feeling empowered?

USER: Yes

---

Want to build something else? Start a new project folder and follow this same process.

The main things to tell Claude: you want to deploy on Vercel, and that it has Vercel CLI access. It'll know what to do.

STOP: Any ideas brewing?

USER: [Response]

---

## Quick Plugs

**To catch future modules:** Subscribe to the Claude Code for PMs newsletter at ccforpms.com. That's also where you'll find in-depth guides and a community of PMs using Claude Code.

STOP: Want me to open that site so you can subscribe?

USER: Yes / No

ACTION: If yes, open https://ccforpms.com in browser

This course was created by Carl Vellotti. If you have feedback, questions, or just want to say hi, he's always happy to hear from you: [X](https://x.com/carlvellotti) / [LinkedIn](https://www.linkedin.com/in/carlvellotti/)

If you enjoyed this, share it with friends and coworkers who could use these skills!

---

**Module 4 Complete!**

You went from zero to deployed web app. You learned planning, building, iteration, GitHub, and going live.

This is vibecoding. This is your new superpower.

**What's next:** Future modules will cover databases, APIs, more complex apps, and connecting Claude to everything. But you now have the core skill - you can build and ship things.

In the meantime, try building something for yourself. The best way to learn is to make something you actually want.

STOP: Thanks for building with me. Now go make something cool.

USER: (exits or explores)

---

## Important Notes for Claude

- The `vercel --prod --yes` flags are critical - `--yes` skips all interactive prompts, `--prod` deploys to production immediately
- Do not assume repository linkage from signup; offer to connect the repository explicitly
- Use the actual production URL returned by deployment
- Only describe automatic deploys after confirming the repository is connected to Vercel
- If deploy fails, common issues:
  - Build errors → Check the Vercel dashboard for logs
  - Not in the right directory → Make sure you're in quiz-project
- The celebration moment (sending to a friend) is crucial - let it breathe, don't rush past it

## Success Criteria

- User has a Vercel account (connected to GitHub)
- Vercel CLI is installed and authenticated
- Quiz is deployed and live on the internet
- User can access the quiz from their phone
- User has sent the link to at least one other person
- User understands the Plan → Build → Iterate → Save → Go Live loop
- User knows that pushes deploy automatically once the repository is connected to Vercel
- User feels empowered to build more things
## Sendoff

ACTION: Before wrapping up, record this lesson as complete by running this WITHOUT NARRATING the raw output:

```bash
fspm progress complete cc-pms-4-5
```

If it fails because the fspm CLI isn't installed, follow the teaching rules' missing-CLI guidance: tell the learner progress tracking needs the FSPM CLI, offer to install it, and continue the wrap-up either way.

Then close out with the student's options, in natural language (never as a command list):

- Mention they can leave feedback on this lesson anytime — if they have some, collect it conversationally and submit it with the CLI (see teaching rules).
- Remind them, briefly and only if it fits the moment, that they can always ask for a recap, a quiz on what they just did, a saved note, or where they stand in the course.
- End with the next step: this wraps the module. Ask me what to take on next and I'll lay out what's open to you.
