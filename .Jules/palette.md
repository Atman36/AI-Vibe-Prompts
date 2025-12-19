## 2025-12-16 - Agent Instruction Gaps
**Learning:** Core developer agents (like `frontend.md`) often lack the explicit accessibility mandates found in specialized design agents (`design-system.md`). This creates a gap where "implementation" deviates from "design intent".
**Action:** Always cross-reference "Developer" agent prompts with "Design" agent prompts to ensure A11y standards are carried over into execution instructions.

## 2025-12-17 - Explicit A11y Directives in Prompts
**Learning:** Developers often treat "accessible" as a vague requirement. Providing a concrete "Non-Negotiables" checklist (labels, focus states, touch targets) in the agent prompt significantly increases the likelihood of accessible output.
**Action:** When auditing agents, replace generic "be accessible" directives with specific, testable constraints.
