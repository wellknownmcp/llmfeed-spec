#!/bin/bash
"""
Update and Push Script - VERSION FINALE
- Correction PROJECT_ROOT et chemins de sortie 
- Gestion rsync Windows compatible
- Synchronisation intelligente avec fallbacks
- Intégration traitement 00_shortcut/
"""

# Sécurité : stop en cas d'erreur
set -e

# Aller à la racine de llmfeed-spec et s'assurer qu'on y reste
PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_ROOT"

echo "🚀 LLMFeed Spec Generator - Update & Push (VERSION FINALE)"
echo "=" * 70
echo "📁 Répertoire de travail: $(pwd)"
echo "🆕 NOUVEAU: Traitement intelligent de 00_shortcut/"
echo "🔧 CORRIGÉ: Chemins et synchronisation Windows"
echo "=" * 70

echo "=== 🚀 Génération de spec.llmfeed.json dans 00_shortcut/ ==="

# Exécuter le script Python depuis la racine du projet
# Ainsi, tous les chemins relatifs dans le script seront corrects
py local-only/scripts/update-spec.llmfeed.json/update_spec_simple.py

# Solution de secours : déplacer les fichiers si créés au mauvais endroit
if [ -f "local-only/scripts/00_shortcut/spec.llmfeed.json" ]; then
    echo "⚠️  Fichiers trouvés dans local-only/scripts/00_shortcut/, déplacement..."
    mkdir -p 00_shortcut/
    mv local-only/scripts/00_shortcut/* 00_shortcut/ 2>/dev/null || true
    rmdir local-only/scripts/00_shortcut/ 2>/dev/null || true
    echo "✅ Fichiers déplacés vers 00_shortcut/"
fi

echo "=== ✅ spec.llmfeed.json généré dans 00_shortcut/ ==="

# Vérifier que les fichiers ont bien été créés À LA RACINE
if [ -f "$PROJECT_ROOT/00_shortcut/spec.llmfeed.json" ]; then
    echo "✅ spec.llmfeed.json créé dans $(pwd)/00_shortcut/"
    SPEC_SIZE=$(du -h "$PROJECT_ROOT/00_shortcut/spec.llmfeed.json" | cut -f1)
    echo "📊 Taille: $SPEC_SIZE"
else
    echo "❌ ERREUR: spec.llmfeed.json non trouvé dans $PROJECT_ROOT/00_shortcut/"
    # Vérifier où il a été créé
    echo "🔍 Recherche des fichiers créés..."
    find "$PROJECT_ROOT" -name "spec.llmfeed.json" -type f 2>/dev/null || echo "Aucun spec.llmfeed.json trouvé"
    exit 1
fi

if [ -f "$PROJECT_ROOT/00_shortcut/spec-essential.llmfeed.json" ]; then
    echo "✅ spec-essential.llmfeed.json créé"
    LITE_SIZE=$(du -h "$PROJECT_ROOT/00_shortcut/spec-essential.llmfeed.json" | cut -f1)
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

echo "=== 🗑️ Nettoyage de $TARGET_EXPORT ==="
rm -rf "$TARGET_EXPORT"/*

echo "=== 📂 Synchronisation vers $TARGET_EXPORT ==="
mkdir -p "$TARGET_EXPORT"

# Fonction pour détecter et utiliser rsync avec fallbacks Windows
sync_files() {
    local source="$1"
    local target="$2"
    
    # Essayer de trouver rsync dans différents emplacements
    RSYNC_CMD=""
    
    # Chocolatey path (Windows)
    if [ -f "/c/ProgramData/chocolatey/bin/rsync.exe" ]; then
        RSYNC_CMD="/c/ProgramData/chocolatey/bin/rsync.exe"
        echo "📦 Utilisation de Chocolatey rsync: $RSYNC_CMD"
    # Standard Unix locations
    elif command -v rsync >/dev/null 2>&1; then
        RSYNC_CMD="rsync"
        echo "📦 Utilisation de rsync standard: $RSYNC_CMD"
    # WSL rsync (Windows Subsystem for Linux)
    elif command -v wsl >/dev/null 2>&1; then
        echo "🐧 Utilisation de rsync via WSL"
        wsl rsync -av \
            --delete \
            --exclude '.git/' \
            --exclude 'local-only/' \
            --exclude 'update-and-push.sh' \
            --exclude '.gitignore' \
            --exclude '__pycache__/' \
            --exclude '*.pyc' \
            "$source" "$target"
        return $?
    fi
    
    # Utiliser rsync si trouvé
    if [ -n "$RSYNC_CMD" ]; then
        "$RSYNC_CMD" -av \
            --delete \
            --exclude '.git/' \
            --exclude 'local-only/' \
            --exclude 'update-and-push.sh' \
            --exclude '.gitignore' \
            --exclude '__pycache__/' \
            --exclude '*.pyc' \
            "$source" "$target"
        return $?
    fi
    
    # Fallbacks si rsync non disponible
    echo "⚠️  rsync non trouvé, utilisation de fallback"
    
    # Alternative Windows avec robocopy (si disponible)
    if command -v robocopy >/dev/null 2>&1; then
        echo "🪟 Utilisation de robocopy (Windows)"
        # robocopy utilise une syntaxe différente
        robocopy "$source" "$target" /E /XD .git local-only __pycache__ /XF update-and-push.sh .gitignore *.pyc
        # robocopy retourne 1 pour succès avec copie
        local robocopy_exit=$?
        if [ $robocopy_exit -le 1 ]; then
            return 0
        else
            return 1
        fi
    else
        echo "📁 Utilisation de cp (fallback universel)"
        # Copier tout le contenu
        cp -r "$source"/* "$target/" 2>/dev/null || true
        
        # Puis supprimer les éléments indésirables
        rm -rf "$target/.git" 2>/dev/null || true
        rm -rf "$target/local-only" 2>/dev/null || true
        rm -f "$target/update-and-push.sh" 2>/dev/null || true
        rm -f "$target/.gitignore" 2>/dev/null || true
        find "$target" -name "*.pyc" -delete 2>/dev/null || true
        find "$target" -name "__pycache__" -type d -exec rm -rf {} + 2>/dev/null || true
        return 0
    fi
}

# Utiliser la fonction de synchronisation intelligente
if sync_files "./" "$TARGET_EXPORT/"; then
    echo "=== ✅ Synchronisation vers $TARGET_EXPORT terminée ==="
else
    echo "❌ ERREUR lors de la synchronisation"
    exit 1
fi

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
COMMIT_MSG="🔄 Update exported spec (00_shortcut structure + intelligent processing)"
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
echo "📁 Structure créée (VERSION FINALE):"
echo "  - 00_shortcut/spec.llmfeed.json (complet avec shortcut bundle)"
echo "  - 00_shortcut/spec-essential.llmfeed.json (allégé)"
echo "  - public/exports/spec/ (copie complète)"
echo "  - public/.well-known/exports/ (specs uniquement)"
echo ""
echo "🆕 NOUVEAU dans cette version:"
echo "  - ✅ Traitement intelligent de 00_shortcut/ (templates, exemples, docs)"
echo "  - ✅ Exclusions ciblées (pas de récursion sur les outputs)"
echo "  - ✅ Guidance mapping appliqué aux templates"
echo "  - ✅ Section 'shortcut' dans la spec finale"
echo "  - ✅ Synchronisation Windows compatible"
echo ""
echo "🔗 Accès:"
echo "  - Spec complète: https://wellknownmcp.org/.well-known/exports/spec.llmfeed.json"
echo "  - Spec essentielle: https://wellknownmcp.org/.well-known/exports/spec-essential.llmfeed.json"
echo "  - Export complet: https://wellknownmcp.org/exports/spec/"
echo ""
echo "🧠 La spec contient maintenant:"
echo "  - Sections: foundations, implementation, technical, examples, shortcut"
echo "  - Templates analysés et catégorisés par feed_type"
echo "  - Guidance pour déploiement et customisation"
echo "  - Notes d'implémentation pour chaque bundle"