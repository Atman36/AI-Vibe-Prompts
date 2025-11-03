# Plugin System Guide

## Overview

The AI-Vibe-Prompts Plugin System packages the entire framework as a distributable Claude Code v2.x plugin, making it easy to install, share, and manage across projects.

## What is a Plugin?

A **Plugin** in Claude Code v2.x is a complete extension package that can bundle:
- **Agents** - Specialized AI assistants
- **Skills** - Reusable expertise packages
- **Commands** - Custom slash commands
- **Hooks** - Lifecycle event handlers
- **Configuration** - Settings and metadata

## AI-Vibe-Prompts Plugin Structure

```
.claude/plugins/ai-vibe-prompts/
├── plugin.json              # Plugin manifest
├── README.md                # Plugin documentation
└── (links to project files)
```

## Plugin Manifest (plugin.json)

### Basic Metadata
```json
{
  "name": "ai-vibe-prompts",
  "displayName": "AI-Vibe-Prompts",
  "version": "3.0.0",
  "description": "Autonomous AI-Agent Framework for Modern Web Development",
  "author": "AI-Vibe-Prompts Contributors",
  "license": "MIT"
}
```

### Claude Code Compatibility
```json
{
  "claudeCode": {
    "version": "2.x",
    "compatibleWith": ["2.0.12", "2.0.28"]
  }
}
```

### Components
```json
{
  "components": {
    "agents": [
      "../../agents/architect.md",
      "../../agents/developer.md",
      ...
    ],
    "skills": [
      "../../skills/core/codebase-analysis/SKILL.md",
      "../../skills/workflow/git-workflow/SKILL.md",
      ...
    ]
  }
}
```

### Features List
```json
{
  "features": [
    "15 specialized AI agents",
    "5 Claude Skills with progressive disclosure",
    "GitFlow and Conventional Commits support",
    "Vitest and Playwright testing strategies",
    ...
  ]
}
```

## Installation Methods

### Method 1: Clone Repository
```bash
git clone https://github.com/Atman36/AI-Vibe-Prompts.git
cd AI-Vibe-Prompts
npm install
node scripts/avp-init.js init
```

### Method 2: Plugin Directory
```bash
# Clone into Claude Code plugins directory
git clone https://github.com/Atman36/AI-Vibe-Prompts.git ~/.claude/plugins/ai-vibe-prompts
```

### Method 3: Symbolic Link
```bash
# Link existing project
ln -s /path/to/AI-Vibe-Prompts ~/.claude/plugins/ai-vibe-prompts
```

## Verification

### Check Plugin Installation
```bash
node scripts/avp-init.js system:status
```

Expected output:
```
🔍 AI-Vibe-Prompts System Status

Environment: claude-code
Root Directory: /Users/.../AI-Vibe-Prompts

📊 Component Status:
✅ Claude Code agents directory
✅ Claude Code skills directory
✅ Core configuration
✅ Tools configuration
✅ Project documentation

🤖 Agents:
📁 Found 15 agents

🎯 Skills:
🎯 Found 5 skills across 3 categories
  Total: 5 skills
  Auto-invoke: 5/5
```

## Plugin Components

### 1. Agents (15 Total)

**Core Team**:
- analyst.md
- architect.md
- developer.md
- workflow-composer.md

**Helpers**:
- codebase-analyzer.md
- debugger-assistant.md
- quality-monitor.md
- refactor-assistant.md

**Specialists**:
- nextjs-optimizer.md
- react-optimizer.md
- vue-optimizer.md

**Design & Strategy**:
- designer.md
- product-strategist.md
- performance-tester.md
- deployment-specialist.md

### 2. Skills (5 Total)

**Core Skills**:
- codebase-analysis (v1.0.0)
- quality-gates (v1.0.0)

**Framework-Specific**:
- nextjs-optimization (v1.0.0)

**Workflow Skills**:
- git-workflow (v1.0.0)
- testing-strategy (v1.0.0)

### 3. Documentation

- README.md - Project overview
- CLAUDE.md - Integration guide
- docs/skills-system-guide.md - Skills development
- docs/plugin-system-guide.md - This file
- docs/CHANGELOG-v3.0.md - Version history

### 4. CLI Scripts

```bash
node scripts/avp-init.js init           # Initialize
node scripts/avp-init.js discover       # List agents
node scripts/avp-init.js skills:list    # List skills
node scripts/avp-init.js system:status  # System check
```

## Plugin Configuration

### core-config.yaml Integration
```yaml
claude_code:
  agents_directory: ".claude/agents/"
  skills_directory: ".claude/skills/"
  plugins_directory: ".claude/plugins/"
  plugin:
    name: "ai-vibe-prompts"
    version: "3.0.0"
    manifest: ".claude/plugins/ai-vibe-prompts/plugin.json"
```

## Publishing to Marketplace

### Preparation Checklist
- [ ] All agents have valid YAML frontmatter
- [ ] All skills follow SKILL.md format
- [ ] plugin.json is complete and valid
- [ ] README.md is comprehensive
- [ ] Version number is updated
- [ ] CHANGELOG is current
- [ ] Tests pass (if applicable)
- [ ] Documentation is complete

