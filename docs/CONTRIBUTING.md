# Contributing to AI-Vibe-Prompts

Thank you for your interest in contributing to AI-Vibe-Prompts! This document provides guidelines for adding new prompts and improving existing ones.

## 🎯 Philosophy

All contributions should follow the core principle: **reduce complexity rather than add it**. Every prompt should make AI-assisted development easier and more maintainable.

## ✅ Context Engineering Standards

All new prompts must comply with our context engineering principles:

### Pre-Submission Checklist

Before submitting a new prompt or updating an existing one:

- [ ] **Phase Definition**: Clearly specified `phase:` and available `tools:` in YAML front-matter
- [ ] **RAG Integration**: Include `rag_slots:` ≤ 5 for external information capacity  
- [ ] **Few-Shot Examples**: Add 1-2 minimal examples demonstrating usage patterns
- [ ] **Verification Section**: Include post-generation validation steps
- [ ] **Context Window**: Prompt fits within 75% of standard context window during testing
- [ ] **Token Efficiency**: Optimized for clarity without unnecessary verbosity
- [ ] **State Alignment**: Compatible with workflow phases (planning/implementation/review)
- [ ] **Integration Points**: Clear integration with other context modules

### Quality Assurance Requirements

- [ ] **Technology Specificity**: References concrete technologies (React 19, Next.js 15, TypeScript 5.5+)
- [ ] **Error Prevention**: Includes TypeScript patterns and validation strategies
- [ ] **Performance Focus**: Addresses Core Web Vitals and optimization
- [ ] **Accessibility**: Incorporates WCAG 2.2 AA standards
- [ ] **Testing Integration**: Compatible with Vitest + React Testing Library + Playwright

## 📝 Adding New Prompts

### 1. Use the Template

Start by copying `_template.prompt.mdc`:

```bash
cp _template.prompt.mdc [category]/[your-prompt-name].mdc
```

### 2. Fill Required Metadata

```yaml
---
name: Your Prompt Name
description: Brief description of what it does (max 80 characters)
model: universal
version: 1.0.0
category: system|tasks|tools|modes
variables:
  - name: VARIABLE_NAME
    description: What this variable represents
    required: true|false
---
```

### 3. Follow the Structure

```markdown
# Role Definition
Clear role with specific expertise domain

# Core Philosophy: [Main Principle]
Based on proven software engineering principles

# [Main Content Sections]
## Implementation strategies
## Error prevention
## Output format

# Success Metrics
Measurable goals and outcomes
```

## 🗂️ Categories

### `system/`
- Base configuration prompts
- Core rules that apply to all interactions
- Foundation principles and guidelines

### `tasks/`
- Workflow automation prompts
- Project-specific tasks (init, analyze, deploy)
- Multi-step processes

### `tools/`
- Specific utility prompts
- Single-purpose transformations
- Integration helpers

### `modes/`
- Role-based behavior prompts
- Context-switching prompts
- Specialized expert roles

## ✅ Quality Checklist

Before submitting a PR, ensure your prompt meets these criteria:

### Content Quality
- [ ] Follows proven software engineering principles
- [ ] Reduces cognitive load for developers
- [ ] Includes concrete examples and code snippets
- [ ] Has clear error prevention strategies
- [ ] Defines measurable success metrics

### Technical Requirements
- [ ] Valid YAML front-matter
- [ ] All required metadata fields completed
- [ ] Variables properly documented
- [ ] No brand-specific mentions (use generic terms)
- [ ] Consistent formatting and structure

### Testing
- [ ] Tested with at least one AI assistant
- [ ] Produces expected output format
- [ ] Handles edge cases gracefully
- [ ] Works with provided variables

## 🚫 What to Avoid

### Brand Mentions
Don't include specific tool names:
- ❌ "Use Cursor AI to..."
- ✅ "Use your AI assistant to..."

- ❌ "With Next.js 15..."
- ✅ "With modern web frameworks..."

### Complexity Addition
Avoid prompts that:
- Require extensive configuration
- Have unclear or ambiguous instructions
- Mix multiple concerns in one prompt
- Lack error handling guidance

### Poor Abstractions
Don't create prompts that:
- Expose implementation details unnecessarily
- Have overly complex interfaces
- Require users to understand internal workings
- Mix different abstraction levels

## 📋 Pull Request Process

### 1. Preparation
1. Fork the repository
2. Create a feature branch: `git checkout -b add-[prompt-name]`
3. Add your prompt following the guidelines above
4. Test the prompt with at least one AI assistant

### 2. Documentation
1. Update the main README.md if adding a new category
2. Add entry to the appropriate section in README
3. Include usage examples in your prompt description

### 3. Submission
1. Open a pull request with clear title and description
2. Include testing results and AI assistant compatibility
3. Reference any related issues or discussions
4. Wait for review and address feedback

### 4. PR Template
```markdown
## Summary
Brief description of the new prompt or changes

## Category
Which category does this belong to?

## Testing
- [ ] Tested with [AI Assistant Name]
- [ ] Produces expected output
- [ ] Handles edge cases
- [ ] Follows quality checklist

## Examples
Include example usage and output
```

## 🔍 Review Criteria

Reviewers will evaluate PRs based on:

1. **Philosophical Alignment**: Does it follow proven software engineering principles?
2. **Quality**: Is it well-written, clear, and actionable?
3. **Uniqueness**: Does it provide value not covered by existing prompts?
4. **Testing**: Has it been properly tested and validated?
5. **Documentation**: Is it properly documented with examples?

## 💡 Ideas for Contributions

### High-Priority Areas
- Testing strategy prompts
- Security audit prompts
- Performance optimization prompts
- Accessibility evaluation prompts

### Medium-Priority Areas
- Database design prompts
- API design prompts
- Documentation generation prompts
- Code review prompts

### Enhancement Ideas
- Multi-language support for existing prompts
- Integration prompts for popular tools
- Team workflow prompts
- Learning and onboarding prompts

## 🤝 Community Guidelines

- Be respectful and constructive in discussions
- Provide helpful feedback on others' contributions
- Share knowledge and learn from others
- Focus on reducing complexity and improving developer experience

## 📞 Getting Help

- Open an issue for questions or suggestions
- Start a discussion for broader topics
- Check existing prompts for inspiration
- Review the main README for usage examples

Remember: The goal is to create prompts that make software development easier over time, not harder. Every contribution should reduce cognitive load and help developers build better systems. 