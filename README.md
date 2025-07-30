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

This framework is now managed via a powerful command-line interface (CLI). Follow these steps to get started.

### 1. Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- Dependencies installed: `npm install`

### 2. Discover Available Agents

To see the full team of specialized agents available to you, run the `discover` command:

```bash
node scripts/avp-init.js discover
```

This will list all agents, their version, description, and capabilities, so you know who to assign to a task.

### 3. Define a Workflow

Create a JSON file (e.g., `my-workflow.json`) to define a sequence of tasks for the agents. Each step specifies the agent to use and the task to perform.

**Example `my-workflow.json`:**
```json
{
  "name": "New Feature Workflow",
  "steps": [
    {
      "agentName": "Project Initializer",
      "description": "Initialize a new project",
      "task": { "projectName": "my-new-app" }
    },
    {
      "agentName": "Codebase Analyzer Agent",
      "description": "Analyze the new codebase",
      "task": { "projectPath": "./my-new-app" }
    }
  ]
}
```

### 4. Run the Workflow

Execute your workflow using the `workflow:run` command:

```bash
node scripts/avp-init.js workflow:run my-workflow.json
```

The CLI will execute each step, applying confidence gating to ensure quality and reliability. If an agent's confidence is too low, the workflow will halt for an audit.

## ⚙️ The CLI-Driven Workflow

Interaction with the framework is managed entirely through the CLI, providing a structured and repeatable process for complex tasks.

1.  **Discover Agents**: Use `avp discover` to identify the best agent for each part of your task.
2.  **Compose a Workflow**: Define a series of steps in a `.json` file. Each step assigns a task to a specific agent.
3.  **Execute with Confidence**: Run your workflow with `avp workflow:run <your-file.json>`. The system orchestrates the agents, and its confidence-gating system ensures each step meets quality standards before proceeding.

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

The `avp-init.js` script provides the following commands to manage your agent workflows.

### Discover Agents

Lists all available agents and their capabilities.

```bash
node scripts/avp-init.js discover
```

### Run a Workflow

Executes a multi-agent workflow from a JSON definition file.

```bash
node scripts/avp-init.js workflow:run <path_to_workflow.json>
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