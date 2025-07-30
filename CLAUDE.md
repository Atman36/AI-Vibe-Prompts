# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# AI-Vibe-Prompts Project Context

## Project Overview
AI-Vibe-Prompts is a framework for autonomous AI-assisted development with a system of specialized agents designed to transform complex development tasks into simple high-level instructions. This is an agent-orchestration system where the `workflow-composer` acts as the main coordinator.

## Key Technologies & Dependencies  
- **Runtime**: Node.js 18+, TypeScript 5.5+, React 19, Next.js 15
- **Agent System**: Markdown files with YAML front-matter metadata
- **CLI Tool**: JavaScript (`scripts/avp-init.js`) with expansion pack support
- **Testing**: Vitest + Playwright (configured but tests not yet implemented)
- **Package Manager**: npm (no lock file present, uses package.json only)

## Build Commands
```bash
# Core commands
npm run init                    # Initialize project (runs scripts/avp-init.js)
npm test                        # Run tests (currently returns error - not implemented)
node scripts/avp-init.js        # Direct CLI access

# CLI commands (via avp-init.js)
node scripts/avp-init.js init [template]        # Initialize with template
node scripts/avp-init.js explain <agent>        # Show agent details
node scripts/avp-init.js agents-for <query>     # Find agents by capability
node scripts/avp-init.js status                 # Show project status
node scripts/avp-init.js validate               # Run quality validation
node scripts/avp-init.js docs-gen               # Generate documentation
```

## Project Architecture

### Agent System Architecture
The system uses a hierarchical agent delegation pattern:

1. **Workflow Composer** (`agents/helpers/workflow-composer.md`) - Main orchestrator
   - Discovers available agents dynamically by scanning `agents/` directory
   - Implements PLAN → ACT cycle with confidence scoring (75% threshold)
   - Manages multi-agent workflows with quality gates
   - Handles automatic fallbacks via `project-auditor`

2. **Core Agents** (`agents/core/`)
   - `architect.md` - System design and architectural decisions
   - `analyst.md` - Requirements analysis and problem breakdown
   - `developer.md` - Technical project manager that delegates to specialists:
     - `developer/frontend.md` - React 19/Next.js 15 specialist
     - `developer/backend.md` - API Routes/Prisma specialist  
     - `developer/testing.md` - Vitest/Playwright specialist

3. **Helper Agents** (`agents/helpers/`)
   - `codebase-analyzer.md` - Code analysis and complexity assessment
   - `debugger-assistant.md` - Scientific debugging methodology
   - `refactor-assistant.md` - Safe code refactoring
   - `quality-monitor.md` - Code quality tracking
   - `onboarder.md` - Project setup automation

### Tool-Based Execution
All agents use JSON-formatted tool calls as defined in `system/tool-calls.md`:
- Agents MUST respond with JSON objects containing `tool_name` and `parameters`
- No direct code execution - all actions via tool system
- Tools include: `file_read`, `file_write`, `shell_exec`, `message_user`, `codebase_search`

### Configuration System
- `core-config.yaml` - Central agent registry and configuration
- `system/` directory - Core system prompts and specifications
- Dynamic agent discovery - CLI scans `agents/` directory at runtime

## Agent Development Rules

### Required YAML Front-matter Structure
```yaml
---
name: Agent Name
description: Brief description
category: "core|helpers|design|specialists|testing|operations|marketing|product|project|strategy|coaching"
version: "X.Y.Z"
capabilities:
  - capability_1
  - capability_2
metrics:
  - metric_1
  - metric_2
---
```

### Agent File Organization
- `agents/[category]/[agent-name].md` - Agent definition files
- Categories: core, helpers, design, specialists, testing, operations, marketing, product, project, strategy, coaching
- Agent content sections: Role Definition, Core Philosophy, Implementation, Success Metrics

### Quality Requirements
- All agents must implement PLAN → ACT cycle
- Confidence scoring required (0-100 scale)
- Quality gates with automatic fallback to `project-auditor`
- No silent failures - always provide meaningful errors

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

## Common Issues & Troubleshooting
- Tests not implemented yet (`npm test` fails)
- Agent discovery relies on proper YAML front-matter formatting
- CLI requires Node.js 18+ for proper execution
- Quality gates may trigger frequent fallbacks during development