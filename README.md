# AI-Vibe-Prompts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made for Cursor](https://img.shields.io/badge/Made%20for-Cursor-orange.svg)](https://cursor.sh/)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

> **Agent-Driven Development Framework for Modern Web Applications**

A comprehensive **Context Engineering Framework** for AI-assisted development, featuring specialized AI agents, workflow orchestration, and production-ready prompts optimized for React 19 + Next.js 15 + TypeScript workflows. Built on "A Philosophy of Software Design" principles with advanced context management, RAG integration, and state alignment.

## 🎯 Philosophy

This collection follows the core principles from "A Philosophy of Software Design":

- **Deep Modules**: Create simple interfaces with powerful implementations
- **Complexity Management**: Hide implementation details behind clean abstractions  
- **Strategic Programming**: Invest in good architecture to reduce future complexity
- **Information Hiding**: Separate what developers need to know from how things work internally

## ✨ Features

- **🤖 Specialized AI Agents** - 10+ domain-specific agents for different development tasks
- **🧠 AI Blindspot Prevention** - Combat "Read the Docs", "Respect the Spec", and other AI limitations
- **🛡️ Mandatory Quality Gates** - RAG Assistant validates all implementations against documentation
- **🔬 Scientific Debugging** - Systematic hypothesis-driven debugging methodology
- **🔄 Workflow Orchestration** - Multi-agent workflows with quality gates and handoffs
- **📊 Quality Monitoring** - Real-time metrics and technical debt tracking
- **🏗️ Preparatory Refactoring** - "Mise en Place" approach to code preparation
- **🎨 Design System Integration** - Figma-to-code conversion and component libraries
- **🚀 Project Templates** - Ready-made starters for different project types
- **📝 Context Engineering** - Smart code analysis and pattern recognition

