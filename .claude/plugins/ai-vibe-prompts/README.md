# AI-Vibe-Prompts Plugin

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/Atman36/AI-Vibe-Prompts)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-v2.x-purple.svg)](https://docs.claude.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

> Transform Claude Code into a complete development environment with specialized agents and skills

## 🎯 What is This Plugin?

AI-Vibe-Prompts is a comprehensive plugin that enhances Claude Code with:
- **15 Specialized AI Agents** - Architect, Developer, Designer, and more
- **5 Claude Skills** - Reusable expertise with progressive disclosure
- **Professional Workflows** - GitFlow, testing strategies, quality gates
- **Framework Optimization** - Next.js, React, Vue, TypeScript patterns

## ✨ Features

### Agents (`.claude/agents/`)
- **Core Team**: Architect, Developer, Analyst, Workflow Composer
- **Helpers**: Codebase Analyzer, Debugger, Refactor Assistant, Quality Monitor
- **Specialists**: Next.js, React, Vue Optimizers
- **Design & Strategy**: Designer, Product Strategist, Performance Tester, Deployment Specialist

### Skills (`.claude/skills/`)
- **codebase-analysis** - Systematic project structure and complexity analysis
- **quality-gates** - Comprehensive linting, testing, security checks
- **nextjs-optimization** - Next.js 15 performance and Core Web Vitals
- **git-workflow** - GitFlow and Conventional Commits best practices
- **testing-strategy** - Vitest and Playwright testing patterns

## 🚀 Quick Start

### Installation

#### Option 1: Clone Repository
```bash
git clone https://github.com/Atman36/AI-Vibe-Prompts.git
cd AI-Vibe-Prompts
npm install
```

#### Option 2: Use as Plugin
```bash
# In your Claude Code plugins directory
git clone https://github.com/Atman36/AI-Vibe-Prompts.git ~/.claude/plugins/ai-vibe-prompts
```

### Verification
```bash
# Check installation
node scripts/avp-init.js system:status

# List all agents
node scripts/avp-init.js discover

# List all skills
node scripts/avp-init.js skills:list
```

## 📖 Usage

### Using Agents
```
@architect design the authentication system
@developer implement the user dashboard
@designer create a design system for the app
```

### Using Skills (Auto-Invoke)
Skills load automatically based on context:
```
"Analyze the codebase" → codebase-analysis skill loads
"Run quality checks" → quality-gates skill loads
"Optimize this Next.js app" → nextjs-optimization skill loads
```

### CLI Commands
```bash
# System management
node scripts/avp-init.js init
node scripts/avp-init.js system:status

# Agent discovery
node scripts/avp-init.js discover

# Skills management
node scripts/avp-init.js skills:list
node scripts/avp-init.js skills:info codebase-analysis

# Workflows
node scripts/avp-init.js workflow:run my-workflow.json
```

## 🎯 Use Cases

### 1. New Project Setup
```
1. @workflow-composer help me set up a Next.js 15 project
2. Skills auto-invoke: codebase-analysis, quality-gates, nextjs-optimization
3. Result: Fully configured project with best practices
```

### 2. Code Quality Audit
```
1. "Analyze code quality and run all checks"
2. codebase-analysis identifies issues
3. quality-gates runs linting, tests, security
4. Report generated with actionable recommendations
```

### 3. Feature Development
```
1. @architect design feature architecture
2. @developer implement with specialists (frontend, backend, testing)
3. git-workflow guides proper commits
4. testing-strategy ensures coverage
5. quality-gates validates before commit
```

### 4. Performance Optimization
```
1. "Optimize this Next.js application"
2. nextjs-optimization skill analyzes app
3. Provides specific improvements for:
   - Image optimization
   - Bundle size reduction
   - Core Web Vitals
   - Rendering strategies
```

## 📊 Plugin Contents

### Agents (15 Total)
- analyst.md
- architect.md
- codebase-analyzer.md
- debugger-assistant.md
- deployment-specialist.md
- designer.md
- developer.md (+ frontend, backend, testing specialists)
- nextjs-optimizer.md
- performance-tester.md
- product-strategist.md
- quality-monitor.md
- react-optimizer.md
- refactor-assistant.md
- vue-optimizer.md
- workflow-composer.md

### Skills (5 Total)
- **Core**: codebase-analysis, quality-gates
- **Framework**: nextjs-optimization
- **Workflow**: git-workflow, testing-strategy

### Documentation
- README.md - Project overview
- CLAUDE.md - Claude Code integration guide
- docs/skills-system-guide.md - Skills development guide
- docs/CHANGELOG-v3.0.md - Version history

## 🔧 Configuration

### core-config.yaml
Central configuration for agents, skills, and system settings.

### Progressive Disclosure
Skills use 3-level loading:
1. **Metadata** (always loaded) - Name, description
2. **Full Content** (when relevant) - Complete instructions
3. **Deep Resources** (on-demand) - Scripts, templates

**Result**: Unbounded expertise with minimal token usage.

## 📈 Benefits

### Token Efficiency
- **-70%** duplicated instructions through skills
- Progressive loading prevents context saturation
- Metadata-first approach minimizes overhead

### Code Reusability
- Skills replace 100s of lines of duplicated code
- Composable: Skills reference other skills
- Portable: Works across Claude ecosystem

### Developer Experience
- Auto-invocation: No manual triggering
- Clear CLI: Simple management commands
- Rich docs: Complete guides and templates

## 🛠️ Requirements

- **Node.js**: 18.0.0 or higher
- **Claude Code**: 2.0.12 or higher
- **Git**: For version control workflows
- **npm**: For package management

## 📚 Documentation

- [Skills System Guide](../../docs/skills-system-guide.md)
- [CLAUDE.md](../../CLAUDE.md) - Integration guide
- [CHANGELOG](../../docs/CHANGELOG-v3.0.md) - Version history
- [GitHub Repository](https://github.com/Atman36/AI-Vibe-Prompts)

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](../../docs/CONTRIBUTING.md) for guidelines.

### Adding Skills
1. Create skill directory in `.claude/skills/`
2. Write SKILL.md with YAML frontmatter
3. Register in core-config.yaml
4. Test auto-invocation
5. Submit pull request

### Adding Agents
1. Create agent file in `.claude/agents/`
2. Follow agent format with YAML frontmatter
3. Define clear role and workflows
4. Add to core-config.yaml
5. Submit pull request

## 📄 License

MIT License - See [LICENSE](../../LICENSE) for details

## 🔗 Links

- [GitHub Repository](https://github.com/Atman36/AI-Vibe-Prompts)
- [Issue Tracker](https://github.com/Atman36/AI-Vibe-Prompts/issues)
- [Discussions](https://github.com/Atman36/AI-Vibe-Prompts/discussions)
- [Claude Code Documentation](https://docs.claude.com/)

## 💡 Support

- **Issues**: [GitHub Issues](https://github.com/Atman36/AI-Vibe-Prompts/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Atman36/AI-Vibe-Prompts/discussions)
- **Email**: Create issue on GitHub

## 🌟 Star History

If you find this plugin useful, please star it on GitHub!

## 📊 Statistics

- **Agents**: 15
- **Skills**: 5 (auto-invoke enabled)
- **Lines of Code**: 2000+
- **Documentation**: 50+ pages
- **Coverage**: Core + Framework + Workflow

---

**Made with ❤️ by the AI-Vibe-Prompts Team**

**Transform your Claude Code experience today!**
