# State Alignment & Phase Management Module

## Core Philosophy: Controlled Agent Behavior

This module implements clear state boundaries and tool availability to prevent unpredictable AI actions and ensure consistent behavior across different workflow phases.

### Context Engineering Approach
- **Phase Boundaries**: Clear transitions between workflow stages
- **Tool Constraints**: Limit available actions to appropriate tools
- **State Validation**: Verify agent understanding of current context
- **Behavior Consistency**: Maintain predictable responses within phases

## State Management Architecture

### 1. Phase Definition Framework

```yaml
phase_config:
  current_phase: "{{current_phase}}"
  allowed_tools: {{available_tools}}
  objectives: {{objectives}}
  constraints: {{constraints}}
  transitions:
    next_phases: []
    completion_criteria: []
    rollback_conditions: []
```

### 2. Core Workflow Phases

**PLANNING PHASE**
```yaml
phase: "planning"
tools: ["decompose", "analyze", "design", "estimate"]
objectives:
  - Understand requirements and constraints
  - Break down complex tasks into manageable steps
  - Define architecture and technical approach
  - Identify risks and mitigation strategies
constraints:
  - No code generation or implementation
  - No file modifications or system changes
  - Focus on strategic planning over tactical execution
```

**IMPLEMENTATION PHASE**
```yaml
phase: "implementation" 
tools: ["code", "test", "debug", "refactor", "document"]
objectives:
  - Write production-ready code
  - Implement planned architecture
  - Ensure code quality and testing
  - Document implementation decisions
constraints:
  - Follow established architecture and patterns
  - No major design changes without planning review
  - Maintain code quality standards
```

**REVIEW PHASE**
```yaml
phase: "review"
tools: ["analyze", "audit", "optimize", "validate", "report"]
objectives:
  - Evaluate implementation quality
  - Identify optimization opportunities
  - Validate against requirements
  - Generate improvement recommendations
constraints:
  - No new feature implementation
  - Focus on analysis over modification
  - Maintain objectivity in assessment
```

### 3. State Alignment Protocol

```markdown
# CURRENT STATE VERIFICATION

## Phase Status
**Current Phase**: {{current_phase}}
**Phase Objectives**: {{phase_objectives}}
**Available Tools**: {{available_tools}}
**Completion Status**: {{completion_percentage}}%

## Behavioral Constraints
**Allowed Actions**:
{{#each allowed_actions}}
- ✅ {{action}}: {{description}}
{{/each}}

**Prohibited Actions**:
{{#each prohibited_actions}}
- ❌ {{action}}: {{reason}}
{{/each}}

## State Validation Checklist
- [ ] Current phase clearly understood
- [ ] Available tools match phase requirements
- [ ] Objectives align with user expectations
- [ ] Constraints are acknowledged and will be respected
- [ ] Transition criteria are defined
```

## Usage Instructions

### 1. Phase Initialization

```markdown
{{#invoke context/state-align.mdc 
  current_phase="planning"
  available_tools=["decompose", "analyze", "design"]
  objectives=["Break down authentication system", "Define security boundaries"]
  constraints=["No implementation", "Security-first approach"]
}}
```

### 2. State Transition Management

```markdown
# PHASE TRANSITION: Planning → Implementation

## Transition Criteria Met
- [ ] Architecture reviewed and approved
- [ ] Technical approach validated
- [ ] Resource requirements confirmed
- [ ] Risk mitigation strategies defined

## New Phase Configuration
**Phase**: implementation
**New Tools**: ["code", "test", "debug", "document"]  
**Updated Objectives**: ["Implement auth system", "Write comprehensive tests"]
**Additional Constraints**: ["Follow security patterns", "Maintain performance standards"]

{{#invoke context/state-align.mdc current_phase="implementation"}}
```

### 3. Constraint Validation

Before each action, verify:

