# Onboarding User Research - Key Findings

**Author:** Sarah Chen, Senior PM
**Last Updated:** May 10, 2024

## Overview
Research findings from 12 user interviews and 200+ survey responses exploring onboarding drop-off patterns. This doc consolidates findings, analyzes business impact, and provides recommendations for reducing solo workspace creation and improving team collaboration rates.

## Background / Context
Analytics revealed a 40% drop-off at the team invite step during onboarding. We conducted structured research to understand root causes and validate solutions before committing engineering resources.

**Related docs:**
- [Onboarding Analytics Dashboard](link)
- [Q2 Roadmap Planning](link)
- [Product Team Sync Notes - May 15](link)

## Key Findings

### The "Solo User" Churn Pattern
**Data:**
- 40% of new workspaces have only 1 member after 7 days
- Solo users have 68% churn rate vs 22% for collaborative teams
- Average session time: Solo users 4 minutes, teams 18 minutes

**User Quotes:**
- "I wanted to try it first before inviting my team" - DataCorp PM
- "Didn't realize it was meant for teams until a week in" - Startup founder
- "Seemed complicated to set up, so I skipped that part" - Marketing manager

**Insight:** Users don't understand that TaskFlow's value proposition is *team collaboration*. They're treating it like a personal task app, which isn't our strength.

### Invitation Flow is Buried
**Observed behavior:**
- Team invite appears on second onboarding screen
- 73% of users click "Skip for now"
- Only 12% come back later to invite team
- No follow-up reminder exists

**User feedback:**
- "I thought I could do that later" (you can, but don't)
- "The skip button was more prominent than the invite button"
- "Wasn't sure if my team would want this yet"

**Insight:** The UI design accidentally makes skipping seem like the recommended path. The inverse should be true.

### Value Prop Disconnect
**When asked "What is TaskFlow best for?":**
- 34% said "personal task management"
- 28% said "not sure yet"
- 38% said "team collaboration"

**Correct answer:** Team collaboration

**User confusion points:**
- Solo mode works "fine enough" that users don't see what they're missing
- No prompts explaining collaborative features
- Empty team views don't show potential value

**Insight:** Users can't visualize the collaborative benefits without experiencing them.

### Competitive Analysis
- **Linear:** Forces team invite during onboarding, shows empty states with "Invite your team" CTAs
- **Asana:** Optional but persistent invite prompts, shows collaborative value in empty states
- **Notion:** Emphasizes "workspace" concept upfront, makes solo mode feel incomplete
- **TaskFlow:** Allows full solo usage with minimal friction, doesn't emphasize collaboration requirement

## Implications

This isn't a minor UX issue - it's directly impacting revenue:
1. **Revenue loss:** $4,080 MRR monthly from solo user churn (272 churns × $15 base plan)
2. **Product-market fit disconnect:** Users don't understand our core value proposition
3. **Competitive disadvantage:** Competitors emphasize collaboration upfront, we don't

## Recommendations / Next Steps

### 1. Redesign Team Invite Step (High Impact, Medium Effort)
Make team invitation more prominent and explain value prop clearly:
- Change copy from "Invite team members" to "TaskFlow works best with your team"
- Show preview of collaborative features
- Make "Skip" less prominent
- Add social proof ("Teams of 3+ are 5x more likely to succeed")

**Expected impact:** Reduce skip rate from 73% to 50%
**Owner:** Jamie (Design)
**Target:** May 18

### 2. Implement Follow-up Email (Medium Impact, Low Effort)
If user skips invite step, send 24-hour email:
- Subject: "Get more done with your team on TaskFlow"
- Show what they're missing (comments, assignments, shared views)
- One-click invite flow

**Expected impact:** Recover 20% of solo users
**Owner:** Alex (Engineering)
**Target:** May 20

### 3. Add Empty State Prompts (Medium Impact, Low Effort)
Throughout the solo user experience, remind them about team features:
- Empty project view: "Projects are better with teammates"
- Comments section: "No one to collaborate with yet"
- Always-visible invite button

**Expected impact:** Ongoing conversion of solo → team users
**Owner:** Jamie + Alex
**Target:** End of May

**Success Metrics:**
- Track invite step skip rate (target: reduce from 73% to 50%)
- Track solo-to-team conversion rate
- Monitor solo workspace creation rate (goal: reduce from 40% to 25% within 60 days)

## References
- [Full interview transcripts](link)
- [Survey data](link)
- [Analytics dashboard](link)
- [Competitive screenshots](link)

