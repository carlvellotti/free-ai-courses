# Product Sync — March 18, 2026

**Attendees:** Sarah (eng lead), Marcus (design), Jamie (frontend), Me
**Duration:** 30 min
**Auto-transcribed via Granola**

---

**Me:** Alright, I think we're all here. Sarah, you want to kick off with SSO?

**Sarah:** Yeah so, um, quick update — we're at like 80% on the SSO implementation. The core SAML flow is working, Jamie and I paired on the callback handling last Thursday and that's solid now. But — and this is the thing — I'm still blocked on the Auth0 enterprise plan upgrade. I put in the finance request last Wednesday and I've heard literally nothing back.

**Me:** Wait, last Wednesday? That's almost a week.

**Sarah:** Yeah. I pinged the finance channel on Friday too. Nothing. And the thing is, we can't test the full enterprise flow without it because the free tier doesn't support custom connections. So like, I can keep building around it but at some point next week I'm going to be fully blocked.

**Me:** Okay that's... yeah that's not great. Especially with the Acme timeline. I'll escalate that with Jordan today, I'll just Slack him right after this. Can you send me the original request link so I have it?

**Sarah:** Yeah I'll drop it in DM.

**Me:** Cool. Okay Marcus, you had dashboard stuff?

**Marcus:** Yeah! So I've got the updated mockups for the analytics dashboard. Let me share my screen... one sec... okay can you guys see this?

**Jamie:** Yep.

**Marcus:** So the layout is basically what we talked about last week — the summary cards up top, then the main chart area, and the filter panel on the right. I'm pretty happy with how the filter interaction works, you can see here if I click through the prototype...

**Me:** Oh that's nice. I like the date range picker.

**Marcus:** Thanks, yeah that was actually kind of tricky to get right. But okay so here's my question. The loading states and empty states are really different depending on whether we're doing real-time data refresh or daily batch. Like if it's real-time I need to design for partial loading, streaming updates, the numbers ticking up, all that. If it's daily batch it's more like — you load the page and either the data's there or it's not, and I show a "last updated at" timestamp.

**Sarah:** That's a good question. That's really a Priya question though, right? Like what the pipeline can actually support?

**Marcus:** Yeah exactly. And she's not here.

**Me:** She's out today, I think she had a dentist appointment or something this morning. Let me ping her after this and see if she can give us a quick answer async. Marcus, would a Slack response work or do you need a call?

**Marcus:** Slack is fine honestly. I just need to know the direction. If she can just tell me "real-time" or "batch" I can run with it.

**Me:** Got it. I'll ping her today.

**Jamie:** Hey can I jump in with the charts thing?

**Me:** Yeah go ahead.

**Jamie:** So I've been working on the reporting charts, the ones Marcus designed a couple weeks ago, and we're hitting a performance wall. Basically anything over like 500 data points and the SVG rendering just tanks. Like, we're talking visible jank when you pan or zoom.

**Sarah:** How bad?

**Jamie:** Bad. Like 2-3 second freezes on a MacBook Pro. On lower-end machines it'd be worse. I profiled it and it's the DOM manipulation — SVG just creates too many nodes at that scale.

**Sarah:** Yeah that tracks. SVG is great for small datasets but it doesn't scale.

**Jamie:** Right so I think we need to move to canvas-based rendering. I looked at a couple libraries — there's this one called, um, I think it's called Roughjs? No wait, that's the sketchy one. I'm thinking more like Chart.js with the canvas adapter, or maybe even going straight WebGL with deck.gl if we want to future-proof it.

**Me:** That feels like a big lift. How long are we talking?

**Jamie:** Honestly I'm not sure yet. That's why I want to prototype it first. Like give me two days to spike it, and I can come back with a real estimate. I don't want to commit to a timeline when I haven't even — like, canvas has its own gotchas with accessibility and hit detection and all that.

**Sarah:** That makes sense. Why don't you bring the prototype to Wednesday's architecture review? Then we can look at it together and decide if it's the right path.

**Jamie:** Yeah that works. Wednesday.

**Me:** Sounds good. Okay I also wanted to bring up SCIM. So, context for everyone — Acme asked about SCIM provisioning on our last call. They have 400 something users and manual provisioning isn't going to work for them. The question is, do we bundle SCIM into the SSO launch or do we defer it to a fast-follow?

**Sarah:** Defer. Definitely defer. SCIM is like — okay so the spec itself is not that complicated but every identity provider implements it slightly differently. You've got Okta doing things one way, Azure AD doing things another way, and then the edge cases with group syncing and deprovisioning... it's easily 3 to 4 weeks of work, probably more.

**Me:** Yeah that's kind of what I figured.

**Marcus:** I don't have strong feelings. I mean the UI for it is pretty minimal, it's mostly backend stuff right?

**Sarah:** Yeah it's almost entirely backend.

**Me:** Okay. I'm leaning toward deferring too but I need to check with Jordan. Acme said they don't need it for launch but they want it within 60 days. So it's... it's not like we can just put it on the backlog and forget about it.

**Sarah:** Sure, that's fair. We should probably think about SCIM sooner rather than later even if we defer it from the SSO launch. Like, start scoping it at least.

**Me:** Yeah. We should think about that. I'll bring it up in my Thursday 1:1 with Jordan and see what he thinks about timing.

**Sarah:** Oh — one more thing before we wrap. Alex posted in the engineering channel yesterday about the workflow builder, specifically about the constraint model? Like what happens when someone creates a workflow that has circular dependencies, or rules that contradict each other. He had some specific questions about how we want to handle validation. Nobody's responded to him yet.

**Me:** Oh shoot, yeah I saw that notification come in but I was in back-to-back meetings. I'll look at that today. Did anyone read through his actual message? Is it like a quick answer or is it a whole thing?

**Jamie:** I skimmed it. It's pretty detailed, he wrote like three paragraphs. There's a question about whether we do eager validation or lazy validation, and then something about whether users can save invalid workflows as drafts. I think it needs a real answer, not just a thumbs up.

**Me:** Okay yeah. I'll carve out time this afternoon to respond properly to that.

**Sarah:** Cool. Anything else?

**Me:** I think we're good. Oh wait — Marcus, did you ever hear back from that user about the sidebar redesign feedback?

**Marcus:** Oh! Yeah, she responded last night actually. I haven't read it yet. I'll check and let you know if there's anything interesting.

**Me:** Cool no rush. Okay, we're at time. Thanks everyone.

**Marcus:** See ya.

**Jamie:** Later.

**Sarah:** Bye.
