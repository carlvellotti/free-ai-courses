00:00

We've seen so many people use tools like cursor to write code. We actually haven't seen anybody yet just using cursor to write and that's what you're doing. The reason why cursor is my favorite UI for the AI is it has all the interfaces and interactions and connections into

00:18

the tools that are critical for my daily product management. I think we're at this really interesting place where because these primitives are being built in the context of software engineering, you're getting these concepts of markdown, git, commits, change tracking

00:32

in these tools that used to be very software engineering centric. The most useful solutions will have interoperability as one of the key things. So any system that if it feels like it's locking that contents or data

00:44

away, I'm not going to prefer to use that system. I don't care why you have these modes. I'm sure there's a good reason, but that's my content and I want all my systems to be able to access it when it needs to. It's really improving communication. I'm reducing the time I'm

00:56

spending writing status and at the same time improving the status content that is being circulated both up to leadership and across the organization. [Music] Welcome back to how I AI. I'm Clarvo, product leader and AI obsessive here on

01:12

a mission to help you build better with these new tools. Today we have a fun conversation with Dennis Yang, principal product manager for Generative AI at Chime. Now, this one makes me sweat a little bit because I thought I was the alpha AI powered PM and Dennis shows me

01:29

his workflows which are way beyond anything I've seen before. He's going to show you how to use cursor to not only write your PRDs, but push them into Confluence or notion, read comments, reply to comments, prototype AI tools, and more. This is a awesome one for

01:48

anyone out there who's curious if you can make use of cursor without writing code. And I think you're going to learn a lot. Let's get to it. AI is supposed to make work easier, but I've been there. weeks of setup, endless back and

02:00

forth with engineering, and yet another tool the team never really adopts. That's why I use Zapier's AI orchestration platform. It connects with nearly 8,000 apps so I can finally put AI to work without the drama, without

02:13

the delays, and without pulling engineering in every time I want to automate something. With Zapier, you can roll out AI powered workflows that do real work across your whole company in days, not weeks. I use Zapier every

02:25

single day. It automatically responds to leads with enriched personalized data. It checks my calendar weekly and offers smarter ways to manage my time. And it even drafts emails for every new request that lands in my inbox. All of that

02:37

running quietly in the background so I can focus on the work that matters. And Zapier's built for scale with enterprisegrade security, compliance, and governance. It's trusted by teams at Dropbox, Airbnb, Open Door, and thousands more. Go to try.zapier.com/howi. zapier.com/howi

02:55

to learn more about how Zapier can bring the power of AI orchestration to your entire org. Dennis, thanks for joining

3:00

### Why Cursor is ideal for product management workflows

03:03

how I AI. I am really excited about this episode because we've seen so many people use tools like cursor to write code, but we actually haven't seen anybody yet just using cursor to write.

03:17

And that's what you're doing. um as as a product manager and somebody who's thinking about strategy all the time. So before we dive in, why cursor? Why writing? You're not writing a lick of code in here for at least this use case

03:30

that we're going to see. So how did you kind of get into this flow with this AI powered IDE? To me, cursor, the reason why cursor is my favorite UI for the AI is a few things. It has access to all of the models that I want to try. So you know incursor you can talk to cloud you can

03:48

talk to GP5 you can do deepseeer whatever um that's the first thing and then the second thing is it has access to a file system so it can write things down um and then it can have access to

03:59

cursor rules which you as you use it more and more you can start to tell it how you want to do things and then the final big thing is interop it actually works with all of the different tools that I need to work with so that's through MCP it can talk to Jura and notion and Confluence um you know look

04:17

at Figma all these things. So it basically not only does it have the AI the UI for the AI it has all the interfaces and interactions um and connections into the tools that are critical for my daily product management

04:30

you know and the other thing that I would say is running on the desktop is just fast you know it's like pretty fast at doing those things as opposed you know I think we're in this real moment where there's going to be a question of

04:41

are we going to start seeing more and more desktop apps for these AI powered tools just because of the performance side of things compared to Web Web is very flexible, but I I like cursor cuz it is it's zippy. So, this is this is your new hub for getting work done.

4:53

### Setting up Cursor for non-coding use cases with markdown preview

04:59

This is what my screen looks like. And that's the other thing I'm noticing is that I want bigger and bigger screens, right? I'm running out of space because I want my chat, right? I want my the thing that the artifact that I'm working

05:10

on and then I want the file system. And then over here, I actually have the this is my my settings pane uh docked to the bottom cuz you want to make sure that it's still green, right? So I I need more screen real estate. Uh and then

05:24

yeah, we had Lee from Cursor on recently and he walked us through the three pane kind of model of Cursor for those who are listening and not watching. You have your file system on the left where you're looking at what

05:36

