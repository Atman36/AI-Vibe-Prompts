# AI-Vibe-Prompts Development Workflow

## Overview

AI-Vibe-Prompts implements a structured agent-based development workflow inspired by BMAD-METHOD, providing clear phases, agent handoffs, and quality gates for predictable AI-assisted development.

## Core Workflow Diagram

```mermaid
graph TD
    A[Project Initiation] --> B{Planning Phase}
    B --> C[Architect Agent]
    C --> D[Architecture Review]
    D --> E{Quality Gate 1}
    E -->|Pass| F[Implementation Phase]
    E -->|Fail| C
    F --> G[Developer Agent]
    G --> H[Code Implementation]
    H --> I{Quality Gate 2}
    I -->|Pass| J[Review Phase]
    I -->|Fail| G
    J --> K[Analyst Agent]
    K --> L[Quality Analysis]
    L --> M{Quality Gate 3}
    M -->|Pass| N[Production Ready]
    M -->|Fail| O[Optimization Cycle]
    O --> G
    
    style A fill:#e1f5fe
    style N fill:#e8f5e8
    style E fill:#fff3e0
    style I fill:#fff3e0
    style M fill:#fff3e0
```

## Detailed Phase Breakdown

### Planning Phase - Architect Agent

The planning phase establishes the foundation for successful implementation through comprehensive architectural design.

```mermaid
graph LR
    A[Requirements Analysis] --> B[Technology Selection]
    B --> C[Architecture Design]
    C --> D[API Specification]
    D --> E[Data Modeling]
    E --> F[Performance Planning]
    F --> G[Security Design]
    G --> H[Integration Planning]
    H --> I[Documentation]
    I --> J[Architecture Review]
    
    style A fill:#e3f2fd
    style J fill:#e8f5e8
```

**Key Deliverables:**
- System architecture document
- Technology stack specification
- API design and data models
- Performance requirements
- Security specifications
- Integration blueprints

**Quality Gates:**
- [ ] All requirements addressed in architecture
- [ ] Technology choices justified and feasible
- [ ] Performance targets realistic and measurable
- [ ] Security requirements comprehensive
- [ ] Integration points clearly defined

### Implementation Phase - Developer Agent

The implementation phase transforms architectural plans into production-ready code with comprehensive testing.

```mermaid
graph TD
    A[Setup Development Environment] --> B[Core Infrastructure]
    B --> C[Component Development]
    C --> D[API Implementation]
    D --> E[Database Integration]
    E --> F[Testing Implementation]
    F --> G[Performance Optimization]
    G --> H[Security Implementation]
    H --> I[Documentation Update]
    I --> J[Code Review]
    J --> K{Quality Gates}
    K -->|Pass| L[Ready for Analysis]
    K -->|Fail| M[Refactor & Fix]
    M --> C
    
    style A fill:#e8f5e8
    style L fill:#e8f5e8
    style K fill:#fff3e0
```

**Key Activities:**
- Environment setup and configuration
- Core feature implementation
- Comprehensive testing suite
- Performance optimization
- Security implementation
- Technical documentation

**Quality Gates:**
- [ ] Code follows established patterns
- [ ] Test coverage >90% for critical paths
- [ ] Performance benchmarks met
- [ ] Security vulnerabilities addressed
- [ ] Documentation complete and accurate

### Review Phase - Analyst Agent

The review phase validates implementation quality and provides optimization recommendations for production readiness.

```mermaid
graph TD
    A[Initial Assessment] --> B[Code Quality Analysis]
    B --> C[Performance Analysis]
    C --> D[Security Assessment]
    D --> E[Architecture Compliance]
    E --> F[Test Coverage Review]
    F --> G[Documentation Review]
    G --> H[Optimization Recommendations]
    H --> I[Risk Assessment]
    I --> J[Final Report]
    J --> K{Production Ready?}
    K -->|Yes| L[Deploy]
    K -->|No| M[Improvement Plan]
    M --> N[Back to Implementation]
    
    style A fill:#f3e5f5
    style L fill:#e8f5e8
    style K fill:#fff3e0
```

**Analysis Areas:**
- Code quality and maintainability
- Performance optimization opportunities
- Security vulnerability assessment
- Architecture pattern compliance
- Test coverage and quality
- Documentation completeness

**Quality Gates:**
- [ ] Code quality meets standards
- [ ] Performance targets achieved
- [ ] Security vulnerabilities resolved
- [ ] Test coverage adequate
- [ ] Documentation production-ready

## Agent Handoff Protocol

### Architect → Developer Handoff

