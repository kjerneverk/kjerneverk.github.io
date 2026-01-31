# Kjerneverk Glossary

## Core Concepts

### Construct
A structured format that encompasses more than just its final artifact. In Kjerneverk, Prompts, Plans, and Documents are constructs—they include process, lifecycle, ways of thinking, and supporting infrastructure.

**Example**: A prompt isn't just text you send to an LLM. It's a construct that includes its evolution over time, its structure (persona, instructions, context), and the tools that help you manage it.

**Key insight**: "The thing is bigger than just the thing."

### The Thing Is Bigger Than Just The Thing
The foundational philosophy of Kjerneverk. When you create a prompt, plan, or document, you're not just creating an artifact—you're engaging in a process that includes thinking, evolution, experimentation, and context management.

### Tool Independence
The principle that your work should not be locked to a specific model, IDE, or platform. Kjerneverk constructs work with OpenAI, Anthropic, Gemini, or no model at all. They work from CLI, MCP, or GUI.

**Why it matters**: As models improve, which specific tool you use matters less. What matters is your process and structure.

### Metacognitive Programming
Programming that thinks about programming. Prompting about prompting. Planning about planning. The practice of making your thinking process explicit and manageable.

**Example**: Asking an agentic workflow to do self-reflection before the next invocation. Creating a plan for how to create plans.

### Ontology
The structured representation of knowledge, concepts, and their relationships. In Kjerneverk, managing complex context and ontology is key to creating outputs that are truly yours.

**Why we use this term**: We don't shy away from technical terminology. If you're doing sophisticated work with generative AI, you're managing ontologies whether you call them that or not.

## RiotPrompt Concepts

### Prompt as Construct
A prompt that includes structure (persona, instructions, context, constraints), evolution (revisions, experimentation), and tool independence (works across models).

### Cross-LLM Translation
The ability to write a prompt once and have it automatically adapted for different models:
- **OpenAI**: Uses Markdown sections for large contexts
- **Anthropic**: Uses XML tags, converts schemas to tool use
- **Google Gemini**: Has rich section collections, uses responseSchema

### Superposition of States
A prompt can exist in multiple states simultaneously—draft, production, experimental variations. Like quantum superposition, but for prompts.

### Prompt Sections
The structured components of a RiotPrompt:
- **Persona**: Who the AI should be
- **Instructions**: What to do
- **Context**: Information to work with
- **Constraints**: Limitations and requirements
- **Tone**: How to communicate
- **Examples**: Few-shot learning samples
- **Schema**: Structured output format (with Zod)

## RiotPlan Concepts

### Plan as Lifecycle
A plan that includes the full lifecycle from idea exploration through execution, not just a list of tasks.

**Stages**:
1. **Idea**: Initial concept, exploration, constraints, questions
2. **Shaping**: Exploring approaches, comparing options
3. **Built**: Detailed plan with steps
4. **Execution**: Actually doing the work
5. **Completed**: Finished and archived

### Standard Process
The MCP resources, tools, and prompts that know how to work with plans. Not just a format, but infrastructure for execution.

### Thinking Before Execution
The principle that you can't just create a plan and execute it. You need analysis, elaboration, research. RiotPlan supports this thoughtful approach.

