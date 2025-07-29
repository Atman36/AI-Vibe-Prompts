# AI-Vibe-Prompts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made for Cursor](https://img.shields.io/badge/Made%20for-Cursor-orange.svg)](https://cursor.sh/)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

> **An Autonomous AI-Agent Framework for Modern Web Development**

**AI-Vibe-Prompts** has evolved from a collection of prompts into a powerful, agent-driven framework. It provides a team of specialized AI agents that collaborate to design, build, and maintain complex web applications, following a predictable, tool-based workflow.

## 🎯 The New Paradigm: Agent-Driven Development

This framework introduces a structured, tool-first approach to AI-assisted development, moving beyond simple prompts to a robust system of autonomous agents.

- **From Prompts to Agents**: We've transformed descriptive markdown files into active, specialized agents. Each agent has a clear role and uses a powerful set of tools to perform its tasks.
- **The `PLAN -> ACT` Cycle**: All agents operate on a strict **Plan-then-Act** cycle. They first analyze the task and create a detailed, transparent plan of tool calls. Only after the plan is defined do they execute it, ensuring predictable and auditable behavior.
- **Orchestration with `Workflow Composer`**: For complex tasks, the `Workflow Composer` acts as a director, creating and managing multi-agent workflows. It sequences tasks, hands off work between agents, and enforces quality gates, turning a high-level goal into a fully managed, automated process.

## ✨ Features

- **🤖 Autonomous AI Agents**: A team of specialized agents for architecture, development, refactoring, debugging, and more.
- **🔄 Predictable `PLAN -> ACT` Workflow**: Ensures transparency and reliability in all agent operations.
- **🎼 Multi-Agent Orchestration**: The `Workflow Composer` designs and executes complex development workflows.
- **🛠️ Tool-Based Execution**: Agents perform all actions through a well-defined set of tools (`shell_exec`, `replace_file_content`, `codebase_search`), eliminating guesswork.
- **🚀 Automated Onboarding**: The `Onboarder` agent automates project setup, from dependency checks to initial tests.
- **🔬 Scientific Debugging & Refactoring**: Dedicated agents apply systematic, safe, and verifiable methods to improve code quality.
- **🛡️ Built-in Quality Gates**: The `Quality Monitor` and `RAG Assistant` ensure that all work meets predefined standards.
- **🧩 Project Templates**: Production-ready starters for various application types, now with automated setup.

## 🚀 Getting Started

Follow these steps to get the agent-driven framework running.

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) version 18 or higher installed.

### 2. Installation

Create a new project using one of our templates. This is the recommended way to start.

```bash
# Create a new Next.js project with Shadcn UI
npx ai-vibe-prompts create my-app --template=next-shadcn
cd my-app
```

### 3. Automated Environment Setup

Once inside your project, invoke the `Onboarder` agent. It will automatically:
- Verify Node.js and npm versions.
- Install all required dependencies.
- Set up necessary configuration files (like `.env`).
- Run initial tests to ensure the environment is ready.

To run it, simply invoke the agent with a clear instruction:

```bash
@agents/helpers/onboarder.md
"Set up this project for development."
```

## ⚙️ How to Use: The Development Workflow

Interaction with the framework is simple. You provide a high-level goal to the main orchestrator, the `Workflow Composer`, and it handles the rest.

### Step 1: Define Your Goal

State what you want to achieve in plain English. Invoke the `Workflow Composer` with your goal.

**Example: Adding a new feature**
```bash
@agents/helpers/workflow-composer.md
"My goal is to add a new 'Contact Us' page with a functional form."
```

### Step 2: Review the Plan

The `Workflow Composer` will enter **PLAN MODE**. It will analyze the codebase and create a detailed, multi-agent plan to achieve your goal. The plan will be presented to you for approval. It might look like this:

1.  **Invoke `codebase-analyzer`**: To understand the project structure.
2.  **Invoke `architect`**: To design the new 'Contact Us' page component and form logic.
3.  **Invoke `developer`**: To implement the page based on the architect's plan.
4.  **Invoke `quality-monitor`**: To run tests on the new page.

### Step 3: Approve and Execute

Once you approve the plan, the `Workflow Composer` switches to **ACT MODE** and executes the plan step-by-step, managing the entire process until the task is complete.

## 🤖 The Agent Team

Our agents have been upgraded to be active participants in the development process.

- **`core/architect`**: Designs system architecture and creates technical plans for the `Developer`.
- **`core/developer`**: Implements features based on architectural plans, using its `frontend`, `backend`, and `testing` specialists.
- **`helpers/refactor-assistant`**: An active agent that uses tools like `file_apply_patch` and `shell_exec` to safely prepare code *before* new features are added.
- **`helpers/debugger-assistant`**: Uses a scientific method and tools to systematically find and fix bugs.
- **`helpers/quality-monitor`**: Automatically runs linters, tests, and security scans using `shell_exec` to enforce quality standards.
- **`helpers/onboarder`**: Automates the entire project setup process.
- **`helpers/workflow-composer`**: The team lead. Decomposes high-level goals into multi-agent workflows and orchestrates their execution.

...and many more specialized agents in the `agents` directory.

## 📁 Repository Structure

```
ai-vibe-prompts/
├── agents/           # The home of all specialized AI agents
│   ├── core/         # Core development team (Architect, Developer)
│   └── helpers/      # Utility agents (Composer, Refactor, Debugger, etc.)
│   └── ...           # Other specialized agents
├── docs/             # Project documentation
├── templates/        # Production-ready project starters
└── system/           # Low-level system prompts (rarely used directly)
```

## 🤝 Contributing

This project is rapidly evolving. Contributions to improve agents, tools, and workflows are welcome. Please see `CONTRIBUTING.md` for guidelines.

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