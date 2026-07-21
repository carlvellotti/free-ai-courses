# Module 2.2: Analyze Data - Teaching Script

Welcome to Module 2.2: Analyze Data! This module teaches you how to use Antigravity for the complete data-driven PM workflow: Discovery → Impact Estimation → Experiment Analysis. You're going to learn how Antigravity makes data analysis 10x faster than spreadsheets. Here's what normally takes 4-6 hours in Excel: you'll do it in 30 minutes with Antigravity. The scenario: You're the Senior PM for Activation at TaskFlow. Your activation rate has been stuck at 45% for 6 months and leadership is asking what you're going to do about it.

**STOP: Ready to use Antigravity to figure out what's wrong?**

**USER: Confirms ready**

---

Let me show you the complete workflow we'll follow. Here are the 3 phases:
- **Phase 1: Discovery** - Find the problem (analyze funnel data, extract survey themes, identify drop-off points)
- **Phase 2: Impact Estimation** - Build the business case (create ROI model, 3 scenarios, secure leadership buy-in)
- **Phase 3: Experiment Analysis** - Analyze the results (review topline metrics, segment by user type, check quality & leading indicators)

This is how great PMs work: discover with data, estimate impact, build, analyze results, iterate.

**Pro tip:** For heavy data analysis like this, consider switching to **Gemini 3 Pro (High)** for best results.

**STOP: Make sense? Ready to dive in?**

**USER: Confirms**

---

Perfect! Now let me explain the data files we'll be using. I have 4 CSV files with real data from TaskFlow. Important note about CSVs: They won't render nicely in Antigravity like markdown files. Antigravity can't preview CSV files visually. But here's the magic: Antigravity can read them and present the data in formatted tables for you. No need to open Excel or build formulas - just ask Antigravity to analyze the data. If you want to see the raw data yourself, you can open them in Excel, Google Sheets, or VS Code.

Here's what each dataset contains:
- activation-funnel-q4.csv: User journey data through signup → first task created → first task completed → invite sent
- user-survey-responses.csv: 800 survey responses about onboarding confusion and feature requests
- taskflow-usage-data-q4.csv: Product usage patterns (signups, conversion rates, time-to-value)
- onboarding-experiment-results.csv: A/B test data from 8,000 users testing guided onboarding

**STOP: Make sense how we'll work with these CSV files?**

**USER: Confirms**

---

Great! Let's dive into Phase 1: Discovery. First question: WHERE are users getting stuck in the activation funnel? Let's ask Antigravity to analyze the funnel data to find the drop-off points.

**STOP: Ask me: "review @activation-funnel-q4.csv and analyze it to find where users are dropping off in the activation flow"**

**USER: review @activation-funnel-q4.csv and analyze it to find where users are dropping off in the activation flow**

---

**ACTION: Read activation-funnel-q4.csv. Count users at each funnel stage (signup, created_first_task=TRUE, completed_first_task=TRUE, invited_teammate=TRUE). Calculate completion rates at each stage. Present results as a formatted table. Identify the biggest drop-off point and calculate the drop-off percentage. Explain what this means for TaskFlow's activation problem.**

**ACTION: After presenting the analysis, explain: "Notice what just happened: Antigravity analyzed 10,000 rows of funnel data in seconds. No formulas, no pivot tables - just ask for the analysis you need and Antigravity delivers it."**

**STOP: Why do you think users are abandoning tasks they just created? A) Confusion/overwhelmed by interface, B) Too much friction in the flow, C) Missing key features, D) Technical issues**

**USER: Chooses A, B, C, or D**

---

**ACTION: Store user's choice in memory for personalized response**

[If A] Good instinct - let's see if the data supports that confusion is the culprit

[If B] Interesting theory - let's validate if friction is the real issue

[If C] Could be - let's check what users are asking for

[If D] Let's see if technical issues show up in the data

Now let's validate your hypothesis with user research. We have survey data from 800 recent signups who answered questions about onboarding confusion.

**STOP: Ask me: "review @user-survey-responses.csv and analyze it to extract the top themes explaining why users drop off at task completion"**

**USER: review @user-survey-responses.csv and analyze it to extract the top themes explaining why users drop off at task completion**

---

**ACTION: Read user-survey-responses.csv. Analyze the 'feature_request' field to identify top themes and count frequency of each. Calculate percentages. Also analyze 'confusion_during_onboarding' field to extract powerful user quotes (2-3 representative quotes). Check if there are any patterns by company_size. Present findings with theme counts/percentages and memorable quotes. If the user chose option A earlier, validate their hypothesis with the data.**

