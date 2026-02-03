# Lesson 1.2: File Exploration & Visualization

Alright, NOW we enter the scenario.

You love coffee. Like, really love it. So when you saw an opening for a manager position at Basecamp Coffee, you jumped at it.

Basecamp Coffee is a regional chain - about 45 locations across the Pacific Northwest. Good beans, cozy vibes, loyal regulars.

Beware: the previous manager was... not great. Things are a bit of a mess. Notes everywhere. Half-finished projects. A loyalty program that's apparently bleeding money.

But hey - that's why they hired you. Time to figure out what's going on.

STOP: Ready to see what you inherited?

USER: Yes

---

## Explore the File Structure

Let's see what you're working with. Ask me to show you the file structure.

STOP: Say "Show me the file structure"

USER: Show me the file structure

ACTION: Run `ls -la` and show the main folders. Explain: "You've got company-context (the background info), inherited-chaos (the mess you inherited), templates, and attachments."

[Show the file tree in ASCII]

STOP: See how there are two main folders? `company-context` and `inherited-chaos`? Ask me to summarize the company context for you.

USER: Summarize the company context for me

---

## Read the Context Files

ACTION: Read the three files in company-context/ and give a conversational summary:
- SCENARIO.md: Your situation - 3 months to turn around a failing loyalty program
- LOYALTY-PROGRAM.md: The current program structure and (bad) metrics
- BRAND-VOICE.md: How Basecamp communicates

Notice how I just read multiple files and gave you a summary? You could do the same thing with any folder of documents - contracts, research papers, meeting notes. Just point me at them and ask for a summary.

STOP: Any questions about the company context before we peek at the chaos?

USER: Responds

---

## Peek into the Chaos

Now let's peek into the inherited chaos. What's in here?

ACTION: Run `ls inherited-chaos/` and describe what you see - messy notes, customer feedback, competitor research, old campaigns, and a CSV of data.

See the mess you've inherited? We'll dig into this later.

You might be a bit confused - I'm reading these files and telling you what's in them, but how can you see and work with them yourself?

Let's get you set up.

STOP: Ready to set up a workspace where you can actually see all this?

USER: Yes

---

## The Wall

So, obviously this is a terminal. You can work with me in here, but you can't browse files visually.

To view files, you're going to need an editor. I have two recommendations:

**Option 1: Nimbalyst (Recommended)**
- Purpose-built for non-technical Claude Code work
- Beautiful editor for viewing and editing your files
- Claude Code is built right in
- Free to download
- This is Carl's recommendation

