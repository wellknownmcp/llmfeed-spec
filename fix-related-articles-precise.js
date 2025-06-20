#!/usr/bin/env node

/**
 * Script pour corriger les relatedArticles - VERSION SANS DÉPENDANCES
 * Parse le frontmatter YAML manuellement
 */

const fs = require('fs')
const path = require('path')

// 🎯 Configuration
const SPEC_ROOT = './' // Ajustez selon votre structure
const DRY_RUN = false // Mettre à false pour appliquer les changements

// 🗺️ Mapping basé sur votre arborescence exacte
const KNOWN_SLUGS = {
  // 01_llmfeed/
  'llmfeed': '01_llmfeed/llmfeed',
  'llmfeed_block-reference': '01_llmfeed/llmfeed_block-reference',
  'llmfeed-mime': '01_llmfeed/llmfeed-mime',
  'understanding-llmfeed': '01_llmfeed/understanding-llmfeed',
  'wellknown': '01_llmfeed/wellknown',
  
  // 02_llmfeed_feedtype/
  'llmfeed_feedtype_agent-economy': '02_llmfeed_feedtype/llmfeed_feedtype_agent-economy',
  'llmfeed_feedtype_capabilities': '02_llmfeed_feedtype/llmfeed_feedtype_capabilities',
  'llmfeed_feedtype_credential': '02_llmfeed_feedtype/llmfeed_feedtype_credential',
  'llmfeed_feedtype_export': '02_llmfeed_feedtype/llmfeed_feedtype_export',
  'llmfeed_feedtype_llm-index': '02_llmfeed_feedtype/llmfeed_feedtype_llm-index',
  'llmfeed_feedtype_manifesto': '02_llmfeed_feedtype/llmfeed_feedtype_manifesto',
  'llmfeed_feedtype_mcp': '02_llmfeed_feedtype/llmfeed_feedtype_mcp',
  'llmfeed_feedtype_mobile-app': '02_llmfeed_feedtype/llmfeed_feedtype_mobile-app',
  'llmfeed_feedtype_pricing': '02_llmfeed_feedtype/llmfeed_feedtype_pricing',
  'llmfeed_feedtype_prompt': '02_llmfeed_feedtype/llmfeed_feedtype_prompt',
  'llmfeed_feedtype_session': '02_llmfeed_feedtype/llmfeed_feedtype_session',
  
  // 03_llmfeed_extensions/
  'llmfeed_extensions_api': '03_llmfeed_extensions/llmfeed_extensions_api',
  'llmfeed_extensions_audience': '03_llmfeed_extensions/llmfeed_extensions_audience',
  'llmfeed_extensions_homomorphic': '03_llmfeed_extensions/llmfeed_extensions_homomorphic',
  'llmfeed_extensions_other': '03_llmfeed_extensions/llmfeed_extensions_other',
  'llmfeed_extensions_prompts': '03_llmfeed_extensions/llmfeed_extensions_prompts',
  'llmfeed_extensions_signatures': '03_llmfeed_extensions/llmfeed_extensions_signatures',
  
  // 04_agent-behavior/
  'agent-behavior': '04_agent-behavior/agent-behavior',
  'agent-behavior-flagging': '04_agent-behavior/agent-behavior-flagging',
  'agent-behavior_cache-policy': '04_agent-behavior/agent-behavior_cache-policy',
  'agent-behavior_certified-only': '04_agent-behavior/agent-behavior_certified-only',
  'agent-behavior_human-consent': '04_agent-behavior/agent-behavior_human-consent',
  'agent-behavior_risk-scoring': '04_agent-behavior/agent-behavior_risk-scoring',
  'agent-behavior_session-awareness': '04_agent-behavior/agent-behavior_session-awareness',
  'agent-behavior_user-spaces': '04_agent-behavior/agent-behavior_user-spaces',
  'agent-guidance': '04_agent-behavior/agent-guidance'
}

// 🧩 Parser YAML simple pour frontmatter
function parseFrontmatter(content) {
  // Vérifier s'il y a un frontmatter YAML
  if (!content.startsWith('---\n')) {
    return { data: {}, content }
  }
  
  // Trouver la fin du frontmatter
  const endMatch = content.substring(4).indexOf('\n---\n')
  if (endMatch === -1) {
    return { data: {}, content }
  }
  
  const frontmatterText = content.substring(4, endMatch + 4)
  const remainingContent = content.substring(endMatch + 8)
  
  // Parser le YAML de base (simple)
  const data = {}
  const lines = frontmatterText.split('\n')
  let currentKey = null
  let inArray = false
  let arrayItems = []
  
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    
    // Détecter les arrays
    if (trimmed.startsWith('- ')) {
      if (inArray && currentKey) {
        // Nettoyer la valeur (enlever guillemets si présents)
        let value = trimmed.substring(2).trim()
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1)
        }
        arrayItems.push(value)
      }
      continue
    }
    
    // Si on était en array et qu'on n'est plus dedans, sauvegarder
    if (inArray && !trimmed.startsWith('- ') && currentKey) {
      data[currentKey] = arrayItems
      inArray = false
      arrayItems = []
      currentKey = null
    }
    
    // Détecter les clés
    if (trimmed.includes(':')) {
      const [key, ...valueParts] = trimmed.split(':')
      const value = valueParts.join(':').trim()
      
      if (value === '') {
        // Possiblement un array qui suit
        currentKey = key.trim()
        inArray = true
        arrayItems = []
      } else {
        // Valeur simple
        let cleanValue = value
        if (cleanValue.startsWith('"') && cleanValue.endsWith('"')) {
          cleanValue = cleanValue.slice(1, -1)
        }
        data[key.trim()] = cleanValue
      }
    }
  }
  
  // Sauvegarder le dernier array si nécessaire
  if (inArray && currentKey && arrayItems.length > 0) {
    data[currentKey] = arrayItems
  }
  
  return { data, content: remainingContent }
}

