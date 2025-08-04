# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# AI-Vibe-Prompts Project Context

## Project Overview
AI-Vibe-Prompts is a framework for autonomous AI-assisted development with a system of specialized Claude Code subagents designed to transform complex development tasks into simple high-level instructions. The system now uses Claude Code's native subagent capabilities for seamless agent selection and coordination.

## Key Technologies & Dependencies  
- **Runtime**: Node.js 18+, TypeScript 5.5+, React 19, Next.js 15
- **Agent System**: Claude Code native subagents in `.claude/agents/`
- **Testing**: Vitest + Playwright (configured but tests not yet implemented)
- **Package Manager**: npm (no lock file present, uses package.json only)

## Build Commands
```bash
# Core commands
npm test                        # Run tests (currently returns error - not implemented)

# Claude Code Subagent Usage
@architect                      # Call architect agent explicitly
@developer                      # Call developer agent explicitly
@workflow-composer             # Call workflow composer for complex planning
# Or use natural language - Claude Code will auto-select appropriate agents
```

## Project Architecture

### Claude Code Subagent System
The system uses Claude Code's native subagent capabilities for automatic agent selection and coordination:

**Available Subagents** (stored in `.claude/agents/`):

1. **Core Agents**
   - `architect.md` - System design and architectural decisions
   - `developer.md` - Full-stack development and implementation  
   - `analyst.md` - Project analysis and quality assurance
   - `workflow-composer.md` - Complex task planning and breakdown

2. **Helper Agents**
   - `codebase-analyzer.md` - Code analysis and complexity assessment
   - `debugger-assistant.md` - Scientific debugging methodology
   - `refactor-assistant.md` - Safe code refactoring
   - `quality-monitor.md` - Code quality tracking

3. **Specialist Agents**
   - `nextjs-optimizer.md` - Next.js 15 performance optimization
   - `react-optimizer.md` - React 19 optimization patterns
   - `vue-optimizer.md` - Vue.js 3+ performance optimization

### Tool-Based Execution
All agents use Claude Code's native tools automatically:
- **File Operations**: `Read`, `Write`, `Edit`, `MultiEdit`
- **Code Analysis**: `Grep`, `Glob`, `LS`
- **System Operations**: `Bash`
- **Web Operations**: `WebSearch`, `WebFetch`
- No manual tool configuration required - Claude Code handles tool selection

### Configuration System
- `.claude/agents/` - Claude Code subagent directory (auto-discovered)
- `system/` directory - Core system prompts and specifications
- Dynamic agent discovery - Claude Code scans `.claude/agents/` at runtime
- Native tool mapping via Claude Code's built-in capabilities

## Claude Code Subagent Usage

### Agent Calling Syntax
- **Explicit calling**: `@agent-name please help with [task]`
- **Auto-selection**: Use natural language - Claude Code automatically selects appropriate agents
- **Examples**:
  - `@architect design the authentication system`
  - `@developer implement the user dashboard`
  - `@react-optimizer optimize this component performance`
  - `Can you help debug this API issue?` (auto-selects @debugger-assistant)

### Claude Code Subagent Format
```yaml
---
name: agent-name
description: Clear description of when to use this agent (used for auto-selection)
tools: read, write, bash, grep  # Optional, inherits all if not specified
---
```

### Agent File Organization
- `.claude/agents/[agent-name].md` - Claude Code subagent files
- Auto-discovery by Claude Code - no manual configuration needed
- Agent content sections: Role Definition, Core Mission, Workflow, Specializations

### Quality Principles
- All agents implement PLAN → ACT cycle methodology
- Focus on single-agent execution (Claude Code handles coordination)
- Clear, actionable descriptions for automatic agent selection
- Native tool integration with Claude Code's built-in capabilities

## Development Workflow

### Primary Development Pattern
1. User provides high-level goal to `workflow-composer`
2. Workflow Composer enters PLAN_MODE:
   - Discovers available agents via directory scan
   - Selects optimal agents based on capabilities and confidence
   - Creates structured workflow with quality gates
3. User approves plan
4. Workflow Composer enters ACT_MODE:
   - Executes agents sequentially with confidence monitoring
   - Triggers fallbacks if confidence < 75%
   - Validates quality gates throughout

### Code Style & Standards
- ES modules (import/export) preferred
- TypeScript strict mode
- Markdown for agents with mandatory YAML front-matter
- camelCase for variables, kebab-case for file names
- No hardcoded agent references - use dynamic discovery

## Important Implementation Details

### Confidence-Based Quality Control
- Every agent output requires confidence score (0-100)
- Automatic fallback to `project-auditor` if confidence < 75%
- Multi-dimensional quality assessment (technical accuracy, completeness, security, performance)

### Framework-Specific Optimization
- CLI detects project technology from package.json
- Prefers specialist agents (e.g., `nextjs-optimizer`) over generalists
- Framework detection supports Next.js, React, Vue, Angular, Svelte

### Security & Safety
- No shell command execution without validation
- File path validation required
- Prefer `file_apply_patch` over `file_write` for safety
- All tool calls must be logged

## Templates & Project Initialization
Available templates:
- `shadcn-vite` - Lightweight SPA with shadcn/ui components
- `next-enterprise` - Full-stack enterprise application  
- `t3-stack` - Full-stack TypeScript with tRPC

## Key Files to Understand
- `scripts/avp-init.js` - Main CLI implementation with agent discovery
- `core-config.yaml` - Agent registry and metadata
- `agents/helpers/workflow-composer.md` - Main orchestrator logic  
- `system/tool-calls.md` - Tool execution specification
- `README.md` - User-facing documentation with usage examples

## Claude Code Compatibility

### Tool Mapping for Claude Code
The framework has been updated for full Claude Code compatibility:

**File Operations:**
- `file_read` → `Read` - Read file contents
- `file_write` → `Write` - Create or overwrite files  
- `file_apply_patch` → `Edit/MultiEdit` - Modify existing files

**Code Analysis:**
- `codebase_search` → `Grep` - Search for patterns in code
- `list_files` → `Glob` - Find files by pattern
- `get_directory` → `LS` - List directory contents

**System Operations:**
- `shell_exec` → `Bash` - Execute shell commands
- `search_web` → `WebSearch` - Search the internet

**Removed Features (No Claude Code equivalent):**
- `invoke_agent` - Claude Code operates as single agent
- `message_notify_user/message_ask_user` - Use direct responses

### Agent Compatibility Status
- ✅ **Core Agents**: Updated for Claude Code (architect, developer, analyst)
- ✅ **Workflow Composer**: Redesigned for single-agent execution model
- ⚠️ **Helper Agents**: Most compatible, some need tool mapping updates
- ⚠️ **Specialist Agents**: Compatible with tool mapping

### Usage with Claude Code
1. Use agents as planning and guidance documents
2. Claude Code will automatically use native tools based on agent instructions
3. Focus on agent's planning methodology rather than specific tool calls
4. Confidence scoring and quality gates work seamlessly with Claude Code

## Common Issues & Troubleshooting
- Tests not implemented yet (`npm test` fails)
- Agent discovery relies on proper YAML front-matter formatting
- CLI requires Node.js 18+ for proper execution
- Quality gates may trigger frequent fallbacks during development
- Some agents reference custom tools - refer to `tools/claude-code-tools.json` for mappings