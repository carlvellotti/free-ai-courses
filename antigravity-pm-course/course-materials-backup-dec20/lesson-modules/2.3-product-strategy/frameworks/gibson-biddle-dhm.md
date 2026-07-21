# Gibson Biddle's DHM Framework

## Overview

The DHM Framework is a product strategy model created by Gibson Biddle, former VP of Product at Netflix and Chegg. It's specifically designed for consumer product companies and focuses on building sustainable competitive advantage.

**DHM stands for:**
- **D**elight customers in hard-to-copy, margin-enhancing ways
- **H**ard to copy (defensibility)
- **M**argin-enhancing (business model)

**Core Insight:** Great product strategy simultaneously optimizes for customer delight, competitive defensibility, and business sustainability. If you only focus on one or two, your strategy is incomplete.

---

## The Three Pillars

### D - DELIGHT

**What it is:** The unique ways your product creates customer value and joy.

**Questions to answer:**
- What makes your product delightful?
- What do customers love about your product?
- What creates "aha!" moments?
- What drives word-of-mouth?
- What would customers miss if it disappeared?

**Types of Delight:**
- **Functional delight:** Solves the problem better/faster/easier
- **Emotional delight:** Makes users feel smart, capable, connected
- **Experiential delight:** The product is *enjoyable* to use (not just useful)

**Examples:**
- **Netflix:** Personalized recommendations that actually work
- **Spotify:** Discover Weekly that feels like magic
- **Slack:** Real-time collaboration that feels instant
- **Notion:** Flexibility to build any workflow you want

**For PMs:**
- Delight is NOT "nice to have" - it's what drives retention and word-of-mouth
- Measure delight: NPS, retention curves, time spent, organic growth
- Regularly ask: "What delights users? What annoys them?"

---

### H - HARD TO COPY

**What it is:** The defensive moats that prevent competitors from easily replicating your delight.

**Why it matters:** Delight alone isn't enough - if competitors can copy it in 3 months, you have no advantage.