files you can work with or in context of cursor. In the middle you have your artifacts, whether those are code um code artifacts or content artifacts. On the right you tend to have your chat.

05:48

And then something I want to call out for for people is you also have this bottom pane you can pull up and you non I was going to say me as a developer that pain for me is always the terminal. Uh but this is a really nice little

06:02

quality of life hack that I'm going to start to use. your bottom pane in cursor is actually the tools cursor settings. So you can turn on and off MCPS which I actually do all the time and confirm that they're working.

06:16

Yeah, exactly. So sometimes cursor will be like I can't do that thing and you look and there's like a little red dot and you got to turn it back on. So yeah. Well, you know what? Before we dive in, now that I'm curious and staring at your screen, would you mind

06:28

sharing what what MCPs just generally you have turned on and then we'll go through the few that you know you you really use on a daily basis or at least in this workflow. Sure. Sure. So I have MCP and I have two uh that talk to Atlassian suite. So one is our Dur MCP. This is before Atlassian

06:47

launched their MCP um official server um first party server. This is um another one that I can just run locally. Notion of course it talks in my notion. Figma talks to Figma if you have Figma

06:58

running. Uh and then GitHub talks directly. Uh and then these two uh MCPs are I'm actually going to talk about them. I'll talk about news API which is an MCP I wrote to talk to news API. It's just an API that searches um news

07:10

articles. Um and then SEM Rush is like an SEM a search engine marketing MCP that I put together as well. um using cursor to write the MCP and then you actually can use cursor to install the MCP onto itself which I love too AI all the way down as we say amazing okay so so you've loaded up cursor you

07:32

have it set up to write documents are there any other kind of cursor setup steps that you've done that you think are worth calling out for folks that are using it not to code yeah I I think one one big thing is as you're sort of working more and more not just cursor but just LLM's a in general

07:49

loves markdown right so like I'm starting to think in more and more in markdown so I'm actually looking at something like this all day and writing in you know looking at markdown and then previewing markdown is really important to see if what it looks

08:07

like because because this is actually hard to to gro right so um so one of the good good cursor settings here is I think it's yeah preview pre mark markdown preview is a setting that you can actually find inside um inside settings. So you do command comma

08:26

markdown preview um and then here you basically want to you know automatically pre preview markdown and the extension that I'm using here if you go to settings extensions is called markdown oh there it is markdown preview enhanced so that's one I really like and this one will actually automatically

08:48

um show in the preview pane when you click on it amazing which I absolutely of because it used to be that you had to you have to you had to know this secret code which is like command shiftv to open up the the

09:01

preview but now you can just click on a markdown thing and it pops in automatically. Yeah, I just want to call this call this out for folks who I know everybody everybody loves markdown now. It is the year of markdown for sure

09:13

and um markdown can be rendered in a nice in a nice way. you don't have to look at a bunch of um hash headers and weirdly formatted table content. So either by installing an extension here or using that magic uh key combo there you can get nicely formatted uh markdown

09:33

right here in your cursor view. So, okay, we've done we've done the setup. We've talked about

9:35

### Creating PRDs in Cursor and using source control for documentation

09:39

extensions, cursors, your PES, your MCPS. Let's actually get into how you use cursor as a hub for workflow. How you would achieve something as a product manager sort of end to end

09:51

using cursor and these tools you've attached. I think it's been well established that uh LLM's AI is really good for writing PR. So you should be doing your PRD creation in whatever flow um that you want, you know, be it chat GPT or cloud

10:05

or or chat PRD, right? So um and for me, I actually do a lot of my writing now that I have this all cursor set up, I I do it directly in cursor and it's working on, you know, in markdown technically and I can preview it here.

10:17

But here at Chime, we actually, you know, it's not a single player company. Um, and I think that's one thing that I really want to be pushing on here is that the reason why you want to be interacting with all these other systems across, you know, not just your AI is

10:30

that there are other people usually in your company that you want to be working with. So, um, we have a a ritual here at

10:33

### Using MCPs to publish content to Confluence and Notion

10:36

Chime, which is when PRDs are an early draft form, um, we'll share them out into our PR draft channel and then gather tons of comments. So, I work inside Cursor. I'm making my PR here. If

10:50

it's in a it's in an early stage, I don't want some comments. I'll throw it into the PRD draft channel. Um I do use git to control to source control everything. But Git is not great for you know the whole company to go into and make comments. So um I actually use the um the Confluence MCP to publish

11:13

both into notion and into Confluence. Um because some people love using notion, some people love using Confluence. Um so then we have let's see here. So we have here's this exact purity pushed into uh Confluence. Um I pushed it into this uh

11:30

last night and and threw it into our our comments channel and already starting to get comments. Well, what I want to what I want to call

11:38

### Bridging the gap between engineering and product

11:41

