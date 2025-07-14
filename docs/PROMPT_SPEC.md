# Prompt Specification

This document defines the structure and requirements for prompts in the AI-Vibe-Prompts repository.

## YAML Front-matter Schema

Every prompt file must begin with YAML front-matter containing metadata:

```yaml
---
name: string (required)
description: string (required)
model: string (required)
version: string (required)
category: string (required)
variables: array (optional)
---
```

### Field Descriptions

#### `name` (required)
- **Type**: String
- **Description**: Human-readable name for the prompt
- **Constraints**: 
  - Maximum 50 characters
  - No special characters except hyphens and spaces
  - Should be descriptive and unique within category

**Examples**:
```yaml
name: System Prompt for AI Assistant
name: Project Analysis & Optimization
name: Design Tool Code Optimizer
```

#### `description` (required)
- **Type**: String  
- **Description**: Brief explanation of what the prompt does
- **Constraints**:
  - Maximum 100 characters
  - Should complete the sentence "This prompt helps..."
  - Focus on outcome, not implementation

**Examples**:
```yaml
description: Base rules for AI assistant in modern development environment
description: Comprehensive project auditing and optimization following complexity management principles
description: Transform design tool exports into production-ready components
```

#### `model` (required)
- **Type**: String
- **Description**: Target AI model or compatibility
- **Allowed Values**:
  - `universal` - Works with any AI assistant
  - `gpt-4` - Optimized for GPT-4 family models
  - `claude` - Optimized for Claude family models
  - `cursor-ai` - Specific to Cursor AI assistant

**Default**: Use `universal` unless prompt requires specific model features

#### `version` (required)
- **Type**: String
- **Description**: Semantic version of the prompt
- **Format**: `MAJOR.MINOR.PATCH`
- **Guidelines**:
  - Start with `1.0.0` for new prompts
  - Increment PATCH for bug fixes
  - Increment MINOR for new features
  - Increment MAJOR for breaking changes

#### `category` (required)
- **Type**: String
- **Description**: Functional category of the prompt
- **Allowed Values**:
  - `system` - Base configuration and rules
  - `tasks` - Workflow automation and processes
  - `tools` - Specific utilities and transformations
  - `modes` - Role-based behavior and context switching

#### `variables` (optional)
- **Type**: Array of objects
- **Description**: Parameters that can be customized in the prompt
- **Schema**:
```yaml
variables:
  - name: string (required)
    description: string (required)
    required: boolean (required)
    default: string (optional)
    type: string (optional)
```

**Variable Fields**:
- `name`: Variable identifier (UPPER_SNAKE_CASE)
- `description`: What this variable represents
- `required`: Whether variable must be provided
- `default`: Default value if not provided
- `type`: Data type hint (string, number, boolean, array)

## Content Structure

After the YAML front-matter, prompts should follow this structure:

### Required Sections

#### 1. Role Definition
```markdown
# Role Definition
You are a [SPECIFIC_ROLE] specializing in [DOMAIN] following "A Philosophy of Software Design" principles.
```

#### 2. Core Philosophy  
```markdown
# Core Philosophy: [MAIN_PRINCIPLE]

## [Principle 1]
- **[Sub-principle]**: [Description]

## [Principle 2]  
- **[Sub-principle]**: [Description]
```

#### 3. Main Content
Structure varies by category but should include:
- Implementation strategies
- Guidelines and best practices
- Code examples where applicable
- Error prevention measures

#### 4. Output Format
```markdown
# Output Format

Always provide:
1. **[Required Output 1]**: [Description]
2. **[Required Output 2]**: [Description]
```

#### 5. Success Metrics
```markdown
# Success Metrics

## [Metric Category 1]
- [Specific measurable goal]

## [Metric Category 2]
- [Specific measurable goal]
```

### Optional Sections

- **Prerequisites**: Required knowledge or setup
- **Examples**: Concrete usage examples
- **Troubleshooting**: Common issues and solutions
- **Related Prompts**: Links to complementary prompts

## Content Guidelines

### Language and Tone
- Use clear, professional language
- Be concise but thorough
- Include concrete examples
- Avoid jargon without explanation

### Code Examples
```markdown
```typescript
// Good: Include language specification
interface ExampleInterface {
  property: string;
}
```

### Brand Neutrality
- Use generic terms instead of specific brand names
- "AI assistant" instead of "Cursor AI" or "ChatGPT"
- "Modern framework" instead of "Next.js" or "React"
- "Design tool" instead of "Figma" or "Sketch"

## Validation Rules

### Automated Checks
- Valid YAML syntax
- All required fields present
- Version format compliance
- Category value validation
- Character limits respected

### Manual Review
- Content quality and clarity
- Philosophical alignment
- Practical applicability
- Example quality

## File Naming Convention

```
[category]/[prompt-name].mdc
```

**Rules**:
- Use kebab-case for file names
- Include category prefix for clarity
- Use `.mdc` extension (Markdown with custom metadata)

**Examples**:
- `system/system-prompt.md`
- `tasks/task-init-project.mdc`
- `tools/tool-design-system-gen.mdc`
- `modes/mode-architect.mdc`

## Version History

Track changes in the prompt content:

```markdown
<!-- Version History
v1.0.0 - Initial version
v1.1.0 - Added error prevention section
v1.1.1 - Fixed typo in examples
-->
```

## Integration with AI Assistants

### Usage Patterns
```
@[filepath] [optional context]
```

### Variable Substitution
When variables are defined, they can be referenced in content:
```markdown
## Working with {{PROJECT_NAME}}

The project {{PROJECT_NAME}} should follow...
```

## Quality Assurance

### Before Submission
- [ ] All required YAML fields completed
- [ ] Version number incremented appropriately
- [ ] Content follows structure guidelines
- [ ] No brand-specific mentions
- [ ] Examples are clear and practical
- [ ] Success metrics are measurable

### Testing Protocol
1. Load prompt in AI assistant
2. Test with example inputs
3. Verify output format matches specification
4. Check edge case handling
5. Validate with different variable values

This specification ensures consistency, quality, and maintainability across all prompts in the repository. 