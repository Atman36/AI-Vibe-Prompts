# 📖 Guide to the AI Agent Team

Welcome to the AI-Vibe-Prompts framework. This guide introduces your team of specialized AI agents and their capabilities. Instead of manually choosing agents for each step, your primary interaction for complex tasks will be with the `Workflow Composer`, who acts as the project manager.

## The `Workflow Composer`: Your Primary Point of Contact

For any goal that requires more than one step, start with the `Workflow Composer`. It is responsible for:

1.  **Understanding Your Goal**: You provide a high-level objective (e.g., "Add Stripe payments").
2.  **Creating a Plan**: It designs a multi-step workflow, selecting the right agents for each stage.
3.  **Orchestrating Execution**: It invokes each agent in sequence, manages the handoff of work, and ensures quality gates are met.

**When to use it**: For any complex feature, refactoring task, or new project setup.
**How to use it**: `@agents/helpers/workflow-composer.md "My high-level goal is..."`

---

## Meet the Team: Agent Capabilities

This section describes the skills of the agents that the `Workflow Composer` will manage on your behalf.

### 🏛️ Core Development Team

-   **`Architect`**: Designs system architecture, data models, and technical specifications. It creates the blueprint for the `Developer`.
-   **`Developer`**: A generalist that implements features according to the `Architect`'s plan. It coordinates its own team of specialists:
    -   **`Frontend Specialist`**: Builds UIs with React/Next.js, implements design systems, and ensures accessibility.
    -   **`Backend Specialist`**: Creates APIs, manages database logic with Prisma, and handles server-side operations.
    -   **`Testing Specialist`**: Writes unit, integration, and end-to-end tests to guarantee code quality.

### 🛠️ Helper & Quality Assurance Team

These agents are active, tool-driven specialists that support the core team.

-   **`Onboarder`**: **Automates Project Setup**. Runs dependency checks, installs packages, sets up `.env` files, and runs initial tests. A true time-saver for new projects or new developers.
-   **`Refactor Assistant`**: **Prepares Codebase for Changes**. Before a new feature is added, this agent safely refactors existing code to make it easier to work with. It uses tools to perform changes and runs tests to ensure nothing breaks.
-   **`Debugger Assistant`**: **Finds and Fixes Bugs Systematically**. Applies a scientific, hypothesis-driven method to identify the root cause of bugs and fix them.
-   **`Quality Monitor`**: **Enforces Quality Standards**. Automatically runs linters, tests, and security scanners to ensure the code meets predefined quality metrics.
-   **`RAG Assistant`**: **Provides Contextual Awareness**. Analyzes the codebase and relevant documentation to provide other agents with the information they need to make smart decisions.

### 🚀 Project & Strategy Team

-   **`Project Initializer`**: Scaffolds new projects from templates.
-   **`Project Auditor`**: Analyzes an existing codebase to identify technical debt, security risks, and areas for improvement.
-   **`Product Strategist`**: Helps define feature requirements, user stories, and success metrics before development begins.

### 🎨 Design Team

-   **`Design System Agent`**: Creates and manages design tokens, component libraries, and style guides.
-   **`Figma Converter`**: Converts Figma designs into production-ready React components.
