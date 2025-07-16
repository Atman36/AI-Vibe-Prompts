# Quick Start Guide

Get up and running with AI-Vibe-Prompts in under 5 minutes.

## 🚀 Installation

### Option 1: New Project
```bash
# Create new project with template
npx ai-vibe-prompts create my-app --template=t3-stack
cd my-app
npm install
npm run dev
```

### Option 2: Existing Project
```bash
# Add to existing project
npx ai-vibe-prompts init
```

## 🤖 Your First AI Agent

### 1. Analyze Your Codebase
```bash
# Use the RAG assistant to understand your project
@agents/helpers/rag-assistant.md
```

**Prompt**: "Analyze this codebase and provide an overview of the architecture, tech stack, and patterns used."

### 2. Plan a New Feature
```bash
# Use the architect for feature planning
@agents/core/architect.md
```

**Prompt**: "I want to add user authentication with social login. Design the architecture and data flow."

### 3. Implement the Feature
```bash
# Use the developer for implementation
@agents/core/developer.md
```

**Prompt**: "Implement the user authentication system designed by the architect."

## 📋 Available Templates

| Template | Use Case | Features |
|----------|----------|----------|
| **shadcn-vite** | Marketing sites, SPAs | Vite, React 18, Tailwind, shadcn/ui |
| **next-enterprise** | Enterprise apps | Next.js 15, TypeScript, NextAuth, Prisma |
| **t3-stack** | Full-stack apps | tRPC, Prisma, NextAuth, Type-safe APIs |

## 🎯 Common Workflows

### Creating a New Component
```bash
# 1. Design the component
@agents/design/design-system.md
"Create a reusable Card component with variants for different use cases"

# 2. Implement the component
@agents/core/developer.md
"Implement the Card component according to the design system specifications"
```

### Adding a Feature
```bash
# 1. Analyze requirements
@agents/helpers/rag-assistant.md
"Analyze the existing user management system to understand how to add role-based permissions"

# 2. Plan architecture
@agents/core/architect.md
"Design a role-based permission system that integrates with the existing user management"

# 3. Implement
@agents/core/developer.md
"Implement the role-based permission system according to the architecture"

# 4. Quality check
@agents/core/analyst.md
"Review the implementation for security, performance, and best practices"
```

### Project Audit
```bash
# Comprehensive project analysis
@agents/project/audit.md
"Audit this project for technical debt, performance issues, and security vulnerabilities"
```

## 🔧 Agent Categories

### Core Agents
- **Orchestrator**: Multi-agent workflow coordinator
- **Architect**: System design and planning
- **Developer**: Code implementation and testing
- **Analyst**: Quality assurance and optimization

### Project Agents
- **Init**: Project setup and initialization
- **Audit**: Comprehensive project analysis

### Design Agents
- **Design System**: Component library and design tokens
- **Figma Converter**: Figma to React conversion

### Helper Agents
- **RAG Assistant**: Code analysis and context extraction
- **Workflow Composer**: Multi-agent workflow creation
- **Quality Monitor**: Metrics and monitoring

## 💡 Pro Tips

### 1. Start with Analysis
Always begin with the RAG assistant to understand your codebase context:
```bash
@agents/helpers/rag-assistant.md
"Analyze this project and recommend the best agents for adding [your feature]"
```

### 2. Use Workflows for Complex Tasks
For multi-step features, use the workflow composer:
```bash
@agents/helpers/workflow-composer.md
"Create a workflow for adding a payment system to this e-commerce app"
```

### 3. Monitor Quality
Use the quality monitor to track progress:
```bash
@agents/helpers/quality-monitor.md
"Set up monitoring for code quality, performance, and security metrics"
```

### 4. Chain Agents
Use agent handoffs for better results:
```bash
# Step 1: Plan
@agents/core/architect.md
"Design a chat feature for this SaaS app"

# Step 2: Implement (reference previous output)
@agents/core/developer.md
"Implement the chat feature based on the architecture from the previous step"
```

## 📚 Next Steps

- Read the [Complete Workflow Guide](WORKFLOW.md)
- Explore [Agent Documentation](../agents/)
- Check out [Project Templates](../templates/)
- Learn about [Quality Standards](QUALITY.md)

## 🆘 Getting Help

### Common Issues

**Agent not working?**
- Check that you're using the correct path: `@agents/category/agent.md`
- Ensure the project is properly initialized with `npx ai-vibe-prompts init`

**Need project context?**
- Start with RAG assistant: `@agents/helpers/rag-assistant.md`
- It will analyze your code and provide context to other agents

**Complex feature?**
- Use workflow composer: `@agents/helpers/workflow-composer.md`
- It will break down the task and coordinate multiple agents

### Support
- [GitHub Issues](https://github.com/Atman36/AI-Vibe-Prompts/issues)
- [Discussion Forum](https://github.com/Atman36/AI-Vibe-Prompts/discussions)
- [Documentation](https://github.com/Atman36/AI-Vibe-Prompts)

---

**Ready to build? Start with:** `@agents/helpers/rag-assistant.md` 