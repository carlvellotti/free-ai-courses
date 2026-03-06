---
name: web-research
version: 1.0.0
description: >
  Web research using Tavily and Firecrawl. Searches the web, reads pages, crawls sites,
  and synthesizes findings. Use when: (1) user says "web research", "research this",
  "look into", "find out about", "what's the latest on", "/web-research",
  (2) user needs information from the web to inform a decision, strategy, or content,
  (3) user provides a URL and wants it read/analyzed,
  (4) user wants competitive intel, market research, or topic deep-dives.
  NOT for: X/Twitter research, Reddit research, scraping for data pipelines,
  or browser automation unrelated to research.
allowed-tools:
  - mcp__tavily__tavily_search
  - mcp__tavily__tavily_extract
  - mcp__tavily__tavily_crawl
  - mcp__tavily__tavily_map
  - mcp__tavily__tavily_research
  - Bash(firecrawl *)
  - Bash(npx firecrawl *)
---

# Web Research

Search the web, read pages, and synthesize findings using Tavily (search/research) and Firecrawl (scrape/crawl).

## Tool Routing

Pick the right tool for the job:

| Need | Tool | Why |
|------|------|-----|
| **Quick search / discovery** | `tavily_search` | Fast, returns snippets inline — good for scanning |
| **Deep multi-source research** | `tavily_research` | Autonomous research agent, handles broad questions |
| **Read a specific URL** | `firecrawl scrape` | Clean markdown output, handles JS rendering |
| **Read 1-3 URLs quickly** | `tavily_extract` | Inline results, no file management |
| **Read protected / JS-heavy page** | `firecrawl browser` | Cloud Chromium for interactive pages |
| **Bulk extract a site section** | `firecrawl crawl` or `download` | Handles scale, file-based output |
| **Find pages within a site** | `firecrawl map` | URL discovery with search filtering |
| **Date-filtered search** | `tavily_search` with `time_range` or `start_date`/`end_date` | Built-in temporal filtering |
| **Domain-scoped search** | `tavily_search` with `include_domains` | Restricts to specific sites |

### When Tavily vs Firecrawl

**Default to Tavily** for searching and quick reads. It's faster and returns results in-context.

**Escalate to Firecrawl** when:
- You need full page content as clean markdown (not just snippets)
- The page is large and results should go to a file
- Content requires browser interaction (clicks, scrolls, form fills)
- You need to crawl multiple pages from one site
- Tavily extraction fails on a protected or complex page

**Use both together** for research workflows:
1. Tavily search to discover relevant URLs
2. Firecrawl scrape to deep-read the best sources

## Workflow

### Standard Research Flow

```
1. SEARCH    → Tavily search to discover sources and get initial snippets
2. READ      → Firecrawl scrape (or Tavily extract) the most relevant pages
3. FOLLOW-UP → Search again with refined queries based on what you learned
4. SYNTHESIZE → Summarize findings with source attribution
```

### Quick Question (simple factual lookup)

```
tavily_search("query", search_depth="basic", max_results=5)
→ Answer from snippets, cite sources
```

### Topic Deep-Dive (broad or complex question)

```
tavily_research(input="detailed research question", model="auto")
→ Returns comprehensive synthesis from multiple sources
```

Use `model="mini"` for narrow questions with few subtopics, `model="pro"` for broad questions.

### Competitive / Site Analysis

```
firecrawl map "https://competitor.com" --search "pricing"  → find relevant pages
firecrawl scrape "https://competitor.com/pricing"          → extract content
tavily_search("competitor name vs alternatives")           → market context
```

### Reading a Specific URL

If the user gives you a URL:
- **Short page / quick read**: `tavily_extract` with the URL
- **Long page / need full content**: `firecrawl scrape "<url>" -o .firecrawl/page.md`
- **Page behind interactions**: `firecrawl browser "open <url>"` → `snapshot` → `scrape`

## Tavily Search Tips

```
# Basic search
tavily_search(query="your question", max_results=5)

# Recent results only
tavily_search(query="topic", time_range="week")

# Specific date range
tavily_search(query="topic", start_date="2025-01-01", end_date="2025-02-01")

# Search specific sites
tavily_search(query="topic", include_domains=["example.com", "docs.example.com"])

# Exclude sites
tavily_search(query="topic", exclude_domains=["reddit.com", "pinterest.com"])

# Thorough search (slower but better)
tavily_search(query="topic", search_depth="advanced", max_results=10)

# Get full page content with results (alternative to scraping)
tavily_search(query="topic", include_raw_content=true)
```

## Firecrawl Output

Write large results to `.firecrawl/` with descriptive filenames:

```bash
firecrawl scrape "<url>" -o .firecrawl/competitor-pricing.md
firecrawl search "query" --scrape -o .firecrawl/search-topic.json --json
```

Never read entire output files at once. Use incremental reads:

```bash
wc -l .firecrawl/file.md && head -50 .firecrawl/file.md
grep -n "keyword" .firecrawl/file.md
```

## Synthesis

After gathering sources, synthesize findings for the user:

- **Lead with the answer** — what did you find?
- **Cite sources** — include URLs for key claims
- **Flag conflicts** — note when sources disagree
- **Note gaps** — what couldn't you find or verify?
- **Suggest follow-ups** — what else could be explored?

Keep synthesis concise. The user wants insights, not a dump of everything you read.

## Parallel Research

When a research question has multiple independent angles, run searches in parallel:

```
# These can run simultaneously:
tavily_search("competitor A pricing")     # angle 1
tavily_search("competitor B pricing")     # angle 2
tavily_search("industry pricing trends")  # angle 3
```

For Firecrawl, run parallel scrapes:

```bash
firecrawl scrape "<url-1>" -o .firecrawl/1.md &
firecrawl scrape "<url-2>" -o .firecrawl/2.md &
wait
```
