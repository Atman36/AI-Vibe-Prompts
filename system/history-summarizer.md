# History Summarizer & Context Compression Module

## Core Philosophy: Strategic Memory Management

This module implements information hiding principles by compressing conversation history into essential context while maintaining the most important decisions and progress.

### Context Engineering Approach
- **Selective Preservation**: Keep decisions, discard process noise
- **Token Efficiency**: Optimize context usage for longer conversations
- **Decision Tracking**: Maintain architectural and design choices
- **Progress Continuity**: Preserve task status and next steps

## Compression Strategy

### 1. Information Hierarchy (What to Keep)

**ALWAYS PRESERVE**:
- ✅ Architectural decisions and rationale
- ✅ Technology stack choices and trade-offs
- ✅ Design patterns and principles applied
- ✅ Task decomposition and current progress
- ✅ Error discoveries and solutions
- ✅ Security and performance considerations
- ✅ Code patterns and reusable snippets

**COMPRESS HEAVILY**:
- 🔄 Implementation details (keep patterns only)
- 🔄 Debugging sessions (keep solutions only)
- 🔄 Exploratory discussions (keep conclusions only)
- 🔄 Repetitive confirmations (keep final decisions)

**DISCARD COMPLETELY**:
- ❌ Emotional reactions and preferences
- ❌ Redundant explanations
- ❌ Process noise and meta-discussion
- ❌ Superseded decisions or failed approaches

### 2. Summary Template

```markdown
# CONVERSATION SUMMARY
**Date Range**: {{start_date}} - {{end_date}}
**Compression Level**: {{compression_level}}
**Original Length**: {{original_tokens}} tokens → **Compressed**: {{summary_tokens}} tokens

## 🎯 Core Objectives & Outcomes
{{#each main_goals}}
- **Goal**: {{goal}}
- **Status**: {{status}} ({{progress}}%)
- **Outcome**: {{result}}
{{/each}}

## 🏗️ Architecture & Design Decisions
{{#each architecture_decisions}}
### {{title}}
**Decision**: {{decision}}
**Rationale**: {{reasoning}}
**Impact**: {{implications}}
**Alternatives Considered**: {{alternatives}}
{{/each}}

## 🛠️ Technology & Implementation
**Stack**: {{tech_stack}}
**Key Patterns**: {{design_patterns}}
**Performance Considerations**: {{performance_notes}}
**Security Measures**: {{security_decisions}}

## 💻 Important Code Patterns
{{#each code_snippets}}
```{{language}}
// {{description}}
{{code}}
```
**Context**: {{usage_context}}
{{/each}}

## 📋 Current State & Next Steps
**Phase**: {{current_phase}}
**Last Completed**: {{last_milestone}}
**In Progress**: {{current_tasks}}
**Next Priority**: {{next_steps}}
**Blockers**: {{current_blockers}}

## 🔍 Key Learnings & Discoveries
{{#each insights}}
- **Finding**: {{discovery}}
- **Impact**: {{significance}}
- **Application**: {{how_to_use}}
{{/each}}

## 📊 Metrics & Performance
**Code Quality**: {{quality_metrics}}
**Performance Benchmarks**: {{performance_data}}
**Test Coverage**: {{testing_status}}
**Accessibility**: {{a11y_status}}
```

## Usage Instructions

### 1. Automatic Compression Triggers

Compress conversation when:
- Context approaches 75% of window limit
- Conversation spans multiple work sessions
- Task phase transitions occur
- Major architectural decisions are finalized

### 2. Manual Compression Invocation

```markdown
{{#invoke context/history-summarizer.mdc compression_level="medium"}}

Current conversation length: {{current_tokens}} tokens
Target compression: {{target_tokens}} tokens
Preservation priorities: [decisions, code, progress]
```

### 3. Integration with Other Modules

**With Task Decomposition**:
```markdown
# Preserve task breakdown and current step
{{#preserve task_progress}}
{{current_decomposition}}
{{completed_steps}}
{{next_milestone}}
{{/preserve}}
```

**With RAG Module**:
```markdown
# Keep essential retrieved information
{{#preserve rag_findings}}
{{key_documentation_insights}}
{{validated_patterns}}
{{source_references}}
{{/preserve}}
```

## Compression Levels

### Light Compression (70% reduction)
- Keep most technical details
- Preserve conversation flow
- Maintain debugging context
- **Use when**: Recent conversation, active debugging

### Medium Compression (85% reduction) 
- Focus on decisions and patterns
- Compress implementation details
- Keep architectural context
- **Use when**: Standard workflow, multiple topics

### Aggressive Compression (95% reduction)
- Only critical decisions and code
- Minimal process information
- Focus on current objectives
- **Use when**: Long conversations, memory pressure

## Quality Assurance

### Pre-Compression Checklist
- [ ] All architectural decisions captured
- [ ] Technology choices and rationale preserved
- [ ] Current task status clearly documented
- [ ] Important code patterns extracted
- [ ] Security and performance considerations noted
- [ ] Next steps and blockers identified

### Post-Compression Validation
- [ ] Summary provides complete context for continuation
- [ ] No critical decisions or discoveries lost
- [ ] Current state accurately represented
- [ ] Compression ratio meets target
- [ ] Summary is self-contained and actionable

## Recovery Patterns

### Context Recovery After Compression
```markdown
# CONTEXT RESTORATION
Based on conversation summary:
- **Current Objective**: {{main_goal}}
- **Architecture**: {{system_design}}
- **Last Completed**: {{recent_progress}}
- **Next Actions**: {{immediate_steps}}

**Ready to continue with**: {{next_phase}}
```

### Decision Trail Reconstruction
```markdown
# DECISION HISTORY
{{#each preserved_decisions}}
1. **{{title}}** ({{date}})
   - Choice: {{decision}}
   - Reason: {{rationale}}
   - Status: {{implementation_status}}
{{/each}}
```

## Memory Integration Protocol

### Handoff Template
When transitioning to compressed context:

```markdown
# CONVERSATION HANDOFF
**Previous Context**: Successfully compressed {{reduction}}% 
**Essential Information**: Preserved in summary above
**Continuation Point**: {{current_focus}}
**Available Context**: {{remaining_tokens}} tokens for new work

**Ready to proceed with**: {{next_objectives}}
```

### Continuous Memory Strategy
- Maintain rolling summary of last 3 major phases
- Update summary incrementally rather than full recompression
- Cross-reference with project documentation
- Sync with external project tracking tools

This module ensures long conversations maintain focus and essential context while optimizing for the cognitive and technical constraints of AI context windows.
