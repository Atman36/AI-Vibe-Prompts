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

#### `tasks/task-init-project.md`
**Purpose**: Strategic project initialization with complexity management  
**When to use**: Starting new projects from scratch  
**Key features**:
- React 19 + Next.js 15 + TypeScript modern stack setup
- Package versions matrix with compatibility rationale
- Deep module project structure with clear boundaries  
- CI/CD pipeline configuration with quality gates
- Comprehensive documentation template generation
- Error prevention systems with strict TypeScript validation

**Example usage**:
```
@tasks/task-init-project.md Create a new e-commerce platform with:
- User authentication and role management
- Payment processing integration
- Admin dashboard with analytics
- Mobile-responsive design with offline capabilities
```

#### `tasks/task-analyze-project.md`
**Purpose**: Comprehensive project auditing and optimization  
**When to use**: Analyzing existing codebases for improvements  
**Key features**:
- React 19 + Next.js 15 best practices compliance audit
- Performance optimization with Core Web Vitals focus (INP ≤ 200ms)
- Design system consistency evaluation
- Future-proofing assessment with technology evolution roadmap
- Security vulnerability identification and mitigation strategies

**Example usage**:
```
@tasks/task-analyze-project.md Audit this web app for:
- Performance bottlenecks and optimization opportunities
- Design system compliance across components
- Security vulnerabilities and best practices gaps
- Migration readiness for React 19 features
```

### 🛠️ Specialized Tools

#### `tools/tool-design-system-gen.md`
**Purpose**: Generate comprehensive design systems with deep module architecture  
**When to use**: Creating or standardizing design systems  
**Key features**:
- Three-layer token architecture (Primitive → Semantic → Component)
- OKLCH color space with perceptual uniformity and wide gamut support
- TypeScript definitions for design tokens and component interfaces
- Accessibility compliance with WCAG 2.2 AA standards built-in
- Integration with Tailwind CSS v4 and modern CSS features

**Example usage**:
```
@tools/tool-design-system-gen.md Generate design system for fintech app:
- OKLCH color palette with professional blue/green theme
- Typography scale optimized for data-heavy interfaces  
- Component library with security-focused interaction patterns
```

#### `tools/tool-figma-importer.md`
**Purpose**: Transform Figma exports into production-ready React components  
**When to use**: Converting design files to code  
**Key features**:
- Six-phase post-processing checklist for comprehensive code transformation
- Design system integration with automatic token mapping
- Accessibility implementation with WCAG 2.2 AA compliance
- Performance optimization with React 19 patterns and lazy loading
- Quality assurance standards for maintainable component architecture

**Example usage**:
```
@tools/tool-figma-importer.md Transform this Figma design:
- Convert landing page layouts to responsive React components
- Integrate with existing design system tokens
- Ensure accessibility and performance optimization
- Add TypeScript interfaces and proper state management
```

### 🏗️ Architecture & Planning

#### `modes/mode-architect.md`
**Purpose**: Strategic architecture planning with complexity management  
**When to use**: Planning complex features or system architecture  
**Key features**:
- Token management with context optimization (≤ 80% usage)
- Structured output template with 8-step planning process
- Risk assessment and mitigation strategies
- Technology selection with clear rationale and trade-offs
- Compliance enforcement with Core Development Principles

**Example usage**:
```
@modes/mode-architect.md Plan architecture for real-time collaboration feature:
- WebSocket integration with React 19 Server Components
- Conflict resolution algorithms for concurrent editing
- Offline-first design with sync capabilities
- Scalable backend with microservices architecture
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

## 🧭 Guide Usage

### When to Use Each Prompt Category

| Situation | Use This Prompt | Purpose |
|-----------|----------------|---------|
| **Setting up AI assistant** | `system/system-prompt.md` | Establish base rules and philosophy |
| **Starting new project** | `tasks/task-init-project.md` | Strategic project initialization with modern stack |
| **Auditing existing project** | `tasks/task-analyze-project.md` | Comprehensive analysis and optimization recommendations |
| **Creating design system** | `tools/tool-design-system-gen.md` | Generate design tokens and component specifications |
| **Converting Figma designs** | `tools/tool-figma-importer.md` | Transform design exports into production React |
| **Planning complex features** | `modes/mode-architect.md` | Strategic architecture and system design |

### Context Engineering Workflow

For advanced AI management, combine system prompts with context modules:

```
1. Start with system/system-prompt.md (always active)
2. For complex tasks: @context/task-decompose.md
3. For information retrieval: @context/rag-template.md  
4. For long sessions: @context/history-summarizer.md
5. For workflow management: @context/state-align.md
```

### Example Usage Patterns

**Project Initialization**:
```
@tasks/task-init-project.md Create a SaaS dashboard with:
- User authentication and role management
- Real-time notifications
- Payment processing integration
- Mobile-responsive design
```

**Design System Creation**:
```
@tools/tool-design-system-gen.md Generate design system for fintech app:
- OKLCH color palette with dark mode
- Typography scale for data-heavy interfaces  
- Component library with accessibility focus
```

**Architecture Planning**:
```
@modes/mode-architect.md Plan architecture for real-time chat feature:
- WebSocket integration
- Message persistence
- File sharing capabilities
- Mobile app synchronization
```

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

## 💡 Best Practices from Community Research

### Safety & Refusal Patterns
Our prompts incorporate safety principles from leading AI research:
- **Factual accuracy**: Built-in fact-checking and verification patterns
- **Bias prevention**: Explicit instructions for inclusive, unbiased responses  
- **Error boundaries**: Clear guidelines for handling edge cases and limitations
- **Context awareness**: Structured information boundaries and source attribution

### Advanced Prompting Techniques
- **Chain-of-Thought**: Step-by-step reasoning for complex architectural decisions
- **Few-Shot Learning**: Examples and patterns embedded in prompt design
- **Meta-Language**: Custom command structures for efficient AI interaction
- **Context Engineering**: Advanced memory management and state alignment

### Professional Tone Guidelines
- Direct and professional communication - no filler or apologetic language
- Focus on actionable outcomes rather than theoretical discussions  
- Concrete examples and code snippets when beneficial
- Clear delegation to specialized prompts when appropriate

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