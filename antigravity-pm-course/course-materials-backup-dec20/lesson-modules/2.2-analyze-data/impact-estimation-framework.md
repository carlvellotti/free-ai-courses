# Impact Estimation Framework

## Overview

This framework helps Product Managers estimate the business impact of new features before investing engineering time. Use it to build ROI models that inform prioritization decisions and secure leadership buy-in.

## The Formula

```
Impact = Users Affected × Current Rate × Expected Lift × Value per Action
```

### Breaking It Down

**Users Affected**
- How many users will experience this feature?
- Monthly new users? Existing users who will adopt it?
- Consider adoption rate (not everyone uses every feature)

**Current Rate**
- What's the baseline metric you're trying to improve?
- Activation rate, conversion rate, retention rate, etc.
- Use historical data to establish the baseline

**Expected Lift**
- How much will the feature improve the metric?
- Express as percentage points (e.g., 45% → 55% = +10pp lift)
- Base on: similar features at your company, competitor benchmarks, industry data

**Value per Action**
- What's the business value of one more converted user?
- Lifetime Value (LTV), Annual Contract Value (ACV), or downstream metrics
- Use finance team's models or historical data

## The Three-Scenario Approach

Never present a single number to leadership. Always model **three scenarios** to show the range of outcomes:

### Pessimistic (20th percentile)
- Conservative adoption rate
- Modest lift in the metric
- Lower-bound assumptions
- "Even in the worst case, here's the ROI"

### Realistic (50th percentile)
- Based on your best judgment of likely outcomes
- Median adoption and lift estimates
- This is your "base case" projection
- "This is what we expect to happen"

### Optimistic (80th percentile)
- Strong adoption and lift
- Upper-bound assumptions (but still realistic)
- "If things go well, here's the upside"

## Example Application

**Feature:** Guided Onboarding with sample project

**Users Affected:**
- 350 new signups/month
- Pessimistic: 30% adoption (105 users)
- Realistic: 70% adoption (245 users)
- Optimistic: 90% adoption (315 users)

**Current Rate:**
- Baseline activation: 45%

**Expected Lift:**
- Pessimistic: +5pp (45% → 50%)
- Realistic: +13pp (45% → 58%)
- Optimistic: +17pp (45% → 62%)

**Value per Action:**
- Average LTV of activated user: $850
- Activated users stay 2.5x longer than non-activated users

**ROI Calculation:**
```
Pessimistic: 105 users × 5pp lift × $850 = $4,460/month × 36 months = $161k over 3 years
Investment: $100k engineering time
ROI: 1.6x

Realistic: 245 users × 13pp lift × $850 = $27k/month × 36 months = $972k over 3 years
Investment: $100k engineering time
ROI: 9.7x

Optimistic: 315 users × 17pp lift × $850 = $45k/month × 36 months = $1.6M over 3 years
Investment: $100k engineering time
ROI: 16x
```

## Using This Framework

1. **Gather historical data** - Get baseline metrics, conversion rates, LTV
2. **Research lift benchmarks** - Look for similar features, A/B test results, industry data
3. **Build all three scenarios** - Don't cherry-pick; show the range
4. **Include qualitative value** - Strategic importance, competitive positioning, learning value
5. **State your assumptions** - Make it easy for leadership to pressure-test your model
6. **Show sensitivity analysis** - What if adoption is lower? What if LTV is higher?

## Key Principles

**Be conservative**
- It's better to under-promise and over-deliver
- Pessimistic scenario should still show positive ROI if you're recommending the feature

**Show your work**
- Document all assumptions
- Link to data sources
- Make the model auditable

**Update post-launch**
- Track actual vs. projected impact
- Build credibility over time
- Calibrate your estimation skills

**Strategic value matters**
- Not everything is about immediate ROI
- Platform investments, competitive moats, learning opportunities
- Be explicit about non-financial value

## Common Pitfalls

❌ **Single-point estimates** - Always show a range
❌ **Optimistic bias** - Be honest about realistic outcomes
❌ **Ignoring adoption** - Not everyone uses every feature
❌ **Forgetting costs** - Include engineering time, maintenance, support
❌ **No validation** - Test assumptions with data when possible

## When to Use This Framework

✅ Features requiring >2 weeks engineering time
✅ When leadership asks "What's the business case?"
✅ Prioritization decisions between competing ideas
✅ Securing headcount or budget for a major initiative

🚫 Small bug fixes or minor improvements
🚫 Hygiene work (tech debt, security, compliance)
🚫 When you need to move fast and iterate

---

**Remember:** The goal isn't to be perfectly accurate (you can't predict the future). The goal is to **think rigorously** about impact and **communicate the range of outcomes** to leadership so they can make informed decisions.
