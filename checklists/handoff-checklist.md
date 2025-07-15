---
name: Agent Handoff Checklist
description: Quality control checklist for agent-to-agent transitions
model: universal
version: 1.0.0
category: checklists
dependencies:
  - core-config.yaml
  - context/state-align.md
---

# Agent Handoff Quality Checklist

## Purpose
This checklist ensures high-quality transitions between specialized AI agents, preventing context loss and maintaining deliverable quality throughout the development workflow.

## Pre-Handoff Validation

### Context Integrity Check
- [ ] **Current Phase Documented**: Development phase is clearly identified
- [ ] **Objectives Achieved**: Current agent's objectives have been met
- [ ] **Deliverables Complete**: All expected outputs have been produced
- [ ] **Quality Gates Passed**: Phase-specific quality criteria satisfied
- [ ] **Known Issues Documented**: Any limitations or concerns are recorded

### Documentation Readiness
- [ ] **Technical Documentation**: All technical decisions are documented
- [ ] **Architecture Alignment**: Implementation follows architectural decisions
- [ ] **Code Quality**: Code meets established standards and conventions
- [ ] **Test Coverage**: Adequate testing is in place for implemented features
- [ ] **Performance Validation**: Performance requirements are met

## Handoff Package Preparation

### Architect → Developer Handoff

#### Required Deliverables
- [ ] **System Architecture Document**: Complete architectural specification
- [ ] **Technology Stack Definition**: Detailed technology choices with rationale
- [ ] **API Specifications**: Complete API design and interface definitions
- [ ] **Data Models**: Database schemas and data structure definitions
- [ ] **Performance Requirements**: Specific performance targets and constraints
- [ ] **Security Requirements**: Security specifications and compliance needs
- [ ] **Integration Points**: External service integration specifications
- [ ] **Development Environment**: Setup instructions and tool configurations

#### Quality Validation
- [ ] **Requirements Coverage**: All project requirements addressed in architecture
- [ ] **Technology Feasibility**: All technology choices are proven and available
- [ ] **Performance Realistic**: Performance targets are achievable
- [ ] **Security Comprehensive**: Security requirements cover all attack vectors
- [ ] **Integration Defined**: All external integrations have clear specifications

#### Handoff Notes Template
```markdown
# Architecture → Development Handoff

## Architecture Summary
- **System Type**: [Web App/API/Full Stack/etc.]
- **Primary Technologies**: [List main technologies]
- **Architecture Pattern**: [MVC/Microservices/Serverless/etc.]
- **Data Strategy**: [Database choices and data flow]

## Key Architectural Decisions
1. [Decision 1 with rationale]
2. [Decision 2 with rationale]
3. [Decision 3 with rationale]

## Critical Implementation Notes
- [Important implementation considerations]
- [Potential technical challenges]
- [Performance optimization opportunities]

## Success Criteria
- [Measurable success criteria for implementation]
```

### Developer → Analyst Handoff

#### Required Deliverables
- [ ] **Production Code**: Complete, tested, and documented implementation
- [ ] **Test Suite**: Comprehensive unit, integration, and E2E tests
- [ ] **Performance Benchmarks**: Actual performance measurements
- [ ] **Security Assessment**: Security testing results and vulnerability scan
- [ ] **Code Documentation**: Technical documentation and API docs
- [ ] **Deployment Configuration**: Production deployment setup
- [ ] **Known Issues Log**: Documented technical debt and known limitations
- [ ] **Optimization Notes**: Identified optimization opportunities

#### Quality Validation
- [ ] **Feature Completeness**: All specified features are implemented
- [ ] **Code Quality**: Code follows established patterns and standards
- [ ] **Test Coverage**: >90% coverage for critical business logic
- [ ] **Performance Targets**: Meets or exceeds performance requirements
- [ ] **Security Standards**: No high-severity security vulnerabilities
- [ ] **Documentation Quality**: Technical documentation is complete and accurate

