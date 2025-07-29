Проверка на ошибки и несоответствия

Я нашел всего три небольших момента, которые стоит поправить для идеальной консистентности.

Устаревшая секция в core-config.yaml (Критичность: средняя)

Проблема: В файле core-config.yaml все еще осталась секция context:. Она ссылается на старую систему с phase_files и удаленные файлы (task-decompose.md и др.). В новой архитектуре она не используется и вводит в заблуждение.

Решение: Удалить всю секцию context: из core-config.yaml.

Несоответствие в README.md (Критичность: низкая)

Проблема: В секции "Installation" команда для создания проекта указана как npx ai-vibe-prompts create my-app --template=next-shadcn. Однако в директории templates/ у вас есть shadcn-vite, next-enterprise и t3-stack, но нет next-shadcn.

Решение: Заменить next-shadcn на один из существующих шаблонов, например, shadcn-vite или t3-stack, чтобы пример был рабочим.

Небольшое улучшение для agents/core/developer.md (Критичность: низкая)

Проблема: В промпте developer указано, что он использует replace_file_content для изменений. В вашем новом tools.json есть более безопасный и предпочтительный инструмент file_apply_patch.

Решение: Обновить промт агента developer, чтобы он использовал file_apply_patch вместо replace_file_content. Это повысит безопасность и надежность его работы.

План действий по исправлению

Вот конкретные шаги для финализации проекта.

Шаг 1: Очистите core-config.yaml

Просто удалите этот блок из файла core-config.yaml:

Generated yaml
# Удалить этот блок целиком
context:
  core_files:
    - "system/system-prompt.md"
    - "core-config.yaml"
    - "system/checklists/handoff-checklist.md"
  
  phase_files:
    planning:
      - "system/task-decompose.md"
      - "system/rag-template.md"
      - "agents/core/architect.md"
    implementation:
      - "system/state-align.md"
      - "agents/core/developer.md"
      - "agents/project/init.md"
    review:
      - "system/history-summarizer.md"
      - "agents/core/analyst.md"
      - "agents/project/audit.md"


Шаг 2: Исправьте команду в README.md

Замените в файле README.md строку:
npx ai-vibe-prompts create my-app --template=next-shadcn
на:
npx ai-vibe-prompts create my-app --template=t3-stack (или shadcn-vite)

Шаг 3: Обновите агента developer.md

В файле agents/core/developer.md замените упоминания replace_file_content на file_apply_patch. Особенно в секции "PLAN_MODE":

Generated markdown
# ... (начало файла) ...

### PLAN_MODE: Implementation Planning

1.  **Understand the Goal**: Analyze the request and the architectural documents to understand what code needs to be written or changed.
2.  **Read Existing Code**: Use `file_read` and `codebase_search` to read the relevant files that need modification. It is CRITICAL to read before you write.
3.  **Formulate Change Plan**: Create a precise, step-by-step plan of file modifications. Each step in the plan must be a specific tool call.
    -   For new files, plan a `file_write` call.
    -   For existing files, plan one or more `file_apply_patch` calls. You must generate the patch content yourself.
4.  **Seek Approval**: Present the full list of planned `tool_calls` to the user for approval.

### ACT_MODE: Code Execution

1.  **Execute Plan**: Once approved, execute the `file_write` and `file_apply_patch` tool calls exactly as planned.
2.  **Verify Changes**: After making changes, you may need to use tools like `shell_exec` to run tests or linters to ensure your changes didn't break anything.
3.  **Notify Completion**: Use `message_notify_user` to inform the user that the implementation task is complete, pointing to the files you changed.

# ... (остальная часть файла) ...
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Markdown
IGNORE_WHEN_COPYING_END

После этих исправлений ваш проект будет в безупречном состоянии. Вы отлично поработали