// 🔧 Reconstruire le frontmatter YAML
function stringifyFrontmatter(data, content) {
  let yaml = '---\n'
  
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      yaml += `${key}:\n`
      for (const item of value) {
        yaml += `  - "${item}"\n`
      }
    } else {
      yaml += `${key}: "${value}"\n`
    }
  }
  
  yaml += '---\n'
  return yaml + content
}

// 🔍 Analyser un fichier
function analyzeFrontmatter(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const parsed = parseFrontmatter(fileContent)
    const front = parsed.data || {}
    
    if (front.relatedArticles && Array.isArray(front.relatedArticles)) {
      return {
        file: filePath,
        relatedArticles: front.relatedArticles,
        parsedData: parsed,
        needsUpdate: front.relatedArticles.some(article => 
          typeof article === 'string' && KNOWN_SLUGS[article]
        )
      }
    }
    
    return null
  } catch (error) {
    console.error(`❌ Erreur lecture ${filePath}:`, error.message)
    return null
  }
}

// 🔄 Mettre à jour un fichier
function updateFile(analysis) {
  try {
    const front = analysis.parsedData.data
    const content = analysis.parsedData.content
    
    // Mettre à jour les relatedArticles
    const updatedRelated = analysis.relatedArticles.map(article => {
      if (typeof article === 'string' && KNOWN_SLUGS[article]) {
        console.log(`   🔄 "${article}" → "${KNOWN_SLUGS[article]}"`)
        return KNOWN_SLUGS[article]
      }
      return article
    })
    
    front.relatedArticles = updatedRelated
    
    if (!DRY_RUN) {
      const newContent = stringifyFrontmatter(front, content)
      fs.writeFileSync(analysis.file, newContent, 'utf-8')
      console.log(`   ✅ Fichier mis à jour`)
    } else {
      console.log(`   🔍 [DRY RUN] Nouvelles valeurs:`, updatedRelated)
    }
    
    return true
  } catch (error) {
    console.error(`   ❌ Erreur mise à jour:`, error.message)
    return false
  }
}

// 🚀 Fonction principale
function main() {
  console.log('🎯 Correction des relatedArticles (SANS DÉPENDANCES)\n')
  
  if (DRY_RUN) {
    console.log('🔍 MODE DRY RUN - Aucun fichier ne sera modifié\n')
  }
  
  console.log(`📊 ${Object.keys(KNOWN_SLUGS).length} mappings disponibles\n`)
  
  const filesToProcess = []
  
  // Scanner tous les fichiers markdown
  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) {
      console.error(`❌ Dossier ${dir} introuvable`)
      return
    }
    
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath)
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const analysis = analyzeFrontmatter(fullPath)
        if (analysis && analysis.needsUpdate) {
          filesToProcess.push(analysis)
        }
      }
    }
  }
  
  // Scanner le dossier spec
  scanDirectory(SPEC_ROOT)
  
  // Afficher les fichiers à traiter
  console.log(`🔍 ${filesToProcess.length} fichier(s) nécessitent une correction:\n`)
  
  let processed = 0
  for (const analysis of filesToProcess) {
    const relativePath = path.relative(process.cwd(), analysis.file)
    console.log(`📝 ${relativePath}`)
    console.log(`   Actuels:`, analysis.relatedArticles)
    
    // Montrer ce qui va changer
    const willChange = analysis.relatedArticles
      .filter(article => typeof article === 'string' && KNOWN_SLUGS[article])
      .map(article => `"${article}" → "${KNOWN_SLUGS[article]}"`)
    
    if (willChange.length > 0) {
      console.log(`   Changements:`, willChange)
    }
    
    // Appliquer les changements
    updateFile(analysis)
    processed++
    
    console.log('')
  }
  
  // Résumé final
  console.log(`🎉 Traitement terminé!`)
  console.log(`📊 Fichiers traités: ${processed}`)
  
  if (DRY_RUN && filesToProcess.length > 0) {
    console.log('\n💡 Pour appliquer les changements:')
    console.log('   1. Vérifiez les changements proposés ci-dessus')
    console.log('   2. Modifiez DRY_RUN = false dans le script')
    console.log('   3. Relancez le script: node fix-related-articles-no-deps.js')
  }
}

// 🎯 Lancement
if (require.main === module) {
  main()
}

module.exports = { KNOWN_SLUGS, analyzeFrontmatter, updateFile, parseFrontmatter }