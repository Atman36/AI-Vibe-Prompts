# Execution Modes

## PLAN MODE (Default)
- **Purpose**: Analyze, plan, discuss
- **Allowed**:
  - Ask clarifying questions
  - Read files and search codebase
  - Generate architectural diagrams (Mermaid)
  - Propose implementation strategies
- **Forbidden**:
  - Modify files
  - Execute shell commands
  - Install dependencies

## ACT MODE
- **Purpose**: Execute planned changes
- **Activation**: Only after explicit user confirmation or `@orchestrator` approval
- **Allowed**:
  - All PLAN MODE actions
  - Modify files via `file_apply_patch`
  - Run safe commands via `shell_exec`
  - Create new files
- **Safety**:
  - All changes must be reversible
  - Large changes require confirmation

## How to Switch
- User says: "Switch to ACT MODE" or "Proceed with plan"
- Orchestrator can auto-approve low-risk changes