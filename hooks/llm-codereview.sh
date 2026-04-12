#!/bin/bash
# LLM Code Review Hook
# Sortie markdown lisible par le dev ET exploitable par le LLM de l'éditeur.

PROVIDER="gemini"
MODEL="gemini-2.5-flash-lite"

PROMPTS_DIR="${LLM_PROMPTS_DIR:-$HOME/workspace/llm-prompts}"
CONTEXT_FILE="$PROMPTS_DIR/codereview-context.md"
GUIDELINES_FILE="$PROMPTS_DIR/codereview-guidelines.md"

# --- Fichiers passés par pre-commit ---
if [ $# -eq 0 ]; then
    exit 0
fi

# --- Diff staged uniquement ---
DIFF=$(git diff --cached --no-color -- "$@" 2>/dev/null)

if [ -z "$DIFF" ]; then
    exit 0
fi

DIFF_TRUNCATED=$(echo "$DIFF" | head -c 12000)

# --- Contexte et guidelines (composants du prompt) ---
CONTEXT=$( [ -f "$CONTEXT_FILE" ] && head -c 4000 "$CONTEXT_FILE" || echo "Pas de contexte disponible.")
GUIDELINES=$( [ -f "$GUIDELINES_FILE" ] && head -c 2500 "$GUIDELINES_FILE" || echo "Pas de guidelines disponibles.")

# --- Prompt ---
PROMPT=$(cat <<PROMPT_END
Tu es un code reviewer technique senior. Analyse le diff ci-dessous.

RÈGLES :
- Signale uniquement les problèmes concrets qui nécessitent une correction
- Pour chaque problème : fichier, ligne, description, diff correctif
- Pas de résumé, pas de compliment, pas de prose
- Si rien à signaler : réponds uniquement "RAS"
- Catégories par sévérité décroissante : security > bug > a11y > i18n > perf > style

FORMAT DE SORTIE (strict) :

## fichier.ext

**[catégorie]** Description du problème (ligne N)
\`\`\`diff
- code actuel
+ code corrigé
\`\`\`

Si rien à signaler, réponds uniquement : RAS

--- CONTEXTE PROJET ---
$CONTEXT

--- GUIDELINES DE REVIEW ---
$GUIDELINES

--- DIFF À ANALYSER ---
$DIFF_TRUNCATED
PROMPT_END
)

# --- Appel LLM ---
REVIEW=$(gemini --model "$MODEL" -p "$PROMPT" 2>&1)

if [ $? -ne 0 ]; then
    echo "[llm-codereview] review indisponible ($PROVIDER)"
    exit 0
fi

echo ""
echo "[llm-codereview] $PROVIDER/$MODEL | fichiers: $*"
echo ""
echo "$REVIEW"

exit 0
