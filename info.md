### Core Operating Principles

#### 1. Three-Phase Development Approach
For each new feature, create three documents:

**requirements.md** — Use EARS Notation (Easy Approach to Requirements Syntax):
- Structure: "The system SHALL [action] WHEN [condition] TO [goal]"
- User stories with acceptance criteria
- Clear, measurable requirements

**design.md** — Technical Architecture:
- Description of the implementation approach
- Technology selection and its justification
- Architectural patterns and component structure

**tasks.md** — Step-by-step implementation plan:
- Discrete, traceable tasks
- Sequence from concept to deployment
- Completion statuses (Planning/In Progress/Done)

### 2. Project Context Files
Create a `.project-steering/` folder with the following files:

**product.md** — product goal, target users, key features
**tech.md** — technology stack, constraints, coding standards
**structure.md** — file organization, naming conventions
**prompt-standards.md** — standards for creating AI prompts
**testing.md** — approaches to testing prompts and agents

### 3. Documentation Inclusion Modes
Use metadata for each steering file:
```
---
inclusion: always    # Included in all interactions
description: "Fundamental project standards"
---
```

```
---
inclusion: fileMatch # Loaded for specific file types
filePatterns: ["*.py", "*.md"]
description: "Conventions for Python and Markdown"
---
```

```
---
inclusion: manual    # Available on demand
description: "Reference information"
---
```

## Quality Automation

Create automatic checks:
- Prompt structure validation
- Compliance verification with standards
- Automated test scenario generation
- Documentation version control

## Important Limitations

- DO NOT mention specific commercial tools in project documentation
- Focus on open standards and approaches
- Ensure compatibility with various AI platforms
- Documentation must evolve with the code

## Goal
Transform "vibe coding" into "viable code" through structured documentation and contextual awareness.

## Necessary Resources for Study

### EARS Notation (Requirements Engineering)
- **NASA Requirements Engineering Guide**: Search "NASA requirements engineering EARS notation"
- **IEEE Standards for Requirements**: IEEE 830 standard for documenting requirements
- **Rolls Royce Engineering Standards**: Original source of the EARS methodology

### Spec-Driven Development
- **Microsoft Engineering Practices**: Documentation on spec-first approach
- **Google Software Engineering at Google**: Chapter on documentation and specifications
- **Atlassian Confluence Templates**: Templates for technical specifications

### Context-Aware AI Development
- **OpenAI GPT Best Practices**: Guide to creating contextual prompts
- **Anthropic Claude Documentation**: Patterns for working with large context
- **LangChain Documentation**: Examples of context-aware agents

### Documentation-as-Code
- **Docs Like Code**: Methodology for synchronizing documentation with code
- **GitBook Engineering**: Approaches to living documentation
- **Notion Engineering Blog**: Articles on scaling documentation

## Prompt Folder Structure in Cursor.ai

Create the following hierarchy:

```
.cursorrules/
├── project-steering/
│   ├── product.md
│   ├── tech.md
│   ├── structure.md
│   └── prompt-standards.md
├── spec-templates/
│   ├── requirements-template.md
│   ├── design-template.md
│   └── tasks-template.md
├── automation/
│   ├── validation-rules.md
│   └── quality-checks.md
└── main-instructions.md (system prompt above)
```

## Specific Implementation Tasks

### Phase 1: Foundation
1. Create the `.project-steering/` structure
2. Write basic steering files
3. Adapt existing prompts to EARS notation

### Phase 2: Automation
1. Implement specification templates
2. Create a prompt validation system
3. Set up automatic documentation updates

### Phase 3: Scaling
1. Integration with version control systems
2. Documentation quality metrics
3. Community and feedback loops

This approach will ensure structured project development with the preservation of institutional memory and improved AI prompt quality through documented specifications.

---

# Kiro: Application Development Documents and Structure

## Kiro's Core Philosophy

Kiro is an AI-powered IDE from Amazon that implements the concept of **spec-driven development** [1][2]. Unlike traditional AI assistants that immediately generate code, Kiro first creates structured documentation and then implements functionality based on it [3].

## Key Documents Created by Kiro

### 1. Spec Files (Primary Documentation)

Kiro creates three main specification documents for each feature [1][2]:

#### **requirements.md**
- Uses **EARS Notation** (Easy Approach to Requirements Syntax)
- Contains user stories with acceptance criteria
- Structured requirements in text format
- Developed at Rolls Royce to constrain textual requirements [3]

