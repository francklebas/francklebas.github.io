#!/bin/bash
# LLM Code Review Hook
# Output is markdown, readable by both the developer and the LLM in their editor.

PROVIDER="gemini"
MODEL="gemini-2.5-flash-lite"

# Resolve project name from git repo root directory
PROJECT_NAME=$(basename "$(git rev-parse --show-toplevel 2>/dev/null)")
PROMPTS_DIR="${LLM_PROMPTS_DIR:-$HOME/workspace/llm-prompts}"
CONTEXT_FILE="$PROMPTS_DIR/$PROJECT_NAME/codereview-context.md"
GUIDELINES_FILE="$PROMPTS_DIR/$PROJECT_NAME/codereview-guidelines.md"

# --- Files passed by pre-commit ---
if [ $# -eq 0 ]; then
    exit 0
fi

# --- Staged diff only ---
DIFF=$(git diff --cached --no-color -- "$@" 2>/dev/null)

if [ -z "$DIFF" ]; then
    exit 0
fi

DIFF_TRUNCATED=$(echo "$DIFF" | head -c 12000)

# --- Context and guidelines (prompt components) ---
CONTEXT=$( [ -f "$CONTEXT_FILE" ] && head -c 4000 "$CONTEXT_FILE" || echo "No project context found.")
GUIDELINES=$( [ -f "$GUIDELINES_FILE" ] && head -c 2500 "$GUIDELINES_FILE" || echo "No review guidelines found.")

# --- Prompt ---
PROMPT=$(cat <<PROMPT_END
You are a senior technical code reviewer. Analyze the diff below.

RULES:
- Only flag concrete issues that require a fix
- For each issue: file, line number, description, corrective diff
- No summary, no compliments, no filler
- If nothing to report, respond only: "LGTM"
- Severity order: security > bug > a11y > i18n > perf > style

OUTPUT FORMAT (strict):

## file.ext

**[category]** Issue description (line N)
\`\`\`diff
- current code
+ proposed fix
\`\`\`

If nothing to report, respond only: LGTM

--- PROJECT CONTEXT ---
$CONTEXT

--- REVIEW GUIDELINES ---
$GUIDELINES

--- DIFF TO ANALYZE ---
$DIFF_TRUNCATED
PROMPT_END
)

# --- LLM call ---
REVIEW=$(gemini --model "$MODEL" -p "$PROMPT" 2>&1)

if [ $? -ne 0 ]; then
    echo "[llm-codereview] review unavailable ($PROVIDER)"
    exit 0
fi

echo ""
echo "[llm-codereview] $PROVIDER/$MODEL | files: $*"
echo ""
echo "$REVIEW"

exit 0
