---
name: start-3-4
description: |
  Module 3.4: GitHub. Saves the quiz project to GitHub.
---

## Setup

At the start of this lesson, copy the bundled lesson support files into the workspace if they are not already present. Briefly tell the student what files are available if you mention them during the lesson.

```bash
cp -rn .agents/skills/start-3-4/assets/* . 2>/dev/null || true
```

## Teaching Rules

Follow the course teaching rules in `.agents/skills/_shared/teaching-rules.md`. In short: follow the lesson script in order, speak naturally, stop at each STOP/CHECK point, and do not break the fourth wall.

# 3.4 GitHub

Right now, your quiz only exists on your computer.

If your laptop stops working or you delete the files, it's gone. And we can't put it on the internet yet.

We need to save it to the cloud first. That's what GitHub is for.

STOP: Have you used GitHub before?

USER: Yes / No / A little

---

GitHub is like Google Drive, but for code.

It saves your code to the cloud, keeps a history of every change, and lets you undo mistakes.

It's also how we'll get your quiz onto the internet - the service we use needs to grab your code from somewhere.

Your project on GitHub is called a "repository" (or "repo" for short). You'll hear developers use that word a lot.

STOP: Make sense?

USER: Yes

---

First, you need a GitHub account.

STOP: Do you have a GitHub account? If not, I can open the signup page for you.

USER: I have one / Open it for me / I'll do it myself

ACTION: If they want it opened, open `https://github.com` if browser opening is available; otherwise ask the student to open it manually.

STOP: Let me know when you have an account and are ready to continue.

USER: Ready

---

Now I need to connect to your GitHub account so I can save your code there.

I'm going to download some tools that let me work with GitHub directly, so I can handle the git workflow for you.

This might open your browser to log in - just follow the prompts and come back when it's done.

ACTION: Set up GitHub CLI:

1. Check if already installed:
```
gh --version
```

2. If NOT installed:
   - On Mac: `brew install gh`
   - If brew fails or not on Mac: Tell user to go to https://cli.github.com and download manually, then come back

3. Once installed, authenticate visibly:
```bash
gh auth login --web --git-protocol https
```

4. Read the output. If it shows a one-time code or browser URL, show it clearly in chat and open the device auth page if browser opening is available:
```bash
open https://github.com/login/device
```

5. Tell user: "GitHub is asking you to authorize the CLI. Enter this code if GitHub shows one: [CODE FROM OUTPUT]. Click Authorize, then let me know when you're done."

STOP: Let me know when you've authorized it.

USER: Done

ACTION: Verify authentication worked:
```bash
gh auth status
```

If successful, continue. If not authenticated, troubleshoot:
- They may not have completed the browser flow - ask them to try again
- The background process may have timed out - run the auth command again

---

Now let's save your code to GitHub. I'll make it private by default so only you can see it.

ACTION: Run the following commands in order:

1. Navigate to the quiz project folder:
```
cd quiz-project
```

2. Initialize git (if not already done):
```
git init
```

3. Add all files:
```
git add .
```

4. Create initial commit:
```
git commit -m "Initial commit - coffee personality quiz"
```

5. Create GitHub repo and push:
```
gh repo create quiz-project --private --source=. --push
```

Done! Your code is now saved to GitHub. Developers call this "pushing" your code - you're pushing it up to the cloud.

Let me open it for you so you can see it.

ACTION: Get the repo URL and open it:
```
gh repo view --web
```
(This opens the GitHub repo in your browser)

STOP: Do you see your project on GitHub?

USER: Yes!

---

Your quiz is now backed up and ready to go live.

From now on, whenever you want to save your work, just ask me to "push to GitHub" and I'll save your latest changes.

There's a lot more to GitHub - collaboration, version history, branching - and there will be a full module on it in the future. But for now, the important thing is: your code lives somewhere it can be accessed to put on the internet.

That's exactly what we're doing next.

**Next up:** In 3.5, we put your quiz on the internet! We're going to connect GitHub to a service called Vercel, and you'll get a real URL you can share with anyone. This is the finish line.

STOP: Ready to go live? Say "let's go" or type /start 3 5

USER: Let's go

---

## Important Notes for Codex

- GitHub CLI (gh) is the easiest way to handle auth - avoid asking users to set up SSH keys
- The `--private` flag is important - users don't want their quiz code public by default
- If they already have a repo named quiz-project, gh will error - help them pick a different name
- The `gh repo view --web` command is much cleaner than trying to construct the URL
- If brew isn't available, cli.github.com has installers for all platforms
- Next.js projects already have a .gitignore so node_modules won't be committed

## Success Criteria

- User has a GitHub account
- GitHub CLI is installed and authenticated
- Code is committed and pushed to a private GitHub repository
- User can see their repo on github.com
- User understands they can ask to "push to GitHub" to save future changes
