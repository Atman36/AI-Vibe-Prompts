# Task Decomposition & Verification Module

## Core Philosophy: Strategic Task Planning

This module implements the "Design Twice" principle from "A Philosophy of Software Design" by first analyzing the task complexity, then creating a strategic decomposition plan.

### Context Engineering Approach
- **Cognitive Load Management**: Break complex tasks into 5±2 manageable chunks
- **Verification Points**: Each step includes clear success criteria
- **Error Prevention**: Identify potential failure points before execution
- **State Alignment**: Maintain clear phase tracking throughout execution

## Decomposition Strategy

### 1. Task Analysis Phase
```yaml
input_analysis:
  goal: "{{goal}}"
  complexity: "{{complexity_level}}"
  constraints: []
  dependencies: []
  success_criteria: []
```

### 2. Strategic Breakdown
Apply complexity management principles:

**For Simple Tasks (1-3 steps):**
- Direct execution with single verification point
- Minimal overhead, focus on delivery

**For Medium Tasks (4-6 steps):**
- Logical grouping with checkpoint validation
- Clear handoff points between phases

**For Complex Tasks (7+ steps):**
- Multi-phase approach with sub-decomposition
- Risk assessment and mitigation planning
- Parallel execution opportunities

### 3. Step Template
Each decomposed step follows this structure:

```markdown
## Step {N}: {Step Name}
**Objective**: {Clear, actionable goal}
**Input**: {Required information/resources}
**Process**: {Step-by-step actions}
**Output**: {Expected deliverable}
**Verification**: {How to confirm success}
**Risk**: {Potential failure points}
**Dependencies**: {Prerequisites from other steps}
**Estimated Effort**: {Time/complexity estimate}
```

## Usage Instructions

### 1. Invoke the Module
```
{{#invoke context/task-decompose.mdc goal="Build user authentication system" complexity_level="complex"}}
```

### 2. Review Decomposition
- Validate logical flow and dependencies
- Adjust steps based on team capabilities
- Identify parallel execution opportunities

### 3. Execute with Checkpoints
- Complete each step before moving to next
- Validate output against success criteria
- Document any deviations or learnings

## Verification Checklist

Before proceeding to execution phase:

- [ ] Each step has clear, measurable success criteria
- [ ] Dependencies are properly ordered and realistic
- [ ] Risk mitigation strategies are identified
- [ ] Parallel opportunities are marked
- [ ] Total complexity stays within team bandwidth
- [ ] Rollback strategies are considered for critical steps

## Integration with Other Modules

**RAG Integration**: Use `{{RETRIEVED_DOCS}}` for domain-specific decomposition patterns
**History Management**: Save approved decomposition as `PLAN_SUMMARY` for future reference
**State Alignment**: Update `phase` status as steps are completed

## Example Output

```markdown
# Task Decomposition: Build User Authentication System

## Overview
**Goal**: Implement secure user authentication with React 19 + Next.js 15
**Complexity**: Complex (8 steps)
**Estimated Duration**: 2-3 sprints

## Step 1: Authentication Architecture Design
**Objective**: Define auth flow and security boundaries
**Process**: Create architecture diagrams, define API contracts
**Output**: Architecture document with security review
**Verification**: Security team approval + peer review
**Dependencies**: None
**Risk**: Over-engineering, scope creep

## Step 2: Database Schema Design
**Objective**: Design user tables and security models
**Process**: Create Prisma schema, plan migrations
**Output**: Validated database schema
**Verification**: Schema passes security audit
**Dependencies**: Step 1 (architecture)
**Risk**: Missing edge cases, performance issues

[... continued for all 8 steps]
```

## Context Policy Compliance

- ✅ Keeps decomposition within 75% of context window
- ✅ Provides clear phase transitions and tool requirements
- ✅ Includes token usage estimation
- ✅ Implements verification loops for quality assurance