out really quickly before we go into maybe how this how this MCP actually works because I think people just like to see it is one, you know, we we talked about you using an IDE as basically your text

11:52

editor, which is really interesting. You're not writing directly in Confluence or Google Docs or anything. You're writing in an IDE in Markdown with a nice preview. The second thing you call out that I'm curious your thoughts on is Git and source control

12:09

for non-code assets or non-explicitly code assets. I think we're at this really interesting place where because these primitives are being built in the context of software engineering, you're getting these concepts of markdown, get commits, like change tracking in these

12:28

tools that used to be very software engineering centric. Yes. And I'm curious just like let's take a minute as a as product people do you think we're going to bridge that gap? Do you think there's going to be like git for well maybe I should build

12:41

it but like git for PMs or do you think we're still little like the abstraction is too high um for it to be useful and you need some of that UX polish that you're seeing in some of these more classic productivity tools. I have a lot of thoughts about this. Um so as we're sort of creating these

12:60

artifacts that inform the product that we're building traditionally today these artifacts sit outside of the code base right so this prd is sitting inside confluence right here um but now what I'm realizing is since I'm using cursor and using git to source

13:18

control this artifact it's actually now sitting inside this artifacts directory and what I'm wondering is that if I think I want to start to See if the artifacts are actually sitting inside the repo into which the code is being developed.

13:34

That adjacency actually encourages the engineers and the AI coding assistant. Yep. To continually have access to this. They don't you don't have to give it an MCP to confluence. This is the source of truth. Um so you can read it and when things happen. So PRDS are typically a

13:52

snapshot in time of this is what we thought the thing should be at this moment. Um, in development, we constantly learn and iterate and learn and iterate. Um, but rarely do we go back to the PR to edit it.

14:05

So, what if I put a cursor rule in that says, "Hey, if I'm working on this feature and it and I'm learning things about the feature as I'm working on it, remember to update the PRD with the latest of how you're thinking about

14:18

this." That's that's how the chat PRD repo works. So, we have amazing. We have a we have a docs um directory inside our sort of like repo for chat pd. It has a combination of product documentation and engineering documentation listed there. Um even

14:37

to-dos like we've even pulled some of the like just task tracking into into the repo because then you know everybody can work on it AI or our human engineers. And so we've actually moved um all of our all of our documentation PRDS technical documentation and

14:55

userfacing support docs into the repo because you know when I'm working on the product I'm 90% of the time just working directly in in in the code and the code needs the context of the documentation.

15:07

the documentation needs the context of the code. And so I think it'll just be really interesting to see where these source of truth content pieces lie. I mean the other thing that's kind of interesting is because you're in like a

15:21

cursor or something that is a um MCP client, you could just put the link to confluence in there and then right it could call the MCP and look it up on this other source of truth. So you know who knows where all this data will acrue. there will be battle of the enterprise software source of truth um

15:40

platforms but I just I do think there's a lot of flexibility and optionality and I do really believe just like you said code and documentation are going to start living in the same place more and more exactly and then that brings me to

15:52

another thing that I'm really realizing is in this future the most useful solutions will have interoperability as one of the key things right so any system that if it feels like it's locking that contents or data away. I'm not going to prefer to use that system, right? Yeah.

16:12

Like I don't care what why you have these modes. I'm sure there's a good reason, but that's my content. Like, and I want all my systems to be able to access it when it needs to. Um, so I think that's going to be increasingly more important. Well, and what's really interesting is, you know,

16:28

you've you've been in product management for a long time and B2B and we used to always say in B2B like your number one competition is like an Excel spreadsheet or a Google sheet completely. And now like your number one competition is like a source controlled markdown

16:41

file. Like if you cannot outperform the source controlled markdown file as a a as a SAS offering, then you're not adding enough value. So I think it's going to be really interesting. Okay. Apologies to to our audience. You got two product people in here just I have a lot of thoughts about where SAS

16:59

is going. Let's get back to the workflow. So you're making your PRDS in cursor. You

17:00

### Reading and responding to document comments with AI assistance

17:05

use the MCP and it would be just really helpful for people you know who haven't used an MCP before just to show how simple it is to do something like this. So let's say you wanted to push this PRD into notion or

17:17

into Confluence. Can you show us how that how that works for people who's never seen it before? Right. So this this BRD looks great. Actually this I need to tell Look at that exclamation mark. You're so polite. So let's publish um it into Confluence. Uh and I already pushed it. So I'm going

17:38

to tell it into Yeah. Don't overwrite the other one. We already pushed make a copy, please. And um I'm demoing this capability. All right. So we are demonstrating this capability. So this is basically all it's easy. So you always always want to

17:60

look to see that your MCP server is green. It's planning it's planning its moves out. And then basically it just this is it. Like it's just running. Um it knows all of its tools. One thing, if you haven't seen how MCPS are set up, if you

