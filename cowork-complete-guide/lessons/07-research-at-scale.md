# Lesson 7: Research at Scale (Sub-Agents & Web)

20 documents was useful. But what about 50? 100?

Someone used Cowork to analyze 320 podcast transcripts. All of Lenny Rachitsky's interviews. Asked "what makes a great PM?" Got synthesized insights across years of conversations.

That's the scale we're talking about.

WAIT: If you had to analyze 50 documents yourself, how would you approach it?

USER: [Describes their approach – probably reading in batches, taking notes, trying to remember patterns]

That's the manual way. There's a faster way.

---

When a task has independent parts, I can spin up multiple workers to tackle them simultaneously.

These are called **sub-agents**. Multiple versions of me working in parallel, then synthesizing results.

I do this automatically when appropriate. But you can also explicitly request it.

WAIT: Make sense?

USER: Yes

---

Explicit sub-agent requests work well for:

- **Vendor analysis:** "Research each of these four vendors independently, then compare them."
- **Multi-perspective analysis:** "Analyze this decision from financial, customer experience, and operational risk perspectives. Then synthesize."
- **Large document sets:** "Process these 50 transcripts in parallel. Extract themes, then synthesize."

WAIT: Which of those three sounds most useful for YOUR work – vendor comparison, multi-perspective analysis, or large document processing?

USER: [Picks one and explains]

Good choice. Keep that in mind – you can explicitly request that pattern anytime. Let's try it.

---

ACTION: Describe the 50+ documents in scenarios/large-corpus/ (refer to it as "industry research folder")

That's a lot of material – industry articles, research summaries, meeting notes.

Give me a delegation that explicitly requests parallel processing.

WAIT: Ask me to analyze these documents using sub-agents and create a report.

USER: [Delegation requesting parallel analysis]

---

ACTION: Spin up sub-agents for parallel document processing

ACTION: Process documents across multiple workers

ACTION: Create industry-research-report.md with:
- Executive summary
- Key themes across all documents (with source citations)
- Contradictions or tensions found
- Data points and statistics compiled
- Strategic recommendations
- Questions for further research

Done. That was parallel processing at work.

WAIT: Open industry-research-report.md. Notice the depth? That came from 50+ documents analyzed simultaneously.

USER: [Response]

---

I can also search the web for current information.

- **Local files** = your proprietary info, historical data, internal documents
- **Web search** = current events, competitor info, market trends, public data

Combining both = powerful research.

WAIT: Want to add web research to something?

USER: Yes / Give me an example

---

Let's say you wanted competitive context for the feedback we analyzed earlier.

WAIT: Name a competitor or topic you'd want me to research online.

USER: [Topic/competitor]

---

ACTION: Web search for the topic

ACTION: Synthesize web findings with local context

ACTION: Create brief combining both sources

Done. Local files + web research combined.

WAIT: When would you use web search vs. local files for research?

USER: [Explains – web for public/current info, local for proprietary/historical]

Exactly. They complement each other.

---

Let's capture this as a skill.

ACTION: Create skills/research-synthesizer.md with:
- When to use (multi-document analysis)
- Input requirements
- Output format (themes, quotes, contradictions, recommendations)
- When to request sub-agents
- How to incorporate web research

Your Research Synthesizer skill is ready.

WAIT: Two skills now. Your system is growing.

USER: Yes

---

**What you learned:** Sub-agents for parallel processing. Web search for current information.

**What you built:** Research Synthesizer skill.

**Key insight:** Scale doesn't slow me down. 50 documents processes as easily as 5.

**Next up:** Document creation – turning research into polished outputs.

WAIT: Say "next lesson" to continue.

USER: Next lesson
