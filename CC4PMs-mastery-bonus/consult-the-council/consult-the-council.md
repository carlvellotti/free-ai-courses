# /consult-the-council Command

Query multiple frontier AI models for diverse perspectives on a question or problem.

## The Council

| Model | Provider | Reasoning Config |
|-------|----------|------------------|
| **GPT-5.2 Thinking** | OpenAI | `reasoning_effort: xhigh` |
| **Gemini 3 Pro** | Google | `thinking_level: HIGH` |
| **Grok 4** | xAI | Built-in reasoning |

All models run with maximum reasoning/thinking settings for deepest analysis.

## When to Use

- Stuck on a hard problem and want multiple perspectives
- Validating an approach before committing
- Exploring different ways to solve something
- Getting a second (and third, and fourth) opinion
- Complex architectural or strategic decisions

## Usage

The user will provide a question or context. Run the council script and present the responses.

## Instructions

1. **Run the script** with the user's question:
   ```bash
   python3 "scripts/consult_council.py" "USER'S QUESTION HERE"
   ```

2. **Wait for responses** - this can take several minutes with maximum reasoning enabled

3. **Present the council's responses** in a clear format, highlighting:
   - Areas of agreement across models
   - Unique insights from each model
   - Any contradictions or different approaches
   - Your synthesis/recommendation based on the council's input

4. **If a model fails**, note it but continue with the others

## Example

User: `/consult-the-council Should I use SQLite or PostgreSQL for my new SaaS app?`

You would run:
```bash
python3 "scripts/consult_council.py" "Should I use SQLite or PostgreSQL for my new SaaS app? Consider scalability, operational complexity, and modern deployment patterns."
```

Then present the three perspectives with your synthesis.

## Configuration

The script uses these environment variables (from `.env` or your shell environment):
- `OPENAI_API_KEY`
- `GEMINI_API_KEY`
- `GROK_API_KEY`

Models and parameters can be adjusted in `scripts/consult_council.py`.