**Types of Moats (Hamilton Helmer's 7 Powers):**

**1. Network Effects**
- Product gets better as more people use it
- Example: Slack is valuable because your team is already there

**2. Scale Economies**
- Cost advantages from being larger
- Example: AWS can offer lower prices due to massive scale

**3. Brand**
- Trusted reputation and emotional connection
- Example: Apple commands premium pricing through brand

**4. Switching Costs**
- Painful for customers to leave
- Example: Salesforce with years of data and integrations

**5. Cornered Resource**
- Exclusive access to something valuable
- Example: Spotify's exclusive podcast deals

**6. Process Power**
- Unique processes or culture that can't be copied
- Example: Toyota's manufacturing processes

**7. Counter-Positioning**
- New business model incumbents can't adopt without cannibalizing
- Example: Netflix streaming vs Blockbuster retail stores

**For PMs:**
- Build moats intentionally, not accidentally
- Different moats take different timelines (network effects = years, brand = faster)
- Stack multiple moats when possible

---

### M - MARGIN-ENHANCING

**What it is:** The ways your strategy improves business economics over time.

**Why it matters:** Unprofitable delight is charity, not a business. Sustainable strategy requires sustainable economics.

**Questions to answer:**
- How does this improve margins?
- Does this increase revenue?
- Does this decrease costs?
- Does this improve customer lifetime value (LTV)?
- Does this reduce customer acquisition cost (CAC)?
- How does this scale economically?

**Ways to Enhance Margins:**

**Revenue Side:**
- Premium features justify higher prices
- Increased usage → more subscription revenue
- Network effects → faster organic growth (lower CAC)
- Better retention → higher LTV

**Cost Side:**
- Automation reduces operational costs
- Self-service reduces support costs
- Better onboarding reduces churn (lower wasted CAC)
- Platform leverage (don't build everything yourself)

**Examples:**
- **Netflix:** Recommendation engine → retention → higher LTV
- **Spotify:** Personalized playlists → engagement → lower churn
- **Slack:** Freemium model → organic growth → low CAC
- **Notion:** Templates community → lower support costs, faster activation

**For PMs:**
- Always connect product decisions to business metrics
- Understand your unit economics (LTV, CAC, gross margin)
- Margin-enhancing doesn't mean "monetize everything immediately"
- Sometimes margin-enhancement = cost reduction, not revenue increase

---

## How to Use DHM Framework

### Step 1: Identify Your Delights
- List all the ways your product creates customer value
- Which ones drive the most retention?
- Which ones drive word-of-mouth?
- Which ones differentiate you from competitors?

### Step 2: Evaluate Hard-to-Copy
- For each delight, ask: "Can competitors copy this easily?"
- If yes: What moat could we build around it?
- Which of the 7 Powers apply to our product?
- What would take competitors 2+ years to replicate?

### Step 3: Assess Margin Impact
- For each delight, ask: "Does this improve our economics?"
- Does it increase revenue? Decrease costs? Improve retention?
- What's the path to profitability/sustainability?
- Is this a short-term cost for long-term margin improvement?

### Step 4: Optimize the Overlap
- The best strategies maximize all three dimensions simultaneously
- Look for features/initiatives in the "sweet spot" of DHM
- If something only hits one dimension, question if it belongs in strategy

---

## The DHM Venn Diagram

```
        DELIGHT
           ∩
    HARD TO COPY
           ∩
   MARGIN-ENHANCING

   = GREAT STRATEGY
```

**Goal:** Find initiatives that sit at the intersection of all three circles.

**Examples of DHM Sweet Spot:**

**Netflix Recommendation Engine:**
- ✅ **Delight:** Helps users find content they love
- ✅ **Hard to Copy:** Requires years of viewing data + ML expertise
- ✅ **Margin-Enhancing:** Drives retention → higher LTV

**Slack's Search:**
- ✅ **Delight:** Find any conversation instantly
- ✅ **Hard to Copy:** Years of data makes search better over time
- ✅ **Margin-Enhancing:** Drives paid conversions (free plans have limited search)

**Notion's Templates:**
- ✅ **Delight:** Pre-built solutions for common use cases
- ✅ **Hard to Copy:** Community-created = network effect moat
- ✅ **Margin-Enhancing:** Reduces support costs, improves activation

---

## Applying DHM to Feature Prioritization

### The DHM Feature Scorecard

For each potential feature, score 1-5 on:
- **Delight:** How much will customers love this?
- **Hard to Copy:** How long would it take competitors to replicate?
- **Margin-Enhancing:** How much does this improve unit economics?

**Decision Matrix:**

| Feature | Delight | Hard to Copy | Margin | Total | Priority |
|---------|---------|--------------|--------|-------|----------|
| Feature A | 5 | 4 | 5 | 14 | HIGH |
| Feature B | 5 | 2 | 2 | 9 | MEDIUM |
| Feature C | 3 | 1 | 4 | 8 | LOW |

**Prioritization Logic:**
- **High DHM score (12+):** Build these first - they're strategic
- **Medium DHM score (8-11):** Consider, but evaluate opportunity cost
- **Low DHM score (<8):** Question if this belongs in roadmap

**Red Flags:**
- High delight, low hard-to-copy = easily copied, no moat
- High delight, low margin-enhancing = unsustainable
- High margin, low delight = customers won't use it

---

## DHM Applied to TaskFlow AI Strategy

### Example: AI Voice-to-Task Creation

**DELIGHT (4/5):**
- Users can create tasks by talking (faster than typing)
- Natural for remote teams already on calls
- "Aha!" moment: Say it, it's done
- Removes friction from task capture

**HARD TO COPY (4/5):**
- Requires voice chat infrastructure (TaskFlow already has it)
- Needs conversation context understanding (takes time to build)
- Competitors would need to build voice from scratch
- 12-18 month head start

**MARGIN-ENHANCING (4/5):**
- Drives activation (easier to get started)
- Improves retention (more tasks = more engagement)
- No additional infrastructure cost (leverage existing voice)
- Low CAC (organic growth through word-of-mouth)

**DHM SCORE: 12/15 → HIGH PRIORITY**

---

### Example: AI Everywhere (Generic Features)

**DELIGHT (3/5):**
- Matches competitor features
- Users expect AI these days
- Incremental improvement, not transformative

**HARD TO COPY (1/5):**
- Notion, Linear, Asana already have this
- No defensibility - commodity feature
- Can be copied in weeks

**MARGIN-ENHANCING (2/5):**
- Might improve retention slightly
- High cost to build (no existing infrastructure)
- Doesn't differentiate enough to drive pricing power

**DHM SCORE: 6/15 → LOW PRIORITY**

**Verdict:** Don't build. Fails DHM test.

---

## Common Mistakes with DHM

### Mistake 1: Delight Without Defensibility
- Building features competitors can copy in 3 months
- **Fix:** Always ask "What's our moat here?"

### Mistake 2: Margin Without Delight
- Monetization features users hate
- **Fix:** Align revenue with customer value

### Mistake 3: Hard-to-Copy Without Delight
- Building complex features users don't want
- **Fix:** Validate delight BEFORE building moats

### Mistake 4: Ignoring Timeframes
- Expecting instant moats (network effects take years)
- **Fix:** Layer moats over time, start with achievable defensibility

### Mistake 5: Not Measuring
- Can't tell if strategy is working
- **Fix:** Define metrics for each DHM dimension

---

## DHM Metrics Dashboard

### Measuring Delight
- **NPS (Net Promoter Score):** Would you recommend this?
- **Retention curves:** Are users coming back?
- **Time spent:** Are users engaged?
- **Feature adoption:** Are they using new features?
- **Qualitative feedback:** What do users say?

### Measuring Hard to Copy
- **Time to replicate:** How long would competitors need?
- **Investment required:** How much would it cost competitors?
- **Data moat:** How much proprietary data do we have?
- **Network effects:** How many users create value for each other?
- **Talent moat:** Do we have unique expertise?

### Measuring Margin-Enhancing
- **LTV (Lifetime Value):** Revenue per customer
- **CAC (Customer Acquisition Cost):** Cost to acquire customer
- **LTV/CAC ratio:** Should be 3:1 or better
- **Gross margin:** Revenue minus cost of goods sold
- **Retention rate:** Percentage of customers who stay

---

## When to Use DHM vs Other Frameworks

**Use DHM for:**
- Consumer product strategy
- Feature prioritization
- Evaluating competitive positioning
- Long-term product planning
- When you need to balance delight and business metrics

**Use Rumelt's Kernel for:**
- Overall strategic direction
- Complex competitive situations
- When diagnosis is unclear
- Multi-year strategic planning

**Use SWOT for:**
- Environmental analysis
- Understanding internal capabilities
- Competitive landscape mapping
- Initial strategic assessment

**Best Practice:** Use multiple frameworks together
- Rumelt's Kernel for overall strategy
- DHM for feature prioritization within that strategy
- SWOT for situational analysis

---

## DHM Strategy Template

```markdown
## Feature: [Name]

### DELIGHT (Score: X/5)
**Customer Value:**
- [What users gain]
- [What problems it solves]
- [What makes it delightful]

**Evidence:**
- [Research, data, feedback supporting delight score]

---

### HARD TO COPY (Score: X/5)
**Moat Type:**
- [Which of the 7 Powers applies?]

**Defensibility:**
- [What makes this hard to replicate?]
- [How long would competitors need?]
- [What advantages do we have?]

**Evidence:**
- [Competitive analysis, technical complexity]

---

### MARGIN-ENHANCING (Score: X/5)
**Business Impact:**
- Revenue impact: [How it increases revenue]
- Cost impact: [How it decreases costs]
- LTV impact: [Effect on customer lifetime value]
- CAC impact: [Effect on acquisition cost]

**Evidence:**
- [Financial projections, unit economics]

---

### TOTAL DHM SCORE: X/15
**Recommendation:** [Build / Consider / Don't Build]
**Reasoning:** [Why based on DHM analysis]
```

---

## Real-World Example: Spotify Discover Weekly

### DELIGHT (5/5)
- Personalized playlist every Monday
- Introduces users to new music they actually like
- Feels like magic - "How did Spotify know I'd love this?"
- Drives Monday engagement spike
- Users share discoveries socially

### HARD TO COPY (5/5)
- **Data moat:** Requires billions of listening sessions
- **ML expertise:** Years of algorithm development
- **Network effects:** More users = better recommendations
- **Time moat:** Took Spotify years to perfect
- Competitors (Apple Music, YouTube Music) tried to copy but noticeably worse

### MARGIN-ENHANCING (5/5)
- Drives retention (users return every Monday)
- Increases engagement (more listening hours)
- Reduces churn (creates habit formation)
- Organic marketing (users share on social media)
- Higher LTV, lower CAC

**DHM SCORE: 15/15 → PERFECT STRATEGY**

**Result:** Discover Weekly became Spotify's most successful feature. 40M+ users every week. Competitors still can't match it.

---

## Further Reading

**Primary Source:**
- Gibson Biddle's blog: [askgib.substack.com](https://askgib.substack.com)
- His product strategy articles and case studies

**Related Frameworks:**
- *7 Powers* by Hamilton Helmer (deep dive on moats)
- *Good Strategy/Bad Strategy* by Richard Rumelt
- Netflix case studies (Biddle was VP Product there)

**Application:**
- Use DHM as a feature prioritization filter
- Apply before writing PRDs
- Revisit quarterly to ensure strategy still passes DHM test

---

**Remember:** Great product strategy delights customers in ways competitors can't easily copy, while improving your business economics. If you're only optimizing one dimension, you're missing the full picture.
