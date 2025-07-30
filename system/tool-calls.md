# ⚙️ Claude Code Tool Usage Guide

This document provides guidance for using Claude Code's native tools effectively within the AI-Vibe-Prompts framework.

---

## Claude Code Tool Integration

Claude Code provides a rich set of native tools for file operations, code analysis, and system interaction. This guide maps the original custom tools to Claude Code equivalents.

## Claude Code Tool Mapping

Original custom tools have been mapped to Claude Code native equivalents:

### File Operations
- `file_read` → `Read` - Read file contents
- `file_write` → `Write` - Create or overwrite files  
- `file_apply_patch` → `Edit` or `MultiEdit` - Modify existing files

### Code Analysis
- `codebase_search` → `Grep` - Search for patterns in code
- `list_files` → `Glob` - Find files by pattern
- `get_directory` → `LS` - List directory contents

### System Operations  
- `shell_exec` → `Bash` - Execute shell commands

### Web Operations
- `search_web` → `WebSearch` - Search the internet
- `fetch_url` → `WebFetch` - Fetch web content

### Removed Tools (No Claude Code Equivalent)
- `invoke_agent` - Use direct task execution instead
- `message_notify_user` - Use direct responses
- `message_ask_user` - Use direct responses

---

## Example 1: Reading a File

To read the file at `/app/src/main.js` in Claude Code:

```
Read the file /app/src/main.js to understand the current implementation.
```

Claude Code will use the Read tool automatically.

## Example 2: Asking the User a Question

To ask the user for their API key in Claude Code:

```
I need the API key for the payment gateway. Please provide it so I can proceed with the integration.
```

Claude Code handles user interaction directly through natural responses.

## Example 3: Executing a Shell Command

To install dependencies using npm in Claude Code:

```
I'll install the dependencies by running npm install.
```

Claude Code will use the Bash tool to execute `npm install` with appropriate working directory.

---

> **Core Principle**: Claude Code automatically selects and uses the appropriate native tools based on natural language instructions. Focus on clear, actionable descriptions of what needs to be accomplished.
