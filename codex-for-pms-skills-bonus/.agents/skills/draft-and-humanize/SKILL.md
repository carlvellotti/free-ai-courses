---
name: draft-and-humanize
description: "Draft follow-up messages from meeting outcomes, then automatically clean them of AI writing patterns. Chains the draft-followups and humanizer skills into one step. Use when the user says 'draft and humanize', 'write and clean followups', or 'polished followups'."
---

# Draft and Humanize

A composition skill that chains two skills together: first generate follow-up messages, then clean them of AI writing patterns.

## Process

### Step 1: Draft Follow-ups

Run the `draft-followups` skill (`.agents/skills/draft-followups/`). This takes meeting outcomes and drafts follow-up Slack messages and emails, matching tone to each recipient.

Wait for the drafts to be complete before proceeding.

### Step 2: Humanize

Take the output from Step 1 and run the `humanizer` skill (`.agents/skills/humanizer/`) on it. This checks the drafts against 24 AI-writing patterns (em dash overuse, inflated language, vague attributions, sycophantic tone, etc.) and fixes them.

### Step 3: Deliver

Present the final, cleaned-up follow-up messages. Note any significant changes the humanizer made so the user can see what was caught.

## Why This Exists

AI-generated follow-ups often have telltale patterns — overly formal language, em dash abuse, hedging. This skill handles both steps in one command instead of requiring you to run two skills manually in sequence.