**ACTION: After presenting the analysis, say: "See how easy that was? Antigravity just analyzed 800 survey responses and extracted themes in seconds. With traditional tools, you'd be manually reading surveys and tallying responses for hours."**

**STOP: Based on this data, what feature should we build? A) Task templates library, B) Sample project pre-populated with example tasks, C) Video tutorial walkthrough, D) Simplified task creation interface**

**USER: Chooses A, B, C, or D**

---

[Acknowledge their choice briefly]

For this module, we're going to move forward with option B: Guided Onboarding with a sample project. The concept: When new users sign up, show them a pre-populated sample project with 5-6 example tasks. Each task demonstrates what good looks like: clear title, detailed description, assigned owner, due date. Users complete these samples to learn the system, then create their own project. Now let's document our discovery findings.

**STOP: Ask me: "Create activation-problem-analysis.md that synthesizes the funnel data, survey insights, and proposed guided onboarding solution"**

**USER: Create activation-problem-analysis.md that synthesizes the funnel data, survey insights, and proposed guided onboarding solution**

---

**ACTION: Create activation-problem-analysis.md that synthesizes all the discovery work. Include sections for: (1) Problem Statement with the key drop-off percentage, (2) Quantitative Evidence from the funnel analysis, (3) Qualitative Evidence with survey themes and quotes, (4) Segmentation Insight about which user segments are most affected, (5) Proposed Solution describing the Guided Onboarding with sample project concept, (6) Expected Outcome explaining how this will help. Make it executive-ready and well-formatted.**

**ACTION: After creating the file, say: "Antigravity just synthesized funnel data + survey insights into a polished executive-ready document. Normally this synthesis and writing takes an hour - Antigravity did it in seconds."**

**STOP: Open activation-problem-analysis.md - do you see the complete discovery findings?**

**USER: Confirms**

---

Excellent! Phase 1 Discovery is complete ✓

We've identified the problem (60% drop-off) and proposed a solution (guided onboarding). Now comes Phase 2: Impact Estimation. Before we commit 4 months of engineering time, we need to answer: What's the business impact? Leadership wants to see: How much will activation improve? What's the revenue impact? What's the ROI?

I have an impact estimation framework in impact-estimation-framework.md. It uses the formula: Impact = Users Affected × Current Rate × Expected Lift × Value per Action. The framework helps you build three scenarios (pessimistic, realistic, optimistic) to show the range of outcomes.

**STOP: Ask me: "use @impact-estimation-framework.md and explain how to use it for this guided onboarding feature"**

**USER: use @impact-estimation-framework.md and explain how to use it for this guided onboarding feature**

---

**ACTION: Read impact-estimation-framework.md and explain the core formula and the three-scenario approach. Then explain how to apply it to guided onboarding by walking through each component (Users Affected, Current Rate, Expected Lift, Value per Action). Emphasize that the key is modeling three scenarios to show the range of outcomes.**

Now let's build the impact model for guided onboarding using the framework. We'll ask Antigravity to analyze your usage data and build the ROI projection with three scenarios.

**STOP: Ask me: "use @taskflow-usage-data-q4.csv and @impact-estimation-framework.md and build three ROI scenarios (pessimistic, realistic, optimistic) for the guided onboarding feature"**

**USER: use @taskflow-usage-data-q4.csv and @impact-estimation-framework.md and build three ROI scenarios (pessimistic, realistic, optimistic) for the guided onboarding feature**

---

**ACTION: Read taskflow-usage-data-q4.csv to get monthly_signups, baseline_activation_rate, avg_ltv_activated_user, and engineering_cost_per_month. Use the impact estimation framework to create guided-onboarding-roi-scenarios.md with three complete scenarios (Pessimistic at 20th percentile, Realistic at 50th, Optimistic at 80th). For each scenario, model different adoption rates (low/medium/high), different activation lifts (conservative/moderate/strong), calculate incremental activated users per month, monthly revenue impact, 3-year revenue, and ROI vs. the engineering investment (assume 4 months, 2 engineers). Include a Key Assumptions section documenting all inputs. Make reasonable assumptions for adoption rates and lift percentages that follow a pessimistic/realistic/optimistic pattern.**

**ACTION: After creating the file, summarize the key takeaways: highlight the ROI for each scenario, note that even the pessimistic case shows positive ROI, mention the strategic value beyond just the numbers, and state the total engineering investment.**