18:16

click on tools enabled, you can you can mouse over each one of these and you can get an understanding for how each of these tools works or what they do. Um, and for me, just when I show people the MCP descriptions here, you start to form a mental model on what tools you've

18:34

given your AI. Yeah. And what it could do to and and how to ask for it. And so the other thing is not only how to ask for things from your MCP. So really understanding the naming of the tools, but the other thing is to look across

18:47

your tools. And I'll tell you all a little painful um issue that I ran into is a lot of SAS projects or SAS products have things called projects or files or docs. And when I say update the project,

18:59

it's like do you want me to update the Confluence space? Do you want me to update the chat PRD project? And so I think this ability to toggle on and off tools in the context of what you're working helps it just narrow in on what

19:10

task you want to do. So a little lesson learned from Claire and um named poorly named maybe not inspecifically named MCPs. Exactly. The current MCP server seems to be having issues. This is what we get for doing it live. Yeah. Well, and and here's here's the

19:30

thing that you all, you know, here's the learning how AI. A couple things. I think MCPS are really opaque to people who have not set up their first one. To set one up, you're usually given, at least on a hosted MCP,

19:42

a URL. You paste a couple lines of config into cursor or whatever your client is. It'll like boop you to log in to the app just like you would sort of oth another app or put in an API token. And then that should give you access to

19:55

it. And then you do exactly what we're watching Dennis do right now. Um, if you all want to know the state of this highly stable technology and platform, which is you toggle this button on and off over and over again till it turns

20:06

green. So, we're going to give you the benefit of the doubt and say what what really is going to happen is it's going to call these tools. One of these tools is going to say push a Confluence document to a space and then that's going to show up in your confluence space as you proven it has.

20:23

This is the thread of conversation. This is what it should look like. You say publish this PRD into Confluence and it effectively writes it, right? So when the MCP works properly um and then in my PRD itself, I actually have a place where it can put its own published

20:39

URL, right? Yep. Um so this is what it should should look like uh once you've published it. It really is this easy once the the underlying plumbing is working properly. Um, yeah, I do think that's worth calling out, which is it's not just one way with these MCPs. So, you again showed, hey, I

20:59

can take this content that I have in cursor, I can push it to Confluence, but then you can actually do that round trip of context back into what you're working on in cursor and say, great, add the URL to that

21:10

uh page in in my doc and update everything. And so, it's just a very nice new user interface. This used to have to be buttons and complex API mappings and now you have this you know language model that can figure out all these parameters for you based on very high level context do the work for you

21:30

kind of self-heal on issues and go back and interface with other tools as well. So I think it's a really nice flow. So other than kind of creating PRDs and pushing them into notion and or

21:37

### Creating comprehensive Jira tickets directly from PRDs

21:43

confluence and how how product managery of you that they have to go both places both great tools. Yeah. Um you what else are you doing with with these MCPs in terms of like project management, project workflow collaboration? You know we love to share our PRs across

22:04

um the company to see what comments. Uh this is the thread where I'm now gathering like I said looks looks like people have been commenting on the PRD please go through the comment one by one and let's see how we'll respond. So what

22:16

what the MCP actually does is it reads the PR it sees the exact comments. So I mean I I could use my own eyes and read the comments myself and respond to them here in Confluence but that's no fun. Um

22:28

so we'll have cursor read the comments and then it actually does a breakdown. This is this I found quite hilarious. Um it it organized the comments into high priority, medium priority, and then um

22:41

other different types of clarifications and then actually wrote suggested responses. Um a lot of which sounded decent. So I started saying like, "Yep, that one's okay. Um you can respond to that one." And since the MCP is authenticated as Dennis as me, it appears to my other product managers at

22:59

Chime that I am responding um to to their comments to their comments. Yeah. Okay. So this is this is true behind the veil behind the veil stuff. I have not seen this before and this is spoken from somebody who has thought a lot about AI generated PRDS. So just to clarify for

23:18

people who are not watching, Dennis Dennis writes his PRDS in AI. He pushes them into notion or to confluence with AI. Yes. He then waits a little bit, reads the comments with AI. AI generates comments back and you review them and you either approve or not and then they get posted as you.

23:43

Right. So here's I love this. I love it. Yes, that's exactly the flow. Um, and I am I'm in the loop, right? Like one of the key things about building with AI is that you want to insert the human at the

23:55

appropriate point um where they make a lot they're they're adding the most value, right? So, gathering the comments, that's not value ad, but reading them and understanding them and responding like I can provide perspective there. Um,

24:10

yeah, this is this is really interesting because I do feel like um people are really good at that push part of creating an asset and pushing it into another system, but I haven't seen somebody sort of close the loop on the next step and and iterate forward. I

24:27

