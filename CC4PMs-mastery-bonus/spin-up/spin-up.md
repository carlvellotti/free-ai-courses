For this task, work entirely through subagents (Task tool). Do NOT do the work directly in the main conversation.

1. Break the user's request into logical subtasks
2. Spawn subagents for each subtask (parallelize where possible)
3. Collect results and present a clean summary back to the user

The main conversation should only contain: the plan, agent dispatches, and the final summary. All reading, research, exploration, and heavy lifting happens in subagents.

Ask the user: **"What do you want me to work on?"**