**STOP: Would you pitch this to leadership and ask for approval? A) Yes, strong ROI even in pessimistic case, B) Need more data to be confident, C) ROI too uncertain to commit**

**USER: Chooses A, B, or C**

---

[If A] Great instincts - most leadership teams would green-light this given the ROI

[If B] Fair concern - but at some point you have to make a call with incomplete data

[If C] Understandable caution, but the pessimistic case still shows 3.2x ROI

In the real world, leadership would likely approve this. Strong ROI even in pessimistic case, strategic importance, relatively small investment. So let's say they approve it! Your team builds Guided Onboarding over 4 weeks. You launch it as an A/B test: 4,000 users in treatment (with guided onboarding), 4,000 users in control (current experience). The experiment runs for 4 weeks and now results are in. Phase 2 Impact Estimation is complete ✓. Now for Phase 3: Experiment Analysis - the moment of truth.

**STOP: Ready to analyze the results?**

**USER: Confirms**

---

**ACTION: Read the first 5-10 rows of onboarding-experiment-results.csv and display them as a formatted table to show the data structure. Then explain what columns are in the dataset and what we'll be analyzing (primary metric first, then segments, then quality metrics).**

**STOP: Ask me: "use @onboarding-experiment-results.csv and analyze it to compare control vs treatment activation rates with statistical significance"**

**USER: use @onboarding-experiment-results.csv and analyze it to compare control vs treatment activation rates with statistical significance**

---

**ACTION: Read onboarding-experiment-results.csv. Count users in each cohort (control vs treatment). For each cohort, count how many have completed_first_task=TRUE and calculate the activation rate. Calculate the lift in percentage points. Present results in a formatted table. Note whether the result is statistically significant (you can assume significance if lift is >5pp with 4000 users per cohort). Then react to the results: compare the actual activation rate to our 58% realistic projection and note whether this is underwhelming or meets expectations.**

**STOP: Based on these topline results, what's your call? A) Ship it anyway - any lift is good, B) Iterate more to improve the feature, C) Kill it - not worth the investment**

**USER: Chooses A, B, or C**

---

**ACTION: Store user's choice for personalized response**

[If A] Interesting - you're willing to ship despite disappointing topline

[If B] Understandable - the results don't match projections

[If C] Hold on - don't give up yet!

Here's where Antigravity really shines: when topline looks disappointing, it's effortless to dig deeper. With Excel, segmenting data means rebuilding pivot tables and formulas - takes 20-30 minutes. With Antigravity, it's just one more command and you get instant answers. The best part: iteration is free - not satisfied with one view? Ask for another.

We haven't segmented the data yet - remember, our target market is small teams (5-20 people), not enterprise. What if the feature works great for small teams but poorly for enterprise? The topline would look modest, but we'd actually have a huge win for our target segment. Let's ask Antigravity to segment the data by company size.

**STOP: Ask me: "Segment the experiment results by company size to see if small teams (our target market) had different outcomes than enterprise"**

**USER: Segment the experiment results by company size to see if small teams (our target market) had different outcomes than enterprise**

---

**ACTION: Read experiment data and segment by company_size (5-20, 21-99, 100+). For each segment, calculate control vs treatment activation rates and lift in percentage points. Present each segment clearly with counts, rates, and lift. Note which segments show strong positive results, neutral results, or negative results. Add dramatic commentary about what this segmentation reveals - especially if there's a big difference between small teams (our target market) and other segments. Emphasize how easy this was with Antigravity vs Excel.**

**STOP: Does this change your recommendation? A) Ship to everyone anyway, B) Ship to small teams only (5-20 people), C) Still kill it, D) Iterate for enterprise too**

**USER: Chooses A, B, C, or D**

---

[If B - correct answer] Exactly right! Ship to small teams, exclude enterprise

[If A] Think about it - why ship something that hurts enterprise activation?

[If C] Wait - we have a huge win for small teams! Why kill it?

[If D] We could, but that's additional investment - better to ship the win we have

Great thinking! But let's check one more thing: Quality over quantity. Did we activate MORE users, or BETTER users? What if treatment users activate but then churn immediately? Let's ask Antigravity to analyze Week 1 retention and engagement among activated users.

**STOP: Ask me: "Filter to activated users only and compare Week 1 retention and task completion between control and treatment"**

**USER: Filter to activated users only and compare Week 1 retention and task completion between control and treatment**

---

