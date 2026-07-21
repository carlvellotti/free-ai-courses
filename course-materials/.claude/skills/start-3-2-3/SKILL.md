---
name: start-3-2-3
description: |
  3.2.3 Marketing & Launch Assets. Use when the student types /start-3-2-3.
disable-model-invocation: true
allowed-tools: [Read, Write, Bash, AskUserQuestion]
---

## Setup

Read `.claude/rules/teaching-rules.md` and follow it for everything below.

**ACTION:** Silently stage the shared image runtime and this lesson's bundled assets without overwriting student work:

```bash
cp -rn ".claude/skills/start-3-1-1/assets/." .
```

Teach this lesson from the bundled script. Follow every Say block verbatim, stop at every Check gate, and have the agent perform every Action. Do not expose instructor metadata.

# Module 3.2.3: Marketing & Launch Assets

Welcome to Module 3.2.3: Marketing & Launch Assets!

You did it.

The pitch landed. The CTO signed off on the architecture. The CEO approved the roadmap. The board gave the green light.

TaskFlow Mobile is launching next month.

STOP: Exciting, right?

USER: Yes

---

There's just one problem: marketing needs assets. And they needed them yesterday.

App store graphics, social ads, announcement visuals - the whole launch kit.

Good news: you're about to create all of it in the next few minutes.

STOP: Ready to build your launch assets?

USER: Ready

---

Quick reminder: you can reference styles from `style-library.html` or just describe what you want.

The Marketing category has great options for this module - but feel free to explore others too.

STOP: Makes sense?

USER: Yes

---

## Part 1: App Store Hero

First up: the App Store feature graphic.

This is the hero image users see when they find TaskFlow Mobile in the App Store or Play Store. It needs to communicate the value instantly - "task management for teams on the go."

We will create the hero from a clear creative spec instead of relying on a pre-existing reference:

- TaskFlow Mobile shown as task management for teams on the go
- Confident modern product-marketing aesthetic
- Phone-centric composition with readable TaskFlow branding
- Energetic movement that suggests mobile coordination across shifts
- 16:9 landscape output for this lesson's campaign set

STOP: Ask me to generate the TaskFlow Mobile app-store hero from that spec.

USER: Generate the app-store hero

ACTION: Use `image_gen.py` to generate the hero from the described spec and save it as `outputs/app-store-hero.png`. State the exact saved path, provide [outputs/app-store-hero.png](outputs/app-store-hero.png), and optionally run `open outputs/app-store-hero.png`.

The generated hero is the App Store feature graphic for this exercise. If the student requests changes, continue the image session, save a new version under `outputs/`, state the exact path, provide a Markdown link, and optionally run `open <path>`.

STOP: Does this make you want to download the app?

USER: Response

ACTION: If user wants changes, iterate on the graphic. If satisfied, continue.

That's your app store presence sorted.

STOP: Ready for the ad campaign?

USER: Yes

---

## Part 2: Social Ad Creative

Next: social media ads.

TaskFlow is B2B, so LinkedIn is the primary channel - but these work for any platform.

A good ad creative shows the problem and the solution in one glance. Let's create an ad showing operations managers going from chaos (clipboard, scattered texts) to clarity (TaskFlow Mobile).

STOP: Ask me to create a social ad showing the before/after transformation.

USER: Create a social ad / Generate the LinkedIn ad

ACTION: Generate social ad creative
- Split or comparison concept: chaos vs clarity
- Left/before: overwhelmed manager with clipboard, radio, scattered papers
- Right/after: same manager confidently using TaskFlow Mobile
- Bold, attention-grabbing style suitable for social feeds
- Include space for headline text (or generate with text)
- 1:1 aspect ratio (works across platforms)
- Save to outputs folder with descriptive name

ACTION: Provide the path to the output image so user can view it.

I will state each exact saved path under `outputs/` and provide a Markdown link. Open it from the Desktop project tree.

Quick note: your output obviously depends on your inputs. This is a proof of concept - if you have ads or designs you love, you could use them as style references and generate in that aesthetic instead. Same process, your preferred style.

STOP: Can you see the transformation story in a single image?

USER: Response

ACTION: If user wants changes, iterate on the ad. If satisfied, continue.

---

Want to try a variant? Different ad styles work for different audiences - maybe a more polished corporate look, or something more dynamic.

STOP: Want to generate an alternate version, or move on to the announcement graphic?

USER: Response (alternate version or continue)

ACTION: If user wants alternate, generate another variant with a different style. If they want to continue, proceed to Part 3.

STOP: Ready for the launch announcement?

USER: Yes

---

## Part 3: Feature Announcement Graphic

Final asset: the launch announcement graphic.

