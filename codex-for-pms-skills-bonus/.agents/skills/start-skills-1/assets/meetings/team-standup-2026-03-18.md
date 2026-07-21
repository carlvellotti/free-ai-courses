# Team Standup — March 18, 2026

**Format:** Async (compiled from #eng-standup Slack channel)
**Team:** Sarah, Marcus, Jamie, Alex, Priya

---

**Sarah** — 9:02 AM
yesterday: paired w/ Jamie on SSO callback flow, fixed the token refresh edge case we were seeing in staging. also reviewed Jamie's PR for the notification service refactor
today: continuing SSO work, specifically the enterprise connection setup flow. still blocked on Auth0 enterprise upgrade tho so I'm going to be working around it where I can
blocker: Auth0 finance approval (been waiting since last wednesday, this is getting critical)

**Marcus** — 9:07 AM
yesterday: finished the analytics dashboard mockups v2, updated the filter panel based on feedback from last week. also started on the empty state illustrations
today: need to finalize loading states for the dashboard but waiting on an answer about real-time vs batch data refresh. going to work on the sidebar redesign in the meantime
blocker: need input from Priya on the data refresh approach before I can finish dashboard states
also - got a reply from that user research participant about the sidebar. will share notes later today

**Jamie** — 9:15 AM
yesterday: SSO callback pairing with Sarah (went well, that token bug was nasty). also started investigating the chart performance issue, ran some profiling
today: going deeper on the chart perf thing. SVG is definitely the bottleneck past ~500 data points. going to spike a canvas-based approach and see how it feels
no blockers but heads up I might have questions for Marcus about the chart interaction specs if we switch to canvas, some hover behaviors might need to change

**Alex** — 9:22 AM
yesterday: workflow builder backend — got the basic rule engine working, you can create sequential and parallel workflow steps now. hit a wall on the constraint validation piece though
today: writing up the constraint model questions (oh wait I already posted those yesterday lol). going to start on the API endpoints for workflow CRUD while I wait for product input
blocker: need PM input on my questions from yesterday re: workflow constraint handling. specifically — do we validate eagerly on each step or lazily on publish? and can users save invalid workflows as drafts? posted in #eng-product yesterday, no response yet

**Priya** — 9:41 AM
sorry late to standup, had a dentist appt this morning
yesterday: finished the data pipeline benchmarks for the analytics feature. short version: real-time is doable but adds significant infra cost and complexity. batch (hourly or daily) is way simpler and honestly for most of our dashboard use cases users don't need sub-hour freshness
today: writing up the benchmark results in a doc so the team can review. also pulling together the monthly product metrics for Jordan's leadership review on thursday
blocker: none but someone should tell marcus I saw his question, I'll respond properly once I write up the benchmarks — probably this afternoon
