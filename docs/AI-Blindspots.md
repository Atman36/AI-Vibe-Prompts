# AI Blindspots Reference

This document summarizes key AI coding limitations and mitigations, integrated into AI-Vibe-Prompts agents. Source: [ezyang.github.io/ai-blindspots](https://ezyang.github.io/ai-blindspots).

## Black Box Testing
AI struggles with implementation-independent testing. Mitigation: Analyst agent generates black box tests.

## Bulldozer Method
Leverage AI for brute-force tasks. Integrated in Orchestrator for agent loops.

## Culture Eats Strategy
Prompts and codebase shape AI behavior. See system prompt updates.

## Keep Files Small
Prevent context blowout. Enforced in developer guidelines.

## Know Your Limits
AI overconfidence. Added to system prompt.

## Memento
AI has no memory. Use RAG Assistant for context.

## Mise en Place
Prepare environment. Integrated in project init.

## Preparatory Refactoring
Refactor before changes. Handled by RefactorAssistant.

## Read the Docs
Feed docs to avoid hallucinations. RAG Assistant enhanced.

## Requirements, not Solutions
Clarify needs first. In system prompt.

## Respect the Spec
Don't alter specs. Quality gates in workflow.

## Rule of Three
Abstract on third occurrence. In architect/developer.

## Scientific Debugging
Systematic bug fixing. In DebuggerAssistant.

## Stateless Tools
Avoid stateful commands. In developer.

## Stop Digging
Detect loops. In orchestrator.

## The Tail Wagging the Dog
Maintain focus. In orchestrator.

## Use Automatic Code Formatting
Offload style to tools. In developer.

## Use MCP Servers
Agentic tools. Referenced in docs/WORKFLOW.md.

## Use Static Types
Prefer typed langs. Quality standards updated.

## Walking Skeleton
Minimal E2E first. In project init. 