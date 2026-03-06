#!/usr/bin/env python3
"""
Consult the Council - Query multiple frontier AI models for diverse perspectives.

Usage:
    python3 scripts/consult_council.py "Your question here"
    echo "Your question" | python3 scripts/consult_council.py

Models:
    - OpenAI: GPT-5.2 (reasoning_effort: xhigh)
    - Google: Gemini 3 Pro (thinking_level: HIGH)
    - xAI: Grok 4 (built-in reasoning)

Requires:
    pip3 install openai google-genai

Uses API keys from .env or environment variables:
    OPENAI_API_KEY, GEMINI_API_KEY, GROK_API_KEY
"""

import argparse
import asyncio
import json
import os
import sys
from pathlib import Path


def load_env():
    """Load .env file from the script's parent directory or project root."""
    # Try script's parent directory first, then walk up
    search_dir = Path(__file__).parent
    for _ in range(5):  # Check up to 5 levels up
        env_path = search_dir / ".env"
        if env_path.exists():
            with open(env_path) as f:
                for line in f:
                    if line.strip() and not line.startswith("#") and "=" in line:
                        key, value = line.strip().split("=", 1)
                        os.environ.setdefault(key, value.strip('"').strip("'"))
            return
        search_dir = search_dir.parent


load_env()

# Configuration — update models as new versions release
CONFIG = {
    "openai": {
        "model": "gpt-5.2",
        "api_key_env": "OPENAI_API_KEY",
        "base_url": "https://api.openai.com/v1",
        "max_tokens": 16384,
        "reasoning_effort": "xhigh",
        "temperature": 1.0,
        "timeout": 600,
    },
    "gemini": {
        "model": "gemini-3-pro-preview",
        "api_key_env": "GEMINI_API_KEY",
        "thinking_level": "HIGH",
        "max_tokens": 16384,
        "temperature": 1.0,
        "timeout": 600,
    },
    "grok": {
        "model": "grok-4-0709",
        "api_key_env": "GROK_API_KEY",
        "base_url": "https://api.x.ai/v1",
        "max_tokens": 16384,
        "temperature": 1.0,
        "timeout": 600,
    },
}

COUNCIL_NAMES = {
    "openai": "GPT-5.2 Thinking",
    "gemini": "Gemini 3 Pro",
    "grok": "Grok 4",
}


async def query_openai(question: str) -> dict:
    """Query OpenAI GPT-5.2 with xhigh reasoning."""
    try:
        from openai import AsyncOpenAI
    except ImportError:
        return {"provider": "openai", "error": "openai package not installed. Run: pip3 install openai"}

    api_key = os.environ.get(CONFIG["openai"]["api_key_env"])
    if not api_key:
        return {"provider": "openai", "error": f"{CONFIG['openai']['api_key_env']} not found in environment"}

    try:
        client = AsyncOpenAI(
            api_key=api_key,
            base_url=CONFIG["openai"]["base_url"],
            timeout=CONFIG["openai"]["timeout"],
        )

        response = await client.chat.completions.create(
            model=CONFIG["openai"]["model"],
            messages=[{"role": "user", "content": question}],
            max_completion_tokens=CONFIG["openai"]["max_tokens"],
            temperature=CONFIG["openai"]["temperature"],
            reasoning_effort=CONFIG["openai"]["reasoning_effort"],
        )

        return {
            "provider": "openai",
            "model": CONFIG["openai"]["model"],
            "response": response.choices[0].message.content,
            "reasoning_tokens": getattr(response.usage, "reasoning_tokens", None),
        }
    except Exception as e:
        return {"provider": "openai", "error": str(e)}