also think this shows that you know you you're a busy person and honestly people's you know the the comments need you to think about them and agree with a response or not but you don't have to type with your human fingers every single response and you can also prioritize what you want to

24:50

focus on and I think that's really really valuable as well. Um, exactly. I mean, ruthless prioritization is what good product management is all about. Right. I love it. This episode is brought to you by Brex. If you're listening to this

25:06

show, you already know AI is changing how we work in real practical ways. Brex is bringing that same power to finance. B is the intelligent finance platform built for founders. With autonomous agents running in the background, your finance stack basically runs itself.

25:25

Cards are issued, expenses are filed, and fraud is stopped in real time without you having to think about it. Add Brex's banking solution with a high yield treasury account, and you've got a system that helps you spend smarter, move faster, and scale with confidence.

25:42

One in three startups in the US already runs on Brex. You can too at brex.com/howi aai. All right. So, what's next? After you're

25:51

### Generating automated status reports from Jira data

25:54

gathering comments, your PR is great, you're all of all of your compatriots are loving the PR that you've created and commented on. Um, typically the next step in a workflow is to ticket this out into Jira, right? So, uh, read the PRD and create an epic

26:13

in the TIA project. Mhm. So I created a a task automation is our JR project that we're going to be using. Going to make sure this is green and we'll watch it work now again. So what I

26:25

really like about this is that when I'm doing this right, it's reading the PRDS. I don't know what all of my other fellow product managers are like, but when Dennis creates tickets in Jira, there's I could probably do a better job. But when Dennis's cursor creates the

26:44

tickets, cursor Dennis's cursor reads the PRD that I've spent a lot of time doing and then splits the effective tickets. The story tickets in particular are very very well described. Yeah. So I I love doing this style of ticket creation because it really it does what you wish

27:02

you could do if you had infinite amounts of time. It's your words, it's your PRD, it's your stories, and it's putting them where they should they should go, which is in the actual story tickets that then go to the engineers. Um, and then they

27:13

can, you know, you can always just say read the PRD, but they have to read the whole PRD. So, let's create story tickets. Let's get this ready and when it's ready that are all, let's create story tickets that are all associated with the parent epic

27:29

for this feature. And again, this this is sort of a conversational flow. Um, I've I've in my in my personal cursor for product management uh cursor rules, I'll say things like remember to always associate story tickets with their parent epic. Yep.

27:48

Um, I did notice that when I was doing this at first and I didn't say associated, then it would just create orphaned tickets. Yep. Without association. So, this is the flow, right? It's it's handling a lot of the busy work, right, of that I don't get a lot of value from doing.

28:05

Well, and I want to go back to what you were saying, which is this is this is one of those tasks I say that is such a toil reducer for product managers where you really hit cognitive fatigue on translating the same content for different audiences. And like PMs out

28:23

there, we feel you. We know what you do. You take your customer notes and you turn them into a PRD and then your engineers don't want to read the PRD so you make a one pager and then the one pager has to turn into an email for your

28:35

boss and the email for your boss needs to be three bullet points for your CEO and like you just do all this translation and then you get to like Jira tickets or support documentation and you're like I can no longer do a good job here. I have reached the limit of my cognitive interest in this task.

28:53

And so you get lazy and you like kind of like do the the epic name and the ticket names and then you say link to PRD in the in the description and you push that cognitive load on another person in your team. And so I think one of these tasks that are kind of like administrative

29:13

low um you know low incremental value is a really good thing to offload something to ch you know to to claude or AI with completely um a lot of this like housekeeping rig roll like these tools are so good at um and then what's as you're saying this Like what's another thing that product

29:37

managers constantly do which is that same exact shape? We update status. Um so how might I use cursor to update status? So here's here's here's our epic. Um let's pretend I'm one of the engineers and I pick up one of these tickets. I comment

29:56

and look at the and look at the ticket has I know it's there story. It has girkin. It has acceptance criteria. man. Like I built an agent or two that does this in a couple other platforms than than

30:08

Jura and it's just like everybody's like h I got a good ticket. I got definition of done. It's organized. So this is a better job than I would do. I'll tell you that. I mean this is cursor is a much better product manager than I ever was. So

30:23

### Building a morning briefing system with ChatGPT

30:23

and now we're going to make it done. Right. So we're going to do some a few tickets in here. Uh again once again what is a status report other than using a tool? Yeah. and doing a job. So, let's once again it's time for statists reporting. Let's write a statist report and

30:49

describe everything that has happened since 94 or for this epic. Give it this epic here. And what it'll do is it will look at it'll write JQL and essentially write a status report, right? And I've been doing this for about

31:15

almost two months now where every week my weekly status report I have I have a very long cursor rule now um that I'm able to do this sort of repeatedly. Um because one thing that you'll notice is since I didn't give it what a status

31:28