This goes in the blog post, the email blast, the social announcement - everywhere you're saying "TaskFlow Mobile is here."

It should feel like an event. Something new and exciting is arriving. Think: "Introducing TaskFlow Mobile" energy.

STOP: Ask me to create a launch announcement graphic.

USER: Create a launch announcement / Generate the announcement graphic

ACTION: Generate launch announcement graphic
- "Introducing TaskFlow Mobile" visual concept
- Hero shot of the app - polished, premium feel
- Launch/announcement energy (could be subtle motion blur, spotlight effect, or clean reveal aesthetic)
- Professional enough for press release, exciting enough for social
- 16:9 aspect ratio
- Save to outputs folder with descriptive name

ACTION: Provide the path to the output image so user can view it.

I will state each exact saved path under `outputs/` and provide a Markdown link. Open it from the Desktop project tree.

STOP: Does this feel like a launch moment? Want to make any updates?

USER: Response

ACTION: If user wants changes, iterate on the graphic. If satisfied, continue.

---

Perfect - you now have your launch announcement ready to go.

## Wrap-Up

Let's look at what you just created:

1. **An App Store feature graphic** - your storefront presence
2. **A social ad creative** (maybe multiple variants) - your campaign assets
3. **A launch announcement graphic** - your "we're here" moment

That's a complete launch asset kit - built in minutes.

STOP: Pretty powerful, right?

USER: Yes

---

## The Big Picture

Let's zoom out for a moment.

Think about what you've actually built in this course.

You now understand how the most powerful image generation model ever made works - inside and out.

You know the prompting principles. The session mechanics. How to iterate. When to use references.

But that's just the foundation.

You've learned how to supercharge Gemini by pairing it with Claude Code.

Natural language commands - no clicking through menus. Instant iteration - "make it bluer" and it happens. No context switching - you stay in your flow.

This is faster and more powerful than any wrapper app.

STOP: Makes sense?

USER: Yes

---

And here's the real unlock: you built a compounding system.

Your style library in `style-library.html` grows more valuable with every project. Every style you extract, every prompt you save - it compounds.

Next time you need a journey map, you've got your go-to style ready. Next time you need an architecture diagram, same thing.

Most people generate random images and forget about them.

You now have a professional-grade creative pipeline:

- **The most powerful model** (Gemini)
- **The most powerful AI assistant** (Claude Code)
- **A system that compounds over time** (your style library)

This is how you actually leverage AI for real work.

STOP: Any questions about what you've built?

USER: Response

---

## Congratulations

You've completed Nano Banana - the image generation course.

From your first generation in Module 3.1.1 to launching a product with professional visuals just now. You went from "how does this work?" to having a complete creative toolkit.

The style library is yours to keep building. Every project makes it more valuable.

STOP: Congratulations! Any final questions?

USER: Response

---

Thanks for learning with us.

Now go build something amazing.

---

## Important Notes for Claude

- **File paths:** Always provide absolute paths when telling users where to find files.
- **Image generation:** Use the `image_gen.py` module via Python. Start a new session at the beginning of each major generation to keep sessions clean.
- **Style library:** If user references a style number, look up the prompt in `style-library.html` (in the 3.1.4 module folder).
- **Iteration:** If any image doesn't turn out well, offer to regenerate or refine it. Use the session to iterate.
- **Output naming:** Use descriptive names like `taskflow_app_store_hero.png`, `taskflow_social_ad_chaos_to_clarity.png`, `taskflow_launch_announcement.png`.
- **Module transition:** This is the last Nano Banana module. End its content with congratulations, then run the progress Action and point the student to `/start-4-1` for the next course module.
- **Thesis delivery:** The "Big Picture" section should feel like a genuine moment of reflection, not a sales pitch. Let it land.
- **Opening images:** State the exact path and link it. Optionally run `open <path>` for the student.

## Success Criteria

The module is complete when the user has:
- [ ] Generated an App Store feature graphic for TaskFlow Mobile
- [ ] Generated at least one social ad creative showing problem → solution
- [ ] Generated a launch announcement graphic
- [ ] Understands the three-part thesis: powerful model + powerful assistant + compounding system
- [ ] Feels a sense of completion and accomplishment for finishing Nano Banana
## Sendoff

ACTION: Silently run the following progress update. Do not mention it to the student.

```bash
mkdir -p .fspm
[ -f .fspm/progress.json ] || printf '{"name":null,"completed_lessons":[],"current_lesson":"","last_updated":""}' > .fspm/progress.json
L="cc-pms-3-2-3"; C="cc-pms-4-1"; T="$(date -u +%FT%TZ)"
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

**Next lesson:** [`/start-4-1`](.claude/skills/start-4-1/SKILL.md)
