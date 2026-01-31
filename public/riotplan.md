# RiotPlan

**Plans as Lifecycle**

## The Core Insight

A plan is bigger than a list of tasks.

It's a **construct** that includes:
- **Lifecycle**: From idea exploration through execution to completion
- **Process**: Analysis before action, thinking before execution
- **Infrastructure**: MCP resources, tools, and prompts that know how to work with plans
- **Multi-session support**: Work that spans days or weeks with persistent state

## The Problem

### Before RiotPlan

**Tool-generated inadequacy**: You depend on AI tools to generate plans, and those plans are too simplistic—just task lists without depth.

**Markdown chaos**: Plans are markdown files that pile up without structure. No lifecycle, no state tracking, no way to resume.

**Issue trackers without thinking**: Systems like Beads (Steve Yegge's git-backed tracker) address the markdown problem but don't support the deep, thoughtful planning needed for complex work.

**No analysis phase**: You jump straight to execution without exploring the idea, considering constraints, or comparing approaches.

## The Solution

### With RiotPlan

**Standard lifecycle**: Plans progress through stages:
1. **Idea**: Explore the concept, capture constraints, ask questions, gather evidence
2. **Shaping**: Compare different approaches, evaluate tradeoffs
3. **Built**: Create detailed execution plan with steps
4. **Execution**: Actually do the work, track progress
5. **Completed**: Archive and learn from the experience

**Thinking before execution**: You can't just create a plan and execute it. RiotPlan supports analysis, elaboration, research—the thinking that makes plans actually work.

**Standard infrastructure**: MCP resources (read plan data), tools (create, update plans), and prompts (workflows) that work together. Not just a format, but a system.

**Tool independence**: Works from CLI with API keys, via MCP with any model, or through future GUI applications.

## How It Works

### From the Command Line

```bash
# Create a new plan
riotplan create user-auth --description "Implement JWT authentication"

# View status
riotplan status

# Manage steps
riotplan step list
riotplan step start 1
riotplan step complete 1

# Validate structure
riotplan plan validate
```

### Via MCP

Install in Cursor or Claude Desktop:

```json
{
  "mcpServers": {
    "riotplan": {
      "command": "npx",
      "args": ["-y", "@riotprompt/riotplan", "riotplan-mcp"]
    }
  }
}
```

AI assistants can then:
- Create plans with idea exploration
- Add approaches during shaping
- Generate detailed execution plans
- Track progress and update status
- Access plan resources for context

### As a Library

```typescript
import { loadPlan, resumePlan } from 'riotplan';

const plan = await loadPlan('./my-plan');
console.log(plan.state.status);      // 'in_progress'
console.log(plan.state.currentStep); // 3

const result = await resumePlan(plan);
```

## Plan Structure

```
my-plan/
├── IDEA.md              # Initial concept, constraints, questions
├── SHAPING.md           # Approaches and comparisons
├── SUMMARY.md           # Overview of chosen approach
├── EXECUTION_PLAN.md    # Detailed steps
├── STATUS.md            # Current progress
├── plan/                # Step files
│   ├── 01-analysis.md
│   ├── 02-design.md
│   └── 03-implementation.md
└── .history/            # Timeline and narrative history
    ├── timeline.jsonl
    └── prompts/
        ├── 001-initial-idea.md
        └── 002-approach-discussion.md
```

## The Lifecycle

### 1. Idea Stage

Explore the concept before committing:
- What's the core idea?
- What constraints exist?
- What questions need answering?
- What evidence supports this?

Capture narrative (voice notes, conversations) alongside structured data.

### 2. Shaping Stage

Compare different approaches:
- What are the options?
- What are the tradeoffs?
- What are the risks?
- Which approach fits best?

Don't jump to execution—think through alternatives first.

### 3. Built Stage

Create the detailed plan:
- Break down into steps
- Define acceptance criteria
- Identify dependencies
- Estimate complexity

### 4. Execution Stage

Actually do the work:
- Track progress in STATUS.md
- Update step status
- Capture blockers and issues
- Maintain context across sessions

### 5. Completed Stage

Archive and learn:
- What worked?
- What didn't?
- What would you do differently?
- What patterns emerged?

## Key Features

### Multi-Session Workflows

Work on complex tasks over days or weeks. RiotPlan maintains state so you can pick up exactly where you left off.

### Persistent State Tracking

STATUS.md shows:
- Current step
- Progress percentage
- Blockers and issues
- Timeline of updates

### Idea Exploration

Before creating a plan, explore the idea:
- Add notes and thoughts
- Capture constraints
- Ask questions
- Gather evidence

### Approach Comparison

During shaping, compare options:
- List pros and cons
- Evaluate tradeoffs
- Get feedback
- Select the best approach

### Full History

Everything is captured:
- Timeline of events (`.history/timeline.jsonl`)
- Conversation history (`.history/prompts/`)
- Narrative chunks from voice/text input
- Checkpoints for restoration

## Use Cases

### For Complex Migrations

Moving from one library to another, integrating new systems—work that requires analysis, planning, and execution over multiple sessions.

### For Feature Development

Building features that need thoughtful design, not just implementation. Explore approaches, compare options, then execute.

### For Research Projects

Projects where you need to gather evidence, explore ideas, and iterate on your approach before committing to execution.

### For Learning

When you're learning something new and need to break it down into manageable steps with analysis and reflection.

## Installation

```bash
npm install -g @riotprompt/riotplan
```

## Resources

- **[Documentation](https://kjerneverk.github.io/riotplan/)** - Full guides and workflows
- **[GitHub](https://github.com/kjerneverk/riotplan)** - Source code and issues
- **[npm](https://www.npmjs.com/package/@riotprompt/riotplan)** - Package registry

## Philosophy

RiotPlan embodies the Kjerneverk principle: **the thing is bigger than just the thing**.

A plan isn't just tasks. It's a lifecycle. It's a way of thinking about complex work. It's infrastructure that supports thoughtful execution across any tool, any model, any environment.

You can't just create a plan and execute it. You need to think first. RiotPlan makes that thinking explicit and manageable.

[← Back to Kjerneverk](./README.md) | [Read the Vision →](../VISION.md)
