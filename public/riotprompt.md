# RiotPrompt

**Prompts as Constructs**

## The Core Insight

A prompt is bigger than the text you send to an LLM.

It's a **construct** that includes:
- **Structure**: Persona, instructions, context, constraints, tone, examples
- **Evolution**: Revisions, experimentation, superposition of states
- **Tool independence**: Works with OpenAI, Anthropic, Gemini, or any model
- **History**: Track how your prompts develop over time

## The Problem

### Before RiotPrompt

**Freeform text blocks**: You type something, send it to an LLM, maybe iterate a few times. No structure.

**Model-specific rewrites**: OpenAI uses Markdown sections for large contexts. Anthropic uses XML tags. Google has rich section collections. You rewrite prompts for each model.

**No evolution**: Prompts are ephemeral. You lose history. You can't experiment with variations.

**No reusability**: Each prompt is created from scratch. No way to build a library of reusable components.

## The Solution

### With RiotPrompt

**Structured format**: Prompts have sections—persona, instructions, context, constraints, tone, examples, schema. Not freeform text.

**Cross-LLM translation**: Write once, translate automatically:
- **OpenAI**: Markdown sections for large contexts
- **Anthropic**: XML tags, schema → tool use conversion
- **Gemini**: Rich sections, responseSchema format

**Evolution and experimentation**: Track revisions. Create variations. Maintain history. Your prompts are assets that improve over time.

**Tool independence**: Works from CLI with API keys, via MCP with any model, or as a library in your applications.

## How It Works

### As a Library

```typescript
import { cook } from 'riotprompt';
import { z } from 'zod';

const prompt = await cook({
  persona: { content: 'You are a data expert' },
  instructions: [{ content: 'Analyze the provided dataset' }],
  content: [{ content: data, title: 'Dataset' }],
  schema: z.object({
    summary: z.string(),
    insights: z.array(z.string())
  })
});

// Automatically formatted for your target model
```

### From the Command Line

```bash
# Create a prompt
riotprompt create my-analysis --persona "You are a data expert"

# Execute with any model
riotprompt execute my-analysis -m gpt-4
riotprompt execute my-analysis -m claude-3-opus
riotprompt execute my-analysis -m gemini-1.5-pro

# Export to JSON/XML
riotprompt process my-analysis --format json
```

### Via MCP

Install in Cursor or Claude Desktop:

```json
{
  "mcpServers": {
    "riotprompt": {
      "command": "npx",
      "args": ["-y", "@riotprompt/riotprompt", "riotprompt-mcp"]
    }
  }
}
```

AI assistants can then create, process, and execute prompts using RiotPrompt's structure.

## Key Features

### Structured Sections

- **Persona**: Who the AI should be
- **Instructions**: What to do  
- **Context**: Information to work with
- **Constraints**: Limitations and requirements
- **Tone**: How to communicate
- **Examples**: Few-shot learning samples
- **Schema**: Structured output format (with Zod)

### Model Alignment

Automatically adapts to each provider's expectations:
- OpenAI: System messages, developer messages (O-series)
- Anthropic: System parameter, tool use for schemas
- Gemini: System instructions, responseSchema

### Prompt Evolution

- Track revisions over time
- Create experimental variations
- Maintain prompt history
- Build reusable prompt libraries

### Zero Assumptions

No hardcoded behaviors. You define everything. RiotPrompt provides structure, not opinions about what your prompts should do.

## Use Cases

### For Developers
Build AI applications with prompts that work across any model. Stop rewriting for each provider.

### For Power Users
Create a library of reusable prompts. Execute from CLI with your preferred model.

### For AI Assistants
Let AI assistants manage your prompts with structure. Create, iterate, and execute with any model.

### For Teams
Share prompts in a portable format (JSON/XML). Everyone uses the same structure, any model.

## Installation

```bash
npm install @riotprompt/riotprompt
```

## Resources

- **[Documentation](https://kjerneverk.github.io/riotprompt/)** - Full guides and API reference
- **[GitHub](https://github.com/kjerneverk/riotprompt)** - Source code and issues
- **[npm](https://www.npmjs.com/package/@riotprompt/riotprompt)** - Package registry

## Philosophy

RiotPrompt embodies the Kjerneverk principle: **the thing is bigger than just the thing**.

A prompt isn't just text. It's a process. It's a way of thinking about how you communicate with LLMs. It's infrastructure that supports your work across any tool, any model, any environment.

[← Back to Kjerneverk](./README.md) | [Read the Vision →](../VISION.md)
