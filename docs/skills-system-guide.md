# Claude Skills System Guide

## Overview

Claude Skills are reusable "expertise packages" introduced in Claude Code v2.x that use **Progressive Disclosure** for token-efficient context management. Skills transform general-purpose agents into specialized experts by injecting domain-specific instructions, workflows, and best practices.

## Key Concepts

### What are Skills?

Skills are modular units of expertise that:
- Contain specialized knowledge and workflows
- Auto-invoke based on contextual relevance
- Load progressively (metadata → full content → deep resources)
- Are portable across Claude ecosystem (Code, API, claude.ai)
- Can include scripts and supplementary resources

### Skills vs Subagents vs Plugins

| Feature | Skills | Subagents | Plugins |
|---------|--------|-----------|---------|
| **Purpose** | Reusable expertise | Specialized execution | Complete extensions |
| **Location** | `.claude/skills/` | `.claude/agents/` | `.claude/plugins/` |
| **Context** | Modifies agent behavior | Isolated context | Bundles multiple components |
| **Invocation** | Auto-invoked by Claude | Delegated execution | User-installed |
| **Token Usage** | Progressive disclosure | Separate context window | Varies |
| **Example** | `codebase-analysis` | `architect`, `developer` | `github-integration` |

## Progressive Disclosure Mechanism

Skills use a three-level loading strategy to minimize token usage:

### Level 1: Metadata (Always Loaded)
```yaml
---
name: codebase-analysis
description: Systematically analyze codebase structure and complexity
---
```
Only the `name` and `description` are loaded into Claude's initial system prompt.

### Level 2: Full Content (Loaded When Relevant)
When Claude determines a skill is relevant, it reads the complete `SKILL.md` file with all instructions and methodologies.

### Level 3: Deep Resources (On-Demand)
If needed, Claude can navigate to additional resources:
- Scripts (Python, Bash, etc.)
- Templates
- Configuration files
- Reference documents

**Result**: Unbounded expertise library with minimal token overhead.

## Skill Structure

### Directory Layout
```
.claude/skills/
├── core/                          # Core utilities
│   ├── codebase-analysis/
│   │   ├── SKILL.md              # Required: Metadata + Instructions
│   │   ├── scripts/              # Optional: Executable scripts
│   │   │   └── analyze.py
│   │   └── resources/            # Optional: Additional resources
│   │       └── metrics.json
│   └── quality-gates/
│       └── SKILL.md
├── framework-specific/            # Framework optimizations
│   └── nextjs-optimization/
│       └── SKILL.md
└── workflow/                      # Workflow automations
    ├── git-workflow/
    └── testing-strategy/
```

### SKILL.md Format

```markdown
---
name: skill-name
description: Clear description of when to use this skill
version: 1.0.0
author: Your Name
tags: [tag1, tag2, tag3]
auto_invoke: true
framework: nextjs          # Optional: auto-invoke for specific framework
---

# Skill Title

## Objective
What this skill accomplishes

## When to Use This Skill
Clear triggers for auto-invocation:
- User mentions "keyword"
- Specific context detected
- Before/after certain actions

## Methodology
Step-by-step process with:
1. **Phase Name**: What happens
   - Tool: Which Claude tools to use
   - Actions: Specific steps

## Output Format
Expected format of results

## Best Practices
Key principles to follow

## Integration with Other Skills
How this skill works with others

## Version History
- **1.0.0** (Date): Initial release
```

## Creating Your First Skill

### Step 1: Identify the Need
Ask yourself:
- What task do I repeat frequently?
- What expertise could be reused?
- What workflow requires specific steps?

### Step 2: Create the Directory
```bash
mkdir -p .claude/skills/category/skill-name
```

### Step 3: Write SKILL.md
```bash
touch .claude/skills/category/skill-name/SKILL.md
```

Follow the format above with:
- Clear metadata (name, description, version)
- Specific invocation triggers
- Detailed methodology
- Tool usage patterns
- Expected output format

