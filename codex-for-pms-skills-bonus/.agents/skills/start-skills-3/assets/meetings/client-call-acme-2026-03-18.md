# Client Call: Acme Corp — March 18, 2026

**Attendees:** Diana (CS lead), Tom Reeves (Acme VP Eng), Lisa Park (Acme PM), Me
**Duration:** 45 min
**Auto-transcribed via Granola**

---

**Diana:** Alright, I think we've got everyone. Tom, Lisa, thanks for jumping on. I know you're busy.

**Tom:** No problem. Actually glad to do this one — I have some good news to share.

**Diana:** Oh great, let's start there.

**Tom:** So, the board approved the migration budget last Friday. We're officially green-lit to move the entire engineering and product org over to TaskFlow. We're targeting May 1 for full rollout.

**Me:** That's great news, Tom. Congrats on getting that through.

**Tom:** Thanks. It wasn't easy, we had to make the case against just extending our Jira contract, but the workflow automation features were a big differentiator for us. Anyway, the budget's there. Now we just need to make sure the timeline works.

**Diana:** Absolutely. May 1 — that's about six weeks from now. I think that's doable on our end. We should make sure we're aligned on the SSO piece since that was the big open item.

**Me:** Yeah so on SSO — we're in good shape. The core implementation is about 80% done. We're doing SAML-based auth, and we've tested with a couple identity providers already. The main thing we're working through right now is some infrastructure stuff on our end, but we're targeting having the full enterprise SSO flow ready by mid-April. That gives you a couple weeks for your internal testing before May 1.

**Tom:** Mid-April works. Lisa, does that work with your rollout plan?

**Lisa:** Yeah, I think so. The bigger question for me is SCIM. So our IT team manages over 400 users across — I think it's like 12 departments now? And doing manual provisioning isn't realistic. Like when someone joins the marketing team, their manager needs to add them to TaskFlow, set up the right workspace access, assign the right role... if we're doing that manually for 400 people, someone's going to mess it up.

**Me:** Totally understand. We are actively evaluating the SCIM timeline. I don't want to give you a date right now that I can't commit to, but I should have a clear answer for you by end of this week. Can I follow up on that Friday?

**Lisa:** That works. And to be clear, SCIM isn't a blocker for the May 1 launch. We can do the initial provisioning manually or with a CSV import or whatever. But we'd want SCIM within 60 days of going live. Our IT director was pretty firm on that.

**Me:** That's helpful context. Sixty-day window — I'll make sure our team is working against that.

**Tom:** Good. Okay so, the other thing — security review. Our security team is going to need to do a full review before we can finalize. They do this for every SaaS vendor over a certain spend threshold. I'll send over the security questionnaire this week. It's pretty standard stuff — SOC 2, data residency, encryption at rest, incident response, all the usual.

**Diana:** Got it. I'll coordinate that on our end. We went through this with a couple other enterprise clients last quarter so we should be able to turn it around pretty quickly. Tom, is there a specific person on your security team I should work with?

**Tom:** Yeah, I'll CC Raj Patel when I send the questionnaire over. He's our infosec lead. He's pretty responsive, shouldn't be a bottleneck.

**Diana:** Perfect.

**Lisa:** Can I bring up one more thing? So this came up when I was doing the workspace planning for our rollout. Right now TaskFlow has two permission levels — admin and member. And that's... it's a little limiting for us. Our engineering leads need to be able to configure workflows and integrations for their teams, but I don't want to give them full admin access because then they can mess with billing and org-level settings. And our marketing team needs view-only access to engineering boards for cross-functional projects, but as members they can edit everything.

**Me:** Yeah, that's a fair point. So workspace-level role customization is something we've been hearing about from a few enterprise customers. It's on our roadmap for Q3. It wouldn't be in the initial launch but we're thinking — and Lisa I want to be transparent here — we're thinking about a tiered permission system where you can define custom roles per workspace.

**Lisa:** Q3 like... July-ish?

