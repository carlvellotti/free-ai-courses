# Expense Splitter - Project Brief

## What it does
Split a restaurant bill fairly among friends, handling the messy reality of shared appetizers, different tip preferences, and tax calculations.

## Core Features (v1)
- Add people to the bill (names)
- Add items with prices
- Assign items to people (including "shared" for things like appetizers)
- Tip calculation
  - Choose tip percentage (15%, 18%, 20%, custom)
  - Split method: equal across everyone OR proportional to what they ordered
- Tax calculation
  - Enter tax amount or percentage
  - Same split options as tip
- Final summary: "Sarah owes $34.50, Mike owes $28.20..."

## Nice-to-have (v2)
- Receipt photo upload with OCR to auto-populate items
- Venmo/payment request deep links
- Save and share splits
- History of past splits

## Why this is complex
- Multiple interacting components (people, items, assignments)
- Real math with edge cases (rounding, shared items, proportional splits)
- State management across the UI
- The kind of project where AI quality degradation mid-build causes problems
