# Quick Start: Your First AI-Managed Project in 3 Steps

Welcome to the new era of AI-Vibe-Prompts, where development is managed by an autonomous AI agent team. Getting started is simpler than ever.

---

## Step 1: Set Up Your Project with the `Onboarder`

For any new or existing project, the `Onboarder` agent handles everything. It's a tool-driven agent that automates setup, ensuring your project is ready for development.

**What it does:**
- Installs all necessary dependencies (`npm install`).
- Checks for required environment variables and helps you create `.env` files.
- Runs initial checks and tests to verify the project's integrity.

**How to use it:**
```bash
# For any project (new or existing)
@agents/helpers/onboarder.md
"Onboard this project. Install dependencies, check the environment, and run verification tests."
```

Forget manual setup. Just run the `Onboarder`.

---

## Step 2: Give Your Goal to the `Workflow Composer`

Once your project is set up, you don't need to call individual agents. Your main point of contact is the `Workflow Composer`. Give it a high-level goal, and it will orchestrate the entire team to achieve it.

**How to use it:**
```bash
@agents/helpers/workflow-composer.md
"My goal is to add a complete Stripe payment processing system. This should include a checkout page, webhooks for order confirmation, and a customer portal to manage subscriptions."
```

The `Workflow Composer` will analyze your request and create a detailed, step-by-step plan for its team of specialist agents.

---

## Step 3: Review the Plan and Supervise the Work

The `Workflow Composer` will show you its plan before executing it. This gives you full transparency and control. Once you give the green light, the agent team gets to work.

Your role shifts from a hands-on coder to a project supervisor. You review the progress and the final result, while the AI handles the complex implementation details.

### What to expect:
-   **A Clear Plan**: See exactly what the agents will do.
-   **Automated Execution**: The `Workflow Composer` manages all agent handoffs and quality checks.
-   **A Finished Product**: Receive production-ready code that meets your goal.

---

**That's it!** You're ready to build complex software by simply stating your goals. For more details on how this works, see the [full workflow documentation](WORKFLOW.md). 