#!/bin/bash

# 🧹 Script de nettoyage automatique MCP
# À placer à la racine du projet

set -e  # Arrêter en cas d'erreur

# Couleurs pour l'affichage
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🧹 Démarrage du nettoyage MCP...${NC}"

# Vérifier qu'on est à la racine avec la bonne structure
if [[ ! -d "local-only/scripts" || ! -f "local-only/scripts/clean-mcp-files.js" ]]; then
    echo -e "${RED}❌ Erreur: Structure local-only/ introuvable${NC}"
    echo -e "   Structure attendue à partir de la racine:"
    echo -e "   ."
    echo -e "   ├── run-cleanup.sh              <- ici"
    echo -e "   ├── local-only/"
    echo -e "   │   ├── scripts/"
    echo -e "   │   │   └── clean-mcp-files.js"
    echo -e "   │   └── reports/"
    echo -e "   └── *.md"
    echo -e ""
    echo -e "   Pour créer la structure:"
    echo -e "   ${BLUE}mkdir -p local-only/{scripts,backups,reports,drafts,config}${NC}"
    exit 1
fi

# Dossier source (dossier courant)
SOURCE_DIR="."

# Vérifier qu'il y a des fichiers .md
md_count=$(find "$SOURCE_DIR" -maxdepth 3 -name "*.md" -type f | wc -l)
if [[ $md_count -eq 0 ]]; then
    echo -e "${YELLOW}⚠️  Aucun fichier .md trouvé dans le projet${NC}"
    read -p "Continuer quand même ? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo -e "${GREEN}📁 Dossier projet: $(pwd)${NC}"
echo -e "${GREEN}📄 Fichiers .md trouvés: $md_count${NC}"

# 1. Créer un backup automatique
echo -e "\n${BLUE}📦 Création du backup...${NC}"
backup_dir="local-only/backups/$(date +%Y-%m-%d_%H-%M)_auto"
mkdir -p "$backup_dir"

# Copier tous les fichiers .md avec leur structure
find "$SOURCE_DIR" -name "*.md" -type f -not -path "./local-only/*" | while read file; do
    # Calculer le chemin relatif
    rel_path=${file#./}
    target_dir="$backup_dir/$(dirname "$rel_path")"
    mkdir -p "$target_dir"
    cp "$file" "$target_dir/"
done

echo -e "${GREEN}✅ Backup créé: $backup_dir${NC}"

# 2. Afficher un résumé avant traitement
echo -e "\n${BLUE}🔍 Analyse préliminaire...${NC}"
claude_links=$(find "$SOURCE_DIR" -name "*.md" -not -path "./local-only/*" -exec grep -l "claude\.ai" {} \; 2>/dev/null | wc -l)
missing_frontmatter=$(find "$SOURCE_DIR" -name "*.md" -not -path "./local-only/*" -exec sh -c 'head -1 "$1" | grep -q "^---$" || echo "$1"' _ {} \; | wc -l)

echo -e "   🤖 Fichiers avec liens Claude: $claude_links"
echo -e "   📝 Fichiers sans frontmatter: $missing_frontmatter"

# 3. Confirmation utilisateur
echo -e "\n${YELLOW}⚠️  Le script va modifier les fichiers .md en place${NC}"
echo -e "   Backup disponible: $backup_dir"
echo -e "   Fichiers dans local-only/ seront ignorés"
read -p "Continuer ? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}🛑 Annulé par l'utilisateur${NC}"
    exit 0
fi

# 4. Exécuter le nettoyage depuis le bon dossier
echo -e "\n${BLUE}🚀 Exécution du nettoyage...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js n'est pas installé${NC}"
    exit 1
fi

# Se déplacer dans le dossier scripts et exécuter
cd local-only/scripts/
node clean-mcp-files.js "../../"
cleanup_exit_code=$?

# Revenir à la racine
cd ../../

# 5. Vérifier les résultats
if [[ $cleanup_exit_code -eq 0 ]]; then
    echo -e "\n${GREEN}✅ Nettoyage terminé avec succès !${NC}"
    
    # Vérifier si le rapport existe
    report_path="local-only/reports/link-cleanup-report.json"
    if [[ -f "$report_path" ]]; then
        echo -e "${GREEN}📊 Rapport disponible: $report_path${NC}"
        
        # Afficher un résumé du rapport
        if command -v jq &> /dev/null; then
            echo -e "\n${BLUE}📈 Résumé des modifications:${NC}"
            jq -r '.summary | to_entries[] | "   \(.key): \(.value)"' "$report_path"
            
            broken_links=$(jq -r '.summary.externalLinksBroken' "$report_path")
            if [[ "$broken_links" -gt 0 ]]; then
                echo -e "\n${YELLOW}⚠️  $broken_links liens externes cassés détectés${NC}"
                echo -e "   Voir le rapport pour les détails"
            fi
        else
            # Affichage basique sans jq
            echo -e "\n${BLUE}📈 Résumé disponible dans: $report_path${NC}"
        fi
    fi
    
    # Suggestions pour la suite
    echo -e "\n${BLUE}🎯 Étapes suivantes recommandées:${NC}"
    echo -e "   1. Examiner le rapport: ${report_path}"
    echo -e "   2. Vérifier les changements: git diff"
    echo -e "   3. Corriger manuellement les liens cassés signalés"
    echo -e "   4. Relire les frontmatters ajoutés"
    echo -e "   5. Tester sur votre site local"
    echo -e "   6. Commit final: git add . && git commit -m 'Clean MCP files'"
    
else
    echo -e "\n${RED}❌ Erreur lors du nettoyage (code: $cleanup_exit_code)${NC}"
    echo -e "   Backup disponible pour restaurer: $backup_dir"
    exit $cleanup_exit_code
fi

# 6. Proposer d'ouvrir le rapport
if [[ -f "local-only/reports/link-cleanup-report.json" ]]; then
    echo -e "\n${YELLOW}Voulez-vous ouvrir le rapport ? (y/N)${NC}"
    read -p "" -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if command -v code &> /dev/null; then
            code "local-only/reports/link-cleanup-report.json"
        elif command -v open &> /dev/null; then
            open "local-only/reports/link-cleanup-report.json"
        elif command -v xdg-open &> /dev/null; then
            xdg-open "local-only/reports/link-cleanup-report.json"
        else
            echo -e "${BLUE}📊 Rapport: $(realpath local-only/reports/link-cleanup-report.json)${NC}"
        fi
    fi
fi

echo -e "\n${GREEN}🎉 Nettoyage MCP terminé !${NC}"