#!/bin/bash
# LLM Code Review Hook
#
# Deux modes de sortie contrôlés par LLM_CODEREVIEW_OUTPUT :
#   - (défaut)  : format XML structuré, exploitable par un LLM assistant
#   - "human"   : format markdown lisible pour le développeur
#
# Usage en terminal :
#   LLM_CODEREVIEW_OUTPUT=human pre-commit run llm-codereview

PROVIDER="gemini"
MODEL="gemini-2.5-flash-lite"
OUTPUT_MODE="${LLM_CODEREVIEW_OUTPUT:-llm}"

CONTEXT_FILE="CODEBASE_CONTEXT.md"
GUIDELINES_FILE="CODE_REVIEW_GUIDELINES.md"

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

# --- Prompt selon le mode ---
if [ "$OUTPUT_MODE" = "human" ]; then

FORMAT_INSTRUCTIONS=$(cat <<'BLOCK'
FORMAT DE SORTIE (strict) :

Pour chaque problème :

## fichier.ext

**[catégorie]** Description du problème (ligne N)
```diff
- code actuel
+ code corrigé
```

Si rien à signaler, réponds uniquement : ✅ RAS
BLOCK
)

else

FORMAT_INSTRUCTIONS=$(cat <<'BLOCK'
FORMAT DE SORTIE (strict, XML parsable par un LLM) :

<code-review>
<issue severity="bug|security|a11y|i18n|perf|style" file="path/to/file.ext" line="N">
Description concise du problème.
```diff
- code actuel
+ code corrigé
```
</issue>
</code-review>

Si rien à signaler :

<code-review>
RAS
</code-review>
BLOCK
)

fi

PROMPT=$(cat <<PROMPT_END
Tu es un code reviewer technique senior. Analyse le diff ci-dessous.

RÈGLES :
- Signale uniquement les problèmes concrets qui nécessitent une correction
- Pour chaque problème : fichier, ligne, description, diff correctif
- Pas de résumé, pas de compliment, pas de prose
- Si rien à signaler : réponds "RAS"
- Catégories par sévérité décroissante : security > bug > a11y > i18n > perf > style

$FORMAT_INSTRUCTIONS

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

# --- Sortie selon le mode ---
if [ "$OUTPUT_MODE" = "human" ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  Code Review ($PROVIDER/$MODEL)"
    echo "  Fichiers : $*"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "$REVIEW"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo ""
    echo "[llm-codereview] fichiers: $*"
    echo "$REVIEW"
fi

exit 0