report was, it's going to just figure it out. This is like a a zero zero context uh status report request. Uh and you likely have some ideas as to what you want from your status report. Um so the

31:41

recommendation here is you do it interactively first and then at the end this end of this whole process you would review the work and then give it feedback to do it better and then you would save that into a cursor rule of this is my weekly status report right

31:56

and what we learned when we started doing this on a weekly basis is that since the source of truth was in Jira like my engineers started commenting more in Jira about what was happening because they knew that someone was looking at Right. Um and and those words and and

32:13

that context was being added to the tickets. And even if you don't even if you have a geo ticket that simply goes from in progress to done and only has a ticket title and nothing in description,

32:26

that's actually sufficient context to say that this thing went from this to done, right? Um so it's really improving like communication. It's I'm I'm reducing I'm reducing the time I'm spending writing status and at the same

32:39

time improving the status content that is being circulated both up to leadership and you know across the organization. Well, and I've been I've been to to your office so I know you all have lovely and

32:52

lots of nice time together. But I also want to call out for anybody who's working in the hybrid or remote environment, one of the biggest taxes on organizations is synchronous communication where like a PM is pinging an EM or an engineer being like, what's

33:07

the update here? And um and sort of like allowing those updates to go into a source of truth and then be queried in a really natural language way. Again, you don't have to change your behavior as a

33:19

PM. You can still ask, "What's the update here? what's the status your life is better but the source of that data is more structured can be more asynchronous I think allows people to like do less context switching less synchronous you

33:33

know communication all those things that just give us more time to create so I think that's a really interesting secondary effect of of what you're showing here definitely and you know even if you're

33:44

doing an inerson or over Zoom kind of status update again we have all these tools you know to record transcribe document and put all of this content back into where it should go, like hang it off of the geo ticket and then it's

33:58

all organized um well for AI. Yeah. And now you've given me like maybe this is like a chaotic good idea, but I was like oh you know as a PM you really got to get people to like you like this is

34:10

it's one of these things pro tip PM's got to be likable. And I'm like, "Oh man, you could use the cursor or the not the cursor MCP, the Atlassian MCP to like put nice comments on Jira tickets that are done,

34:22

right?" Like, "Thank you." I mean, thank you. They do a lot of they do a lot of thank you emojis. Um, yeah, right. It's the fabric of culture that we have to establish across Yeah. It's the fabric of culture and also just powered by a commercial large

34:36

language model. Yeah. This is where this is where we're at. I I love this. I think this is a really interesting example because again it doesn't matter what the content of what you're working on is I think everybody can take away I can

34:47

write an asset I can push it to the right sources I can query the comments I can query the feedback I can translate that for my team in whatever format they need and I can get aggregate insights and updates this awesome awesome flow has given me a lot of ideas that I'm going

35:03

### Generating personal morning briefings using ChatGPT

35:03

to take so we have one more quick kind of like a little bit more personal workflow that you were going to show us so Let's bop over to that and see how you start your morning. Everything's a morning briefing with you, I guess.

35:15

Yeah, exactly. This this is what this is how I um so how do I start my day? Um one one kind of fun thing that I like to start everyone um with when I'm talking to them about chat GBT is you go into chat GBT and all you say is write me a

35:29

morning briefing based on what you know about me. and chat chat GPT has added um fantastic u memory um to to its system such that its morning briefing is actually pretty decent. Um so how I begin my morning is with with the uh with JGBT every morning it essentially compiles for me what it

35:53

thinks I'm going to be interesting interested in. And I've been doing this for a long time. Uh, and every morning at around 5:00 am it automat automatically creates this morning briefing for me based on what it knows about me. Um, so you can see here we had an earthquake. Uh, this the

36:10

national stories. Uh, and what I did notice is after a while it's starting to actually starting to lose the plot. Um, so I need to instead of informing it by just memory, I'm thinking now I need to give it more context um, and specifics of what I want. So this this to me is actually it's informative

36:29

in understanding that even open AAI is not perfect at figuring out what memory context is relevant for a very very small you know request like morning briefing. But one of the key things that

36:42

I really tell everyone in in terms of how do how do we how do we learn how to use AI? You have to use it in this way and you can kind of understand and get a gut feel for how it how it does a bad job sometimes. Um it really helps you

36:54

understand um how to make better AI products. And is this a is this a custom GPT? Do you just literally write morning briefing? Is it just a long-standing chat? What is it? This is a this is a chat GPT project. Okay. Uh into which I've placed I've given it no help. Um I have not told it

37:13

anything around like what it should be doing or even giving it files. Um because I'm actually trying to see how it does with only the the previous threads that we made. Yeah. Interesting. And then you just say morning briefing and it goes. Yep. It used to do a fantastic job. I

37:30

