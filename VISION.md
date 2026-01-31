# Kjerneverk Vision

## The Thing Is Bigger Than Just The Thing

When you create a prompt, you're not just writing text to send to an LLM. When you create a plan, you're not just making a task list. When you write a document, you're not just generating output.

**You're engaging in a process.**

This is the foundational insight of Kjerneverk: prompts, plans, and documents are **constructs** that encompass far more than their final artifacts. They include:

- **Process**: How you develop and evolve them
- **Lifecycle**: Multiple states, revisions, experimentation
- **Ways of thinking**: Metacognitive programming, ontology management  
- **Infrastructure**: Tools, resources, and workflows that support them

## The Problem We're Solving

### We're Distracted by Tools, Not Process

As generative AI has exploded, we've become obsessed with which model to use, which IDE to work in, which tool has the best features. But here's the truth: **as these models get better, the specific tool matters less and less.**

What matters is the **process**. How you think about your work. How you structure your approach. How you maintain control and ownership over what you create.

### Current Approaches Are Inadequate

**Prompts** are treated as freeform text blocks. You type something, send it to an LLM, maybe iterate a few times. There's no structure, no way to evolve prompts over time, no way to make them work consistently across different models.

**Plans** are either non-existent or overly simplistic. Tools like Beads (Steve Yegge's git-backed issue tracker) have made progress, but most planning systems are just markdown files or task lists that agents generate and abandon. They don't support the kind of deep, thoughtful planning needed for complex work.

**Documents** are generated wholesale by LLMs, and while they might "hit the mark," they rarely hit *your* mark. They're pattern-matched from training data, not constructed from your unique context, research, and thinking.

## What Kjerneverk Provides

Kjerneverk offers **structured formats for working with generative AI** through three core constructs:

### RiotPrompt: Prompts as Constructs

A prompt is bigger than the text you send to an LLM. It's:
- An **object model** with structure and meaning
- **Independent of any specific LLM** - write once, translate automatically
- **Evolvable** - revisions, experimentation, superposition of states
- **Cross-platform** - OpenAI uses Markdown sections, Anthropic uses XML tags, Google has rich section collections. RiotPrompt abstracts these differences.

**Before**: Freeform text blocks, rewritten for each model, no history or evolution.

**After**: Structured prompts with persona, instructions, context, constraints. One format that works everywhere.

### RiotPlan: Plans as Lifecycle

A plan is bigger than a list of tasks. It's:
- A **standard lifecycle** for creation and execution
- **Standard processes** via MCP that know how to access resources and invoke tools
- **Thinking before execution** - analysis, elaboration, research
- **Independent of execution environment** - works from CLI, MCP, or future GUI apps

**Before**: Depending on tools to generate inadequate plans. Markdown files that pile up without structure. Systems like Beads that track issues but don't support deep planning.

**After**: Plans with SUMMARY, EXECUTION_PLAN, STATUS tracking, step files. Infrastructure for complex, thoughtful work that spans multiple sessions.

### RiotDoc: Documents as Process

A document is bigger than its output. It's:
- **Construction of meaning** from sources and references
- **The conversation** - research, evidence, audience analysis
- **Process tracking** like academic papers show their recipe
- **Your input and thinking**, not just pattern-matched content

**Before**: Fire up Word and start typing. Or ask an LLM to generate a document that's "close enough."

**After**: Documents that capture idea → outline → draft → revision, with full history of the conversation and research that shaped them.

## Core Principles

### 1. Tool Independence

Every Kjerneverk construct is designed to work:
- **From the command line** with API keys (OpenAI, Anthropic, Gemini)
- **Via MCP** with any model attached to your session
- **In any IDE** or eventually standalone applications
- **With or without AI** - the formats are useful even without model assistance

### 2. Control and Ownership

LLMs are excellent at generating content that "hits the mark, but not quite." They produce outputs copied from patterns in their training data.

Kjerneverk gives you **control** over what you send to models and **ownership** over what you get back. Your prompts, plans, and documents are truly *yours*, shaped by your thinking and process.

### 3. Metacognitive Programming

This is **prompting about prompting**. Planning about planning. Thinking about thinking.

Good writers don't just write—they think about their process. Kjerneverk makes that process explicit and manageable. It's about:
- Self-reflection in agentic workflows
- Understanding how you work
- Improving through awareness of process

### 4. Embrace Complexity

We don't oversimplify. We use words like **ontology**, **structure**, **metacognitive** because these *are* complicated concepts.

The problem with current LLM tools is that we throw complexity at models while being afraid to acknowledge it. Kjerneverk is transparent: this is sophisticated work that requires sophisticated thinking.

## Who This Is For

Kjerneverk is for **technical users working with generative AI** who are:
- Closer to programming than not
- Doing complex work that requires thoughtful planning
- Frustrated with "good enough" outputs from LLMs
- Wanting more control over their AI-assisted workflows

You might use Kjerneverk:
- As a **library** integrated into your applications
- From the **command line** with your preferred model
- Via **MCP servers** in Cursor, Claude Desktop, or other AI assistants
- Through **standalone applications** (coming soon)

## The Bigger Picture

Kjerneverk isn't about AI development. It's not about building AI applications.

**It's about redefining how we think about prompts, plans, and documents in the age of generative AI.**

It's about recognizing that as these models become more powerful, the differentiator isn't which model you use—it's how you structure your work, maintain your process, and ensure that what you create is genuinely yours.

When you use Kjerneverk, you're not just using tools. You're adopting a way of working that puts **process over tools**, **ownership over convenience**, and **thoughtfulness over speed**.

Because the thing is bigger than just the thing.

---

*This is a passion project, not a company. It exists because this is how I want to work with generative AI, and I believe others will find value in these approaches too.*
