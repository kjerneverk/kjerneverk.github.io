# Kjerneverk

**Structured formats for working with generative AI**

Kjerneverk (Norwegian for "core work") provides structured formats that give you control over your prompts, plans, and documents. Move away from freeform prompts, unstructured plans, and documents generated without your input. Take back control over what you send to models and what you get back.

> **"The thing is bigger than just the thing."**  
> A prompt isn't just text. A plan isn't just tasks. A document isn't just output.  
> They're processes, lifecycles, and ways of thinking.

[Read the full vision →](../VISION.md) | [Core message →](../CORE-MESSAGE.md) | [Glossary →](../GLOSSARY.md)

## Why Kjerneverk?

### The Problem

Large language models generate content that **"hits the mark, but not quite."** They're excellent at pattern-matching from training data, but the outputs aren't truly *yours*. They don't capture your thinking, your research, your unique context.

Meanwhile, we're distracted by which model to use, which IDE to work in, which tool has the best features. But as models improve, **the specific tool matters less**. What matters is your **process**.

### The Solution

Kjerneverk provides **constructs**—structured formats that encompass more than just artifacts:

- **Prompts** that evolve over time, work across models, and maintain history
- **Plans** with full lifecycle from idea exploration through execution
- **Documents** that capture the construction of meaning, not just output

These aren't just better formats. They're **ways of working** that give you control and ownership over your AI-assisted workflows.

## The Three Constructs

### [RiotPrompt](./riotprompt.md): Prompts as Constructs

**A prompt is bigger than the text you send to an LLM.**

**Before RiotPrompt**: Freeform text blocks. Rewritten for each model. No history or evolution.

**With RiotPrompt**: Structured prompts with persona, instructions, context, and constraints. Write once, translate automatically to OpenAI (Markdown sections), Anthropic (XML tags), or Gemini (rich sections). Track revisions. Support experimentation.

**Tool Independence**: Works from CLI with API keys, via MCP with any model, or as a library in your applications.

```bash
npm install @riotprompt/riotprompt
```

[Learn more about RiotPrompt →](./riotprompt.md) | [Documentation](https://kjerneverk.github.io/riotprompt/)

---

### [RiotPlan](./riotplan.md): Plans as Lifecycle

**A plan is bigger than a list of tasks.**

**Before RiotPlan**: Depending on tools to generate inadequate plans. Markdown files that pile up. Systems like Beads that track issues but don't support deep thinking.

**With RiotPlan**: Standard lifecycle from idea exploration (questions, constraints, evidence) through shaping (comparing approaches) to execution (step-by-step with status tracking). Analysis before action. Plans that span multiple sessions.

**Tool Independence**: Works from CLI, via MCP, or through future GUI applications. Use with any model or no model at all.

```bash
npm install -g @riotprompt/riotplan
```

[Learn more about RiotPlan →](./riotplan.md) | [Documentation](https://kjerneverk.github.io/riotplan/)

---

### [RiotDoc](./riotdoc.md): Documents as Process

**A document is bigger than its output.**

**Before RiotDoc**: Fire up Word and start typing. Or ask an LLM to generate something "close enough."

**With RiotDoc**: Documents that capture the construction of meaning—research, evidence, audience analysis, conversation history. Like academic papers show their recipe, all documents track their creation process.

**Tool Independence**: Template-driven workflows that work with any model. Full history tracking. Version control from draft to publication.

```bash
npm install -g @riotprompt/riotdoc
```

[Learn more about RiotDoc →](./riotdoc.md) | [Documentation](https://kjerneverk.github.io/riotdoc/)

---

## Core Principles

### 1. Tool Independence

Every Kjerneverk construct works:
- **From the command line** with API keys (OpenAI, Anthropic, Gemini)
- **Via MCP** with any model attached to your session (Cursor, Claude Desktop)
- **As a library** in your applications
- **With or without AI** - the formats are useful even without model assistance

### 2. Control and Ownership

LLMs generate content that's "close enough"—pattern-matched from training data. Kjerneverk gives you **control** over what you send to models and **ownership** over what you get back. Your prompts, plans, and documents are truly *yours*.

### 3. Process Over Tools

As models improve, which specific model you use matters less. What matters is:
- How you structure your approach
- How you maintain context and history  
- How you ensure outputs reflect your thinking

We're too often distracted by tools. Kjerneverk focuses on **process**.

### 4. Embrace Complexity

This is sophisticated work that requires sophisticated thinking. We don't oversimplify. We use words like **ontology**, **metacognitive programming**, **construct** because these are the concepts you're actually working with.

[Read the full philosophy →](../VISION.md)

## Getting Started

### For Developers
Integrate Kjerneverk into your applications. Use structured formats that work across any model.

### For Power Users  
Use the CLI tools with your API keys. Work outside of IDEs with full control.

### For AI Assistant Users
Install MCP servers in Cursor or Claude Desktop. Let AI assistants manage your prompts, plans, and documents with structure.

### For Everyone
All tools support multiple ways of working. Start with what's comfortable, expand as needed.

## Who This Is For

**Technical users working with generative AI** who are:
- Closer to programming than not
- Doing complex work that requires thoughtful planning
- Frustrated with "good enough" outputs from LLMs
- Wanting more control over their AI-assisted workflows

[Learn more about our audience →](../TARGET-AUDIENCE.md)

## Resources

- **[Vision](../VISION.md)** - The philosophical foundation
- **[Core Message](../CORE-MESSAGE.md)** - What Kjerneverk is about
- **[Glossary](../GLOSSARY.md)** - Key concepts and terms
- **[Tone & Voice](../TONE-VOICE.md)** - How we communicate

## License

All Kjerneverk projects are licensed under Apache-2.0.

## Contributing

Contributions are welcome! Each project has its own repository and contribution guidelines.

---

*This is a passion project, not a company. It exists because this is how I want to work with generative AI.*
