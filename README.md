# AI-Vibe-Prompts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made for Cursor](https://img.shields.io/badge/Made%20for-Cursor-orange.svg)](https://cursor.sh/)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

A comprehensive **Context Engineering Framework** for AI-assisted development, featuring production-ready prompts optimized for React 19 + Next.js 15 + TypeScript workflows. Built on "A Philosophy of Software Design" principles with advanced context management, RAG integration, and state alignment.

## 🎯 Philosophy

This collection follows the core principles from "A Philosophy of Software Design":

- **Deep Modules**: Create simple interfaces with powerful implementations
- **Complexity Management**: Hide implementation details behind clean abstractions  
- **Strategic Programming**: Invest in good architecture to reduce future complexity
- **Information Hiding**: Separate what developers need to know from how things work internally

## 📜 Table of Contents
- [🎯 Philosophy](#-philosophy)
- [📁 Repository Structure](#-repository-structure)
- [🧠 Context Engineering](#-context-engineering-add-ons)
- [🚀 Quick Start](#-quick-start)
- [📚 Prompt Catalog](#-prompt-catalog)
- [💡 Best Practices](#-best-practices)
- [🔧 Customization](#-customization)
- [🤝 Contributing](#-contributing)

## 📁 Repository Structure

```
/
├── system/
│   └── system-prompt.md           # Base rules with context policy
├── context/                       # 🧠 Context Engineering Modules
│   ├── task-decompose.md         # Task breakdown & verification
│   ├── rag-template.md           # Information retrieval & fact-checking
│   ├── history-summarizer.md     # Conversation compression
│   └── state-align.md            # Phase management & tool constraints
├── tasks/
│   ├── task-init-project.md      # Strategic project initialization
│   └── task-analyze-project.md   # Project auditing and optimization
├── tools/
│   ├── tool-design-system-gen.md # Design system generator
│   └── tool-figma-importer.md    # Figma-to-React converter
├── modes/
│   └── mode-architect.md         # Architecture planning mode
├── docs/
│   ├── CONTRIBUTING.md           # Contribution guidelines
│   └── PROMPT_SPEC.md           # Prompt specification standards
└── _template.prompt.md          # Template for new prompts
```

## 🧠 Context Engineering Add-Ons

This repository now includes **context engineering modules** that implement advanced AI management techniques:

- **Task Decomposition**: Break complex tasks into verifiable steps with checkpoints
- **RAG Integration**: Fact-based generation using retrieved documentation
- **History Compression**: Intelligent conversation summarization for long sessions
- **State Alignment**: Phase-based workflow management with tool constraints

These modules work together to create more predictable, efficient, and reliable AI interactions while preventing hallucinations and maintaining context coherence.

## 🚀 Quick Start

### 1. Set Up System Prompt
1. Open your AI assistant settings
2. Navigate to the rules or system prompt section
3. Copy the entire content from `system/system-prompt.md` and paste it

This establishes the foundation with:
- Deep module design principles
- TypeScript strict mode configurations
- Performance and accessibility standards
- Error prevention strategies

### 2. Use Task-Specific Prompts
Reference prompts in your AI assistant chat using the `@` symbol or by copying content:

```
@tasks/task-init-project.mdc Create a new SaaS dashboard with authentication
@tools/tool-design-system-gen.mdc Generate a design system for a fintech app
@modes/mode-architect.mdc Plan the architecture for a real-time chat feature
```

## 📖 Prompt Catalog

### 🔧 System Level

#### `system/system-prompt.md`
**Purpose**: Base configuration for all AI interactions  
**When to use**: Always - set this up first in your AI assistant  
**Key features**:
- Deep module design principles from "A Philosophy of Software Design"
- TypeScript strict mode with comprehensive error prevention
- React 19 + Next.js 15 + TypeScript patterns
- Performance optimization guidelines (Core Web Vitals)
- Accessibility standards (WCAG 2.2 AA)

### 🎯 Task Automation

#### `tasks/task-init-project.mdc`
**Purpose**: Strategic project initialization with complexity management  
**When to use**: Starting new projects from scratch  
**Key features**:
- React/Next.js technology selection with rationale
- Deep module project structure
- Error prevention systems (TypeScript strict, validation)
- Testing strategy with clear interfaces
- Documentation as part of the architecture

**Example usage**:
```
@tasks/task-init-project.mdc Create a new e-commerce platform with:
- User authentication
- Payment processing
- Admin dashboard
- Mobile-responsive design
```

#### `tasks/task-analyze-project.mdc`
**Purpose**: Comprehensive project auditing and optimization  
**When to use**: Analyzing existing codebases for improvements  
**Key features**:
- React 19 + Next.js 15 best practices audit
- Performance optimization recommendations
- Design system compliance checking
- Security vulnerability assessment
- Technical debt identification

**Example usage**:
```
@tasks/task-analyze-project.mdc Audit this web app for:
- Performance bottlenecks
- Accessibility issues
- Component architecture improvements
- Tailwind CSS + React component patterns
```

### 🛠️ Development Tools

#### `tools/tool-design-system-gen.mdc`
**Purpose**: Generate comprehensive design systems following deep module principles  
**When to use**: Creating or updating design systems  
**Key features**:
- Token architecture (primitive → semantic → component)
- Modern color space with accessibility compliance
- Component APIs with simple interfaces
- TypeScript definitions for design tokens
- Documentation generation

**Example usage**:
```
@tools/tool-design-system-gen.mdc Create a design system for a healthcare app with:
- Calming color palette
- Clear typography hierarchy
- Accessible form components
- Medical iconography
```

#### `tools/tool-figma-importer.mdc`
**Purpose**: Transform design tool exports into production-ready components  
**When to use**: Working with designs from design tools  
**Key features**:
- Code cleanup and optimization
- Component abstraction and reusability
- Accessibility feature addition
- Performance optimization
- Design system integration

**Example usage**:
```
@tools/tool-figma-importer.mdc Optimize this design tool component:
[paste code]

Make it:
- Accessible and keyboard navigable
- Responsive across devices
- Consistent with our design system
```

### 🏗️ Architecture Planning

#### `modes/mode-architect.mdc`
**Purpose**: Strategic architecture planning and system design  
**When to use**: Planning complex features or system redesigns  
**Key features**:
- Complexity management strategies
- Module boundary definition
- Technology selection with trade-offs
- Risk assessment and mitigation
- Implementation phase planning

**Example usage**:
```
@modes/mode-architect.mdc Design the architecture for a real-time collaboration feature:
- Multiple users editing simultaneously
- Conflict resolution
- Offline support
- Performance at scale
```

## 💡 Best Practices

### Prompt Combination Strategies

1. **Start with Architecture**: Use `mode-architect.mdc` to plan before coding
2. **Initialize with Strategy**: Use `task-init-project.mdc` for new projects
3. **Maintain Design Consistency**: Reference `tool-design-system-gen.mdc` regularly
4. **Optimize Continuously**: Use `task-analyze-project.mdc` for regular audits

### Example Workflow: Building a Dashboard Feature

Follow this structured approach using context engineering:

#### 1. **Strategic Planning Phase**
```bash
# Set planning phase and decompose the task
@context/state-align.md current_phase="planning"
@context/task-decompose.md goal="Build user dashboard with real-time widgets"
@modes/mode-architect.md Plan dashboard architecture and data flow
```

#### 2. **Knowledge Gathering Phase**  
```bash
# Retrieve relevant documentation and patterns
@context/rag-template.md query="React 19 dashboard components best practices"
@context/rag-template.md query="Next.js 15 real-time data fetching patterns"
```

#### 3. **Design System Phase**
```bash
# Generate design components with context
@context/state-align.md current_phase="design"
@tools/tool-design-system-gen.md Create dashboard design system with widgets
```

#### 4. **Implementation Phase**
```bash
# Code with phase constraints and verification
@context/state-align.md current_phase="implementation"
# System prompt guides implementation automatically
# Built-in verification ensures quality at each step
```

#### 5. **Review & Optimization Phase**
```bash
# Compress history and conduct thorough analysis
@context/history-summarizer.md compression_level="medium"
@context/state-align.md current_phase="review"
@tasks/task-analyze-project.md Audit dashboard for performance and accessibility
```

**Result**: Predictable, high-quality implementation with maintained context and verified outcomes.

## 🔧 Customization

### Adding Your Own Prompts

1. **Follow the YAML structure**:
```yaml
---
name: Your Prompt Name
description: Brief description of what it does
model: universal
version: 1.0.0
category: tasks|tools|modes|system
variables: []
---
Your prompt content here...
```

2. **Apply deep module principles**:
   - Simple interfaces for users
   - Complex implementations hidden
   - Clear documentation
   - Error prevention built-in

3. **Place in appropriate folder**:
   - `system/` - Core configuration
   - `tasks/` - Automated workflows
   - `tools/` - Specific utilities
   - `modes/` - Role-based behavior

### Extending Existing Prompts

Fork this repository and modify prompts to match your:
- Technology preferences
- Design system requirements
- Team coding standards
- Project-specific needs

## 🎓 Learning Resources

### "A Philosophy of Software Design" Concepts Applied

- **Chapter 3 (Working Code Isn't Enough)**: Our system prompt emphasizes strategic programming
- **Chapter 4 (Modules Should Be Deep)**: Component design follows simple interface, complex implementation
- **Chapter 5 (Information Hiding)**: Configuration abstraction in project initialization
- **Chapter 6 (General-Purpose Modules)**: Design system components are built for reuse
- **Chapter 10 (Define Errors Out of Existence)**: TypeScript strict mode and validation schemas

### Modern Web Development Stack

- **React 19**: Server Components, concurrent features, optimistic updates
- **Next.js 15**: App Router, Server Actions, React Compiler integration
- **TypeScript 5.5+**: Strict mode, branded types, advanced patterns
- **Tailwind CSS**: Utility-first styling, design tokens, OKLCH colors
- **Cursor AI**: AI-powered development with intelligent code completion
- **Figma**: Design systems, component specs, design-to-code workflows

## 🤝 Contributing

1. **Follow the philosophy**: Ensure new prompts reduce complexity rather than add it
2. **Test thoroughly**: Verify prompts work with current AI assistants
3. **Document clearly**: Explain the purpose and usage of new prompts
4. **Maintain consistency**: Follow the established YAML structure and naming conventions

## 💰 Support This Project

If these prompts save you time and improve your development workflow, consider supporting the project:

### Cryptocurrency Donations
- **Bitcoin**: `1FEvqUr9fhx9z8jZQ3ympj19QaKG4sfe1u`
- **Ethereum**: `0x6b8d7137b60a6f3ee8869dc6c53ab989937e3462`
- **USDT (TRC20)**: `TBYiX5jAZ38qSHvkuyL3QMTytMf5P671VJ`

### Other Ways to Support
- ⭐ Star this repository
- 🐛 Report issues and bugs
- 💡 Suggest new prompt ideas
- 🔄 Share with your development team
- 📝 Contribute improvements and documentation

## 📄 License

MIT License - feel free to use these prompts in your projects and modify them to fit your needs.

---

**Remember**: The goal is to create software that gets easier to work with over time, not harder. These prompts are designed to help you build systems that reduce cognitive load and manage complexity effectively.