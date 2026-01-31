# Kjerneverk Messaging Maintenance Guide

## Purpose

This guide ensures consistent messaging across all Kjerneverk projects. When creating new content or updating existing documentation, always reference the foundational documents.

## The "Bible" Documents

These are the single source of truth for all Kjerneverk messaging:

### 1. [VISION.md](./VISION.md)
**Use when**: Writing about philosophy, core concepts, or the "why" of Kjerneverk

**Key concepts**:
- "The thing is bigger than just the thing"
- Constructs (process, lifecycle, ways of thinking)
- Tool independence
- Control and ownership
- Metacognitive programming

### 2. [CORE-MESSAGE.md](./CORE-MESSAGE.md)
**Use when**: Writing introductions, elevator pitches, or summary descriptions

**Key phrases**:
- "Structured formats for generative AI"
- "Hits the mark, but not quite"
- "Control and ownership"
- "Process over tools"
- "Truly yours, not pattern-matched"

### 3. [TONE-VOICE.md](./TONE-VOICE.md)
**Use when**: Writing any content to ensure consistent tone

**Tone attributes**:
- Pragmatic (solving real problems)
- Opinionated (strong views, not wishy-washy)
- Process-focused (how you work matters)
- Intellectually honest (don't oversimplify)

### 4. [TARGET-AUDIENCE.md](./TARGET-AUDIENCE.md)
**Use when**: Deciding how technical to be, what to emphasize

**Primary audience**:
- Technical users working with generative AI
- Closer to programming than not
- Frustrated with "good enough" outputs
- Want control over workflows

### 5. [GLOSSARY.md](./GLOSSARY.md)
**Use when**: Defining terms or ensuring consistent terminology

**Key terms**:
- Construct, ontology, metacognitive programming
- Tool independence, process over tools
- "The thing is bigger than just the thing"

## Content Hierarchy

```
Foundational Documents (the "bible")
    ↓
Main Website (kjerneverk.github.io/public/)
    ↓
Project Pages (riotprompt.md, riotplan.md, riotdoc.md)
    ↓
Project READMEs (riotprompt/README.md, etc.)
    ↓
Project Documentation Sites (docs/ subdirectories)
```

**Rule**: Lower levels should reference and align with higher levels.

## Updating Content Checklist

When creating or updating content:

### 1. Check the Foundational Documents
- [ ] Read relevant sections of VISION.md
- [ ] Review key phrases in CORE-MESSAGE.md
- [ ] Verify tone aligns with TONE-VOICE.md
- [ ] Confirm audience appropriateness with TARGET-AUDIENCE.md
- [ ] Use consistent terminology from GLOSSARY.md

### 2. Verify Core Messages
- [ ] Emphasizes "structured formats for generative AI"
- [ ] Mentions tool independence
- [ ] Includes "before and after" framing where appropriate
- [ ] Uses "construct" concept correctly
- [ ] Avoids "AI development" or "AI-assisted software development" framing

### 3. Check Tone
- [ ] Pragmatic (real problems, not theory)
- [ ] Opinionated (strong views stated clearly)
- [ ] Process-focused (emphasizes how you work)
- [ ] Doesn't oversimplify (uses proper technical terms)
- [ ] Not marketing-speak (no buzzwords or hype)

### 4. Verify Key Phrases
**Use these**:
- "Structured formats for generative AI"
- "The thing is bigger than just the thing"
- "Control and ownership"
- "Process over tools"
- "Tool independence"
- "Hits the mark, but not quite"
- "Truly yours, not pattern-matched"

**Avoid these**:
- "AI development tools"
- "AI-assisted software development"
- "Revolutionary" or "disruptive"
- "Easy AI" or "simple solutions"
- "Leverage synergies" or corporate speak

### 5. Test with AI
Ask an AI assistant to describe Kjerneverk using the updated content. Check if:
- [ ] It uses "structured formats for generative AI"
- [ ] It mentions tool independence
- [ ] It explains the construct concept
- [ ] It avoids incorrect framing
- [ ] It captures the philosophy

## Common Updates

### Adding a New Project

1. Create project page in `kjerneverk.github.io/public/[project].md`
2. Follow the template:
   - Lead with construct concept
   - Include "before and after" section
   - Explain tool independence
   - Link to foundational documents
3. Update main README to link to new project
4. Update project's own README with vision-aligned intro

### Updating Project Documentation

1. Check if change affects core messaging
2. If yes, update foundational documents first
3. Then propagate changes to:
   - Main website
   - Project pages
   - Project READMEs
   - Documentation sites
4. Run consistency check

### Writing Blog Posts or Articles

1. Reference VISION.md for philosophical content
2. Use TONE-VOICE.md guidelines
3. Include key phrases from CORE-MESSAGE.md
4. Link back to main Kjerneverk site
5. Maintain consistent terminology from GLOSSARY.md

## AI Assistant Instructions

When AI assistants generate content about Kjerneverk, they should:

1. **Read the foundational documents first**:
   - VISION.md for philosophy
   - CORE-MESSAGE.md for key messaging
   - GLOSSARY.md for terminology

2. **Use the correct framing**:
   - "Structured formats for generative AI" (not "AI development")
   - Emphasize tool independence and process over tools
   - Include construct concept and "the thing is bigger than just the thing"

3. **Maintain the tone**:
   - Pragmatic, opinionated, process-focused
   - Don't oversimplify
   - Use proper technical terms
   - No marketing-speak

4. **Reference these documents**:
   - Link to VISION.md for deeper philosophy
   - Link to project pages for specific tools
   - Link to GLOSSARY.md for term definitions

## Consistency Check Process

### Monthly Review

1. **Verify alignment**:
   - Main website matches foundational documents
   - Project pages match main website
   - Project READMEs match project pages
   - No conflicting messaging

2. **Check for drift**:
   - Has new content introduced inconsistent terminology?
   - Are key phrases still being used correctly?
   - Is tone consistent across all content?

3. **Test with AI**:
   - Ask AI to describe each project
   - Verify it produces accurate descriptions
   - Check for incorrect framing

4. **Update as needed**:
   - Fix inconsistencies
   - Update foundational documents if concepts evolve
   - Propagate changes down the hierarchy

## Version Control

When making significant messaging changes:

1. **Document the change**:
   - What changed and why
   - Which documents were updated
   - Date of change

2. **Update all affected content**:
   - Follow the content hierarchy
   - Don't leave orphaned old messaging

3. **Notify contributors**:
   - If others are writing content
   - Share updated guidelines

## Questions?

If you're unsure about messaging:

1. **Check the foundational documents** - They're the source of truth
2. **Look at recent examples** - See how others have applied the guidelines
3. **When in doubt, be direct** - Clear and specific beats vague and general

## The Golden Rule

**Everything derives from the foundational documents.**

If you find inconsistencies, the foundational documents are correct. Update the other content to match.

If the foundational documents need updating, update them first, then propagate changes.

Never create new messaging that conflicts with the foundational documents without updating them first.

---

*Last updated: 2026-01-31*
