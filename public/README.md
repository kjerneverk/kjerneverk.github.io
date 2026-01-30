# Kjerneverk

**Core tools for AI-assisted development workflows**

Kjerneverk (Norwegian for "core work") is a collection of interconnected tools designed to enhance AI-assisted development through structured prompts, long-running plans, and intelligent document creation.

## Projects

### RiotPlan

**Framework for long-lived, stateful AI workflows**

RiotPlan helps you manage complex, multi-step AI-assisted tasks that span multiple sessions. It provides structure for work that can't be done in one sitting, with persistent state tracking and step-by-step execution.

**Key Features:**
- Multi-session workflow management
- Persistent state tracking with STATUS.md
- Organized step-by-step execution
- AI-powered plan generation
- MCP server integration for AI assistants

**Links:**
- [Documentation](https://kjerneverk.github.io/riotplan/)
- [GitHub Repository](https://github.com/kjerneverk/riotplan)
- [npm Package](https://www.npmjs.com/package/@riotprompt/riotplan)

**Installation:**
```bash
npm install -g @riotprompt/riotplan
```

---

### RiotPrompt

**Structured prompt building library and CLI**

RiotPrompt treats prompts as code with specialized sections, advanced strategies, and automatic model alignment. It provides a powerful foundation for building AI applications with zero hardcoded assumptions.

**Key Features:**
- Structured prompt composition (Persona, Instructions, Context)
- Advanced prompt strategies (Constraints, Few-Shot Examples, Reasoning)
- Automatic model alignment (Anthropic, OpenAI, Gemini)
- CLI for prompt management and execution
- MCP server for AI assistant integration
- Full TypeScript support

**Links:**
- [Documentation](https://kjerneverk.github.io/riotprompt/)
- [GitHub Repository](https://github.com/kjerneverk/riotprompt)
- [npm Package](https://www.npmjs.com/package/@riotprompt/riotprompt)

**Installation:**
```bash
npm install @riotprompt/riotprompt
```

---

### RiotDoc

**Template-driven document creation with AI assistance**

RiotDoc guides you through creating high-quality documents using template-driven workflows, conversational guidance, and full history tracking. It bridges the gap between AI generation and human creativity.

**Key Features:**
- Template-driven workflows with multiple approaches
- Conversational guidance (2-5 questions at a time)
- Full history tracking and version control
- Checkpoint system for experimentation
- Varying levels of AI assistance
- MCP server integration

**Links:**
- [Documentation](https://kjerneverk.github.io/riotdoc/)
- [GitHub Repository](https://github.com/kjerneverk/riotdoc)
- [npm Package](https://www.npmjs.com/package/@riotprompt/riotdoc)

**Installation:**
```bash
npm install -g @riotprompt/riotdoc
```

---

## Philosophy

The Kjerneverk tools share a common philosophy:

1. **Structure over Chaos** - Provide frameworks that bring order to complex AI workflows
2. **Persistence over Ephemeral** - Track history, state, and evolution over time
3. **Flexibility over Rigidity** - Support multiple approaches and workflows
4. **Integration over Isolation** - Work together and with AI assistants via MCP

## Getting Started

Each tool can be used independently, but they work best together:

- Use **RiotPrompt** to build structured prompts for your AI interactions
- Use **RiotPlan** to manage long-running, multi-step AI workflows
- Use **RiotDoc** to create high-quality documents with AI assistance

All tools support the Model Context Protocol (MCP), allowing seamless integration with AI assistants like Cursor and Claude Desktop.

## License

All Kjerneverk projects are licensed under Apache-2.0.

## Contributing

Contributions are welcome! Each project has its own repository and contribution guidelines.