**Me:** That's the target, yeah. I can't commit to a specific date yet but it's a priority for us.

**Lisa:** Okay. I mean it's not ideal but we can work around it for now. We'll probably just create separate workspaces and use the admin role more selectively. It's messy but it works.

**Tom:** Yeah we can manage for a couple months.

**Diana:** If it helps, I can set up a call with your team leads to walk through best practices for workspace structure. We've seen some creative solutions from other customers in similar situations.

**Lisa:** That would actually be really helpful, yeah. Let's do that.

**Diana:** I'll send over some times.

**Tom:** Alright, we should talk about money. Diana, you sent over the enterprise proposal last week. The per-seat pricing is fine — $32 per seat per month at our volume, that's in line with what we budgeted. The thing I want to push back on is the implementation support fee. $15K for onboarding and migration support — that feels steep given that we're going to be doing most of the migration work ourselves. Lisa's team is handling the data migration from Jira, and our IT team is handling the identity provider setup.

**Diana:** That's fair feedback. The implementation fee covers a dedicated solutions engineer for the first 90 days, priority support during the migration window, and we do a series of workshops with your team leads. But I hear you that if you're self-servicing the technical migration, that changes the value prop. Let me go back and put together a revised proposal. I might be able to restructure it as like a lighter-touch support package.

**Tom:** That would be great. And honestly the dedicated solutions engineer — that's the part I'd want to keep. It's the workshops I'm less sure about.

**Diana:** Got it. I'll have something to you by Thursday.

**Tom:** Perfect.

**Lisa:** One more thing, sorry — and this is more of an FYI. We've been in conversations with Monday.com as well. Their enterprise team has been pretty aggressive with their pricing. I'm telling you this not as a threat or anything, just for full transparency. We prefer TaskFlow — the workflow automation is better and the API is way more flexible — but my boss is asking me to keep the comparison going until we've signed.

**Me:** Appreciate the transparency, Lisa. That's totally understandable. We want to make sure we're earning your business, not just getting it by default. If there's anything specific that Monday.com is offering that's appealing, I'd love to hear about it so we can make sure we're addressing those needs.

**Lisa:** Honestly it's mostly the pricing. Their per-seat cost is lower, but I think the feature gap makes up for it. It's more of an optics thing for my leadership.

**Tom:** Yeah don't read too much into it. We're going with TaskFlow. Just gotta do our due diligence. You know how it is.

**Me:** Of course. Well, we'll make sure the proposal Diana puts together is competitive.

**Diana:** Absolutely.

**Tom:** Great. I think we're good. To summarize from my end — I'll send the security questionnaire with Raj CC'd this week, Lisa's going to work on the rollout plan assuming mid-April for SSO, and we're waiting to hear back on SCIM and the revised pricing.

**Me:** That's my summary too. We'll get you the SCIM answer by Friday, and Diana will have the revised proposal by Thursday.

**Diana:** And I'll send times for that workspace best practices session with your team leads.

**Lisa:** Sounds good. Thanks everyone.

**Tom:** Thanks. Talk soon.

**Diana:** Thanks Tom, thanks Lisa. Bye.

**Me:** Thanks, bye.

*[Post-call — just Diana and me]*

**Diana:** So... the Monday.com thing.

**Me:** Yeah.

**Diana:** I don't think it's serious but we should be sharp. Like, the implementation fee pushback plus the competitor mention in the same call — we need to make sure the revised proposal is really good. Not just a discount, but something that makes them feel like they're getting a premium experience.

**Me:** Agreed. Maybe we should look into what Monday.com is actually charging for enterprise. Do we have any intel on that?

**Diana:** I can ask around. I think our sales team has some competitive pricing data. I'll check.

**Me:** Yeah let's get a read on that before you send the proposal. Just so we know what we're working against.

**Diana:** Will do. Okay I gotta run to my next one. Good call though. I think we're in a good spot with them.

**Me:** Yeah same read. Talk later.