```mermaid
sequenceDiagram
    participant A as Architect Agent
    participant O as Orchestrator
    participant D as Developer Agent
    
    A->>O: Architecture Complete
    O->>O: Run Architecture Checklist
    alt Quality Gates Pass
        O->>D: Initiate Developer Handoff
        A->>D: Transfer Architecture Package
        D->>D: Validate Handoff Package
        D->>O: Confirm Readiness
        O->>D: Begin Implementation Phase
    else Quality Gates Fail
        O->>A: Return for Revision
        A->>A: Address Issues
        A->>O: Resubmit Architecture
    end
```

### Developer → Analyst Handoff

```mermaid
sequenceDiagram
    participant D as Developer Agent
    participant O as Orchestrator
    participant A as Analyst Agent
    
    D->>O: Implementation Complete
    O->>O: Run Code Quality Checklist
    alt Quality Gates Pass
        O->>A: Initiate Analyst Handoff
        D->>A: Transfer Implementation Package
        A->>A: Validate Handoff Package
        A->>O: Confirm Analysis Scope
        O->>A: Begin Analysis Phase
    else Quality Gates Fail
        O->>D: Return for Fixes
        D->>D: Address Issues
        D->>O: Resubmit Implementation
    end
```

## Context Engineering Integration

### State Management Throughout Workflow

```mermaid
graph TB
    subgraph "Context Management"
        A[State Alignment] --> B[Phase Tracking]
        B --> C[Agent Coordination]
        C --> D[Quality Validation]
        D --> E[Handoff Management]
    end
    
    subgraph "Supporting Modules"
        F[Task Decomposition] --> G[RAG Integration]
        G --> H[History Summarization]
    end
    
    A --> F
    E --> H
    
    style A fill:#e1f5fe
    style E fill:#e8f5e8
```

**Context Engineering Features:**
- **State Alignment**: Maintains phase awareness across agent transitions
- **Task Decomposition**: Breaks complex requirements into manageable components
- **RAG Integration**: Leverages external knowledge for informed decisions
- **History Summarization**: Manages context window limits during long sessions

### Quality Control Integration

```mermaid
graph TD
    A[Automated Checklists] --> B[Quality Gates]
    B --> C[Agent Validation]
    C --> D[Handoff Verification]
    D --> E[Documentation Standards]
    E --> F[Performance Monitoring]
    F --> G[Security Validation]
    G --> H[Compliance Checking]
    
    style A fill:#fff3e0
    style H fill:#e8f5e8
```

## Expansion Pack Integration

### Domain-Specific Workflows

```mermaid
graph LR
    A[Core Workflow] --> B{Expansion Pack}
    B --> C[Frontend Pack]
    B --> D[Backend Pack]
    B --> E[DevOps Pack]
    
    C --> F[Component Design]
    C --> G[UI/UX Optimization]
    
    D --> H[API Development]
    D --> I[Database Design]
    
    E --> J[CI/CD Setup]
    E --> K[Infrastructure as Code]
    
    style A fill:#e1f5fe
    style C fill:#e8f5e8
    style D fill:#e8f5e8
    style E fill:#e8f5e8
```

**Available Expansion Packs:**
- **Frontend Pack**: React/Next.js specialized tools and workflows
- **Backend Pack**: API and database development workflows
- **DevOps Pack**: Infrastructure and deployment automation

## Usage Examples

### Starting a New Project

```bash
# Initialize with orchestrator
*orchestrator
*phase planning
*architect

# Request architectural guidance
I need to build a real-time collaboration platform for document editing.
Can you help me design the architecture?
```

### Mid-Project Handoff

```bash
# Complete current phase and transition
*quality-check
*handoff architect developer

# Begin implementation with context
Begin implementing the user authentication system using the architecture plan.
```

### Final Review

```bash
# Transition to analysis phase
*phase review
*analyst

# Request comprehensive analysis
Please analyze the current implementation and provide optimization recommendations.
```

## Success Metrics

### Workflow Efficiency
- **Phase Completion Time**: Time to complete each development phase
- **Handoff Success Rate**: Percentage of successful agent transitions
- **Quality Gate Pass Rate**: First-time quality validation success
- **Rework Reduction**: Decrease in backtracking and revision cycles

### Quality Outcomes
- **Code Quality Score**: Automated assessment of code quality
- **Performance Achievement**: Meeting performance targets
- **Security Compliance**: Passing security vulnerability assessments
- **Documentation Completeness**: Technical documentation quality

### User Experience
- **Developer Satisfaction**: Ease of use and productivity gains
- **Learning Curve**: Time to proficiency with the workflow
- **Error Reduction**: Decrease in development mistakes
- **Delivery Predictability**: Consistency in project delivery times

---

**Note**: This workflow can be customized based on project requirements and team preferences. The core principles of phase separation, quality gates, and structured handoffs remain consistent across all implementations. 