### Step 4: Test the Skill
1. Register in `core-config.yaml`
2. Run `node scripts/avp-init.js skills:list` to verify
3. Test auto-invocation in Claude Code
4. Iterate based on behavior

### Step 5: Refine with Self-Reflection
If Claude goes off-track:
1. Ask Claude: "Why did you use/not use the skill?"
2. Analyze the description and triggers
3. Refine the instructions
4. Test again

## Available Skills

### Core Skills

#### codebase-analysis
- **Version**: 1.0.0
- **Description**: Systematic codebase structure and complexity analysis
- **Auto-invoke**: Yes
- **Tags**: analysis, code-quality, architecture
- **Use Cases**:
  - Starting work on new project
  - Planning refactoring
  - Onboarding developers
  - Understanding project organization

#### quality-gates
- **Version**: 1.0.0
- **Description**: Comprehensive quality checks (linting, tests, security)
- **Auto-invoke**: Yes
- **Tags**: quality, testing, linting, security
- **Use Cases**:
  - Before commits
  - Pre-deployment
  - After refactoring
  - CI/CD integration

### Framework-Specific Skills

#### nextjs-optimization
- **Version**: 1.0.0
- **Description**: Next.js 15 performance and Core Web Vitals optimization
- **Framework**: Next.js
- **Auto-invoke**: Yes (when Next.js detected)
- **Tags**: nextjs, performance, optimization
- **Use Cases**:
  - Optimizing page load times
  - Improving Core Web Vitals
  - Production deployment prep
  - Performance debugging

## CLI Commands

### List All Skills
```bash
node scripts/avp-init.js skills:list
```
Shows all skills organized by category with descriptions and metadata.

### Show Skill Details
```bash
node scripts/avp-init.js skills:info codebase-analysis
```
Displays full skill content including methodology and best practices.

### System Status
```bash
node scripts/avp-init.js system:status
```
Shows overall system health including skill availability.

## Skill Development Best Practices

### 1. Clear Triggers
Write descriptions that clearly indicate when to auto-invoke:
```yaml
# Good
description: Analyze codebase structure when user asks to "analyze", "review", or "understand" the code

# Bad
description: Helps with code
```

### 2. Tool Specification
Explicitly mention which Claude tools to use:
- **Read**: For reading files
- **Grep**: For searching patterns
- **Glob**: For finding files
- **Bash**: For executing commands
- **Edit**: For modifying files

### 3. Progressive Detail
Structure instructions from high-level to detailed:
1. Overview of approach
2. Specific phases
3. Detailed steps
4. Tool commands

### 4. Output Consistency
Define clear output formats using markdown templates:
```markdown
## Output Format
```markdown
# Analysis Report
## Summary
...
## Details
...
\```
```

### 5. Error Handling
Include fallback strategies:
```markdown
## Error Handling
- If X fails: Try Y
- If no Z found: Suggest installation
- On timeout: Switch to partial analysis
```

### 6. Integration Points
Document how skills work together:
```markdown
## Integration with Other Skills
- Use `codebase-analysis` first
- Then apply framework-specific optimization
- Finally run `quality-gates`
```

## Advanced Patterns

### Conditional Invocation
```yaml
---
name: nextjs-optimization
framework: nextjs
auto_invoke: true
conditions:
  - package_dependency: "next"
  - file_exists: "next.config.js"
---
```

### Skill Composition
Skills can reference other skills:
```markdown
## Workflow
1. **Analyze First**: Invoke `codebase-analysis` skill
2. **Apply Optimization**: Use framework-specific patterns
3. **Validate**: Trigger `quality-gates` skill
```

### Resource Management
For complex skills with large resources:
```
skill-name/
├── SKILL.md
├── scripts/
│   └── heavy_analysis.py
└── resources/
    ├── templates/
    │   └── report.md
    └── data/
        └── benchmarks.json
```

Reference in SKILL.md:
```markdown
For detailed analysis, read `scripts/heavy_analysis.py` and execute with project path.
```

## Troubleshooting