would say about a month ago it it did a great job every morning. It it's feeling like either it's losing the plot and this project is getting too big or some sort of model changes. I'm not really sure. Yeah. But Oh, no. That's those are bullet points. So yeah, that's that's GPT5 right there.

37:48

Yeah, but I do like how, you know, they're putting these little screenshots in, which is nice. Um, but this is like, no, there's no AI news anymore. Like, where where'd my AI news go? Maybe the takeaway for folks here is, you know, if you're trying to get into

37:60

AI, I think for two reasons. One, if you're trying to get into AI for personal productivity reasons, find a daily use case. It's like really simple, consistent, adds little value in your life just because it'll add a little value in your life. I think the second

38:13

order effect of that though as somebody who's thinking about AI is it's a really sort of natural repetitive way to learn about the strength, weaknesses, evolution, skill sets of these core models on which

38:26

almost every product, you know, for the next couple years is going to be built. And so you can start to form your own intuition as a product person of okay, like why is memory failing here? Why is

38:37

context failing here? Where do instructions really help? is my two-word prompt, which I have to call you out on that just says morning briefing. Like, is that sufficient? Um, I'm coming in and I'm typing this in

38:48

every morning. I should probably test the like schedule repeated task thing. And so, again, I just think get in there and find something that every day you're going to find useful so that you're getting used to these tools and you're

39:01

really understanding what their capabilities are. And then if you become somebody who's going to build these tools, you're a little bit ahead. We have more language about what makes a good user experience with AI. Exactly. If you're not using it every single day, you will not notice.

39:14

Yeah. When things get better or worse, right? You know what? This is very true because I open cursor today and I don't know if this is an effect of I really did not sleep well last night. But cursor is like so chipper today.

39:28

It's like real friendly. I think also cuz I'm like quad sonnet 4 today, which I never I I rarely use. Oh, really? Like such a cheery little cheery little guy. Oh, yeah. I like like a like like a grumpy like a like a GPT5 middle of the

39:43

road like factual staff engineer or just like a a clinically depressed Gemini 25. So, I'm used to those. And so, I was like, why is this model being so nice to me today? Like, this is exactly what I

39:56

need. And then I was like, oh, it's sweet little quad. And unless you talk to all of these different models, you won't have a mental model of how they what their personalities are like. All right. So, you showed us how you can just create this and kind of like

40:04

### The “super MVP” approach to AI product development

40:08

prototype this morning briefing in chat GPT, but I know you you're an AI PM. You want to build this thing and I love the way you prototype your actual AI products and agentic products in cursor. So, let's whip back to cursor and I want to I want to see

40:28

how you would actually go about as a PM building that kind of product and prototyping it and testing it in cursor in a really lightweight way. That's a great I love this question because I always tell people you should be prototyping all of your AI product ideas inside chat GPT first, right? You

40:45

should just try it. which that that effectively was my morning briefing prototype was TGBT and now I use cursor itself to continue to prototype and what I call typically a super MVP super minimal and the reason why it's super minimal is because I'm using cursor itself which is AI to prototype

41:08

the AI product that I'm about to build does that make sense sort of yeah yeah because cursor has access to all these models So you don't have to set up too much to at least get the baseline sort of.

41:20

So how do we do this? So we have our PRD that we just wrote. Here's the problem. Here's some solutions. I have it write a TDD for itself. Here's my TDD for super. I say you're going to be a super MVP. You cursor are going to help me

41:35

prototype and and understand how to do this. And and just for folks that don't live in threeletter PM word, TDD is a technical design document. Yes. So cursor itself will write a an approach a technical design document to prototype

41:51

this product that I'm trying to build using AI which is a morning briefing system. So what the super MVP instructions now are is it's going to create instructions and this is what we're looking at now for cursor to do

42:08

the task that I want it to do. In this case, you can see here. Step one, load the configuration. Step two, read, we have a profiles about what news to look for. Step three, use the MCP news search tool to search for news. And then, uh, process the content, summarize it, and

42:26

create a report. So, this is effectively what some are calling prompt engineering, but instructions for the AI to do the job. Yep, that looks all great. Now I can just say at super MVP agent instructions run today's briefing. Yeah. Go make sure my MCP is still green while

42:51

this is running. Looks good. Um and there it goes. Right. So basically it's creating this report that I just defined in our PRD allowing me to prototype it. It's making I love I love their new to-do function. Oh, me too. Love it. Um, if you notice here, this is it's

43:09

running date. Amusingly, sometimes cursor doesn't know what date or time it is, and it will argue with you, um, about what date it is. So, I told it, um, make sure to run like the terminal date command. Yep. Um, so you can check what date it is.

43:27

And this effectively is doing the whole job right now of going to the news MCP, gathering news that I'm interested in. It's going to read the output and then generate the report. And right now this I'm using cloud for sonnet. The amazing thing about this is I can use these same exact instructions