#### Handoff Notes Template
```markdown
# Development → Analysis Handoff

## Implementation Summary
- **Features Completed**: [List all implemented features]
- **Technology Stack Used**: [Actual technologies implemented]
- **Performance Results**: [Benchmark data and metrics]
- **Test Coverage**: [Coverage percentages by category]

## Quality Metrics
- **Code Quality Score**: [Automated quality assessment]
- **Security Scan Results**: [Security vulnerability summary]
- **Performance Benchmarks**: [Core Web Vitals and load times]
- **Accessibility Compliance**: [WCAG compliance level]

## Areas for Analysis Focus
- [Specific areas needing analytical review]
- [Potential optimization opportunities]
- [Security review priorities]
- [Performance monitoring recommendations]

## Technical Debt & Future Work
- [Documented technical debt]
- [Recommended future improvements]
- [Scaling considerations]
```

## Post-Handoff Validation

### Receiving Agent Readiness Check
- [ ] **Context Understanding**: Receiving agent comprehends the handoff package
- [ ] **Capability Confirmation**: Agent has the skills needed for next phase
- [ ] **Resource Access**: Agent has access to all necessary tools and information
- [ ] **Objective Clarity**: Next phase objectives are clearly understood
- [ ] **Timeline Alignment**: Expected timeline for next phase is realistic

### Handoff Quality Assessment
- [ ] **Information Completeness**: All necessary information transferred
- [ ] **Documentation Quality**: Documentation is clear and actionable
- [ ] **Context Preservation**: Critical context has been maintained
- [ ] **Quality Standards**: Deliverables meet established quality criteria
- [ ] **Traceability**: Can trace requirements through to implementation

## Emergency Handoff Procedures

### Context Limit Approaching
When approaching context window limits during handoff:

1. **Priority Information Identification**
   - [ ] Critical architectural decisions
   - [ ] Key implementation constraints
   - [ ] Essential performance requirements
   - [ ] Security considerations

2. **Context Compression**
   - [ ] Use history-summarizer.md to compress conversation
   - [ ] Extract key decisions into structured format
   - [ ] Preserve critical technical specifications
   - [ ] Document any information loss

3. **Validation**
   - [ ] Verify compressed context maintains essential information
   - [ ] Confirm receiving agent understands compressed context
   - [ ] Document any limitations in compressed handoff

### Failed Handoff Recovery
If handoff validation fails:

1. **Issue Identification**
   - [ ] Identify specific missing information or quality issues
   - [ ] Determine if issue is blocker or can be addressed
   - [ ] Assess impact on project timeline

2. **Remediation**
   - [ ] Request additional information from source agent
   - [ ] Clarify ambiguous specifications
   - [ ] Address quality deficiencies

3. **Re-validation**
   - [ ] Re-run handoff checklist
   - [ ] Confirm all issues have been resolved
   - [ ] Proceed with validated handoff

## Success Metrics

### Handoff Quality Indicators
- **Context Preservation Rate**: % of critical information successfully transferred
- **Quality Gate Pass Rate**: % of deliverables meeting quality standards
- **Rework Reduction**: Decrease in backtracking due to poor handoffs
- **Agent Satisfaction**: Receiving agent confidence in handoff package

### Process Efficiency Metrics
- **Handoff Completion Time**: Time required for complete handoff process
- **Validation Success Rate**: % of handoffs passing validation on first attempt
- **Issue Resolution Time**: Time to resolve handoff quality issues
- **Overall Project Velocity**: Impact of quality handoffs on development speed

## Integration Notes

### With AI-Vibe-Prompts Framework
- **State Alignment**: Use context/state-align.md for phase transition management
- **Quality Standards**: Apply framework quality standards to all deliverables
- **Documentation**: Maintain consistent documentation patterns across handoffs

### With Core Configuration
- **Path Management**: Use core-config.yaml for consistent file organization
- **Agent Coordination**: Leverage agent configuration for role clarity
- **Quality Control**: Apply configured quality checklists automatically

---

**Usage**: Run this checklist before and after every agent handoff to ensure quality and context preservation. Customize validation criteria based on specific project requirements. 