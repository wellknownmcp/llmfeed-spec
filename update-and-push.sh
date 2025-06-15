#!/bin/bash

# Sécurité : stop en cas d'erreur
set -e

# Aller à la racine de llmfeed-spec
cd "$(dirname "$0")"

echo "=== 🚀 Génération de spec.llmfeed.json dans 00_shortcut/ ==="

# Exécuter le script depuis local-only/scripts/
py local-only/scripts/update-spec.llmfeed.json/update_spec_simple.py

echo "=== ✅ spec.llmfeed.json généré dans 00_shortcut/ ==="

# Vérifier que les fichiers ont bien été créés
if [ -f "00_shortcut/spec.llmfeed.json" ]; then
    echo "✅ spec.llmfeed.json créé"
    SPEC_SIZE=$(du -h "00_shortcut/spec.llmfeed.json" | cut -f1)
    echo "📊 Taille: $SPEC_SIZE"
else
    echo "❌ ERREUR: spec.llmfeed.json non trouvé dans 00_shortcut/"
    exit 1
fi

if [ -f "00_shortcut/spec-essential.llmfeed.json" ]; then
    echo "✅ spec-essential.llmfeed.json créé"
    LITE_SIZE=$(du -h "00_shortcut/spec-essential.llmfeed.json" | cut -f1)
    echo "📊 Taille: $LITE_SIZE"
else
    echo "⚠️  spec-essential.llmfeed.json non trouvé (possiblement désactivé)"
fi

# Commit dans llmfeed-spec
echo "=== 📦 Commit dans llmfeed-spec ==="
git add 00_shortcut/
git add . # Pour capturer d'éventuelles autres modifications
git commit -m "Update compiled specs in 00_shortcut/ and markdown content"
git push

echo "=== 🚀 Push de llmfeed-spec terminé ==="

# Cible : public/exports/spec/
TARGET_EXPORT="../wellknownmcp.org/public/exports/spec"

echo "=== 📂 Synchronisation vers $TARGET_EXPORT ==="
mkdir -p "$TARGET_EXPORT"
rsync -av \
    --delete \
    --exclude '.git/' \
    --exclude 'local-only/' \
    --exclude 'update-and-push.sh' \
    --exclude '.gitignore' \
    --exclude '__pycache__/' \
    --exclude '*.pyc' \
    --exclude '*.sh' \
    ./ "$TARGET_EXPORT/"
echo "=== ✅ Synchronisation vers $TARGET_EXPORT terminée ==="

# Cible : .well-known/exports/
WELLKNOWN_EXPORT="../wellknownmcp.org/public/.well-known/exports"

echo "=== 📂 Copie des specs vers $WELLKNOWN_EXPORT ==="
mkdir -p "$WELLKNOWN_EXPORT"

# Copier les deux versions de spec
cp 00_shortcut/spec.llmfeed.json "$WELLKNOWN_EXPORT/spec.llmfeed.json"

if [ -f "00_shortcut/spec-essential.llmfeed.json" ]; then
    cp 00_shortcut/spec-essential.llmfeed.json "$WELLKNOWN_EXPORT/spec-essential.llmfeed.json"
fi

echo "=== ✅ Specs copiés dans .well-known/exports ==="

# Aller dans wellknownmcp.org et commit + push
cd ../wellknownmcp.org

echo "=== 📦 Commit dans wellknownmcp.org ==="
git add public/exports/spec
git add public/.well-known/exports/

# Message de commit avec informations de taille
COMMIT_MSG="Update exported spec (00_shortcut structure)"
if [ -n "$SPEC_SIZE" ]; then
    COMMIT_MSG="$COMMIT_MSG - spec: $SPEC_SIZE"
fi
if [ -n "$LITE_SIZE" ]; then
    COMMIT_MSG="$COMMIT_MSG, essential: $LITE_SIZE"
fi

git commit -m "$COMMIT_MSG"
git push

echo "=== 🎉 TOUT TERMINÉ ==="
echo ""
echo "📁 Structure créée:"
echo "  - 00_shortcut/spec.llmfeed.json (complet)"
echo "  - 00_shortcut/spec-essential.llmfeed.json (allégé)"
echo "  - public/exports/spec/ (copie complète)"
echo "  - public/.well-known/exports/ (specs uniquement)"
echo ""
echo "🔗 Accès:"
echo "  - Spec complète: https://wellknownmcp.org/.well-known/exports/spec.llmfeed.json"
echo "  - Spec essentielle: https://wellknownmcp.org/.well-known/exports/spec-essential.llmfeed.json"
echo "  - Export complet: https://wellknownmcp.org/exports/spec/"