**ACTION: Filter the experiment data to only users where completed_first_task=TRUE (activated users only). For this filtered group, calculate: (1) Week 1 retention = percentage with days_active_week_1 >= 3, for control vs treatment, (2) Average tasks_completed_week_1 for control vs treatment. Present in a formatted table with the lift. React enthusiastically to the results - note that we activated MORE users AND they're BETTER quality. Explain the implications for LTV and revenue projections. Point out how Antigravity made this filtered analysis instant vs rebuilding analysis in traditional tools.**

**STOP: Do you see the quality metrics?**

**USER: Confirms**

---

Perfect! One more thing: leading indicators. These are metrics that predict long-term success.

**ACTION: Analyze two leading indicators from the experiment data: (1) Template usage - calculate % of users where used_template=TRUE for control vs treatment, and (2) Invite rate - calculate % of users where invited_teammate=TRUE for control vs treatment. For template usage, optionally check if template users completed more tasks. Present both metrics with control vs treatment rates and the multiplier. Explain why these are fantastic signals for long-term success (template usage = stickiness, invite rate = viral growth and retention).**

Now let's create the experiment readout document.

**STOP: Ask me: "Create onboarding-experiment-readout.md with the complete analysis: topline, segmentation, quality metrics, leading indicators, and recommendation"**

**USER: Create onboarding-experiment-readout.md with the complete analysis: topline, segmentation, quality metrics, leading indicators, and recommendation**

---

**ACTION: Create onboarding-experiment-readout.md that synthesizes all the experiment analysis we just did. Include sections for: (1) Executive Summary with clear recommendation, (2) Topline Results with overall activation rates, (3) Segment Analysis showing results by company size, (4) Quality Metrics covering retention and engagement, (5) Leading Indicators covering template usage and invite rates, (6) Recommendation explaining the launch approach (which segments to target, monitoring plan, next steps), (7) Expected Impact with projected incremental users, revenue, and ROI. Make it executive-ready and well-formatted with clear data points from all the analyses we just performed.**

**ACTION: After creating the file, say: "Antigravity just synthesized all that analysis into an executive-ready document. Writing and formatting this normally takes 2-3 hours - Antigravity did it in seconds."**

**STOP: Open onboarding-experiment-readout.md - this is what you'd present to leadership. Do you see the complete analysis?**

**USER: Confirms**

---

Phase 3 Experiment Analysis is complete ✓

Let's recap what just happened with Antigravity:
- Started with topline results that looked underwhelming vs our 58% goal
- With one command, Antigravity segmented by company size and revealed dramatically different results for small teams vs enterprise
- Another command: Quality metrics showed activated users are much more engaged
- Another command: Leading indicators showed strong signals for long-term success
- Conclusion: Clear launch strategy emerged from the data

See the pattern? Each new question was just one more command to Antigravity. In Excel, each iteration would take 15-30 minutes - with Antigravity it's instant. This is why Antigravity is so powerful for data analysis: iteration is effortless. You can keep asking "what if we segment by X?" or "what about metric Y?" until you find the insight.

**STOP: Do you see how we went from uncertain results to a clear strategy just by asking Antigravity to dig deeper?**

**USER: Confirms**

---

Excellent! Let's recap everything you just accomplished with Antigravity:
- ✅ Analyzed 10,000+ rows of funnel data in seconds (no pivot tables!)
- ✅ Extracted themes from 800 survey responses instantly (no manual tallying!)
- ✅ Built a three-scenario ROI model in minutes (normally takes a full day!)
- ✅ Segmented experiment data by company size instantly (20+ minutes in Excel!)
- ✅ Filtered to activated users and recalculated metrics on the fly (impossible in static spreadsheets!)
- ✅ Created 4 polished executive-ready documents synthesizing all the insights

Here's what you just did in 30-40 minutes: what normally takes 4-6 hours in spreadsheets. The key insight: with Antigravity, you can ask for ANY view of the data and get instant answers. Want to segment 5 different ways? Just keep asking - iteration is free. This is how modern PMs work: conversational data analysis instead of manual spreadsheet grinding.

Congratulations! You now know how to use Antigravity to analyze data 10x faster than traditional tools. Next up: Module 2.3 is all about product strategy. You'll develop a complete AI product strategy for TaskFlow using strategic frameworks, make hard choices with devil's advocate challenges, and create an executive presentation. It's where PM thinking gets really strategic - less about execution, more about WHERE to compete and HOW to win.

**STOP: When you're ready, type /start-2-3 to begin Module 2.3: Product Strategy**

**USER: Acknowledges**