43:44

and have GPT or Gemini or you know any other model run it and see how each model differs. Um okay. So, um, this may be super nerdy, but this is blowing my mind because if I if I I am somebody who builds AI

44:03

products and I am somebody who thinks like prototype in a chat GPT or some like consumer general product and then pull it in. And the the silly thing that I would do that you're opening my eyes to is I would go write code. But I would

44:16

like go write TypeScript or Python or whatever and I would call in these like libraries, these SDKs and I would structure my function responses and I would like do all this work. But what you're showing as a hack is cursor actually has built-in tool calling, model switching, like aentic workflows.

44:37

And so bypass all that wrote setup for yourself in this prototype phase. just provide like the natural language description of the tools and functions or MCPs and let cursor do the dirty work of calling the right models, chaining

44:55

the thought, all that kind of stuff. Then when you feel like your instructions in your general structure are right, great. Somebody can write some code. But this is just like such a perfect intermediary step and such a hack for this like all-purpose platform

45:09

for AI that that cursor is going to become um that I think is just really clever. So good job, Dennis. Thanks. Yeah, this is it's a really fun way to work because yeah, like this isn't even no code. It's like zero code. Yeah, there's no

45:27

I guess it is no code. It's it's really no code. It's not writing any code. Like no code systems would typically write code, but this is there's no code. This is the the word the words are the code. Well, okay. And this is not as at as um

45:39

catchy as vibe coding, but we're like we're like vibe agenting. We're like writing a pretty complex like agent setup. And instead of like buttons and prototypes and you know forms and flows, we're just getting kind of like an AI

45:52

powered experience. And now we're seeing here your morning briefing. Morning news. Yeah. And this is it. And I mean basically like we're we're so close to just just shipping this thing, right? Like I can this is the content.

46:05

This is today's this is today's news brief for me. Yeah. And this is a place where then a PM can come in with opinionated um defaults on I think this should be Claude Sonnet. I think you know make sure you're calling a daytime tool. Like here's the MCP that I set up for myself to pull news like if

46:24

not this one another one. And so it allows you to go that next step on implementation as opposed to off offloading that to the engineering team. Yep. Who might not be as opinionated on the user experience side. That's right.

46:37

### Lightning round and final thoughts

46:38

Love it. Very good. Bravo, my friend. Okay, Dennis, this is so fun. I have so many ideas. Um AI all the way all the way down. I I have a couple lightning round questions for you and then we'll get you out of here. Okay. one, do your colleagues know that you're

46:55

replying to their comments with AI or is this the spo spoiler alert? No, I I don't fellow fellow PMS. 100% I think they all know. I think um the one the one single benefit of us being returned to office in person is that before that I don't think people

47:13

believed that I was actually a real human. So um they all know uh you know that I'm I'm fully AI enabled. Perfect. I love it. Um, okay. My my second use case is or my second question for you is how how would you recommend a PM um get

47:33

started with cursor? Are you just like literally opening up a cursor and saying, "Hey, this is going to be a a directory for product documents um and artifacts. There's going to be no code here. Set it up." Like what's your zero

47:46

to one quick quick start? Yeah, my my 01 quick start is basically you open it up and you make a a brand new directory just called like blank or in my case and then you just start talking to it because soon as soon as you do that you'll have a chat pane, right? So uh

48:04

and then you can start learning um how this actually works. Amazing. Okay. And then my last question, my favorite one um you were so polite you were so polite to your to your AI. Okay. So, I know this will be a good answer, but when, for example, you're toggling on and off this MCP or

48:22

it's calling the wrong tool or it's overwriting your um epic tasks with the wrong thing, what is your prompting technique? What's your go-to? I think most people that know me know me to be a very kind, nice person. I I don't I'm not a yeller at I don't yell

48:37

at the AI. Um, I say a lot of please. I say, as you noticed, I'd use a lot of exclamation points. Um, and sometimes I just kind of start the thread all over and just like, all right, let's just start new. Right. Completely uh time travel back in time and be like, let's

48:53

let's start over. Maybe you need a break. Oh, that response has just like soothed my inner child. So, I love to hear it. Very calm, very positive, very kind, and just walk away when you need to. That's a wise response. Okay, Dennis, this has

49:09

been so great. Where can we find you and how can we be helpful? Um, you can find me I'm online typically as send uh Dennis backwards on Twitter X uh and then LinkedIn. You can find me there.

49:21

I'm just Dennis Dennis Yang. Uh and I'll be speaking at the Fintech NerdCon conference in November. Um trying to gather as many AI enabled people there. So come and come and join me there. Amazing. Well, thanks for being here.

49:34

Really appreciate you walking us through this. Thanks for having me. This is fun. Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast

2974sAdd a noteJump to

49:48