### Submission Process
1. **Fork marketplace repository**
2. **Add plugin entry** to marketplace index
3. **Submit pull request**
4. **Wait for review**
5. **Address feedback**
6. **Plugin goes live**

## Version Management

### Semantic Versioning
```
MAJOR.MINOR.PATCH

3.0.0
│ │ │
│ │ └─ Patch: Bug fixes
│ └─── Minor: New features (backwards compatible)
└───── Major: Breaking changes
```

### Update Process
1. Update version in `plugin.json`
2. Update version in `package.json`
3. Update version in `core-config.yaml`
4. Add entry to CHANGELOG
5. Git tag the release
6. Push to repository

### Changelog Format
```markdown
## [3.0.0] - 2025-01-03

### Added
- Claude Skills system with progressive disclosure
- Git workflow skill
- Testing strategy skill
- Plugin system

### Changed
- Migrated to Claude Code v2.x architecture
- Enhanced CLI with skills commands

### Fixed
- None

### Breaking Changes
- None (fully backwards compatible)
```

## Plugin Dependencies

### Required
- Node.js >= 18.0.0
- Claude Code >= 2.0.12
- npm >= 8.0.0

### Optional
- Git (for git-workflow skill)
- Vitest (for testing-strategy skill)
- Playwright (for E2E testing)

## Benefits of Plugin System

### For Users
✅ **Easy Installation** - Clone and go
✅ **Automatic Updates** - Git pull to update
✅ **Complete Package** - All components together
✅ **Verified** - Tested and documented

### For Developers
✅ **Standardized Structure** - Clear organization
✅ **Version Control** - Track changes easily
✅ **Distribution** - Share via marketplace
✅ **Collaboration** - Fork and customize

### For Organizations
✅ **Centralized Management** - One plugin for all
✅ **Consistency** - Same setup across teams
✅ **Customization** - Fork for company needs
✅ **Compliance** - Control what's installed

## Troubleshooting

### Plugin Not Found
```bash
# Check plugin directory exists
ls -la .claude/plugins/ai-vibe-prompts

# Verify plugin.json is valid
cat .claude/plugins/ai-vibe-prompts/plugin.json | jq .
```

### Skills Not Loading
```bash
# Check skills directory
ls -la .claude/skills/

# Verify core-config.yaml
cat core-config.yaml | grep -A 20 "skills:"

# Run skills discovery
node scripts/avp-init.js skills:list
```

### Agents Not Available
```bash
# Check agents directory
ls -la .claude/agents/

# Verify frontmatter
head -n 10 .claude/agents/architect.md

# Run agent discovery
node scripts/avp-init.js discover
```

## Advanced: Creating Custom Plugins

### 1. Fork AI-Vibe-Prompts
```bash
git clone https://github.com/YOUR_USERNAME/AI-Vibe-Prompts.git
cd AI-Vibe-Prompts
```

### 2. Customize Components
- Add/modify agents in `.claude/agents/`
- Add/modify skills in `.claude/skills/`
- Update `plugin.json` metadata

### 3. Update Configuration
```json
{
  "name": "my-custom-plugin",
  "displayName": "My Custom Plugin",
  "version": "1.0.0",
  "description": "Customized AI-Vibe-Prompts",
  "author": "Your Name"
}
```

### 4. Test Locally
```bash
npm install
node scripts/avp-init.js init
node scripts/avp-init.js system:status
```

### 5. Publish
- Push to GitHub
- Submit to marketplace
- Share with team

## Best Practices

### Plugin Development
1. **Version Everything** - Use semantic versioning
2. **Document Changes** - Maintain CHANGELOG
3. **Test Thoroughly** - Verify all components
4. **Keep It Simple** - Don't over-complicate
5. **Be Consistent** - Follow conventions

### Plugin Distribution
1. **Clear README** - Explain what it does
2. **Installation Guide** - Step-by-step setup
3. **Usage Examples** - Show it in action
4. **Support Channels** - Where to get help
5. **License** - State the terms

### Plugin Maintenance
1. **Regular Updates** - Keep dependencies current
2. **Bug Fixes** - Address issues promptly
3. **Feature Requests** - Listen to users
4. **Breaking Changes** - Communicate clearly
5. **Deprecation** - Phase out gradually

## Resources

- [Claude Code Plugin Documentation](https://docs.claude.com/plugins)
- [AI-Vibe-Prompts Repository](https://github.com/Atman36/AI-Vibe-Prompts)
- [Skills System Guide](./skills-system-guide.md)
- [CHANGELOG](./CHANGELOG-v3.0.md)

## Contributing to Plugin

See [CONTRIBUTING.md](../CONTRIBUTING.md) for:
- Code of Conduct
- Development setup
- Pull request process
- Coding standards

---

**Last Updated**: 2025-01-03
**Plugin Version**: 3.0.0
**Authors**: AI-Vibe-Prompts Team
