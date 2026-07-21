---
name: news
description: "This skill should be used when the user wants a briefing on recent news about a specific topic. Searches for and summarizes the latest developments, formatted as a concise briefing."
---

# News Briefing

Search the web for recent news on the topic provided by the user (passed as the argument). The user must provide a topic — if no argument is given, ask what they want a briefing on.

Find 5-6 notable stories from the past few days. Prioritize tech press sources — TechCrunch, The Verge, Ars Technica, VentureBeat, Wired, and similar outlets.

Format each story as a quick headline with a one-line summary:

- **[Headline]** ([Source]) — [One sentence on what happened and why it matters.]

Keep it scannable. No paragraphs, no fluff. Each story should be one bullet point.

After all stories, end with a **Signal** line: one sentence identifying the common thread or pattern across the stories.