async def query_gemini(question: str) -> dict:
    """Query Google Gemini 3 Pro with HIGH thinking level."""
    try:
        from google import genai
        from google.genai import types
    except ImportError:
        return {"provider": "gemini", "error": "google-genai package not installed. Run: pip3 install google-genai"}

    api_key = os.environ.get(CONFIG["gemini"]["api_key_env"])
    if not api_key:
        return {"provider": "gemini", "error": f"{CONFIG['gemini']['api_key_env']} not found in environment"}

    try:
        client = genai.Client(api_key=api_key)

        response = await asyncio.to_thread(
            client.models.generate_content,
            model=CONFIG["gemini"]["model"],
            contents=question,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(
                    thinkingBudget=10000,
                ),
                max_output_tokens=CONFIG["gemini"]["max_tokens"],
                temperature=CONFIG["gemini"]["temperature"],
            ),
        )

        return {
            "provider": "gemini",
            "model": CONFIG["gemini"]["model"],
            "response": response.text,
        }
    except Exception as e:
        return {"provider": "gemini", "error": str(e)}


async def query_grok(question: str) -> dict:
    """Query xAI Grok 4 with built-in reasoning."""
    try:
        from openai import AsyncOpenAI
    except ImportError:
        return {"provider": "grok", "error": "openai package not installed. Run: pip3 install openai"}

    api_key = os.environ.get(CONFIG["grok"]["api_key_env"])
    if not api_key:
        return {"provider": "grok", "error": f"{CONFIG['grok']['api_key_env']} not found in environment"}

    try:
        client = AsyncOpenAI(
            api_key=api_key,
            base_url=CONFIG["grok"]["base_url"],
            timeout=CONFIG["grok"]["timeout"],
        )

        response = await client.chat.completions.create(
            model=CONFIG["grok"]["model"],
            messages=[{"role": "user", "content": question}],
            max_tokens=CONFIG["grok"]["max_tokens"],
            temperature=CONFIG["grok"]["temperature"],
        )

        return {
            "provider": "grok",
            "model": CONFIG["grok"]["model"],
            "response": response.choices[0].message.content,
        }
    except Exception as e:
        return {"provider": "grok", "error": str(e)}


async def consult_council(question: str) -> list[dict]:
    """Query all council members concurrently."""
    tasks = [
        query_openai(question),
        query_gemini(question),
        query_grok(question),
    ]
    results = await asyncio.gather(*tasks, return_exceptions=True)

    processed = []
    for i, result in enumerate(results):
        if isinstance(result, Exception):
            provider = ["openai", "gemini", "grok"][i]
            processed.append({"provider": provider, "error": str(result)})
        else:
            processed.append(result)

    return processed


def format_output(results: list[dict], question: str) -> str:
    """Format council responses as markdown."""
    lines = [
        "# Council Response",
        "",
        f"**Question:** {question}",
        "",
        "---",
        "",
    ]

    for result in results:
        provider = result.get("provider", "unknown")
        name = COUNCIL_NAMES.get(provider, provider)
        model = result.get("model", "unknown")

        lines.append(f"## {name}")
        lines.append(f"*Model: {model}*")
        lines.append("")

        if "error" in result:
            lines.append(f"**Error:** {result['error']}")
        else:
            lines.append(result.get("response", "No response"))

        lines.append("")
        lines.append("---")
        lines.append("")

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Consult the Council of AI Models")
    parser.add_argument("question", nargs="?", help="Question to ask the council")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    args = parser.parse_args()

    if args.question:
        question = args.question
    elif not sys.stdin.isatty():
        question = sys.stdin.read().strip()
    else:
        print("Error: No question provided", file=sys.stderr)
        print("Usage: python3 consult_council.py 'Your question here'", file=sys.stderr)
        sys.exit(1)

    if not question:
        print("Error: Empty question", file=sys.stderr)
        sys.exit(1)

    print(f"Consulting the council on: {question[:100]}{'...' if len(question) > 100 else ''}", file=sys.stderr)
    print("This may take several minutes with maximum reasoning enabled...", file=sys.stderr)

    results = asyncio.run(consult_council(question))

    if args.json:
        print(json.dumps(results, indent=2))
    else:
        print(format_output(results, question))


if __name__ == "__main__":
    main()