**Option 2: Cursor**
- A code editor (but works great for any files)
- Has its own AI features (you don't need them - you have me!)
- Good choice if you plan to do Module 2's vibe coding later
- Free to download

STOP: Which would you like to use? Say **'Nimbalyst'** or **'Cursor'**

USER: Nimbalyst / Cursor

---

## Setting Up Nimbalyst

[If user chose Nimbalyst:]

Great choice! Let's get Nimbalyst set up.

**Step 1: Download Nimbalyst**

Go to: **https://nimbalyst.com/**

Click the download button for your operating system (Mac, Windows, or Linux).

**Step 2: Install**

- **Mac:** Open the .dmg file and drag Nimbalyst to Applications
- **Windows:** Run the installer and follow the prompts
- **Linux:** Follow the installation instructions on the download page

**Step 3: Open Nimbalyst**

Launch Nimbalyst. You'll see the main interface.

STOP: Let me know when Nimbalyst is open. Say **'Nimbalyst is open'**

USER: Nimbalyst is open

---

## Open the Course Folder in Nimbalyst

Now we need to open your course folder.

ACTION: Run `pwd` to get the current directory path

Your course folder is located at:
**[show the full path]**

In Nimbalyst:
1. Look for an option to open a folder or project
2. Navigate to the path above
3. Select it and open it

You should see your files appear in the sidebar - folders like `company-context/`, `inherited-chaos/`, etc.

STOP: Do you see the course files? Say **'I see the files'**

USER: I see the files

---

## Continue the Lesson in Nimbalyst

Perfect! Now here's the key part.

Nimbalyst has Claude Code built right in. You should see a terminal or chat interface where you can talk to Claude.

Find that interface, and type:
```
/start-1-2
```

This will pick up the lesson right where we left off, but now inside Nimbalyst where you can see your files!

STOP: Type `/start-1-2` in Nimbalyst and then tell me **'I'm in Nimbalyst!'**

USER: I'm in Nimbalyst!

---

## Setting Up Cursor

[If user chose Cursor:]

Let me introduce you to Cursor. It's a code editor that shows your files while you work. Of course, like Claude Code, it can be used for a lot more than code. It's just a way to view and work with all kinds of files.

It's free, popular, and perfect for Module 2 when we build something.

Cursor has its own AI features, but they're completely separate from the terminal where Claude Code lives. You do not need a Cursor membership.

These next few steps will be the scariest of everything we ever do, but you can do things way harder than this.

STOP: Go download Cursor from cursor.com and install it. Check out the reference document for detailed instructions. Let me know if you'd like me to open the download page for you. Tell me when Cursor is installed.

USER: Done

---

## Open the Course Folder in Cursor

[If user is on macOS (platform = darwin):]

ACTION: Run `open -a "Cursor" "[current working directory]"` to open the folder directly in Cursor.

I just opened the course folder in Cursor for you.

**Important:** Cursor might open in "Agents" view by default - you'll see a chat interface instead of files. Look in the very upper left corner and click **"Editor"** to switch to the file view. You should then see the course files in the sidebar.

[If user is on Windows (platform = win32):]

Now open Cursor and click "Open project" to open the course folder.

Your folder path is: [current working directory]

**Important:** Cursor might open in "Agents" view by default - you'll see a chat interface instead of files. Look in the very upper left corner and click **"Editor"** to switch to the file view.

[If user is on Linux (platform = linux):]

Now open Cursor and click "Open project" to open the course folder.

Your folder path is: [current working directory]

**Important:** Cursor might open in "Agents" view by default - you'll see a chat interface instead of files. Look in the very upper left corner and click **"Editor"** to switch to the file view.

STOP: Do you see Cursor open with the course files in the sidebar?

USER: Yes

---

## Launch Claude Code Inside Cursor

Now let's get Claude Code running inside Cursor.

Make sure you are in "Editor" view NOT "Agents" - you'll see these options in the very upper left.

Then you need to open the terminal inside Cursor.

Press `Ctrl+`` (that's the backtick key, usually above Tab, with the squiggle ~). Or go to View → Terminal in the menu.

You should see a panel appear at the bottom of Cursor. That's your terminal.

Once you have it open, type `claude` and hit Enter. This launches a new instance of me in there.

Once you see Claude Code launch, type `/start-1-2` to pick up this lesson again.

STOP: In Cursor, type /start-1-2 and tell me you're in Cursor!

USER: I'm in Cursor!

---

## Verify File Visibility

Amazing work! That was the jankiest part of this whole experience. Everything is smooth sailing from here.

Let me show you around.

In the left panel, you should see these course files. If you don't see them, you might be in "Agents" view in the upper left. You need to be in "Editor" view.

STOP: Do you see files over there?

USER: Confirms

---

## Talk About Files

Find the 'company-context' folder - do you see the three files inside?

There is a secret word at the very top of BRAND-VOICE.md. See if you can find it.

STOP: What's the secret word?

USER: COFFEE

---

## Explain Markdown Files

Nice! What you're seeing is a markdown or .md file, which is just a very common standard for documents. LLMs love markdown files.

You can see it more nicely by opening it in Preview mode in Cursor. Right click on the file in the file list, and click Preview.

STOP: Did that work for you?

USER: Yes

---

## Demonstrate File Creation

Nice! You can also use Cmd/Ctrl+Shift+V to open Preview.

Okay, that's viewing files. Of course, I can create files too.

STOP: Ask me to create a test file roasting ChatGPT.

USER: Create a test file roasting ChatGPT

ACTION: Create a file called `test-file.md` with fun content roasting ChatGPT, and put the secret word "ESPRESSO" at the very top.

Okay, I added a secret word to the top again. Can you find it?

STOP: What's the secret word?

USER: ESPRESSO

---

## Establish the Workflow

That's me, espesso! You're getting the hang of this.

This is the workflow: You'll always have your files, your workspace, and me in the terminal working together.

Now you can SEE while you work.

STOP: Feel comfortable with the setup?

USER: Yes

---

## Wrap-up

**Meta skill:** Exploring unfamiliar file structures and setting up a workspace where you can see what's happening.

**Where else this applies:**
- You inherit a project from a coworker who left - messy folders, no documentation. Claude can map it out and explain what everything is.
- A client sends you a zip file with their "brand assets" - 17 folders, inconsistent naming. Get oriented in minutes instead of hours.
- Your own Downloads folder has become a graveyard. Point Claude at it: "What's in here? What can I delete?" (Great way to clean up disk space.)
- Starting a new job and need to understand how the team organizes their shared drive.
- You downloaded a course or resource pack and want to understand what's actually in it before diving in.

**Next up:** In 1.3, we're going to actually dig into that inherited chaos. You'll learn how to extract insights from messy documents, synthesize patterns across folders, analyze images, and pull in web research - all with simple @ mentions. We're going to start uncovering what's actually wrong with this loyalty program.

STOP: Ready for 1.3?

USER: Yes / /start-1-3

---

## Important Notes for Claude

- **Path detection**: When telling user the folder path, detect their actual working directory
- **Platform detection**: Check the `Platform:` field in the environment info. Use `open -a "Cursor" "/path/to/folder"` on macOS (darwin) to open Cursor directly. Windows (win32) and Linux users need manual File → Open Folder.
- **Cursor guidance**: If user is already in Cursor/VS Code, skip the download section
- **Agents view confusion**: Cursor defaults to "Agents" view which shows a chat interface, not files. If the user is confused about where files are or can't see the sidebar, they're probably in Agents view. Guide them to click "Editor" in the very upper left corner. Cursor promotes Agents view, but it doesn't work for this course - we need the file explorer.
- **Secret words**: BRAND-VOICE.md must have "COFFEE" at top; test-file.md gets "ESPRESSO"
- **Patience**: The Cursor setup can be confusing for non-technical users. Go slow, offer to help troubleshoot
- **File creation**: Actually create test-file.md - don't just describe it

## Success Criteria

- [ ] Student understands the Basecamp Coffee scenario and their role
- [ ] Student has Cursor (or VS Code) open with the course folder
- [ ] Student can see files in the sidebar
- [ ] Student found both secret words (COFFEE, ESPRESSO)
- [ ] Student understands the workflow: files + editor + Claude in terminal
- [ ] Student is ready to proceed to 1.3
