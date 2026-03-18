#!/bin/bash
# autosave.sh — Auto-commit + push cada 30 minutos
# Uso: bash autosave.sh  (déjalo corriendo en una terminal aparte)

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
INTERVAL=1800  # 30 minutos en segundos

echo "✔ AutoSave activo en: $REPO_DIR"
echo "  Commit + push cada 30 minutos. Ctrl+C para detener."
echo ""

while true; do
  cd "$REPO_DIR"

  # Solo actúa si hay cambios
  if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M")
    git add -A
    git commit -m "Auto-save: $TIMESTAMP"
    git push origin main
    echo "[$TIMESTAMP] ✔ Guardado y enviado a Vercel"
  else
    echo "[$(date "+%H:%M")] Sin cambios — esperando..."
  fi

  sleep $INTERVAL
done