## 📜 Table of Contents
- [🎯 Philosophy](#-philosophy)
- [✨ Features](#-features)
- [📁 Repository Structure](#-repository-structure)
- [🧠 Context Engineering](#-context-engineering-add-ons)
- [🚀 Quick Start](#-quick-start)
- [🤖 AI Agents](#-ai-agents)
- [📋 Project Templates](#-project-templates)
- [🔄 Development Workflow](#-development-workflow)
- [💡 Best Practices](#-best-practices)
- [🔧 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [💰 Support This Project](#-support-this-project)

## 📁 Repository Structure

```
ai-vibe-prompts/
├── agents/ (USER ENTRY POINT)
│   ├── core/           # Development workflow agents
│   │   ├── orchestrator.md    # Multi-agent workflow coordination
│   │   ├── architect.md       # System design and architecture
│   │   ├── developer.md       # Code implementation specialist
│   │   └── analyst.md         # Quality assurance and analysis
│   ├── project/        # Project lifecycle agents
│   │   ├── init.md            # Project initialization
│   │   └── audit.md           # Project auditing and optimization
│   ├── design/         # UI/UX specialized agents
│   │   ├── design-system.md   # Design token architecture
│   │   └── figma-converter.md # Figma to React conversion
│   └── helpers/        # Utility and analysis agents
│       ├── rag-assistant.md   # Codebase analysis
│       ├── workflow-composer.md # Multi-agent workflows
│       └── quality-monitor.md # Metrics and monitoring
├── system/ (MINIMAL - delegation only)
│   ├── system-prompt.md       # Central orchestration
│   ├── context-helpers.md     # Utility templates
│   ├── rag-template.md        # Information retrieval
│   ├── history-summarizer.md  # Conversation compression
│   ├── state-align.md         # Phase management
│   └── task-decompose.md      # Task breakdown
├── templates/          # Ready-made project starters
│   ├── shadcn-vite/           # Lightweight SPA starter
│   ├── next-enterprise/       # Enterprise applications
│   └── t3-stack/              # Full-stack TypeScript
└── scripts/            # CLI tools and automation
    └── avp-init.js            # Project initialization CLI
```

## 🧠 Context Engineering Add-Ons

This repository includes **context engineering modules** that implement advanced AI management techniques:

- **Task Decomposition**: Break complex tasks into verifiable steps with checkpoints
- **RAG Integration**: Fact-based generation using retrieved documentation
- **History Compression**: Intelligent conversation summarization for long sessions
- **State Alignment**: Phase-based workflow management with tool constraints

These modules work together to create more predictable, efficient, and reliable AI interactions while preventing hallucinations and maintaining context coherence.

## 🚀 Quick Start

### New Project
```bash
# Create project with AI agents
npx ai-vibe-prompts create my-app --template=t3-stack
cd my-app
npm install

# Start with codebase analysis
@agents/helpers/rag-assistant.md
```

### Existing Project
```bash
# Add AI agents to existing project
npx ai-vibe-prompts init

# Begin with project analysis
@agents/helpers/rag-assistant.md
"Analyze this codebase and provide development recommendations"
```

### Set Up System Prompt
1. Open your AI assistant settings
2. Navigate to the rules or system prompt section
3. Copy the entire content from `system/system-prompt.md` and paste it

This establishes the foundation with:
- Deep module design principles
- TypeScript strict mode configurations
- Performance and accessibility standards
- Error prevention strategies

## 🤖 AI Agents

### Core Development Agents
- **🎯 Orchestrator** - Multi-agent workflow coordination and task distribution
- **🏗️ Architect** - System design, architecture planning, and technology selection
- **💻 Developer** - Code implementation, testing, and quality assurance
- **📊 Analyst** - Performance analysis, security review, and optimization

### Project Management Agents
- **🚀 Project Init** - Project setup, technology stack selection, and scaffolding
- **🔍 Project Audit** - Comprehensive analysis of existing codebases and tech debt

### Design & UI Agents
- **🎨 Design System** - Component libraries, design tokens, and style guides
- **🎭 Figma Converter** - Figma designs to production React components

### Helper & Utility Agents
- **🧠 RAG Assistant** - Code analysis, pattern recognition, and context extraction
- **⚙️ Workflow Composer** - Multi-agent workflow creation and optimization
- **📈 Quality Monitor** - Metrics tracking, performance monitoring, and reporting

## 📋 Project Templates

| Template | Best For | Tech Stack |
|----------|----------|------------|
| **shadcn-vite** | Marketing sites, SPAs | Vite + React 18 + Tailwind + shadcn/ui |
| **next-enterprise** | Enterprise applications | Next.js 15 + TypeScript + NextAuth + Prisma |
| **t3-stack** | Full-stack applications | Next.js + tRPC + Prisma + NextAuth |

## 🔄 Development Workflow

### 1. Project Analysis
```bash
@agents/helpers/rag-assistant.md
"Analyze this codebase and identify the architecture, patterns, and improvement opportunities"
```

### 2. Feature Planning
```bash
@agents/core/architect.md
"Design a user authentication system with social login and role-based permissions"
```

### 3. Implementation
```bash
@agents/core/developer.md
"Implement the authentication system according to the architect's specifications"
```

### 4. Quality Assurance
```bash
@agents/core/analyst.md
"Review the implementation for security, performance, and best practices"
```

## 🎯 Usage Examples

### Creating a Design System
```bash
# Step 1: Design system foundation
@agents/design/design-system.md
"Create a comprehensive design system with tokens, components, and documentation for a SaaS dashboard"

# Step 2: Implement components
@agents/core/developer.md
"Implement the design system components with TypeScript and accessibility features"
```

### Converting Figma to Code
```bash
# Convert Figma designs to React components
@agents/design/figma-converter.md
"Convert this Figma dashboard design to responsive React components with proper TypeScript definitions"
```

### Complex Feature Development
```bash
# Use workflow composer for multi-step features
@agents/helpers/workflow-composer.md
"Create a workflow for adding real-time chat functionality to our SaaS application"
```

### Project Modernization
```bash
# Audit existing project
@agents/project/audit.md
"Analyze this legacy React project and provide a modernization roadmap"

# Plan migration
@agents/core/architect.md
"Design a migration strategy from the legacy system to modern React 19 + Next.js 15"
```

## 📊 Quality Standards

AI-Vibe-Prompts enforces enterprise-grade quality standards:

### Performance
- ⚡ Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1
- 📦 Bundle optimization and code splitting
- 🖼️ Image optimization and lazy loading

### Accessibility
- ♿ WCAG 2.2 AA compliance
- 🎹 Keyboard navigation
- 📱 Screen reader compatibility

### Code Quality
- 🔍 TypeScript strict mode
- 🧪 Test coverage ≥ 85%
- 📏 ESLint + Prettier configuration
- 🔒 Security best practices

## 💡 Best Practices

### Prompt Combination Strategies

1. **Start with Architecture**: Use `agents/core/architect.md` to plan before coding
2. **Initialize with Strategy**: Use `agents/project/init.md` for new projects
3. **Maintain Design Consistency**: Reference `agents/design/design-system.md` regularly
4. **Optimize Continuously**: Use `agents/project/audit.md` for regular audits

### Example Workflow: Building a Dashboard Feature

Follow this structured approach using context engineering:

#### 1. **Strategic Planning Phase**
```bash
# Set planning phase and decompose the task
@system/state-align.md current_phase="planning"
@system/task-decompose.md goal="Build user dashboard with real-time widgets"
@agents/core/architect.md Plan dashboard architecture and data flow
```

#### 2. **Knowledge Gathering Phase**  
```bash
# Retrieve relevant documentation and patterns
@system/rag-template.md query="React 19 dashboard components best practices"
@system/rag-template.md query="Next.js 15 real-time data fetching patterns"
```

#### 3. **Design System Phase**
```bash
# Generate design components with context
@system/state-align.md current_phase="design"
@agents/design/design-system.md Create dashboard design system with widgets
```

#### 4. **Implementation Phase**
```bash
# Code with phase constraints and verification
@system/state-align.md current_phase="implementation"
@agents/core/developer.md Implement dashboard components
```

#### 5. **Review & Optimization Phase**
```bash
# Compress history and conduct thorough analysis
@system/history-summarizer.md compression_level="medium"
@system/state-align.md current_phase="review"
@agents/project/audit.md Audit dashboard for performance and accessibility
```

**Result**: Predictable, high-quality implementation with maintained context and verified outcomes.

## 🧭 Guide Usage

### When to Use Each Agent Category

| Situation | Use This Agent | Purpose |
|-----------|----------------|---------|
| **Setting up AI assistant** | `system/system-prompt.md` | Establish base rules and philosophy |
| **Starting new project** | `agents/project/init.md` | Strategic project initialization with modern stack |
| **Auditing existing project** | `agents/project/audit.md` | Comprehensive analysis and optimization recommendations |
| **Creating design system** | `agents/design/design-system.md` | Generate design tokens and component specifications |
| **Converting Figma designs** | `agents/design/figma-converter.md` | Transform design exports into production React |
| **Planning complex features** | `agents/core/architect.md` | Strategic architecture and system design |
| **Code implementation** | `agents/core/developer.md` | Implementation with quality assurance |
| **Quality analysis** | `agents/core/analyst.md` | Performance and security review |

### Context Engineering Workflow

For advanced AI management, combine system prompts with context modules:

```
1. Start with system/system-prompt.md (always active)
2. For complex tasks: @system/task-decompose.md
3. For information retrieval: @system/rag-template.md  
4. For long sessions: @system/history-summarizer.md
5. For workflow management: @system/state-align.md
```

## 🔧 Customization

### Adding Your Own Agents

1. **Follow the agent structure**:
```yaml
---
name: Your Agent Name
description: Brief description of what it does
model: universal
version: 1.0.0
category: core|project|design|helpers
specialization: specific domain
---
Your agent content here...
```

2. **Apply deep module principles**:
   - Simple interfaces for users
   - Complex implementations hidden
   - Clear documentation
   - Error prevention built-in

3. **Place in appropriate folder**:
   - `agents/core/` - Core development workflow
   - `agents/project/` - Project lifecycle management
   - `agents/design/` - UI/UX specialization
   - `agents/helpers/` - Utility and analysis

### Extending Existing Agents

Fork this repository and modify agents to match your:
- Technology preferences
- Design system requirements
- Team coding standards
- Project-specific needs

## 🛠️ CLI Commands

```bash
# Project creation
npx ai-vibe-prompts create <name> --template=<template>

# Add to existing project
npx ai-vibe-prompts init [directory]

# List available resources
npx ai-vibe-prompts list-templates
npx ai-vibe-prompts list-agents

# Help and documentation
npx ai-vibe-prompts help
```

## 🌟 Key Benefits

### For Individual Developers
- **Faster Development** - AI agents accelerate coding with context-aware assistance
- **Better Code Quality** - Built-in quality gates and best practices enforcement
- **Learning Tool** - Learn modern patterns and architectural decisions
- **Consistency** - Standardized approaches across all projects

### For Teams
- **Workflow Standardization** - Consistent development processes
- **Knowledge Sharing** - Capture and reuse architectural decisions
- **Quality Assurance** - Automated quality checks and monitoring
- **Onboarding** - New team members get up to speed faster

### For Projects
- **Modern Stack** - React 19, Next.js 15, TypeScript best practices
- **Performance First** - Core Web Vitals optimization built-in
- **Accessibility** - WCAG 2.2 AA compliance by default
- **Security** - Security best practices and vulnerability detection

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

## 💡 Advanced Features from Community Research

### Safety & Refusal Patterns
Our agents incorporate safety principles from leading AI research:
- **Factual accuracy**: Built-in fact-checking and verification patterns
- **Bias prevention**: Explicit instructions for inclusive, unbiased responses  
- **Error boundaries**: Clear guidelines for handling edge cases and limitations
- **Context awareness**: Structured information boundaries and source attribution

### Advanced Prompting Techniques
- **Chain-of-Thought**: Step-by-step reasoning for complex architectural decisions
- **Few-Shot Learning**: Examples and patterns embedded in agent design
- **Meta-Language**: Custom command structures for efficient AI interaction
- **Context Engineering**: Advanced memory management and state alignment

### Professional Tone Guidelines
- Direct and professional communication - no filler or apologetic language
- Focus on actionable outcomes rather than theoretical discussions  
- Concrete examples and code snippets when beneficial
- Clear delegation to specialized agents when appropriate

## 🤝 Contributing

1. **Follow the philosophy**: Ensure new agents reduce complexity rather than add it
2. **Test thoroughly**: Verify agents work with current AI assistants
3. **Document clearly**: Explain the purpose and usage of new agents
4. **Maintain consistency**: Follow the established structure and naming conventions

### Development Setup
```bash
git clone https://github.com/Atman36/AI-Vibe-Prompts.git
cd AI-Vibe-Prompts
npm install
npm run dev
```

## 💰 Support This Project

If these prompts save you time and improve your development workflow, consider supporting the project:

### Cryptocurrency Donations
- **Bitcoin**: `1FEvqUr9fhx9z8jZQ3ympj19QaKG4sfe1u`
- **Ethereum**: `0x6b8d7137b60a6f3ee8869dc6c53ab989937e3462`
- **USDT (TRC20)**: `TBYiX5jAZ38qSHvkuyL3QMTytMf5P671VJ`

### Other Ways to Support
- ⭐ Star this repository
- 🐛 Report issues and bugs
- 💡 Suggest new agent ideas
- 🔄 Share with your development team
- 📝 Contribute improvements and documentation

## 📄 License

MIT License - feel free to use these agents in your projects and modify them to fit your needs.

## 🔗 Links

- **[GitHub Repository](https://github.com/Atman36/AI-Vibe-Prompts)**
- **[Documentation](https://github.com/Atman36/AI-Vibe-Prompts/wiki)**
- **[Issues & Support](https://github.com/Atman36/AI-Vibe-Prompts/issues)**
- **[Discussions](https://github.com/Atman36/AI-Vibe-Prompts/discussions)**

---

**Built with ❤️ for the modern web development community**

**Remember**: The goal is to create software that gets easier to work with over time, not harder. These agents are designed to help you build systems that reduce cognitive load and manage complexity effectively.

*Inspired by BMAD-METHOD's agent coordination principles and focused on React/Next.js development excellence.*