```markdown
## Action Validation
**Proposed Action**: {{action_name}}
**Current Phase**: {{current_phase}}
**Tool Required**: {{required_tool}}

**Validation Result**:
{{#if tool_available}}
✅ **ALLOWED**: {{action_name}} is available in {{current_phase}} phase
{{else}}
❌ **BLOCKED**: {{action_name}} requires {{required_tool}} which is not available in {{current_phase}}
**Alternative**: {{suggested_alternative}}
{{/if}}
```

## Integration Patterns

### With Task Decomposition
```markdown
# Planning Phase Integration
{{#invoke context/state-align.mdc current_phase="planning"}}
{{#invoke context/task-decompose.mdc goal="Build user authentication"}}

# Automatically transitions to implementation when planning complete
```

### With RAG Module
```markdown
# Information Gathering Phase
{{#invoke context/state-align.mdc current_phase="research"}}
{{#invoke context/rag-template.mdc query="React 19 security patterns"}}

# Knowledge gathering before moving to planning/implementation
```

### With History Compression
```markdown
# Review Phase with Memory Management
{{#invoke context/state-align.mdc current_phase="review"}}
{{#invoke context/history-summarizer.mdc}}

# Compress history while maintaining review context
```

## Advanced State Management

### Multi-Agent Coordination
```yaml
agent_coordination:
  primary_agent:
    phase: "implementation"
    tools: ["code", "test"]
    focus: "Feature development"
  
  review_agent:
    phase: "review" 
    tools: ["analyze", "audit"]
    focus: "Quality assurance"
  
  coordination_rules:
    - Primary completes implementation before review begins
    - Review agent cannot modify code, only provide feedback
    - Feedback cycles require explicit phase transitions
```

### Conditional Phase Logic
```markdown
# Dynamic Phase Selection
{{#if complexity_high}}
  {{#invoke context/state-align.mdc current_phase="detailed_planning"}}
{{else}}
  {{#invoke context/state-align.mdc current_phase="rapid_prototyping"}}
{{/if}}
```

## Error Prevention & Recovery

### Invalid Action Handling
```markdown
## INVALID ACTION DETECTED

**Action Attempted**: {{invalid_action}}
**Current Phase**: {{current_phase}}
**Problem**: Action not available in current phase

**Recovery Options**:
1. **Transition to appropriate phase**: {{suggested_phase}}
2. **Use alternative tool**: {{alternative_tool}}
3. **Modify current approach**: {{modified_approach}}

**Recommended**: {{best_option}}
```

### Phase Transition Failures
```markdown
## TRANSITION FAILURE

**Attempted Transition**: {{from_phase}} → {{to_phase}}
**Failure Reason**: {{failure_reason}}
**Missing Criteria**: {{missing_requirements}}

**Required Actions**:
{{#each required_actions}}
- [ ] {{action}}
{{/each}}

**Retry Transition**: Once requirements are met
```

## State Monitoring & Reporting

### Phase Progress Tracking
```markdown
# PHASE PROGRESS REPORT

**Phase**: {{current_phase}}
**Duration**: {{phase_duration}}
**Progress**: {{completion_percentage}}%

**Completed Objectives**:
{{#each completed_objectives}}
- ✅ {{objective}}
{{/each}}

**Remaining Objectives**:
{{#each remaining_objectives}}
- ⏳ {{objective}} ({{estimated_completion}})
{{/each}}

**Next Phase Readiness**: {{readiness_percentage}}%
```

### Tool Usage Analytics
```markdown
# TOOL UTILIZATION REPORT

**Phase**: {{current_phase}}
**Available Tools**: {{tool_count}}
**Tools Used**: {{used_tools}}
**Usage Efficiency**: {{efficiency_score}}%

**Most Used**: {{most_used_tool}} ({{usage_count}} times)
**Least Used**: {{least_used_tool}} ({{usage_count}} times)
**Unused Tools**: {{unused_tools}}

**Optimization Opportunities**: {{optimization_suggestions}}
```

This module ensures AI agents operate within well-defined boundaries while maintaining flexibility for complex, multi-phase workflows.
