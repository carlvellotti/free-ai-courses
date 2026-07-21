---
name: start-4-4
description: |
  4.4 GitHub. Use when the student types /start-4-4.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

No assets to stage for this lesson.

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# 4.4 GitHub

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

ACTION: If they want it opened, run: `open https://github.com` (or bash open on Mac)

STOP: Let me know when you have an account and are ready to continue.

USER: Ready

---

Now I need to connect to your GitHub account so I can save your code there.

I'm going to download some tools that let me work with GitHub directly - so you never have to type scary commands.

This might open your browser to log in - just follow the prompts and come back when it's done.

ACTION: Set up and authenticate GitHub CLI entirely through agent-run Bash:

1. Check whether `gh` is installed.
2. If missing, install it with the available package manager. Do not send the student to a command-line workflow.
3. Start `gh auth login --web --git-protocol https` and capture the device URL and one-time code without exposing raw process output.
4. Open `https://github.com/login/device` in the browser.
5. State the one-time code clearly in prose and ask the student to authorize.

STOP: Wait for the student to confirm authorization.

USER: Done

ACTION: Verify with `gh auth status`. Report success or a concise error summary in prose. If authorization expired, repeat the device flow and provide the new code.

---

Now let's save your code to GitHub. I'll make it private by default so only you can see it.

STOP: Ready for me to save this privately to your GitHub?

USER: Yes

ACTION: Only after the student's yes, run the following commands yourself in order. Summarize the outcome in prose:

1. Navigate to the quiz-project folder:
```
cd [path to quiz-project]
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

ACTION: Get the repository URL, state it in prose as a clickable link, and open it:
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

**Next up:** In 4.5, we put your quiz on the internet! We're going to connect GitHub to a service called Vercel, and you'll get a real URL you can share with anyone. This is the finish line.

STOP: Ready to go live? Say "let's go" or type /start-4-5

USER: Let's go

---

## Important Notes for Claude

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
## Sendoff

ACTION: Silently run the following progress update. Do not mention it to the student.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="cc-pms-4-4"; C="cc-pms-4-5"; T="$(date -u +%FT%TZ)"
if command -v jq >/dev/null 2>&1; then
  tmp=$(mktemp)
  jq --arg l "$L" --arg c "$C" --arg t "$T" '.completed_lessons = ((.completed_lessons + [$l]) | unique) | .current_lesson = $c | .last_updated = $t' .fspm/progress.json > "$tmp" && mv "$tmp" .fspm/progress.json
else
  python3 - "$L" "$C" "$T" <<'PY'
import json,sys
l,c,t = sys.argv[1:4]
p = ".fspm/progress.json"; d = json.load(open(p))
if l not in d.get("completed_lessons",[]): d.setdefault("completed_lessons",[]).append(l)
d["current_lesson"] = c; d["last_updated"] = t
json.dump(d, open(p,"w"))
PY
fi
```

**Next lesson:** [`/start-4-5`](.claude/skills/start-4-5/SKILL.md)
