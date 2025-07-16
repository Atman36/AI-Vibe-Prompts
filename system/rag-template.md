# RAG Template & Information Management Module

## Core Philosophy: Fact-Based Generation

This module implements information hiding principles by abstracting the complexity of external information retrieval while providing a simple interface for fact-based AI generation.

### Context Engineering Approach
- **Source Validation**: Only use verified, retrieved information
- **Hallucination Prevention**: Clear boundaries between known and unknown
- **Token Efficiency**: Optimize retrieval for context window limits
- **Freshness Management**: Prioritize recent and relevant information

## RAG Architecture

### 1. Information Retrieval Interface

```yaml
retrieval_config:
  query: "{{query}}"
  sources: {{source_types}}
  max_results: {{max_docs}}
  filters:
    - recency: "last_6_months"
    - relevance: ">{{confidence_threshold}}"
    - quality: "verified"
```

### 2. Retrieved Information Template

```markdown
# RETRIEVED CONTEXT
## Sources: {{source_count}} documents | Confidence: {{avg_confidence}} | Updated: {{last_updated}}

{{#each RETRIEVED_DOCS}}
### Source {{@index}}: {{title}}
**Type**: {{type}} | **Date**: {{date}} | **Confidence**: {{confidence}}
**URL**: {{url}}

{{content_summary}}

**Key Points**:
{{#each key_points}}
- {{this}}
{{/each}}

**Code Examples** (if applicable):
```{{language}}
{{code_snippet}}
```

---
{{/each}}
```

## Usage Instructions

### 1. Information Boundaries (Critical)

**ONLY use information from the RETRIEVED CONTEXT section above.**

**Prohibited Actions**:
- ❌ Generating information not present in retrieved docs
- ❌ Making assumptions about undocumented features
- ❌ Combining information from different contexts without validation
- ❌ Using "general knowledge" that contradicts retrieved facts

**Required Actions**:
- ✅ Reference specific source numbers when citing information
- ✅ Quote directly from retrieved content when possible
- ✅ Acknowledge gaps in available information
- ✅ Request additional retrieval if information is insufficient

### 2. Information Synthesis Protocol

When working with retrieved information:

```markdown
## Information Analysis
**Available Sources**: [List source types and counts]
**Coverage Assessment**: [Rate completeness: Complete/Partial/Insufficient]
**Confidence Level**: [High/Medium/Low based on source quality]
**Information Gaps**: [List what's missing or unclear]

## Synthesized Response
Based on retrieved sources {{source_numbers}}, [your response here]

**Source References**:
- Point 1: Based on Source 2 ({{title}})
- Point 2: According to Source 4 ({{title}})
- Point 3: As documented in Source 1 ({{title}})

## Limitations
The following aspects are not covered in retrieved sources:
- [List uncovered areas]
- [Suggest additional queries if needed]
```

### 3. Quality Validation Checklist

Before generating content, verify:

- [ ] All claims trace back to specific retrieved sources
- [ ] Source confidence scores meet threshold ({{confidence_threshold}})
- [ ] Information is recent enough for the use case
- [ ] No contradictions exist between retrieved sources
- [ ] Gaps in information are explicitly acknowledged

## Integration Patterns

### With Task Decomposition
```markdown
{{#invoke context/rag-template.mdc query="React 19 Server Components best practices"}}
{{#invoke context/task-decompose.mdc goal="Implement Server Components architecture"}}
```

### With Design System Generation
```markdown
{{#invoke context/rag-template.mdc query="Tailwind CSS design tokens configuration"}}
{{#invoke tools/tool-design-system-gen.mdc}}
```

### With Project Analysis
```markdown
{{#invoke context/rag-template.mdc query="Next.js 15 performance optimization patterns"}}
{{#invoke tasks/task-analyze-project.mdc}}
```

## Error Handling & Fallbacks

### Insufficient Information Response
```markdown
## Information Status: INSUFFICIENT

**Available**: {{available_info_summary}}
**Missing**: {{missing_info_list}}

**Recommendation**: 
1. Retrieve additional sources for: {{missing_topics}}
2. Consider alternative approaches with available information
3. Proceed with partial implementation and document assumptions

**Proposed Next Steps**:
- [ ] Additional RAG query: "{{suggested_query}}"
- [ ] Consult team experts for missing information
- [ ] Implement with documented limitations
```

### Conflicting Information Response
```markdown
## Information Status: CONFLICTING

**Conflict Detected**: {{conflict_description}}
**Source A** ({{confidence_a}}): {{position_a}}
**Source B** ({{confidence_b}}): {{position_b}}

**Resolution Strategy**:
1. Prioritize higher confidence source
2. Consider source recency and authority
3. Implement with flexibility for both approaches
4. Document the conflict and chosen rationale
```

## Context Policy Integration

### Token Management
- Reserve 25% of context window for RAG content
- Prioritize sources by relevance and recency
- Compress less critical information into summaries
- Maintain full detail for actively referenced sources

### Memory Integration
```markdown
# RAG SUMMARY (for context preservation)
**Topic**: {{query}}
**Key Findings**: {{bullet_summary}}
**Best Sources**: {{top_source_titles}}
**Information Quality**: {{overall_assessment}}
**Last Updated**: {{timestamp}}
```

## Advanced Patterns

### Iterative Retrieval
```markdown
# Multi-Step RAG Process
1. Initial broad query: "{{general_topic}}"
2. Analyze retrieved information gaps
3. Targeted follow-up: "{{specific_gap_query}}"
4. Synthesis and validation
5. Final response with complete context
```

### Cross-Reference Validation
```markdown
# Source Cross-Validation
**Primary Source**: {{main_source}}
**Confirming Sources**: {{confirming_sources}}
**Confidence Boost**: {{increased_confidence}}
**Validated Claims**: {{cross_referenced_facts}}
```

This module ensures AI responses are grounded in factual, retrieved information while maintaining simplicity and reliability principles from proven software engineering practices.