### Skill Not Auto-Invoking
1. Check description clarity
2. Verify `auto_invoke: true` in metadata
3. Test with explicit keywords
4. Check core-config.yaml registration

### Skill Going Off-Track
1. Use self-reflection: "Why did you choose this approach?"
2. Refine methodology section
3. Add more specific constraints
4. Include examples of expected behavior

### Performance Issues
1. Break large skills into smaller focused skills
2. Use progressive disclosure properly
3. Avoid loading all resources upfront
4. Reference external resources only when needed

### Token Limit Exceeded
1. Split skill into phases
2. Move detailed content to separate resources
3. Use more concise language
4. Reference documentation URLs instead of inline

## Migration from Agents to Skills

### When to Migrate
Move to skills if your agent:
- Performs a repeatable task
- Has no state management needs
- Can be triggered by keywords
- Provides specialized expertise
- Doesn't need isolated context

### Migration Process
1. Extract the core methodology from agent
2. Create SKILL.md with clear triggers
3. Test auto-invocation
4. Update agent to reference skill
5. Remove duplicated code from agent

### Example Migration
**Before** (Agent):
```markdown
---
name: codebase-analyzer
---
# Codebase Analyzer Agent
[500 lines of analysis instructions]
```

**After** (Skill + Simplified Agent):
```markdown
# .claude/skills/core/codebase-analysis/SKILL.md
[Analysis methodology]

# .claude/agents/codebase-analyzer.md
Use the `codebase-analysis` skill for systematic code analysis.
Apply project-specific context and report findings.
```

## Future Roadmap

### Planned Skills
- `git-workflow` - Git commit, branch, PR best practices
- `testing-strategy` - Vitest + Playwright setup and patterns
- `react-patterns` - React 19 best practices
- `typescript-strict` - TypeScript strict mode guidance
- `refactoring-safe` - Safe refactoring methodology
- `debugging-systematic` - Scientific debugging approach

### Planned Features
- Skill marketplace integration
- Version management and updates
- Skill dependencies
- Performance analytics
- A/B testing for skill effectiveness

## Contributing Skills

### Submission Guidelines
1. Follow the SKILL.md format
2. Include clear metadata
3. Provide examples
4. Test thoroughly
5. Document integration points
6. Submit PR to repository

### Quality Standards
- Clear, actionable instructions
- Specific tool usage
- Defined output format
- Error handling
- Integration documentation
- Version history

## Resources

- [Claude Code v2 Documentation](https://docs.claude.com/)
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [AI-Vibe-Prompts Repository](https://github.com/Atman36/AI-Vibe-Prompts)
- [Community Skills Marketplace](https://github.com/jeremylongshore/claude-code-plugins-plus)

## Appendix: Skill Template

```markdown
---
name: your-skill-name
description: When to use this skill - be specific and clear
version: 1.0.0
author: Your Name
tags: [category1, category2, category3]
auto_invoke: true
---

# Skill Title

## Objective
What this skill accomplishes in 1-2 sentences.

## When to Use This Skill
Auto-invoke when:
- Specific trigger 1
- Specific trigger 2
- Specific context

## Methodology

### Phase 1: Discovery
**Goal**: What you're trying to learn

**Tools**: Grep, Glob, Read

**Process**:
1. Step 1
2. Step 2
3. Step 3

### Phase 2: Analysis
**Goal**: What you're trying to understand

**Tools**: Read, Bash

**Process**:
1. Step 1
2. Step 2

## Output Format
```markdown
# Your Report Title
## Section 1
...
\```

## Best Practices
1. Practice 1
2. Practice 2

## Integration with Other Skills
- Works with: skill-name
- Use before: skill-name
- Use after: skill-name

## Error Handling
- If X fails: Do Y
- On timeout: Try Z

## Version History
- **1.0.0** (YYYY-MM-DD): Initial release
```

---

**Last Updated**: 2025-01-03
**Version**: 1.0.0
**Authors**: AI-Vibe-Prompts Team