### Plan Structure
The standard files in a RiotPlan:
- **IDEA.md**: Initial concept and exploration
- **SHAPING.md**: Approaches and comparisons
- **SUMMARY.md**: Overview of chosen approach
- **EXECUTION_PLAN.md**: Detailed steps
- **STATUS.md**: Current progress
- **plan/**: Directory with step files (01-step.md, 02-step.md, etc.)
- **.history/**: Timeline and narrative history

### Multi-Session Workflow
Work that spans multiple sessions over days or weeks. RiotPlan maintains state so you can pick up exactly where you left off.

## RiotDoc Concepts

### Document as Process
A document that captures not just the output but the construction of meaning—research, evidence, conversation, audience analysis.

### Construction of Meaning
The process of building a document from sources, references, thinking, and iteration. Like academic papers show their recipe, all documents should track their creation.

### Narrative Capture
Recording the full conversation and thinking that went into creating a document. Stored in `.history/prompts/` as numbered files that can be used to regenerate or update the document.

### Document Lifecycle
The progression from idea → outline → draft → revision → publication, with full history at each stage.

### Template-Driven Workflow
Using templates that define questions, approaches, and structure. Change the template, and the entire workflow adapts.

## Process Concepts

### Process Over Tools
The principle that how you work matters more than which specific tool you use. As models improve, the differentiator is your process, not your model choice.

### Control and Ownership
Having agency over what you send to models and what you get back. Making sure outputs are truly yours, not just pattern-matched from training data.

### Hits the Mark, But Not Quite
The characteristic of LLM-generated content—it looks good on the surface but doesn't capture your unique thinking, context, or requirements. Kjerneverk helps you get from "close enough" to "exactly right."

### Pattern-Matched
Content that's generated by copying patterns from training data rather than being constructed from your specific context and thinking. What you get from LLMs without structure and process.

## Technical Concepts

### MCP (Model Context Protocol)
A protocol for AI assistants to access resources and tools. Kjerneverk provides MCP servers for RiotPrompt, RiotPlan, and RiotDoc.

**Components**:
- **Resources**: Read-only data (plan status, prompt content, document drafts)
- **Tools**: Actions the AI can take (create plan, execute prompt, draft document)
- **Prompts**: Workflow templates for common tasks

### Execution Provider
An abstraction layer for different LLM providers (OpenAI, Anthropic, Gemini). Kjerneverk uses execution providers to maintain tool independence.

### Agentic Workflow
Multi-turn conversations where an AI agent uses tools, maintains context, and works toward a goal over multiple interactions.

### CLI (Command-Line Interface)
Terminal-based interface for power users. All Kjerneverk tools work from the command line with API keys.

## Philosophical Concepts

### Embrace Complexity
The principle of not oversimplifying. Using proper technical terms. Acknowledging that generative AI work is sophisticated and requires sophisticated thinking.

### Intellectual Honesty
Being transparent about complexity, limitations, and tradeoffs. Not promising magic or hiding behind buzzwords.

### Pragmatic Opinionated
Having strong views based on real experience while remaining practical and solution-focused. Not dogmatic, but not wishy-washy either.

### Technical Users
People who are comfortable with command-line tools, APIs, and technical concepts. Closer to programming than not. Our primary audience.

## Anti-Patterns (What We're Moving Away From)

### Freeform Prompts
Unstructured text blocks without sections, history, or evolution. What most people use now.

### Inadequate Plans
Simple task lists or markdown files that pile up without structure. Tools that don't support deep thinking.

### Generated Documents
Content created wholesale by LLMs without your input, research, or thinking. "Good enough" outputs that aren't truly yours.

### Tool Lock-In
Work that only functions with one specific model, IDE, or platform. What happens when you don't design for tool independence.

### Oversimplification
Dumbing down complex concepts to make them seem "easy." Hiding complexity rather than managing it.

## Usage Examples

### Good Usage
- "RiotPrompt is a construct that includes process, lifecycle, and tool independence"
- "We embrace complexity because this is sophisticated work"
- "The plan is bigger than just the tasks—it's the full lifecycle"
- "LLMs generate content that hits the mark, but not quite"

### Bad Usage
- "RiotPrompt is a prompt library" (too simplistic)
- "We make AI easy" (oversimplifies)
- "Just a better way to organize tasks" (misses the point)
- "Revolutionary AI framework" (hype, not substance)

## Related Terms

### Beads
Steve Yegge's git-backed issue tracking system for AI agents. Addresses the problem of markdown files piling up, but doesn't provide the deep planning infrastructure that RiotPlan offers.

### Zod
TypeScript schema validation library used in RiotPrompt for structured outputs.

### JSON Schema
Standard for defining the structure of JSON data. Used by LLMs for structured outputs.

### System Prompt
The initial instructions given to an LLM that define its behavior. In RiotPrompt, this is the Persona section.

## The Core Message (Summary)

All these concepts support one core message:

**Kjerneverk provides structured formats for working with generative AI. It moves you from freeform prompts, unstructured plans, and generated documents toward constructs that give you control, ownership, and tool independence. Because the thing is bigger than just the thing.**
