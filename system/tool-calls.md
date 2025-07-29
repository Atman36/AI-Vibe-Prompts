# ⚙️ How to Use Tool Calls

This document provides the specification for how agents must format their responses to execute actions. Adherence to this specification is mandatory.

---

## The Tool-Calling Paradigm

Agents do not perform actions directly. Instead, they output a JSON object that represents a function call (a "tool call"). The execution environment is responsible for parsing this JSON, invoking the corresponding tool with the provided parameters, and returning the result to the agent.

## Response Format

An agent's entire response MUST be a single JSON object containing two keys:

1.  `tool_name`: A string that exactly matches the `name` of a function defined in `tools/tools.json`.
2.  `parameters`: An object where keys are the parameter names and values are the arguments for the function.

### Strict JSON

The output MUST be a valid, raw JSON object. It should not be wrapped in markdown code blocks (e.g., ` ```json `) or any other text.

---

## Example 1: Reading a File

To read the file at `/app/src/main.js`, the agent's response must be:

```json
{
  "tool_name": "file_read",
  "parameters": {
    "file": "/app/src/main.js"
  }
}
```

## Example 2: Asking the User a Question

To ask the user for their API key, the agent's response must be:

```json
{
  "tool_name": "message_ask_user",
  "parameters": {
    "text": "I need the API key for the payment gateway. Please provide it."
  }
}
```

## Example 3: Executing a Shell Command

To install dependencies using npm, the agent's response must be:

```json
{
  "tool_name": "shell_exec",
  "parameters": {
    "id": "install_deps_session",
    "exec_dir": "/app",
    "command": "npm install"
  }
}
```

---

> **Core Principle**: An agent's only method of interacting with the world is through tool calls. Any deviation from this format will result in a system error. Think, then call a tool.