#### **design.md**
- Technical architecture and implementation approach
- Description of the technology stack
- Architectural decisions and their justification
- Component structure of the system [1]

#### **tasks.md**
- Discrete, traceable implementation steps
- Sequence of tasks from concept to deployment
- Automatic update of task statuses ("In Progress", "Done")
- Each task contains several sub-steps [1][3]

### 2. Steering Files (Project Management Files)

Stored in the `.kiro/steering/` directory and provide project context [2][4]:

#### **Automatically Generated:**
- **product.md** — product goal, target users, key features
- **tech.md** — technology stack and technical constraints
- **structure.md** — file organization, naming conventions, architectural patterns [2]

#### **Custom Files:**
- **api-standards.md** — REST API conventions
- **testing.md** — testing approaches
- **security.md** — security requirements
- Any project-specific standards [2]

### 3. Agent Hooks (Workflow Automation)

- Configuration files for automatic actions
- Triggers for file system events (create, save, delete)
- Automatic generation of tests, documentation, security checks [5]

### 4. MCP Integration Files

- JSON configuration files for integration with external tools
- Connection to databases, APIs, documentation [6]

## Documentation Inclusion Modes

Kiro supports three modes for using steering files [2]:

| Mode | Description | Usage |
|---|---|---|
| `inclusion: always` | Included in all interactions | Fundamental standards |
| `inclusion: fileMatch` | Loaded only for specific file types | Specific conventions |
| `inclusion: manual` | Available on demand | Reference information |

## Benefits for Your AI-Vibe-Prompts Project

### Structured Approach
- **Living Documentation** — specifications evolve with the code [2]
- **Institutional Memory** — knowledge remains after developers leave [2]
- **Three-Phase Process** — Requirements → Design → Tasks [1]

### Contextual Awareness
- **Project steering** provides personalized AI assistance
- **Multimodal context** — support for images, architecture diagrams [6]
- **Deep understanding** of the codebase and project context [5]

### Quality Automation
- **Agent Hooks** for automatic standard compliance
- **Supervised/Autopilot modes** for change control [3]
- **Real-time code diffs** with rollback capability [5]

## Integration Recommendations

For your AI-Vibe-Prompts project, you can adapt:

1. **Specification Structure** — implement the three-phase approach in your agents
2. **Steering Files Concept** — create context files for each project
3. **EARS Notation** — for more structured requirements
4. **Agent Hooks Pattern** — for automating quality checks
5. **Living Documentation** — synchronization of specs with code

Kiro demonstrates the evolution from "vibe coding" to "viable code" through structured documentation and contextual awareness [6], which aligns perfectly with your project's philosophy.

[1] https://kiro.dev/docs/getting-started/first-project/
[2] https://caylent.com/blog/kiro-first-impressions
[3] https://devclass.com/2025/07/15/hands-on-with-kiro-the-aws-preview-of-an-agentic-ai-ide-driven-by-specifications/
[4] https://yehudacohen.substack.com/p/developing-with-kiro-amazons-new
[5] https://huggingface.co/blog/LLMhacker/kiro-ai
[6] https://kiro.dev
[7] https://github.com/Atman36/AI-Vibe-Prompts
[8] https://kiro.dev/docs/getting-started/
[9] https://dev.to/aws-builders/introducing-kiro-an-ai-ide-that-thinks-like-a-developer-42jp
[10] https://repost.aws/articles/AROjWKtr5RTjy6T2HbFJD_Mw/%F0%9F%91%BB-kiro-agentic-ai-ide-beyond-a-coding-assistant-full-stack-software-development-with-spec-driven-ai
[11] https://www.linkedin.com/posts/mattgarman_ai-has-changed-how-quickly-we-can-write-code-activity-7350558499971522564-7LWJ
[12] https://www.futuretools.io/tools/kiro
[13] https://kiro.dev/docs/getting-started/installation/
[14] https://www.geekwire.com/2025/amazon-targets-vibe-coding-chaos-with-new-kiro-ai-software-development-tool/
[15] https://apidog.com/fr/blog/amazons-kiro-dev-ai-coding-ide-fr/
[16] https://www.reddit.com/r/ClaudeAI/comments/1lzsvot/amazons_new_claudepowered_specdriven_ide_kiro/
[17] https://www.youtube.com/watch?v=8k1g-E1qGyQ
[18] https://www.youtube.com/watch?v=Z9fUPyowRLI